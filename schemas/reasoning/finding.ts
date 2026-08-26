import { z } from "zod";

export const FindingSchema = z.object({
  /**
   * Unique identifier for this finding.
   */
  id: z.string().min(1),

  /**
   * Short, user-friendly title of the finding.
   */
  title: z
    .string()
    .min(5)
    .max(240),

  /**
   * Detailed explanation of the UX problem
   * identified from the dashboard.
   */
  summary: z
    .string()
    .min(20)
    .max(2000),

  /**
   * Overall severity of the finding.
   *
   * The AI currently returns title-case values
   * such as "High", "Medium", etc.
   */
  severity: z.enum([
    "Critical",
    "High",
    "Medium",
    "Low",
  ]),

  /**
   * References to observable evidence IDs
   * supporting this finding.
   */
  supportedBy: z
    .array(z.string().min(1))
    .min(1),

  /**
   * AI confidence score between 0 and 1.
   */
  confidence: z
    .number()
    .min(0)
    .max(1),
});

export type Finding = z.infer<typeof FindingSchema>;