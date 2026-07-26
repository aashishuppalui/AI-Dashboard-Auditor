import { z } from "zod";
import { ConfidenceSchema } from "../common";

export const ExecutiveIntelligenceSchema = z.object({
  /**
   * Type of interface analysed.
   * Example: Dashboard
   */
  interfaceType: z.string().min(3).max(50),

  /**
   * AI's understanding of the dashboard's primary purpose.
   * Example: Monitor manufacturing performance.
   */
  primaryGoal: z.string().min(10).max(300),

  /**
   * Intended primary audience.
   * Example: Operations Managers
   */
  targetUsers: z.array(z.string()).min(1),

  /**
   * Important UI patterns or components identified.
   * Example:
   * KPI Cards, Filters, Line Charts, Data Table
   */
  detectedComponents: z.array(z.string()).min(1),

  /**
   * Overall confidence in understanding the interface.
   */
  confidence: ConfidenceSchema,
});

export type ExecutiveIntelligence = z.infer<
  typeof ExecutiveIntelligenceSchema
>;