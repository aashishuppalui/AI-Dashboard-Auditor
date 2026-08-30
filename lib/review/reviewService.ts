import { analyzeDashboard } from "../api/analyze";

import type { ReviewResponse } from "../../schemas/report/review-schema";

export async function generateReview(
  base64Image: string,
  onProgress?: (message: string) => void
): Promise<ReviewResponse> {

  onProgress?.("🧠 Analyzing dashboard...");

  const review =
    await analyzeDashboard(base64Image);

  onProgress?.("✅ Analysis complete");

  return review;
}