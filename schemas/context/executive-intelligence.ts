import { z } from "zod";
import { ConfidenceSchema } from "../common";

/**
 * Shared fields returned when understanding the uploaded interface.
 */
const ExecutiveIntelligenceBaseSchema = z.object({
  /**
   * Type of interface analysed.
   * Example: Enterprise Dashboard
   */
  interfaceType: z
    .string()
    .min(1)
    .max(50),

  /**
   * AI's understanding of the interface's
   * primary purpose.
   */
  primaryGoal: z
    .string()
    .min(1)
    .max(300),

  /**
   * Intended primary audience.
   */
  targetUsers: z
    .array(z.string()),

  /**
   * The primary decision the interface
   * appears to support.
   */
  primaryDecision: z
    .string()
    .min(1)
    .max(300),

  /**
   * The main information areas that should
   * inform the user's decision.
   */
  decisionFocus: z
    .array(z.string().min(2))
    .max(6),

  /**
   * Important UI patterns or components identified.
   */
  detectedComponents: z
    .array(z.string()),

  /**
   * Overall confidence in understanding
   * the interface.
   */
  confidence: ConfidenceSchema,
});

/**
 * Understanding result.
 *
 * A dashboard must contain meaningful decision
 * information and detected components.
 *
 * A non-dashboard may legitimately contain
 * empty arrays because those fields are not
 * applicable.
 */
export const ExecutiveIntelligenceSchema =
  z.discriminatedUnion("isDashboard", [
    ExecutiveIntelligenceBaseSchema.extend({
      isDashboard: z.literal(true),

      targetUsers: z
        .array(z.string())
        .min(1),

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