import { ReviewResponseSchema } from "../../schemas/report/review-schema";

import { understandDashboard } from "./engines/understanding";
import { extractEvidence } from "./engines/evidence";
import { generateFinding } from "./engines/finding";
import { generateDES } from "./engines/des";
import { generatePriorityActions } from "./engines/priorityActions";

import { buildFindingContext } from "./context/finding";
import { buildDESContext } from "./context/des";
import { buildPriorityActionsContext } from "./context/priorityActions";

export async function generateReview(
  base64Image: string
) {
  const reviewStart = Date.now();

  console.log("================================");
  console.log("===== REVIEW PIPELINE START =====");
  console.log("================================");

  // --------------------------------------------------
  // Stage 1 — Understand and validate the interface
  // --------------------------------------------------

  const understandingStart = Date.now();

  const understanding =
    await understandDashboard(base64Image);

  const understandingDuration =
    Date.now() - understandingStart;

  console.log(
    "Understanding:",
    understandingDuration,
    "ms"
  );

  // Stop the review if the uploaded image
  // does not appear to be a dashboard.
  if (!understanding.isDashboard) {
    console.log(
      "Review stopped: uploaded image is not a dashboard."
    );

    throw new Error(
      "This image doesn't appear to be a dashboard. Please upload a dashboard screenshot to continue."
    );
  }

  // --------------------------------------------------
  // Stage 2 — Extract observable evidence
  // --------------------------------------------------

  const evidenceStart = Date.now();

  const evidence =
    await extractEvidence(base64Image);

  const evidenceDuration =
    Date.now() - evidenceStart;

  console.log(
    "Evidence:",
    evidenceDuration,
    "ms"
  );

  // --------------------------------------------------
  // Stage 3 — Highest Impact Finding
  // --------------------------------------------------

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

  // --------------------------------------------------
  // Stage 4 — Decision Effectiveness Score
  // --------------------------------------------------

  const desContext =
    buildDESContext({
      understanding,
      evidence,
      finding,
    });

  const desStart = Date.now();

  const des =
    await generateDES(desContext);

  const desDuration =
    Date.now() - desStart;

  console.log(
    "DES:",
    desDuration,
    "ms"
  );

  console.log("===== DES =====");
  console.log("DES:", des);
  console.log("================");

  // --------------------------------------------------
  // Stage 5 — Priority Actions
  // --------------------------------------------------

  const priorityContext =
    buildPriorityActionsContext({
      understanding,
      evidence,
      finding,
    });

  const priorityStart = Date.now();

  const priorityActions =
    await generatePriorityActions(priorityContext);

  const priorityDuration =
    Date.now() - priorityStart;

  console.log(
    "Priority Actions:",
    priorityDuration,
    "ms"
  );

  // --------------------------------------------------
  // Total review time
  // --------------------------------------------------

  const totalDuration =
    Date.now() - reviewStart;

  console.log("================================");
  console.log("===== REVIEW PIPELINE COMPLETE =====");
  console.log("================================");

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
    "Finding:",
    findingDuration,
    "ms"
  );

  console.log(
    "DES:",
    desDuration,
    "ms"
  );

  console.log(
    "Priority Actions:",
    priorityDuration,
    "ms"
  );

  console.log(
    "Total Review Time:",
    totalDuration,
    "ms"
  );

  console.log(
    "Total Review Time:",
    (totalDuration / 1000).toFixed(2),
    "seconds"
  );

  console.log("================================");

  // --------------------------------------------------
  // Stage 6 — Final Review
  // --------------------------------------------------

  return ReviewResponseSchema.parse({
    metadata: {
      schemaVersion: "1.0.0",
      reviewId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      model: "gpt-5.1",
      promptVersion: "1.0.0",
      processingTimeMs: totalDuration,
    },

    executiveIntelligence: understanding,

    des,

    highestImpactFinding: finding,

    supportingEvidence: evidence,

    priorityActions,
  });
}