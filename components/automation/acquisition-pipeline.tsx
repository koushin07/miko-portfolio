"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  AcquisitionPipeline — selling-system spec §9. The customer-acquisition
  pipeline as an executing system: each stage lights as data flows down,
  with its explanation always visible (nothing hidden behind hover).
*/

interface AcqStage {
  id: string
  label: string
  line: string
}

const STAGES: AcqStage[] = [
  {
    id: "source",
    label: "PUBLIC DATA",
    line: "Daily public court-record exports — zipped, caret-delimited flat files with separate lookup tables.",
  },
  {
    id: "ingestion",
    label: "DATA INGESTION",
    line: "n8n watches for each day's export drop and hands the file to the processing backend.",
  },
  {
    id: "processing",
    label: "PROCESSING",
    line: "A custom Node.js / TypeScript backend parses the caret-delimited feed into structured records.",
  },
  {
    id: "rules",
    label: "BUSINESS RULES",
    line: "Filters to active matters filed within 180 days and detects trigger events in the docket.",
  },
  {
    id: "classification",
    label: "CLASSIFICATION",
    line: "Each eligible record is classified into one of four lead profiles with priority tiers.",
  },
  {
    id: "enrichment",
    label: "ENRICHMENT",
    line: "Lookup tables convert raw codes — party types, case types, judges — into human-readable labels.",
  },
  {
    id: "dedup",
    label: "DEDUPLICATION",
    line: "Batch upsert logic keeps the queue free of duplicates, no matter how often the feed re-delivers.",
  },
  {
    id: "database",
    label: "DATABASE / CRM",
    line: "Structured leads land in the database behind a CRUD API, synced onward to the CRM.",
  },
  {
    id: "outreach",
    label: "OUTREACH / ACTION",
    line: "The team starts from a prioritized, deduplicated lead queue — no manual triage.",
  },
]

export function AcquisitionPipeline({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25, once: false })
  const { step, runId, reduced } = useSequence({
    steps: STAGES.length,
    active: inView,
    stepMs: 900,
    startDelayMs: 400,
    loop: true,
    holdMs: 3200,
  })

  return (
    <div ref={ref} className={cn("max-w-3xl", className)} role="list" aria-label="Customer acquisition pipeline">
      {STAGES.map((stage, i) => {
        const live = reduced || step >= i
        const arriving = !reduced && step === i
        return (
          <div key={stage.id} role="listitem">
            {i > 0 ? (
              <div className="grid grid-cols-[128px_1fr] sm:grid-cols-[184px_1fr]">
                <span className="flex justify-center">
                  <span
                    aria-hidden="true"
                    className={cn("relative block h-7 w-px transition-colors duration-300", live ? "bg-primary/40" : "bg-border")}
                  >
                    {arriving ? (
                      <span
                        key={`${runId}-${i}`}
                        className="motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y-once_0.4s_ease-in_both]"
                      />
                    ) : null}
                  </span>
                </span>
              </div>
            ) : null}
            <div className="grid grid-cols-[128px_1fr] items-center gap-4 sm:grid-cols-[184px_1fr] sm:gap-6">
              <span
                className={cn(
                  "text-node rounded-md border bg-card px-2.5 py-2 text-center transition-all duration-300",
                  arriving
                    ? "border-amber text-foreground"
                    : live
                      ? "border-primary/45 text-foreground"
                      : "border-border text-muted-foreground opacity-50",
                )}
              >
                {stage.label}
              </span>
              <p
                className={cn(
                  "text-sm leading-relaxed transition-opacity duration-300",
                  live ? "text-muted-foreground opacity-100" : "text-muted-foreground opacity-40",
                )}
              >
                {stage.line}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
