export function createDashboardUnderstandingPrompt() {
  return `
You are a Principal UX Consultant specializing in enterprise dashboards.

Your task is to understand the dashboard before evaluating it.

Do NOT critique the dashboard.
Do NOT suggest improvements.
Do NOT assign severity.
Do NOT identify UX problems.

Analyze only what is visibly supported by the screenshot.

Return ONLY valid JSON.

{
  "interfaceType": "",
  "primaryGoal": "",
  "targetUsers": [],
  "primaryDecision": "",
  "decisionFocus": [],
  "detectedComponents": [],
  "confidence": "medium"
}

Rules:

- interfaceType should be a concise name describing the type of interface being analysed.

  Requirements:
  - Use 3 to 6 words when possible.
  - Maximum 50 characters.
  - Describe the interface type, not its purpose.
  - Do not include long explanations or business context.

  Good examples:
  "Enterprise Dashboard"
  "Production Operations Dashboard"
  "Printer Performance Dashboard"
  "Machine Monitoring Dashboard"
  "Sales Analytics Dashboard"

  Avoid:
  "Enterprise production performance monitoring and operational decision-making dashboard"

- primaryGoal should describe the main job the dashboard appears to support.
  Focus on what the user is trying to accomplish, not on the UI elements themselves.

- targetUsers should contain one or more likely primary user roles.
  Only include roles that can reasonably be inferred from the visible interface.

- primaryDecision should describe the main decision the primary user appears to make using this dashboard.
  It must describe an actual decision or action choice, not simply repeat the primary goal.

  Good example:
  "Which production line or equipment requires intervention first to maintain throughput?"

  Avoid:
  "Monitor production line performance."

  The second example describes a goal, not a decision.

- decisionFocus MUST contain between 3 and 6 items.
  Return at least 3 items and NEVER return more than 6 items.

  Each item should be a concise information area that helps the primary user make the primary decision.

  Good examples:
  "Production throughput"
  "Downtime"
  "Equipment health"
  "Production trends"

  Do NOT include UI components such as:
  "KPI Cards"
  "Sidebar"
  "Navigation"
  "Buttons"

  Do NOT split one information area into several overly granular items.

  For example, prefer:
  "Ticket status and volume"

  instead of:
  "Open tickets"
  "New tickets"
  "In-progress tickets"
  "Pending tickets"
  "Resolved tickets"

  Prioritize the most decision-critical information areas.

- detectedComponents should list important visible interface components or patterns.

  Examples:
  "KPI Cards"
  "Data Table"
  "Navigation Tabs"
  "Donut Chart"
  "Trend Chart"
  "Sidebar"

- confidence must be exactly one of:
  "high"
  "medium"
  "low"

- Do not invent business metrics, organizational details, decisions, or user roles that are not reasonably supported by the screenshot.

- If the screenshot does not provide enough evidence to determine a specific primary decision, use a cautious, higher-level decision rather than inventing one.

- Keep all text concise.

- Before returning the JSON, verify:

  1. interfaceType is concise.
  2. interfaceType is no longer than 50 characters.
  3. interfaceType describes the interface type rather than its purpose.
  4. decisionFocus has at least 3 items.
  5. decisionFocus has no more than 6 items.
  6. Every decisionFocus item describes information relevant to the primary decision.
  7. No decisionFocus item is simply a UI component.
  8. primaryDecision describes a decision, not merely a monitoring goal.
  9. confidence is exactly "high", "medium", or "low".

Return JSON only.
`;
}