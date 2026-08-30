import type { ObservableEvidenceItem } from "../../schemas/reasoning/evidence";

interface EvidenceCardProps {
  evidence: ObservableEvidenceItem;
}

export default function EvidenceCard({
  evidence,
}: EvidenceCardProps) {
  return (
    <article className="evidence-card report-card">
      {/* Evidence Header */}
      <header className="evidence-card-header">
        <div className="evidence-card-identity">
          
          <span className="evidence-id">
            {evidence.id}
          </span>

          <h3 className="evidence-card-title">
            {evidence.title}
          </h3>
        </div>

        <div className="evidence-card-meta">
          <span>
            <span className="evidence-meta-label">
              Location
            </span>

            <span className="evidence-meta-value">
              {evidence.location}
            </span>
          </span>

          <span>
            <span className="evidence-meta-label">
              Confidence
            </span>

            <span className="evidence-meta-value">
              {(evidence.confidence * 100).toFixed(0)}%
            </span>
          </span>
        </div>
      </header>

      {/* Observation */}
      <div className="evidence-observation">
        <p className="evidence-label">
          Observation
        </p>

        <p className="evidence-observation-text">
          {evidence.observation}
        </p>
      </div>
    </article>
  );
}