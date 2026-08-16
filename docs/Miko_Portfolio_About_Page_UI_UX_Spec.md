# Miko Portfolio — About Page UI/UX Rebuild Specification

## 01. Purpose

The current About page is clean and readable, but it feels primarily like a **well-designed résumé**.

The goal is to turn it into the **human and engineering story behind the systems** shown on the Home, Work, and Projects pages.

The page should answer:

> Who is the engineer behind these systems, what makes his approach different, and why should a client trust him with a real software problem?

---

## 02. Portfolio Page Relationship

The four main experiences should be distinct:

### Home
**This is what I build.**

### Work
**This is what I have delivered.**

### Projects
**This is how the systems work.**

### About
**This is who is behind the systems and why I build them this way.**

Do not duplicate the Work or Projects pages.

The About page should feel more personal while still communicating engineering depth.

---

# 03. Core Positioning

The strongest differentiator is not the number of frameworks Miko knows.

It is the combination of:

```text
FULL-STACK DEVELOPMENT
        +
AI / AUTOMATION
        +
QA / RELIABILITY
        ↓
SYSTEMS THAT ACTUALLY WORK
```

The page should communicate:

> I can take a business problem from idea → architecture → implementation → integration → validation → production.

Do not turn this into exaggerated marketing language. Keep the claim grounded in actual experience.

---

# 04. Hero Section

The current hero is too résumé-like.

Instead of only:

```text
ABOUT

Miko Canares

Full-stack engineer with experience
building, testing, integrating, and
supporting business-critical software.
```

create a stronger positioning block:

```text
ABOUT / THE ENGINEER BEHIND THE SYSTEMS

I build software that has to
work beyond the demo.

Full-stack systems, AI workflows,
business automation, and the
engineering discipline to make them reliable.

[START A PROJECT →]
[DOWNLOAD CV]
```

Keep location and availability as secondary metadata.

---

# 05. Hero Visual

Do not add a generic portrait just to fill space.

Use a subtle engineering-lifecycle visualization:

```text
                 IDEA
                  │
                  ↓
             ARCHITECTURE
                  │
                  ↓
                BUILD
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
       API       AI       DATA
        │         │         │
        └─────────┼─────────┘
                  ↓
              INTEGRATE
                  │
                  ↓
                 TEST
                  │
                  ↓
                SHIP
```

A small active node can travel through the lifecycle.

The visual must remain subtle. This is the About page, not another technical dashboard.

---

# 06. Three Disciplines

Keep the existing strong concept:

> **Three disciplines, one developer.**

But make it more visual.

```text
01 / FULL-STACK DEVELOPMENT

Frontend
Backend
APIs
Databases


02 / AI / AUTOMATION

RAG
AI integrations
Structured outputs
n8n
Workflow orchestration


03 / QA / RELIABILITY

Testing
Validation
Regression
Production reliability
```

Then connect the three:

```text
BUILD
  +
AUTOMATE
  +
VALIDATE
  ↓
SHIP WITH CONFIDENCE
```

The exact descriptions must remain supported by the real portfolio.

---

# 07. Why The Combination Matters

Add a concise explanation:

```text
Most projects fail at the boundaries.

The frontend works, but the API breaks.

The API works, but the automation fails.

The automation works, but the data is wrong.

I work across those boundaries.
```

Only use this wording if it accurately represents the intended positioning; otherwise preserve the idea without making unsupported claims.

The visual should reinforce:

```text
BUILD → INTEGRATE → VALIDATE → SHIP
```

---

# 08. Engineering Philosophy

Add a section:

> **How I approach systems.**

Use four principles.

### 01 / Understand the workflow

Understand what the business actually needs before writing code.

### 02 / Build the simplest system that works

Choose architecture based on the problem rather than forcing a favorite stack.

### 03 / Validate the boundaries

Test APIs, integrations, data, permissions, workflows, and failure states.

### 04 / Ship something maintainable

The goal is not simply to make the demo work. The system needs to remain understandable and supportable.

These should be presented as an interactive process rather than four generic cards.

---

# 09. Engineering Philosophy Visual

Use a horizontal or vertical progression:

```text
UNDERSTAND
    ●
    │
    ↓
DESIGN
    ●
    │
    ↓
BUILD
    ●
    │
    ↓
VALIDATE
    ●
    │
    ↓
SHIP
```

As the visitor scrolls, the active node can change and reveal the corresponding explanation.

If animation is disabled, the complete process must remain visible.

---

# 10. Experience Section

The current:

> **Where I've built.**

section is useful, but six equal job cards feel like LinkedIn.

Redesign it as a chronological engineering timeline.

Example:

