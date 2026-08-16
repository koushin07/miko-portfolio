# Miko Portfolio Rebuild --- Interactive Client-Conversion Experience

## Purpose

This document is the implementation brief for rebuilding Miko's
developer portfolio into a **premium, interactive, client-focused
engineering portfolio**.

The goal is not to make a flashy developer portfolio for the sake of
visual effects.

The goal is to make a portfolio that makes a potential client think:

> **"This developer can actually understand, build, integrate, test, and
> ship complicated software systems."**

The portfolio should communicate three things within the first 10--20
seconds:

1.  **What Miko does:** Full-stack development, AI systems, SaaS, and
    business automation.
2.  **What Miko has actually built:** Real systems such as ReadMindMe,
    Atlas NHD, and production n8n automation.
3.  **Why a client should trust him:** Full-stack capability combined
    with an engineering/QA mindset and real integration/production
    experience.

The existing portfolio contains strong technical material. The rebuild
should primarily improve **positioning, information hierarchy,
storytelling, visual presentation, interaction design, and conversion**
rather than throwing away the technical depth.

------------------------------------------------------------------------

# 1. North-Star Positioning

## Primary positioning

Use:

> **Full-Stack Developer for AI, SaaS & Automation**

Supporting statement:

> **I build production-ready web applications, AI-powered systems, and
> business automations --- connecting the frontend, backend, APIs,
> databases, and third-party tools into reliable systems.**

Alternative supporting line if a shorter hero is required:

> **I build AI-powered software, SaaS products, and business automation
> from idea to production.**

The portfolio should NOT lead with:

> "I build software for regulated industries."

That is too restrictive for the broader client market.

Regulated/enterprise experience can still appear as proof later.

------------------------------------------------------------------------

# 2. Core Portfolio Strategy

The portfolio should have two layers.

## Layer 1 --- Client-friendly

A business owner or hiring manager should understand the value without
understanding technical terminology.

They should quickly see:

-   What can Miko build?
-   Has he built something similar?
-   What tools can he integrate?
-   Can he handle the whole system?
-   How do I contact him?

## Layer 2 --- Technical proof

A technical person should be able to go deeper and discover:

-   architecture
-   APIs
-   databases
-   AI/RAG
-   automation
-   testing
-   security
-   deployment
-   error handling
-   production engineering decisions

The current portfolio is already strong at Layer 2.

The rebuild should make Layer 1 much stronger while preserving Layer 2.

------------------------------------------------------------------------

# 3. Design Philosophy

The design should feel like a **premium software product**, not a
generic freelancer template.

Visual references/concepts:

-   Linear
-   Vercel
-   Raycast
-   modern AI products
-   premium engineering dashboards
-   award-winning interactive developer portfolios

Do NOT copy any particular website.

Borrow the principles:

-   excellent typography
-   strong spacing
-   restrained motion
-   purposeful interactions
-   clear hierarchy
-   high-quality project storytelling
-   subtle technical visualizations
-   smooth transitions

The website should feel:

-   sophisticated
-   technical
-   modern
-   calm
-   confident
-   premium
-   fast
-   intentional

Avoid:

-   excessive 3D
-   particle explosions
-   unnecessary WebGL
-   giant animated backgrounds
-   distracting cursor effects
-   long loading animations
-   animation on every element
-   gimmicks that make the site harder to use

The interaction should demonstrate Miko's engineering ability.

------------------------------------------------------------------------

# 4. Recommended Visual Language

## Typography

Preferred:

-   Geist
-   Geist Mono

Use Geist for normal UI and headings.

Use Geist Mono for:

-   technology labels
-   code-like metadata
-   system states
-   endpoint labels
-   small technical annotations
-   architecture labels

Large headings should have strong visual presence.

Avoid too many font weights.

## Colors

Use a sophisticated dark-first visual system.

Suggested direction:

-   near-black background
-   slightly lighter surface panels
-   subtle borders
-   neutral text
-   one primary accent
-   one secondary AI/automation accent if needed

Do not use excessive gradients.

Gradients should be used primarily for:

-   hero emphasis
-   active nodes
-   system data flow
-   subtle project hover states

## Borders

Use thin, subtle borders.

Cards should feel like parts of a software interface rather than
traditional portfolio cards.

## Radius

Use moderate corner radius.

