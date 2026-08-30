import type { ExecutiveIntelligence } from "../../schemas/context/executive-intelligence";
import type { DES } from "../../schemas/des";

import { Sparkles } from "lucide-react";

interface ExecutiveOverviewProps {
  data: ExecutiveIntelligence;
  des: DES;
}

export default function ExecutiveOverview({
  data,
  des,
}: ExecutiveOverviewProps) {
  /**
   * DES visual state
   *
   * 0–59   → Weak
   * 60–79  → Moderate
   * 80–100 → Strong
   */
  const getDESStatusClass = (score: number) => {
    if (score >= 80) {
      return "des-status-strong";
    }

    if (score >= 60) {
      return "des-status-moderate";
    }

    return "des-status-weak";
  };

  const desStatusClass = getDESStatusClass(des.score);

  /**
   * Normalize displayed labels.
   *
   * Example:
   * "high" → "High"
   */
  const desLabel =
    des.label.charAt(0).toUpperCase() +
    des.label.slice(1).toLowerCase();

  const confidenceLabel =
    data.confidence.charAt(0).toUpperCase() +
    data.confidence.slice(1).toLowerCase();

  return (
    <section className="executive-overview report-card">
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="executive-overview-header">
        <div className="report-section-heading">
  <Sparkles
    size={16}
    strokeWidth={1.8}
    className="report-section-icon"
    aria-hidden="true"
  />

  <h2 className="executive-overview-title">
    Executive Intelligence
  </h2>
</div>

        {/* DES */}
        <div
          className="des-score-wrapper"
          tabIndex={0}
          aria-describedby="des-score-tooltip"
        >
          <div
            className="des-score"
            aria-label={`Decision Effectiveness Score ${des.score}, ${desLabel}`}
          >
            <span className="des-score-label">
              DES
            </span>

            <span className="des-score-value">
              {des.score}
            </span>

            <span
              className={`des-score-badge ${desStatusClass}`}
            >
              <span
                className="des-score-dot"
                aria-hidden="true"
              />

              {desLabel}
            </span>
          </div>

          {/* DES Tooltip */}
          <div
            id="des-score-tooltip"
            className="des-score-tooltip"
            role="tooltip"
          >
            <p className="des-tooltip-title">
              Decision Effectiveness Score
            </p>

            <p className="des-tooltip-text">
              Indicates how effectively the dashboard supports
              its primary decision based on the AI&apos;s analysis
              of the interface and observable evidence.
            </p>
          </div>
        </div>
      </header>

      {/* =====================================================
          TWO-COLUMN INTELLIGENCE
          ===================================================== */}

      <div className="executive-overview-grid">

        {/* ===================================================
            AI UNDERSTANDING
            =================================================== */}

        <div className="executive-overview-column executive-overview-column-left">
          <h3 className="executive-overview-subtitle">
            AI Understanding
          </h3>

          {/* Interface */}
          <div className="executive-overview-field">
            <p className="executive-overview-label">
              Interface
            </p>

            <p className="executive-overview-value">
              {data.interfaceType}
            </p>
          </div>

          {/* Primary Goal */}
          <div className="executive-overview-field">
            <p className="executive-overview-label">
              Primary Goal
            </p>

            <p className="executive-overview-value">
              {data.primaryGoal}
            </p>
          </div>

          {/* Confidence */}
          <div className="executive-overview-field">
            <p className="executive-overview-label">
              Confidence
            </p>

            <p className="executive-overview-value">
              {confidenceLabel}
            </p>
          </div>
        </div>

        {/* ===================================================
            DECISION LENS
            =================================================== */}

        <div className="executive-overview-column executive-overview-column-right">
          <h3 className="executive-overview-subtitle">
            Decision Lens
          </h3>

          {/* Primary User */}
          <div className="executive-overview-field">
            <p className="executive-overview-label">
              Primary User
            </p>

            <p className="executive-overview-value">
              {data.targetUsers.join(", ")}
            </p>
          </div>

          {/* Primary Decision */}
          <div className="executive-overview-field executive-overview-field-primary-decision">
            <p className="executive-overview-label">
              Primary Decision
            </p>

            <p className="executive-overview-value">
              {data.primaryDecision}
            </p>
          </div>

          {/* Decision Focus */}
          <div className="executive-overview-field executive-overview-field-focus">
            <p className="executive-overview-label">
              Decision Focus
            </p>

            <div className="decision-focus-list">
              {data.decisionFocus.map((focus) => (
                <span
                  key={focus}
                  className="decision-focus-chip"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}