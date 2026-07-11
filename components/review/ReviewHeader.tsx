interface ReviewHeaderProps {
  title: string;
  createdAt: string;
  model: string;
  version: string;
}

export default function ReviewHeader({
  title,
  createdAt,
  model,
  version,
}: ReviewHeaderProps) {
  const formattedDate = new Date(
    createdAt
  ).toLocaleString();

  return (
    <header
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "24px",
        background: "#fff",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "8px",
        }}
      >
        AI UX Review
      </h1>

      <p
        style={{
          margin: 0,
          color: "#555",
          fontSize: "16px",
        }}
      >
        {title}
      </p>

      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "20px",
          fontSize: "14px",
          color: "#666",
          flexWrap: "wrap",
        }}
      >
        <span>
          <strong>Generated:</strong>{" "}
          {formattedDate}
        </span>

        <span>
          <strong>Model:</strong>{" "}
          {model}
        </span>

        <span>
          <strong>Version:</strong>{" "}
          {version}
        </span>
      </div>
    </header>
  );
}