import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "QA Portfolio",
  description: "Enterprise QA engagements and integration testing delivered by Miko Canares.",
  path: "/qa",
  keywords: ["QA services", "Testing portfolio", "Automation testing"],
})

const qaProjects = [
  {
    id: 1,
    title: "ERP Application QA Testing",
    category: "Enterprise Testing",
    duration: "Aug 2023 - Dec 2025",
    company: "DXC Technology",
    description:
      "Performed comprehensive QA testing on server/OS, terminal-based applications, database links, drivers, and user access to ensure system functionality and reliability for enterprise operations. Analyst II ERP Product Application role with focus on automated and manual testing.",
    achievements: [
      "Performed QA testing on server/OS and terminal-based applications",
      "Tested database links, drivers, and user access controls",
      "Developed and maintained automated testing scripts",
      "Conducted system checks and validated enterprise processes",
      "Escalated and documented defects for secure and stable operations",
      "Enhanced testing efficiency and coverage across enterprise systems",
    ],
    tools: [
      "Panaya",
      "Jira",
      "Cycle",
      "Regression Testing",
      "Usability Testing",
      "Manual Testing",
      "Automation Testing",
    ],
  },
  {
    id: 2,
    title: "Roadworthy Inspection Platform QA",
    category: "Product QA & Integrations",
    duration: "Jan 2024 - May 2024",
    company: "ASAP Roadworthys",
    description:
      "Partnered with the dev team to pair QA with feature delivery across the roadworthy inspection platform. Ensured the ReactTS + ExpressTS build stayed true to the Figma source of truth, validated booking data flows, payments, and ServiceM8 automation paths end to end, and confirmed Brevo campaigns triggered alongside job creation.",
    achievements: [
      "Audited UI against Figma components to keep the production build pixel-aligned",
      "Executed booking flows to confirm correct data persistence and client records",
      "Ran payment regression scenarios to verify successful charges and failure handling",
      "Validated ServiceM8 integration to ensure each booking generated the right job template",
      "Checked Brevo (Sendinblue) email automations fired in sync with lifecycle events",
    ],
    tools: [
      "BrowserStack",
      "Manual Testing",
      "Figma",
      "Stripe",
      "Brevo",
      "Postman",
    ],
  },
]

export default function QAPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 items-center">
            <div className="space-y-6">
              <FadeIn>
                <p className="text-white/60 text-eyebrow uppercase tracking-wider">Portfolio · QA</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-h0 text-white">
                  Expert testing for
                  <br />
                  flawless releases.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/70 text-xl-custom max-w-2xl">
                  Enterprise-grade QA paired with design fidelity and integration validation. I stress systems, payments, and workflows so production ships with confidence.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/about#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                  >
                    Book QA discovery
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#process"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                  >
                    View engagements
                    <ArrowRight size={18} className="translate-y-[1px]" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-4 text-white/60 text-sm-custom">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Enterprise ERP + product QA
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Payments · integrations · UX parity
                  </span>
                </div>
              </FadeIn>
            </div>

            {/** Removed empty hero card column */}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h2 text-foreground mb-4">QA engagements</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-[640px]">
              Infrastructure validation, design fidelity, payments, and third-party orchestration across enterprise and product teams.
            </p>
          </FadeIn>

          <div className="space-y-8">
            {qaProjects.map((project, i) => (
              <FadeIn key={project.id} delay={0.1 * i} direction="up">
                <article className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    <div className="lg:w-56 shrink-0 space-y-2">
                      <span className="inline-block px-3 py-1 bg-accent-secondary text-foreground/70 rounded-full text-xs">
                        {project.category}
                      </span>
                      <p className="text-muted-foreground text-sm">{project.duration}</p>
                      <p className="text-foreground text-sm font-medium">{project.company}</p>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl text-foreground font-semibold">{project.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.achievements.map((achievement, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, j) => (
                          <span key={j} className="px-3 py-1 bg-accent-secondary text-foreground/80 rounded-md text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
