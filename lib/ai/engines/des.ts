import { executeAI } from "../execute";

import { createDESPrompt } from "../prompts/des";

import { parseDES } from "../parsers/des";

import {
  DESSchema,
  type DES,
} from "../../../schemas/des";

function getDESLabel(
  score: number
): DES["label"] {
  if (score >= 90) {
    return "Excellent";
  }

  if (score >= 75) {
    return "Good";
  }

  if (score >= 60) {
    return "Needs Attention";
  }

  if (score >= 40) {
    return "Weak";
  }

  return "Critical";
}

export async function generateDES(
  context: string
): Promise<DES> {
  const evaluation =
    await executeAI({
      prompt: createDESPrompt(),
      context,
      parser: parseDES,
    });

  const score =
    evaluation.dimensions.reduce(
      (total, dimension) =>
        total + dimension.score,
      0
    );

  const label =
    getDESLabel(score);

  const des = {
    score,
    label,
    dimensions:
      evaluation.dimensions,
  };

  return DESSchema.parse(des);
}