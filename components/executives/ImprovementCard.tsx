import "../styles/component.css";
import "../styles/token.css";
import "../styles/executive.css";

interface ImprovementCardProps {
  currentScore: number;
  potentialScore: number;
}

export default function ImprovementCard({
  currentScore,
  potentialScore,
}: ImprovementCardProps) {
  const improvement =
    potentialScore - currentScore;

  return (
    <section  className="executive-card executive-kpi-card">
      <h3 className="executive-card-title">
        Improvement
      </h3>

      <div className="hero-kpi">
        +{improvement}
      </div>

      <div className="kpi-footer-column">
        <span  className="kpi-badge">
          High Opportunity
        </span>

        <div className="kpi-caption">
          Potential DES: {potentialScore}
        </div>
      </div>
    </section>
  );
}