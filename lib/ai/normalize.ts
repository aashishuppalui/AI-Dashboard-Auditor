export function normalizeAIResponse(text: string): string {
  const trimmed = text.trim();

  // Remove Markdown code fences such as:
  // ```json
  // { ... }
  // ```
  if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
    return trimmed
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "")
      .trim();
  }

  return trimmed;
}