"use client"

import { FadeIn } from "@/components/ui/motion"

const technologies = [
  { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue", "Angular"] },
  { category: "Backend", tools: ["Laravel", "ASP.NET Core", "Node.js", "ExpressJS", "PHP"] },
  { category: "Databases", tools: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
  { category: "DevOps & Tools", tools: ["GitHub", "Jira", "Docker", "Linux", "AWS"] },
  { category: "Testing", tools: ["PHPUnit", "JUnit", "Selenium", "Postman", "BrowserStack"] },
  { category: "APIs & Services", tools: ["Stripe", "Shopify", "ServiceM8", "Brevo", "Pipedrive", "PandaDoc"] },
]

const highlights = [
  "Client-ready UI with React, Next.js, Vue, and Angular.",
  "Backend APIs across Laravel, ASP.NET Core, and Node.",
  "Regression and automation coverage with PHPUnit, JUnit, and BrowserStack.",
  "Infra and delivery workflows powered by Docker, Linux, and AWS.",
]

export default function TechStack() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">Tooling</span>
                <h2 className="text-h1 font-medium text-foreground">Tech stack to ship with confidence</h2>
              </div>
              <p className="text-muted-foreground text-base-custom max-w-[640px]">
                A practical collection of frameworks, services, and testing utilities used to deliver production builds—from
                customer-facing UI to backend integrations and infrastructure automation.
              </p>
              <div className="flex flex-wrap gap-3">
                {["UI delivery", "API integrations", "Automation", "Infrastructure"].map((label) => (
                  <span key={label} className="text-sm text-muted-foreground/80">
                    {label}
                  </span>
                ))}
              </div>
            </div>


          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <FadeIn key={tech.category} delay={0.08 * (i + 1)} direction="up">
              <div className="rounded-2xl border border-gray-200 bg-white/60 p-6 h-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{tech.category}</h3>
                  <span className="text-xs text-muted-foreground">{tech.tools.length} tools</span>
                </div>
                <ul className="space-y-2">
                  {tech.tools.map((tool) => (
                    <li key={tool} className="text-sm text-foreground/80 leading-relaxed">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
