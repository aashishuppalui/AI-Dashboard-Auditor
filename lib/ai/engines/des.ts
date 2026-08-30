import { executeAI } from "../execute";

import { createDESPrompt } from "../prompts/des";
import { parseDES } from "../parsers/des";

export async function generateDES(
  context: string
) {
  return executeAI({
    prompt: createDESPrompt(),
    context,
    parser: parseDES,
  });
}