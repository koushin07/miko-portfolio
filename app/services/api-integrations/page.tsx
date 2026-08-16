import { buildMetadata } from "@/lib/seo"
import { ServicePage } from "@/components/services/service-page"

export const metadata = buildMetadata({
  title: "API Integration & Systems Integration | Miko Cañares",
  absoluteTitle: true,
  description:
    "Integrate CRMs, payment systems, documents, communication tools, APIs, databases, and internal applications into reliable business workflows.",
  path: "/services/api-integrations",
  keywords: [
    "API integration",
    "systems integration",
    "third-party API integration",
    "CRM integration",
    "SaaS integrations",
    "Stripe integration",
    "Pipedrive integration",
  ],
})

export default function ApiIntegrationsServicePage() {
  return (
    <ServicePage
      slug="api-integrations"
      serviceName="API Integration & Systems Integration"
      eyebrow="SERVICES / API & SYSTEMS INTEGRATION"
      h1="Connect the systems your business already depends on."
      lede="Integrate CRMs, payment systems, documents, communication tools, APIs, databases, and internal applications into reliable business workflows."
      covers={[
        "CRMs — Pipedrive and SmartSuite kept in sync with your application, not maintained by hand.",
        "Payments — Stripe and Checkout.com flows with idempotent calls and explicit failure states.",
        "Documents — PandaDoc, DocuSeal, Documenso, and Gotenberg generation and signing workflows.",
        "Communication — Brevo, Gmail, and Pushover wired to real lifecycle events.",
        "Centralized error handling, retries, and audit logs around every third-party call.",
      ]}
      flowLabel="THIRD PARTIES, UNDER CONTROL"
      flow={[
        { id: "event", label: "EVENT" },
        { id: "api", label: "API LAYER" },
        { id: "transform", label: "TRANSFORM" },
        { id: "store", label: "STORE" },
        { id: "notify", label: "NOTIFY" },
        { id: "monitor", label: "MONITOR" },
      ]}
      proof={[
        {
          label: "Explore the ACE clinical placement platform",
          href: "/case-studies/ace",
          blurb: "Pipedrive, PandaDoc, Mapbox, and Clerk connected behind one Laravel API — bookings that carry their own paperwork.",
        },
        {
          label: "See the Roadworthy inspection pipeline",
          href: "/projects",
          blurb: "Stripe payments, ServiceM8 job creation, and Brevo lifecycle emails in one reliable booking flow.",
        },
        {
          label: "Explore the 42-workflow automation platform",
          href: "/automation",
          blurb: "Twenty services orchestrated by one n8n backbone — from court-data APIs to e-signature events.",
        },
      ]}
      tech="STRIPE · CHECKOUT.COM · PIPEDRIVE · SMARTSUITE · PANDADOC · BREVO · SHOPIFY · REST APIS"
      ctaHeading="Still moving data between tools by hand?"
      ctaLine="I connect the systems you already use into one workflow your team can trust."
    />
  )
}
