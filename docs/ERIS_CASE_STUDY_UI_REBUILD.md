# ERIS CASE STUDY --- UI/UX REBUILD SPECIFICATION

## Purpose

Rebuild the ERIS Emergency Resource Information System case study so it
has its own visual identity.

The current ERIS page is structurally too similar to ACE:

-   same hero pattern
-   same Problem / What I Built cards
-   same horizontal workflow
-   same three-card architecture
-   same Results / Backlog section
-   same technology chips
-   same CTA rhythm

This needs to stop.

**Do not copy the ACE case-study design.**

ERIS is fundamentally different from ACE.

ACE is a SaaS/CRM/booking workflow.

ERIS is an **operational command and accountability system for resource
availability, reservations, dispatch, returns, and audit history**.

The ERIS page should therefore feel like an **operations command center
/ resource control system**.

Atlas NHD should remain the benchmark for sophisticated technical
storytelling.

------------------------------------------------------------------------

# 1. CORE CREATIVE DIRECTION

## Design concept

### "The Operations Command Center"

ERIS should visually communicate:

-   live resource availability
-   municipalities
-   equipment
-   inventory readiness
-   reservation state
-   dispatch movement
-   return state
-   audit history
-   reporting
-   accountability

The central concept:

> **Every resource has a state. Every movement leaves a trace.**

The page should feel like the visitor is looking at an operational
system monitoring resources in motion.

------------------------------------------------------------------------

# 2. HERO --- COMMAND CENTER INTRO

Do NOT use the ACE hero structure.

Do not use:

``` text
[PROBLEM CARD] [WHAT I BUILT CARD]
```

Instead create a large command-center composition.

## Left

Eyebrow:

``` text
CASE STUDY / INTERNAL OPERATIONS
```

Headline:

``` text
Know where every resource is.
Know what happened to it.
```

Supporting copy:

``` text
ERIS gives regional responders a single operational view of equipment
availability, reservations, dispatch movements, returns, and audit history.
```

## Right --- LIVE RESOURCE BOARD

Create a dashboard-style visual.

Example:

``` text
RESOURCE CONTROL

REGION 10

AVAILABLE       42
RESERVED        11
DISPATCHED       8
RETURNING        3

────────────────────────

RESOURCE STATUS

FORKLIFT-042      AVAILABLE
MED KIT-018       RESERVED
GENERATOR-092     DISPATCHED
TRAILER-031       RETURNING
```

Use small live-state indicators.

The dashboard does not need real data.

Use clearly fictional/sample data.

------------------------------------------------------------------------

# 3. RESOURCE STATE VISUALIZATION

Make this the signature interaction of the ERIS case study.

## Heading

``` text
Resources move. ERIS remembers.
```

Supporting text:

``` text
Every resource follows an accountable state from inventory readiness
through reservation, dispatch, return, and reporting.
```

Create a large state machine.

``` text
┌─────────────┐
│  AVAILABLE  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  RESERVED   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  DISPATCHED │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  RETURNING  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   AUDITED   │
└─────────────┘
```

But make it interactive.

Clicking a state changes the resource details panel.

### AVAILABLE

``` text
Ready for assignment
Location known
Inventory verified
```

### RESERVED

``` text
Assigned to an upcoming operation
Reservation recorded
Availability reduced
```

### DISPATCHED

``` text
Resource is in the field
Movement recorded
Operational state active
```

### RETURNING

``` text
Resource is expected back
Return movement tracked
```

### AUDITED

``` text
Movement history preserved
Ready for reporting
```

------------------------------------------------------------------------

# 4. THE "RESOURCE CARD" INTERACTION

Create a simulated resource record.

Example:

``` text
RESOURCE / GEN-092

STATUS
DISPATCHED

LOCATION
Municipality 07

ASSIGNED TO
Incident #2041

LAST MOVEMENT
14:32

NEXT EVENT
Return pending
```

Add an animated status transition.

Example:

``` text
AVAILABLE
   ↓
RESERVED
   ↓
DISPATCHED
   ↓
RETURNING
```

The timestamp and event log can update visually.

This makes ERIS feel like a real system instead of a static portfolio
page.

------------------------------------------------------------------------

# 5. BEFORE / AFTER

Create a visual contrast section.

## Heading

``` text
From scattered records to one accountable state.
```

### BEFORE

Show:

