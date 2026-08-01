import type { Evidence } from "../../schemas/reasoning/evidence";

interface EvidenceListProps {
  evidence: Evidence[];
}

export default function EvidenceList({
  evidence,
}: EvidenceListProps) {
  return (
    <div>
      <h2>Supporting Evidence</h2>

      {evidence.map((item) => (
        <div
          key={item.id}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <h3>
            {item.severity.toUpperCase()} • {item.title}
          </h3>

          <p>
            <strong>Observation:</strong>{" "}
            {item.observation}
          </p>

          <p>
            <strong>Reasoning:</strong>{" "}
            {item.reasoning}
          </p>

          <p>
            <strong>Impact:</strong>{" "}
            {item.impact}
          </p>
        </div>
      ))}
    </div>
  );
}