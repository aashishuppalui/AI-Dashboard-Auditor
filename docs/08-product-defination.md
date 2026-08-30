# UX Review Companion — Product Definition v0.1

> The canonical definition of what UX Review Companion is,
> what it does today, and what it intentionally does not do.

---

## 1. Product Definition

UX Review Companion is an AI-assisted UX review tool for
decision-support dashboards.

It helps UX and product teams understand what a dashboard is
designed to help users decide, identify observable UX evidence,
surface the highest-impact UX issue, and recommend what should
be addressed first.

UX Review Companion is not intended to be a generic screenshot
critic or a visual design scoring tool.

---

## 2. Product Promise

### Upload one dashboard.

### Receive one evidence-backed UX review focused on

### decision effectiveness.

The product is designed around three words:

**Understand. Explain. Improve.**

---

## 3. Problem

Dashboard UX reviews can require significant manual effort.

A useful review needs to go beyond identifying visual or
interaction problems. It needs to establish:

- what the dashboard is
- who it appears to serve
- what decision it supports
- what observable evidence exists
- which issue has the greatest impact
- what should be addressed first

UX Review Companion aims to reduce review effort while
maintaining evidence, explainability, decision relevance,
and actionability.

The original product documentation defines the broader mission
as reducing dashboard review time from 2–4 hours to under
10 minutes while keeping recommendations evidence-based,
explainable, and actionable.

---

## 4. Target Users

### Primary

- UX Designers
- Product Designers
- UX Leads

### Secondary

- Product Managers
- Business Analysts
- Engineering Managers

### Future

- Enterprise Design Teams
- Design Agencies
- SaaS Companies

---

## 5. Core User Job

Help me understand whether this dashboard effectively supports
the decisions its users need to make, identify the most
important UX issue, and know what to address first.

---

## 6. Input

The primary input is:

- A dashboard screenshot/image

The system first determines whether the uploaded image
qualifies as a dashboard.

If the image does not appear to be a dashboard, the review
pipeline stops and the user is asked to upload a dashboard
screenshot instead.

---

## 7. Review Model

The v0.1 review follows this sequence:

Dashboard Validation
↓
Dashboard Understanding
↓
Observable Evidence
↓
Highest-Impact Finding
↓
Decision Effectiveness Score
↓
Priority Actions
↓
Review

The order is intentional.

Understanding must precede evaluation.

Evidence must support reasoning.

Prioritization must precede action.

---

## 8. Dashboard Validation

Before performing the UX review, the system determines whether
the uploaded image represents a dashboard suitable for review.

### Dashboard

The review pipeline continues.

### Non-dashboard

The review pipeline stops.

The system does not attempt to fabricate dashboard-specific
information for unsupported inputs.

This protects the review from being generated from irrelevant
images or unsupported assumptions.

---

## 9. Dashboard Understanding

The understanding stage establishes the AI's interpretation
of the interface.

The current understanding model includes:

- Whether the image is a dashboard
- Interface type
- Primary goal
- Target users
- Primary decision
- Decision focus
- Detected components
- Confidence

The purpose of this stage is understanding, not critique.

The AI should not assign UX severity, recommend improvements,
or identify UX problems during this stage.

---

## 10. Observable Evidence

Observable evidence describes what is visibly present in the
interface.

Evidence should be:

- directly observable
- concise
- traceable to a location in the interface
- confidence-rated

Evidence should not:

- evaluate the interface
- recommend improvements
- infer unsupported user behavior
- assign severity

Evidence is the foundation for downstream reasoning.

---

## 11. Highest-Impact Finding

The review identifies the highest-impact UX finding supported
by the available understanding and observable evidence.

The product intentionally focuses on the highest-impact issue
rather than overwhelming the user with a long, undifferentiated
list of UX problems.

The finding should connect the visible evidence to its impact
on the dashboard's intended decision or workflow.

---

## 12. Decision Effectiveness Score

The Decision Effectiveness Score (DES) measures:

