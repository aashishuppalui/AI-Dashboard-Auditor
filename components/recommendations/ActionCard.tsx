import { ListChecks } from "lucide-react";

import type { PriorityAction } from "../../schemas/priorityAction";

interface ActionCardProps {
  data: PriorityAction[];
}

export default function ActionCard({ data }: ActionCardProps) {
  return (
    <section className="priority-actions">
      <header className="priority-actions-header">
        <div>
          <div className="report-section-heading">
            <ListChecks
              size={17}
              strokeWidth={1.8}
              className="report-section-icon"
              aria-hidden="true"
            />

            <h2 className="priority-actions-title">
              Priority Actions
            </h2>
          </div>

          <p className="priority-actions-description">
            Actions prioritized by their potential impact on the primary
            decision.
          </p>
        </div>
      </header>

      <div className="priority-actions-list">
        {data.map((action) => {
          const priorityClass = action.priority.toLowerCase();

          return (
            <article
              key={action.id}
              className={`priority-action-card priority-action-${priorityClass}`}
            >
              {/* =================================================
                  HEADER
                  ================================================= */}

              <header className="priority-action-header">
                <div className="priority-action-heading">
                  <span className="priority-action-level">
                    {action.priority}
                  </span>

                  <span
                    className="priority-action-divider"
                    aria-hidden="true"
                  >
                    |
                  </span>

                  <h3 className="priority-action-title">
                    {action.title}
                  </h3>
                </div>

                <span
                  className={`priority-action-badge priority-action-badge-${priorityClass}`}
                >
                  <span
                    className="priority-action-badge-dot"
                    aria-hidden="true"
                  />

                  {action.priorityLabel}
                </span>
              </header>

              {/* =================================================
                  WHY IT MATTERS
                  ================================================= */}

              <div className="priority-action-section">
                <h4 className="priority-action-label">
                  Why It Matters
                </h4>

                <p className="priority-action-text">
                  {action.whyItMatters}
                </p>
              </div>

              {/* =================================================
                  RECOMMENDED ACTION
                  ================================================= */}

              <div className="priority-action-recommendation">
                <h4 className="priority-action-label">
                  Recommended Action
                </h4>

                <div className="priority-action-recommendation-content">
                  <p className="priority-action-recommendation-text">
                    {action.recommendation}
                  </p>
                </div>
              </div>

              {/* =================================================
                  EXPECTED IMPACT
                  ================================================= */}

              <div className="priority-action-impact">
                <h4 className="priority-action-label">
                  Expected Impact
                </h4>

                <ul className="priority-action-impact-list">
                  {action.expectedImpact.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}