Avoid extremely rounded "startup template" cards everywhere.

------------------------------------------------------------------------

# 5. Global Navigation

Keep navigation extremely simple.

Suggested structure:

``` text
MIKO.CANARES

Work     Services     About

                         Start a Project →
```

On mobile:

``` text
MIKO

Menu
```

The navigation should remain accessible without becoming a large
floating panel.

The primary CTA should always be easy to find.

------------------------------------------------------------------------

# 6. Homepage Journey

The user journey should feel like an interactive tour through a software
system.

Recommended order:

``` text
Hero
  ↓
What I Build
  ↓
Interactive "Idea → Production" System
  ↓
Featured Work
  ↓
AI Engineering
  ↓
Automation / n8n
  ↓
Integrations
  ↓
Why Work With Me
  ↓
How I Work
  ↓
CTA
  ↓
Footer
```

The page should progressively answer:

1.  Who is this?
2.  What does he build?
3.  Can he build something complicated?
4.  What has he actually built?
5.  Can he work with AI?
6.  Can he automate business processes?
7.  Can he integrate existing tools?
8.  Can I trust him?
9.  How do I start?

------------------------------------------------------------------------

# 7. HERO SECTION

## Objective

The hero must immediately communicate:

> Full-stack + AI + SaaS + Automation.

Recommended copy:

### Heading

> **I build AI-powered software, SaaS products, and business
> automation.**

Supporting copy:

> **Full-stack engineer specializing in Next.js, React, Python, Laravel,
> APIs, AI systems, and automation --- from frontend to backend and
> production.**

Stats/metadata:

``` text
10+ Systems
AI / RAG
SaaS
Automation
QA Mindset
```

Only use statistics that are supported by the actual portfolio content.

## CTAs

Primary:

> **View My Work**

Secondary:

> **Start a Project**

Do not use "Book a Systems Review" as the primary homepage CTA. That
sounds more enterprise-consulting-oriented than necessary.

------------------------------------------------------------------------

# 8. HERO ANIMATION --- "THE SYSTEM COMES TO LIFE"

This is one of the signature interactions.

The animation should subtly visualize Miko's engineering process.

Initial state:

``` text
IDEA
```

As the user enters/scrolls:

``` text
IDEA
  ↓
ARCHITECTURE
  ↓
FRONTEND ─── BACKEND
       \       /
        DATABASE
           ↓
          AI
           ↓
     INTEGRATIONS
           ↓
        TESTING
           ↓
       PRODUCTION
```

The animation should not be a literal flowchart taking over the page.

Instead, create a refined network of nodes.

Each node should:

-   fade in
-   connect with a thin line
-   briefly pulse
-   allow a subtle data packet to travel through it

Example sequence:

### Phase 1

`CLIENT IDEA`

### Phase 2

`FRONTEND`

`API`

`DATABASE`

### Phase 3

`AI`

`INTEGRATIONS`

### Phase 4

`TESTING`

`SECURITY`

### Phase 5

`PRODUCTION`

Then the final state:

> **BUILT → TESTED → SHIPPED**

The animation should communicate:

> Miko doesn't only write frontend code. He understands the whole
> system.

------------------------------------------------------------------------

# 9. "WHAT I BUILD" SECTION

This should be client-oriented.

Use three primary service cards.

## Card 1 --- Full-Stack SaaS

Title:

> **Full-Stack SaaS Development**

Description:

> Build complete web applications from frontend to backend, database,
> authentication, APIs, payments, dashboards, and deployment.

Examples:

-   customer portals
-   admin dashboards
-   booking platforms
-   internal tools
-   SaaS products
-   business applications

## Card 2 --- AI Applications

Title:

> **AI & RAG Development**

Description:

> Build AI-powered applications using OpenAI, embeddings, RAG, pgvector,
> structured outputs, and custom AI workflows.

Examples:

-   AI assistants
-   knowledge bases
-   RAG systems
-   document intelligence
-   AI chat
-   AI-powered workflows

## Card 3 --- Automation

Title:

> **Business Automation & Integrations**

Description:

> Connect CRMs, payments, documents, communication tools, internal
> systems, and APIs using n8n, webhooks, and custom backend services.

Examples:

-   CRM automation
-   API integrations
-   document automation
-   payment workflows
-   webhook systems
-   notification pipelines

