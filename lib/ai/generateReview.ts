import { ReviewResponseSchema } from "../../schemas/report/review-schema";
import type { FastReviewResult } from "../../schemas/report/fast-review-results";

import { generateFastReview } from "././generateFastReview";
import { generateReviewEnrichment } from "./generateReviewEnrichment";

export async function generateReview(
  base64Image: string
) {
  const reviewStart = Date.now();

  console.log("================================");
  console.log("===== REVIEW PIPELINE START =====");
  console.log("================================");

  // ============================================
  // FAST REVIEW
  // ============================================

  const fastReviewStart = Date.now();

  const fastReview =
    await generateFastReview(base64Image);

  const fastReviewDuration =
    Date.now() - fastReviewStart;

  console.log(
    "Fast Review:",
    fastReviewDuration,
    "ms"
  );

  // ============================================
  // ENRICHMENT
  // ============================================

  const enrichmentStart = Date.now();

  const enrichment =
    await generateReviewEnrichment(
      fastReview
    );

  const enrichmentDuration =
    Date.now() - enrichmentStart;

  console.log(
    "Review Enrichment:",
    enrichmentDuration,
    "ms"
  );

  // ============================================
  // COMPLETE REVIEW
  // ============================================

  const totalDuration =
    Date.now() - reviewStart;

  console.log("================================");
  console.log("===== REVIEW PIPELINE COMPLETE =====");
  console.log("================================");

  console.log(
    "Fast Review:",
    fastReviewDuration,
    "ms"
  );

  console.log(
    "Review Enrichment:",
    enrichmentDuration,
    "ms"
  );

  console.log(
    "Total Review Time:",
    totalDuration,
    "ms"
  );

  console.log(
    "Total Review Time:",
    (totalDuration / 1000).toFixed(2),
    "seconds"
  );

  console.log("================================");

  return ReviewResponseSchema.parse({
    metadata: {
      schemaVersion: "1.0.0",
      reviewId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      model: "gpt-5.1",
      promptVersion: "1.0.0",
      processingTimeMs: totalDuration,
    },

    executiveIntelligence:
      fastReview.executiveIntelligence,

    des:
      enrichment.des,

    highestImpactFinding:
      fastReview.highestImpactFinding,

    supportingEvidence:
      fastReview.supportingEvidence,

    priorityActions:
      enrichment.priorityActions,
  });
}