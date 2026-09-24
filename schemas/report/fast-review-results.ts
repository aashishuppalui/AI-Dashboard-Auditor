import { z } from "zod";

import { ExecutiveIntelligenceSchema } from "../context/executive-intelligence";
import { FindingSchema } from "../reasoning/finding";
import { EvidenceSchema } from "../reasoning/evidence";

export const FastReviewResultSchema = z.object({
  executiveIntelligence:
    ExecutiveIntelligenceSchema,

  highestImpactFinding:
    FindingSchema,

  supportingEvidence:
    EvidenceSchema,
});

export type FastReviewResult =
  z.infer<typeof FastReviewResultSchema>;