import type { DashboardClassification } from "../../../schemas/dashboardClassification";
import type { Evidence } from "../../../schemas/evidence";
import type { Finding } from "../../../schemas/finding";

type PriorityActionsContext = {
  understanding: DashboardClassification;
  evidence: Evidence;
  finding: Finding;
};

export function buildPriorityActionsContext({
  understanding,
  evidence,
  finding,
}: PriorityActionsContext): string {
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

========================
Highest Impact Finding
========================

Title:
${finding.title}

Severity:
${finding.severity}

Summary:
${finding.summary}

========================
Observable Evidence
========================

${evidence.evidence
  .map(
    (item) => `
ID: ${item.id}
Title: ${item.title}
Observation: ${item.observation}
Location: ${item.location}
Confidence: ${item.confidence}
`
  )
  .join("\n")}
`;
}