interface FindingFooterProps {
  supportingEvidence: number;
}

export default function FindingFooter({
  supportingEvidence,
}: FindingFooterProps) {
  return (
    <footer className="review-footer">

      <p className="review-footer-text">
        This finding is supported by{" "}
        <strong>{supportingEvidence}</strong>{" "}
        evidence {supportingEvidence === 1 ? "observation" : "observations"}.
      </p>

      <p className="review-footer-text">
        The next section explains the evidence behind this recommendation in
        more detail.
      </p>

    </footer>
  );
}