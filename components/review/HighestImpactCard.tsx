interface HighestImpactCardProps {
  finding: string;
}

export default function HighestImpactCard({
  finding,
}: HighestImpactCardProps) {
  return (
    <section>
      <h2>⭐ Highest Impact Finding</h2>

      <p>{finding}</p>
    </section>
  );
}