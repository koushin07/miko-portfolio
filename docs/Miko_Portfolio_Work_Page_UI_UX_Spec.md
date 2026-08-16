# Miko Portfolio — Work Page UI/UX Rebuild Specification

## 0. Purpose

The current Work page is much better as an information repository than as a premium portfolio experience.

It contains useful project information, but the UI currently behaves like:

> **a database of projects + case-study text**

The target is:

> **an interactive body of work where each project feels like a system the visitor can enter, inspect, understand, and explore.**

Do NOT simply polish the existing project cards.

Do NOT just add hover effects.

Do NOT turn the current grid into a prettier grid.

The Work page needs a new interaction model.

---

# 1. What Is Wrong With The Current Work Page

The current page has:

- a large heading
- a 3-column project grid
- many project cards
- long descriptions
- technology lists
- small outcome bullets
- large case-study blocks underneath

The information is useful, but the visual hierarchy is weak.

The visitor currently experiences:

```text
PROJECT
PROJECT
PROJECT
PROJECT
PROJECT
PROJECT
PROJECT
...
```

This creates a catalog feeling.

It does NOT create:

> "I want to explore this system."

The Work page should feel much closer to an **interactive case-study library / product showcase**.

---

# 2. Core Concept

The Work page should answer three questions immediately:

### What have you built?

Show the project visually.

### What problem did it solve?

Explain the business context.

### How did you build it?

Let the visitor explore the architecture.

The page should move from:

```text
PROJECT LIST
```

to:

```text
PROJECT
   ↓
PROBLEM
   ↓
SYSTEM
   ↓
ARCHITECTURE
   ↓
OUTCOME
```

The UI itself should communicate this progression.

---

# 3. New Work Page Structure

Use this structure:

```text
WORK
  ↓
Featured Systems
  ↓
Interactive Project Showcase
  ↓
Project Explorer
  ↓
Case Study Breakdowns
  ↓
Capabilities demonstrated through the work
  ↓
CTA
```

Do not make every project equally large.

Create hierarchy.

---

# 4. Work Page Hero

The current hero:

> Full-stack builds with automation at the core.

is acceptable as positioning, but it should be more connected to the work below.

Suggested structure:

```text
WORK / SELECTED SYSTEMS

Software systems built for
real operational problems.

Full-stack applications,
AI systems, geospatial platforms,
and business automation.

[EXPLORE WORK ↓]
```

On the right or underneath, include a subtle animated system preview.

Example:

```text
IDEA
 ↓
ARCHITECTURE
 ↓
BUILD
 ↓
AUTOMATION
 ↓
PRODUCTION
```

This is not the main attraction.

The projects are.

---

# 5. Featured Project Strategy

Do NOT immediately show 10+ equal-sized cards.

Choose 3–4 primary projects as the visual anchors.

Suggested primary projects based on the current portfolio content:

1. ReadMindMe
2. Atlas NHD
3. Atlas SDI Report Engine
4. Automation / LegalTech

The remaining projects can become the secondary project explorer.

This creates a hierarchy:

```text
FEATURED SYSTEMS

[ LARGE PROJECT ]

[ LARGE PROJECT ]

[ LARGE PROJECT ]


OTHER SYSTEMS

[ smaller project ] [ smaller project ] [ smaller project ]
```

---

# 6. Featured Project UI

Each featured project should be a large interactive section.

Do NOT make it look like:

```text
┌────────────────────┐
│ Project Name       │
│ description        │
│ tech stack         │
│ Read case study →  │
└────────────────────┘
```

Instead:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  01 / AI PLATFORM                         AI / RAG          │
│                                                             │
│  READMINDME                                                   │
│  Knowledge-grounded AI platform.                            │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                       │  │
│  │               INTERACTIVE SYSTEM                      │  │
│  │                                                       │  │
│  │ QUESTION                                              │  │
│  │    ↓                                                  │  │
│  │ EMBEDDING                                             │  │
│  │    ↓                                                  │  │
│  │ VECTOR SEARCH                                         │  │
│  │    ↓                                                  │  │
│  │ CONTEXT                                               │  │
│  │    ↓                                                  │  │
│  │ GPT-4o                                                │  │
│  │    ↓                                                  │  │
│  │ ANSWER                                                │  │
│  │                                                       │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  NEXT.JS · FASTAPI · OPENAI · PGVECTOR                      │
│                                                             │
│  [VIEW CASE STUDY →]                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

The visual should occupy more space than the descriptive copy.

---

# 7. Project Visuals Must Be Different

Every project should have a visual metaphor based on what the system actually does.

Do NOT use one generic animated diagram for every project.

---

# 8. ReadMindMe

Visual identity:

> AI / knowledge retrieval / vector search

Show:

