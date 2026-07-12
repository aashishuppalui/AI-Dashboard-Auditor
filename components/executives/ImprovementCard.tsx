interface ImprovementCardProps {
  currentScore: number;
  potentialScore: number;
}

export default function ImprovementCard({
  currentScore,
  potentialScore,
}: ImprovementCardProps) {
  const improvement =
    potentialScore - currentScore;

  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        background: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: "24px",
        }}
      >
        Improvement
      </h3>

      <div
        style={{
          fontSize: "56px",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        +{improvement}
      </div>

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <span
          style={{
            padding: "4px 12px",
            border: "1px solid #d1d5db",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          High Opportunity
        </span>

        <div
          style={{
            marginTop: "16px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Potential DES: {potentialScore}
        </div>
      </div>
    </section>
  );
}