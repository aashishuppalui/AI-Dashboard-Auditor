import EvidenceCard from "./EvidenceCard";
import { EvidenceModel } from "./ObservableEvidence";

interface EvidenceListProps {
  evidence: EvidenceModel[];
}

export default function EvidenceList({
  evidence,
}: EvidenceListProps) {
  return (
    <div className="evidence-list">
      {evidence.map((item) => (
        <EvidenceCard
          key={item.id}
          observation={item.observation}
          rationale={item.rationale}
          impact={item.impact}
          severity={item.severity}
        />
      ))}
    </div>
  );
}