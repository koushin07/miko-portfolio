import { SectionHeader } from "@/components/section-header"

/*
  AcquisitionDecisions — selling-system spec §10, in the §25 credibility
  structure: PROBLEM → CONSTRAINT → DECISION → RESULT. Every card is
  grounded in the published NDA-system write-ups — nothing invented.
*/

interface Decision {
  num: string
  title: string
  problem: string
  constraint: string
  decision: string
  result: string
}

const DECISIONS: Decision[] = [
  {
    num: "01",
    title: "CUSTOM EXPORT PARSING",
    problem: "The source data isn't an API — it arrives as zipped, caret-delimited flat files.",
    constraint: "Party types, case types, and judges live in separate lookup tables, not in the records themselves.",
    decision: "A dedicated Node.js/TypeScript parser with lookup-table joins, instead of forcing a generic import tool onto a legal export format.",
    result: "Every record lands structured, labeled, and queryable.",
  },
  {
    num: "02",
    title: "RULES-BASED CLASSIFICATION",
    problem: "Most records in the daily feed are not viable leads.",
    constraint: "Eligibility depends on case status and docket events — service returned, motion to withdraw — not keywords.",
    decision: "Business rules filter to active matters, detect trigger events, and classify each eligible record into one of four lead profiles with priority tiers.",
    result: "The queue ranks itself — the team starts from the highest-priority profile, not from raw records.",
  },
  {
    num: "03",
    title: "DEDUPLICATION BY BATCH UPSERT",
    problem: "The same party can appear in the feed day after day.",
    constraint: "Re-importing daily files must never create duplicate leads downstream.",
    decision: "Batch upsert keyed on record identity instead of blind inserts.",
    result: "A deduplicated queue, no matter how often the feed re-delivers the same records.",
  },
  {
    num: "04",
    title: "AI-ASSISTED STRUCTURED EXTRACTION",
    problem: "Parts of the source data are unstructured text.",
    constraint: "Downstream workflows need structured, validated fields — not free-form model output.",
    decision: "AI extraction constrained to structured outputs, applied only where deterministic parsing can't do the job.",
    result: "Messy source text becomes fields the rest of the pipeline can trust.",
  },
  {
    num: "05",
    title: "COST-AWARE API USAGE",
    problem: "External APIs meter both rate and cost.",
    constraint: "Large daily batches can't treat third-party APIs as unlimited resources.",
    decision: "Chunked requests, rate-limited processing, and API calls only at the stages where they earn their cost.",
    result: "Full daily feeds processed without burning quota or budget.",
  },
  {
    num: "06",
    title: "PRODUCTION n8n ORCHESTRATION",
    problem: "A pipeline that runs unattended has to fail loudly, not silently.",
    constraint: "Stages span n8n, a custom backend, storage, and third-party APIs.",
    decision: "n8n orchestrates every stage with explicit gates, retries, and status polling on long-running jobs; processed files are archived as the completion signal.",
    result: "Failures surface immediately, and a glance at the archive shows exactly what has run.",
  },
]

export function AcquisitionDecisions() {
  return (
    <div>
      <SectionHeader
        label="ENGINEERING DECISIONS"
        title="Data engineering, not a visual automation."
        lede="The pipeline looks simple from the outside. These are the decisions that make it hold up in production."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DECISIONS.map((d) => (
          <div key={d.num} className="panel space-y-4 p-6">
            <div>
              <p className="font-mono text-xl text-muted-foreground/40">{d.num}</p>
              <p className="text-node mt-1 text-foreground">{d.title}</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-node text-amber">PROBLEM</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.problem}</p>
              </div>
              <div>
                <p className="text-node text-muted-foreground/70">CONSTRAINT</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.constraint}</p>
              </div>
              <div>
                <p className="text-node text-primary">DECISION</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.decision}</p>
              </div>
              <div className="border-t border-border/60 pt-3">
                <p className="text-node text-foreground/70">RESULT</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/85">{d.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
