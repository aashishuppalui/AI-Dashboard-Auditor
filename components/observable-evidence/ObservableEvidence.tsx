import EvidenceHeader from "./EvidenceHeader";
import EvidenceList from "./EvidenceList";
import EvidenceFooter from "./EvidenceFooter";

export interface EvidenceModel {
  id: string;
  observation: string;
  rationale: string;
  impact: string;
  severity: "Low" | "Medium" | "High";
}

export interface ObservableEvidenceModel {
  evidence: EvidenceModel[];
}

interface ObservableEvidenceProps {
  observableEvidence: ObservableEvidenceModel;
}

export default function ObservableEvidence({
  observableEvidence,
}: ObservableEvidenceProps) {
  return (
    <section className="review-section">

      <EvidenceHeader />

      <EvidenceList
        evidence={observableEvidence.evidence}
      />

      <EvidenceFooter
        evidenceCount={observableEvidence.evidence.length}
      />

    </section>
  );
}