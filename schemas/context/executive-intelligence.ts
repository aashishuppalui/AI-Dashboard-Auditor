import { z } from "zod";
import { ConfidenceSchema } from "../common";

export const ExecutiveIntelligenceSchema = z.object({
  /**
   * Whether the uploaded interface qualifies
   * as a dashboard suitable for UX review.
   */
  isDashboard: z.boolean(),

  /**
   * Type of interface analysed.
   * Example: Enterprise Dashboard
   */
  interfaceType: z
    .string()
    .min(3)
    .max(50),

  /**
   * AI's understanding of the dashboard's
   * primary purpose.
   */
  primaryGoal: z
    .string()
    .min(10)
    .max(300),

  /**
   * Intended primary audience.
   * Example: Production Managers
   */
  targetUsers: z
    .array(z.string())
    .min(1),

  /**
   * The primary decision the interface
   * appears to support.
   */
  primaryDecision: z
    .string()
    .min(10)
    .max(300),

  /**
   * The main information areas that should
   * inform the user's decision.
   */
  decisionFocus: z
    .array(z.string().min(2))
    .min(1)
    .max(6),

  /**
   * Important UI patterns or components identified.
   * These remain available to the rest of the
   * review pipeline but are not shown as
   * executive-level intelligence.
   */
  detectedComponents: z
    .array(z.string())
    .min(1),

  /**
   * Overall confidence in understanding
   * the interface.
   */
  confidence: ConfidenceSchema,
});

export type ExecutiveIntelligence = z.infer<
  typeof ExecutiveIntelligenceSchema
>;