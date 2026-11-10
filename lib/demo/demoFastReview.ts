
import type { FastReviewResult } from "../../schemas/report/fast-review-results";

/**
 * Illustrative sample data for demonstrating UX Review Companion V2.
 * These observations are fictional and are not generated from an uploaded image.
 */

export const demoFastReview: FastReviewResult = {
  executiveIntelligence: {
    isDashboard: true,
    interfaceType: "Business performance dashboard",
    primaryGoal:
      "Help business stakeholders monitor operational performance and identify areas requiring attention.",
    targetUsers: [
      "Business managers",
      "Operations leaders",
      "Performance analysts",
    ],
    primaryDecision:
      "Determine which operational areas are underperforming and where corrective action is needed.",
    decisionFocus: [
      "Overall performance",
      "Performance trends",
      "Target achievement",
      "Underperforming categories",
    ],
    detectedComponents: [
      "KPI cards",
      "Trend chart",
      "Category breakdown",
      "Date range filter",
      "Navigation sidebar",
    ],
    confidence: "high",
  },

  highestImpactFinding: {
    id: "F-001",
    title: "Performance gaps are difficult to identify quickly",
    summary:
      "The dashboard presents several performance indicators without sufficiently emphasizing deviations from expected targets. This makes it harder for managers to quickly identify underperforming areas and determine where corrective action is most urgently needed.",
    severity: "High",
    supportedBy: ["EV-001", "EV-002", "EV-003"],
    confidence: 0.91,
  },

  supportingEvidence: {
    evidence: [
      {
        id: "EV-001",
        title: "KPI values lack target context",
        observation:
          "The primary KPI cards display performance values without clearly showing the corresponding target or expected benchmark.",
        location: "Main Content",
        confidence: 0.95,
        region: { x: 100, y: 150, width: 350, height: 120 },
      },
      {
        id: "EV-002",
        title: "Trend chart lacks clear thresholds",
        observation:
          "The performance trend visualization does not visibly distinguish acceptable performance from values requiring attention.",
        location: "Main Content",
        confidence: 0.92,
        region: { x: 100, y: 320, width: 600, height: 250 },
      },
      {
        id: "EV-003",
        title: "Category comparison requires interpretation",
        observation:
          "The category breakdown presents multiple values without an obvious visual indication of which categories are performing below expectations.",
        location: "Main Content",
        confidence: 0.90,
        region: { x: 100, y: 600, width: 600, height: 200 },
      },
      {
        id: "EV-004",
        title: "Date filter is available",
        observation:
          "A date range control is provided to let users change the reporting period for the displayed performance information.",
        location: "Top Navigation",
        confidence: 0.96,
      },
      {
        id: "EV-005",
        title: "Multiple performance indicators are grouped",
        observation:
          "The dashboard groups several performance indicators in a shared content area for consolidated monitoring.",
        location: "Main Content",
        confidence: 0.94,
      },
    ],
    confidence: 0.93,
  },
};
