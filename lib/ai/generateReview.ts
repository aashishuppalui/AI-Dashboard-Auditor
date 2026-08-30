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
  // Stage 1 — Understand and validate the interface
  const understanding =
    await understandDashboard(base64Image);

  // Stop the review if the uploaded image
  // does not appear to be a dashboard.
  if (!understanding.isDashboard) {
    throw new Error(
      "This image doesn't appear to be a dashboard. Please upload a dashboard screenshot to continue."
    );
  }

  // Stage 2 — Extract observable evidence
  const evidence =
    await extractEvidence(base64Image);

  // Stage 3 — Highest Impact Finding
  const findingContext =
    buildFindingContext({
      understanding,
      evidence,
    });

  const finding =
    await generateFinding(findingContext);

  console.log("===== FINDING =====");
  console.log("Finding:", finding);
  console.log("===================");

  // Stage 4 — Decision Effectiveness Score
  const desContext =
    buildDESContext({
      understanding,
      evidence,
      finding,
    });

  const des =
    await generateDES(desContext);

  console.log("===== DES =====");
  console.log("DES:", des);
  console.log("================");

  // Stage 5 — Priority Actions
  const priorityContext =
    buildPriorityActionsContext({
      understanding,
      evidence,
      finding,
    });

  const priorityActions =
    await generatePriorityActions(priorityContext);

  // Stage 6 — Final Review
  return ReviewResponseSchema.parse({
    metadata: {
      schemaVersion: "1.0.0",
      reviewId: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      model: "gpt-5.1",
      promptVersion: "1.0.0",
      processingTimeMs: 0,
    },

    executiveIntelligence: understanding,

    des,

    highestImpactFinding: finding,

    supportingEvidence: evidence,

    priorityActions,
  });
}