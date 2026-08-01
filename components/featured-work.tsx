"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Atlas NHD Hazard Disclosure Platform",
    description:
      "California law requires a Natural Hazard Disclosure on every residential sale — a parcel checked against dozens of state and federal hazard datasets, rendered into a statutory document. Built the determination engine and the customer portal that escrow officers and agents use to order reports.",
    stack: ["Python/FastAPI", "PostGIS", "Next.js"],
    integrations: ["GeoServer", "Celery", "Prefect", "FEMA NFHL", "AWS ECS"],
    accent: "#4F6EF7",
    num: "01",
    link: "/case-study",
    nda: false,
  },
  {
    title: "ReadMindMe Bible Study Platform",
    description:
      "Personal full-stack RAG build. A 14-stage AI pipeline retrieves verses via pgvector across 36,819 embeddings, enriches with Greek/Hebrew morphology and 603K cross-references, and personalizes answers using per-user memory — wrapped in a community layer, prayer journaling, devotionals, and a full admin console with TOTP, audit log, and AI kill switch.",
    stack: ["FastAPI", "PostgreSQL/pgvector", "Redis"],
    integrations: ["OpenAI GPT-4o", "Google OAuth", "TOTP", "APScheduler"],
    accent: "#E8A020",
    num: "02",
    link: "/projects#readmindme",
    nda: false,
  },
  {
    title: "Private SaaS Platform — LegalTech",
    description:
      "Six internal production systems for a legal-document platform: a form-driven document pipeline, per-buyer anti-piracy fingerprinting, a court-record lead classification engine, multi-party dispute scheduling, a containerized job-queue service, and a Wear OS rule engine for mediator workflows.",
    stack: ["React", "Node.js/Express", "Supabase"],
    integrations: ["n8n", "SurveyJS", "BullMQ", "Docker", "Wear OS"],
    accent: "#E8A020",
    num: "03",
    link: "/projects#private-legaltech",
    nda: true,
  },
]

export default function FeaturedWork() {
  return (
    <section className="bg-[#080c24] py-20 md:py-32">
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