------------------------------------------------------------------------

# 10. QA AS A DIFFERENTIATOR

Do not position QA as a separate unrelated service.

Instead:

> **Built with a QA mindset.**

Supporting text:

> I don't just make software work on my machine. I build, test,
> validate, and troubleshoot systems with production reliability in
> mind.

Possible visual:

``` text
BUILD
  ↓
TEST
  ↓
VALIDATE
  ↓
DEPLOY
  ↓
MONITOR
```

Use subtle check animations.

This is a major differentiator because Miko's background combines
full-stack development and enterprise-grade QA.

------------------------------------------------------------------------

# 11. FEATURED WORK

Featured project order should prioritize the market Miko wants to
attract.

Recommended:

### 01 --- ReadMindMe

AI / RAG Platform

### 02 --- Atlas NHD

Geospatial SaaS Platform

### 03 --- Automation / LegalTech

AI + n8n + Business Automation

Do not make the cards look like standard portfolio thumbnails.

Each project should have a visual identity.

------------------------------------------------------------------------

# 12. PROJECT CARD INTERACTION

Project cards should react to hover.

Normal state:

``` text
READMINDME

AI / RAG PLATFORM

Next.js · FastAPI · OpenAI · pgvector
```

Hover state:

-   project image/visual expands slightly
-   technical metadata becomes more visible
-   subtle system animation starts
-   CTA appears:

> View Case Study →

The animation should be 200--500ms and smooth.

Avoid large movement.

------------------------------------------------------------------------

# 13. READMINDME --- AI/RAG VISUALIZATION

This should be one of the strongest interactive case studies.

The portfolio should visually demonstrate what RAG does.

## Visual flow

``` text
USER QUESTION
      ↓
EMBEDDING
      ↓
VECTOR SEARCH
      ↓
RELEVANT CHUNKS
      ↓
CONTEXT
      ↓
GPT-4o
      ↓
STRUCTURED RESPONSE
      ↓
USER
```

Animate a small "query packet" flowing through the system.

When it reaches:

### Embedding

Show:

> Convert question into a vector representation.

### pgvector

Show:

> Search semantically similar content.

### Retrieved chunks

Show multiple small document blocks.

### OpenAI

Show:

> Generate a grounded response using retrieved context.

### Structured output

Show a small JSON-like result.

The user should visually understand RAG without needing to read a
technical explanation.

------------------------------------------------------------------------

# 14. READMINDME BUSINESS-FIRST CASE STUDY

Start the case study with:

## Problem

Generic AI assistants can hallucinate because they don't know the
application's knowledge base.

## Solution

A retrieval-augmented AI platform that retrieves relevant knowledge
before generating responses.

## What it demonstrates

-   RAG
-   embeddings
-   vector search
-   pgvector
-   OpenAI
-   structured outputs
-   conversation memory
-   authentication
-   moderation
-   backend services
-   database architecture

Then show technical architecture.

Do not lead with implementation details such as router counts or
migration counts.

Those details can appear later under:

> **Under the hood**

------------------------------------------------------------------------

# 15. ATLAS NHD --- GEOSPATIAL VISUALIZATION

Atlas should have a different visual language.

When the user hovers Atlas:

-   background subtly becomes a geographic grid
-   small location points appear
-   lines connect data layers
-   map-like motion occurs
-   project title remains readable

Do NOT create a full interactive map unless it adds real value.

The effect should simply communicate:

> Geospatial software.

Example:

``` text
DATA
 ↓
POSTGIS
 ↓
GEOSERVER
 ↓
API
 ↓
NEXT.JS
 ↓
MAP / REPORT
```

This creates visual variety between projects.

------------------------------------------------------------------------

# 16. N8N / AUTOMATION --- SIGNATURE SECTION

This should be a major portfolio section.

The actual source material describes a self-hosted n8n platform with:

-   42 workflows
-   document generation
-   court-data ingestion
-   telephony
-   e-signature
-   CRM
-   client intake
-   email
-   scheduling
-   AI-assisted extraction
-   webhook/API orchestration
-   retries
-   idempotency
-   production operations

The portfolio write-up states that the platform is self-hosted on a
Hostinger VPS behind Traefik with IP whitelisting and credential
management.

Source material: `n8n_Portfolio_Writeup.md`

