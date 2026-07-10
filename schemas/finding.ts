import { z } from "zod";

export const FindingSchema = z.object({
  id: z.string(),

  title: z.string(),

  summary: z.string(),

  severity: z.enum([
    "Critical",
    "High",
    "Medium",
    "Low",
  ]),

  supportedBy: z.array(z.string()),

  confidence: z.number().min(0).max(1),
});

export type Finding =
  z.infer<typeof FindingSchema>;