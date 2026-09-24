import type { FastReviewResult } from "../../schemas/report/fast-review-results";
import type { ReviewEnrichmentResult } from "../../schemas/report/review-enrichment-result";

export async function analyzeReviewEnrichment(
  fastReview: FastReviewResult
): Promise<ReviewEnrichmentResult> {
  const response = await fetch(
    "/api/analyze-enrichment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fastReview,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error ??
        "Failed to complete review enrichment."
    );
  }

  return data.enrichment;
}