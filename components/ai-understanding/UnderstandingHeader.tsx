interface UnderstandingHeaderProps {
  title?: string;
  description?: string;
}

export default function UnderstandingHeader({
  title = "AI Understanding",
  description = "Before evaluating usability, the AI first identifies who the dashboard is designed for, the decisions it supports, and the key information it presents. This understanding provides the context for the review.",
}: UnderstandingHeaderProps) {
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