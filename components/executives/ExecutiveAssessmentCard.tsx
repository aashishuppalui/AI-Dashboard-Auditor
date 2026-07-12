interface ExecutiveAssessmentCardProps {
  summary: string;
  opportunity: string;
}

export default function ExecutiveAssessmentCard({
  summary,
  opportunity,
}: ExecutiveAssessmentCardProps) {
  return (
    <section
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        background: "#ffffff",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "20px",
        }}
      >
        AI Executive Assessment
      </h3>

      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "8px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
         Overall Assessment
        </div>

        <p
          style={{
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          {summary}
        </p>
      </div>

      <hr
        style={{
          border: 0,
          borderTop: "1px solid #e5e7eb",
          margin: "24px 0",
        }}
      />

      <div>
        <div
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "8px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          Top Opportunity
        </div>

        <p
          style={{
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          {opportunity}
        </p>
      </div>
    </section>
  );
}