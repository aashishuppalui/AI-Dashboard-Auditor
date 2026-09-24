import { z } from "zod";

import { DESSchema } from "../des";
import { PriorityActionsSchema } from "../priorityAction";

export const ReviewEnrichmentResultSchema = z.object({
  /**
   * Decision Effectiveness Score.
   */
  des: DESSchema,

  /**
   * Highest-priority actions generated
   * from the finding and supporting evidence.
   */
  priorityActions: PriorityActionsSchema,
});

export type ReviewEnrichmentResult =
  z.infer<typeof ReviewEnrichmentResultSchema>;