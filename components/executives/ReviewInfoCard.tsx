import "../styles/component.css";
import "../styles/token.css";
import "../styles/executive.css";

interface ReviewInfoCardProps {
  confidence: number;
  evidenceCount: number;
  model: string;
  generatedAt: string;
}

export default function ReviewInfoCard({
  confidence,
  evidenceCount,
  model,
  generatedAt,
}: ReviewInfoCardProps) {
  return (
    <section className="executive-card">
      <h3 className="executive-card-title">
        Review Info
      </h3>

      <div className="kpi-section">
        <div className="kpi-label">
          Confidence
        </div>

        <div className="kpi-value">
          {confidence}%
        </div>
      </div>

      <div className="kpi-section">
        <div className="kpi-label">
          Evidence
        </div>

        <div className="kpi-value">
          {evidenceCount} {evidenceCount === 1 ? "Observation" : "Observations"}
        </div>
      </div>

      <div className="kpi-section">
        <div className="kpi-label">
          Model
        </div>

        <div className="kpi-value">
          {model}
        </div>
      </div>

      <div className="kpi-section">
        <div className="kpi-label">
          Generated
        </div>

        <div className="kpi-value">
          {generatedAt}
        </div>
      </div>
    </section>
  );
}