```text
EXPERIENCE

2026 ─────────────────────────────
      FULL-STACK DEVELOPER
      Atlas Geotech LLC

      Building and supporting systems
      around geospatial data, reporting,
      APIs, and production workflows.

2025 ─────────────────────────────
      BACKEND / FRONTEND / FULL-STACK
      Relevant project work

2023 ─────────────────────────────
      ANALYST II, ERP PRODUCT APPLICATION
      DXC Technology

      Enterprise QA across applications,
      databases, operating systems,
      and access.
```

Use the real employment history and dates from the portfolio source. Do not invent or reconcile missing information.

---

# 11. Experience Visual

Use a vertical timeline:

```text
                  ● 2026
                  │
                  │  Atlas Geotech
                  │
                  ● 2025
                  │
                  │  Project / contract work
                  │
                  ● 2023
                  │
                  │  DXC Technology
                  │
                  ●
```

The timeline line can subtly animate as the visitor scrolls.

Do not make it flashy.

---

# 12. Current Role

Give the current role slightly more visual weight.

Example:

```text
CURRENT

FULL-STACK DEVELOPER
Atlas Geotech LLC

FEB 2026 — PRESENT

Building and supporting systems
around geospatial data, reporting,
APIs, and production workflows.

[VIEW RELATED WORK →]
```

Only use factual responsibilities supported by the actual portfolio/CV.

Where appropriate, connect experience to actual projects.

For example:

```text
RELATED WORK

Atlas NHD
Atlas SDI Report Engine
```

The goal is to connect:

```text
EXPERIENCE
   ↓
REAL PROJECT
   ↓
CASE STUDY
```

---

# 13. Career Story

Add a short section around the unusual combination of QA and development.

Suggested direction:

> **From testing systems to building them.**

The story should communicate:

```text
TESTING
   ↓
UNDERSTANDING FAILURE
   ↓
BUILDING
   ↓
INTEGRATING
   ↓
VALIDATING
   ↓
PRODUCTION
```

The point is not to say that QA and development are separate careers.

The point is to show that enterprise validation experience became part of the development mindset.

Do not oversell this.

Avoid claims such as:

- I build perfect software.
- I never ship bugs.
- I guarantee reliability.
- I am an expert in everything.

---

# 14. Skills

Do NOT create a giant technology wall.

Avoid:

```text
React
Angular
Vue
Laravel
PHP
Python
...
```

Instead group technologies by capability:

```text
SYSTEMS

Frontend
React · Next.js · Angular

Backend
Laravel · ASP.NET Core · FastAPI · Express

Data
PostgreSQL · MySQL · PostGIS

AI
OpenAI · RAG · pgvector

Automation
n8n · Zapier · Make

QA
API testing · regression · database validation
```

Only list technologies actually supported by the portfolio source.

The Projects page should demonstrate the technologies. The About page should explain the capability behind them.

---

# 15. No Skill Percentages

Never add:

```text
React 95%
Python 90%
Laravel 88%
```

These numbers have no meaningful basis and make the portfolio feel less credible.

---

# 16. Education

Keep education concise:

```text
EDUCATION

Bachelor of Science in Information Technology

Mindanao State University — Naawan
2023
```

Education should have significantly less visual weight than professional experience.

---

# 17. Human Layer

The page should feel human without becoming a biography.

Add a short section such as:

```text
BEYOND THE STACK

I care about building software that
solves real problems, not just software
that looks good in a demo.
```

Potentially include:

```text
Based in the Philippines
Working remotely with teams globally
```

Only display information that is current and appropriate.

---

# 18. Availability

Keep the current availability concept, but make it secondary:

```text
OPEN TO

REMOTE
CONTRACT
FULL-TIME
```

The main CTA remains:

> **Start a Project**

---

# 19. Social / CV Links

Keep:

- GitHub
- LinkedIn
- CV

But make the CV a secondary action.

The primary action should be:

```text
START A PROJECT →
```

---

# 20. About Page Conversion Journey

The visitor should move through:

```text
WHO IS THIS?
      ↓
WHAT MAKES HIM DIFFERENT?
      ↓
HOW DOES HE WORK?
      ↓
WHERE HAS HE DONE IT?
      ↓
WHAT HAS HE BUILT?
      ↓
CAN I WORK WITH HIM?
```

This is much stronger than simply displaying a résumé.

---

# 21. Final CTA

End with:

```text
BUILD SOMETHING THAT
HAS TO WORK.

If you have a product, internal system,
AI workflow, or business process that
needs to be built, integrated, or improved:

[START A PROJECT →]
```

Avoid generic agency language such as:

> Let's create something amazing together.

The CTA should feel direct and engineering-focused.

---

# 22. Footer

The current footer structure is good.

Keep it lightweight and make the hierarchy clear:

