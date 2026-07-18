import PriorityActionCard from "./PriorityActionCard";
import type { PriorityAction } from "../../schemas/priorityAction";

interface PriorityActionsSectionProps {
  actions: PriorityAction[];
}

export default function PriorityActionsSection({
  actions,
}: PriorityActionsSectionProps) {
  return (
    <section
      style={{
        marginTop: "48px",
      }}
    >
      <h2
        style={{
          marginBottom: "8px",
        }}
      >
        Priority Actions
      </h2>

      <p
        style={{
          marginTop: 0,
          marginBottom: "32px",
          color: "#6b7280",
        }}
      >
        Showing the 3 highest-impact actions.
      </p>

      {actions.map((action) => (
        <div
          key={action.id}
          style={{
            marginBottom: "24px",
          }}
        >
          <PriorityActionCard
            action={action}
          />
          <h2 style={{ color: "red" }}>
  PRIORITY ACTIONS TEST
</h2>
        </div>
      ))}
    </section>
  );
}