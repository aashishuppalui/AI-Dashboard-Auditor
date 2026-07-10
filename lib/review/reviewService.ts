import { analyzeDashboard } from "../../lib/api/analyze";
import { analyzeEvidence } from "../../lib/api/evidence";
import { analyzeFinding } from "../../lib/api/finding";

import { buildFindingContext } from "../../lib/ai/context/finding";

import { createReview } from "./createReview";

import type { Review } from "../../schemas/review";

export async function generateReview(
  base64Image: string
): Promise<Review> {

  const understanding =
    await analyzeDashboard(base64Image);

  const evidence =
    await analyzeEvidence(base64Image);

  const context =
    buildFindingContext(
      understanding,
      evidence
    );

  const finding =
    await analyzeFinding(context);

  return createReview(
    understanding,
    evidence,
    finding
  );
}