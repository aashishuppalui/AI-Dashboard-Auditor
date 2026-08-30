const steps = [
  {
    number: "01",
    title: "Upload",
    description:
      "Upload a dashboard screenshot you want to review.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "AI identifies the interface, users, goals, and decisions the dashboard supports.",
  },
  {
    number: "03",
    title: "Review",
    description:
      "Get evidence-backed findings and prioritized UX recommendations.",
  },
];

export default function HowItWorks() {
  return (
    <section  id="how-it-works"
  className="home-section home-how-it-works">
      <header className="home-section-header">
        <p className="home-section-eyebrow">
          How it works
        </p>

        <h2 className="home-section-title">
          From dashboard to decision insight.
        </h2>
      </header>

      <div className="home-steps">
        {steps.map((step) => (
          <article
            key={step.number}
            className="home-step"
          >
            <span className="home-step-number">
              {step.number}
            </span>

            <h3 className="home-step-title">
              {step.title}
            </h3>

            <p className="home-step-description">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}