Do not invent additional metrics.

------------------------------------------------------------------------

# 17. N8N HERO MESSAGE

Use:

> **I don't just build n8n workflows. I build automation systems.**

Supporting text:

> Connect your CRM, AI, documents, APIs, databases, communication tools,
> and internal systems into one reliable automation layer.

Alternative:

> **n8n becomes the automation backbone connecting the moving parts of
> the business.**

This is the important positioning.

Do not sell n8n as "drag and drop automation."

Sell:

> orchestration + integration + reliability.

------------------------------------------------------------------------

# 18. N8N ARCHITECTURE VISUAL

Create a large interactive architecture diagram.

High-level:

``` text
                     ┌───────────────┐
                     │    TRIGGERS   │
                     │               │
                     │ Webhook       │
                     │ Schedule      │
                     │ Form          │
                     │ External API  │
                     │ File Upload   │
                     └───────┬───────┘
                             ↓
                 ┌──────────────────────┐
                 │     n8n ENGINE       │
                 │                      │
                 │ Validate              │
                 │ Business Logic        │
                 │ Transform             │
                 │ AI / LLM              │
                 │ API Integrations      │
                 │ Error Handling        │
                 │ Retry / Recovery      │
                 └──────────┬───────────┘
                            ↓
        ┌───────────────────┼──────────────────┐
        ↓                   ↓                  ↓
      CRM                  AI               STORAGE
   SmartSuite          OpenAI/Gemini       Supabase
        ↓                   ↓                  ↓
        └───────────────────┼──────────────────┘
                            ↓
                    ┌───────────────┐
                    │ OUTPUTS       │
                    │               │
                    │ Email         │
                    │ PDF           │
                    │ Calendar      │
                    │ Notifications │
                    │ Records       │
                    └───────────────┘
```

The visual should be interactive.

------------------------------------------------------------------------

# 19. N8N DATA FLOW ANIMATION

When the section enters the viewport:

### Step 1

Trigger node lights up.

### Step 2

A small data packet moves into n8n.

### Step 3

Validation node activates.

### Step 4

Business logic activates.

### Step 5

The packet branches into:

-   CRM
-   AI
-   storage

### Step 6

Those branches reconnect.

### Step 7

Output nodes activate:

-   email
-   PDF
-   calendar
-   notification

This should repeat slowly or respond to scroll.

The animation should make the architecture understandable even without
reading text.

------------------------------------------------------------------------

# 20. N8N DOCUMENT FACTORY

This should be the main real-world workflow example.

Title:

> **Document Factory**

Subtitle:

> From intake to finished PDF --- automatically.

The actual documented workflow contains approximately 18 nodes.

Visual flow:

``` text
SUPABASE WEBHOOK
       ↓
READY TO PROCESS?
       ↓
GET TEMPLATE
       ↓
RENDER DOCUMENT
(DocxTemplater)
       ↓
ADD FOOTER
(Microservice)
       ↓
CONVERT TO PDF
(Gotenberg)
       ↓
ADD METADATA
(Microservice)
       ↓
UPLOAD PDF
(Supabase Storage)
       ↓
GENERATE LINK
       ↓
   ┌───┴────┐
   ↓        ↓
 EMAIL    NOTIFY
  Brevo   Pushover
```

Each node should have a short explanation.

Example:

### Supabase Webhook

> Starts the workflow when a queued intake is ready.

### Get Template

> Retrieves the appropriate document template.

### DocxTemplater

> Merges intake data into the document template.

### Footer Microservice

> Adds required footer/branding information.

### Gotenberg

> Converts the generated document into PDF.

### Metadata

> Adds document fingerprint metadata.

### Supabase Storage

> Stores the final document.

### Generate Link

> Creates a client-accessible download link.

### Brevo

> Sends transactional email.

### Pushover

> Notifies the internal team or agent.

------------------------------------------------------------------------

# 21. N8N NODE INTERACTION

When hovering/clicking an automation node:

-   node scales slightly
-   connection path becomes highlighted
-   surrounding unrelated nodes dim slightly
-   a tooltip/panel explains the node
-   technology badge appears

Example:

Hover:

`GOTENBERG`

Display:

``` text
PDF CONVERSION

Converts generated documents
into production-ready PDFs.

Integration:
Gotenberg
```

