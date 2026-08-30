import { z } from "zod";

import { MetadataSchema } from "./metadata";
import { ExecutiveIntelligenceSchema } from "../context/executive-intelligence";
import { DESSchema } from "../des";
import { FindingSchema } from "../reasoning/finding";
import { EvidenceSchema } from "../reasoning/evidence";
import { PriorityActionsSchema } from "../priorityAction";

export const ReviewResponseSchema = z.object({
  /**
   * Review metadata.
   */
  metadata: MetadataSchema,

  /**
   * AI's understanding of the dashboard.
   */
  executiveIntelligence: ExecutiveIntelligenceSchema,

  /**
   * Decision Effectiveness Score.
   */
  des: DESSchema,

  /**
   * Highest-impact UX finding identified
   * from the observable evidence.
   */
  highestImpactFinding: FindingSchema,

  /**
   * Observable evidence extracted from
   * the dashboard.
   */
  supportingEvidence: EvidenceSchema,

  /**
   * Highest-priority actions generated
   * from the finding and supporting evidence.
   */
  priorityActions: PriorityActionsSchema,
});

export type ReviewResponse = z.infer<
  typeof ReviewResponseSchema
>;