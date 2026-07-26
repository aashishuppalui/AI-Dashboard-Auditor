interface EvidenceHeaderProps {
  title?: string;
  description?: string;
}

export default function EvidenceHeader({
  title = "Supporting Evidence",
  description = "The following observations explain why the AI identified this as the highest-impact usability improvement.",
}: EvidenceHeaderProps) {
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