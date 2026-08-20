"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  Atlas NHD signature visuals — Master Plan §4. "A property is not just an
  address": fragmented data sources converge into one determination, then
  the parcel journey shows exactly how — stage by stage, clickable.
*/

/* ------------------------------ problem equation ------------------------------ */

const TERMS = ["PROPERTY", "PARCEL GEOMETRY", "FLOOD DATA", "FIRE HAZARD DATA", "JURISDICTION RULES", "REGULATORY REQUIREMENTS"]

export function PropertyEquation() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, restart, done } = useSequence({ steps: TERMS.length + 2, active: inView, stepMs: 500, startDelayMs: 300, holdMs: 2600 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
        {TERMS.map((term, i) => (
          <span key={term} className="flex items-center gap-3">
            {i > 0 ? (
              <span className={cn("font-mono text-lg text-amber transition-opacity duration-300", step > i ? "opacity-100" : "opacity-0")}>+</span>
            ) : null}
            <span
              className={cn(
                "text-node rounded-md border bg-card px-3.5 py-2 transition-all duration-400",
                step > i ? "border-primary/45 text-foreground opacity-100" : "border-border text-muted-foreground opacity-40",
              )}
            >
              {term}
            </span>
          </span>
        ))}
      </div>
      <span className={cn("font-mono text-2xl text-amber transition-opacity duration-500", step > TERMS.length ? "opacity-100" : "opacity-0")}>
        ↓
      </span>
      <span
        className={cn(
          "text-node rounded-md border border-amber/60 bg-amber/10 px-5 py-2.5 text-amber transition-all duration-500",
          step > TERMS.length ? "scale-100 opacity-100" : "scale-90 opacity-0",
        )}
      >
        DISCLOSURE DETERMINATION
      </span>
    </div>
  )
}

/* ------------------------------- parcel journey -------------------------------- */

interface ParcelStage {
  id: string
  num: string
  label: string
  detail: string
}

const STAGES: ParcelStage[] = [
  { id: "entered", num: "01", label: "PROPERTY ENTERED", detail: "A customer or escrow officer enters an address — often partial, sometimes ambiguous." },
  { id: "identified", num: "02", label: "PARCEL IDENTIFIED", detail: "The address resolves to a specific parcel and APN, disambiguating when several match." },
  { id: "queried", num: "03", label: "SPATIAL DATASETS QUERIED", detail: "The parcel is checked against every relevant state and federal hazard layer — flood, fire severity, seismic, landslide, liquefaction, dam inundation, airport noise." },
  { id: "determined", num: "04", label: "CONDITIONS DETERMINED", detail: "Each dataset either applies to the parcel or doesn't — every determination is deterministic, not estimated." },
  { id: "applied", num: "05", label: "RULES APPLIED", detail: "Statutory disclosure rules translate raw determinations into the specific legal language and format required." },
  { id: "generated", num: "06", label: "OUTPUT GENERATED", detail: "A statutorily-formatted PDF is rendered, with report content pinned by markup-contract tests." },
  { id: "accessed", num: "07", label: "CUSTOMER ACCESSES RESULT", detail: "The report reaches the customer through the portal — ready to attach to a legally binding transaction." },
]

export function ParcelJourney() {
  const [selected, setSelected] = useState(0)
  const stage = STAGES[selected]

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <div role="tablist" aria-label="Parcel journey stages" className="space-y-0">
        {STAGES.map((s, i) => {
          const isActive = i === selected
          return (
            <div key={s.id}>
              {i > 0 ? (
                <span aria-hidden="true" className={cn("mx-5 block h-4 w-px", i <= selected ? "bg-primary/40" : "bg-border")} />
              ) : null}
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelected(i)}
                className={cn(
                  "flex w-full items-center gap-4 rounded-md border px-4 py-3 text-left transition-all duration-300",
                  isActive
                    ? "scale-[1.01] border-amber/60 bg-amber/10"
                    : i < selected
                      ? "border-primary/35 bg-card"
                      : "border-border bg-card hover:border-primary/30",
                )}
              >
                <span className={cn("font-mono text-sm", isActive ? "text-amber" : "text-muted-foreground/50")}>{s.num}</span>
                <span className={cn("text-node", isActive ? "text-foreground" : "text-muted-foreground")}>{s.label}</span>
              </button>
            </div>
          )
        })}
      </div>

      <div key={stage.id} className="panel p-7 [animation:view-in_0.3s_ease-out_both] lg:sticky lg:top-32">
        <p className="text-node text-amber">
          {stage.num} — {stage.label}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{stage.detail}</p>
        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
          <button
            type="button"
            disabled={selected === 0}
            onClick={() => setSelected((s) => Math.max(0, s - 1))}
            className="text-node text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
          >
            ← PREV
          </button>
          <button
            type="button"
            disabled={selected === STAGES.length - 1}
            onClick={() => setSelected((s) => Math.min(STAGES.length - 1, s + 1))}
            className="text-node text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  )
}
