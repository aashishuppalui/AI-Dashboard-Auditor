import { executeAI } from "../execute";
import { createDashboardUnderstandingPrompt } from "../prompts/understanding";
import { parseDashboardClassification } from "../parsers/understanding";

export async function understandDashboard(
  base64Image: string
) {
  return executeAI({
    prompt: createDashboardUnderstandingPrompt(),
    image: base64Image,
    parser: parseDashboardClassification,
  });
}
