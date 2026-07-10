import type { EvidenceItem } from "../../schemas/evidence";

interface EvidenceCardProps {
  evidence: EvidenceItem[];
  confidence: number;
}

export default function EvidenceCard({
  evidence,
  confidence,
}: EvidenceCardProps) {
  return (
    <section>
      <h2>🔍 Observable Evidence</h2>

      <ul>
  {evidence.map((item) => (
    <li
      key={item.id}
      style={{ marginBottom: "1rem" }}
    >
      <strong>{item.title}</strong>

      <p>{item.observation}</p>

      <small>
        📍 {item.location}
      </small>

      <br />

      <small>
        Confidence:{" "}
        {(item.confidence * 100).toFixed(0)}%
      </small>
    </li>
  ))}
</ul>

      <br />

      <strong>
  Overall Confidence:{" "}
  {(confidence * 100).toFixed(0)}%
</strong>
    </section>
  );
}