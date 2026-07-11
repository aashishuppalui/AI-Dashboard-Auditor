import type { EvidenceItem as EvidenceItemType } from "../../schemas/evidence";

interface EvidenceItemProps {
  evidence: EvidenceItemType;
}

export default function EvidenceItem({
  evidence,
}: EvidenceItemProps) {
  const confidenceLabel =
    evidence.confidence >= 0.9
      ? "High Confidence"
      : evidence.confidence >= 0.7
      ? "Medium Confidence"
      : "Low Confidence";

  return (
    <article
      style={{
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "24px",
        marginBottom: "24px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "16px",
        }}
      >
        {evidence.id} · {evidence.title}
      </h3>

      <div
        style={{
          marginBottom: "16px",
        }}
      >
        <strong>Observation</strong>

        <p>{evidence.observation}</p>
      </div>

      <div
        style={{
          marginBottom: "16px",
        }}
      >
        <strong>Location</strong>

        <p>{evidence.location}</p>
      </div>

      <div>
        <strong>Confidence</strong>

        <p>
          {confidenceLabel} •{" "}
          {(evidence.confidence * 100).toFixed(0)}%
        </p>
      </div>
    </article>
  );
}