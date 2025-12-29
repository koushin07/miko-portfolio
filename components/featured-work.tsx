"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ACE Clinical Placement Platform",
    description: "Placement booking with location search, secure onboarding, and automated document packs.",
    stack: "Next.js, Laravel, TypeScript",
    integrations: "Mapbox, Clerk, PandaDoc, Pipedrive",
    link: "/projects#ace",
  },
  {
    title: "Roadworthy Inspection Platform",
    description: "Booking-to-inspection flow with payments, templated jobs, and lifecycle comms.",
    stack: "React, Node.js, TypeScript",
    integrations: "Stripe, ServiceM8, Brevo, Figma QA",
    link: "/projects#roadworthy",
  },
  {
    title: "Emergency Resource Information System",
    description: "Live resource visibility for municipal responders with audits and movement history.",
    stack: "Laravel, Inertia, Vue",
    integrations: "Inventory, dispatch workflows, reporting",
    link: "/case-study",
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-accent-secondary py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 mb-10">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Featured Work</p>
              <h2 className="text-h1 font-medium text-foreground mt-2">Products & systems that deliver outcomes</h2>
              <p className="text-muted-foreground text-base-custom max-w-2xl mt-3">
                A focused set of builds that pair full-stack delivery with automation and integration reliability.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-foreground font-medium group relative"
            >
              View all projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 h-[2px] bg-foreground w-0 group-hover:w-full transition-all duration-300 origin-left" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.08 * (index + 1)} direction="up">
              <article className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col gap-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="text-sm text-foreground/80 space-y-1">
                  <p>
                    <span className="font-semibold">Stack:</span> {project.stack}
                  </p>
                  <p>
                    <span className="font-semibold">Integrations:</span> {project.integrations}
                  </p>
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-foreground font-medium mt-auto group relative"
                >
                  View details
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span className="absolute bottom-0 left-0 h-[2px] bg-foreground w-0 group-hover:w-full transition-all duration-300 origin-left" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