``` text
SPREADSHEET
   +
PHONE CALL
   +
MANUAL RECORD
   +
DISPATCHER MEMORY
   +
OUTDATED STATUS
```

Use disconnected visual nodes.

### AFTER

Show:

``` text
ERIS

RESOURCE
   ↓
STATE
   ↓
MOVEMENT
   ↓
AUDIT
   ↓
REPORT
```

The transition should visually connect the fragmented nodes.

------------------------------------------------------------------------

# 6. MUNICIPALITY / REGION VIEW

This is an important differentiator from ACE.

Create a simulated geographic/resource distribution visualization.

## Heading

``` text
One region. A live picture of resource readiness.
```

Show a simplified abstract map.

Do not use real sensitive operational data.

Create fictional municipality markers:

``` text
M01  8 available
M02  3 reserved
M03  5 dispatched
M04  1 returning
M05  9 available
```

Clicking a municipality should update a side panel:

``` text
MUNICIPALITY 03

AVAILABLE
5

RESERVED
2

DISPATCHED
4

RETURNING
1
```

The purpose is to visually demonstrate that ERIS provides **regional
operational visibility**.

------------------------------------------------------------------------

# 7. MOVEMENT HISTORY

Create an audit timeline.

## Heading

``` text
Every movement leaves a trail.
```

Show:

``` text
14:32
RESOURCE DISPATCHED
Generator GEN-092

14:12
RESERVATION CONFIRMED
Municipality 07

13:48
RESOURCE RESERVED
Generator GEN-092

12:03
INVENTORY VERIFIED
Generator GEN-092
```

Use a vertical timeline.

Each event should have:

-   timestamp
-   event type
-   resource
-   municipality
-   status

Hovering an event highlights the corresponding resource on the
dashboard.

------------------------------------------------------------------------

# 8. ARCHITECTURE --- USE A SYSTEM MAP, NOT THREE CARDS

Do NOT use:

``` text
Dashboards | Services | Access & Ops
```

as generic cards.

Instead create a layered operational architecture.

## Heading

``` text
One accountable state, across the whole system.
```

Visual:

``` text
                 ERIS OPERATIONS
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     DASHBOARDS     RESOURCE       REPORTING
                    STATE
                       │
               ┌───────┴───────┐
               │               │
          RESERVATIONS       MOVEMENT
               │               │
               └───────┬───────┘
                       │
                    LARAVEL
                       │
        ┌──────────────┼──────────────┐
        │              │              │
      MYSQL          RBAC          BACKUPS
```

Use animated data movement.

------------------------------------------------------------------------

# 9. ROLE / PERMISSION VISUALIZATION

ERIS has operational access concerns.

Give this its own visual section.

## Heading

``` text
The same resource. Different responsibilities.
```

Show role switching:

``` text
RESPONDER
↓
View available resources

COORDINATOR
↓
Reserve / dispatch resources

ADMIN
↓
Manage state + permissions

AUDITOR
↓
Review movement history
```

When a role is selected, highlight what the user can access.

This demonstrates RBAC without needing paragraphs.

------------------------------------------------------------------------

# 10. "WHAT SHIPPED" --- OPERATIONAL OUTCOMES

Do not use the ACE results layout.

Use a large operational scorecard.

``` text
RESOURCE VISIBILITY
Availability visible across municipalities

DISPATCH ACCOUNTABILITY
Movement history preserved

RETURN TRACKING
Resource lifecycle remains traceable

AUDITABILITY
State transitions remain reviewable

REPORTING
Operational information can be surfaced for reporting
```

Avoid invented numerical metrics.

Only use numbers if they are supported by the project evidence.

------------------------------------------------------------------------

# 11. ENGINEERING CHALLENGES

The current ERIS page has an "Honest backlog", which is good.

Keep that idea, but make it more technically compelling.

## Heading

``` text
The problems worth solving.
```

Use a vertical engineering log.

Example structure:

``` text
01
RESOURCE STATE

Problem:
How do you prevent resource state from becoming inconsistent
across reservations, dispatch, and returns?

Decision:
Centralize the operational state and movement history.

────────────────────────

02
AUDITABILITY

Problem:
How do you preserve an accountable history of resource movement?

Decision:
Record state transitions as part of the operational workflow.

────────────────────────

03
ACCESS CONTROL

Problem:
Different municipalities and operational roles need different access.

Decision:
Use role-based access around operational responsibilities.
```

Do not invent implementation details beyond what the project supports.

------------------------------------------------------------------------

