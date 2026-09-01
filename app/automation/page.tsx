import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { SectionHeader } from "@/components/section-header"
import { AutomationExplorer } from "@/components/automation/automation-explorer"
import { OpsBar } from "@/components/automation/ops-bar"
import { Patterns } from "@/components/automation/patterns"
import { WorkflowCategories } from "@/components/automation/workflow-categories"
import { HubNetwork } from "@/components/system/hub-network"
import { AcquisitionPipeline } from "@/components/automation/acquisition-pipeline"
import { AcquisitionDecisions } from "@/components/automation/acquisition-decisions"
import { AcquisitionBridge } from "@/components/automation/acquisition-bridge"
import { AutomationBeforeAfter } from "@/components/automation/automation-before-after"

export const metadata = buildMetadata({
  title: "Customer Acquisition & Business Automation Platform — n8n Orchestration",
  description:
    "A production customer-acquisition and business-automation system: daily public court data becomes qualified leads, and a purchase becomes a finished, fingerprinted document — 42 n8n workflows on one self-hosted backbone.",
  path: "/automation",
  keywords: [
    "n8n automation",
    "business automation",
    "customer acquisition system",
    "lead generation automation",
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

      {/* Hero — spec §8: the central message */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <p className="text-node text-muted-foreground">CUSTOMER ACQUISITION + AUTOMATION PLATFORM</p>
          <h1 className="text-h1 mt-6 max-w-4xl text-balance text-foreground lg:text-[3rem] lg:leading-[1.1]">
            I built both the system that finds the customers and the system that sells and delivers to them.
          </h1>
          <p className="text-lg-custom mt-6 max-w-2xl text-muted-foreground">
            A production customer-acquisition and business-automation system, built for a LegalTech firm (NDA). Daily
            public court data becomes qualified leads. A customer&apos;s purchase becomes a finished, fingerprinted
            document. 42 production workflows run it all on one self-hosted n8n backbone.
          </p>
          <p className="text-node mt-8 text-muted-foreground/80">
            ARCHITECTURE SHOWN WITH SENSITIVE DETAILS REMOVED
          </p>
        </div>
      </section>

      {/* The shift — spec §13 before/after */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader label="THE SHIFT" title="From manual handoffs to one automated backbone." />
          <div className="mt-14">
            <AutomationBeforeAfter />
          </div>
        </div>
      </section>

      {/* Acquisition engine — spec §9 */}
      <section className="noise-bg relative overflow-hidden border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="THE ACQUISITION ENGINE"
            title="Public data in. Qualified leads out."
            lede="Every day, public court-record exports become a prioritized, deduplicated lead queue — parsed, classified, enriched, and synced to the CRM with no manual triage. Watch the data flow through."
          />
          <div className="mt-14">
            <AcquisitionPipeline />
          </div>
        </div>
      </section>

      {/* Engineering decisions — spec §10 / §25 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <AcquisitionDecisions />
        </div>
      </section>

      {/* Acquisition → delivery — spec §11 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-8 lg:py-24">
          <SectionHeader
            label="ACQUISITION → DELIVERY"
            title="The automation continues after acquisition."
            lede="Finding the customer is half the system. When a lead becomes a customer and buys, the same platform takes over: intake, document generation, and delivery — untouched by hand."
            className="mx-auto text-center [&>p:first-child]:justify-center"
          />
          <div className="mt-14">
            <AcquisitionBridge />
          </div>
        </div>
      </section>

      {/* Delivery engine — spec §12 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            label="THE DELIVERY ENGINE"
            title="A purchase becomes a finished, fingerprinted PDF without manual document processing."
            lede="A completed intake questionnaire triggers the Document Factory: template merged, converted to PDF, stamped with per-buyer fingerprint metadata, stored, and delivered by email. Hover the subsystems — then open the Document Factory to watch a document run through."
          />
          <div className="mt-14">
            <AutomationExplorer />
          </div>
          <p className="text-node mt-10 text-muted-foreground/70">
            SURVEYJS · SUPABASE · N8N · DOCXTEMPLATER · GOTENBERG · PDF-LIB · BREVO
          </p>
          <div className="mt-8">
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

      {/* CTA — spec §21 */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="text-h2 text-balance text-foreground">Have a manual workflow you&apos;d like to automate?</h2>
          <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what your team does by hand today. I&apos;ll map the workflow and the integrations it needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Discuss your project →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
