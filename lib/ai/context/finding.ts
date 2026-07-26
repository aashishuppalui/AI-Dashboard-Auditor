import type { DashboardClassification } from "../../../schemas/dashboardClassification";
import type { Evidence } from "../../../schemas/reasoning/evidence";

type FindingContext = {
  understanding: DashboardClassification;
  evidence: Evidence;
};

export function buildFindingContext({
  understanding,
  evidence,
}: FindingContext): string {
  const evidenceText = evidence.evidence
    .map(
      (item) => `
ID: ${item.id}
Title: ${item.title}
Observation: ${item.observation}
Location: ${item.location}
Confidence: ${item.confidence}
`
    )
    .join("\n");

  return `
========================
Dashboard Understanding
========================

Dashboard Summary:
${understanding.dashboardSummary}

Dashboard Type:
${understanding.dashboardType}

Primary User:
${understanding.primaryUser}

Primary Decision:
${understanding.primaryDecisionSupported}

Confidence:
${understanding.confidence}

========================
Validated UX Evidence
========================

${evidenceText}
`;
}