Do not open giant modal windows for every node.

Use small contextual overlays.

------------------------------------------------------------------------

# 22. N8N ENGINEERING PATTERNS

Immediately below the Document Factory, create:

> **Not just automation. Engineering.**

Five cards:

## 1. Idempotency

> Search-then-insert and reuse-or-create patterns prevent duplicate
> records, events, folders, and resources.

## 2. Resilience

> Retry-on-fail with backoff for API failures and rate limits.

## 3. Error Handling

> IF-gated branches and dedicated error responses keep failures explicit
> and manageable.

## 4. Modular Services

> Reusable microservices handle operations such as footer injection and
> metadata processing.

## 5. Observability

> Workflow execution data, logs, and operational monitoring make
> automation easier to troubleshoot.

These are based on the supplied n8n portfolio write-up. Do not invent
claims beyond the source.

------------------------------------------------------------------------

# 23. N8N WORKFLOW CATEGORIES

Do not dump all 42 workflows into the page.

Instead show:

> **42 workflows. One automation platform.**

Then show category tiles.

Possible categories based on the source:

-   Document Generation
-   Court / Legal Data
-   Telephony
-   E-signature
-   CRM / Intake / Email
-   Scheduling
-   Link Tracking
-   Voice / Miscellaneous

Each category should reveal 2--4 representative workflows.

The remaining count can be shown as:

> -   additional production workflows

Do not fabricate category counts unless they are calculated directly
from the source inventory.

------------------------------------------------------------------------

# 24. N8N INTEGRATIONS

Create a visual integration wall.

Technologies/integrations supported by the source include:

``` text
n8n
Supabase
PostgreSQL
Google Drive
Google Calendar
Gmail
SmartSuite
VoIP.ms
DocuSeal
Documenso
Gotenberg
DocxTemplater
Brevo
Pushover
ElevenLabs
CourtListener
Miami-Dade Clerk API
Google Gemini
REST APIs
JavaScript
```

Use recognizable logos where licensing and implementation allow.

Keep the display elegant.

Do not turn the section into a giant logo dump.

------------------------------------------------------------------------

# 25. "INTEGRATIONS I'VE WORKED WITH"

Create a broader commercial section covering useful client integrations.

Potential categories:

### AI

OpenAI Google Gemini ElevenLabs

### Payments

Stripe Checkout.com

### CRM

Pipedrive SmartSuite

### Documents

PandaDoc DocuSeal Documenso Gotenberg

### Communication

Brevo Gmail Pushover

### Commerce / Platforms

Shopify Supabase

Only list integrations that are actually supported by the
portfolio/source material.

------------------------------------------------------------------------

# 26. SERVICE SECTION --- CLIENT LANGUAGE

The service section should answer:

> "What can this developer do for me?"

Use practical language.

## Build

> Build a new SaaS product, internal tool, booking platform, dashboard,
> or business application.

## Add AI

> Add AI chat, RAG, document intelligence, structured AI outputs, or
> AI-powered workflows.

## Automate

> Connect APIs, CRMs, documents, payments, email, scheduling, and
> internal systems.

## Improve

> Fix bugs, improve performance, refactor systems, add features, and
> strengthen reliability.

## Test

> Validate APIs, workflows, access controls, integrations, and
> production behavior.

------------------------------------------------------------------------

# 27. "HOW I WORK"

Create a simple interactive timeline:

``` text
01  Understand
    ↓
02  Design
    ↓
03  Build
    ↓
04  Integrate
    ↓
05  Test
    ↓
06  Deploy
    ↓
07  Improve
```

Each step gets a one-sentence description.

This should reinforce that Miko can own the entire lifecycle.

------------------------------------------------------------------------

# 28. CTA

The primary conversion section should feel personal and low-friction.

Heading:

> **Have something you want to build?**

Supporting text:

> Tell me what you're trying to build, automate, fix, or improve. I'll
> help you figure out the right technical approach.

CTA:

> **Start a Project →**

Secondary:

> **View GitHub →**

Do not force visitors into a consulting terminology they may not
understand.

------------------------------------------------------------------------

# 29. CONTACT EXPERIENCE

The contact form should ask only what is useful.

Suggested fields:

-   Name
-   Email
-   What are you building?
-   What do you need help with?
-   Budget / timeline (optional)
-   Current system / website (optional)

