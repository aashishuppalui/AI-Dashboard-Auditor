interface DESCardProps {
  score: number;
  rating: "Excellent" | "Good" | "Fair" | "Needs Attention";
}

export default function DESCard({
  score,
  rating,
}: DESCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        background: "#ffffff",
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
        Design Effectiveness
      </h3>

      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {score}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
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
          {rating}
        </span>

        <span
          style={{
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          DES
        </span>
      </div>
    </section>
  );
}