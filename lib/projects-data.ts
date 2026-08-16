import type { FlowNode } from "@/components/system/flow-stage"

/*
  Projects explorer data — Projects spec §37: real project information only.
  Status appears only where the source documents it. Problems and outcomes
  are condensed from the existing portfolio records, never invented.
*/

export type ExplorerCategory = "AI" | "FULL-STACK" | "AUTOMATION" | "GEOSPATIAL" | "E-COMMERCE" | "INTERNAL SYSTEMS"

export interface ExplorerProject {
  id: string
  name: string
  categoryLabel: string
  filter: ExplorerCategory
  type: string
  status?: "PRODUCTION" | "PRIVATE / NDA"
  featured?: boolean
  oneLiner: string
  problem: string
  stack: string
  outcome: string
  visual: "rag" | "atlas" | "sdi" | "automation" | "flow"
  flow?: FlowNode[]
  href?: { label: string; url: string }
}

export const explorerProjects: ExplorerProject[] = [
  {
    id: "readmindme",
    name: "READMINDME",
    categoryLabel: "AI PLATFORM",
    filter: "AI",
    type: "AI / RAG",
    featured: true,
    oneLiner: "Knowledge-grounded AI platform.",
    problem:
      "Generic AI assistants hallucinate because they don't know the application's knowledge base. For a study tool, a made-up verse breaks the product's promise.",
    stack: "FastAPI · PostgreSQL · pgvector · OpenAI",
    outcome: "A production-shaped RAG platform — retrieval, personalization, moderation, and operations — built solo.",
    visual: "rag",
    href: { label: "View case study →", url: "/case-studies/readmindme" },
  },
  {
    id: "atlas-nhd",
    name: "ATLAS NHD",
    categoryLabel: "GEOSPATIAL PLATFORM",
    filter: "GEOSPATIAL",
    type: "GEOSPATIAL / SAAS",
    status: "PRODUCTION",
    featured: true,
    oneLiner: "Statutory hazard disclosure, automated end to end.",
    problem:
      "Every residential sale in California legally requires a hazard disclosure checked against dozens of state and federal datasets. A wrong report is legal liability.",
    stack: "FastAPI · PostGIS · GeoServer · Next.js",
    outcome: "The full range of statutory disclosure products in production.",
    visual: "atlas",
    href: { label: "View case study →", url: "/case-studies/atlas-nhd" },
  },
  {
    id: "atlas-sdi",
    name: "ATLAS SDI REPORT ENGINE",
    categoryLabel: "REPORT ENGINE",
    filter: "GEOSPATIAL",
    type: "GEOSPATIAL / DOCUMENTS",
    status: "PRODUCTION",
    featured: true,
    oneLiner: "Complex spatial data in. Structured legal reports out.",
    problem:
      "Producing a disclosure means resolving an address to a parcel, querying every hazard layer, and rendering a statutorily formatted PDF — with zero wrong determinations.",
    stack: "Python · FastAPI · PostGIS · Celery · WeasyPrint",
    outcome: "Report generation moved from request-time rendering to a queued pipeline with warmup caching.",
    visual: "sdi",
    href: { label: "View case study →", url: "/case-studies/atlas-nhd" },
  },
  {
    id: "legaltech",
    name: "AUTOMATION / LEGALTECH",
    categoryLabel: "AUTOMATION PLATFORM",
    filter: "AUTOMATION",
    type: "N8N / ORCHESTRATION",
    status: "PRIVATE / NDA",
    featured: true,
    oneLiner: "42 production workflows on one n8n backbone.",
    problem:
      "A legal-document business runs on court data, intake, documents, e-signatures, and scheduling — each in a different tool. Every manual handoff was a delay or an error.",
    stack: "n8n · Supabase · Gemini · Docker",
    outcome: "Six internal systems and the automation layer connecting them — shown with sensitive details removed.",
    visual: "automation",
    href: { label: "Explore the automation platform →", url: "/automation" },
  },
  {
    id: "ace",
    name: "ACE CLINICAL PLACEMENT",
    categoryLabel: "BOOKING PLATFORM",
    filter: "FULL-STACK",
    type: "FULL-STACK / CRM",
    oneLiner: "CRM-synced clinical placement booking.",
    problem:
      "Placement coordinators managed bookings, student profiles, and document packs across Pipedrive, email threads, and spreadsheets — every update meant manual reconciliation.",
    stack: "Next.js · Laravel · PandaDoc · Pipedrive",
    outcome: "Bookings stay in sync with CRM records; onboarding and documents are templated.",
    visual: "flow",
    flow: [
      { id: "client", label: "CLIENT", detail: "Coordinators and students book through one web platform." },
      { id: "booking", label: "BOOKING", detail: "API-first scheduling keeps web and CRM consistent." },
      { id: "crm", label: "CRM", sublabel: "Pipedrive", detail: "Placement records sync automatically — no re-entry." },
      { id: "documents", label: "DOCUMENTS", sublabel: "PandaDoc", detail: "Document packs generated from milestone events." },
      { id: "notify", label: "NOTIFICATION", detail: "Status reaches coordinators without manual chasing." },
    ],
    href: { label: "View case study →", url: "/case-studies/ace" },
  },
  {
    id: "roadworthy",
    name: "ROADWORTHY INSPECTION",
    categoryLabel: "INSPECTION PIPELINE",
    filter: "FULL-STACK",
    type: "FULL-STACK / PAYMENTS",
    oneLiner: "Booking-to-inspection pipeline in one reliable flow.",
    problem:
      "Payments, job creation, and customer messaging lived in three separate systems. A failure in any one broke the entire flow.",
    stack: "React · Node.js · Stripe · ServiceM8",
    outcome: "Bookings reliably trigger payments, job templates, and lifecycle emails — no sync failures.",
    visual: "flow",
    flow: [
      { id: "booking", label: "BOOKING", detail: "The customer books an inspection online." },
      { id: "payment", label: "PAYMENT", sublabel: "Stripe", detail: "Idempotent payment calls prevent duplicates on retry." },
      { id: "job", label: "INSPECTION JOB", sublabel: "ServiceM8", detail: "Each booking generates the right job template." },
      { id: "comms", label: "NOTIFICATION", sublabel: "Brevo", detail: "Lifecycle emails fire in sync with job events." },
    ],
  },
  {
    id: "eris",
    name: "ERIS",
    categoryLabel: "EMERGENCY OPERATIONS",
    filter: "INTERNAL SYSTEMS",
    type: "INTERNAL / OPERATIONS",
    oneLiner: "Real-time resource management for emergency responders.",
    problem:
      "Regional responders had no central view of what equipment was available, where it was headed, or who moved it — critical gaps during high-pressure incidents.",
    stack: "Laravel · Inertia · Vue · MySQL",
    outcome: "Teams locate and dispatch resources faster, with clear accountability across municipalities.",
    visual: "flow",
    flow: [
      { id: "inventory", label: "INVENTORY", detail: "Readiness and availability in one place." },
      { id: "dispatch", label: "DISPATCH", detail: "Views prioritize availability windows and nearest resources." },
      { id: "audit", label: "AUDIT TRAIL", detail: "Movement history baked into the data model." },
      { id: "report", label: "REPORT", detail: "Endpoints for post-incident reviews and oversight." },
    ],
    href: { label: "View case study →", url: "/case-studies/eris" },
  },
  {
    id: "emport",
    name: "EMPORT",
    categoryLabel: "HR PLATFORM",
    filter: "INTERNAL SYSTEMS",
    type: "INTERNAL / HR",
    oneLiner: "Attendance, payroll, and leave in one linked workflow.",
    problem:
      "Schools managed attendance, payroll, and leave approvals across scattered spreadsheets shared between HR and finance — reconciliation was manual and error-prone.",
    stack: "Laravel · React · MySQL",
    outcome: "Attendance, leave, and payroll stay aligned — no manual reconciliation between HR and finance.",
    visual: "flow",
    flow: [
      { id: "attendance", label: "ATTENDANCE", detail: "Recorded once, feeding everything downstream." },
      { id: "leave", label: "LEAVE", detail: "Approvals modeled as linked workflows, not side channels." },
      { id: "payroll", label: "PAYROLL", detail: "Calculations stay consistent with attendance and leave." },
      { id: "export", label: "AUDIT EXPORT", detail: "Finance reconciles from audit-friendly exports." },
    ],
  },
  {
    id: "boostlab",
    name: "BOOSTLAB",
    categoryLabel: "DIGITAL STOREFRONT",
    filter: "E-COMMERCE",
    type: "E-COMMERCE",
    oneLiner: "Conversion-focused storefront, design-faithful to the pixel.",
    problem:
      "The team needed a storefront where payments, order syncing, and analytics matched the designed experience exactly — no gaps between design and production.",
    stack: "React · Shopify · Checkout.com",
    outcome: "Smooth checkout, clean order sync to Shopify, and accurate funnel attribution.",
    visual: "flow",
    flow: [
      { id: "storefront", label: "STOREFRONT", detail: "React pages tuned to the Figma design system." },
      { id: "shopify", label: "SHOPIFY", detail: "Product catalog and orders — the source of truth." },
      { id: "checkout", label: "CHECKOUT.COM", detail: "Payment flows instrumented with explicit error states." },
      { id: "pixel", label: "META PIXEL", detail: "Key funnel steps tagged for clear attribution." },
    ],
  },
  {
    id: "logiware",
    name: "LOGIWARE",
    categoryLabel: "INVENTORY PLATFORM",
    filter: "INTERNAL SYSTEMS",
    type: "INTERNAL / LOGISTICS",
    oneLiner: "Inventory and shipments, one source of truth.",
    problem:
      "Logistics teams reconciled stock levels and shipment status across multiple trackers — no single source of truth meant slow fulfillment decisions.",
    stack: "ASP.NET · Angular · SQL Server",
    outcome: "Inventory and shipment status in one place — faster fulfillment decisions.",
    visual: "flow",
    flow: [
      { id: "stock", label: "STOCK", detail: "Centralized inventory state — no conflicting records." },
      { id: "shipment", label: "SHIPMENT", detail: "Tracking and product flow monitored end to end." },
      { id: "history", label: "MOVEMENT HISTORY", detail: "Every change recorded for accountability." },
      { id: "dashboard", label: "DASHBOARD", detail: "Actionable views for fulfillment and ops teams." },
    ],
  },
]
