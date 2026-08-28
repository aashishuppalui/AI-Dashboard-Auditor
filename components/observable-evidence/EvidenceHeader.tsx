interface EvidenceHeaderProps {
  title?: string;
  description?: string;
}

export default function EvidenceHeader({
  title = "Supporting Evidence",
  description = "The following observations provide the observable evidence supporting this finding.",
}: EvidenceHeaderProps) {
  return (
    <header className="evidence-section-header">
      <h2 className="report-section-title">
        {title}
      </h2>

      <p className="report-section-description">
        {description}
      </p>
    </header>
  );
}