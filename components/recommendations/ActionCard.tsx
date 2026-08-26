import type { PriorityAction } from "../../schemas/priorityAction";

interface ActionCardProps {
  data: PriorityAction[];
}

export default function ActionCard({
  data,
}: ActionCardProps) {
  return (
    <section className="review-section">
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 600,
          }}
        >
          Priority Actions
        </h2>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: "14px",
            lineHeight: 1.5,
            color: "#6b7280",
          }}
        >
          Recommended actions prioritized by their potential impact on the
          primary decision.
        </p>
      </div>

      {data.map((action) => (
        <article
          key={action.id}
          style={{
            border: "1px solid #d1d5db",
            borderRadius: "12px",
            padding: "24px",
            marginBottom: "20px",
            background: "#ffffff",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#6b7280",
                }}
              >
                {action.priority}
              </span>

              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  lineHeight: 1.4,
                  fontWeight: 600,
                }}
              >
                {action.title}
              </h3>
            </div>

            <span
              style={{
                padding: "5px 10px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 600,
                background: "#f3f4f6",
                whiteSpace: "nowrap",
              }}
            >
              {action.priorityLabel}
            </span>
          </div>

          {/* Why */}
          <div
            style={{
              marginBottom: "18px",
            }}
          >
            <h4
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Why It Matters
            </h4>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {action.whyItMatters}
            </p>
          </div>

          {/* Recommended Action */}
          <div
            style={{
              marginBottom: "18px",
            }}
          >
            <h4
              style={{
                margin: "0 0 6px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Recommended Action
            </h4>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {action.recommendation}
            </p>
          </div>

          {/* Expected Impact */}
          <div
            style={{
              paddingTop: "16px",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <h4
              style={{
                margin: "0 0 8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              Expected Impact
            </h4>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {action.expectedImpact.map((impact) => (
                <li key={impact}>{impact}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}