interface RecommendationCardProps {
  recommendation: string;
}

export default function RecommendationCard({
  recommendation,
}: RecommendationCardProps) {
  return (
    <section>
      <h2>🚀 Top Recommendation</h2>

      <p>{recommendation}</p>
    </section>
  );
}