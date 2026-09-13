"use client";

import { useState } from "react";

import type { ExecutiveIntelligence } from "../../schemas/context/executive-intelligence";
import type { DES } from "../../schemas/des";

import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

interface ExecutiveIntelligenceV2Props {
  data: ExecutiveIntelligence;
  des: DES;
}

function getDESStatusClass(score: number) {
  if (score >= 80) {
    return "v2-des-strong";
  }

  if (score >= 60) {
    return "v2-des-moderate";
  }

  return "v2-des-weak";
}

function getDESStatusLabel(score: number) {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 60) return "Needs attention";
  if (score >= 40) return "Weak";

  return "Critical";
}

function getConfidenceLabel(confidence: string) {
  return confidence.charAt(0).toUpperCase() + confidence.slice(1).toLowerCase();
}

export default function ExecutiveIntelligenceV2({
  data,
  des,
}: ExecutiveIntelligenceV2Props) {
  const [showDecisionFocus, setShowDecisionFocus] = useState(false);

  const statusClass = getDESStatusClass(des.score);
  const statusLabel = getDESStatusLabel(des.score);
  const confidenceLabel = getConfidenceLabel(data.confidence);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (des.score / 100);

  return (
    <section className="v2-executive-intelligence report-card">
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="v2-executive-header">
        <div className="report-section-heading">
          <Sparkles
            size={16}
            strokeWidth={1.8}
            className="report-section-icon"
            aria-hidden="true"
          />

          <h2 className="v2-executive-title">Executive Intelligence</h2>
        </div>

        <p className="v2-executive-description">
          A quick summary of what this dashboard is, who it's for, and how
          effectively it supports the key decision
        </p>
      </header>

      {/* =====================================================
          THREE-COLUMN EXECUTIVE GRID
          ===================================================== */}

      <div className="v2-executive-grid">
        {/* ===================================================
            AI UNDERSTANDING
            =================================================== */}

        <div className="v2-executive-column v2-executive-column-left">
          <h3 className="v2-executive-subtitle">AI Understanding</h3>

          <div className="v2-executive-field">
            <p className="v2-executive-label">Interface</p>

            <p className="v2-executive-value">{data.interfaceType}</p>
          </div>

          <div className="v2-executive-field">
            <p className="v2-executive-label">Primary Goal</p>

            <p className="v2-executive-value">{data.primaryGoal}</p>
          </div>

          <div className="v2-executive-field">
            <p className="v2-executive-label">Confidence</p>

            <span className="v2-executive-confidence">{confidenceLabel}</span>
          </div>
        </div>

        {/* ===================================================
            DECISION LENS
            =================================================== */}

        <div className="v2-executive-column v2-executive-column-right">
          <h3 className="v2-executive-subtitle">Decision Lens</h3>

          <div className="v2-executive-field">
            <p className="v2-executive-label">Primary Users</p>

            <p className="v2-executive-value">{data.targetUsers.join(", ")}</p>
          </div>

          <div className="v2-executive-field">
            <p className="v2-executive-label">Primary Decision</p>

            <p className="v2-executive-value">{data.primaryDecision}</p>
          </div>

          {/* =================================================
              DECISION FOCUS — PROGRESSIVE DISCLOSURE
              ================================================= */}

          <div className="v2-executive-field v2-decision-focus-field">
            <p className="v2-executive-label">Decision Focus</p>

            {!showDecisionFocus ? (
              <button
                type="button"
                className="v2-decision-focus-button"
                onClick={() => setShowDecisionFocus(true)}
                aria-expanded="false"
              >
                <span>View decision focus</span>

                <ChevronDown size={14} strokeWidth={1.8} aria-hidden="true" />
              </button>
            ) : (
              <>
                <div
                  className="v2-decision-focus-list"
                  aria-label="Decision focus areas"
                >
                  {data.decisionFocus.map((focus) => (
                    <span key={focus} className="v2-decision-focus-chip">
                      {focus}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="v2-decision-focus-button"
                  onClick={() => setShowDecisionFocus(false)}
                  aria-expanded="true"
                >
                  <span>Hide decision focus</span>

                  <ChevronUp size={14} strokeWidth={1.8} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* ===================================================
    DES — THIRD COLUMN
    =================================================== */}

        <div
          className={`v2-des-column ${statusClass}`}
          title="Decision Effectiveness Score: how effectively the dashboard supports its primary decision."
        >
          <p className="v2-des-column-title">Decision Effectiveness Score</p>

          <div className="v2-des-gauge-wrapper">
            <div
              className="v2-des-gauge"
              role="img"
              aria-label={`Decision Effectiveness Score ${des.score} out of 100, ${statusLabel}`}
            >
              <div className="v2-des-gauge-ring">
                <div className="v2-des-gauge-center">
                  <span className="v2-des-gauge-value">{des.score}</span>

                  <span className="v2-des-score-max">/ 100</span>
                </div>
              </div>
            </div>

            <span className="v2-des-status">
              <span className="v2-des-status-dot" aria-hidden="true" />

              {statusLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
