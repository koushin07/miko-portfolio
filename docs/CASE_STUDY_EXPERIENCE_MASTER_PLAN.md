# CASE_STUDY_EXPERIENCE_MASTER_PLAN.md

## Mission

Redesign and improve the case study experience across the portfolio.

The goal is **not** to create four versions of the same generic case-study template.

The homepage establishes a clear identity: a full-stack engineer who builds serious, production-oriented systems involving complex data, AI, automation, integrations, and business-critical workflows.

Every case study must now prove that claim.

When a visitor clicks into a project, the experience should make them feel:

> **"This is not just a portfolio mockup. This person understands complex systems and can actually build them."**

---

# 1. The Core Problem to Fix

Do not use the same generic structure for every project:

- Hero
- Problem
- Solution
- Tech stack
- Features
- Results

Atlas NHD, ReadMindMe, ACE, and ERIS are fundamentally different systems:

- **Atlas NHD** — geospatial data, compliance, spatial analysis, data pipelines
- **ReadMindMe** — AI, RAG, retrieval, embeddings, knowledge systems
- **ACE** — booking, workflow, CRM, integrations, connected business systems
- **ERIS** — operations, resources, readiness, dispatch, accountability

The UI should communicate these differences before the visitor reads every paragraph.

## Non-negotiable principle

Do not use one universal case-study template.

Shared components may exist for navigation, typography, spacing, buttons, footer, and transitions, but the main storytelling experience must be project-specific.

One portfolio. One design system. Four different engineering worlds.

---

# 2. Desired Visitor Journey

1. **Home:** "I build serious systems."
2. **Case study:** "This is a real system."
3. **Problem:** "That problem is genuinely complicated."
4. **Architecture:** "I understand how the pieces connect."
5. **Engineering decisions:** "This developer understands more than UI."
6. **Workflow:** "I can see how the system actually operates."
7. **Outcome:** "I could trust this person with a complex project."
8. **CTA:** "I want to discuss my own system."

The case study should progressively explain:

- What problem existed
- Why it was difficult
- What the system needed to do
- How the architecture was organized
- How major workflows operate
- What technical decisions mattered
- What the resulting system can do

---

# 3. Global Case Study Rules

## Do not overload the page with text

Avoid long walls of explanation.

Prefer:

- Short paragraphs
- Large statements
- Interactive diagrams
- Architecture maps
- Data flows
- Step-by-step workflows
- Engineering decision callouts
- Progressive disclosure
- Scroll-linked storytelling

The experience should feel like an **interactive technical presentation**.

## Technology must have context

Do not create a logo wall. Explain responsibility:

**FastAPI** — Application API and business logic

**PostGIS** — Spatial data storage and geographic queries

**GeoServer** — Serving geospatial datasets and map layers

**Celery** — Background and long-running processing

**Next.js** — Customer-facing application

The visitor should understand **why each technology exists**.

## Use animation to explain

Animation should communicate:

- Flow
- Relationships
- Transformation
- Progression
- Cause and effect

Do not use meaningless floating particles, constant motion, or decorative effects that do not explain anything.

---

# 4. Atlas NHD — Geospatial Intelligence

## Identity

Atlas NHD should feel like:

> **A geographic intelligence and compliance system.**

The visual language should draw from maps, parcel boundaries, geographic layers, hazard zones, spatial datasets, regulatory determination, and data pipelines.

**Precision · Data · Geography · Infrastructure · Reliability**

## Hero

Do not use a generic title and screenshot.

Create a large geographic visualization:

1. A geographic surface appears
2. A parcel boundary is identified
3. Hazard or geographic layers appear
4. Relevant datasets intersect the parcel
5. The system evaluates what applies
6. A determination or report is produced

The visitor should understand:

> Give the system a property or parcel, combine it with geographic and regulatory data, and produce a reliable determination.

## Problem

Large statement:

> **A property is not just an address.**

Visualize:

Property  
+ Parcel geometry  
+ Flood data  
+ Fire hazard data  
+ Jurisdiction rules  
+ Regulatory requirements  
= Disclosure or compliance determination

## Why it is difficult

Show fragmented data sources converging into one determination.

Main message:

> **The challenge was not displaying a map. It was turning fragmented geographic and regulatory information into a reliable determination.**

## Architecture

Create an interactive flow:

Data Sources  
↓  
Ingestion / Processing  
↓  
Spatial Database  
↓  
Application Services  
↓  
Determination Workflow  
↓  
Report / Customer Portal

Allow interaction with real technologies where supported by the project.

## Parcel journey

01 Property entered  
02 Parcel identified  
03 Spatial datasets queried  
04 Applicable conditions determined  
05 Rules applied  
06 Output generated  
07 Customer accesses result

As each stage activates, update the visual to demonstrate what the system is doing.

## Engineering decisions

Explain real decisions:

