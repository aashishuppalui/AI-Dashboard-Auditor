interface UnderstandingConfidenceProps {
  confidence: number;
  explanation: string;
}

interface UnderstandingConfidenceProps {
  confidence: number;
  explanation: string;
}

export default function UnderstandingConfidence({
  confidence,
  explanation,
}: UnderstandingConfidenceProps) {
  const confidenceLevel =
    confidence >= 90
      ? "High"
      : confidence >= 70
      ? "Medium"
      : "Low";

  return (
    <section className="review-card">
      <h3 className="review-card-title">
        AI Confidence
      </h3>

      <div className="confidence-score">
        <span className="confidence-value">
          {confidence}%
        </span>

        <span className="confidence-badge">
          {confidenceLevel} Confidence
        </span>
      </div>

      <p className="review-body">
        {explanation}
      </p>
    </section>
  );
}