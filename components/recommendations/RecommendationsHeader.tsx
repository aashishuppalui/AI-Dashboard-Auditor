interface RecommendationsHeaderProps {
  title?: string;
  description?: string;
}

export default function RecommendationsHeader({
  title = "Recommended Actions",
  description = "Based on the findings and supporting evidence, the AI recommends the following actions to improve the usability and effectiveness of your dashboard.",
}: RecommendationsHeaderProps) {
  return (
    <header className="review-header">
      <h2 className="review-title">
        {title}
      </h2>

      <p className="review-subtitle">
        {description}
      </p>
    </header>
  );
}