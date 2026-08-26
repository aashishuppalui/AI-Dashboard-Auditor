import type { ObservableEvidenceItem } from "../../schemas/reasoning/evidence";

interface EvidenceCardProps {
  evidence: ObservableEvidenceItem;
}

export default function EvidenceCard({
  evidence,
}: EvidenceCardProps) {
  return (
    <article
      style={{
        padding: "20px 0",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Evidence identity */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#6b7280",
          }}
        >
          {evidence.id}
        </span>

        <h3
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          {evidence.title}
        </h3>
      </div>

      {/* Observation */}
      <div style={{ marginBottom: "14px" }}>
        <p
          style={{
            margin: "0 0 5px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#6b7280",
          }}
        >
          Observation
        </p>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          {evidence.observation}
        </p>
      </div>

      {/* Location + Confidence */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        <span>
          <strong>Location:</strong>{" "}
          {evidence.location}
        </span>

        <span>
          <strong>Confidence:</strong>{" "}
          {(evidence.confidence * 100).toFixed(0)}%
        </span>
      </div>
    </article>
  );
}