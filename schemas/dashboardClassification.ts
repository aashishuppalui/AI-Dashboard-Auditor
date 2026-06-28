import { z } from "zod";

export const DashboardClassificationSchema = z.object({
  dashboardSummary: z.string().min(10),

  dashboardType: z.string().min(1),

  primaryUser: z.string().min(1),

  primaryDecisionSupported: z.string().min(1),

  confidence: z.number().min(0).max(100),

  reasoning: z.array(z.string()).min(1),
});

export type DashboardClassificationResponse =
  z.infer<typeof DashboardClassificationSchema>;