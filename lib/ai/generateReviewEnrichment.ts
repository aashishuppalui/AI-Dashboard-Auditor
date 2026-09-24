import {
  ReviewEnrichmentResultSchema,
  type ReviewEnrichmentResult,
} from "../../schemas/report/review-enrichment-result";

import { generateDES } from "./engines/des";
import { generatePriorityActions } from "./engines/priorityActions";

import { buildDESContext } from "./context/des";
import { buildPriorityActionsContext } from "./context/priorityActions";

import type { FastReviewResult } from "../../schemas/report/fast-review-results";

export async function generateReviewEnrichment(
  fastReview: FastReviewResult
): Promise<ReviewEnrichmentResult> {

  console.log(
    "===== REVIEW ENRICHMENT START ====="
  );

  const {
    executiveIntelligence,
    highestImpactFinding,
    supportingEvidence,
  } = fastReview;

  const desContext =
    buildDESContext({
      understanding:
        executiveIntelligence,
      evidence:
        supportingEvidence,
      finding:
        highestImpactFinding,
    });

  const priorityContext =
    buildPriorityActionsContext({
      understanding:
        executiveIntelligence,
      evidence:
        supportingEvidence,
      finding:
        highestImpactFinding,
    });

  const desStart = Date.now();
  const priorityStart = Date.now();

  const [
    des,
    priorityActions,
  ] = await Promise.all([
    generateDES(desContext),
    generatePriorityActions(priorityContext),
  ]);

  const desDuration =
    Date.now() - desStart;

  const priorityDuration =
    Date.now() - priorityStart;

  const wallTime =
    Date.now() -
    Math.min(
      desStart,
      priorityStart
    );

  console.log(
    "DES:",
    desDuration,
    "ms"
  );

  console.log(
    "Priority Actions:",
    priorityDuration,
    "ms"
  );

  console.log(
    "DES + Priority Actions wall time:",
    wallTime,
    "ms"
  );

  const enrichment =
    ReviewEnrichmentResultSchema.parse({
      des,
      priorityActions,
    });

  console.log(
    "===== REVIEW ENRICHMENT COMPLETE ====="
  );

  return enrichment;
}