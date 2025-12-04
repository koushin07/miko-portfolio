import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { Server, CheckCircle2, ArrowRight, Network, HardDrive } from "lucide-react"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "System & Infrastructure",
  description: "Systems engineering, server provisioning, and infrastructure QA by Miko Canares.",
  path: "/system",
  keywords: ["Infrastructure", "Server configuration", "Systems engineering"],
})

const systemExperience = [
  {
    id: 1,
    title: "ERP System QA Testing & Automation",
    category: "Enterprise Systems",
    icon: <Server className="w-5 h-5" />,
    description:
      "Performed comprehensive QA testing on enterprise ERP systems at DXC Technology. Tested server/OS, terminal-based applications, database links, drivers, and user access controls. Developed and maintained automated testing scripts to ensure system stability and security.",
    tasks: [
      "Tested server/OS functionality and system components",
      "Tested database links, drivers, and connectivity",
      "Developed automated testing scripts and frameworks",
      "Conducted user access control and security testing",
    ],
  },
  {
    id: 2,
    title: "Physical Server Setup & Configuration",
    category: "Infrastructure",
    icon: <Server className="w-5 h-5" />,
    description:
      "Set up physical servers from scratch, installed essential software packages, and configured system settings for optimal performance and security during internship at Apollo Tech.",
    tasks: [
      "Installed and configured Ubuntu/Linux servers",
      "Set up essential server software and dependencies",
      "Configured system security and access controls",
      "Documented server configurations for maintenance",
    ],
  },
  {
    id: 3,
    title: "Server Issue Resolution & Maintenance",
    category: "Troubleshooting",
    icon: <HardDrive className="w-5 h-5" />,
    description:
      "Resolved server issues to maintain performance and reliability. Performed regular maintenance tasks and system health checks to ensure stable operations.",
    tasks: [
      "Diagnosed and resolved server performance issues",
      "Performed system updates and patches",
      "Monitored server health and resource utilization",
      "Implemented backup and recovery procedures",
    ],
  },
  {
    id: 4,
    title: "Networking & Domain Configuration",
    category: "Networking",
    icon: <Network className="w-5 h-5" />,
    description:
      "Handled basic networking tasks including listing domains for assigned IPs and configuring network settings for server accessibility and connectivity.",
    tasks: [
      "Configured domain listings for assigned IP addresses",
      "Set up network routing and firewall rules",
      "Managed DNS configurations",
      "Ensured network security and accessibility",
    ],
  },
]

const skills = [
  { name: "Ubuntu/Linux Server", level: 85 },
  { name: "Server Configuration", level: 80 },
  { name: "Network Administration", level: 75 },
  { name: "System Troubleshooting", level: 85 },
  { name: "Security Configuration", level: 70 },
]

export default function SystemPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 items-center">
            <div className="space-y-6">
              <FadeIn>
                <p className="text-white/60 text-eyebrow uppercase tracking-wider">Portfolio · System</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-h0 text-white">
                  Infrastructure that
                  <br />
                  scales and recovers.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/70 text-xl-custom max-w-2xl">
                  Server build-outs, environment hardening, and QA for mission-critical ERP flows. I pair configuration with validation so infra survives launch days.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/about#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                  >
                    Plan an infra run
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#experience"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                  >
                    View experience
                    <ArrowRight size={18} className="translate-y-[1px]" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-4 text-white/60 text-sm-custom">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    ERP QA · automation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Linux servers · networking · recovery
                  </span>
                </div>
              </FadeIn>
            </div>

            {/** Removed empty hero card column */}
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 md:py-20 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-white rounded-full text-foreground/70 text-xs shadow-sm">
                Aug 2023 - Dec 2025
              </span>
              <h2 className="text-h2 text-foreground mt-3 mb-2">DXC Technology</h2>
              <p className="text-muted-foreground text-lg">Analyst II ERP Product Application</p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 mb-16">
            <FadeIn>
              <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent-secondary flex items-center justify-center mb-6 text-foreground/70">
                  {systemExperience[0].icon}
                </div>
                <span className="inline-block px-2 py-0.5 bg-accent-secondary rounded text-foreground/70 text-xs mb-3">
                  {systemExperience[0].category}
                </span>
                <h3 className="text-xl text-foreground font-semibold mb-3">{systemExperience[0].title}</h3>
                <p className="text-muted-foreground text-base mb-5 leading-relaxed">{systemExperience[0].description}</p>
                <ul className="space-y-2">
                  {systemExperience[0].tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-foreground/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mb-12">
              <span className="inline-block px-3 py-1 bg-white rounded-full text-foreground/70 text-xs shadow-sm">
                Feb 2023 - May 2023
              </span>
              <h2 className="text-h2 text-foreground mt-3 mb-2">Apollo Tech</h2>
              <p className="text-muted-foreground text-lg">System & Infrastructure Engineer - Intern</p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systemExperience.slice(1).map((item, i) => (
              <FadeIn key={item.id} delay={0.1 * i} direction="up">
                <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-secondary flex items-center justify-center mb-6 text-foreground/70">
                    {item.icon}
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-accent-secondary rounded text-foreground/70 text-xs mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg text-foreground font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2">
                    {item.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 text-foreground/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#1e308e] shrink-0 mt-0.5" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h2 text-foreground mb-12 text-center">Technical proficiency</h2>
          </FadeIn>

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill, i) => (
              <FadeIn key={skill.name} delay={0.1 * i} direction="up">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground text-base">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-accent-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1e308e] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
