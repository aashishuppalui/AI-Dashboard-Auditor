import { z } from "zod";

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