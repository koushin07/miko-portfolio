"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

/*
  42-workflow explorer — V2 §24. One big number, then category navigation
  that swaps the content. Representative workflows only, all documented;
  no per-category counts are claimed.
*/

const categories = [
  {
    name: "Documents",
    line: "Intake data becomes finished, branded, fingerprinted PDFs — untouched by hand.",
    workflows: ["Document Factory (intake → PDF)", "Template data merge", "Footer & branding microservice", "Metadata fingerprinting"],
  },
  {
    name: "Legal Data",
    line: "Court records flow in on their own schedule and become structured leads.",
    workflows: ["Court-data ingestion", "CourtListener sync", "Miami-Dade Clerk API pulls", "Lead classification"],
  },
  {
    name: "Telephony",
    line: "Phone infrastructure managed by workflow instead of by dashboard.",
    workflows: ["VoIP.ms automation"],
  },
  {
    name: "E-signature",
    line: "Signature events drive the paperwork forward automatically.",
    workflows: ["Documenso event handling", "DocuSeal flows"],
  },
  {
    name: "CRM / Intake",
    line: "New clients land in the CRM with records, folders, and follow-ups created once — never twice.",
    workflows: ["SmartSuite onboarding", "Client intake processing", "Client link tracking", "Brevo transactional email"],
  },
  {
    name: "Scheduling",
    line: "Calendars negotiate themselves, including multi-party consent.",
    workflows: ["Google Calendar automation", "Multi-party consent scheduling"],
  },
  {
    name: "AI / Data",
    line: "Raw documents and audio events become structured data.",
    workflows: ["Gemini structured extraction", "ElevenLabs webhook handling", "Paginated / chunked API ingestion"],
  },
]

export function WorkflowCategories() {
  const [active, setActive] = useState(0)
  const current = categories[active]

  return (
    <div>
      <SectionHeader label="THE PLATFORM" title="42 workflows. One automation platform." />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr]">
        <div>
          <p className="font-mono text-7xl text-foreground">42</p>
          <p className="text-node mt-2 text-muted-foreground">PRODUCTION WORKFLOWS</p>
          <div className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {categories.map((category, i) => (
              <button
                key={category.name}
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-md border px-3 py-1.5 font-mono text-xs tracking-[0.06em] uppercase transition-colors duration-200",
                  i === active
                    ? "border-amber/60 bg-amber/10 text-amber"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div key={current.name} className="panel p-8 [animation:view-in_0.3s_ease-out_both]">
          <p className="text-node text-primary">{current.name.toUpperCase()}</p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/90">{current.line}</p>
          <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
            {current.workflows.map((workflow, j) => (
              <li
                key={workflow}
                className="flex items-center gap-2.5 text-sm text-muted-foreground [animation:node-in_0.35s_ease-out_both]"
                style={{ animationDelay: `${j * 70}ms` }}
              >
                <span aria-hidden="true" className="size-1.5 rounded-sm bg-primary/60" />
                {workflow}
              </li>
            ))}
          </ul>
          <p className="text-node mt-6 text-muted-foreground/60">+ ADDITIONAL PRODUCTION WORKFLOWS</p>
        </div>
      </div>
    </div>
  )
}
