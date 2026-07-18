import type { Review } from "../../schemas/review";

export async function analyzeDashboard(
  base64Image: string
): Promise<Review> {
  const response = await fetch("/api/analyze", {
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