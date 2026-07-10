import type {
  DashboardClassification
} from "../../schemas/dashboardClassification";

import type {
  Evidence
} from "../../schemas/evidence";

import type {
  Finding
} from "../../schemas/finding";

import type {
  Review
} from "../../schemas/review";

export function createReview(
  understanding: DashboardClassification,
  evidence: Evidence,
  finding: Finding
): Review {

  return {

    understanding,

    evidence,

    finding,

    metadata: {

      createdAt:
        new Date().toISOString(),

      model:
        "gpt-5.1",

      appVersion:
        "0.4.1",

    },

  };

}