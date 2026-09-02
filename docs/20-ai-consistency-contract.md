# UX Review Companion — AI Consistency Contract

Version: 1.0
Status: Foundation

## 1. Purpose

The same dashboard should produce a substantially consistent UX assessment
when reviewed multiple times.

The wording may vary slightly, but the underlying assessment should remain
stable.

Consistency is required to maintain user trust.

---

## 2. Core Principle

> The same evidence should lead to the same conclusion.

The AI must not select a different primary UX problem simply because the
same screenshot was analyzed again.

---

## 3. Reasoning Hierarchy

The AI review follows this sequence:

Screenshot
↓
Dashboard Understanding
↓
Observable Evidence
↓
Candidate UX Issues
↓
Highest-Impact Finding
↓
DES
↓
Priority Actions

Each stage should build on the previous stage.

Downstream engines must not independently reinterpret the screenshot when
structured upstream information is available.

---

## 4. Stable Decision Anchors

The following information should remain stable across repeated reviews:

### Dashboard Understanding

- Dashboard type
- Primary goal
- Target users
- Primary decision
- Decision focus

### Observable Evidence

Important visible facts should remain substantially consistent.

### Highest-Impact Finding

The underlying problem area should remain consistent unless the evidence
clearly supports another issue as more important.

### DES

The score should remain within a reasonable range for the same dashboard.

### Priority Actions

Actions should address the same underlying problem identified by the
highest-impact finding.

---

## 5. Acceptable Variation

The following may vary slightly:

- sentence wording
- evidence ordering
- title wording
- explanation wording
- recommendation wording
- confidence values within a reasonable range

Variation in wording is acceptable.

Variation in the underlying UX conclusion is not.

---

## 6. Evidence Before Interpretation

Observable evidence is the foundation for downstream reasoning.

The AI must not create a finding that cannot be supported by the available
evidence.

Every finding must reference one or more evidence IDs.

---

## 7. Finding Stability

The Highest-Impact Finding should represent the most important issue
affecting the primary decision.

When multiple issues are present, prioritize them using:

1. Relevance to the primary decision
2. Strength of observable evidence
3. Effect on the user's ability to complete the decision
4. Breadth of the issue
5. Potential value of addressing it

Do not select a different issue simply because it is more visually noticeable.

---

## 8. DES Stability

DES measures decision effectiveness.

It must be derived from:

- Dashboard Understanding
- Observable Evidence
- Highest-Impact Finding
- Decision support quality

DES must not be treated as an independent visual score.

The same underlying assessment should result in a similar DES range.

---

## 9. Priority Action Stability

Priority Actions must directly address the Highest-Impact Finding.

P0 should address the most important issue.

P1 and P2 should address supporting issues or improvements related to the
same decision problem.

Actions must not introduce unrelated problems that were not identified in
the evidence or finding.

---

## 10. Unsupported Variation

The AI must not change its conclusion based on:

- wording preferences
- visual novelty
- isolated metrics
- assumptions about users
- assumed business impact
- imagined workflows
- imagined requirements

---

## 11. Confidence

Confidence represents confidence in the evidence and assessment.

High confidence must not be used simply because the model produced a
clear-sounding answer.

> Evidence before confidence.

---

## 12. Quality Target

For repeated analysis of the same screenshot:

- Dashboard Understanding: highly consistent
- Important Evidence: substantially overlapping
- Highest-Impact Finding: same underlying problem area
- Priority Actions: same underlying problem area
- DES: ideally within ±5 points

These are MVP quality targets and should be validated through repeated
evaluation.

---

## 13. Product Principle

> Consistency creates trust.

A user should be able to review the same dashboard more than once without
receiving a fundamentally different assessment.
