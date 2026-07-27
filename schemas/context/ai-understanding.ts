import { z } from "zod";

export const AIUnderstandingSchema = z.object({
  /**
   * High-level understanding of the interface.
   */
  summary: z
    .string()
    .min(30)
    .max(500),

  /**
   * Business context inferred from the interface.
   */
  businessContext: z
    .string()
    .min(20)
    .max(500),

  /**
   * Assumptions made by the AI while analysing the dashboard.
   * Being explicit about assumptions builds user trust.
   */
  assumptions: z
    .array(z.string().min(10))
    .default([]),
});

export type AIUnderstanding = z.infer<
  typeof AIUnderstandingSchema
>;