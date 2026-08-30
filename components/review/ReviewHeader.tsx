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
  const formattedDate = new Date(createdAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "40px",
        paddingBottom: "28px",
        marginBottom: "32px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Report identity */}
      <div
        style={{
          flex: 1,
        }}
      >
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
          AI-assisted UX Audit Report for the dashboard, generated on{" "}
          {formattedDate}.
        </p>
      </div>

      {/* Metadata */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "16px",
          flexShrink: 0,
          paddingTop: "6px",
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
          }}
        >
          {reviewId}
        </span>
      </div>
    </header>
  );
}