import { z } from "zod";

/**
 * A single observable piece of evidence
 * extracted directly from the dashboard.
 *
 * This represents what is visibly present in the interface.
 * It does not contain UX reasoning, impact, or severity.
 */
export const ObservableEvidenceItemSchema = z.object({
  /**
   * Unique identifier for this evidence.
   */
  id: z.string().min(1),

  /**
   * Short label describing the visible evidence.
   */
  title: z
    .string()
    .min(5)
    .max(120),

  /**
   * Objective observation from the interface.
   * Should describe only what is visible.
   */
  observation: z
    .string()
    .min(20)
    .max(500),

  /**
   * Approximate location of the evidence
   * within the interface.
   *
   * Example:
   * "Header"
   * "Main Content"
   * "Left Sidebar"
   */
  location: z
    .string()
    .min(1)
    .max(120),

  /**
   * Confidence that the observation is correctly
   * identified from the interface.
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
 */
export const EvidenceSchema = z.object({
  /**
   * Observable evidence items identified in the dashboard.
   */
  evidence: z
    .array(ObservableEvidenceItemSchema)
    .min(1),

  /**
   * Overall confidence in the evidence extraction.
   */
  confidence: z
    .number()
    .min(0)
    .max(1),
});

export type Evidence = z.infer<typeof EvidenceSchema>;