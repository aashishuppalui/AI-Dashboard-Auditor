import { executeAI } from "../execute";
import { createFindingPrompt } from "../prompts/finding";
import { parseFinding } from "../parsers/finding";

export async function generateFinding(
  context: string
) {
  return executeAI({
    prompt: createFindingPrompt(),
    context,
    parser: parseFinding,
  });
}