> How effectively a dashboard supports its intended decision
> and workflow.

DES is not:

- a visual design score
- a beauty score
- a generic UX score
- an accessibility score

The score exists to help communicate the effectiveness of the
dashboard in supporting decision-making.

---

## 13. Priority Actions

Priority actions translate the highest-impact finding and its
supporting evidence into practical next steps.

Actions should be:

- evidence-backed
- decision-relevant
- prioritized
- actionable

The objective is not to generate the largest number of
recommendations.

The objective is to help the user understand what should
be addressed first.

---

## 14. Product Principles

### Evidence First

Every recommendation should be backed by observable UI
evidence.

### Understand Before Evaluate

The system should understand the dashboard before evaluating it.

### Decision Support

The product should help users decide what to fix first.

### Explainability

AI conclusions should be traceable through a reasoning chain:

Evidence
↓
Finding
↓
Priority Action

### Focus Over Volume

The review should prioritize meaningful issues rather than
produce a generic checklist.

### No Fabrication

The system should not invent business context, user behavior,
metrics, decisions, or organizational details that are not
reasonably supported by the interface.

---

## 15. What UX Review Companion Is Not

UX Review Companion is not:

- a design linter
- a beauty score
- a visual design scoring tool
- an accessibility checker
- a generic screenshot critique
- a heuristic checklist

These capabilities may be explored independently in the future,
but they are not part of the core v0.1 product definition.

---

## 16. Current v0.1 Scope

### Included

- Dashboard screenshot upload
- Dashboard/non-dashboard validation
- AI dashboard understanding
- Observable evidence extraction
- Highest-impact finding
- Decision Effectiveness Score
- Priority actions
- Review report
- Basic web/product analytics
- Lightweight review feedback interaction

### Excluded

- Multiple findings as the primary review model
- Authentication
- Review history
- Team collaboration
- Payments
- Figma plugin
- Accessibility scoring
- Beauty/aesthetic scoring
- Enterprise administration
- Persistent feedback management

---

## 17. Product Learning

The v0.1 product is intended not only to deliver reviews,
but also to help validate whether those reviews are useful
to real UX practitioners.

Basic product analytics track the review journey, including:

- review started
- image uploaded
- analysis started
- analysis completed
- analysis rejected
- analysis failed
- review viewed

A lightweight feedback interaction allows users to indicate
whether the review was useful.

Persistent feedback storage is intentionally deferred in v0.1.

---

## 18. Success Criteria

The product should be evaluated using:

### Dashboard Understanding

Can the system correctly understand what the dashboard is
and what decision it supports?

### Evidence Traceability

Can findings and recommendations be traced back to visible
evidence?

### Finding Relevance

Is the highest-impact finding genuinely important to the
dashboard's intended decision?

### DES Consistency

Does the score remain reasonably consistent across repeated
evaluations of the same dashboard?

### Recommendation Usefulness

Would a UX practitioner realistically act on the
recommendations?

### Review Speed

Can a useful review be generated substantially faster than
a manual dashboard review?

### User-Perceived Usefulness

Do real users consider the resulting review useful?

---

## 19. Current Product Limitations

The v0.1 product should be treated as an AI-assisted review
tool, not an authoritative UX evaluation system.

The system can make incorrect interpretations.

Confidence and evidence should therefore remain visible parts
of the review model.

Real-world validation with different dashboard types is
required before making stronger claims about review accuracy
or effectiveness.

---

## 20. Future Direction

The long-term direction described in the product vision is
broader than the current dashboard review product.

Potential evolution:

Screenshot Review
↓
Dashboard Review
↓
Application Review
↓
Design System Review
↓
UX Intelligence Platform

The long-term ambition is to build a trusted AI UX consultant
for decision-support experiences.

---

## 21. Product Philosophy

UX Review Companion follows a simple philosophy:

**Understand. Explain. Improve.**

Evidence comes before recommendation.

Recommendation comes before scoring.

Scoring never comes before understanding.

The product should improve decisions, not aesthetics.