```text
QUESTION
   ↓
EMBEDDING
   ↓
VECTOR SPACE
   ↓
RETRIEVED KNOWLEDGE
   ↓
GPT-4o
   ↓
GROUNDED ANSWER
```

Animation:

- question appears
- embedding generated
- vector points appear
- relevant points illuminate
- context is retrieved
- GPT activates
- answer is produced

The visitor should immediately understand:

> This is a RAG system.

---

# 9. Atlas NHD

Visual identity:

> geospatial data / property research / reporting

Show a subtle map-like interface.

Possible composition:

```text
┌─────────────────────────────────────────────┐
│                                             │
│   ● parcel                     ● parcel     │
│       \                         /           │
│        ───── property data ─────            │
│                   │                         │
│                   ↓                         │
│                POSTGIS                      │
│                   ↓                         │
│               GEOSERVER                     │
│                   ↓                         │
│                  API                        │
│                   ↓                         │
│              REPORT / UI                    │
│                                             │
└─────────────────────────────────────────────┘
```

The visual should feel spatial.

Avoid a generic vertical flowchart.

---

# 10. Atlas SDI Report Engine

Visual identity:

> document/report generation + geospatial data

Show a split visualization:

```text
SPATIAL DATA
     │
     ├───────────────┐
     ↓               ↓
  POSTGIS        GEOSERVER
     │               │
     └───────┬───────┘
             ↓
       REPORT ENGINE
             ↓
       PDF / REPORT
```

The final report can visually materialize.

Use a document preview as the output state.

The important visual story:

> complex property/geospatial information → structured report.

---

# 11. Automation / LegalTech

This should be one of the largest featured projects.

Visual identity:

> automation architecture

Show:

```text
TRIGGER
   ↓
VALIDATION
   ↓
n8n
   ├──── CRM
   ├──── AI
   ├──── DOCUMENTS
   ├──── DATABASE
   └──── COMMUNICATION
             ↓
           OUTPUT
```

The packet should move through the system.

Hovering a subsystem should highlight its path.

Clicking Documents should allow the visitor to explore the Document Factory.

This should connect naturally to the automation experience already specified for the homepage.

---

# 12. Featured Project Layout

Use alternating layouts so the page does not become repetitive.

### Project 1

Text left / system visual right.

### Project 2

System visual left / text right.

### Project 3

Full-width visual.

### Project 4

Text left / architecture right.

This creates rhythm.

Do NOT place every project in the same 3-column grid.

---

# 13. Project Information Hierarchy

For each featured project:

### Small label

```text
01 / AI PLATFORM
```

### Project name

Large.

### One-line value proposition

Short.

### Problem

2–3 sentences maximum initially.

### Interactive architecture

The visual centerpiece.

### Technology

Small metadata.

### Outcome

Short business-focused statement.

### CTA

```text
Explore case study →
```

Do not dump the entire case study into the first view.

---

# 14. Case Study Expansion

Clicking:

> Explore case study →

should feel like entering the project.

Possible transition:

```text
WORK PAGE
   ↓
PROJECT CARD
   ↓
EXPANDS
   ↓
FULL CASE STUDY
```

The case study should use the same visual system.

---

# 15. Case Study Page Structure

Use:

```text
PROJECT

THE PROBLEM

THE SYSTEM

ARCHITECTURE

KEY DECISIONS

IMPLEMENTATION

INTEGRATIONS

ENGINEERING CHALLENGES

OUTCOME

TECH STACK

[START A PROJECT]
```

The exact content should come from the actual project source.

Do not invent metrics.

Do not invent clients.

Do not invent production claims.

---

# 16. Architecture Explorer

This is one of the most important additions.

Each featured project should have an optional:

> **Explore architecture**

interaction.

Click it and show the system at a higher level.

Example:

```text
┌──────────────────────────────────────────────────────────┐
│                    SYSTEM ARCHITECTURE                    │
│                                                          │
│  CLIENT                                                   │
│     │                                                    │
│     ↓                                                    │
│  FRONTEND                                                │
│     │                                                    │
│     ↓                                                    │
│    API ─────────────── AI                                 │
│     │                    │                                │
│     ↓                    ↓                                │
│ DATABASE              VECTOR DB                          │
│     │                    │                                │
│     └──────────┬─────────┘                                │
│                ↓                                          │
│             OUTPUT                                        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

Allow hover to inspect nodes.

---

# 17. Project Explorer

After the featured systems, introduce the remaining projects.

Do not immediately show a giant wall of cards.

Use a filterable explorer.

Filters could include:

```text
ALL
FULL-STACK
AI
AUTOMATION
GEOSPATIAL
E-COMMERCE
ERP / OPERATIONS
```

Use category filters to reduce cognitive load.

---

# 18. Project Explorer UI

The cards can be smaller here because these are secondary projects.

Example:

```text
┌───────────────────────────────┐
│ FULL-STACK                    │
│                               │
│ ACE Clinical Placement        │
│ Platform                      │
│                               │
│ CRM-based booking platform    │
│ with automated workflows.     │
│                               │
│ Next.js · Laravel ·           │
│ TypeScript · Supabase         │
│                               │
│ Explore →                     │
└───────────────────────────────┘
```

Cards should have a subtle system preview, not just text.

---

# 19. Card Hover

Hovering a secondary project should reveal a miniature system preview.

For example:

```text
ACE
CRM
   ↓
