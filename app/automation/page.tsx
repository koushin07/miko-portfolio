import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { SystemMap } from "@/components/system/system-map"
import { AutomationExplorer } from "@/components/automation/automation-explorer"
import { OpsBar } from "@/components/automation/ops-bar"
import { Patterns } from "@/components/automation/patterns"
import { WorkflowCategories } from "@/components/automation/workflow-categories"
import { HubNetwork } from "@/components/system/hub-network"

export const metadata = buildMetadata({
  title: "Automation Platform — n8n Orchestration & Integrations",
  description:
    "A self-hosted n8n automation platform with 42 production workflows: document generation, court-data ingestion, e-signature, CRM, scheduling, and AI-assisted extraction — built with idempotency, retries, and observability.",
  path: "/automation",
  keywords: [
    "n8n automation",
    "business automation",
    "automation engineer",
    "API integration",
    "workflow orchestration",
    "document automation",
  ],
})

export default function AutomationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Problem → backbone hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">AUTOMATION PLATFORM</p>
          <h1 className="text-h1 mt-6 max-w-4xl text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">
            I don't just build n8n workflows. I build automation systems.
          </h1>
          <p className="text-lg-custom mt-6 max-w-2xl text-muted-foreground">
            Growing businesses run on disconnected tools — CRM here, documents there, email everywhere. Every manual
            handoff is a delay or an error. I connect your CRM, AI, documents, APIs, databases, and communication
            tools into one reliable automation layer.
          </p>
          <p className="text-node mt-8 text-muted-foreground/80">
            BELOW: A SELF-HOSTED PLATFORM BUILT FOR A LEGALTECH FIRM (NDA) — 42 PRODUCTION WORKFLOWS ON ONE n8n
            BACKBONE
          </p>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="ARCHITECTURE"
            title="One engine between every trigger and every output."
            lede="Webhooks, schedules, and forms come in; validated, transformed, AI-enriched data flows out to the CRM, storage, and the people who need it. Hover the subsystems — then open the Document Factory."
          />
          <div className="mt-14">
            <AutomationExplorer />
          </div>
          <div className="mt-12">
            <OpsBar />
          </div>
        </div>
      </section>

      {/* Engineering patterns */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <Patterns />
        </div>
      </section>

      {/* 42 workflows */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <WorkflowCategories />
        </div>
      </section>

      {/* Integration network */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="INTEGRATIONS"
            title="Everything the platform talks to."
            lede="Twenty services and tools, orchestrated by one n8n backbone. Hover a system to trace its connection."
          />
          <div className="mt-12">
            <HubNetwork
              centerLabel="n8n"
              centerSublabel="automation engine"
              spokes={[
                { id: "openai", label: "OPENAI" },
                { id: "gemini", label: "GEMINI" },
                { id: "smartsuite", label: "SMARTSUITE" },
                { id: "brevo", label: "BREVO" },
                { id: "supabase", label: "SUPABASE" },
                { id: "postgresql", label: "POSTGRESQL" },
                { id: "gotenberg", label: "GOTENBERG" },
                { id: "documenso", label: "DOCUMENSO" },
                { id: "docuseal", label: "DOCUSEAL" },
                { id: "gdrive", label: "GOOGLE DRIVE" },
                { id: "gcal", label: "GOOGLE CALENDAR" },
                { id: "voipms", label: "VOIP.MS" },
                { id: "elevenlabs", label: "ELEVENLABS" },
                { id: "pushover", label: "PUSHOVER" },
              ]}
              footnote="+ GMAIL · DOCXTEMPLATER · COURTLISTENER · MIAMI-DADE CLERK API · REST APIS · JAVASCRIPT"
            />
          </div>
        </div>
      </section>

      {/* Other documented automation builds */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="MORE AUTOMATION BUILDS" title="Smaller systems, same engineering." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="panel space-y-5 p-6">
              <p className="text-node text-primary">01 — DOCUMENT GENERATION PIPELINE</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                SurveyJS form submission triggers an n8n workflow that pulls dynamic form data from Supabase, merges it
                with file metadata, generates a document, and delivers it to the user's email.
              </p>
              <SystemMap
                direction="vertical"
                animate={false}
                nodes={[
                  { id: "form", label: "SURVEYJS FORM" },
                  { id: "supabase", label: "SUPABASE" },
                  { id: "n8n", label: "N8N" },
                  { id: "doc", label: "DOC GENERATOR" },
                  { id: "email", label: "EMAIL DELIVERY" },
                ]}
              />
            </div>
            <div className="panel space-y-5 p-6">
              <p className="text-node text-primary">02 — LEAD GENERATION FROM BULK DATA UPLOADS</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                n8n watches a Google Drive folder for new zip file uploads. On detection, it triggers a custom
                Node/Express backend that extracts and transforms the raw data into structured leads, then archives the
                file as a completion signal.
              </p>
              <SystemMap
                direction="vertical"
                animate={false}
                nodes={[
                  { id: "zip", label: "ZIP UPLOAD" },
                  { id: "drive", label: "GOOGLE DRIVE" },
                  { id: "n8n", label: "N8N" },
                  { id: "express", label: "NODE / EXPRESS" },
                  { id: "leads", label: "LEADS + ARCHIVE" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="text-h2 text-balance text-foreground">Have a process worth automating?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what your team does by hand today. I'll map the workflow and the integrations it needs.
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
