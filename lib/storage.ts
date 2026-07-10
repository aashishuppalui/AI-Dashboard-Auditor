import type { Review } from "../schemas/review";

const STORAGE_KEY = "ux-review-result";

export function saveReview(
  review: Review
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(review)
  );
}

export function getReview():
  | Review
  | null {

  const data =
    localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

try {
  return JSON.parse(data) as Review;
} catch {
  localStorage.removeItem(STORAGE_KEY);
  return null;
}
}