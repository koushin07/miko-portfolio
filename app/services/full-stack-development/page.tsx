import { buildMetadata } from "@/lib/seo"
import { ServicePage } from "@/components/services/service-page"

export const metadata = buildMetadata({
  title: "Full-Stack Web Development | Next.js, React, Laravel & Python",
  absoluteTitle: true,
  description:
    "Build and improve production web applications with Next.js, React, Laravel, Python, APIs, PostgreSQL, authentication, integrations, and modern deployment workflows.",
  path: "/services/full-stack-development",
  keywords: [
    "full-stack web development",
    "custom web application development",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "Python developer",
    "API development",
  ],
})

export default function FullStackServicePage() {
  return (
    <ServicePage
      slug="full-stack-development"
      serviceName="Full-Stack Web Development"
      eyebrow="SERVICES / FULL-STACK DEVELOPMENT"
      h1="Full-stack development for production business systems."
      lede="Build and improve production web applications with Next.js, React, Laravel, Python, APIs, PostgreSQL, authentication, integrations, and modern deployment workflows."
      covers={[
        "Complete web applications — frontend, backend, database, and deployment owned end to end.",
        "API-first design, so the web app, CRM, and integrations always agree on the data.",
        "Authentication, permissions, and role-based access enforced at the API boundary.",
        "PostgreSQL and MySQL data modeling built for the workflow, not the framework.",
        "Payments, documents, and CRM integrations wired in with retries and audit logs.",
        "QA on every release — behavior, access, and failure paths validated before shipping.",
      ]}
      flowLabel="ONE REQUEST, ONE OWNER"
      flow={[
        { id: "request", label: "REQUEST" },
        { id: "frontend", label: "FRONTEND", sublabel: "Next.js · React" },
        { id: "api", label: "API", sublabel: "Laravel · FastAPI" },
        { id: "database", label: "DATABASE", sublabel: "PostgreSQL · MySQL" },
        { id: "response", label: "RESPONSE" },
      ]}
      proof={[
        {
          label: "Explore the ACE clinical placement platform",
          href: "/case-studies/ace",
          blurb: "A CRM-synced booking platform — Next.js frontend, Laravel API, and milestone-triggered documents.",
        },
        {
          label: "Read the Atlas NHD geospatial case study",
          href: "/case-studies/atlas-nhd",
          blurb: "A geospatial SaaS platform — FastAPI determinations, a Next.js customer portal, and legally-formatted reports.",
        },
        {
          label: "See how ERIS handles resource operations",
          href: "/case-studies/eris",
          blurb: "An internal operations system — Laravel services, Vue dashboards, and audit-ready accountability.",
        },
      ]}
      tech="NEXT.JS · REACT · LARAVEL · PYTHON · FASTAPI · POSTGRESQL"
      ctaHeading="Have a system that needs building end to end?"
      ctaLine="One owner from architecture to deployment — tell me what you're building."
    />
  )
}
