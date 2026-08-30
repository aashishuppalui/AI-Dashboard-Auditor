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
  // Stage 1 — Independent AI tasks
  const [understanding, evidence] =
    await Promise.all([
      understandDashboard(base64Image),
      extractEvidence(base64Image),
    ]);

  console.log("===== GENERATE REVIEW =====");
  console.log("Understanding:", understanding);
  console.log("Evidence:", evidence);
  console.log("===========================");

  // Stage 2 — Highest Impact Finding
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

  // Stage 3 — Decision Effectiveness Score
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

  // Stage 4 — Priority Actions
  const priorityContext =
    buildPriorityActionsContext({
      understanding,
      evidence,
      finding,
    });

  const priorityActions =
    await generatePriorityActions(priorityContext);

  // Stage 5 — Final Review
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