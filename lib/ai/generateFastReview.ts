import {
  FastReviewResultSchema,
  type FastReviewResult,
} from "../../schemas/report/fast-review-results";

import { understandDashboard } from "./engines/understanding";
import { extractEvidence } from "./engines/evidence";
import { generateFinding } from "./engines/finding";

import { buildFindingContext } from "./context/finding";

export async function generateFastReview(
  base64Image: string
): Promise<FastReviewResult> {

   const fastReviewStart = Date.now();

  console.log("================================");
  console.log("===== FAST REVIEW START =====");
  console.log("================================");

  console.log(
    "===== UNDERSTANDING + EVIDENCE START ====="
  );

  const understandingStart = Date.now();
  const evidenceStart = Date.now();

  const [
    understandingResult,
    evidenceResult,
  ] = await Promise.all([
    understandDashboard(base64Image),
    extractEvidence(base64Image),
  ]);

  const understandingDuration =
    Date.now() - understandingStart;

  const evidenceDuration =
    Date.now() - evidenceStart;

  const parallelStageDuration =
    Date.now() -
    Math.min(
      understandingStart,
      evidenceStart
    );

  const understanding =
    understandingResult;

  const evidence =
    evidenceResult;

  console.log(
    "Understanding:",
    understandingDuration,
    "ms"
  );

  console.log(
    "Evidence:",
    evidenceDuration,
    "ms"
  );

  console.log(
    "Understanding + Evidence wall time:",
    parallelStageDuration,
    "ms"
  );

  console.log(
    "===== UNDERSTANDING + EVIDENCE COMPLETE ====="
  );

  if (!understanding.isDashboard) {
    console.log(
      "Review stopped: uploaded image is not a dashboard."
    );

    throw new Error(
      "This image doesn't appear to be a dashboard. Please upload a dashboard screenshot to continue."
    );
  }

  const findingContext =
    buildFindingContext({
      understanding,
      evidence,
    });

  const findingStart = Date.now();

  const finding =
    await generateFinding(findingContext);

  const findingDuration =
    Date.now() - findingStart;

  console.log(
    "Finding:",
    findingDuration,
    "ms"
  );

  console.log("===== FINDING =====");
  console.log("Finding:", finding);
  console.log("===================");

  const fastReview =
    FastReviewResultSchema.parse({
      executiveIntelligence:
        understanding,

      highestImpactFinding:
        finding,

      supportingEvidence:
        evidence,
    });

  console.log("================================");
  console.log("===== FAST REVIEW COMPLETE =====");
  console.log("================================");

    const fastReviewDuration =
    Date.now() - fastReviewStart;

  console.log(
    "Fast Review total:",
    fastReviewDuration,
    "ms"
  );

  console.log(
    "Fast Review total:",
    (fastReviewDuration / 1000).toFixed(2),
    "seconds"
  );

  return fastReview;
}