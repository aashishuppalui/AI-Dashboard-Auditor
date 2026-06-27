import { AnalyzeResponse } from "../types";

export const mockAnalyzeResponse: AnalyzeResponse = {
  classification: {
    dashboardType: "Operational",
    primaryUser: "Quality Engineer",
    primaryGoal: "Investigate Defects",
    confidence: 89,
    reasoning: [
      "Contains investigation tables",
      "Contains operational metrics",
      "Contains quality workflows",
    ],
  },

  review: {
    finding:
      "Supplier context missing from investigation workflow",

    evidence: [
      "Supplier field not visible",
      "Batch identifier missing",
      "Investigation workflow requires context switching",
    ],

    confidence: 92,

    insight:
      "The primary challenge is not data availability but information orchestration. Users can access quality data, but supplier and batch context are separated from investigation workflows.",

    des: 74,

    potentialDes: 86,

    recommendation:
      "Add supplier and batch context directly into defect investigation tables.",
  },
};