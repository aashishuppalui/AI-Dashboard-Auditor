interface UnderstandingSummaryProps {
  summary: string;
}

export default function UnderstandingSummary({
  summary,
}: UnderstandingSummaryProps) {
  return (
    <section className="review-card">
      <h3 className="review-card-title">
        Dashboard Summary
      </h3>

      <p className="review-intro">
        Based on the dashboard, the AI identified the following purpose:
      </p>

      <p className="review-body">
        {summary}
      </p>
    </section>
  );
}