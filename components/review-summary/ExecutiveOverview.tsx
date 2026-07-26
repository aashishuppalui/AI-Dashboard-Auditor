interface ExecutiveOverviewProps {
  verdict: string;
  topPriority: {
    title: string;
    reason: string;
  };
}

export default function ExecutiveOverview({
  verdict,
  topPriority,
}: ExecutiveOverviewProps) {
  return (
    <div className="review-card">

      <div className="summary-section">
        <h3 className="review-card-title">
          Overall Verdict
        </h3>

        <p className="review-card-content">
          {verdict}
        </p>
      </div>

      <div className="summary-section">
        <h3 className="review-card-title">
          Top Priority
        </h3>

        <h4 className="summary-priority-title">
          {topPriority.title}
        </h4>

        <p className="review-card-content">
          {topPriority.reason}
        </p>
      </div>

    </div>
  );
}