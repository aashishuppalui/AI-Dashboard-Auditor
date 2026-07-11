import type { DashboardClassification } from "../../schemas/dashboardClassification";

interface UnderstandingCardProps {
  understanding: DashboardClassification;
}

export default function UnderstandingCard({
  understanding,
}: UnderstandingCardProps) {
  const confidenceLabel =
    understanding.confidence >= 0.9
      ? "High Confidence"
      : understanding.confidence >= 0.7
      ? "Medium Confidence"
      : "Low Confidence";

  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "24px",
        background: "#fff",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "24px",
        }}
      >
        🧠 Dashboard Understanding
      </h2>

      {/* Identity */}

      <div style={{ marginBottom: "16px" }}>
        <strong>Dashboard Type</strong>

        <p>{understanding.dashboardType}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>Primary User</strong>

        <p>{understanding.primaryUser}</p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <strong>Primary Decision</strong>

        <p>{understanding.primaryDecisionSupported}</p>
      </div>

      <hr />

      {/* Summary */}

      <div
        style={{
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <strong>Summary</strong>

        <p>{understanding.dashboardSummary}</p>
      </div>

      <hr />

      {/* Confidence */}

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <strong>Confidence</strong>

        <p>
          {confidenceLabel} •{" "}
          {(understanding.confidence * 100).toFixed(0)}%
        </p>
      </div>
    </section>
  );
}