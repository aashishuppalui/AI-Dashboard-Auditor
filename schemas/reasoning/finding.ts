import { z } from "zod";
import { SeveritySchema } from "../common";

export const FindingSchema = z.object({
  /**
   * Unique identifier for this finding.
   * Used to reference related evidence and recommendations.
   */
  id: z.string().min(1),

  /**
   * Short, user-friendly title of the finding.
   * Example:
   * "Weak Visual Hierarchy"
   */
  title: z
    .string()
    .min(5)
    .max(120),

  /**
   * What the AI directly observed from the dashboard.
   * This should be an objective statement.
   */
  observation: z
    .string()
    .min(20)
    .max(500),

  /**
   * Why this observation matters from a UX perspective.
   * This is the reasoning behind the finding.
   */
  reasoning: z
    .string()
    .min(20)
    .max(1000),

  /**
   * Overall severity of the finding.
   */
  severity: SeveritySchema,

  /**
   * AI confidence score between 0 and 1.
   * Example:
   * 0.92 = 92% confidence
   */
  confidence: z
    .number()
    .min(0)
    .max(1),

  /**
   * References to evidence IDs that support this finding.
   * Every finding must be backed by at least one evidence item.
   */
  supportedBy: z
    .array(z.string().min(1))
    .min(1),
});

export type Finding = z.infer<typeof FindingSchema>;