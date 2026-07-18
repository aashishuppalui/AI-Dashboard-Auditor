import { z } from "zod";

export const PriorityActionSchema = z.object({
  id: z.string(),

  priority: z.enum(["P0", "P1", "P2", "P3"]),

  priorityLabel: z.enum([
    "Highest",
    "High",
    "Medium",
    "Low",
  ]),

  title: z.string(),

  issue: z.string(),

  whyItMatters: z.string(),

  recommendation: z.string(),

  expectedImpact: z.array(z.string()),
});

export const PriorityActionsSchema =
  z.array(PriorityActionSchema);

export type PriorityAction =
  z.infer<typeof PriorityActionSchema>;