import { executeAI } from "../execute";
import { createEvidencePrompt } from "../prompts/evidence";
import { parseEvidence } from "../parsers/evidence";

export async function extractEvidence(
  base64Image: string
) {
  return executeAI({
    prompt: createEvidencePrompt(),
    image: base64Image,
    parser: parseEvidence,
  });
}