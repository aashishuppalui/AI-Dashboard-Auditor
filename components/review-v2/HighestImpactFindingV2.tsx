import type { Finding } from "../../schemas/reasoning/finding";
import type { ObservableEvidenceItem } from "../../schemas/reasoning/evidence";

import {
  Target,
} from "lucide-react";

interface HighestImpactFindingV2Props {
  finding: Finding;
  evidence: ObservableEvidenceItem[];
}

function getSeverityClass(severity: Finding["severity"]) {
  switch (severity) {
    case "Critical":
      return "v2-finding-critical";

    case "High":
      return "v2-finding-high";

    case "Medium":
      return "v2-finding-medium";

    case "Low":
      return "v2-finding-low";

    default:
      return "v2-finding-low";
  }
}

function getSeverityLabel(severity: Finding["severity"]) {
  switch (severity) {
    case "Critical":
      return "Critical impact";

    case "High":
      return "High impact";

    case "Medium":
      return "Medium impact";

    case "Low":
      return "Low impact";

    default:
      return "Low impact";
  }
}

function getConfidenceLabel(confidence: number) {
  return `${Math.round(confidence * 100)}%`;
}

export default function HighestImpactFindingV2({
  finding,
  evidence,
}: HighestImpactFindingV2Props) {
  const supportedEvidence = evidence.filter((item) =>
    finding.supportedBy.includes(item.id)
  );

  const severityClass = getSeverityClass(
    finding.severity
  );

  const severityLabel = getSeverityLabel(
    finding.severity
  );

  return (
    <section
      className={`v2-finding ${severityClass}`}
    >
      {/* =====================================================
          FINDING HEADER
          ===================================================== */}

      <header className="v2-finding-header">

        <div className="v2-finding-heading">
          <Target
            size={16}
            strokeWidth={1.8}
            className="v2-finding-icon"
            aria-hidden="true"
          />

          <h2 className="v2-finding-section-title">
            Highest-Impact Finding
          </h2>
        </div>

        <div className="v2-finding-meta">

          <span className="v2-finding-severity">
            {severityLabel}
          </span>

          <span className="v2-finding-confidence">
            Confidence {getConfidenceLabel(
              finding.confidence
            )}
          </span>

        </div>
      </header>

      {/* =====================================================
          FINDING CONTENT
          ===================================================== */}

      <div className="v2-finding-content">

        <h3 className="v2-finding-title">
          {finding.title}
        </h3>

        <p className="v2-finding-summary">
          {finding.summary}
        </p>

      </div>

      {/* =====================================================
          SUPPORTING EVIDENCE
          ===================================================== */}

      {supportedEvidence.length > 0 && (
        <div className="v2-finding-support">

          <div className="v2-finding-support-heading">

            <p className="v2-finding-support-label">
              Supported by:
            </p>

            <span className="v2-finding-support-count">
              {supportedEvidence.length} observations
            </span>

          </div>

          <div className="v2-finding-evidence-list">

            {supportedEvidence.map((item) => (
              <div
                key={item.id}
                className="v2-finding-evidence-wrapper"
              >

                <span
                  className="v2-finding-evidence"
                  aria-label={`${item.id}: ${item.title}`}
                >
                  <span className="v2-finding-evidence-id">
                    {item.id}
                  </span>
                </span>

                {/* =================================================
                    DESKTOP HOVER DETAIL
                    ================================================= */}

                <div
                  className="v2-finding-evidence-tooltip"
                  role="tooltip"
                >
                  <p className="v2-finding-tooltip-title">
                    {item.id}
                  </p>

                  <p className="v2-finding-tooltip-observation">
                    {item.observation}
                  </p>

                  <div className="v2-finding-tooltip-meta">

                    <span>
                      {item.location}
                    </span>

                    <span>
                      Confidence{" "}
                      {getConfidenceLabel(
                        item.confidence
                      )}
                    </span>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      )}
    </section>
  );
}