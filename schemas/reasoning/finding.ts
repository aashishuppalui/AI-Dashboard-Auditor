import { z } from "zod";

export const FindingSchema = z.object({
  /**
   * Unique identifier for this finding.
   */
  id: z.string().min(1),

  /**
   * Short, plain-language title of the finding.
   */
  title: z
    .string()
    .min(10)
    .max(120),

  /**
   * Plain-language explanation of the problem
   * and the decision consequence.
   */
  summary: z
    .string()
    .min(40)
    .max(500),

  /**
   * Importance of the finding to the primary decision.
   */
  severity: z.enum([
    "Critical",
    "High",
    "Medium",
    "Low",
  ]),

  /**
   * Observable evidence IDs supporting the finding.
   */
  supportedBy: z
    .array(z.string().min(1))
    .min(2),

  /**
   * AI confidence that the finding is correctly
   * supported by the supplied evidence.
   */
  confidence: z
    .number()
    .min(0)
    .max(1),
});

export type Finding = z.infer<typeof FindingSchema>;