import type { DES } from "../../schemas/des";
import { BarChart3 } from "lucide-react";

interface DESBreakdownV2Props {
  des: DES;
}

function getDESStatusClass(score: number) {
  if (score >= 90) {
    return "v2-des-status-excellent";
  }

  if (score >= 75) {
    return "v2-des-status-good";
  }

  if (score >= 60) {
    return "v2-des-status-needs-attention";
  }

  if (score >= 40) {
    return "v2-des-status-weak";
  }

  return "v2-des-status-critical";
}

function getDESStatusLabel(score: number) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Needs attention";
  if (score >= 40) return "Weak";

  return "Critical";
}

function getDimensionFillClass(score: number) {
  if (score >= 16) {
    return "v2-des-fill-strong";
  }

  if (score >= 12) {
    return "v2-des-fill-moderate";
  }

  return "v2-des-fill-weak";
}

export default function DESBreakdownV2({
  des,
}: DESBreakdownV2Props) {
  const statusLabel = getDESStatusLabel(des.score);
  const statusClass = getDESStatusClass(des.score);

  return (
    <section className="v2-des-breakdown report-card">
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="v2-des-breakdown-header">
        <div>
          <div className="report-section-heading">
            <BarChart3
              size={16}
              strokeWidth={1.8}
              className="report-section-icon"
              aria-hidden="true"
            />

            <h2 className="v2-des-breakdown-title">
              How the score is calculated
            </h2>
          </div>

          <p className="v2-des-breakdown-description">
            Breakdown of the 5 dimensions that contribute to the
            Decision Effectiveness Score.
          </p>
        </div>
      </header>

      {/* =====================================================
          BREAKDOWN BODY
          ===================================================== */}

      <div className="v2-des-breakdown-body">
        {/* ===================================================
            DIMENSIONS
            =================================================== */}

        <div className="v2-des-dimensions">
          {des.dimensions.map((dimension) => {
            const percentage =
              (dimension.score / 20) * 100;

            const fillClass =
              getDimensionFillClass(
                dimension.score
              );

            return (
              <div
                key={dimension.dimension}
                className="v2-des-dimension"
              >
                <span className="v2-des-dimension-name">
                  {dimension.dimension}
                </span>

                <div
                  className="v2-des-dimension-bar"
                  aria-hidden="true"
                >
                  <div
                    className={`v2-des-dimension-fill ${fillClass}`}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                <span className="v2-des-dimension-score">
                  {dimension.score} / 20
                </span>
              </div>
            );
          })}
        </div>

        {/* ===================================================
            OVERALL
            =================================================== */}

        <div className="v2-des-overall">
          <p className="v2-des-overall-label">
            Overall
          </p>

          <p className="v2-des-overall-score">
            {des.score}
            <span> / 100</span>
          </p>

          <span
            className={`v2-des-overall-status ${statusClass}`}
          >
            <span
              className="v2-des-overall-status-dot"
              aria-hidden="true"
            />

            {statusLabel}
          </span>

          <p className="v2-des-overall-explanation">
            The score reflects how effectively the dashboard
            supports its intended decision across the five
            dimensions above.
          </p>
        </div>
      </div>
    </section>
  );
}