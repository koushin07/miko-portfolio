import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/motion/reveal"
import { SystemMap } from "@/components/system/system-map"
import { Lifecycle } from "@/components/about/lifecycle"
import { Philosophy } from "@/components/about/philosophy"
import { ExperienceTimeline } from "@/components/about/experience-timeline"

export const metadata = buildMetadata({
  title: "About — The Engineer Behind the Systems",
  description:
    "Full-stack systems, AI workflows, business automation, and the engineering discipline to make them reliable — the person and approach behind the portfolio.",
  path: "/about",
  keywords: ["Full-stack developer", "QA mindset", "automation engineer", "About Miko Cañares"],
})

const disciplines = [
  {
    num: "01",
    label: "FULL-STACK DEVELOPMENT",
    items: ["Frontend", "Backend", "APIs", "Databases"],
  },
  {
    num: "02",
    label: "AI / AUTOMATION",
    items: ["RAG", "AI integrations", "Structured outputs", "n8n", "Workflow orchestration"],
  },
  {
    num: "03",
    label: "QA / RELIABILITY",
    items: ["Testing", "Validation", "Regression", "Production reliability"],
  },
]

const boundaries = [
  "The frontend works, but the API breaks.",
  "The API works, but the automation fails.",
  "The automation works, but the data is wrong.",
]

const skillGroups = [
  { name: "Frontend", items: "React · Next.js · Angular · Vue" },
  { name: "Backend", items: "Laravel · ASP.NET Core · FastAPI · Express" },
  { name: "Data", items: "PostgreSQL · MySQL · PostGIS · SQL Server" },
  { name: "AI", items: "OpenAI · Gemini · RAG · pgvector" },
  { name: "Automation", items: "n8n · Zapier · Make · Webhooks" },
  { name: "QA", items: "API testing · Regression · Database validation" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero — spec §04/§05 */}
      <section className="noise-bg relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-7">
              <p className="text-node text-muted-foreground">ABOUT / THE ENGINEER BEHIND THE SYSTEMS</p>
              <h1 className="text-h1 text-balance text-foreground lg:text-[3.6rem] lg:leading-[1.06]">
                I build software that has to work beyond the demo.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Full-stack systems, AI workflows, business automation — and the engineering discipline to make them
                reliable.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Start a Project →
                </Link>
                <a
                  href="/Miko-Canares-CV.pdf"
                  className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Download CV
                </a>
                <a
                  href="https://github.com/koushin07"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/miko-canares"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-node flex flex-wrap gap-x-5 gap-y-2 text-muted-foreground/70">
                <span>MISAMIS ORIENTAL, PHILIPPINES</span>
                <span>OPEN TO REMOTE · CONTRACT · FULL-TIME</span>
              </p>
            </div>
            <div className="hidden justify-center lg:flex">
              <Lifecycle />
            </div>
          </div>
        </div>
      </section>

      {/* Three disciplines — spec §06 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="THE COMBINATION" title="Three disciplines, one developer." />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.num} delay={i * 90}>
                <div className="panel h-full p-7 transition-colors duration-300 hover:border-primary/40">
                  <p className="text-node text-amber">{d.num} /</p>
                  <p className="text-node mt-2 text-foreground">{d.label}</p>
                  <ul className="mt-5 space-y-2 border-t border-border/60 pt-5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="size-1 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-node mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-muted-foreground">
            <span className="text-foreground">BUILD</span>
            <span className="text-amber">+</span>
            <span className="text-foreground">AUTOMATE</span>
            <span className="text-amber">+</span>
            <span className="text-foreground">VALIDATE</span>
            <span className="text-amber">→</span>
            <span className="text-amber">SHIP WITH CONFIDENCE</span>
          </p>
        </div>
      </section>

      {/* Why the combination matters — spec §07 */}
      <section className="noise-bg relative overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-6">
              <SectionHeader label="WHY IT MATTERS" title="Most projects fail at the boundaries." />
              <ul className="space-y-3">
                {boundaries.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-amber/60" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium text-foreground">I work across those boundaries.</p>
            </div>
            <SystemMap
              direction="vertical"
              className="justify-self-center"
              chipClassName="px-5 py-2.5"
              nodes={[
                { id: "build", label: "BUILD" },
                { id: "integrate", label: "INTEGRATE" },
                { id: "validate", label: "VALIDATE" },
                { id: "ship", label: "SHIP" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Engineering philosophy — spec §08/§09 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <Philosophy />
        </div>
      </section>

      {/* Career story — spec §13 */}
      <section className="noise-bg relative overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader label="THE PATH" title="From testing systems to building them." />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Enterprise QA at DXC Technology meant living with how software fails — across applications, databases,
            operating systems, and access. That validation mindset didn't stay in QA: it became part of how I design,
            build, and integrate systems. Testing isn't a phase at the end; it's how the whole thing gets built.
          </p>
          <div className="mt-12">
            <SystemMap
              nodes={[
                { id: "testing", label: "TESTING" },
                { id: "failure", label: "UNDERSTANDING FAILURE" },
                { id: "building", label: "BUILDING" },
                { id: "integrating", label: "INTEGRATING" },
                { id: "validating", label: "VALIDATING" },
                { id: "production", label: "PRODUCTION" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience timeline — spec §10-§12 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills by capability + education — spec §14/§16 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-32">
          <SectionHeader
            label="SYSTEMS"
            title="The stack, by capability."
            lede="The Projects page demonstrates the technologies — this is the capability behind them."
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.name} className="space-y-1.5">
                <p className="text-node text-primary">{group.name.toUpperCase()}</p>
                <p className="font-mono text-sm text-muted-foreground">{group.items}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-border/60 pt-8">
            <p className="text-node text-muted-foreground/60">EDUCATION</p>
            <p className="mt-2 text-sm text-foreground">Bachelor of Science in Information Technology</p>
            <p className="text-sm text-muted-foreground">Mindanao State University — Naawan · 2023</p>
          </div>
        </div>
      </section>

      {/* Human layer — spec §17 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-8 lg:py-24">
          <p className="text-node text-muted-foreground">BEYOND THE STACK</p>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-foreground/90">
            I care about building software that solves real problems — not just software that looks good in a demo.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Based in the Philippines, working remotely with teams globally.
          </p>
        </div>
      </section>

      {/* Final CTA — spec §21 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center lg:px-8 lg:py-32">
          <h2 className="text-h2 text-balance text-foreground">Build something that has to work.</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            If you have a product, internal system, AI workflow, or business process that needs to be built,
            integrated, or improved:
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
