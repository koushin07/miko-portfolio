# ACE CASE STUDY --- UI/UX REBUILD SPECIFICATION

## Purpose

Rebuild the ACE Clinical Placement Platform case study so it does
**not** look like the ERIS case study.

The current ACE page uses the same visual grammar as ERIS:

-   identical section rhythm
-   identical two-card Problem / What I Built block
-   identical horizontal workflow
-   identical three-card Architecture section
-   identical Key Decisions cards
-   identical Results / Technologies split
-   identical CTA treatment

This makes the portfolio feel template-generated.

**Do not copy the ERIS case-study template.**

Use the Atlas NHD case study as the quality benchmark for information
density, visual storytelling, technical depth, and custom interaction
--- but give ACE its own visual identity based on its actual product:
**CRM + booking + placement coordination + documents + integrations**.

------------------------------------------------------------------------

# 1. CORE CREATIVE DIRECTION

## Design concept

### "The Placement Control Room"

ACE should feel like a real operational SaaS product.

The visual language should communicate:

-   bookings
-   coordinators
-   students
-   placements
-   documents
-   CRM synchronization
-   milestones
-   integrations
-   status changes
-   operational visibility

This is NOT primarily a "developer architecture" story.

It is a story about **turning a fragmented placement process into one
synchronized operational system**.

The page should feel closer to:

> SaaS product walkthrough + operational dashboard + system architecture

rather than:

> generic software case study with cards.

------------------------------------------------------------------------

# 2. HERO --- REPLACE THE GENERIC HERO

## Current problem

The current hero is too similar to ERIS:

``` text
CASE STUDY — SAAS / CRM / BOOKING

ACE

Clinical Placement Platform...
description...

[PROBLEM CARD] [WHAT I BUILT CARD]
```

Do not use this structure.

## New hero

Create a wide editorial hero with a **split visual composition**.

### Left side

Eyebrow:

``` text
CASE STUDY / SAAS / CRM / BOOKING
```

Large headline:

``` text
A placement workflow that
keeps bookings, documents,
and status in sync.
```

Supporting copy:

``` text
ACE turns clinical placement coordination into a connected workflow —
from location search and booking to CRM updates, milestone documents,
and coordinator visibility.
```

### Right side --- INTERACTIVE SYSTEM BOARD

Build a visual "placement control room" instead of cards.

Show a central placement record:

``` text
PLACEMENT #10482

Student
Sarah M.

Location
Melbourne Clinic

Status
DOCUMENTS READY

Next milestone
Placement Confirmation
```

Around it, show connected systems:

``` text
CRM
PIPEDRIVE

DOCUMENTS
PANDADOC

EMAIL
BREVO

APP
ACE PLATFORM
```

Animated connection lines should move subtly toward the central
placement record.

### Interaction

When the user hovers a system:

-   highlight its connection
-   show a small tooltip describing what ACE uses it for
-   animate the corresponding data path

Example:

``` text
PandaDoc
↓
Placement milestone
↓
Document generated
↓
Coordinator notified
```

This should be the first memorable interaction on the page.

------------------------------------------------------------------------

# 3. HERO METRICS

Under the hero visual, show four compact operational metrics.

``` text
01
BOOKING FLOW
Search → booking → CRM

02
DOCUMENT FLOW
Milestone → document → completion

03
INTEGRATIONS
CRM + PandaDoc + Brevo + Maps

04
DELIVERY
Architecture → development → QA
```

Do NOT use generic numerical metrics unless the source material supports
actual numbers.

------------------------------------------------------------------------

# 4. THE PROBLEM --- "TOO MANY PLACES TO CHECK"

Instead of two generic cards, create a **before-state visualization**.

## Section heading

``` text
Before ACE, the workflow was fragmented.
```

Supporting text:

``` text
Placement coordinators had to keep bookings, student profiles,
document packs, CRM records, and communication status aligned
across separate tools.
```

## Visual

Create a fragmented tool board.

``` text
STUDENT PROFILE
       │
       ├──────→ SPREADSHEET
       │
       ├──────→ CRM
       │
       ├──────→ EMAIL THREAD
       │
       └──────→ DOCUMENT FOLDER

BOOKING
   │
   ├──────→ CRM
   └──────→ COORDINATOR

MILESTONE
   │
   └──────→ DOCUMENT GENERATION
```

Animate small "sync problems":

-   disconnected node
-   warning state
-   "manual update"
-   "re-entered"
-   "waiting"

Do not overdo animation.

The user should understand the problem in under five seconds.

------------------------------------------------------------------------

