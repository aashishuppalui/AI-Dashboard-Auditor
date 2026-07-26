interface ActionRoadmapProps {
  immediateActions: string[];
  nextActions: string[];
  laterActions: string[];
}

export default function ActionRoadmap({
  immediateActions,
  nextActions,
  laterActions,
}: ActionRoadmapProps) {
  return (
    <div className="review-card">

      <h3 className="review-card-title">
        Action Roadmap
      </h3>

      <div className="roadmap-section">
        <h4 className="roadmap-title">
          Immediate
        </h4>

        <ul className="roadmap-list">
          {immediateActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      <div className="roadmap-section">
        <h4 className="roadmap-title">
          Next
        </h4>

        <ul className="roadmap-list">
          {nextActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

      <div className="roadmap-section">
        <h4 className="roadmap-title">
          Later
        </h4>

        <ul className="roadmap-list">
          {laterActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}