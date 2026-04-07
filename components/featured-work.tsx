"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ACE Clinical Placement Platform",
    description:
      "Placement coordinators were juggling bookings, student profiles, and document packs across spreadsheets and email. Built a CRM-synced booking platform with location search, automated onboarding flows, and PandaDoc document packs triggered on placement milestones.",
    stack: ["Next.js", "Laravel", "TypeScript"],
    integrations: ["Mapbox", "Clerk", "PandaDoc", "Pipedrive"],
    accent: "#4F6EF7",
    num: "01",
    link: "/projects#ace",
    nda: false,
  },
  {
    title: "Roadworthy Inspection Platform",
    description:
      "Inspection bookings required manual coordination across payments, job creation, and customer comms — any failure broke the chain. Built an end-to-end pipeline with idempotent Stripe payments, ServiceM8 job creation, and Brevo lifecycle comms in one reliable flow.",
    stack: ["React", "Node.js", "TypeScript"],
    integrations: ["Stripe", "ServiceM8", "Brevo"],
    accent: "#E8A020",
    num: "02",
    link: "/projects#roadworthy",
    nda: false,
  },
  {
    title: "Private SaaS Platform — LegalTech",
    description:
      "Built 4 internal production systems: a document generation pipeline, a data transformation engine for lead generation, a multi-party dispute scheduling system, and a Wear OS rule engine for mediator workflows.",
    stack: ["React", "Node.js", "Supabase"],
    integrations: ["n8n", "SurveyJS", "Wear OS", "Google Drive"],
    accent: "#E8A020",
    num: "03",
    link: "/projects#private-legaltech",
    nda: true,
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-[#080c24] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 mb-10">
          <FadeIn>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-white/40">Featured Work</p>
              <h2 className="text-h1 font-medium text-white mt-2">Systems built to solve real problems</h2>
              <p className="text-white/50 text-base-custom max-w-2xl mt-3">
                Problem → solution → impact. Each build combines full-stack delivery with automation and integration reliability.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-white/70 hover:text-white font-medium group relative transition-colors duration-200"
            >
              View all projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 h-[1px] bg-white/70 w-0 group-hover:w-full transition-all duration-300 origin-left" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.08 * (index + 1)} direction="up">
              <article
                className="bg-white/[0.04] rounded-2xl border border-white/10 p-6 h-full flex flex-col gap-4 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300"
                style={{ borderTop: `2px solid ${project.accent}` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-xs font-bold tracking-widest"
                    style={{ color: project.accent, fontFamily: "var(--font-display)" }}
                  >
                    {project.num}
                  </span>
                  {project.nda && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide border" style={{ color: "var(--amber)", borderColor: "var(--amber)", backgroundColor: "rgba(232,160,32,0.08)" }}>
                      <Lock size={9} />
                      NDA
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-medium border"
                        style={{ color: project.accent, borderColor: `${project.accent}40`, backgroundColor: `${project.accent}12` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.integrations.map((int) => (
                      <span key={int} className="px-2 py-0.5 rounded text-xs text-white/40 border border-white/10 bg-white/5">
                        {int}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mt-auto group relative transition-colors duration-200"
                >
                  {project.nda ? "See full breakdown" : "View details"}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  <span className="absolute bottom-0 left-0 h-[1px] bg-white/60 w-0 group-hover:w-full transition-all duration-300 origin-left" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
