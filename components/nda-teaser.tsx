"use client"

import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

const tools = ["React", "n8n", "Supabase", "Node.js", "SurveyJS", "Wear OS", "WordPress"]

export default function NDATeaser() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="bg-[#080c24] rounded-2xl p-8 md:p-10 space-y-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Lock size={14} style={{ color: "var(--amber)" }} />
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--amber)" }}
                  >
                    Under NDA
                  </span>
                </div>
                <h2 className="text-h2 font-semibold text-white">
                  Private SaaS Platform — LegalTech
                </h2>
                <p className="text-white/50 text-sm">Full-Stack Developer · 4 Production Systems · Active</p>
              </div>
            </div>

            <p className="text-white/70 text-base-custom max-w-3xl leading-relaxed">
              Built four internal systems for a LegalTech firm — a document generation pipeline, a data transformation
              engine for lead generation, a multi-party dispute scheduling system, and a Wear OS–integrated rule engine
              for mediator workflows. All systems are in active production handling sensitive legal data.
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-md bg-white/10 text-white/70 text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-white/10">
              <p className="text-white/35 text-xs">No company name, links, or screenshots — NDA protected.</p>
              <Link
                href="/projects#private-legaltech"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium group transition-colors duration-200"
              >
                See full breakdown
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
