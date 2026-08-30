import { z } from "zod";
import { ConfidenceSchema } from "../common";

/**
 * Shared fields returned when understanding the uploaded interface.
 *
 * These fields intentionally have relaxed validation here because
 * non-dashboard images may not contain meaningful dashboard
 * information.
 */
const ExecutiveIntelligenceBaseSchema = z.object({
  /**
   * Type of interface analysed.
   */
  interfaceType: z.string().max(50),

  /**
   * AI's understanding of the interface's primary purpose.
   */
  primaryGoal: z.string().max(300),

  /**
   * Intended primary audience.
   */
  targetUsers: z.array(z.string()),

  /**
   * The primary decision the interface appears to support.
   */
  primaryDecision: z.string().max(300),

  /**
   * Main information areas that should inform the decision.
   */
  decisionFocus: z
    .array(z.string().min(2))
    .max(6),

  /**
   * Important UI patterns or components identified.
   */
  detectedComponents: z.array(z.string()),

  /**
   * Overall confidence in the understanding.
   */
  confidence: ConfidenceSchema,
});

/**
 * Understanding result.
 *
 * Dashboard:
 * Requires meaningful dashboard intelligence.
 *
 * Non-dashboard:
 * Allows empty/non-applicable fields because the interface
 * does not need to satisfy dashboard-specific requirements.
 */
export const ExecutiveIntelligenceSchema =
  z.discriminatedUnion("isDashboard", [
    ExecutiveIntelligenceBaseSchema.extend({
      isDashboard: z.literal(true),

      interfaceType: z
        .string()
        .min(3)
        .max(50),

      primaryGoal: z
        .string()
        .min(10)
        .max(300),

      targetUsers: z
        .array(z.string())
        .min(1),

      primaryDecision: z
        .string()
        .min(10)
        .max(300),

      decisionFocus: z
        .array(z.string().min(2))
        .min(3)
        .max(6),

      detectedComponents: z
        .array(z.string())
        .min(1),
    }),

    ExecutiveIntelligenceBaseSchema.extend({
      isDashboard: z.literal(false),
    }),
  ]);

export type ExecutiveIntelligence =
  z.infer<typeof ExecutiveIntelligenceSchema>;