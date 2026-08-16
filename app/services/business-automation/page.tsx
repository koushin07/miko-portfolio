import { buildMetadata } from "@/lib/seo"
import { ServicePage } from "@/components/services/service-page"

export const metadata = buildMetadata({
  title: "Business Automation & n8n Workflow Development | Miko Cañares",
  absoluteTitle: true,
  description:
    "Connect CRM, forms, AI, documents, APIs, databases, communication tools, and internal systems with reliable business automation using n8n and modern APIs.",
  path: "/services/business-automation",
  keywords: [
    "business automation",
    "workflow automation",
    "n8n automation",
    "n8n developer",
    "CRM automation",
    "API automation",
    "business process automation",
  ],
})

export default function BusinessAutomationServicePage() {
  return (
    <ServicePage
      slug="business-automation"
      serviceName="Business Automation & n8n Workflow Development"
      eyebrow="SERVICES / BUSINESS AUTOMATION"
      h1="I build automation systems, not just workflows."
      lede="Connect CRM, forms, AI, documents, APIs, databases, communication tools, and internal systems with reliable business automation using n8n and modern APIs."
      covers={[
        "Self-hosted n8n orchestration — your automation backbone, not a rented black box.",
        "CRM, documents, e-signature, scheduling, and communication tools connected into one layer.",
        "Idempotency, retries with backoff, and explicit error paths — automation built like software.",
        "AI-assisted extraction so unstructured input becomes structured data.",
        "Monitoring, execution logs, and operational documentation for the long run.",
      ]}
      flowLabel="EVERY EVENT, ACCOUNTED FOR"
      flow={[
        { id: "trigger", label: "TRIGGER" },
        { id: "validate", label: "VALIDATE" },
        { id: "logic", label: "AI / LOGIC" },
        { id: "integrate", label: "INTEGRATE" },
        { id: "database", label: "DATABASE" },
        { id: "output", label: "OUTPUT" },
        { id: "monitor", label: "MONITOR" },
      ]}
      proof={[
        {
          label: "Explore the 42-workflow automation platform",
          href: "/automation",
          blurb: "A self-hosted n8n platform for a LegalTech firm — document generation, court-data ingestion, e-signature, and scheduling on one backbone.",
        },
        {
          label: "Explore the ACE clinical placement platform",
          href: "/case-studies/ace",
          blurb: "Milestone-triggered document packs and CRM synchronization — automation embedded inside a SaaS product.",
        },
        {
          label: "See how ERIS handles resource operations",
          href: "/case-studies/eris",
          blurb: "Operational workflows with audit trails — accountability designed into the automation.",
        },
      ]}
      tech="N8N · SUPABASE · GEMINI · WEBHOOKS · REST APIS"
      ctaHeading="Have a process worth automating?"
      ctaLine="Tell me what your team does by hand today — I'll map the workflow and the integrations it needs."
    />
  )
}
