import type { PriorityAction } from "../../schemas/priorityAction";

interface ActionCardProps {
  data: PriorityAction[];
}

export default function ActionCard({
  data,
}: ActionCardProps) {
  return (
    <section className="priority-actions">
      <header className="priority-actions-header">
        <h2 className="priority-actions-title">
          Priority Actions
        </h2>

        <p className="priority-actions-description">
          Recommended actions prioritized by their potential
          impact on the primary decision.
        </p>
      </header>

      <div className="priority-actions-list">
        {data.map((action) => (
          <article
            key={action.id}
            className={`priority-action-card priority-action-${action.priority.toLowerCase()}`}
          >
            {/* Header */}
            <header className="priority-action-header">
              <div className="priority-action-heading">
                <span className="priority-action-level">
                  {action.priority}
                </span>

                <h3 className="priority-action-title">
                  {action.title}
                </h3>
              </div>

              <span
  className={`priority-action-badge priority-action-badge-${action.priority.toLowerCase()}`}
>
  <span
    className="priority-action-badge-dot"
    aria-hidden="true"
  />

  {action.priorityLabel}
</span>
            </header>

            {/* Why It Matters */}
            <div className="priority-action-section">
              <h4 className="priority-action-label">
                Why It Matters
              </h4>

              <p className="priority-action-text">
                {action.whyItMatters}
              </p>
            </div>

            {/* Recommended Action */}
            <div className="priority-action-section priority-action-recommendation">
              <h4 className="priority-action-label">
                Recommended Action
              </h4>

              <p className="priority-action-text">
                {action.recommendation}
              </p>
            </div>

            {/* Expected Impact */}
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
        ))}
      </div>
    </section>
  );
}