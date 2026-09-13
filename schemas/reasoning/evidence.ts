import { z } from "zod";

/**
 * Approximate visual region where the evidence
 * appears in the dashboard screenshot.
 *
 * Coordinates are normalized to a 0–1000 scale
 * so they remain useful regardless of image size.
 */
export const EvidenceRegionSchema = z.object({
  /**
   * Horizontal position from the left edge.
   */
  x: z
    .number()
    .min(0)
    .max(1000),

  /**
   * Vertical position from the top edge.
   */
  y: z
    .number()
    .min(0)
    .max(1000),

  /**
   * Width of the evidence region.
   */
  width: z
    .number()
    .min(1)
    .max(1000),

  /**
   * Height of the evidence region.
   */
  height: z
    .number()
    .min(1)
    .max(1000),
});

export type EvidenceRegion = z.infer<typeof EvidenceRegionSchema>;

/**
 * A single observable piece of evidence
 * extracted directly from the dashboard.
 *
 * Evidence represents what is visibly present
 * in the interface.
 *
 * It does not contain UX reasoning, impact,
 * severity, or recommendations.
 */
export const ObservableEvidenceItemSchema = z.object({
  /**
   * Unique identifier for this evidence.
   */
  id: z
    .string()
    .regex(/^EV-\d{3}$/, "Evidence ID must use the format EV-001."),

  /**
   * Short factual label describing the visible evidence.
   */
  title: z
    .string()
    .min(3)
    .max(80),

  /**
   * Objective observation from the interface.
   */
  observation: z
    .string()
    .min(20)
    .max(500),

  /**
   * Primary location of the evidence.
   */
  location: z.enum([
    "Header",
    "Left Sidebar",
    "Top Navigation",
    "Main Content",
    "Footer",
    "Right Panel",
  ]),

  /**
   * Confidence that the observation is correctly
   * identified from the screenshot.
   */
  confidence: z
    .number()
    .min(0)
    .max(1),

  /**
   * Approximate visual region containing the evidence.
   *
   * Optional during the first validation phase.
   * If the evidence cannot be reliably localized,
   * the model may omit this field.
   */
  region: EvidenceRegionSchema.optional(),
});

export type ObservableEvidenceItem = z.infer<
  typeof ObservableEvidenceItemSchema
>;

/**
 * Complete observable-evidence response
 * returned by the AI evidence analysis step.
 *
 * MVP contract:
 * - Minimum 5 observations
 * - Maximum 10 observations
 * - Evidence IDs must be unique
 */
export const EvidenceSchema = z
  .object({
    /**
     * Observable evidence items identified in the dashboard.
     */
    evidence: z
      .array(ObservableEvidenceItemSchema)
      .min(5)
      .max(10),

    /**
     * Overall confidence in the evidence extraction.
     */
    confidence: z
      .number()
      .min(0)
      .max(1),
  })
  .superRefine((data, ctx) => {
    const ids = data.evidence.map((item) => item.id);
    const uniqueIds = new Set(ids);

    if (uniqueIds.size !== ids.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["evidence"],
        message: "Evidence IDs must be unique.",
      });
    }

    const expectedIds = data.evidence.map(
      (_, index) => `EV-${String(index + 1).padStart(3, "0")}`
    );

    const idsAreSequential = data.evidence.every(
      (item, index) => item.id === expectedIds[index]
    );

    if (!idsAreSequential) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["evidence"],
        message:
          "Evidence IDs must be sequential starting from EV-001.",
      });
    }
  });

export type Evidence = z.infer<typeof EvidenceSchema>;

