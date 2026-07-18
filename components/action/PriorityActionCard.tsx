import type { PriorityAction } from "../../schemas/priorityAction";

interface PriorityActionCardProps {
  action: PriorityAction;
}

export default function PriorityActionCard({
  action,
}: PriorityActionCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
            fontWeight: 600,
            marginBottom: "8px",
          }}
        >
          {action.priority} • {action.priorityLabel}
        </div>

        <h3
          style={{
            margin: 0,
          }}
        >
          {action.title}
        </h3>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>Issue</strong>
        <p>{action.issue}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>Why It Matters</strong>
        <p>{action.whyItMatters}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>Recommendation</strong>
        <p>{action.recommendation}</p>
      </div>

      <div>
        <strong>Expected Impact</strong>

        <ul>
          {action.expectedImpact.map((impact) => (
            <li key={impact}>{impact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}