# 5. TRANSITION --- THE SYSTEM CONNECTS

This should be ACE's signature interaction.

On scroll, the fragmented nodes should visually converge.

The scattered tools move toward one central ACE record.

Final state:

``` text
                 ┌─────────────┐
                 │   STUDENT   │
                 └──────┬──────┘
                        │
┌─────────┐      ┌──────▼──────┐      ┌──────────┐
│ BOOKING │ ───→ │ ACE RECORD  │ ←─── │   CRM    │
└─────────┘      └──────┬──────┘      └──────────┘
                        │
                 ┌──────▼──────┐
                 │  MILESTONE  │
                 └──────┬──────┘
                        │
                 ┌──────▼──────┐
                 │  DOCUMENT   │
                 └─────────────┘
```

This is much more appropriate to ACE than the generic ERIS horizontal
flow.

------------------------------------------------------------------------

# 6. "ONE PLACEMENT, MANY EVENTS"

Create an interactive placement timeline.

## Heading

``` text
One placement. Every event accounted for.
```

Show a horizontal timeline:

``` text
SEARCH
  │
  ▼
BOOKING
  │
  ▼
CRM SYNC
  │
  ▼
MILESTONE
  │
  ▼
DOCUMENT PACK
  │
  ▼
STATUS
```

But unlike ERIS, this must be **interactive**.

Each event is a clickable timeline node.

When clicked, expand a detail panel.

### SEARCH

``` text
Location search
Map-based discovery
Placement availability
```

### BOOKING

``` text
Placement created
Coordinator details
Student assignment
```

### CRM SYNC

``` text
Pipedrive
CRM record
Status synchronization
```

### MILESTONE

``` text
Placement milestone reached
Document workflow triggered
```

### DOCUMENT PACK

``` text
PandaDoc
Document generation
Signing workflow
```

### STATUS

``` text
Coordinator visibility
Current placement state
```

------------------------------------------------------------------------

# 7. PRODUCT MODEL --- MAKE THE DATA FLOW VISIBLE

Create a section called:

``` text
The placement is the source of truth.
```

Show a central data object.

``` text
                 PLACEMENT
                    │
       ┌────────────┼────────────┐
       │            │            │
    STUDENT      LOCATION     COORDINATOR
       │            │            │
       └────────────┼────────────┘
                    │
                 MILESTONES
                    │
          ┌─────────┴─────────┐
          │                   │
      DOCUMENTS             STATUS
```

Then show external integrations around the model:

``` text
Pipedrive
PandaDoc
Mapbox
Brevo
Vercel
```

This communicates the actual architecture without presenting it as a
generic 3-card architecture grid.

------------------------------------------------------------------------

# 8. ARCHITECTURE --- CUSTOM ACE VISUAL

Do not use:

``` text
Frontend | API | Integrations & Ops
```

as three generic cards.

Instead create a **layered system map**.

## Heading

``` text
One application. Multiple systems. One workflow.
```

### Layer 1 --- EXPERIENCE

``` text
Next.js
TypeScript
Tailwind
Clerk
```

Show UI surfaces:

``` text
Coordinator Dashboard
Student / Placement Views
Location Search
Booking
Status
```

### Layer 2 --- APPLICATION

``` text
Laravel API
Scheduling
Permissions
Placement State
Business Rules
```

### Layer 3 --- INTEGRATIONS

``` text
Pipedrive
PandaDoc
Mapbox
Brevo
Vercel
```

### Layer 4 --- OPERATIONS

``` text
Deployment
Authentication
Logging
QA
Integration validation
```

Use vertical connection lines and animated data pulses.

------------------------------------------------------------------------

# 9. INTEGRATION EXPLORER

This should be one of the strongest visual sections.

## Heading

``` text
The integrations are part of the product.
```

Create an interactive integration constellation.

Central node:

``` text
ACE
```

Connected nodes:

``` text
PIPEDRIVE
PANDADOC
MAPBOX
BREVO
VERCEL
CLERK
```

Hovering an integration reveals:

``` text
PIPEDRIVE

CRM synchronization

ACE keeps placement information aligned
with the CRM instead of forcing coordinators
to maintain duplicate records manually.
```

Do the same for each integration.

------------------------------------------------------------------------

# 10. KEY ENGINEERING DECISIONS

Do not use the same three-card layout as ERIS.

Use an **interactive decision stack**.

Heading:

``` text
Why the system stays synchronized.
```

Show three large numbered decisions vertically.

## Decision 01

``` text
API-first booking flow
```

Visual:

