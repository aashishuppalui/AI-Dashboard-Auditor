interface UnderstandingDetailsProps {
  primaryUser: string;
  primaryGoal: string;
  primaryTask: string;
  primaryDecision: string;
  dashboardCategory: string;
}

export default function UnderstandingDetails({
  primaryUser,
  primaryGoal,
  primaryTask,
  primaryDecision,
  dashboardCategory,
}: UnderstandingDetailsProps) {

  const items = [
    {
      label: "Primary User",
      value: primaryUser,
    },
    {
      label: "Primary Goal",
      value: primaryGoal,
    },
    {
      label: "Primary Decision",
      value: primaryDecision,
    },
    {
      label: "Dashboard Category",
      value: dashboardCategory,
    },
    {
      label: "Primary Task",
      value: primaryTask,
    },
  ];

  return (
    <section className="review-card">
      <p className="review-intro">
        Based on the dashboard, the AI identified:
      </p>

      {items.map((item) => (
        <div key={item.label} className="understanding-item">
          <span className="understanding-label">
            {item.label}
          </span>

          <p className="understanding-value">
            {item.value}
          </p>
        </div>
      ))}
    </section>
  );
}