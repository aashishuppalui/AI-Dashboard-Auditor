interface SummaryFooterProps {
  closingStatement: string;
}

export default function SummaryFooter({
  closingStatement,
}: SummaryFooterProps) {
  return (
    <footer className="review-footer">

      <p className="review-footer-text">
        {closingStatement}
      </p>

      <p className="review-footer-text">
        Thank you for using UX Review Companion.
      </p>

    </footer>
  );
}