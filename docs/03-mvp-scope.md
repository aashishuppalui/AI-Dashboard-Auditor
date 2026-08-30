# UX Review Companion — MVP Scope

Version: 1.0 (v0.1)

---

# 1. MVP Objective

The MVP validates the core product hypothesis:

> Can AI transform a dashboard screenshot into an
> evidence-backed assessment of how effectively the dashboard
> supports user decision-making?

The MVP focuses on one dashboard screenshot and produces one
structured UX review.

The MVP is intentionally narrow.

Its purpose is to validate the core review experience before
expanding into broader UX intelligence capabilities.

---

# 2. Included

The v0.1 MVP includes:

- Dashboard screenshot upload
- Dashboard validation
- AI dashboard understanding
- Observable evidence extraction
- Highest-impact UX finding
- Decision Effectiveness Score (DES)
- Exactly three prioritized actions
- Structured review presentation
- Lightweight review feedback

---

# 3. Dashboard Understanding

The system identifies:

- Whether the uploaded image is a dashboard
- Interface type
- Primary goal
- Target users
- Primary decision
- Decision focus
- Detected components
- Confidence

The purpose of this stage is to establish enough context for
the downstream review.

The system should not evaluate the dashboard before establishing
this understanding.

---

# 4. Dashboard Validation

The system validates whether the uploaded image appears to be a
dashboard.

If the image does not qualify as a dashboard, the review should
stop rather than generate an unsupported UX review.

Conceptually:

```text
Uploaded Image
      ↓
Dashboard Validation
      ↓
Is Dashboard?
   │       │
  No      Yes
   │       │
   ▼       ▼
 Stop    Continue
```
