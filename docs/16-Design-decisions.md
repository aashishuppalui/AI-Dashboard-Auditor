UX Review Companion – Design Language v1.0

Version: 1.0
Status: Locked (Foundation)

1. Design Philosophy

Our product exists to help users make decisions, not admire visuals.

Every screen should feel:

Calm
Trustworthy
Focused
Explainable
Professional

The UI should disappear behind the information.

2. Core Principles
   Principle 1 — Information First

Visuals should enhance understanding, never compete with it.

Principle 2 — Progressive Disclosure

Show the most important information first. Details come later.

Principle 3 — Consistency Creates Trust

If a user learns one card, they should understand every other card.

Principle 4 — AI Must Feel Accountable

Every AI recommendation should be supported by evidence.

Principle 5 — Scannability Wins

Users should understand the page in under two minutes.

3. Visual Hierarchy

Every page follows this priority:

Page Title
↓
Executive Summary
↓
Key Metrics
↓
Highest Priority Recommendation
↓
Supporting Evidence
↓
Additional Details

This order should remain consistent across releases.

4. Card Anatomy

Every card follows the same structure:

┌─────────────────────────────┐
│ Title │
│ Optional subtitle │
├─────────────────────────────┤
│ Main content │
│ │
├─────────────────────────────┤
│ Optional footer │
└─────────────────────────────┘

Cards should never introduce new layouts without a clear product reason.

5. Spacing System

Use an 8px-based spacing scale.

Token Value Usage
XS 4px Tight spacing
SM 8px Between related elements
MD 16px Default card padding
LG 24px Between sections
XL 32px Major layout separation
XXL 48px Page-level spacing 6. Typography Scale
Element Size Weight
Page Title 32px Bold
Section Title 24px SemiBold
Card Title 18px SemiBold
KPI Value 36–48px Bold
Body 14px Regular
Caption 12px Medium

The KPI value should always be the strongest visual element within a KPI card.

7. Color Philosophy

Use color with intent.

Neutral colors for structure
Accent colors for key metrics
Success, Warning, and Critical only when they communicate meaning

Avoid using color purely for decoration.

8. Icon Guidelines

Every icon must serve one of three purposes:

Clarify meaning
Improve recognition
Support scanning

Icons should never be added simply to fill empty space.

9. AI Content Guidelines

AI-generated content should follow these rules:

Use plain language
Keep paragraphs short
Prefer bullets where appropriate
Avoid repetition
State the recommendation clearly
Explain why it matters
Avoid unnecessary jargon

The goal is to sound like an experienced UX consultant, not a chatbot.

10. Interaction Principles

Interactions should feel subtle and predictable.

Smooth hover states
Consistent focus indicators
Clear loading states
Helpful empty states
Meaningful error messages

Animations should support understanding, not distract from it.

11. Accessibility

Every screen should meet these expectations:

Sufficient color contrast
Keyboard navigation
Visible focus states
Semantic structure
Screen reader compatibility where applicable

Accessibility is a product quality requirement, not a later enhancement.

12. Definition of Done

A UI component is considered complete only when it meets all of the following:

Solves the intended user problem
Matches the design language
Maintains architectural consistency
Is visually polished
Is accessible
Is easy to scan
Has been reviewed for clarity

# Product Decisions

## ADR-001

Executive Intelligence architecture is locked.

Reason:
Maintains user familiarity and supports consistent scanning.

---

## ADR-002

Every card answers exactly one user question.

Reason:
Reduces cognitive load and improves explainability.

---

## ADR-003

v0.1.1 focuses on refinement, not redesign.

Reason:
Preserve the user's mental model while improving quality.
