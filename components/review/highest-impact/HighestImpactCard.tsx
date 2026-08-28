import type { Finding } from "../../../schemas/reasoning/finding";
import type { Evidence } from "../../../schemas/reasoning/evidence";

interface HighestImpactCardProps {
  finding: Finding;
  evidence: Evidence;
}

export default function HighestImpactCard({
  finding,
  evidence,
}: HighestImpactCardProps) {
  const confidencePercent = Math.round(
    finding.confidence * 100
  );

  const supportedEvidence = finding.supportedBy
    .map((evidenceId) =>
      evidence.evidence.find(
        (item) => item.id === evidenceId
      )
    )
    .filter((item) => item !== undefined);

  return (
    <article className="finding-card report-card">
      <header className="finding-card-header">
        <p className="finding-card-eyebrow">
          Highest Impact Finding
        </p>

        <div className="finding-card-assessment">
          <span
            className={`report-badge ${
              finding.severity === "High"
                ? "report-badge-high"
                : finding.severity === "Medium"
                ? "report-badge-medium"
                : "report-badge-neutral"
            }`}
          >
            {finding.severity}
          </span>

          <span className="finding-confidence">
            Confidence{" "}
            <strong>{confidencePercent}%</strong>
          </span>
        </div>
      </header>

      <div className="finding-card-content">
        <h2 className="finding-card-title">
          {finding.title}
        </h2>

        <p className="finding-card-summary">
          {finding.summary}
        </p>
      </div>

      {supportedEvidence.length > 0 && (
        <footer
          className="finding-card-footer"
          aria-label="Supporting evidence"
        >
          <p className="finding-supported-label">
            Supported by
          </p>

          <div className="finding-evidence-list">
            {supportedEvidence.map((item) => (
              <div
                key={item.id}
                className="finding-evidence-tooltip-wrapper"
              >
                <button
                  type="button"
                  className="finding-evidence-chip"
                  aria-label={`View ${item.id}: ${item.title}`}
                >
                  {item.id}
                </button>

                <div
                  className="finding-evidence-tooltip"
                  role="tooltip"
                >
                  <p className="finding-tooltip-id">
                    {item.id}
                  </p>

                  <p className="finding-tooltip-title">
                    {item.title}
                  </p>

                  <p className="finding-tooltip-observation">
                    {item.observation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}