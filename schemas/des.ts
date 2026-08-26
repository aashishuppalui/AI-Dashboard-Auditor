import { z } from "zod";

export const DESDimensionSchema = z.object({
  /**
   * Name of the decision-effectiveness dimension.
   */
  dimension: z.enum([
    "Decision Clarity",
    "Information Relevance",
    "Information Hierarchy",
    "Decision Confidence",
    "Actionability",
  ]),

  /**
   * Score for this dimension.
   * Each dimension contributes 0–20 points.
   */
  score: z.number().min(0).max(20),

  /**
   * Evidence-based explanation for the score.
   */
  reasoning: z.string().min(20).max(500),

  /**
   * Evidence IDs supporting the evaluation.
   */
  supportingEvidence: z
    .array(z.string().min(1))
    .min(1),
});

export const DESSchema = z.object({
  /**
   * Final Decision Effectiveness Score.
   * Sum of all five dimensions.
   */
  score: z.number().min(0).max(100),

  /**
   * Human-readable interpretation of the score.
   */
  label: z.enum([
    "Excellent",
    "Good",
    "Needs Attention",
    "Weak",
    "Critical",
  ]),

  /**
   * Individual dimension scores.
   */
  dimensions: z
    .array(DESDimensionSchema)
    .length(5),
});

export type DESDimension = z.infer<
  typeof DESDimensionSchema
>;

export type DES = z.infer<typeof DESSchema>;