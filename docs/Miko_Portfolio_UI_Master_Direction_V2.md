# Miko Portfolio — UI / UX Master Direction V2

## Core Direction

The current implementation is clean, but it is too close to a conventional dark developer portfolio.

Do NOT interpret this brief as:

- dark background + cards
- dark background + small technical labels
- decorative node diagrams
- compressed sections
- generic workflow diagrams
- an n8n screenshot replacement

The intended result is:

> **An interactive engineering portfolio where the UI itself demonstrates how complex software systems work.**

The visitor should feel like they are exploring software systems, not reading a résumé.

The website should communicate:

> This developer can understand a business problem, design the architecture, build the frontend and backend, integrate AI and external services, automate workflows, test the system, and ship it.

---

# 1. Visual Character

The portfolio should feel like:

- a premium software product
- an interactive engineering dashboard
- a high-end product landing page
- an architecture visualization
- a technical case-study experience

It should NOT feel like:

- a résumé
- a SaaS template
- a generic freelancer site
- a collection of Bootstrap cards
- documentation
- a dashboard full of metrics
- a Dribbble animation showcase

Tone:

**Technical · Premium · Calm · Confident · Interactive · Precise**

Every animation must communicate something.

---

# 2. The Most Important UI Principle

## Do not decorate the information. Visualize the information.

If the portfolio says:

> I build RAG systems.

Do not merely show:

`AI · RAG · OpenAI · pgvector`

Instead visually demonstrate:

```text
USER QUESTION
      │
      ●
      ↓
   EMBEDDING
      │
      ●
      ↓
 VECTOR SEARCH
      │
      ●
      ↓
RETRIEVED CONTEXT
      │
      ●
      ↓
    GPT-4o
      │
      ●
      ↓
GROUNDED ANSWER
```

The visitor should understand the system by watching it operate.

Apply this principle to the entire portfolio.

---

# 3. Page Scale

The current design is too compressed.

Major sections should have enough vertical space to feel like experiences, not content blocks.

Use approximately `80–120vh` for major interactive sections where appropriate.

Do not try to fit every concept into one viewport.

A major section should feel like:

```text
                 LARGE HEADING

              short explanation


        ┌─────────────────────────────┐
        │                             │
        │       INTERACTIVE           │
        │       SYSTEM                │
        │       VISUALIZATION         │
        │                             │
        └─────────────────────────────┘


             supporting information
```

Give important visuals room to breathe.

---

# 4. Typography Hierarchy

Use strong hierarchy.

### Level 1 — Hero statements

Very large.

Example:

> I build AI-powered software, SaaS products, and business automation.

### Level 2 — Section headings

Large.

Example:

> I don't just build n8n workflows. I build automation systems.

### Level 3 — Supporting copy

Medium and readable.

### Level 4 — Technical metadata

Small.

Example:

`NEXT.JS · FASTAPI · OPENAI · PGVECTOR`

### Level 5 — System labels

Small/monospace.

Example:

`VECTOR SEARCH`, `WEBHOOK`, `DATABASE`

Do not make every piece of text tiny.

---

# 5. Background System

Keep the dark foundation, but do not use the exact same grid everywhere.

Base background:

- near-black
- subtle grid
- subtle texture/noise
- restrained radial lighting

Then change the visual language depending on the system.

### Hero

Engineering grid.

### ReadMindMe

Vector-space grid.

### Atlas

Geographic coordinate grid.

### n8n

Automation network.

The background should feel contextual rather than decorative.

---

# 6. Hero UI

The hero should feel like the beginning of a software system.

Recommended composition:

