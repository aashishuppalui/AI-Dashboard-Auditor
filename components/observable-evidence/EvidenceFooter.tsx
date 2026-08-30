interface EvidenceFooterProps {
  evidenceCount: number;
}

export default function EvidenceFooter({
  evidenceCount,
}: EvidenceFooterProps) {
  return (
    <aside
      className="evidence-context-note"
      aria-label="Evidence context"
    >
      <div className="evidence-context-icon" aria-hidden="true">
        i
      </div>

      <div className="evidence-context-content">
        <p className="evidence-context-title">
          Evidence coverage
        </p>

        <p className="evidence-context-text">
          <strong>{evidenceCount} observable points</strong>{" "}
          support the highest-impact finding. The following
          section translates these observations into practical
          UX recommendations.
        </p>
      </div>
    </aside>
  );
}