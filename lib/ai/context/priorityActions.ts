import type { ExecutiveIntelligence } from "../../../schemas/context/executive-intelligence";
import type { Evidence } from "../../../schemas/reasoning/evidence";
import type { Finding } from "../../../schemas/reasoning/finding";

type PriorityActionsContext = {
  understanding: ExecutiveIntelligence;
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

Interface Type:
${understanding.interfaceType}

Primary Goal:
${understanding.primaryGoal}

Primary Users:
${understanding.targetUsers.join(", ")}

Primary Decision:
${understanding.primaryDecision}

Decision Focus:
${understanding.decisionFocus.join(", ")}

Detected Components:
${understanding.detectedComponents.join(", ")}

Confidence:
${understanding.confidence}

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