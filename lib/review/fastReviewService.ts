import { analyzeFastDashboard } from "../api/analyzeFast";

import type { FastReviewResult } from "../../schemas/report/fast-review-results";

export async function generateFastReview(
  base64Image: string,
  onProgress?: (message: string) => void
): Promise<FastReviewResult> {

  onProgress?.("🧠 Understanding your dashboard...");

  const review =
    await analyzeFastDashboard(base64Image);

  onProgress?.("✅ Initial review ready");

  return review;
}