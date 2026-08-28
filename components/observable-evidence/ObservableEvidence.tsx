import EvidenceHeader from "./EvidenceHeader";
import EvidenceList from "./EvidenceList";
import EvidenceFooter from "./EvidenceFooter";

import type { Evidence } from "../../schemas/reasoning/evidence";

interface ObservableEvidenceProps {
  observableEvidence: Evidence;
}

export default function ObservableEvidence({
  observableEvidence,
}: ObservableEvidenceProps) {
  return (
    <section className="evidence-section">
      <EvidenceHeader />

      <EvidenceList
        evidence={observableEvidence.evidence}
      />

      <EvidenceFooter
        evidenceCount={
          observableEvidence.evidence.length
        }
      />
    </section>
  );
}