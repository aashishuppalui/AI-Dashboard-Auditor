import { z } from "zod";

export const PriorityActionSchema = z.object({
  id: z.string().regex(/^PA-\d{3}$/, "Priority Action ID must use the format PA-001."),

  priority: z.enum(["P0", "P1", "P2"]),

  priorityLabel: z.enum(["Highest", "High", "Medium"]),

  title: z.string().min(10).max(120),

  issue: z.string().min(20).max(400),

  whyItMatters: z.string().min(20).max(400),

  recommendation: z.string().min(20).max(500),

  expectedImpact: z.array(
    z.string().min(10).max(180)
  ).min(1).max(3),
});

export const PriorityActionsSchema = z.array(
  PriorityActionSchema
).length(3).superRefine((actions, ctx) => {
  const expectedIds = ["PA-001", "PA-002", "PA-003"];
  const actualIds = actions.map((action) => action.id);

  if (JSON.stringify(actualIds) !== JSON.stringify(expectedIds)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["id"],
      message: "Priority Action IDs must be PA-001, PA-002, PA-003 in order.",
    });
  }

  const expectedPriorities = ["P0", "P1", "P2"];
  const actualPriorities = actions.map((action) => action.priority);

  if (JSON.stringify(actualPriorities) !== JSON.stringify(expectedPriorities)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["priority"],
      message: "Priority Actions must contain exactly one P0, P1, and P2 in order.",
    });
  }
});

export type PriorityAction = z.infer<typeof PriorityActionSchema>;
export type PriorityActions = z.infer<typeof PriorityActionsSchema>;