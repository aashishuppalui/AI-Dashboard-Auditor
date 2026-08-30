# UX Review Companion — Technical Architecture

> Technical architecture of the UX Review Companion MVP.

Version: 1.0 (v0.1)

---

# 1. Purpose

UX Review Companion is a Next.js application that accepts a
dashboard screenshot, processes it through a sequence of
AI-powered review engines, validates the generated results, and
presents a structured UX review.

The architecture is designed around:

- Strong typing
- Modular AI engines
- Explicit context
- Schema validation
- Separation of responsibilities
- Component-based UI
- Evidence-backed reasoning

---

# 2. Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- CSS

---

## Backend

- Next.js App Router
- Next.js Route Handlers

---

## AI

- OpenAI Responses API
- Shared AI execution layer

---

## Validation

- Zod

---

## Client State

- React Hooks
- Local Storage

---

## Analytics

- Vercel Web Analytics

Analytics are used to understand basic product usage such as
visitors and page views.

Analytics are separate from the AI review pipeline.

---

# 3. High-Level Application Architecture

The primary application flow is:

```text
Dashboard Screenshot
        ↓
Upload UI
        ↓
Analyze Request
        ↓
Next.js API Route
        ↓
Review Orchestrator
        ↓
AI Review Engines
        ↓
Validated ReviewResponse
        ↓
Local Storage
        ↓
Review UI
```
