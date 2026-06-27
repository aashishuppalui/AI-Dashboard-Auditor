interface EvidenceCardProps {
  evidence: string[];
  confidence: number;
}

export default function EvidenceCard({
  evidence,
  confidence,
}: EvidenceCardProps) {
  return (
    <section>
      <h2>🔍 Observable Evidence</h2>

      <ul>
        {evidence.map((item, index) => (
          <li key={index}>
            ✓ {item}
          </li>
        ))}
      </ul>

      <br />

      <strong>
        Confidence: {confidence}%
      </strong>
    </section>
  );
}