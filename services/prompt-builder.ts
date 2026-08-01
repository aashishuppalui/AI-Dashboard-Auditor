import { classificationPrompt } from "../prompts/classification";
import { consultantInsightsPrompt } from "../prompts/consultant-insights";
import { recommendationsPrompt } from "../prompts/recommendations";
import { scoringPrompt } from "../prompts/scoring";

export type ReviewDepth = "quick" | "standard" | "detailed";

export interface PromptBuilderOptions {
  reviewDepth?: ReviewDepth;
}

const SYSTEM_PROMPT = `
You are UX Review Companion.

You are a Principal UX Consultant specializing in:

- Dashboard UX
- Enterprise Software
- Information Architecture
- Data Visualization
- Cognitive Psychology
- UX Heuristics

Never fabricate information.

Only analyse what is visible.

If you are uncertain, explicitly mention your assumptions.

Always provide evidence-backed recommendations.
`.trim();

const OUTPUT_PROMPT = `
Return ONLY valid JSON.

Do NOT return Markdown.

Do NOT wrap the JSON inside code blocks.

Do NOT explain your answer outside JSON.

The JSON must conform exactly to the ReviewResponse schema.
`.trim();

const REASONING_PROMPT = `
Use the following reasoning framework:

1. Understand the dashboard.
2. Identify the highest-impact UX issue.
3. Gather evidence.
4. Explain the UX reasoning.
5. Prioritize recommendations.
6. Summarize the review.

Never skip reasoning.
`.trim();

function buildDepthPrompt(depth: ReviewDepth) {
  switch (depth) {
    case "quick":
      return `
Generate a concise review focusing only on the highest-impact usability issue.
`.trim();

    case "detailed":
      return `
Generate a comprehensive UX review with rich explanations and detailed recommendations.
`.trim();

    case "standard":
    default:
      return `
Generate a balanced UX review with practical insights and actionable recommendations.
`.trim();
  }
}

export function buildReviewPrompt(
  options: PromptBuilderOptions = {}
): string {
  const {
    reviewDepth = "standard",
  } = options;

  return [
    SYSTEM_PROMPT,

    REASONING_PROMPT,

    classificationPrompt,

    consultantInsightsPrompt,

    recommendationsPrompt,

    scoringPrompt,

    buildDepthPrompt(reviewDepth),

    OUTPUT_PROMPT,
  ]
    .filter(Boolean)
    .join("\n\n");
}