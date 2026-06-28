import { z } from "zod";

export const EvidenceItemSchema = z.object({
  type: z.string(),

  severity: z.enum([
    "Low",
    "Medium",
    "High",
  ]),

  observation: z.string(),

  reasoning: z.string(),

  observable: z.boolean(),
});

export const EvidenceSchema = z.object({
  evidence: z.array(
    EvidenceItemSchema
  ),
});

export type Evidence =
  z.infer<typeof EvidenceSchema>;