# Bhanu Babbal

## Overview

**Product:** Bhanu Babbal
**URL:** https://bhanubabbal.in/#about
**Surface type:** marketing
**Audience:** Developers and technical decision-makers
**Brand character:** Conversion-focused marketing presence with a rich, diverse color palette and 3 typefaces.

> **Note:** Surface detection confidence is low. Verify the inferred audience and brand context before relying on this file.

### Design Principles

- Consistency over novelty — reuse existing patterns before inventing new ones.
- Token-driven — every visual decision references a token, not a magic number.
- Accessible by default — compliance is a baseline, not a feature.

## Colors

| Token | Value | Role |
|-------|-------|------|
| --color-gradient-start | `#007FFF` | Accent |
| --color-link | `#5B7BFB` | Accent |
| --color-gradient-stop | `#FF4D54` | Accent |
| color-1 | `#000000` | Text Primary |
| color-6 | `#929292` | Text Secondary |
| color-2 | `#F13C46` | Accent |
| color-7 | `#F0F0F0` | Text Light |
| color-8 | `#FFFFFF` | Text Light |

## Typography

**Font stack:** Figtree, Font Awesome 5 Free, Times

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 13px | Captions, metadata |
| text-sm | 16px | Labels, secondary text |
| text-base | 22px | Body text (default) |
| text-lg | 24px | Subheadings, emphasis |
| text-xl | 30px | Section headings |

**Weight scale:** 400 · 500 · 900
**Line heights:** 24px · 19.2px · 19.5px · 22px · 30px · 16px

## Spacing

**Base unit:** 4px

`space-1: 5px` · `space-2: 8px` · `space-3: 10px` · `space-4: 13px` · `space-5: 15px` · `space-6: 16px` · `space-7: 20px` · `space-8: 30px` · `space-9: 46px` · `space-10: 55px` · `space-11: 80px` · `space-12: 164px` · `space-13: 178px`

## Shapes

**Border radius:** `radius-sm: 4px` · `radius-md: 17.5px` · `radius-lg: 140px` · `radius-xl: 300px`

## Elevation

_None detected._

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.3s`
- **duration-base:** `0.3s`
- **duration-base:** `background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s`
- **duration-base:** `background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s`
- **duration-base:** `transform 0.3s`
- **duration-base:** `opacity 0.3s, visibiliy 0.3s`
- **duration-base:** `background 0.3s, box-shadow 0.3s`
- **duration-base:** `background-color 0.3s`
- **duration-slow:** `transform 0.45s, color 0.3s`
- **duration-slow:** `0.5s`
- **duration-slow:** `transform 0.65s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), width 0.6s cubic-bezier(0.23, 1, 0.32, 1), height 0.6s cubic-bezier(0.23, 1, 0.32, 1)`
- **duration-slow:** `0.65s cubic-bezier(0.23, 1, 0.32, 1) both stickySlideDown`
- **duration-slow:** `transform 1s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s cubic-bezier(0.19, 1, 0.22, 1)`
- **duration-slow:** `1.25s fadeIn`

## Components

- **Buttons:** 33 detected
- **Links:** 17 detected
- **Navigation:** 2 elements
- **Lists:** 5 detected
- **Images:** 43 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (4px, 17.5px, 140px, 300px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 33 detected
- **Links:** 17 detected
- **Navigation:** 2 elements
- **Lists:** 5 detected
- **Images:** 43 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
