"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ListChecks,
} from "lucide-react";

import type { PriorityActions } from "../../schemas/priorityAction";

interface PriorityActionsV2Props {
  actions: PriorityActions;
}

function getPriorityClass(priority: "P0" | "P1" | "P2") {
  switch (priority) {
    case "P0":
      return "v2-action-p0";
    case "P1":
      return "v2-action-p1";
    case "P2":
      return "v2-action-p2";
  }
}

function getPriorityLabel(priority: "P0" | "P1" | "P2") {
  switch (priority) {
    case "P0":
      return "Highest";
    case "P1":
      return "High";
    case "P2":
      return "Medium";
  }
}

export default function PriorityActionsV2({
  actions,
}: PriorityActionsV2Props) {
  const [showDetails, setShowDetails] =
    useState(false);

  return (
    <section className="v2-actions report-card">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="v2-actions-header">
        <div>
          <div className="report-section-heading">
            <ListChecks
              size={16}
              strokeWidth={1.8}
              className="report-section-icon"
              aria-hidden="true"
            />

            <h2 className="v2-actions-title">
              Priority Actions
            </h2>
          </div>

          <p className="v2-actions-description">
            Recommended actions to improve decision effectiveness.
          </p>
        </div>

      </header>

      {/* =====================================================
          ACTION LIST
          ===================================================== */}

      <div className="v2-actions-list">

        {actions.map((action) => {
          const priorityClass =
            getPriorityClass(action.priority);

          const priorityLabel =
            getPriorityLabel(action.priority);

          return (
            <article
              key={action.id}
              className={`v2-action ${priorityClass}`}
            >

              {/* =================================================
                  COMPACT SUMMARY
                  ================================================= */}

              <div className="v2-action-summary-row">

                <div className="v2-action-priority">
                  <span className="v2-action-priority-code">
                    {action.priority}
                  </span>
                </div>

                <div className="v2-action-content">

                  <h3 className="v2-action-title">
                    {action.title}
                  </h3>

                  <p className="v2-action-summary">
                    {action.recommendation}
                  </p>

                </div>

                <span className="v2-action-priority-label">
                  {priorityLabel}
                </span>

              </div>

              {/* =================================================
                  DETAILS
                  ================================================= */}

              {showDetails && (
                <div className="v2-action-details">

                  <div className="v2-action-field">
                    <p className="v2-action-label">
                      Issue
                    </p>

                    <p className="v2-action-text">
                      {action.issue}
                    </p>
                  </div>

                  <div className="v2-action-field">
                    <p className="v2-action-label">
                      Why it matters
                    </p>

                    <p className="v2-action-text">
                      {action.whyItMatters}
                    </p>
                  </div>

                  <div className="v2-action-field">
                    <p className="v2-action-label">
                      Recommendation
                    </p>

                    <p className="v2-action-text">
                      {action.recommendation}
                    </p>
                  </div>

                  <div className="v2-action-impact">
                    <p className="v2-action-label">
                      Expected impact
                    </p>

                    <ul className="v2-action-impact-list">
                      {action.expectedImpact.map(
                        (impact) => (
                          <li key={impact}>
                            {impact}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                </div>
              )}

            </article>
          );
        })}

      </div>

      {/* =====================================================
          DETAILS TOGGLE
          ===================================================== */}

      <div className="v2-actions-details-toggle">

        <button
          type="button"
          className="v2-actions-details-button"
          onClick={() =>
            setShowDetails(
              (current) => !current
            )
          }
          aria-expanded={showDetails}
        >

          {showDetails ? (
            <>
              <ChevronUp
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              Hide details
            </>
          ) : (
            <>
              <ChevronDown
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              View details and expected impact
            </>
          )}

        </button>

      </div>

    </section>
  );
}