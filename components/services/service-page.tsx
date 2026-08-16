import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { SystemMap, type SystemMapNode } from "@/components/system/system-map"
import { getServiceJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"

/*
  Shared scaffold for the four service pages — SEO plan. Each page keeps
  the site's system language: what the service covers, the system flow it
  produces, and real case studies as proof (descriptive anchors).
*/

export interface ServicePageProps {
  slug: string
  serviceName: string
  eyebrow: string
  h1: string
  lede: string
  covers: string[]
  flowLabel: string
  flow: SystemMapNode[]
  proof: { label: string; href: string; blurb: string }[]
  tech: string
  ctaHeading: string
  ctaLine: string
}

export function ServicePage(props: ServicePageProps) {
  const jsonLd = [
    getServiceJsonLd({ name: props.serviceName, description: props.lede, path: `/services/${props.slug}` }),
    getBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: props.serviceName, path: `/services/${props.slug}` },
    ]),
  ]

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      {/* Hero */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">{props.eyebrow}</p>
          <h1 className="text-h1 mt-6 max-w-3xl text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">{props.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{props.lede}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>

      {/* What this covers + the system */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeader label="WHAT THIS COVERS" title="Built as one system." />
              <ul className="space-y-3">
                {props.covers.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-node border-t border-border/60 pt-5 text-muted-foreground/70">{props.tech}</p>
            </div>
            <div>
              <p className="text-node mb-6 text-center text-muted-foreground/70 lg:text-left">{props.flowLabel}</p>
              <SystemMap direction="vertical" className="justify-self-center" chipClassName="px-4 py-2" nodes={props.flow} />
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeader label="PROOF" title="Built, shipped, and documented." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {props.proof.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="panel group flex h-full flex-col gap-3 p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                <p className="mt-auto text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  {item.label} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">{props.ctaHeading}</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">{props.ctaLine}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
