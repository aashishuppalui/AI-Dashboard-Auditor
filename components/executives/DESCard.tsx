import "../styles/component.css";
import "../styles/token.css";
import "../styles/executive.css";


interface DESCardProps {
  score: number;
  rating: "Excellent" | "Good" | "Fair" | "Needs Attention";
}

export default function DESCard({
  score,
  rating,
}: DESCardProps) {
  return (
    <section className="executive-card executive-kpi-card">
      <h3 className="executive-card-title">
        Design Effectiveness
      </h3>

      <div className="hero-kpi">
        {score}
      </div>

      <div className="kpi-footer">
        <span className="kpi-badge">
          {rating}
        </span>

        <span className="kpi-caption">
          DES
        </span>
      </div>
    </section>
  );
}