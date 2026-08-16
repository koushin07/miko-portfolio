/*
  Work page content — real project data only (spec §37: no invented clients,
  metrics, timelines, or technologies). Copy preserved from the previous
  projects page; structure reorganized for the showcase UI.
*/

export interface TechStack {
  frontend: string
  backend: string
  infra: string
  apis: string
}

export interface FeaturedBreakdown {
  id: string
  title: string
  context: string
  role: string
  techStack: TechStack
  keyDecisions: string[]
  outcome: string
  caseStudyHref?: string
}

export const featuredBreakdowns: FeaturedBreakdown[] = [
  {
    id: "atlas-sdi",
    title: "Atlas SDI Report Engine",
    context:
      "Every residential property sale in California legally requires a Natural Hazard Disclosure. Producing one means checking a parcel against dozens of state and federal hazard datasets — flood, fire severity, seismic, landslide, liquefaction, dam inundation, airport noise — and emitting a document in a statutorily prescribed format. A slow report is an inconvenience; a wrong one is legal liability.",
    role: "Primary developer on the determination and reporting pipeline",
    techStack: {
      frontend: "Server-rendered PDF templates; report map and details pages consumed by the customer portal",
      backend: "FastAPI async Python over PostGIS/GeoAlchemy2, SQLAlchemy 2.0, Celery queue for async report orders",
      infra:
        "Terraform-defined AWS — ECS Fargate, RDS, ALB, Secrets Manager, ECR — plus Prefect flows promoting datasets from on-prem NAS to AWS",
      apis: "GeoServer WMS/WFS, FEMA NFHL with local-copy failover, FAA ADHP, CAL FIRE FHSZ, USGS 3DEP, libpostal via gRPC",
    },
    keyDecisions: [
      "Bounded an unbounded warmup fan-out with a per-worker semaphore, then removed the redundant work underneath: shared httpx client, LRU basemap cache with async-lock dedup, and rendering on a ProcessPoolExecutor. Fixed worker crashes that had PIDs accumulating to 80.",
      "Zero-downtime dataset promotion via atomic table swap that carries dependent sequences and applies additive schema changes only behind an explicit flag — never silently.",
      "Failover to a locally held NFHL copy when FEMA is unreachable, so an upstream government outage degrades freshness rather than halting report generation.",
      "Seventeen design specs and ten implementation plans written before the code, with report templates pinned by markup-contract tests — including an explicit HTML escaping contract for the cover page.",
    ],
    outcome:
      "The full range of statutory disclosure products in production. Report generation moved from synchronous request-time rendering to a queued pipeline with warmup caching.",
    caseStudyHref: "/case-studies/atlas-nhd",
  },
  {
    id: "atlas-portal",
    title: "Atlas NHD Customer Portal",
    context:
      "Escrow officers and agents ordering a hazard disclosure need to find one specific parcel — often from a partial address, sometimes with several APNs matching — then pick the right report type, and receive a PDF they can attach to a transaction. Getting the wrong parcel means the wrong disclosure on a legally binding sale.",
    role: "Sole developer — architecture, build, and QA",
    techStack: {
      frontend:
        "Next.js App Router with route groups, an AuthGuard app shell, Zustand stores, and a Tailwind component system built to Figma frames",
      backend: "Typed API client over the portal-admin JSON API and the Atlas SDI report endpoints",
      infra:
        "Multi-stage Docker with Next.js standalone output, non-root user, and a health endpoint; env-driven proxying to the SDI",
      apis: "JWT auth with refresh, per-user report access limits, auto-generated escrow numbering, email delivery",
    },
    keyDecisions: [
      "Address search resolves through a single backend endpoint with typeahead and structured fallback, after removing a third-party address vendor — the backend handles fuzzy matching natively.",
      "Entitlement gating enforced at the order boundary rather than the UI, so per-user report limits cannot be bypassed by navigating directly.",
      "Report type labels come from a backend catalog rather than a hardcoded frontend map, so adding a report type does not require a frontend release.",
      "Routing restructured into route groups with a shared AuthGuard shell, separating the public marketing site from the authenticated portal.",
    ],
    outcome: "Full order-to-delivery flow in production, and a marketing site rebuilt to Figma with the portal ported onto it.",
    caseStudyHref: "/case-studies/atlas-nhd",
  },
  {
    id: "readmindme",
    title: "ReadMindMe Bible Study Platform",
    context:
      "Personal project to push production-grade RAG end-to-end. A Bible study app where users ask theological questions and receive scripture-grounded answers from a 14-stage pipeline that retrieves verses via pgvector similarity across 36,819 embeddings, enriches with Greek/Hebrew morphology, cross-references, and historical context, then personalizes responses using per-user memory and active prayer requests.",
    role: "Solo build — architecture, AI pipeline, backend, data modeling, DevOps, security",
    techStack: {
      frontend: "Mobile/web client and admin dashboard as separate repos within the monorepo",
      backend: "FastAPI async Python, SQLAlchemy 2.0, Alembic (33 migrations), Pydantic v2",
      infra: "Docker Compose orchestrating 12 services with seed runners, profiles, and reset paths",
      apis: "OpenAI GPT-4o / GPT-4o-mini / embeddings / moderation, Google OAuth, JWT + refresh-token rotation, pgvector, Redis, APScheduler, SlowAPI",
    },
    keyDecisions: [
      "Two pgvector spaces — Bible verses for RAG retrieval and per-user memories for personalization — with hybrid fallbacks (vector → keyword → Nave's Topical → community-voted topic-to-verse) so retrieval never fails silently.",
      "Tiered model selection (GPT-4o for answers, GPT-4o-mini for background memory extraction and rolling session summaries) plus parallel context retrieval across 10+ enrichment datasets in isolated DB sessions for throughput.",
      "Two-schema Postgres design separating static bible (24 read-only tables, 603K cross-references) from versioned app data, with refresh-token family revocation, admin TOTP via Fernet-encrypted secrets, content moderation, audit log, feature flags, and an AI kill switch.",
    ],
    outcome:
      "Production-shaped backend (~3,400 LOC AI service, 20 routers, 25 services, 33 migrations, ~40 tables) demonstrating applied RAG, domain modeling depth, and operational maturity.",
    caseStudyHref: "/case-studies/readmindme",
  },
]

