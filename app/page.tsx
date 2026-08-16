import Navigation from "@/components/navigation"
import Hero from "@/components/home/hero"
import WhatIBuild from "@/components/home/what-i-build"
import Integrations from "@/components/home/integrations"
import QaMindset from "@/components/home/qa-mindset"
import HowIWork from "@/components/home/how-i-work"
import Cta from "@/components/home/cta"
import Footer from "@/components/footer"
import { StageShell } from "@/components/stages/stage-shell"
import { RagStage } from "@/components/stages/rag-stage"
import { AtlasStage } from "@/components/stages/atlas-stage"
import { AutomationStage } from "@/components/stages/automation-stage"
import { Patterns } from "@/components/automation/patterns"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Miko Cañares — Full-Stack Developer | AI, SaaS & Automation",
  absoluteTitle: true,
  description:
    "Full-stack developer building AI applications, SaaS platforms, APIs, RAG systems, and business automation with Next.js, React, Python, Laravel, and modern web technologies.",
  path: "/",
  keywords: [
    "Full-stack developer",
    "AI developer",
    "AI application development",
    "RAG development",
    "Next.js developer",
    "React developer",
    "Python developer",
    "Laravel developer",
    "n8n automation",
    "API integration",
    "SaaS development",
    "business automation",
  ],
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIBuild />

      <StageShell
        index="02"
        category="SYSTEMS IN PRODUCTION · AI / RAG"
        name="READMINDME"
        tagline="Knowledge-grounded AI platform."
        description="The assistant searches its own knowledge base before it answers — retrieval first, generation second, structured output always. Watch a question become a grounded answer."
        meta="FASTAPI · POSTGRESQL · PGVECTOR · OPENAI"
        href="/case-studies/readmindme"
        hrefLabel="View the full case study →"
      >
        <RagStage />
      </StageShell>

      <StageShell
        index="03"
        category="SYSTEMS IN PRODUCTION · GEOSPATIAL"
        name="ATLAS NHD"
        tagline="Statutory hazard disclosure, automated end to end."
        description="Raw state and federal geodata becomes a legally-formatted disclosure report — parcel in, PDF out, with correctness as the product."
        meta="FASTAPI · POSTGIS · GEOSERVER · NEXT.JS"
        href="/case-studies/atlas-nhd"
        hrefLabel="View the full case study →"
      >
        <AtlasStage />
      </StageShell>

      <AutomationStage />

      <section className="noise-bg relative overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1240px] px-6 py-24 lg:px-8 lg:py-36">
          <Patterns />
        </div>
      </section>

      <Integrations />
      <QaMindset />
      <HowIWork />
      <Cta />
      <Footer />
    </main>
  )
}
