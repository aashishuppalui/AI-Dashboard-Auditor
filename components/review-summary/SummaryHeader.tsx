interface SummaryHeaderProps {
  title?: string;
  description?: string;
}

export default function SummaryHeader({
  title = "Executive Summary",
  description = "A concise overview of the review, highlighting the most important findings and the recommended path forward.",
}: SummaryHeaderProps) {
  return (
    <header className="review-header">
      <h2 className="review-title">
        {title}
      </h2>

      <p className="review-subtitle">
        {description}
      </p>
    </header>
  );
}