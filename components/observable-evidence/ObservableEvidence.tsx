import EvidenceHeader from "./EvidenceHeader";
import EvidenceList from "./EvidenceList";

import type { Evidence } from "../../schemas/reasoning/evidence";

interface ObservableEvidenceProps {
  observableEvidence: Evidence;
}

export default function ObservableEvidence({
  observableEvidence,
}: ObservableEvidenceProps) {
  return (
    <section className="evidence-section">
      <EvidenceHeader
        evidenceCount={observableEvidence.evidence.length}
      />

      <EvidenceList
        evidence={observableEvidence.evidence}
      />
    </section>
  );
}