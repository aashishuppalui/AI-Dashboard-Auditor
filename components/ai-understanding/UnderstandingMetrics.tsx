interface UnderstandingMetricsProps {
  metrics: string[];
}

interface UnderstandingMetricsProps {
  metrics: string[];
}

export default function UnderstandingMetrics({
  metrics,
}: UnderstandingMetricsProps) {
  return (
    <section className="review-card">
      <h3 className="review-card-title">
        Key Metrics Identified
      </h3>

      <p className="review-intro">
        These are the primary metrics the AI detected while understanding your dashboard.
      </p>

      <ul className="metric-list">
        {metrics.map((metric) => (
          <li key={metric} className="metric-item">
            {metric}
          </li>
        ))}
      </ul>
    </section>
  );
}