import type { ReviewResponse } from "../schemas/report/review-schema";

const STORAGE_KEY = "ux-review-result";

export function saveReview(
  review: ReviewResponse
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(review)
  );
}

export function getReview():
  | ReviewResponse
  | null {

  const data =
    localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

try {
  return JSON.parse(data) as ReviewResponse;
} catch {
  localStorage.removeItem(STORAGE_KEY);
  return null;
}
}