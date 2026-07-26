interface EvidenceFooterProps {
  evidenceCount: number;
}

export default function EvidenceFooter({
  evidenceCount,
}: EvidenceFooterProps) {
  return (
    <footer className="review-footer">
      <p className="review-footer-text">
        The AI identified{" "}
        <strong>{evidenceCount}</strong>{" "}
        supporting {evidenceCount === 1 ? "observation" : "observations"} to
        explain the highest-impact finding.
      </p>

      <p className="review-footer-text">
        The next section translates these observations into practical UX
        recommendations you can implement.
      </p>
    </footer>
  );
}