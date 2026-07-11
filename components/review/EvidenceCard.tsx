import type { Evidence } from "../../schemas/evidence";

import EvidenceItem from "./EvidenceItem";

interface EvidenceCardProps {
  evidence: Evidence;
}

export default function EvidenceCard({
  evidence,
}: EvidenceCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "24px",
        background: "#fff",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "24px",
        }}
      >
        🔍 Observable Evidence
      </h2>

      {evidence.evidence.map((item) => (
        <EvidenceItem
          key={item.id}
          evidence={item}
        />
      ))}
    </section>
  );
}