Use selectable project types:

``` text
SaaS
AI Application
Automation
API Integration
Existing Application
Bug Fix / Improvement
QA / Testing
Other
```

After submission, provide a clean confirmation state.

------------------------------------------------------------------------

# 30. ABOUT PAGE

Keep the About page concise.

Lead with:

> Full-stack engineer with experience building, testing, integrating,
> and supporting business-critical software.

Then explain the unusual combination:

``` text
FULL-STACK DEVELOPMENT
+
AI / AUTOMATION
+
QA / RELIABILITY
```

This combination should be the core differentiator.

Avoid turning the About page into a full resume.

The CV can remain linked separately.

------------------------------------------------------------------------

# 31. TECHNICAL CASE STUDIES

Every case study should follow the same structure.

``` text
01. Problem
02. What I built
03. How it works
04. Interactive architecture
05. Key capabilities
06. Technical implementation
07. Engineering decisions
08. Testing / reliability
09. Technologies
10. CTA
```

This prevents technical information from overwhelming the visitor at the
beginning.

------------------------------------------------------------------------

# 32. CASE STUDY LANGUAGE RULE

Always translate technical work into business value first.

Bad:

> Implemented an LRU basemap cache with async-lock deduplication.

Better:

> Reduced duplicate map-data requests by coordinating concurrent
> requests and reusing cached results.

Technical detail can follow underneath.

Bad:

> Implemented 14-stage RAG pipeline.

Better:

> Built a retrieval pipeline that searches the application's knowledge
> base before generating an AI response.

Then:

> Technical implementation: 14-stage retrieval pipeline.

------------------------------------------------------------------------

# 33. MOTION SYSTEM

Use motion consistently.

Recommended timing:

-   micro-interaction: 150--250ms
-   card hover: 200--400ms
-   section reveal: 400--700ms
-   major architecture animation: 800--1500ms
-   data packet movement: 500--1200ms

Use easing such as:

-   ease-out
-   cubic-bezier curves
-   spring where appropriate

Avoid constant looping animations everywhere.

Motion should be triggered by:

-   viewport entry
-   hover
-   click
-   scroll
-   user interaction

------------------------------------------------------------------------

# 34. TECHNOLOGY RECOMMENDATION

Preferred implementation stack if the existing portfolio already uses
Next.js:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Framer Motion for standard UI motion
-   GSAP only where timeline/scroll sequencing provides clear value

Do not add a heavy library merely because it is popular.

Use the simplest technology that achieves the visual effect.

If existing project dependencies already support animation, reuse them
where practical.

------------------------------------------------------------------------

# 35. PERFORMANCE REQUIREMENTS

The portfolio must remain fast.

Interactive effects must not destroy performance.

Requirements:

-   lazy-load heavy project visuals
-   optimize images
-   avoid unnecessary JavaScript
-   avoid massive WebGL scenes unless genuinely valuable
-   avoid loading animation libraries globally if only one section needs
    them
-   respect mobile performance
-   minimize layout shift
-   use GPU-friendly transforms
-   do not animate expensive properties such as large box-shadow changes
    continuously
-   avoid infinite animation loops when they are not useful

The portfolio itself should demonstrate engineering discipline.

A beautiful site that loads slowly would contradict the message.

------------------------------------------------------------------------

# 36. ACCESSIBILITY

Support:

``` text
prefers-reduced-motion
```

When reduced motion is enabled:

-   disable data-packet animations
-   disable parallax
-   replace animated transitions with fades
-   maintain all information
-   maintain keyboard accessibility

All interactive architecture elements must remain understandable without
animation.

Do not make meaning dependent on color alone.

------------------------------------------------------------------------

# 37. MOBILE EXPERIENCE

Do not simply shrink the desktop design.

On mobile:

-   simplify architecture diagrams
-   convert wide node networks into vertical flows
-   reduce animation complexity
-   maintain readable typography
-   keep CTAs accessible
-   prevent horizontal scrolling
-   preserve project storytelling

For example:

Desktop:

``` text
Trigger → n8n → AI
       ↘ CRM ↗
       → Storage
```

Mobile:

``` text
Trigger
   ↓
n8n
   ↓
Validation
   ↓
AI
   ↓
CRM
   ↓
Storage
   ↓
Output
```

