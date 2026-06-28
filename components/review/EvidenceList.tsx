import { EvidenceItem } from "../../types";

interface Props {
  evidence: EvidenceItem[];
}

export default function EvidenceList({
  evidence,
}: Props) {
  return (
    <div>
      <h2>Observable Evidence</h2>

      {evidence.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <h3>
            {item.severity} • {item.type}
          </h3>

          <p>
            <strong>Observation:</strong>{" "}
            {item.observation}
          </p>

          <p>
            <strong>Reasoning:</strong>{" "}
            {item.reasoning}
          </p>
        </div>
      ))}
    </div>
  );
}