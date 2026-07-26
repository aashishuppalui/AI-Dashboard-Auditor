import "../styles/component.css";
import "../styles/token.css";
import "../styles/executive.css";

interface ExecutiveAssessmentCardProps {
  summary: string;
  opportunity: string;
}

export default function ExecutiveAssessmentCard({
  summary,
  opportunity,
}: ExecutiveAssessmentCardProps) {
  return (
    <section className="executive-card">
      <h3 className="executive-card-title">
        AI Executive Assessment
      </h3>

      <div>
        <div className="kpi-label">
         Overall Assessment
        </div>

        <p  className="executive-body">
          {summary}
        </p>
      </div>

      <hr className="executive-divider" />

      <div>
      <div className="kpi-label">
          Top Opportunity
        </div>

        <p  className="executive-body">
          {opportunity}
        </p>
      </div>
    </section>
  );
}