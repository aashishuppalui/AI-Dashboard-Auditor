# UX Review Companion — AI Prompt Architecture

Version: 1.0

Status: Foundation

---

# 1. Purpose

AI prompts define the instructions given to the language model
for each stage of the UX review pipeline.

Prompts are responsible for defining:

- The AI's role
- The task being performed
- The information the AI should consider
- The constraints it must follow
- The expected output
- The boundaries of its reasoning

Prompts should support the product's core principles:

- Evidence First
- Explainable AI
- Decision Support
- Appropriate Uncertainty
- Consistency

---

# 2. Prompt Location

Production prompts are maintained in:

```text
lib/ai/prompts/
```
