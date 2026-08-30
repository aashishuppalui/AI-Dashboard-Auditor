import { FileSearch } from "lucide-react";

interface EvidenceHeaderProps {
  title?: string;
  evidenceCount: number;
}

export default function EvidenceHeader({
  title = "Supporting Evidence",
  evidenceCount,
}: EvidenceHeaderProps) {
  return (
    <header className="evidence-section-header">
      <div className="report-section-heading">
        <FileSearch
          size={16}
          strokeWidth={1.8}
          className="report-section-icon"
          aria-hidden="true"
        />

        <h2 className="report-section-title">
          {title}
        </h2>
      </div>

      <div className="evidence-basis">

        <p className="evidence-basis-text">
          <strong>{evidenceCount} observable points</strong>{" "}
          support this finding. The evidence below shows what
          was observed and where it appeared.
        </p>
      </div>
    </header>
  );
}