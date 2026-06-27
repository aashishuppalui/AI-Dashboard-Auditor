interface DESCardProps {
  des: number;
  potentialDes: number;
}

export default function DESCard({
  des,
  potentialDes,
}: DESCardProps) {
  return (
    <section>
      <h2>📊 Dashboard Effectiveness Score</h2>

      <p>
        <strong>Current DES:</strong> {des}
      </p>

      <p>
        <strong>Potential DES:</strong>{" "}
        {potentialDes}
      </p>

      <p>
        <strong>Opportunity:</strong> +
        {potentialDes - des}
      </p>
    </section>
  );
}