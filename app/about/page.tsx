import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Briefcase, CheckCircle2, GraduationCap, MapPin } from "lucide-react"
import Link from "next/link"

const experience = [
  {
    role: "Analyst II ERP Product Application",
    company: "DXC Technology",
    period: "Aug 2023 - Dec 2025",
    outcome: "Enterprise QA across server/OS, database links, and user access with automated scripts for stable releases.",
  },
  {
    role: "Full-Stack Developer",
    company: "ACE",
    period: "Oct 2025 - Feb 2026",
    outcome: "Built a placement platform with Mapbox search, Clerk auth, PandaDoc document packs, and Pipedrive sync.",
  },
  {
    role: "Backend Developer",
    company: "ASAP Roadworthys",
    period: "Jan 2024 - May 2024",
    outcome: "Delivered booking, payments, and ServiceM8 job automation while pairing QA to keep flows reliable.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div className="space-y-6">
              <FadeIn>
                <p className="text-white/60 text-eyebrow uppercase tracking-wider">About</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-h0 text-white">Miko Canares</h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/70 text-xl-custom max-w-2xl">
                  I'm a full stack developer with a background in enterprise QA and system validation. I specialize in
                  building production-ready applications and automation-driven systems.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="flex flex-wrap gap-4 text-white/70 text-sm-custom">
                  <span className="flex items-center gap-2">
                    <MapPin size={18} />
                    Misamis Oriental, Philippines
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={18} />
                    Open to remote, contract, or full-time
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                  >
                    Contact me
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="/Miko-Canares-CV.pdf"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                  >
                    Download CV
                    <ArrowRight size={18} className="translate-y-[1px]" />
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="right">
              <div className="bg-[#131f5b]/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl p-6 space-y-4">
                <p className="text-white/70 text-sm-custom uppercase tracking-[0.14em]">Short bio</p>
                <p className="text-white text-base-custom leading-relaxed">
                  I connect product delivery with QA discipline. From API design to automation and integrations, I focus
                  on reliability, clear handoffs, and measurable outcomes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Tag label="Full-stack JavaScript" />
                  <Tag label="Automation & integrations" />
                  <Tag label="Enterprise QA mindset" />
                  <Tag label="Production readiness" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-10">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">How I work</p>
              <h2 className="text-h2 text-foreground">A process built around business outcomes</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up">
              <Card
                title="Approach"
                items={[
                  "Understand business requirements first.",
                  "Design API-first and automation-ready systems.",
                  "Build incrementally with testing and validation.",
                  "Deploy, monitor, and iterate with feedback loops.",
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.1} direction="up">
              <Card
                title="Why clients & teams trust me"
                items={[
                  "Ownership from design to deployment.",
                  "Strong integration experience.",
                  "Reliability and production mindset.",
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-10">
          <FadeIn>
            <div className="flex items-center gap-3">
              <Briefcase className="text-muted-foreground" />
              <h2 className="text-h3 text-foreground">Experience snapshot</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.map((exp, i) => (
              <FadeIn key={exp.role} delay={0.08 * i} direction="up">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full flex flex-col gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-[#1e308e] text-sm font-medium">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{exp.outcome}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="flex items-center gap-3">
              <GraduationCap className="text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="text-foreground text-base">Bachelor of Science in Information Technology — Mindanao State University - Naawan, 2023</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs border border-white/15">{label}</span>
}
