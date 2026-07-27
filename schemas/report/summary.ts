import { z } from "zod";

export const ExecutiveSummarySchema = z.object({
  /**
   * Overall verdict of the UX review.
   * Example:
   * "The dashboard provides valuable information but suffers from weak visual hierarchy."
   */
  overallAssessment: z
    .string()
    .min(30)
    .max(500),

  /**
   * The single highest-priority action the user should take.
   */
  topPriority: z
    .string()
    .min(20)
    .max(300),

  /**
   * Positive aspects identified during the review.
   */
  strengths: z
    .array(z.string().min(10))
    .default([]),

  /**
   * Final takeaway for the designer.
   */
  closingRemark: z
    .string()
    .min(20)
    .max(300),
});

export type ExecutiveSummary = z.infer<
  typeof ExecutiveSummarySchema
>;