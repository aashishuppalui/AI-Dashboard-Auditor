import UnderstandingHeader from "./UnderstandingHeader";
import UnderstandingSummary from "./UnderstandingSummary";
import UnderstandingDetails from "./UnderstandingDetails";
import UnderstandingMetrics from "./UnderstandingMetrics";

interface ExecutiveIntelligenceModel {
  interfaceType: string;
  primaryGoal: string;
  targetUsers: string[];
  detectedComponents: string[];
  confidence: "high" | "medium" | "low";
}

interface AIUnderstandingProps {
  understanding: ExecutiveIntelligenceModel;
}

export default function AIUnderstanding({
  understanding,
}: AIUnderstandingProps) {
  const primaryUser =
    understanding.targetUsers.join(", ");

  const primaryDecision =
    understanding.primaryGoal;

  return (
    <section className="review-section">
      <UnderstandingHeader />

      <UnderstandingSummary
        summary={understanding.primaryGoal}
      />

      <UnderstandingDetails
        primaryUser={primaryUser}
        primaryGoal={understanding.primaryGoal}
        primaryTask={understanding.primaryGoal}
        primaryDecision={primaryDecision}
        dashboardCategory={understanding.interfaceType}
      />

      <UnderstandingMetrics
        metrics={understanding.detectedComponents}
      />

      <section className="review-card">
        <h3 className="review-card-title">
          AI Confidence
        </h3>

        <p className="review-body">
          {understanding.confidence
            .charAt(0)
            .toUpperCase() +
            understanding.confidence.slice(1)}{" "}
          confidence in the dashboard understanding.
        </p>
      </section>
    </section>
  );
}