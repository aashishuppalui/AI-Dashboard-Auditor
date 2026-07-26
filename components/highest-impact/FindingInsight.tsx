interface FindingSummaryProps {
  problem: string;
  impact: string;
  expectedImprovement: string;
}

export default function FindingSummary({
  problem,
  impact,
  expectedImprovement,
}: FindingSummaryProps) {
  return (
    <div className="review-card">

      <div className="review-intro">
        <p>
          Based on the dashboard analysis, the AI identified the following as the
          highest-impact usability improvement.
        </p>
      </div>

      <div className="finding-section">
        <h3 className="review-card-title">
          Problem
        </h3>

        <p className="review-card-content">
          {problem}
        </p>
      </div>

      <div className="finding-section">
        <h3 className="review-card-title">
          Why It Matters
        </h3>

        <p className="review-card-content">
          {impact}
        </p>
      </div>

      <div className="finding-section">
        <h3 className="review-card-title">
          Expected Improvement
        </h3>

        <p className="review-card-content">
          {expectedImprovement}
        </p>
      </div>

    </div>
  );
}