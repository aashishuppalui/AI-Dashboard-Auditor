"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function HomeHero() {
  const handleStartReview = () => {
    track("review_started");
  };

  return (
    <section className="home-hero">
      {/* Analytical backdrop */}
      <div
        className="home-hero-backdrop"
        aria-hidden="true"
      >
        <div
          className="home-hero-content-backdrop"
          aria-hidden="true"
        />

        {/* Left: KPI card */}
        <div className="hero-data-card hero-kpi-card">
          <div className="hero-data-label">
            Jobs Completed
          </div>

          <div className="hero-data-value">
            96.5%
          </div>

          <div className="hero-data-trend">
            ↑ 3.2% vs last 7 days
          </div>

          <div className="hero-mini-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Left: quality */}
        <div className="hero-data-card hero-quality-card">
          <div className="hero-data-label">
            Quality Score
          </div>

          <div className="hero-ring">
            <span>97.8%</span>
          </div>
        </div>

        {/* Left: issue list */}
        <div className="hero-data-card hero-issues-card">
          <div className="hero-data-label">
            Top Issues
          </div>

          <div className="hero-issue">
            <span />
            Machine downtime
          </div>

          <div className="hero-issue">
            <span />
            Quality variance
          </div>

          <div className="hero-issue">
            <span />
            Schedule delays
          </div>
        </div>

        {/* Left: timeline */}
        <div className="hero-data-card hero-timeline-card">
          <div className="hero-data-label">
            Production Timeline
          </div>

          <div className="hero-timeline">
            <span className="hero-timeline-line" />
            <span className="hero-timeline-dot" />
            <span className="hero-timeline-dot" />
            <span className="hero-timeline-dot active" />
            <span className="hero-timeline-dot" />
          </div>

          <div className="hero-timeline-labels">
            <span>00</span>
            <span>06</span>
            <span>12</span>
            <span>18</span>
            <span>24</span>
          </div>
        </div>

        {/* Right: trend */}
        <div className="hero-data-card hero-trend-card">
          <div className="hero-data-label">
            Production Trend
          </div>

          <div className="hero-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span className="active" />
          </div>

          <div className="hero-months">
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>

        {/* Right: matrix */}
        <div className="hero-data-card hero-matrix-card">
          <div className="hero-data-label">
            Issue Matrix
          </div>

          <div className="hero-matrix">
            <div />
            <div />
            <div />
            <div />
            <div />

            <div />
            <div className="medium" />
            <div />
            <div className="high" />
            <div />

            <div />
            <div />
            <div className="medium" />
            <div />
            <div className="high" />

            <div />
            <div />
            <div />
            <div className="high" />
            <div />
          </div>
        </div>

        {/* Right: active jobs */}
        <div className="hero-data-card hero-active-card">
          <div className="hero-data-label">
            Active Jobs
          </div>

          <div className="hero-data-value">
            128
          </div>

          <div className="hero-data-trend">
            ↑ 8 vs yesterday
          </div>
        </div>

        {/* Right: decision impact */}
        <div className="hero-data-card hero-impact-card">
          <div className="hero-data-label">
            Decision Impact
          </div>

          <div className="hero-impact-ring">
            <span>High</span>
            <small>Impact</small>
          </div>
        </div>

        {/* Decorative connection points */}
        <span className="hero-backdrop-dot dot-one" />
        <span className="hero-backdrop-dot dot-two" />
        <span className="hero-backdrop-dot dot-three" />
        <span className="hero-backdrop-dot dot-four" />
      </div>

      {/* Hero content */}
      <div className="home-hero-content">
        <p className="home-hero-eyebrow">
          AI-assisted UX review
        </p>

        <h1 className="home-hero-title">
          Turn dashboards into
          <span> actionable UX insights.</span>
        </h1>

        <p className="home-hero-description">
          Upload a dashboard and get an evidence-based review
          of how well it supports the decisions users need to make.
        </p>

        <Link
          href="/upload"
          className="home-primary-button"
          onClick={handleStartReview}
        >
          Start a UX Review
          <span aria-hidden="true">→</span>
        </Link>

        <div className="home-hero-proof">
          <span>Observable evidence</span>
          <span aria-hidden="true">·</span>
          <span>Prioritized findings</span>
          <span aria-hidden="true">·</span>
          <span>Practical recommendations</span>
        </div>
      </div>
    </section>
  );
}