export type ProjectCategory = "FULL-STACK" | "GEOSPATIAL" | "E-COMMERCE" | "OPERATIONS" | "AUTOMATION"

export interface SecondaryProject {
  id: string
  category: ProjectCategory
  status?: "PRIVATE / NDA" | "CASE STUDY"
  title: string
  line: string
  stack: string
  miniFlow: string[]
  href?: { label: string; url: string }
  detail?: {
    context: string
    role: string
    decisions: string[]
    outcome: string
  }
}

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "atlas-portal",
    category: "GEOSPATIAL",
    status: "CASE STUDY",
    title: "Atlas NHD Customer Portal",
    line: "Order-to-delivery portal for hazard disclosure reports — address search with APN disambiguation, entitlement gating, checkout, PDF delivery.",
    stack: "Next.js · TypeScript · Zustand · JWT",
    miniFlow: ["ADDRESS", "APN", "ORDER", "PDF"],
    href: { label: "Read the case study →", url: "/case-studies/atlas-nhd" },
  },
  {
    id: "ace",
    category: "FULL-STACK",
    title: "ACE Clinical Placement Platform",
    line: "CRM-synced booking platform with location search, automated onboarding, and document packs triggered on placement milestones.",
    stack: "Next.js · Laravel · PandaDoc · Pipedrive",
    miniFlow: ["CRM", "BOOKING", "DOCUMENT", "NOTIFY"],
    detail: {
      context:
        "Placement coordinators managed bookings, student profiles, and document packs across Pipedrive, email threads, and spreadsheets. Any status update required manual reconciliation across all three.",
      role: "Architecture, full-stack build, integrations, deployment, QA",
      decisions: [
        "API-first booking flow so scheduling, profiles, and documents stay consistent across web and CRM.",
        "Document generation via PandaDoc templates triggered from milestone events.",
        "Centralized error handling around third-party calls with retries and audit logs.",
      ],
      outcome:
        "Onboarding is templated, bookings stay in sync with CRM records, and coordinators see placement status without manual reconciliation.",
    },
  },
  {
    id: "roadworthy",
    category: "FULL-STACK",
    title: "Roadworthy Inspection Platform",
    line: "Booking-to-inspection pipeline integrating payments, job creation, and lifecycle comms in one reliable flow.",
    stack: "React · Node.js · Stripe · ServiceM8",
    miniFlow: ["BOOKING", "STRIPE", "SERVICEM8", "BREVO"],
    detail: {
      context:
        "Roadworthy inspections required payments, job creation, and customer messaging to stay in sync across three separate systems. A failure in any one broke the entire flow.",
      role: "Frontend and backend pairing with QA on every release",
      decisions: [
        "Idempotent API calls for payment and job creation to prevent duplicates on retry.",
        "Validation paths for payment success/failure to keep bookings consistent.",
        "Automated QA passes against Figma components to protect UX quality.",
      ],
      outcome:
        "Bookings reliably trigger payments, job templates, and lifecycle emails — cutting manual cleanup and eliminating sync failures.",
    },
  },
  {
    id: "eris",
    category: "OPERATIONS",
    status: "CASE STUDY",
    title: "Emergency Resource Information System",
    line: "Real-time resource management for responders — dispatch dashboards, movement audit trails, and role-based access.",
    stack: "Laravel · Inertia · Vue · MySQL",
    miniFlow: ["INVENTORY", "DISPATCH", "AUDIT", "REPORT"],
    href: { label: "Read the case study →", url: "/case-studies/eris" },
  },
  {
    id: "emport",
    category: "OPERATIONS",
    title: "Emport Employee Management",
    line: "Unified HR platform linking attendance, payroll, and leave workflows with role-based access and audit exports.",
    stack: "Laravel · React · MySQL",
    miniFlow: ["ATTENDANCE", "LEAVE", "PAYROLL", "EXPORT"],
    detail: {
      context:
        "Schools were managing attendance, payroll, and leave approvals across scattered spreadsheets shared between HR and finance — reconciliation was manual and error-prone.",
      role: "Product architecture, full-stack build, QA, deployment",
      decisions: [
        "Modeled attendance, leave, and payroll as linked workflows to keep calculations consistent.",
        "Role-based permissions to separate HR, finance, and admin actions.",
        "Audit-friendly exports so finance could reconcile without rework.",
      ],
      outcome:
        "Attendance, leave, and payroll stay aligned with approvals and exports — removing manual reconciliation between HR and finance.",
    },
  },
  {
    id: "boostlab",
    category: "E-COMMERCE",
    title: "Boostlab Digital Storefront",
    line: "Conversion-focused storefront with Shopify backend, Checkout.com payments, and Meta Pixel on key funnel steps.",
    stack: "React · Shopify · Checkout.com",
    miniFlow: ["STOREFRONT", "SHOPIFY", "CHECKOUT", "PIXEL"],
    detail: {
      context:
        "The team needed a conversion-focused storefront where payments, order syncing, and analytics matched the designed experience exactly — no gaps between design and production.",
      role: "Frontend build, integrations, QA, deployment",
      decisions: [
        "Aligned UI components to Figma tokens to preserve fidelity across breakpoints.",
        "Payment and order flows instrumented with error states to prevent silent failures.",
        "Analytics tagged on key funnel steps for clear attribution.",
      ],
      outcome:
        "Customers get a smooth checkout, orders sync cleanly to Shopify, and attribution is accurate — reducing cart drop-offs and support load.",
    },
  },
  {
    id: "logiware",
    category: "OPERATIONS",
    title: "LogiWare Inventory Platform",
    line: "Centralized inventory and shipment management with movement history, fulfillment dashboards, and staged rollouts.",
    stack: "ASP.NET · Angular · SQL Server",
    miniFlow: ["STOCK", "SHIPMENT", "HISTORY", "DASHBOARD"],
    detail: {
      context:
        "Logistics teams were reconciling stock levels and shipment status across multiple trackers — no single source of truth meant slow fulfillment decisions.",
      role: "Frontend and backend delivery with QA and deployment",
      decisions: [
        "Centralized inventory state with movement history to avoid conflicting records.",
        "Dashboard views tuned for fulfillment and ops teams with actionable filters.",
        "Deployment pipeline with staged rollouts to protect uptime.",
      ],
      outcome:
        "Teams see inventory and shipment status in one place — reducing manual reconciliation and enabling faster fulfillment decisions.",
    },
  },
  {
    id: "legaltech-nda",
    category: "AUTOMATION",
    status: "PRIVATE / NDA",
    title: "Private SaaS Platform — LegalTech",
    line: "Six internal production systems for a legal-document platform — document generation, fingerprinting, lead classification, scheduling, and a Wear OS rule engine.",
    stack: "React · Node.js/Express · Supabase · n8n",
    miniFlow: ["INTAKE", "N8N", "DOCUMENT", "DELIVERY"],
    href: { label: "See the six systems →", url: "#private-legaltech" },
  },
]

