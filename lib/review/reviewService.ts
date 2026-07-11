import { analyzeDashboard } from "../../lib/api/analyze";
import { analyzeEvidence } from "../../lib/api/evidence";
import { analyzeFinding } from "../../lib/api/finding";

import { buildFindingContext } from "../../lib/ai/context/finding";
import { createReview } from "./createReview";

import type { Review } from "../../schemas/review";

export async function generateReview(
  base64Image: string,
  onProgress?: (message: string) => void
): Promise<Review> {
  const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

  onProgress?.("🧠 Understanding dashboard...");
await wait(250);
  const understanding =
    await analyzeDashboard(base64Image);

  onProgress?.("🔍 Extracting observable evidence...");
await wait(250);

  const evidence =
    await analyzeEvidence(base64Image);

  const context =
    buildFindingContext(
      understanding,
      evidence
    );

  onProgress?.("⭐ Identifying highest impact finding...");
await wait(250);
  const finding =
    await analyzeFinding(context);

  onProgress?.("📄 Building AI UX review...");
await wait(250);
  return createReview(
    understanding,
    evidence,
    finding
  );
}