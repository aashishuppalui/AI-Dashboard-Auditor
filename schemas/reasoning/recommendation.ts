import { z } from "zod";
import { PrioritySchema } from "../common";

export const RecommendationSchema = z.object({
  /**
   * Unique identifier for this recommendation.
   */
  id: z.string().min(1),

  /**
   * Short title displayed in the report.
   * Example:
   * "Prioritize Primary KPI"
   */
  title: z
    .string()
    .min(5)
    .max(120),

  /**
   * Specific action the designer should take.
   */
  action: z
    .string()
    .min(20)
    .max(500),

  /**
   * Why this recommendation is important.
   */
  rationale: z
    .string()
    .min(20)
    .max(1000),

  /**
   * Expected improvement after implementing the recommendation.
   */
  expectedOutcome: z
    .string()
    .min(20)
    .max(500),

  /**
   * Implementation priority.
   */
  priority: PrioritySchema,

  /**
   * References to the finding(s) this recommendation addresses.
   */
  relatedFindings: z
    .array(z.string().min(1))
    .min(1),
});

export type Recommendation = z.infer<typeof RecommendationSchema>;