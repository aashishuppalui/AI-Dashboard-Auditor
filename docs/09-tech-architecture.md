# Technical Architecture

Version: MVP

---

## Tech Stack

Frontend

- Next.js
- React
- TypeScript

Backend

- Next.js API Routes

AI

- OpenAI Responses API

Validation

- Zod

State

- React Hooks
- Local Storage

---

## High-Level Architecture

Upload Dashboard

↓

UploadImage Model

↓

Analyze Service

↓

API Route

↓

AI Engine

↓

Prompt

↓

OpenAI

↓

Parser

↓

Schema Validation

↓

Typed Response

↓

Storage

↓

Dashboard Review

---

## Design Principles

- Strong typing
- Separation of responsibilities
- Provider-agnostic AI layer
- Schema validation for every AI response
- Component-based UI

---

## Folder Structure

app/

components/

docs/

lib/

schemas/

types/

public/

---

## AI Layer

Every AI capability follows the same pattern.

Prompt

↓

LLM

↓

Parser

↓

Schema

↓

Typed Object

No UI component communicates directly with the AI provider.

---

## Future Architecture

- Authentication
- Database
- Background jobs
- Usage analytics
- Team workspaces
- Prompt versioning