```text
┌────────────────────────────────────────────────────────────┐
│ NAV                                                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  SMALL LABEL                    INTERACTIVE SYSTEM         │
│                                                            │
│  I build AI-powered             CLIENT IDEA                │
│  software, SaaS                     │                      │
│  products, and                     ●                       │
│  business automation.               │                      │
│                                    ↓                       │
│  Short explanation             ARCHITECTURE                │
│                                    │                       │
│  [VIEW WORK] [START]                ●                       │
│                                    │                       │
│                                    ├── FRONTEND             │
│                                    ├── API                  │
│                                    └── DATABASE             │
│                                        │                   │
│                                        ●                   │
│                                        ↓                   │
│                                       AI                   │
│                                        │                   │
│                                        ●                   │
│                                        ↓                   │
│                                  INTEGRATIONS               │
│                                        │                   │
│                                        ●                   │
│                                        ↓                   │
│                              TESTING / SECURITY             │
│                                        │                   │
│                                        ●                   │
│                                        ↓                   │
│                                    PRODUCTION               │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

The right side must be a living system, not a static flowchart.

---

# 7. Hero Animation

Initial state:

- nodes are dim
- connections are barely visible
- no active packet

Then execute a deliberate sequence.

### Phase 1 — Client Idea

The first node activates.

A tiny data packet appears.

### Phase 2 — Architecture

The packet travels into Architecture.

The connection briefly illuminates.

### Phase 3 — Application Stack

Frontend, API, and Database activate.

### Phase 4 — AI

The packet moves into AI.

### Phase 5 — Integrations

Integration paths activate.

### Phase 6 — Testing

Testing/Security activates.

### Phase 7 — Production

Production becomes the final stable state.

Final state:

`BUILT → TESTED → SHIPPED`

Do not make the animation instant.

---

# 8. Data Packet Design

The packet should be tiny:

`●`

or a small glowing square.

Do not use a huge glowing orb.

When the packet reaches a node:

- node scales slightly
- border becomes brighter
- subtle pulse
- packet continues

This should look like an actual event moving through an architecture.

---

# 9. Hero Hover

Hovering a node should activate its relevant path.

Example:

`DATABASE`

Behavior:

- database node becomes active
- connected paths brighten
- unrelated nodes dim slightly
- concise tooltip appears

Example tooltip:

```text
DATABASE

Persistent application data,
state and knowledge.
```

Do not use a large modal.

---

# 10. Service Section

The three services can remain, but they should become interactive system modules instead of ordinary cards.

## Full-Stack

```text
FRONTEND
    │
    ↓
   API
    │
    ↓
DATABASE
```

On hover, animate a request through the stack.

Technologies can appear as secondary metadata:

`NEXT.JS · REACT · PYTHON · LARAVEL · POSTGRESQL`

## AI / RAG

```text
QUESTION
   ↓
EMBEDDING
   ↓
VECTOR SEARCH
   ↓
CONTEXT
   ↓
LLM
   ↓
ANSWER
```

Animate a question through the pipeline.

## Automation

```text
TRIGGER
   ↓
n8n
   ├── CRM
   ├── AI
   ├── DOCUMENTS
   └── DATABASE
           ↓
        OUTPUT
```

Animate an event branching through the system.

Avoid paragraphs of tiny text.

---

# 11. Featured Work

Do NOT make projects look like ordinary cards.

The projects should feel like large interactive case-study stages.

Heading:

> Systems in production.

Each project should visually demonstrate its architecture.

---

# 12. ReadMindMe UI

ReadMindMe should be the primary AI/RAG showcase.

Large visual stage:

```text
READMINDME

Knowledge-grounded AI platform.

QUESTION
   │
   ●
   ↓
EMBEDDING
   │
   ●
   ↓
VECTOR SEARCH

● ● ● ● ●
  ● ●
    ● ● ●

   ↓
RETRIEVED CONTEXT
   ↓
GPT-4o
   ↓
GROUNDED ANSWER
```

Animation:

1. Question appears.
2. Question becomes an embedding.
3. Embedding travels to vector search.
4. Vector-space points appear.
5. Relevant points illuminate.
6. Retrieved context flows to GPT-4o.
7. GPT-4o generates the answer.
8. Grounded answer appears.

This should visually communicate why RAG works.

Hover labels such as:

`EMBEDDING`
`VECTOR SEARCH`
`CONTEXT`
`GPT-4o`
`STRUCTURED OUTPUT`

should reveal concise explanations.

---

# 13. Atlas NHD UI

Atlas must have a different visual language.

Use:

- subtle coordinates
- geographic lines
- location points
- spatial grid
- map-like geometry

Visual concept:

```text
SOURCE DATA
    ↓
