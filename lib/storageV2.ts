import type { FastReviewResult } from "../schemas/report/fast-review-results";
import type { ReviewEnrichmentResult } from "../schemas/report/review-enrichment-result";

const V2_STORAGE_KEY = "ux-review-v2-result";

export type V2ReviewStatus =
  | "fast-ready"
  | "enriching"
  | "complete";

export type StoredV2Review = {
  fastReview: FastReviewResult;
  enrichment?: ReviewEnrichmentResult;
  sourceImage: string;
  status: V2ReviewStatus;
};

export function saveV2FastReview(
  fastReview: FastReviewResult,
  sourceImage: string
) {
  const storedReview: StoredV2Review = {
    fastReview,
    sourceImage,
    status: "fast-ready",
  };

  localStorage.setItem(
    V2_STORAGE_KEY,
    JSON.stringify(storedReview)
  );
}

export function getV2Review():
  | StoredV2Review
  | null {
  const data =
    localStorage.getItem(
      V2_STORAGE_KEY
    );

  if (!data) return null;

  try {
    const parsed = JSON.parse(data);

    if (
      parsed &&
      parsed.fastReview &&
      parsed.fastReview.executiveIntelligence &&
      parsed.fastReview.highestImpactFinding &&
      parsed.fastReview.supportingEvidence &&
      typeof parsed.sourceImage === "string" &&
      (
        parsed.status === "fast-ready" ||
        parsed.status === "enriching" ||
        parsed.status === "complete"
      )
    ) {
      return parsed as StoredV2Review;
    }

    localStorage.removeItem(
      V2_STORAGE_KEY
    );

    return null;
  } catch {
    localStorage.removeItem(
      V2_STORAGE_KEY
    );

    return null;
  }
}

export function saveV2Enrichment(
  enrichment: ReviewEnrichmentResult
) {
  const existing =
    getV2Review();

  if (!existing) {
    throw new Error(
      "No V2 fast review exists."
    );
  }

  const updatedReview: StoredV2Review = {
    ...existing,
    enrichment,
    status: "complete",
  };

  localStorage.setItem(
    V2_STORAGE_KEY,
    JSON.stringify(updatedReview)
  );
}

export function setV2ReviewStatus(
  status: V2ReviewStatus
) {
  const existing =
    getV2Review();

  if (!existing) {
    throw new Error(
      "No V2 fast review exists."
    );
  }

  const updatedReview: StoredV2Review = {
    ...existing,
    status,
  };

  localStorage.setItem(
    V2_STORAGE_KEY,
    JSON.stringify(updatedReview)
  );
}