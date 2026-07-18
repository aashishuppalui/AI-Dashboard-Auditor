import { analyzeDashboard } from "../api/analyze";

import type { Review } from "../../schemas/review";

export async function generateReview(
  base64Image: string,
  onProgress?: (message: string) => void
): Promise<Review> {

  onProgress?.("🧠 Analyzing dashboard...");

  const review =
    await analyzeDashboard(base64Image);

  onProgress?.("✅ Analysis complete");

  return review;
}