POSTGIS
    ↓
GEOSERVER
    ↓
API
    ↓
MAP / REPORT
```

But the final UI should look like a spatial data system, not a generic flowchart.

As the system runs, spatial points and layers should become visible.

---

# 14. N8N Section — Major Feature

This is one of the most important sections of the portfolio.

Heading:

> **I don't just build n8n workflows. I build automation systems.**

Supporting copy:

> Connect your CRM, AI, documents, APIs, databases, communication tools, and internal systems into one reliable automation layer.

This section should occupy a large visual area.

It should feel like entering an automation architecture.

Not:

`WEBHOOK → VALIDATE → AUTOMATE → OUTPUT`

Instead, build a real system visualization.

---

# 15. N8N High-Level Architecture

Visually represent:

```text
                    TRIGGERS

        WEBHOOK     SCHEDULE     FORM
            \          |          //
             \         |         //
              └──────── ↓ ───────┘

                  ┌─────────────┐
                  │     n8n     │
                  │             │
                  │ AUTOMATION  │
                  │   ENGINE    │
                  └──────┬──────┘
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
         CRM             AI          DOCUMENTS
          │              │              │
          └──────────────┼──────────────┘
                         ↓
                   DATABASE/STORAGE
                         ↓
                       OUTPUT
```

This must be a visual architecture component, not literal text.

---

# 16. N8N Node Design

Nodes should look like refined software components.

Example:

```text
┌──────────────────────────┐
│ ◉ DOCUMENT ENGINE        │
│                          │
│ Gotenberg                │
└──────────────────────────┘
```

States:

### Idle

- subtle border
- low visual intensity

### Processing

- brighter border
- subtle glow
- moving packet

### Complete

- stable highlighted state
- small check indicator

### Error

- restrained error state

Do not copy n8n's native UI exactly.

This is an architectural visualization inspired by the real system.

---

# 17. N8N Data Flow Animation

Show actual event movement.

Example:

```text
WEBHOOK
   │
   ●
   ↓
VALIDATE
   │
   ●
   ↓
n8n
   │
   ├────●────→ CRM
   │
   ├────●────→ AI
   │
   └────●────→ DOCUMENT
                    │
                    ●
                    ↓
                  PDF
                    ↓
                 STORAGE
                    ↓
                  OUTPUT
```

The moving dot represents an event.

When the packet enters a node, the node activates.

---

# 18. N8N Hover Interaction

Hovering a subsystem should change the entire architecture.

Example: hover `DOCUMENTS`.

Behavior:

- document path becomes bright
- unrelated paths dim
- document nodes become active
- packet movement focuses on that path
- concise explanation appears

Example:

```text
DOCUMENT ENGINE

Automates document generation,
conversion and delivery.

DocxTemplater
Gotenberg
Supabase Storage
```

This creates the feeling of exploring a real system.

---

# 19. N8N Click Interaction

Clicking a major subsystem should zoom into it.

For example:

`DOCUMENTS`

transitions into:

> DOCUMENT FACTORY

The high-level network should visually zoom or morph into the detailed workflow.

This is important.

The portfolio should feel like:

> overview → subsystem → implementation

---

# 20. Document Factory

This should be one of the strongest visual experiences.

Title:

> Document Factory

Subtitle:

> From client intake to finished PDF — automatically.

Represent the documented workflow:

```text
SUPABASE WEBHOOK
       ↓
CHECK READY
       ↓
GET TEMPLATE
       ↓
DOCXTEMPLATER
       ↓
FOOTER MICROSERVICE
       ↓
GOTENBERG
       ↓
METADATA
       ↓
SUPABASE STORAGE
       ↓
DOWNLOAD LINK
       ↓
   ┌───┴────┐
   ↓        ↓
 BREVO    PUSHOVER
