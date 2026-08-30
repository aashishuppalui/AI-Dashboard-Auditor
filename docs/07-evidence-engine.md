# UX Review Companion — Evidence Engine

> The Evidence Engine identifies objective, observable evidence
> from a dashboard screenshot that can support downstream UX
> reasoning.

---

# 1. Purpose

The Evidence Engine answers one question:

> **What is visibly present in the dashboard?**

It does not evaluate the dashboard.

It does not recommend improvements.

It does not determine severity.

Its responsibility is to establish a reliable set of observable
facts that downstream review stages can use.

---

# 2. Evidence Rules

The Evidence Engine follows these rules:

- Only observable information.
- No business assumptions.
- No invented metrics.
- No inferred financial impact.
- No hallucinated workflows.
- Every recommendation must be backed by observable evidence.

These rules are foundational to the credibility of the review.

---

# 3. What Is Observable Evidence?

Observable evidence is information that can be directly supported
by what is visible in the uploaded screenshot.

Examples include:

- Visible KPI cards
- Visible charts
- Visible tables
- Visible filters
- Visible navigation
- Visible labels
- Visible values
- Visible status indicators
- Visible hierarchy
- Visible grouping
- Visible repeated patterns
- Visible empty states
- Visible warnings or alerts
- Visible controls
- Visible relationships between interface elements

The evidence should describe what can be seen rather than what
the reviewer believes the interface means.

---

# 4. Evidence vs Interpretation

Evidence and interpretation are different levels of reasoning.

### Evidence

> "The dashboard displays four KPI cards in the top section."

This is directly observable.

### Interpretation

> "The four KPI cards compete for the user's attention."

This is an interpretation of the interface.

### Finding

> "The dashboard does not clearly communicate which KPI should
> receive the user's immediate attention."

This is a UX conclusion.

The Evidence Engine should remain at the **evidence level**.

```text
Observable Evidence
        ↓
Interpretation
        ↓
Finding
```