BOOKING
   ↓
DOCUMENT
   ↓
NOTIFICATION
```

The preview can animate once.

Do not add excessive movement.

---

# 20. Do Not Show Every Detail on the Card

Current cards contain too much information.

Avoid putting:

- long descriptions
- long stack lists
- multiple paragraphs
- multiple outcome bullets
- every integration

inside every card.

The card should answer:

> What is it?

> What does it solve?

> Why should I explore it?

Everything else belongs inside the case study.

---

# 21. Case Study Breakdown Section

The current:

> Context, decisions, and outcomes

section is actually a good concept.

Keep it, but redesign it visually.

Instead of giant text blocks, use an interactive case-study timeline.

Example:

```text
01 CONTEXT
   │
   ●
   │
02 PROBLEM
   │
   ●
   │
03 ARCHITECTURE
   │
   ●
   │
04 KEY DECISION
   │
   ●
   │
05 IMPLEMENTATION
   │
   ●
   │
06 OUTCOME
```

Clicking each stage changes the content panel.

This reduces the amount of text visible at once.

---

# 22. Context UI

Show:

```text
CONTEXT

What was happening?

What business process existed?

What was difficult?
```

Then a concise explanation.

Do not show a wall of text.

---

# 23. Decisions UI

This is where technical credibility should become visible.

Show 2–4 important decisions.

Example:

```text
WHY THIS ARCHITECTURE?

┌──────────────────────────────┐
│ DECISION                     │
│                              │
│ Use PostgreSQL/PostGIS       │
│                              │
│ WHY                          │
│                              │
│ Required spatial querying    │
│ and structured reporting.    │
└──────────────────────────────┘
```

The exact decisions must come from the project source.

---

# 24. Architecture Detail

Use a visual architecture panel.

Example:

```text
FRONTEND
   │
   ↓
API
   │
   ├──────── DATABASE
   │
   ├──────── AI
   │
   └──────── EXTERNAL SERVICES
```

Click nodes to reveal:

- technology
- role
- why it exists

This creates technical depth without forcing the visitor to read everything.

---

# 25. Outcome UI

Outcomes should focus on business value.

Examples:

- automated a previously manual process
- reduced operational complexity
- connected previously separate systems
- created a centralized workflow
- made data available through a usable interface

Only use measurable metrics if the source explicitly provides them.

Never fabricate percentages.

---

# 26. Project Status

Where appropriate, use a subtle status label:

```text
PRODUCTION
```

or:

```text
PRIVATE / NDA
```

or:

```text
CASE STUDY
```

Do not expose confidential information.

For NDA projects, clearly indicate the project is anonymized/private while still showing architecture and capabilities that can be safely discussed.

---

# 27. NDA Projects

For private work:

Do NOT create fake screenshots.

Do NOT invent client details.

Do NOT expose private data.

Instead show:

```text
PRIVATE / NDA

LEGALTECH PLATFORM

Architecture and engineering
patterns shown with sensitive
details removed.
```

Then show the safe architectural story.

---

# 28. Visual Relationship Between Projects

All projects should share the same design language:

- same typography
- same node style
- same border language
- same interaction behavior
- same spacing system
- same animation philosophy

But each project gets a unique visual metaphor.

This creates consistency without making everything identical.

---

# 29. Project Navigation

Allow easy movement between projects.

At the bottom of a case study:

```text
← PREVIOUS PROJECT

NEXT PROJECT →
```

Also provide:

```text
BACK TO WORK
```

Do not force users to scroll through the entire Work page again.

---

# 30. Work Page CTA

After the projects:

```text
YOU HAVE SEEN THE SYSTEMS.

