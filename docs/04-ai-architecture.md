# UX Review Companion — AI Architecture

> High-level architecture of the AI system powering UX Review
> Companion v0.1.

Version: 1.0

Status: Foundation

---

# 1. Purpose

UX Review Companion uses a modular AI architecture to transform
a dashboard screenshot into an evidence-backed UX review.

The architecture separates:

- Dashboard validation
- Dashboard understanding
- Observable evidence extraction
- Evidence validation
- UX finding generation
- Consultant insight
- Decision Effectiveness scoring
- Priority action generation
- AI execution
- Response parsing
- Schema validation
- Review assembly

The goal is to keep AI reasoning modular, traceable, testable,
and replaceable.

Detailed input/output contracts for individual engines are
defined in:

`14-engine-contract.md`

---

# 2. Architecture Principles

The AI architecture follows several core principles.

## 2.1 Understand Before Evaluate

The system must establish what the dashboard is and what
decision it appears to support before evaluating its UX.

The review should not begin with a recommendation.

---

## 2.2 Evidence Before Recommendation

Recommendations should be grounded in observable evidence from
the interface.

The system should not jump directly from screenshot to
recommendation.

The reasoning should follow:

```text
Screenshot
    ↓
Understanding
    ↓
Observable Evidence
    ↓
Finding
    ↓
Evaluation
    ↓
Recommendation
```

--Implementation Architecture

                    UX Review Companion
                            │
                            ▼
                    Dashboard Upload
                            │
                            ▼
                     Analyze API
                            │
                            ▼
                    generateReview()
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
      Review Orchestration            AI Context
             │                             │
             └──────────────┬──────────────┘
                            ▼
                       AI Engines
                            │
                            ▼
                     Shared Executor
                            │
                            ▼
                          OpenAI
                            │
                            ▼
                         Parser
                            │
                            ▼
                       Zod Schema
                            │
                            ▼
                    ReviewResponse
                            │
                            ▼
                      Local Storage
                            │
                            ▼
                        Review UI
