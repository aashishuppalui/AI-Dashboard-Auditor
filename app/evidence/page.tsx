import EvidenceList from "../../components/review/EvidenceList";
import { realEvidence } from "../../lib/mockEvidence";

export default function EvidencePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <EvidenceList
        evidence={realEvidence}
      />
    </main>
  );
}