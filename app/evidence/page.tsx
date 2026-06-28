import EvidenceList from "../../components/review/EvidenceList";
import { mockEvidence } from "../../lib/mockEvidence";

export default function EvidencePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <EvidenceList
        evidence={mockEvidence.evidence}
      />
    </main>
  );
}