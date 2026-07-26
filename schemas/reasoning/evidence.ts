import { z } from "zod";

export const EvidenceItemSchema = z.object({
  id: z.string(),

  title: z.string(),

  observation: z.string(),

  location: z.string(),

  confidence: z.number().min(0).max(1),
});

export const EvidenceSchema = z.object({
  evidence: z.array(EvidenceItemSchema),

  confidence: z.number().min(0).max(1),
});

export type Evidence = z.infer<typeof EvidenceSchema>;

export type EvidenceItem =
  z.infer<typeof EvidenceItemSchema>;