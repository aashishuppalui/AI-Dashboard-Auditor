# UX Review Companion — Engine Contracts

> Technical contract for the AI review engines used by UX Review Companion v0.1.

---

## 1. Purpose

This document defines the contracts between the AI engines that
make up the UX Review Companion review pipeline.

It describes:

- What each engine does
- What input it accepts
- What output it produces
- Which schema validates the output
- How engines connect to one another
- Which outputs are passed into downstream reasoning

This document is a technical contract.

It should remain aligned with the actual implementation.

---

# 2. Review Pipeline

The current v0.1 review pipeline is:

```text
Dashboard Image
      │
      ▼
Understanding Engine
      │
      │  Executive Intelligence
      ▼
Evidence Engine
      │
      │  Observable Evidence
      ▼
Finding Engine
      │
      │  Highest-Impact Finding
      ├───────────────┐
      ▼               ▼
DES Engine     Priority Actions Engine
      │               │
      └───────┬───────┘
              ▼
       ReviewResponse
```
