import { z } from "zod";

export const PriorityActionSchema = z.object({
  id: z.string(),

  priority: z.enum(["P0", "P1", "P2"]),

  priorityLabel: z.enum([
    "Highest",
    "High",
    "Medium",
  ]),

  title: z
    .string()
    .min(8)
    .max(120),

  issue: z
    .string()
    .min(20)
    .max(400),

  whyItMatters: z
    .string()
    .min(20)
    .max(400),

  recommendation: z
    .string()
    .min(40)
    .max(250),

  expectedImpact: z
    .array(z.string().min(10).max(180))
    .min(2)
    .max(3),
});

export const PriorityActionsSchema =
  z
    .array(PriorityActionSchema)
    .length(3);

export type PriorityAction =
  z.infer<typeof PriorityActionSchema>;