export interface NdaSystem {
  num: string
  title: string
  body: string
  stack: string[]
  outcome: string
}

export const ndaSystems: NdaSystem[] = [
  {
    num: "01",
    title: "Dynamic Document Generation Pipeline",
    body: "Legal forms are complex — static templates break the moment data changes. Built a form-driven pipeline where users complete a SurveyJS questionnaire embedded in the storefront, with answers auto-saving as they go. On submission the data triggers an n8n workflow that merges it into a Word template, converts to PDF, and delivers it by email. Paired with an internal admin app — built on the SurveyJS form builder — where staff manage forms, templates, and bundles without a developer, with all writes routed through a resource-style API rather than direct database access.",
    stack: ["React", "Vite", "SurveyJS", "Supabase", "n8n"],
    outcome: "Zero manual document handling, and non-developers can ship new form types.",
  },
  {
    num: "02",
    title: "Anti-Piracy Document Fingerprinting",
    body: "Self-help legal documents are trivially resold once they leave your system. Built a two-part fingerprinting subsystem: a Node/Express/TypeScript microservice that stamps formatted footers into .docx files over a REST API (bold, italic, color, font, alignment), and a companion service that injects per-purchase identity — user ID, email, timestamp — into the generated PDF's metadata via pdf-lib. Both are called from the document pipeline, so every delivered file is uniquely traceable to the buyer.",
    stack: ["Node.js", "Express", "TypeScript", "pdf-lib", "Docker"],
    outcome: "Every delivered document carries an invisible, per-buyer fingerprint.",
  },
  {
    num: "03",
    title: "Court-Record Lead Classification Engine",
    body: "Daily public court-record exports arrive as zipped, caret-delimited flat files with separate lookup tables for party types, case types, and judges. Built a Node/Express/TypeScript backend that parses the feed, filters to active family-law matters filed within 180 days, detects trigger events in the docket — service returned, motion to withdraw — and classifies each unrepresented party into one of four lead profiles with priority tiers: newly filed, recently served, dropped by counsel, or simply unrepresented. Leads are enriched with human-readable labels and batch-upserted behind a CRUD API.",
    stack: ["Node.js", "Express", "TypeScript", "Supabase", "n8n"],
    outcome: "A raw daily court feed becomes a prioritized, deduplicated lead queue with no manual triage.",
  },
  {
    num: "04",
    title: "Multi-Party Dispute Scheduling System",
    body: "Dispute negotiations require all three parties — creator, receiver, and mediator — to agree on a meeting time. Built a scheduling system where a creator proposes a date, the receiver accepts or declines, and on agreement all three parties are notified automatically. Designed for legal dispute workflows where neutral coordination matters.",
    stack: ["React", "Node.js", "Supabase", "Google Calendar"],
    outcome: "Three-party consent model with automated notifications on agreement.",
  },
  {
    num: "05",
    title: "Containerized Scheduling Service",
    body: "The scheduling workload outgrew a single process once reminders, confirmations, and calendar sync all needed to survive restarts. Split it into an Express API and a separate BullMQ worker over Redis, with Postgres for state and migrations applied automatically on container start. The whole stack — API, worker, database, cache, Traefik reverse proxy — ships as a documented compose deployment with a written production runbook.",
    stack: ["Node.js", "Express", "BullMQ", "Redis", "Postgres", "Traefik"],
    outcome: "Background jobs survive restarts; the full stack deploys from one documented runbook.",
  },
  {
    num: "06",
    title: "Mediator Rule Engine with Wear OS Integration",
    body: "Mediators need to trigger timed actions during sessions — reminders, check-ins, delays — without interrupting the flow. Built a rule engine with three rule types: instant (fires immediately), delay (fires after a set timer), and cron (fires on a set schedule). Rules are configured in a frontend dashboard, mapped to named buttons, and surfaced on a Wear OS watch so the mediator can fire any rule with a single button press. Also includes a voice command system for natural-language scheduling.",
    stack: ["React", "Node.js", "Wear OS", "Android"],
    outcome: "Frontend rule configuration → one-tap execution from a watch during live sessions.",
  },
]
