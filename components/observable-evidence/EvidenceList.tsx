import type { ObservableEvidenceItem } from "../../schemas/reasoning/evidence";

import EvidenceCard from "./EvidenceCard";

interface EvidenceListProps {
  evidence: ObservableEvidenceItem[];
}

export default function EvidenceList({
  evidence,
}: EvidenceListProps) {
  return (
    <div>
      {evidence.map((item) => (
        <EvidenceCard
          key={item.id}
          evidence={item}
        />
      ))}
    </div>
  );
}