```

Use actual source-supported workflow concepts.

Do not invent additional steps or business claims.

---

# 21. Document Factory Execution Animation

Show a generic safe example event moving through the system.

Sequence:

`NEW INTAKE`

↓

`READY`

↓

`TEMPLATE FOUND`

↓

`DOCUMENT GENERATED`

↓

`PDF CREATED`

↓

`STORED`

↓

`EMAIL SENT`

↓

`✓ COMPLETE`

This should look like a real execution trace.

Do not use fake customer names or fabricated business data.

---

# 22. Document Factory Node Details

Clicking a node can open a small side panel.

Example:

### Gotenberg

```text
PDF CONVERSION

Converts the generated document
into a PDF for downstream storage
and delivery.

INTEGRATION
Gotenberg
```

### Supabase Storage

```text
DOCUMENT STORAGE

Stores the generated PDF and
supports the downstream download flow.

INTEGRATION
Supabase Storage
```

### Brevo

```text
TRANSACTIONAL DELIVERY

Sends workflow notifications
through email.

INTEGRATION
Brevo
```

Panels should be compact and contextual.

---

# 23. Engineering Patterns

After the Document Factory:

> **Not just automation. Engineering.**

Use interactive visual cards for:

## Idempotency

```text
EVENT
 ↓
CHECK EXISTING
 ↓
EXISTS?
 ├── YES → REUSE
 └── NO → CREATE
```

## Retries

```text
API REQUEST
 ↓
FAIL
 ↓
RETRY
 ↓
BACKOFF
 ↓
RETRY
 ↓
SUCCESS
```

## Error Handling

```text
PROCESS
 ↓
ERROR?
 ├── NO → CONTINUE
 └── YES → ERROR PATH
```

## Pagination / Chunking

```text
API
 ↓
[1–100]
 ↓
[101–200]
 ↓
[201–300]
 ↓
...
```

## AI Extraction

```text
RAW DOCUMENT
 ↓
AI
 ↓
STRUCTURED DATA
 ↓
DATABASE
```

The animations should teach the concept.

---

# 24. 42 Workflow Visualization

Do not show 42 workflow names as a huge list.

Instead show:

```text
42
production workflows
```

Then category navigation:

- Documents
- Legal Data
- Telephony
- E-signature
- CRM / Intake
- Scheduling
- AI / Data

Clicking a category changes the visual content.

This should feel like exploring an automation platform.

---

# 25. Integration Visualization

Do not make a giant logo wall.

Instead show connected systems:

```text
                    OPENAI
                       │
                       │
SMARTSUITE ──────── n8n ──────── BREVO
                       │
                       │
                   SUPABASE
                       │
                       │
                  GOTENBERG
                       │
                       │
                  DOCUMENSO
```

Hovering an integration should highlight its path.

Use recognizable logos only where appropriate.

---

# 26. QA / Engineering Section

Connect development and QA into one message.

Heading:

> **Built to work. Built to survive.**

Supporting copy:

> I approach software with a development and QA mindset — building the feature, validating the behavior, handling failures, and thinking about what happens after deployment.

Visual:

```text
BUILD
 ↓
VALIDATE
 ↓
TEST
 ↓
FAILURE PATHS
 ↓
DEPLOY
 ↓
MONITOR
```

This should feel like part of the same system language.

---

# 27. Avoid Random Floating Elements

Do not fill the screen with:

- floating badges
- floating logos
- random cards
- decorative particles
- unnecessary gradients
- unrelated icons

Every visual element must have a purpose.

Good:

`node → connection → data → next node`

Bad:

`floating card + floating icon + floating badge + random glow`

The page should feel engineered.

---

# 28. Scroll Story

Do not use the same fade-up animation for every section.

Scroll should control the narrative.

### Hero

System initializes.

### Services

Three system modules appear.

### ReadMindMe

RAG pipeline runs.

### Atlas

Spatial system activates.

### n8n

Automation network initializes.

### Document Factory

System zooms into a workflow.

### Engineering

Retry/error/validation systems activate.

The page should feel like a guided technical tour.

---

# 29. Conceptual Section Transitions

Use transitions that make conceptual sense.

### Hero → Work

Production node can transition into the first project.

### ReadMindMe → Atlas

Vector points can morph/dissolve into geographic points.

### Atlas → n8n

Spatial connections can transition into workflow connections.

### n8n → Engineering

An active workflow can transition into retry/error paths.

Do not use arbitrary fades for everything.

---

# 30. Mobile

Desktop architecture may be wide.

Mobile should convert it into a vertical system.

Desktop:

```text
TRIGGER ───── n8n ───── CRM
               │
               ├──── AI
               │
               └──── DOCUMENT
