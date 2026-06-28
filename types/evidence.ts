export interface EvidenceItem {
  type: string;

  severity:
    | "Low"
    | "Medium"
    | "High";

  observation: string;

  reasoning: string;

  observable: boolean;
}