NOW LET'S BUILD ONE.
```

Supporting copy:

> Have a product, internal tool, AI workflow, or business process that needs to be built?

CTA:

```text
Start a Project →
```

Keep it confident and concise.

---

# 31. Animation Rules

Use animation to reveal relationships.

Good:

- data packet movement
- architecture activation
- system zoom
- project expansion
- map points appearing
- report generation
- node highlighting
- state transitions

Avoid:

- bouncing cards
- constant parallax
- spinning logos
- random particles
- excessive page transitions
- every element moving simultaneously

The work should feel alive but controlled.

---

# 32. Scroll Behavior

Do not animate every card independently with the same fade-up.

Instead use different interaction patterns:

### Featured project

System initializes as it enters viewport.

### Architecture

Nodes activate sequentially.

### Project explorer

Cards appear with subtle stagger.

### Case study timeline

Active stage changes as the visitor scrolls.

### CTA

Minimal motion.

---

# 33. Desktop Layout

The featured system should use the available screen width.

Avoid the current feeling of:

```text
small text
inside
small cards
inside
large empty page
```

Instead use:

```text
┌───────────────────────────────────────────────────────────┐
│ PROJECT INFORMATION             SYSTEM VISUALIZATION      │
│                                                           │
│ Large title                    LARGE INTERACTIVE AREA     │
│                                                           │
│ Problem                         Architecture              │
│                                                           │
│ Technology                      Animation                 │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

Use the visual area aggressively.

---

# 34. Mobile Layout

Featured projects should become:

```text
PROJECT
 ↓
SHORT DESCRIPTION
 ↓
SYSTEM VISUAL
 ↓
TECH STACK
 ↓
OUTCOME
 ↓
CASE STUDY
```

Architecture diagrams become vertical.

Hover interactions become tap interactions.

No horizontal overflow.

---

# 35. Performance

The page may contain significant animation.

Therefore:

- animate transforms/opacity where possible
- avoid unnecessary DOM complexity
- avoid rendering huge numbers of particles
- pause inactive visualizations
- use IntersectionObserver for viewport-driven animations
- respect `prefers-reduced-motion`
- lazy-load heavy project visuals
- do not run every project animation simultaneously

The Work page should still feel fast.

---

# 36. Accessibility

Animations are enhancement, not the only way information is available.

If animation is disabled:

The visitor must still see:

```text
PROJECT
PROBLEM
ARCHITECTURE
TECHNOLOGIES
OUTCOME
CTA
```

Interactive diagrams must have accessible labels.

Keyboard navigation must work.

Focus states must be visible.

---

# 37. Important Content Rule

The UI must use the actual portfolio/project information.

Do NOT invent:

- clients
- metrics
- project timelines
- production status
- user counts
- performance numbers
- business outcomes
- technologies not actually used

If a visual requires a detail that is not available, use a generic architectural representation instead.

---

# 38. What We Are NOT Building

Do NOT build:

### ❌ A project gallery

```text
image
title
description
button
```

### ❌ A giant card grid

### ❌ A résumé with prettier typography

### ❌ A generic agency portfolio

### ❌ A collection of static architecture diagrams

### ❌ A fake dashboard

### ❌ A page where every project looks identical

---

# 39. What We ARE Building

We ARE building:

### ✓ An interactive system showcase

### ✓ A visual case-study library

### ✓ A technical storytelling experience

### ✓ A project architecture explorer

### ✓ A portfolio where the UI demonstrates engineering ability

---

# 40. Target Visitor Journey

The ideal visitor experience:

### Step 1

They land on Work.

> "This developer builds complete systems."

### Step 2

They see ReadMindMe.

> "Oh — this is actual RAG architecture."

### Step 3

They interact with it.

> "I understand how his AI system works."

### Step 4

They reach Atlas.

> "He can also work with specialized geospatial systems."

### Step 5

They reach automation.

> "He can connect business processes and external services."

### Step 6

They open Document Factory.

> "This is much deeper than basic n8n workflows."

### Step 7

They inspect engineering decisions.

> "He thinks about architecture, reliability, and failure handling."

### Step 8

CTA.

> "This is someone I could trust with a real system."

---

# 41. Final Visual Target

The Work page should feel like:

> **a guided tour through Miko's engineering work.**

Not:

> a list of things Miko has worked on.

The visitor should be able to move from:

```text
PROJECT
```

to:

```text
PROBLEM
```

to:

```text
SYSTEM
```

to:

```text
ARCHITECTURE
```

to:

```text
ENGINEERING DECISIONS
```

to:

```text
OUTCOME
```

without feeling like they are reading a résumé.

---

# 42. Implementation Instruction for Claude Code

Before changing the Work page:

1. Inspect the current Work page implementation.
2. Preserve the real project content.
3. Identify which projects have enough information for featured treatment.
4. Identify existing reusable components.
5. Identify current routing/case-study pages.
6. Build the featured project system first.
7. Build project-specific visualizations.
8. Build the project explorer second.
9. Convert the current case-study blocks into an interactive narrative.
10. Add architecture exploration.
11. Add responsive behavior.
12. Add reduced-motion behavior.
13. Test keyboard interaction.
14. Test performance.
15. Do not fabricate project information.

Most importantly:

> **Do not simply improve the current 3-column grid.**

The grid can remain for secondary projects, but the featured work must become an **interactive system showcase**.

The Work page should make a client think:

> **"I can see how this person thinks and builds."**

That is the goal.
