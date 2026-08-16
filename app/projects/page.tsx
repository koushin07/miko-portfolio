import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { buildMetadata, getCollectionJsonLd, getBreadcrumbJsonLd } from "@/lib/seo"
import { ProjectsExplorer } from "@/components/projects/explorer"
import { WorkPatterns } from "@/components/projects/work-patterns"
import { ndaSystems } from "@/lib/work-data"
import { explorerProjects } from "@/lib/projects-data"

export const metadata = buildMetadata({
  title: "Projects — Engineering Archive",
  description:
    "The deep project explorer: pick a system and inspect its problem, architecture, stack, and outcome — AI/RAG, geospatial, automation, e-commerce, and internal platforms.",
  path: "/projects",
  keywords: ["Projects", "Engineering portfolio", "Project explorer", "AI developer", "Full-stack developer", "Automation"],
})

const jsonLd = [
  getCollectionJsonLd({
    name: "Projects — Engineering Archive",
    description: "The deep project explorer: AI/RAG, geospatial, automation, e-commerce, and internal platforms.",
    path: "/projects",
    items: explorerProjects.map((p) => ({ name: p.name, path: p.href?.url ?? "/projects" })),
  }),
  getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]),
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />

      {/* Compact intro — Projects spec §05 */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-14 lg:px-8 lg:pt-36 lg:pb-16">
          <p className="text-node text-muted-foreground">PROJECTS / ENGINEERING WORK</p>
          <h1 className="text-h2 mt-5 max-w-3xl text-balance text-foreground lg:text-[2.9rem] lg:leading-[1.1]">
            Systems I've designed, built, integrated, tested, and shipped.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explore the products, platforms, AI systems, automation workflows, and internal tools behind the work —
            pick a system and inspect how it works.
          </p>
        </div>
      </section>

      {/* The explorer — Projects spec §07-§18 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-14 lg:px-8 lg:py-20">
          <ProjectsExplorer />
        </div>
      </section>

      {/* NDA six systems — Projects spec §26 */}
      <section id="private-legaltech" className="noise-bg relative scroll-mt-16 overflow-hidden border-t border-border/60">
        <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl space-y-4">
            <p className="text-node text-amber">PRIVATE / NDA</p>
            <h2 className="text-h2 text-foreground">LegalTech Platform — six internal systems.</h2>
            <p className="text-sm text-muted-foreground">Full-Stack Developer · 6 Internal Systems · Active Production</p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Architecture and engineering patterns shown with sensitive details removed — no company name, links, or
              screenshots.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ndaSystems.map((system) => (
              <div key={system.num} className="panel flex h-full flex-col gap-4 p-7">
                <p className="text-node text-muted-foreground/60">{system.num}</p>
                <h3 className="text-lg font-medium text-foreground">{system.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{system.body}</p>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {system.stack.map((tech) => (
                      <span key={tech} className="rounded border bg-card px-2 py-0.5 font-mono text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 border-t border-border/60 pt-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-amber" />
                    <p className="text-sm text-foreground/85">{system.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns behind the work — Projects spec §29 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <WorkPatterns />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">Want a system like these?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what you're trying to build, automate, fix, or improve — I'll map the system it needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Start a Project →
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Back to Selected Systems
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