- Why spatial queries require PostGIS
- Why long-running work should move to background processing
- Why geographic layers may need specialized serving
- Why traceability and repeatability matter

Do not invent details.

---

# 5. ReadMindMe — AI Knowledge and Retrieval

## Identity

ReadMindMe should feel like:

> **An AI knowledge and retrieval system.**

The visual language should represent:

**Knowledge · Connections · Retrieval · Memory · Context · Intelligence**

## Hero

Visualize:

User Question  
↓  
Query Processing  
↓  
Embedding  
↓  
pgvector Search  
↓  
Relevant Knowledge  
↓  
Context Assembly  
↓  
OpenAI  
↓  
Structured Response

Reveal the pipeline progressively.

The visitor should immediately understand:

> This is not simply sending a prompt to an LLM.

## Main statement

> **The difficult part wasn't generating an answer. It was finding the right information before generating one.**

## Interactive RAG pipeline

User Query  
↓  
Query Processing  
↓  
Embedding  
↓  
Vector Search  
↓  
Relevant Content  
↓  
Cross-reference or enrichment where accurately implemented  
↓  
Context Construction  
↓  
LLM  
↓  
Structured Response

The animation should teach the visitor how the system works.

## Knowledge scale

Use verified figures only. If supported, visually represent:

- 36,819 embeddings
- 603K+ cross-references

## Compare against a standard LLM flow

**Standard approach**

Question → Model knowledge → Generated response

**Retrieval-based approach**

Question → Query understanding → Vector retrieval → Relevant knowledge → Context assembly → Generated response

## Engineering decisions

Explain only what was actually implemented:

- Why pgvector was used
- Why retrieval happens before generation
- Why structured output matters
- Why pipeline stages are separated

---

# 6. ACE — Connected Business Workflow

## Identity

ACE should feel like:

> **A connected business workflow.**

The visual metaphor is:

People · Bookings · Schedules · Locations · CRM · Documents · Status

## Hero

Visualize:

Request  
↓  
Validation  
↓  
Location / Scheduling  
↓  
CRM Update  
↓  
Document Workflow  
↓  
Confirmed

Use connected nodes to represent real systems.

## Main message

> **The difficult part was not building individual screens. It was keeping the workflow connected.**

Show fragmentation first, then show one connected workflow.

## Workflow journey

01 Request created  
02 Requirements checked  
03 Booking created  
04 Connected systems updated  
05 Documents prepared  
06 Status tracked  
07 Workflow completed

## Integration map

Place the ACE platform in the center and connect real integrations around it.

Examples only if accurate:

- Pipedrive — CRM synchronization
- PandaDoc — document workflow
- Mapbox — location interaction

For each integration, explain:

- What information moves
- Why the integration exists
- What business problem it solves

## Engineering challenges

Focus on:

- Synchronizing system state
- API failures
- Preventing inconsistent or duplicate data
- Clear workflow state
- Reliable integration behavior

---

# 7. ERIS — Operational Command System

## Identity

ERIS should feel like:

> **An operational control and resource management system.**

**Readiness · Visibility · Accountability · Coordination · Control**

## Hero

Visualize the resource lifecycle:

Available  
↓  
Reserved  
↓  
Deployed  
↓  
Returned  
↓  
Inspected  
↓  
Ready

## Main statement

> **When resources are needed, uncertainty is the problem.**

Show:

- Where is it?
- Who has it?
- Is it available?
- Was it returned?
- Is it ready?

## Resource lifecycle

Create an interactive state flow:

READY  
↓  
RESERVED  
↓  
DISPATCHED  
↓  
IN USE  
↓  
RETURNED  
↓  
INSPECTION

Then:

PASS → READY

ISSUE → MAINTENANCE / NOT READY

Only use states that accurately reflect the actual system.

## Operational modules

**Resources** — What exists

**Readiness** — Whether it can be deployed

**Reservations** — What has been allocated

**Dispatch** — Where it went

**Returns** — When it came back

**Audit trail** — What happened

Make the modules visually connected rather than independent feature cards.

---

# 8. Shared Navigation

At the top:

← Back to Work

Then:

CASE STUDY 01 / 04  
PROJECT NAME

Consider subtle progress navigation:

- Overview
- Problem
- System
- Workflow
- Architecture
- Engineering
- Outcome

Desktop may use a side rail. Mobile should use a compact control.

---

# 9. Motion and Interaction Rules

Motion must explain the system.

### Atlas

Map layers and geographic relationships animate.

### ReadMindMe

Information travels through the retrieval pipeline.

### ACE

Business data moves between connected systems.

### ERIS

Resources transition through operational states.

Respect `prefers-reduced-motion`.

---

# 10. Visual Quality Bar

The result should feel like:

> **High-end SaaS product presentation + interactive technical case study + modern editorial storytelling + engineering portfolio**

It should not feel like:

