interface EvidenceCardProps {
  observation: string;
  rationale: string;
  impact: string;
  severity: "Low" | "Medium" | "High";
}

export default function EvidenceCard({
  observation,
  rationale,
  impact,
  severity,
}: EvidenceCardProps) {
  return (
    <article className="review-card">

      <div className="evidence-section">
        <h3 className="review-card-title">
          Observation
        </h3>

        <p className="review-card-content">
          {observation}
        </p>
      </div>

      <div className="evidence-section">
        <h3 className="review-card-title">
          Why It Matters
        </h3>

        <p className="review-card-content">
          {rationale}
        </p>
      </div>

      <div className="evidence-section">
        <h3 className="review-card-title">
          Impact
        </h3>

        <p className="review-card-content">
          {impact}
        </p>
      </div>

      <div className="evidence-section">
        <h3 className="review-card-title">
          Severity
        </h3>

        <p className="review-card-content">
          {severity}
        </p>
      </div>

    </article>
  );
}