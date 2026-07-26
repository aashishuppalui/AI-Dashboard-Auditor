import { z } from "zod";

import { MetadataSchema } from "./metadata";
import { ExecutiveIntelligenceSchema } from "../context/executive-intelligence";
import { AIUnderstandingSchema } from "../context/ai-understanding";
import { HighestImpactFindingSchema } from "../reasoning/finding";
import { EvidenceSchema } from "../reasoning/evidence";
import { RecommendationSchema } from "../reasoning/recommendation";
import { ExecutiveSummarySchema } from "./summary";

export const ReviewResponseSchema = z.object({
  metadata: MetadataSchema,

  executiveIntelligence: ExecutiveIntelligenceSchema,

  aiUnderstanding: AIUnderstandingSchema,

  highestImpactFinding: HighestImpactFindingSchema,

  supportingEvidence: z.array(EvidenceSchema),

  recommendations: z.array(RecommendationSchema),

  executiveSummary: ExecutiveSummarySchema,
});

export type ReviewResponse = z.infer<typeof ReviewResponseSchema>;