# 12. "PLAY THE RESOURCE LIFECYCLE"

This should be ERIS's signature animation.

Add a button:

``` text
PLAY RESOURCE LIFECYCLE →
```

When activated, show one fictional resource moving through the system.

### Step 1

``` text
AVAILABLE
Generator GEN-092
```

### Step 2

``` text
RESERVED
Municipality 07
```

### Step 3

``` text
DISPATCHED
Incident #2041
```

### Step 4

``` text
RETURNING
```

### Step 5

``` text
AUDIT RECORDED
```

At every step:

-   update status
-   update timestamp
-   update location
-   append event to audit timeline
-   pulse the corresponding node

This single interaction can make the page feel dramatically different
from ACE.

------------------------------------------------------------------------

# 13. TECHNOLOGY --- MAKE IT SYSTEMATIC

Do not use a generic row of technology pills.

Create a compact technical map.

``` text
INTERFACE
Vue
Inertia

APPLICATION
Laravel

DATA
MySQL

OPERATIONS
RBAC
Backups
Reporting
```

Show the technologies connected to the layers they support.

------------------------------------------------------------------------

# 14. CTA

Do not copy ACE's CTA.

ERIS should target organizations with operational complexity.

Headline:

``` text
When operational data needs to stay accountable.
```

Supporting text:

``` text
I build internal systems that turn fragmented operational workflows
into reliable, traceable software.
```

Button:

``` text
Start a project →
```

Secondary:

``` text
View another case study →
```

------------------------------------------------------------------------

# 15. VISUAL STYLE

ERIS should feel:

-   operational
-   precise
-   data-driven
-   trustworthy
-   controlled
-   real-time
-   slightly utilitarian

Use:

-   dashboard panels
-   state indicators
-   timeline visualizations
-   geographic markers
-   status transitions
-   event logs
-   system maps

Avoid:

-   SaaS marketing-card layouts
-   generic three-column architecture
-   repeated ACE workflow
-   decorative gradient backgrounds
-   excessive floating cards

------------------------------------------------------------------------

# 16. ANIMATION RULES

Animations should represent **state change and operational movement**.

Good:

-   status transitions
-   resource movement
-   map marker pulses
-   timeline events appearing
-   audit entries being appended
-   role switching
-   dashboard values changing
-   system nodes highlighting

Bad:

-   random floating objects
-   excessive parallax
-   spinning elements
-   decorative particles
-   meaningless scroll animations

------------------------------------------------------------------------

# 17. RESPONSIVE BEHAVIOR

Desktop:

-   command center dashboard
-   resource lifecycle
-   regional map
-   audit timeline

Tablet:

-   simplify dashboard
-   preserve resource states
-   stack map and event log

Mobile:

-   dashboard becomes stacked panels
-   lifecycle becomes vertical
-   map becomes simplified region list
-   audit timeline remains readable

Do not shrink a complex desktop visualization until it becomes
unreadable.

Create mobile-specific compositions when necessary.

------------------------------------------------------------------------

# 18. IMPLEMENTATION PRINCIPLE

Do not create a generic case-study template and inject ERIS data.

Shared components may include:

-   typography
-   navigation
-   footer
-   button primitives
-   spacing
-   base animation utilities

But ERIS's composition should be unique.

The visitor should immediately understand:

**ERIS = resources + operational state + dispatch + accountability +
audit trail.**

------------------------------------------------------------------------

# 19. DIFFERENTIATION CHECK

After implementation, compare ACE and ERIS side-by-side.

They must NOT share:

-   the same hero composition
-   the same section order
-   the same primary visualization
-   the same workflow component
-   the same architecture component
-   the same CTA composition
-   the same animation pattern

They MAY share:

-   typography
-   colors
-   navigation
-   footer
-   button language
-   global design system

The result should feel like two projects from the same engineer's
portfolio --- **not two copies of the same case-study template.**

------------------------------------------------------------------------

# 20. SUCCESS CRITERIA

ERIS is complete when:

-   It feels like an operations command center.
-   The resource lifecycle is the main visual story.
-   Resource state is understandable without reading all the copy.
-   The audit trail is visually demonstrated.
-   Regional visibility is represented.
-   RBAC/access is visually explained.
-   The page feels technically credible.
-   The page has a signature interactive moment.
-   ACE and ERIS look intentionally different.
-   Atlas NHD remains the benchmark for technical storytelling quality.