```

Mobile:

```text
TRIGGER
   ↓
 n8n
   ↓
 CRM
   ↓
 AI
   ↓
 DOCUMENT
   ↓
 OUTPUT
```

The system logic must remain understandable.

On mobile:

- tap replaces hover
- diagrams become vertical
- reduce animation complexity
- avoid horizontal overflow
- preserve labels and explanations

---

# 31. Motion Style

Motion should feel:

> precise, mechanical, intentional

Good motion:

- data packets
- connection activation
- node state changes
- system initialization
- execution completion
- zooming into subsystems

Avoid:

- bouncing cards
- spinning logos
- excessive parallax
- huge scale animations
- random floating objects
- constant motion everywhere

The portfolio should feel alive, not busy.

---

# 32. Interaction Rule

Every interaction must answer at least one:

1. What is happening?
2. Why is it happening?
3. What technology makes it happen?
4. What business problem does it solve?

If an animation answers none of these, remove it.

---

# 33. Visitor Emotional Journey

The intended progression is:

### First impression

> This looks premium.

### Hero

> This person builds complete systems.

### Services

> He can work across the whole stack.

### ReadMindMe

> He actually understands AI/RAG.

### Atlas

> He can handle specialized data systems.

### n8n

> He can connect complicated business processes.

### Document Factory

> This is real engineering, not basic automation.

### QA

> He thinks about reliability.

### CTA

> I should talk to him about my project.

---

# 34. Priority Order

If implementation time is limited:

### P0 — Hero system animation

Must feel alive.

### P0 — ReadMindMe RAG visualization

Must clearly demonstrate retrieval → AI → answer.

### P0 — n8n architecture

Must feel like a real automation system.

### P0 — Document Factory

Must be interactive and detailed.

### P1 — Atlas spatial visualization

### P1 — Engineering/QA visualization

Everything else is secondary.

Do not spend hours polishing secondary cards while the core system visualizations remain static.

---

# 35. Quality Bar

Before calling a section complete:

### Understanding

Can I understand the system without reading everything?

### Visual hierarchy

Is there one obvious focal point?

### Interaction

Does interaction teach something?

### Engineering credibility

Does the visualization represent actual engineering work?

### Whitespace

Does the section breathe?

### Differentiation

Does this look different from a generic developer portfolio?

### Accessibility

Does the information remain available without animation?

### Mobile

Does the experience still make sense on a phone?

### Performance

Does animation remain smooth?

---

# 36. Final Target

The finished homepage should NOT be describable as:

> "A dark developer portfolio with animated diagrams."

It should be describable as:

> **"An interactive engineering portfolio where you can visually explore the systems this developer builds."**

The visitor should be able to experience:

```text
IDEA
 ↓
ARCHITECTURE
 ↓
APPLICATION
 ↓
AI
 ↓
AUTOMATION
 ↓
INTEGRATIONS
 ↓
VALIDATION
 ↓
PRODUCTION
```

Then explore real examples:

```text
READMINDME
Question → Retrieval → AI → Answer

ATLAS NHD
Data → PostGIS → GeoServer → API → Map

N8N AUTOMATION
Trigger → n8n → AI / CRM / Documents → Storage → Output

DOCUMENT FACTORY
Intake → Template → Document → PDF → Storage → Delivery
```

## Final instruction to Claude Code

Do NOT simply add more cards or more animations to the current layout.

**Redesign the interaction model.**

The goal is not to make the portfolio more animated.

The goal is to make the invisible engineering visible.

The portfolio itself should become the demonstration of Miko's engineering ability.
