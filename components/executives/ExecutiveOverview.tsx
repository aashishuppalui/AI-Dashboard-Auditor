import ReviewInfoCard from "./ReviewInfoCard";
import DESCard from "./DESCard";
import ImprovementCard from "./ImprovementCard";
import ExecutiveAssessmentCard from "../executives/ExecutiveAssessmentCard";

export default function ExecutiveOverview() {
  return (
    <section
      style={{
        marginBottom: "48px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "24px",
        }}
      >
        Executive Intelligence
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "24px",
          marginBottom: "24px",
          alignItems: "stretch",
        }}
      >
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