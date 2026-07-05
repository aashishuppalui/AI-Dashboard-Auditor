export interface EvidenceItem {
  type: string;

  severity:
    | "Low"
    | "Medium"
    | "High";

    uiElement: string;
    observation: string;

     reasoning: string;

    observable: boolean;
}