``` text
UI
 ↓
API
 ↓
Placement
 ↓
CRM
```

## Decision 02

``` text
Documents follow milestones
```

Visual:

``` text
MILESTONE
   ↓
DOCUMENT EVENT
   ↓
PANDADOC
   ↓
STATUS
```

## Decision 03

``` text
Third-party calls stay controlled
```

Visual:

``` text
ACE
 ↓
INTEGRATION LAYER
 ↓
EXTERNAL SERVICE
 ↓
VALIDATION
 ↓
AUDIT / ERROR STATE
```

Each decision should expand on click.

------------------------------------------------------------------------

# 11. "WHAT SHIPPED" --- MAKE IT PRODUCT-ORIENTED

Replace the generic Results section with:

``` text
From placement search to completion.
```

Create a large checklist-style operational summary.

``` text
✓ Location search and placement discovery

✓ Booking workflow

✓ CRM synchronization

✓ Placement milestone handling

✓ Automated document workflows

✓ Coordinator status visibility

✓ Third-party integrations

✓ QA and deployment
```

Underneath:

``` text
MY ROLE

Architecture · Full-stack development · Integrations · Deployment · QA
```

------------------------------------------------------------------------

# 12. VISUAL "DAY IN THE LIFE" INTERACTION

Optional but strongly recommended.

Create a simulated coordinator workflow.

Button:

``` text
PLAY PLACEMENT FLOW →
```

When activated:

``` text
09:02
Coordinator searches location
       ↓
09:04
Placement booked
       ↓
09:04
CRM synchronized
       ↓
10:15
Milestone reached
       ↓
10:15
Document generated
       ↓
10:16
Coordinator sees updated status
```

This makes the system feel alive without requiring the actual
application to be publicly deployed.

------------------------------------------------------------------------

# 13. TECHNOLOGY SECTION

Do not make this another generic chip wall.

Create a compact technical "system inventory".

``` text
FRONTEND
Next.js
TypeScript
Tailwind
Clerk

BACKEND
Laravel
API
Scheduling
Permissions

INTEGRATIONS
Pipedrive
PandaDoc
Mapbox
Brevo

DELIVERY
Vercel
QA
Deployment
```

Use a subtle terminal / system-panel aesthetic.

------------------------------------------------------------------------

# 14. CTA

Do not copy ERIS's CTA.

ACE's CTA should target businesses dealing with fragmented workflows.

Headline:

``` text
Still moving business data between tools?
```

Supporting text:

``` text
I build systems that connect the workflow instead of adding another
tool for your team to manage.
```

Button:

``` text
Start a project →
```

Secondary:

``` text
See how I approach automation →
```

------------------------------------------------------------------------

# 15. ANIMATION RULES

Animations should communicate **data movement**, not decoration.

Use:

-   connection pulses
-   timeline progression
-   node activation
-   subtle hover expansion
-   scroll-triggered convergence
-   integration highlighting
-   state transitions
-   small status changes

Avoid:

-   excessive floating cards
-   random parallax
-   spinning 3D objects
-   large text animations
-   generic gradient blobs
-   unnecessary particle effects

The page should feel like a **living SaaS system**.

------------------------------------------------------------------------

# 16. RESPONSIVE BEHAVIOR

Desktop:

-   large system visualization
-   connected nodes
-   horizontal timeline
-   layered architecture

Tablet:

-   simplify connection paths
-   preserve interaction

Mobile:

-   convert system diagrams to vertical flows
-   make nodes full-width
-   allow horizontal timeline scrolling
-   preserve all content
-   avoid tiny diagrams

------------------------------------------------------------------------

# 17. IMPLEMENTATION PRINCIPLE

Do not create a reusable generic CaseStudyTemplate for ACE.

The portfolio can share:

-   typography
-   navigation
-   footer
-   buttons
-   spacing tokens
-   base cards
-   animation primitives

But ACE's **content composition must be custom**.

The visitor should be able to tell from the visual storytelling alone
that ACE is about:

**CRM + bookings + placement operations + documents + integrations.**

------------------------------------------------------------------------

# 18. SUCCESS CRITERIA

The rebuild is successful only if:

-   ACE no longer resembles ERIS
-   ACE has a recognizable visual concept
-   The workflow is understandable without reading every paragraph
-   Integrations are visually represented
-   The placement record becomes the visual center of the page
-   The page demonstrates product thinking, not just coding
-   The animations communicate workflow/data movement
-   The page feels like a premium SaaS case study
-   Atlas NHD remains the benchmark for technical depth
-   No section feels like a copied template from ERIS