The system remains understandable.

------------------------------------------------------------------------

# 38. DO NOT INVENT PROJECT DATA

This is critical.

Use the existing portfolio and supplied project material as the source
of truth.

Do not invent:

-   clients
-   project names
-   metrics
-   revenue
-   performance improvements
-   years
-   team sizes
-   user counts
-   production claims
-   integrations
-   technologies

If a fact is not documented, either omit it or mark it as something that
needs confirmation.

------------------------------------------------------------------------

# 39. N8N SOURCE OF TRUTH

The supplied file:

`n8n_Portfolio_Writeup.md`

contains the current n8n portfolio information.

Important documented facts include:

-   self-hosted n8n instance
-   42 workflows
-   legal-technology/business automation context
-   webhook-driven workflows
-   idempotency
-   retries/backoff
-   API integrations
-   pagination/chunking
-   Gemini structured extraction
-   document generation
-   operational documentation
-   Document Factory
-   court-data ingestion
-   SmartSuite onboarding
-   calendar automation
-   VoIP.ms automation
-   Documenso event handling
-   ElevenLabs webhook handling

Do not expand these into unsupported claims.

------------------------------------------------------------------------

# 40. N8N STORYTELLING ORDER

The n8n section should follow:

``` text
Problem
  ↓
Automation Backbone
  ↓
Architecture
  ↓
Document Factory
  ↓
Engineering Patterns
  ↓
42 Workflows
  ↓
Integrations
  ↓
Production Operations
```

The visitor should understand the story before seeing technical
implementation details.

------------------------------------------------------------------------

# 41. PRODUCTION OPERATIONS VISUAL

Create a slim status bar beneath the n8n architecture.

Example:

``` text
SELF-HOSTED n8n
HOSTINGER VPS
TRAEFIK
CREDENTIAL MANAGEMENT
IP WHITELISTING
MONITORING / LOGGING
```

The source also documents:

> 49 tracked executions at review time\
> 0 failures\
> \~1.0s average runtime

If these numbers are displayed, label them clearly as:

> **At review time**

Do not present them as permanent current production guarantees.

------------------------------------------------------------------------

# 42. INTERACTIVE "SYSTEM MAP"

Consider making a reusable visual component used throughout the
portfolio.

Component concept:

``` text
<SystemMap>

Trigger
  ↓
Process
  ↓
Decision
  ↓
Integration
  ↓
Storage
  ↓
Output

</SystemMap>
```

This same component can be themed differently:

### ReadMindMe

`Question → Embedding → Vector Search → LLM → Answer`

### Atlas

`Source Data → PostGIS → GeoServer → API → Map`

### n8n

`Webhook → Validation → Automation → Integrations → Output`

This creates a consistent visual language across the portfolio.

------------------------------------------------------------------------

# 43. PORTFOLIO PERSONALITY

The site should communicate:

> "I am an engineer who likes solving systems problems."

Not:

> "Look at how many technologies I know."

Technology should appear as evidence.

The primary story is:

> **Problem → Solution → System → Reliability → Result**

------------------------------------------------------------------------

# 44. GITHUB / CV

Keep external proof accessible.

Footer or About:

``` text
GitHub
LinkedIn
CV
```

Use the existing profile links.

Do not make external links compete with the primary project CTA.

------------------------------------------------------------------------

# 45. SEO / CLIENT DISCOVERY

Use natural keywords in page metadata and visible content:

-   Full-stack developer
-   AI developer
-   AI application development
-   RAG development
-   Next.js developer
-   React developer
-   Python developer
-   Laravel developer
-   n8n automation
-   API integration
-   SaaS development
-   business automation
-   PostgreSQL
-   OpenAI
-   automation engineer

Do not keyword-stuff.

------------------------------------------------------------------------

# 46. IMPLEMENTATION PHASES

Do not attempt to implement every animation at once.

## Phase 1 --- Foundation

-   redesign typography
-   redesign navigation
-   redesign hero
-   redesign CTA
-   establish design tokens
-   establish card system
-   establish responsive system

## Phase 2 --- Content hierarchy

-   rewrite homepage copy
-   reorganize services
-   reorganize featured projects
-   create business-first case-study structure
-   create integrations section
-   create QA differentiator

## Phase 3 --- Signature interactions

Build:

