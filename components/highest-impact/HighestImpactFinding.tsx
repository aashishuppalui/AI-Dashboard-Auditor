export interface HighestImpactFindingModel {
  problem: string;
  impact: string;
  expectedImprovement: string;

  severity: "Low" | "Medium" | "High";
  confidence: number;

  supportingEvidence: number;
}

interface HighestImpactFindingProps {
  finding: HighestImpactFindingModel;
}