import type { Finding } from "../../../schemas/reasoning/finding";

interface HighestImpactCardProps {
  finding: Finding;
}

export default function HighestImpactCard({
  finding,
}: HighestImpactCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "24px",
        background: "#ffffff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Highest Impact Finding
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              padding: "5px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
              background: "#f3f4f6",
            }}
          >
            {finding.severity}
          </span>

          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            Confidence{" "}
            <strong
              style={{
                color: "#111827",
              }}
            >
              {(finding.confidence * 100).toFixed(0)}%
            </strong>
          </span>
        </div>
      </div>

      {/* Finding */}
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "20px",
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          {finding.title}
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#374151",
          }}
        >
          {finding.summary}
        </p>
      </div>

      {/* Evidence */}
      <div
        style={{
          paddingTop: "16px",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "12px",
            fontWeight: 600,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Supported by
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {finding.supportedBy.map((evidenceId) => (
            <span
              key={evidenceId}
              style={{
                padding: "5px 9px",
                border: "1px solid #e5e7eb",
                borderRadius: "999px",
                fontSize: "12px",
                background: "#f9fafb",
              }}
            >
              {evidenceId}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}