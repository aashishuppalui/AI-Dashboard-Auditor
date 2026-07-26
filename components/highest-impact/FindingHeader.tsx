interface FindingHeaderProps {
  title?: string;
  description?: string;
}

export default function FindingHeader({
  title = "Highest Impact Finding",
  description = "The AI identified this as the single usability improvement expected to deliver the greatest impact if addressed.",
}: FindingHeaderProps) {
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