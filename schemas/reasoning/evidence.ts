import { z } from "zod";
import { SeveritySchema } from "../common";

export const EvidenceSchema = z.object({
  /**
   * Unique identifier for this evidence.
   * Used by findings to reference supporting evidence.
   */
  id: z.string().min(1),

  /**
   * Short label shown in the report.
   * Example:
   * "Competing KPI Cards"
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
   * UX principle or heuristic explaining
   * why this observation matters.
   */
  reasoning: z
    .string()
    .min(20)
    .max(1000),

  /**
   * Business or usability impact.
   * Example:
   * "Users require additional scanning time to locate the primary KPI."
   */
  impact: z
    .string()
    .min(20)
    .max(500),

  /**
   * Indicates how severe this evidence is.
   */
  severity: SeveritySchema,
});

export type Evidence = z.infer<typeof EvidenceSchema>;