import ActionCard from "./ActionCard";
import { RecommendationModel } from "./Recommendations";

interface RecommendationsListProps {
  recommendations: RecommendationModel[];
}

export default function RecommendationsList({
  recommendations,
}: RecommendationsListProps) {
  return (
    <div className="recommendations-list">
      {recommendations.map((recommendation) => (
        <ActionCard
          key={recommendation.id}
          title={recommendation.title}
          why={recommendation.why}
          action={recommendation.action}
          expectedOutcome={recommendation.expectedOutcome}
          priority={recommendation.priority}
        />
      ))}
    </div>
  );
}