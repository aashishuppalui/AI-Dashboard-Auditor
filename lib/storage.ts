import type { ReviewResponse } from "../schemas/report/review-schema";

const STORAGE_KEY = "ux-review-result";

type StoredReview = {
  review: ReviewResponse;
  sourceImage: string;
};

export function saveReview(
  review: ReviewResponse,
  sourceImage: string
) {
  const storedReview: StoredReview = {
    review,
    sourceImage,
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(storedReview)
  );
}

export function getReview():
  | StoredReview
  | ReviewResponse
  | null {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  try {
    const parsed = JSON.parse(data);

    // New storage format
    if (
      parsed &&
      parsed.review &&
      parsed.review.metadata
    ) {
      return parsed as StoredReview;
    }

    // Legacy storage format
    if (
      parsed &&
      parsed.metadata &&
      parsed.executiveIntelligence
    ) {
      return parsed as ReviewResponse;
    }

    localStorage.removeItem(STORAGE_KEY);
    return null;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}