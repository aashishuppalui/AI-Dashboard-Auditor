import RecommendationsHeader from "./RecommendationsHeader";
import RecommendationsFooter from "./RecommendationsFooter";

export interface RecommendationModel {
  id: string;
  title: string;
  why: string;
  action: string;
  expectedOutcome: string;
  priority: "High" | "Medium" | "Low";
}

export interface RecommendationsModel {
  recommendations: RecommendationModel[];
}

interface RecommendationsProps {
  recommendations: RecommendationsModel;
}

export default function Recommendations({
  recommendations,
}: RecommendationsProps) {
  return (
    <section className="review-section">

      <RecommendationsHeader />


      <RecommendationsFooter
        recommendationCount={recommendations.recommendations.length}
      />

    </section>
  );
}