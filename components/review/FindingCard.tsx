import type { Finding } from "../../schemas/finding";

interface FindingCardProps {
  finding: Finding;
}

export default function FindingCard({
  finding,
}: FindingCardProps) {
  const confidenceLabel =
    finding.confidence >= 0.9
      ? "High Confidence"
      : finding.confidence >= 0.7
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

      {/* Severity */}

      <div
        style={{
          marginBottom: "16px",
        }}
      >
        <strong>Severity</strong>

        <p>{finding.severity}</p>
      </div>

      {/* Title */}

      <div
        style={{
          marginBottom: "16px",
        }}
      >
        <strong>Finding</strong>

        <p>{finding.title}</p>
      </div>

      {/* Summary */}

      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <strong>Summary</strong>

        <p>{finding.summary}</p>
      </div>

      <hr />

      {/* Evidence */}

      <div
        style={{
          marginTop: "24px",
          marginBottom: "24px",
        }}
      >
        <strong>Supported By</strong>

        <p>
          {finding.supportedBy.join(" • ")}
        </p>
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
          {(finding.confidence * 100).toFixed(0)}%
        </p>
      </div>
    </section>
  );
}