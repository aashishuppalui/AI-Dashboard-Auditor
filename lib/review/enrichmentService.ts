import { analyzeReviewEnrichment } from "../api/analyzeEnrichment";

import type { FastReviewResult } from "../../schemas/report/fast-review-results";
import type { ReviewEnrichmentResult } from "../../schemas/report/review-enrichment-result";

export async function generateReviewEnrichment(
  fastReview: FastReviewResult,
  onProgress?: (message: string) => void
): Promise<ReviewEnrichmentResult> {

  onProgress?.(
    "Completing the decision effectiveness review..."
  );

  const enrichment =
    await analyzeReviewEnrichment(
      fastReview
    );

  onProgress?.(
    "✅ Review complete"
  );

  return enrichment;
}