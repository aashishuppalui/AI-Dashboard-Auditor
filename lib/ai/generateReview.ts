import { ReviewSchema } from "../../schemas/review";

import { understandDashboard } from "./engines/understanding";
import { extractEvidence } from "./engines/evidence";
import { generateFinding } from "./engines/finding";
import { generatePriorityActions } from "./engines/priorityActions";

import { buildFindingContext } from "./context/finding";
import { buildPriorityActionsContext } from "./context/priorityActions";

export async function generateReview(
  base64Image: string
) {

  // Stage 1 - Independent AI tasks
  const [
    understanding,
    evidence,
  ] = await Promise.all([
    understandDashboard(base64Image),
    extractEvidence(base64Image),
  ]);
console.log("===== GENERATE REVIEW =====");
console.log("Understanding:", understanding);
console.log("Evidence:", evidence);
console.log("===========================");

  // Stage 2 - Finding
  const findingContext =
    buildFindingContext({
      understanding,
      evidence,
    });

  const finding =
    await generateFinding(
      findingContext
    );

  // Stage 3 - Priority Actions
  const priorityContext =
    buildPriorityActionsContext({
      understanding,
      evidence,
      finding,
    });

  const priorityActions =
    await generatePriorityActions(
      priorityContext
    );

  // Stage 4 - Final Review
  return ReviewSchema.parse({
    understanding,
    evidence,
    finding,
    priorityActions,

    metadata: {
      createdAt:
        new Date().toISOString(),

      model: "gpt-5.1",

      appVersion: "0.1.0",
    },
  });
}