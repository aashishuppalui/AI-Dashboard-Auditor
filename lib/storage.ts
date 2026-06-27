import { AnalyzeResponse } from "../types";

const STORAGE_KEY = "ux-review-result";

export function saveReview(
  data: AnalyzeResponse
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function getReview():
  | AnalyzeResponse
  | null {

  const data =
    localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}