- Generic agency template
- Repeated card layout
- Resume pasted onto a webpage
- Dribbble-style decoration without technical substance
- The same Problem / Solution / Tech Stack page repeated four times

---

# 11. Content Hierarchy

## Level 1 — Major idea

Large and memorable.

Example:

> **A property is not just an address.**

## Level 2 — Explanation

Explain the challenge clearly.

## Level 3 — Technical evidence

Example:

**PostGIS** — Spatial relationships

**GeoServer** — Geographic layers

**FastAPI** — Application services

Do not give every piece of content equal visual weight.

---

# 12. Do Not Invent Results

Never invent:

- Revenue
- Percentages
- Customer numbers
- Time savings
- Performance improvements
- User counts

If verified metrics are unavailable, focus on:

- System capabilities
- Architecture
- Workflow improvements
- Engineering decisions
- Operational value

---

# 13. Responsive Requirements

Desktop:

- Interactive diagrams
- Expanded architecture
- Rich visual storytelling

Mobile:

- Vertical flows
- Tap-friendly interactions
- No essential information hidden behind hover
- No tiny unreadable diagrams
- No horizontal overflow

Do not simply shrink desktop diagrams.

---

# 14. Performance and Accessibility

Avoid:

- Huge unoptimized assets
- Excessive JavaScript
- Heavy decorative rendering
- Scroll jank

Use:

- Optimized images
- Lazy loading
- Code splitting
- Efficient SVG
- GPU-friendly transforms
- Reduced-motion support

Accessibility:

- Semantic headings
- Keyboard-accessible interactions
- Sufficient contrast
- Accessible labels
- Important information not limited to hover

---

# 15. SEO and AI Search Consistency

Every case study should clearly establish:

Project  
↓  
Problem domain  
↓  
System type  
↓  
Technologies  
↓  
Capabilities  
↓  
Miko's contribution

Important information must exist in semantic HTML.

Do not hide critical context entirely inside animations or images.

---

# 16. Project-Specific CTA

Do not end with "Thanks for reading."

### Atlas

> **Building something where the data has to be correct?**

### ReadMindMe

> **Exploring how AI can work with your own data?**

### ACE

> **Trying to connect disconnected business systems?**

### ERIS

> **Need better visibility over a complex operational workflow?**

---

# 17. Implementation Order

## Phase 1 — Audit

Review:

- Case-study routes
- Components
- Content
- Assets
- Animation patterns
- Responsive behavior
- SEO metadata

Keep working architecture where appropriate.

## Phase 2 — Shared foundation

Build reusable primitives:

- CaseStudyShell
- CaseStudyNavigation
- ArchitectureDiagram
- WorkflowVisualization
- TechnicalDecision
- SystemNode
- DataFlow
- CaseStudyCTA

Reuse engineering foundations without forcing identical presentation.

## Phase 3 — Atlas NHD

Geospatial visualization  
→ Data layers  
→ Parcel journey  
→ Architecture  
→ Determination workflow

## Phase 4 — ReadMindMe

Question  
→ Retrieval  
→ pgvector  
→ Context  
→ LLM  
→ Response

## Phase 5 — ACE

Request  
→ Workflow  
→ Integrations  
→ Documents / CRM  
→ Completion

## Phase 6 — ERIS

Resource  
→ Reservation  
→ Dispatch  
→ Return  
→ Inspection  
→ Readiness

---

# 18. Final Acceptance Test

Before considering the redesign complete:

## Visual differentiation

Can someone immediately tell the four projects apart from screenshots alone?

If not, redesign further.

## Storytelling

Does every case study explain why the problem was technically or operationally difficult?

If not, improve the narrative.

## Technical credibility

Does the visitor understand architectural decisions instead of only seeing technology names?

If not, improve the engineering storytelling.

## Interactivity

Does interaction explain the system?

If not, remove decorative interaction and replace it with meaningful visualization.

## Conversion

Does each case study naturally lead to a conversation about the visitor's own problem?

If not, improve the CTA.

## Performance

Is the experience smooth and usable?

If not, optimize before adding more effects.

---

# Final Creative Direction

The goal is not:

> **"Look at my beautiful portfolio."**

The goal is:

> **"Look at how this developer thinks."**

The visitor should see:

- How problems are broken down
- How data moves
- How systems connect
- How workflows are designed
- How architecture decisions are made
- How reliability and correctness are considered

Each case study should feel like entering a different engineering world:

## Atlas NHD

A geographic data and compliance system.

## ReadMindMe

An AI knowledge and retrieval pipeline.

## ACE

A connected business workflow.

## ERIS

An operational command and resource management system.

Keep the portfolio brand consistent, but make each project world visually distinct.

**Do not settle for generic cards, generic timelines, generic gradients, or a repeated Problem / Solution / Tech Stack layout.**

The final result should make the case studies feel like **interactive evidence of engineering capability**, not pages that simply describe past work.
