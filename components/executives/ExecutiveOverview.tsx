import "../styles/token.css";
import "../styles/component.css";
import "../styles/executive.css";

import ReviewInfoCard from "./ReviewInfoCard";
import DESCard from "./DESCard";
import ImprovementCard from "./ImprovementCard";
import ExecutiveAssessmentCard from "../executives/ExecutiveAssessmentCard";


export default function ExecutiveOverview() {
  return (
    <section className="executive-section">
      <h2 className="executive-title">
        Executive Intelligence
      </h2>

      <div className="executive-grid">
        <ReviewInfoCard
  confidence={96}
  evidenceCount={10}
  model="GPT-5.5"
  generatedAt="Today"
/>

        <DESCard score={74} rating="Good" />

        <ImprovementCard currentScore={74} potentialScore={85} />
      </div>

      <ExecutiveAssessmentCard
  summary="The dashboard provides strong visibility into production performance but prioritizes monitoring over rapid operational decision-making. Critical production interruptions require greater visual prominence to support faster intervention."

  opportunity="Improving the visibility of downtime events, contextual actions, and production bottlenecks could significantly improve decision speed and increase the Design Effectiveness Score."
/>
    </section>
  );
}