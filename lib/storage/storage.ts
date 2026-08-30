import type { ReviewResponse } from "../../schemas/report/review-schema";

const REVIEW_STORAGE_KEY = "ux-review-companion-review";

export function saveReview(review: ReviewResponse): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    REVIEW_STORAGE_KEY,
    JSON.stringify(review)
  );
}

export function getReview(): ReviewResponse | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedReview =
    localStorage.getItem(REVIEW_STORAGE_KEY);

  if (!storedReview) {
    return null;
  }

  try {
    return JSON.parse(storedReview) as ReviewResponse;
  } catch (error) {
    console.error(
      "Failed to parse stored review:",
      error
    );

    return null;
  }
}

export function clearReview(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(REVIEW_STORAGE_KEY);
}