1.  Idea → Production hero animation
2.  ReadMindMe RAG visualization
3.  Atlas geospatial visualization
4.  n8n architecture visualization

## Phase 4 --- n8n case study

Build:

-   automation architecture
-   Document Factory interactive workflow
-   engineering-pattern cards
-   workflow categories
-   integrations

## Phase 5 --- Polish

-   micro-interactions
-   hover states
-   page transitions
-   scroll transitions
-   reduced-motion support
-   accessibility
-   mobile optimization

## Phase 6 --- Performance

-   bundle review
-   image optimization
-   lazy loading
-   animation performance
-   Lighthouse testing
-   mobile testing

------------------------------------------------------------------------

# 47. ACCEPTANCE CRITERIA

The rebuild is successful when:

### First 10 seconds

A visitor understands:

> Miko is a full-stack developer specializing in AI, SaaS, and
> automation.

### First 30 seconds

A visitor has seen:

-   what Miko builds
-   at least one strong project
-   a clear CTA

### Project experience

A visitor can understand:

-   the problem
-   the solution
-   how the system works

without reading a wall of technical text.

### Technical experience

A developer can inspect:

-   architecture
-   technologies
-   integrations
-   engineering decisions

### n8n experience

A visitor understands:

> n8n is being used as an automation/orchestration backbone, not merely
> for simple workflows.

### Visual experience

Animations feel:

-   intentional
-   smooth
-   premium
-   technically relevant

not gimmicky.

### Performance

The site remains fast on mobile.

### Accessibility

Reduced-motion users can still understand the entire site.

### Conversion

Every major section has a logical next action.

------------------------------------------------------------------------

# 48. FINAL DESIGN PRINCIPLE

The portfolio should feel like the visitor is **exploring the systems
Miko builds**.

Do not just show:

> Screenshot → Description → Technology list

Instead show:

``` text
SYSTEM
  ↓
INTERACTION
  ↓
EXPLANATION
  ↓
TECHNICAL PROOF
```

The portfolio itself should demonstrate the same engineering philosophy
it claims to have:

**Understand → Design → Build → Integrate → Test → Ship.**

------------------------------------------------------------------------

# 49. FINAL CREATIVE DIRECTION

The strongest version of this portfolio is not a portfolio with
animations added to it.

It is an **interactive engineering story**.

The user should feel like they are moving through a software system:

``` text
HOME
 ↓
WHAT I BUILD
 ↓
SYSTEM ARCHITECTURE
 ↓
AI / RAG
 ↓
GEOSPATIAL
 ↓
AUTOMATION
 ↓
INTEGRATIONS
 ↓
ENGINEERING / QA
 ↓
PROJECTS
 ↓
START A PROJECT
```

The animation should make the invisible work visible.

For example:

-   RAG becomes visible as vectors moving through retrieval.
-   Geospatial engineering becomes visible as data moving through
    spatial layers.
-   n8n becomes visible as events moving through automation.
-   QA becomes visible as systems passing validation.
-   Integrations become visible as systems connecting together.

That is the central idea of the rebuild:

> **Don't just tell clients that Miko can build complex systems. Let
> them visually experience how those systems work.**

------------------------------------------------------------------------

# 50. IMPORTANT IMPLEMENTATION RULE FOR CLAUDE CODE

Before changing code:

1.  Inspect the existing repository.
2.  Identify the current framework and routing structure.
3.  Identify reusable components.
4.  Identify existing typography, Tailwind configuration, design tokens,
    and animation dependencies.
5.  Identify existing project data and case-study content.
6.  Preserve useful content and functionality.
7.  Do not blindly replace the application.
8.  Build the redesign incrementally.
9.  Run the application after major changes.
10. Test desktop and mobile.
11. Check for console errors.
12. Check accessibility.
13. Check reduced-motion behavior.
14. Check performance.
15. Do not claim completion until the implemented UI matches the
    intended interaction flow.

When uncertain about a factual project detail, inspect the existing
portfolio content or source material rather than inventing an answer.

------------------------------------------------------------------------

# FINAL NORTH STAR

The finished website should make a client think:

> **"I can give this person a complicated business problem and he can
> figure out the frontend, backend, APIs, AI, automation, integrations,
> database, testing, and deployment."**

That is the product being sold.

The portfolio is the demonstration.
