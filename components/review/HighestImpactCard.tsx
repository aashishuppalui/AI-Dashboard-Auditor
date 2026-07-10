import type { Finding } from "../../schemas/finding";

interface HighestImpactCardProps {
  finding: Finding;
}

export default function HighestImpactCard({
  finding,
}: HighestImpactCardProps) {
  return (
    <section>
  <h2>⭐ Highest Impact Finding</h2>

  <h3>{finding.title}</h3>

  <p>{finding.summary}</p>

  <p>
    <strong>Severity:</strong>{" "}
    {finding.severity}
  </p>

  <p>
    <strong>Confidence:</strong>{" "}
    {(finding.confidence * 100).toFixed(0)}%
  </p>
</section>
  );
}