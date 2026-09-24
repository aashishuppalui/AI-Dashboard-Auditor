import type { FastReviewResult } from "../../schemas/report/fast-review-results";

export async function analyzeFastDashboard(
  base64Image: string
): Promise<FastReviewResult> {
  const response = await fetch("/api/analyze-fast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: base64Image,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error ?? "Failed to analyze dashboard."
    );
  }

  return data.review;
}