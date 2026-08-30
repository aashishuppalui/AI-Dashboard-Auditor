import type { ExecutiveIntelligence } from "../../../schemas/context/executive-intelligence";
import type { Evidence } from "../../../schemas/reasoning/evidence";
import type { Finding } from "../../../schemas/reasoning/finding";

type DESContext = {
  understanding: ExecutiveIntelligence;
  evidence: Evidence;
  finding: Finding;
};

export function buildDESContext({
  understanding,
  evidence,
  finding,
}: DESContext): string {
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
DECISION LENS
========================

Interface:
${understanding.interfaceType}

Primary Goal:
${understanding.primaryGoal}

Primary User:
${understanding.targetUsers.join(", ")}

Primary Decision:
${understanding.primaryDecision}

Decision Focus:
${understanding.decisionFocus.join(" | ")}

Understanding Confidence:
${understanding.confidence}

========================
VALIDATED UX EVIDENCE
========================

${evidenceText}

========================
HIGHEST IMPACT FINDING
========================

Finding ID:
${finding.id}

Title:
${finding.title}

Summary:
${finding.summary}

Severity:
${finding.severity}

Supported Evidence:
${finding.supportedBy.join(", ")}

Confidence:
${finding.confidence}
`;
}