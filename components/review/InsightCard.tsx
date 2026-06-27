interface InsightCardProps {
  insight: string;
}

export default function InsightCard({
  insight,
}: InsightCardProps) {
  return (
    <section>
      <h2>🧠 AI Consultant Insight</h2>

      <p>{insight}</p>
    </section>
  );
}