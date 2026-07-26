import UnderstandingHeader from "./UnderstandingHeader";
import UnderstandingDetails from "./UnderstandingDetails";
import UnderstandingMetrics from "./UnderstandingMetrics";
import UnderstandingConfidence from "./UnderstandingConfidence";
import UnderstandingSummary from "./UnderstandingSummary";

export interface AIUnderstandingModel {
  summary: string;

  primaryUser: string;
  primaryGoal: string;
  primaryTask: string;
  primaryDecision: string;
  dashboardCategory: string;
  keyMetrics: string[];

  confidence: number;
  confidenceExplanation: string;
}

interface AIUnderstandingProps {
  understanding: AIUnderstandingModel;
}

export default function AIUnderstanding({
  understanding,
}: AIUnderstandingProps) {
  return (
    <section className="review-section">
      <UnderstandingHeader />

      <UnderstandingSummary summary={understanding.summary} />

      <UnderstandingDetails
        primaryUser={understanding.primaryUser}
        primaryGoal={understanding.primaryGoal}
        primaryTask={understanding.primaryTask}
        primaryDecision={understanding.primaryDecision}
        dashboardCategory={understanding.dashboardCategory}
      />

      <UnderstandingMetrics metrics={understanding.keyMetrics} />

      <UnderstandingConfidence
        confidence={understanding.confidence}
        explanation={understanding.confidenceExplanation}
      />
    </section>
  );
}