```text
WORK
Selected Systems
Project Explorer
Case Studies

MORE
About
Contact
Download CV
```

Do not make the footer visually heavy.

---

# 23. Animation Direction

Animation should communicate **career and engineering progression**, not duplicate the Work/Projects animations.

Good:

- lifecycle node movement
- timeline line drawing
- discipline connections
- section transitions
- subtle text reveal
- experience progression

Avoid:

- spinning icons
- animated skill bars
- random particles
- excessive parallax
- floating profile images
- decorative motion with no meaning

The animation should answer:

> Why is this moving?

If there is no good answer, remove it.

---

# 24. Design Language

Maintain the established portfolio design system:

- dark background
- technical grid
- thin borders
- restrained accent color
- monospace labels
- strong typography
- subtle active-state glow
- generous whitespace

However:

```text
HOME
Most expressive

WORK
Most visual

PROJECTS
Most technical

ABOUT
Most personal
```

The About page should feel warmer and less technical than Projects while still feeling like the same portfolio.

---

# 25. Desktop Layout

Use a wide but controlled central content column.

Hero:

```text
┌──────────────────────────────────────────────────────────┐
│                                                          │
│ ABOUT / THE ENGINEER                                     │
│                                                          │
│ I build software that has to work                       │
│ beyond the demo.                         SYSTEM FLOW     │
│                                                          │
│ Description                              IDEA            │
│                                           ↓              │
│ [START PROJECT] [CV]                     BUILD           │
│                                           ↓              │
│                                           TEST            │
│                                           ↓              │
│                                           SHIP            │
└──────────────────────────────────────────────────────────┘
```

Do not create excessive empty space beside the content.

---

# 26. Mobile

Use:

```text
ABOUT

Miko Canares

POSITIONING

CTA

THREE DISCIPLINES

ENGINEERING PHILOSOPHY

EXPERIENCE TIMELINE

SKILLS

EDUCATION

CTA
```

The timeline becomes vertical.

Do not force a desktop three-column composition onto mobile.

---

# 27. Accessibility

All information must remain available without animation.

When reduced motion is enabled:

```text
animated timeline
```

becomes:

```text
static timeline
```

Keyboard navigation must work.

Buttons need clear labels.

External links should be identifiable.

Focus states must be visible.

---

# 28. Performance

Keep the About page lightweight.

Do not introduce:

- heavy 3D libraries
- massive particle systems
- continuously running canvas animations
- video backgrounds

Prefer lightweight SVG/CSS/React animations.

Animations should pause when they are not relevant.

---

# 29. Content Integrity

The About page is the most personal and therefore one of the most important credibility pages.

Never invent:

- employers
- dates
- responsibilities
- achievements
- metrics
- clients
- certifications
- technologies
- project relationships

If information is not confirmed, leave it out.

---

# 30. Most Important Positioning

The page should communicate:

```text
I CAN BUILD IT.
        +
I CAN CONNECT IT.
        +
I CAN TEST IT.
        +
I CAN SUPPORT IT.
```

This is more valuable than:

```text
I KNOW MANY TECHNOLOGIES.
```

---

# 31. Target Visitor Reaction

The ideal sequence is:

> "Okay, this isn't just another developer portfolio."

Then:

> "He has full-stack experience."

Then:

> "He understands AI and automation."

Then:

> "He has QA and enterprise experience too."

Then:

> "He understands the entire system, not just one layer."

Then:

> **"Let's talk."**

That is the conversion goal.

---

# 32. Claude Code Implementation Instructions

Before changing the About page:

1. Inspect the current About page implementation.
2. Preserve verified personal, education, and experience information.
3. Reuse the existing global design system.
4. Do not duplicate the Work page.
5. Do not duplicate the Projects page.
6. Redesign the hero around engineering identity.
7. Turn "Three disciplines, one developer" into a visual positioning section.
8. Add the engineering philosophy/process section.
9. Convert experience cards into a chronological visual timeline.
10. Connect relevant experience to actual portfolio projects where possible.
11. Keep skills grouped by capability rather than producing a technology wall.
12. Keep education concise.
13. Add a small human layer without turning the page into a biography.
14. Add a strong project-oriented CTA.
15. Implement subtle purposeful animation.
16. Respect reduced-motion preferences.
17. Test mobile.
18. Test keyboard navigation.
19. Verify every factual statement against the real portfolio source.
20. Do not fabricate achievements or metrics.

## Critical instruction

**Do NOT simply polish the existing About page.**

Do NOT turn it into a résumé with better animations.

Do NOT add skill percentages.

Do NOT add a generic portrait just to fill space.

Do NOT overload the page with technology logos.

The objective is to make the About page communicate the **person, engineering mindset, progression, and credibility behind the systems**.
