import SummaryHeader from "./SummaryHeader";
import ExecutiveOverview from "./ExecutiveOverview";
import ActionRoadmap from "./ActionRoadmap";
import SummaryFooter from "./SummaryFooter";

export interface ReviewSummaryModel {
  verdict: string;

  topPriority: {
    title: string;
    reason: string;
  };

  immediateActions: string[];
  nextActions: string[];
  laterActions: string[];

  closingStatement: string;
}

interface ReviewSummaryProps {
  summary: ReviewSummaryModel;
}

export default function ReviewSummary({
  summary,
}: ReviewSummaryProps) {
  return (
    <section className="review-section">

      <SummaryHeader />

      <ExecutiveOverview
        verdict={summary.verdict}
        topPriority={summary.topPriority}
      />

      <ActionRoadmap
        immediateActions={summary.immediateActions}
        nextActions={summary.nextActions}
        laterActions={summary.laterActions}
      />

      <SummaryFooter
        closingStatement={summary.closingStatement}
      />

    </section>
  );
}