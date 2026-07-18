import { executeAI } from "../execute";
import { createPriorityActionsPrompt } from "../prompts/priorityActions";
import { parsePriorityActions } from "../parsers/priorityActions";

export async function generatePriorityActions(
  context: string
) {
  return executeAI({
    prompt: createPriorityActionsPrompt(),
    context,
    parser: parsePriorityActions,
  });
}