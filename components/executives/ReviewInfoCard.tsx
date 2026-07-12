interface ReviewInfoCardProps {
  confidence: number;
  evidenceCount: number;
  model: string;
  generatedAt: string;
}

export default function ReviewInfoCard({
  confidence,
  evidenceCount,
  model,
  generatedAt,
}: ReviewInfoCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        background: "#ffffff",
        height: "100%",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "24px",
        }}
      >
        Review Info
      </h3>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Confidence
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {confidence}%
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Evidence
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {evidenceCount} Observations
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Model
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {model}
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          Generated
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          {generatedAt}
        </div>
      </div>
    </section>
  );
}