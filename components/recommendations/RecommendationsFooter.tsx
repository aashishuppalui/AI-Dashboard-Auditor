interface RecommendationsFooterProps {
  recommendationCount: number;
}

export default function RecommendationsFooter({
  recommendationCount,
}: RecommendationsFooterProps) {
  return (
    <footer className="review-footer">
      <p className="review-footer-text">
        The AI generated{" "}
        <strong>{recommendationCount}</strong>{" "}
        actionable {recommendationCount === 1 ? "recommendation" : "recommendations"}{" "}
        based on the findings and supporting evidence.
      </p>

      <p className="review-footer-text">
        The final section provides an executive summary to help you quickly
        understand the overall review and decide what to do next.
      </p>
    </footer>
  );
}