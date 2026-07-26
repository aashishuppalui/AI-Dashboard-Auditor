import { EvidenceSchema } from "../../../schemas/reasoning/evidence";

export function parseEvidence(
  text: string
) {
  const json = JSON.parse(text);

  return EvidenceSchema.parse(json);
}