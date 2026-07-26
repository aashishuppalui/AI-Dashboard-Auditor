import FindingHeader from "./FindingHeader";
import FindingSummary from "./FindingInsight";
import FindingAssessment from "./FindingAssessment";
import FindingFooter from "./FindingFooter";


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

export default function HighestImpactFinding({
  finding,
}: HighestImpactFindingProps) {
  return (
    <section className="review-section">

      <FindingHeader />

      <FindingSummary
        problem={finding.problem}
        impact={finding.impact}
        expectedImprovement={finding.expectedImprovement}
      />

      <FindingAssessment
        severity={finding.severity}
        confidence={finding.confidence}
      />

      <FindingFooter
        supportingEvidence={finding.supportingEvidence}
      />

    </section>
  );
}