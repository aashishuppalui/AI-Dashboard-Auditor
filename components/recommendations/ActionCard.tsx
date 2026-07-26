interface ActionCardProps {
  title: string;
  why: string;
  action: string;
  expectedOutcome: string;
  priority: "High" | "Medium" | "Low";
}

export default function ActionCard({
  title,
  why,
  action,
  expectedOutcome,
  priority,
}: ActionCardProps) {
  return (
    <article className="review-card">

      <h3 className="review-card-title">
        {title}
      </h3>

      <div className="recommendation-section">
        <h4 className="recommendation-label">
          Why
        </h4>

        <p className="review-card-content">
          {why}
        </p>
      </div>

      <div className="recommendation-section">
        <h4 className="recommendation-label">
          Recommended Action
        </h4>

        <p className="review-card-content">
          {action}
        </p>
      </div>

      <div className="recommendation-section">
        <h4 className="recommendation-label">
          Expected Outcome
        </h4>

        <p className="review-card-content">
          {expectedOutcome}
        </p>
      </div>

      <div className="recommendation-section">
        <h4 className="recommendation-label">
          Priority
        </h4>

        <p className="review-card-content">
          {priority}
        </p>
      </div>

    </article>
  );
}