import { EvidenceSchema } from "../../../schemas/evidence";

export function parseEvidence(
  text: string
) {
  const json = JSON.parse(text);

  return EvidenceSchema.parse(json);
}