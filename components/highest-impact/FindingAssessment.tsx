interface FindingAssessmentProps {
  severity: "Low" | "Medium" | "High";
  confidence: number;
}

export default function FindingAssessment({
  severity,
  confidence,
}: FindingAssessmentProps) {
  return (
    <div className="review-card">

      <h3 className="review-card-title">
        AI Assessment
      </h3>

      <div className="assessment-grid">

        <div className="assessment-item">
          <span className="assessment-label">
            Severity
          </span>

          <span className="assessment-value">
            {severity}
          </span>
        </div>

        <div className="assessment-item">
          <span className="assessment-label">
            AI Confidence
          </span>

          <span className="assessment-value">
            {confidence}%
          </span>
        </div>

      </div>

    </div>
  );
}