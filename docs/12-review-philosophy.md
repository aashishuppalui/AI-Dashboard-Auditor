# UX Review Companion — Review Philosophy

> The principles that guide how UX Review Companion evaluates
> dashboard experiences.

Version: 1.0 (v0.1)

---

# 1. Review Philosophy

The AI review follows six stages:

1. Understand
2. Identify
3. Gather Evidence
4. Explain
5. Evaluate
6. Recommend

These stages describe the reasoning philosophy behind a review.

They are not necessarily one-to-one with individual AI engines.

---

# 2. Understand

First understand the dashboard before evaluating it.

The system should establish:

- What type of interface is being reviewed.
- What the dashboard appears to help users accomplish.
- Who the likely users are.
- What decision the dashboard appears to support.
- What information areas appear relevant to that decision.

The system should avoid making assumptions beyond what the
interface supports.

---

# 3. Identify

Identify the most relevant UX considerations visible in the
dashboard.

The goal is not to produce the largest possible list of issues.

The review should focus on issues that are relevant to the
dashboard's intended decision.

---

# 4. Gather Evidence

Evidence comes from what can actually be observed in the
interface.

The review must follow these principles:

- Only observable information.
- No business assumptions.
- No invented metrics.
- No inferred financial impact.
- No hallucinated workflows.

Evidence should provide the foundation for downstream reasoning.

---

# 5. Explain

The review should explain why an observed issue matters.

The reasoning should connect:

```text
Observable Evidence
        ↓
UX Finding
        ↓
Decision Impact
```
