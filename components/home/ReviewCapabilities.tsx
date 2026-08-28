const capabilities = [
  {
    title: "Executive understanding",
    description:
      "Understand the dashboard's users, goals, and primary decision.",
  },
  {
    title: "Observable evidence",
    description:
      "See the interface observations supporting the identified findings.",
  },
  {
    title: "Prioritized findings",
    description:
      "Focus attention on the UX issues with the greatest decision impact.",
  },
  {
    title: "Practical recommendations",
    description:
      "Translate findings into concrete actions your team can evaluate.",
  },
];

export default function ReviewCapabilities() {
  return (
    <section  id="what-youll-get"
  className="home-section home-capabilities">
      <header className="home-section-header">
        <p className="home-section-eyebrow">
          What you&apos;ll get
        </p>

        <h2 className="home-section-title">
          A review built around decisions, not just screens.
        </h2>
      </header>

      <div className="home-capabilities-grid">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="home-capability"
          >
            <span
              className="home-capability-icon"
              aria-hidden="true"
            >
              ✓
            </span>

            <div>
              <h3 className="home-capability-title">
                {capability.title}
              </h3>

              <p className="home-capability-description">
                {capability.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}