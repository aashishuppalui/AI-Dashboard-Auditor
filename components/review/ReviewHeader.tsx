interface ReviewHeaderProps {
  reviewId: string;
  createdAt: string;
  model: string;
}

export default function ReviewHeader({
  reviewId,
  createdAt,
  model,
}: ReviewHeaderProps) {
  const formattedDate = new Date(
    createdAt
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "40px",
        paddingBottom: "28px",
        marginBottom: "32px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Report identity */}
      <div>
        {/* <p
          style={{
            margin: "0 0 8px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6b7280",
          }}
        >
          UX Audit
        </p> */}

        <h1
          style={{
            margin: 0,
            fontSize: "30px",
            lineHeight: 1.2,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#111827",
          }}
        >
          Dashboard Decision Effectiveness Review
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          AI-assisted UX Audit Report for the dashboard, generated on {formattedDate}. 
        </p>
      </div>

      {/* Metadata */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "28px",
          rowGap: "8px",
          minWidth: "260px",
          fontSize: "12px",
        }}
      >
        <span
          style={{
            color: "#9ca3af",
          }}
        >
          Review ID
        </span>

        <span
          style={{
            color: "#374151",
            fontWeight: 500,
            textAlign: "right",
          }}
        >
          {reviewId}
        </span>

        {/* <span
          style={{
            color: "#9ca3af",
          }}
        >
          Generated
        </span>

        <span
          style={{
            color: "#374151",
            fontWeight: 500,
            textAlign: "right",
          }}
        >
          {formattedDate}
        </span> */}

        {/* <span
          style={{
            color: "#9ca3af",
          }}
        >
          Model
        </span>

        <span
          style={{
            color: "#374151",
            fontWeight: 500,
            textAlign: "right",
          }}
        >
          {model}
        </span> */}
      </div>
    </header>
  );
}