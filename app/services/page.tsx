import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata, getBreadcrumbJsonLd, getCollectionJsonLd } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"

export const metadata = buildMetadata({
  title: "Full-Stack, AI & Business Automation Services | Miko Cañares",
  absoluteTitle: true,
  description:
    "Custom full-stack development, AI/RAG applications, SaaS development, API integrations, and business automation for teams that need reliable software.",
  path: "/services",
  keywords: [
    "full-stack development services",
    "AI development services",
    "SaaS development",
    "business automation services",
    "API integration services",
  ],
})

const services = [
  {
    name: "Full-Stack SaaS Development",
    href: "/services/full-stack-development",
    anchor: "Explore full-stack development",
    line: "Complete web applications — frontend, backend, database, auth, payments, and deployment — built as one system.",
    meta: "NEXT.JS · REACT · LARAVEL · PYTHON · POSTGRESQL",
  },
  {
    name: "AI & RAG Development",
    href: "/services/ai-rag-development",
    anchor: "Explore AI & RAG development",
    line: "AI applications grounded in your knowledge — retrieval pipelines, vector search, and structured outputs.",
    meta: "OPENAI · EMBEDDINGS · PGVECTOR · RAG",
  },
  {
    name: "Business Automation & Integrations",
    href: "/services/business-automation",
    anchor: "Explore business automation",
    line: "CRM, documents, AI, and communication tools connected into one reliable n8n automation layer.",
    meta: "N8N · WEBHOOKS · SUPABASE · REST APIS",
  },
  {
    name: "API & Systems Integration",
    href: "/services/api-integrations",
    anchor: "Explore API integrations",
    line: "The systems your business already depends on — CRMs, payments, documents — kept in sync automatically.",
    meta: "STRIPE · PIPEDRIVE · PANDADOC · BREVO",
  },
  {
    name: "Internal Business Systems",
    href: "/case-studies/eris",
    anchor: "See how ERIS handles resource operations",
    line: "Operations tools, dashboards, and internal platforms with accountability and role-based access built in.",
    meta: "LARAVEL · VUE · MYSQL · RBAC",
  },
]

const jsonLd = [
  getCollectionJsonLd({
    name: "Services",
    description: "Full-stack development, AI/RAG applications, business automation, and API integration services.",
    path: "/services",
    items: services.map((s) => ({ name: s.name, path: s.href })),
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">SERVICES</p>
          <h1 className="text-h1 mt-6 max-w-3xl text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">
            Software development focused on business outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Custom full-stack development, AI/RAG applications, SaaS development, API integrations, and business
            automation for teams that need reliable software.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="panel group flex h-full flex-col gap-4 p-7 transition-colors duration-300 hover:border-primary/40"
              >
                <h2 className="text-lg font-medium text-foreground">{service.name}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.line}</p>
                <p className="text-node text-muted-foreground/70">{service.meta}</p>
                <p className="mt-auto text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {service.anchor} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeader
            label="HOW IT CONNECTS"
            title="Services proven by shipped systems."
            lede="Every service links to real case studies — the work is the evidence, not the pitch."
          />
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/case-studies/readmindme" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Explore the ReadMindMe RAG platform →
            </Link>
            <Link href="/case-studies/atlas-nhd" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Read the Atlas NHD geospatial case study →
            </Link>
            <Link href="/case-studies/ace" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Explore the ACE clinical placement platform →
            </Link>
            <Link href="/case-studies/eris" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              See how ERIS handles resource operations →
            </Link>
            <Link href="/automation" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Explore the 42-workflow automation platform →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">Not sure which one you need?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Describe the problem — I'll map it to the right system, not the trendiest one.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
