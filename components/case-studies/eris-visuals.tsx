"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"
import { FlowStage } from "@/components/system/flow-stage"

/*
  ERIS case-study visuals — docs/ERIS_CASE_STUDY_UI_REBUILD.md.
  The Operations Command Center: every resource has a state, every
  movement leaves a trace. All board data is clearly simulated.
*/

/* ---------------------------------- hero board ---------------------------------- */

const BOARD_STATS = [
  { label: "AVAILABLE", value: 42, tone: "text-primary" },
  { label: "RESERVED", value: 11, tone: "text-amber" },
  { label: "DISPATCHED", value: 8, tone: "text-amber" },
  { label: "RETURNING", value: 3, tone: "text-muted-foreground" },
]

const BOARD_ROWS = [
  { id: "FORKLIFT-042", status: "AVAILABLE", tone: "bg-primary" },
  { id: "MED KIT-018", status: "RESERVED", tone: "bg-amber" },
  { id: "GEN-092", status: "DISPATCHED", tone: "bg-amber" },
  { id: "TRAILER-031", status: "RETURNING", tone: "bg-muted-foreground" },
]

export function ResourceBoard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step } = useSequence({ steps: BOARD_ROWS.length, active: inView, stepMs: 1400, loop: true, holdMs: 1400 })

  return (
    <div ref={ref} aria-hidden="true" className="panel w-full max-w-md p-6">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <p className="text-node text-primary">RESOURCE CONTROL</p>
        <p className="text-node text-[0.6rem] text-muted-foreground/60">SIMULATED VIEW</p>
      </div>
      <p className="text-node mt-3 text-muted-foreground">REGION 10</p>

      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {BOARD_STATS.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between border-b border-border/40 pb-1.5">
            <span className="text-node text-muted-foreground">{stat.label}</span>
            <span className={cn("font-mono text-xl", stat.tone)}>{stat.value}</span>
          </div>
        ))}
      </div>

      <p className="text-node mt-6 text-muted-foreground/60">RESOURCE STATUS</p>
      <div className="mt-2.5 space-y-2">
        {BOARD_ROWS.map((row, i) => (
          <div
            key={row.id}
            className={cn(
              "flex items-center justify-between rounded-md border px-3 py-2 transition-colors duration-300",
              step === i ? "border-amber/40 bg-secondary/40" : "border-border/60",
            )}
          >
            <span className="font-mono text-xs text-foreground/85">{row.id}</span>
            <span className="flex items-center gap-2">
              <span className={cn("size-1.5 rounded-full", row.tone, step === i && "motion-safe-only [animation:pulse-ring_1.4s_ease-in-out_infinite]")} />
              <span className="text-node text-[0.62rem] text-muted-foreground">{row.status}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------- lifecycle command (signature) ------------------------- */

interface LifecycleState {
  id: string
  label: string
  time: string
  event: string
  eventMeta: string
  detail: string[]
  card: { status: string; location: string; assigned: string; next: string }
}

const STATES: LifecycleState[] = [
  {
    id: "available",
    label: "AVAILABLE",
    time: "12:03",
    event: "INVENTORY VERIFIED",
    eventMeta: "Generator GEN-092",
    detail: ["Ready for assignment", "Location known", "Inventory verified"],
    card: { status: "AVAILABLE", location: "Depot — Region 10", assigned: "—", next: "Awaiting assignment" },
  },
  {
    id: "reserved",
    label: "RESERVED",
    time: "13:48",
    event: "RESOURCE RESERVED",
    eventMeta: "Municipality 07",
    detail: ["Assigned to an upcoming operation", "Reservation recorded", "Availability reduced"],
    card: { status: "RESERVED", location: "Depot — Region 10", assigned: "Municipality 07", next: "Dispatch pending" },
  },
  {
    id: "dispatched",
    label: "DISPATCHED",
    time: "14:32",
    event: "RESOURCE DISPATCHED",
    eventMeta: "Incident #2041",
    detail: ["Resource is in the field", "Movement recorded", "Operational state active"],
    card: { status: "DISPATCHED", location: "Municipality 07", assigned: "Incident #2041", next: "Return pending" },
  },
  {
    id: "returning",
    label: "RETURNING",
    time: "15:10",
    event: "RETURN STARTED",
    eventMeta: "Generator GEN-092",
    detail: ["Resource is expected back", "Return movement tracked"],
    card: { status: "RETURNING", location: "En route — Region 10", assigned: "Incident #2041", next: "Inventory check" },
  },
  {
    id: "audited",
    label: "AUDITED",
    time: "15:47",
    event: "AUDIT RECORDED",
    eventMeta: "Movement history preserved",
    detail: ["Movement history preserved", "Ready for reporting"],
    card: { status: "AUDITED", location: "Depot — Region 10", assigned: "—", next: "Ready for reporting" },
  },
]

type Inspection = "pass" | "issue" | null

export function LifecycleCommand() {
  const [index, setIndex] = useState(2)
  const [playing, setPlaying] = useState(false)
  const [inspection, setInspection] = useState<Inspection>(null)
  const state = STATES[index]
  const atAudited = index === STATES.length - 1

  useEffect(() => {
    if (!playing) return
    if (index >= STATES.length - 1) {
      const settle = setTimeout(() => setPlaying(false), 1200)
      return () => clearTimeout(settle)
    }
    const timer = setTimeout(() => setIndex((i) => i + 1), 1400)
    return () => clearTimeout(timer)
  }, [playing, index])

  const play = () => {
    setIndex(0)
    setPlaying(true)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr_1fr]">
      {/* State machine */}
      <div role="tablist" aria-label="Resource lifecycle states" className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-0">
        {STATES.map((s, i) => (
          <div key={s.id} className="flex items-center lg:flex-col lg:items-stretch">
            <button
              role="tab"
              aria-selected={i === index}
              onClick={() => {
                setPlaying(false)
                setIndex(i)
                setInspection(null)
              }}
              className={cn(
                "text-node w-full rounded-md border px-4 py-2.5 text-left transition-all duration-300",
                i === index
                  ? "scale-[1.02] border-amber/70 bg-amber/10 text-amber"
                  : i < index
                    ? "border-primary/45 bg-card text-foreground/85"
                    : "border-border bg-card text-muted-foreground",
              )}
            >
              {s.label}
            </button>
            {i < STATES.length - 1 ? (
              <span aria-hidden="true" className={cn("mx-auto hidden h-4 w-px lg:block", i < index ? "bg-primary/40" : "bg-border")} />
            ) : null}
          </div>
        ))}
        <button
          type="button"
          onClick={play}
          disabled={playing}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-amber/50 px-4 py-2.5 font-mono text-xs tracking-[0.08em] text-amber uppercase transition-colors hover:bg-amber/10 disabled:opacity-50 lg:mt-6"
        >
          <Play size={12} />
          {playing ? "Running…" : "Play resource lifecycle"}
        </button>

        {atAudited ? (
          <div className="mt-4 space-y-2 border-t border-border/60 pt-4 [animation:node-in_0.3s_ease-out_both]">
            <p className="text-node text-muted-foreground/60">INSPECTION OUTCOME</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setInspection("pass")}
                className={cn(
                  "text-node flex-1 rounded-md border px-3 py-2 transition-colors duration-200",
                  inspection === "pass" ? "border-primary/60 bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                PASS
              </button>
              <button
                type="button"
                onClick={() => setInspection("issue")}
                className={cn(
                  "text-node flex-1 rounded-md border px-3 py-2 transition-colors duration-200",
                  inspection === "issue" ? "border-amber/60 bg-amber/10 text-amber" : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                ISSUE
              </button>
            </div>
            {inspection ? (
              <p className="text-node rounded-md border border-border/60 bg-card px-3 py-2 text-center text-foreground/85 [animation:node-in_0.25s_ease-out_both]">
                {inspection === "pass" ? "→ READY" : "→ MAINTENANCE / NOT READY"}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* Resource card */}
      <div key={state.id} className="panel h-fit p-6 [animation:view-in_0.3s_ease-out_both]">
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <p className="text-node text-primary">RESOURCE / GEN-092</p>
          <p className="text-node text-[0.6rem] text-muted-foreground/60">SIMULATED</p>
        </div>
        <dl className="mt-4 space-y-3">
          {[
            ["STATUS", state.card.status, "text-amber"],
            ["LOCATION", state.card.location, "text-foreground/90"],
            ["ASSIGNED TO", state.card.assigned, "text-foreground/90"],
            ["LAST MOVEMENT", state.time, "text-foreground/90"],
            ["NEXT EVENT", state.card.next, "text-muted-foreground"],
          ].map(([label, value, tone]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2">
              <dt className="text-node text-muted-foreground/70">{label}</dt>
              <dd className={cn("text-right font-mono text-sm", tone)}>{value}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-4 space-y-1.5">
          {state.detail.map((line) => (
            <li key={line} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span aria-hidden="true" className="size-1 rounded-full bg-amber/70" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Audit trail */}
      <div className="panel h-fit p-6">
        <p className="text-node border-b border-border/60 pb-3 text-muted-foreground">MOVEMENT HISTORY</p>
        <div className="mt-4 space-y-4">
          {STATES.slice(0, index + 1)
            .slice()
            .reverse()
            .map((s) => (
              <div key={s.id} className="relative border-l border-border pl-4 [animation:node-in_0.35s_ease-out_both]">
                <span aria-hidden="true" className={cn("absolute top-1.5 -left-[3px] size-[7px] rounded-full", s.id === state.id ? "bg-amber" : "bg-primary/60")} />
                <p className="font-mono text-xs text-muted-foreground/70">{s.time}</p>
                <p className="text-node mt-0.5 text-foreground/90">{s.event}</p>
                <p className="text-xs text-muted-foreground">{s.eventMeta}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------- before / after -------------------------------- */

const FRAGMENTS = ["SPREADSHEET", "PHONE CALL", "MANUAL RECORD", "DISPATCHER MEMORY", "OUTDATED STATUS"]

export function BeforeAfter() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, done } = useSequence({ steps: 7, active: inView, stepMs: 650, startDelayMs: 300 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <p className="text-node text-destructive-foreground/70">BEFORE</p>
        <div aria-hidden="true" className="relative mt-6 h-56">
          {FRAGMENTS.map((fragment, i) => (
            <span
              key={fragment}
              className="text-node absolute rounded-md border border-dashed border-border bg-card/60 px-3 py-1.5 text-muted-foreground/70"
              style={{
                left: `${[6, 52, 22, 58, 12][i]}%`,
                top: `${[8, 18, 44, 62, 80][i]}%`,
                transform: `rotate(${[-3, 2, -2, 3, -1][i]}deg)`,
              }}
            >
              {fragment}
            </span>
          ))}
          <span className="text-node absolute right-[6%] bottom-[8%] rounded border border-amber/40 px-1.5 py-0.5 text-[0.6rem] text-amber/80">
            MANUAL RECONCILIATION
          </span>
        </div>
      </div>
      <div>
        <p className="text-node text-primary">AFTER — ERIS</p>
        <div className="mt-6 flex justify-center lg:justify-start">
          <FlowStage
            step={step - 1}
            runId={runId}
            nodes={[
              { id: "resource", label: "RESOURCE" },
              { id: "state", label: "STATE" },
              { id: "movement", label: "MOVEMENT" },
              { id: "audit", label: "AUDIT" },
              { id: "report", label: "REPORT" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

/* --------------------------------- region view ---------------------------------- */

interface Municipality {
  id: string
  x: number
  y: number
  headline: string
  counts: { available: number; reserved: number; dispatched: number; returning: number }
}

const MUNICIPALITIES: Municipality[] = [
  { id: "M01", x: 18, y: 28, headline: "8 AVAILABLE", counts: { available: 8, reserved: 1, dispatched: 0, returning: 0 } },
  { id: "M02", x: 38, y: 62, headline: "3 RESERVED", counts: { available: 4, reserved: 3, dispatched: 1, returning: 0 } },
  { id: "M03", x: 60, y: 35, headline: "5 DISPATCHED", counts: { available: 5, reserved: 2, dispatched: 4, returning: 1 } },
  { id: "M04", x: 75, y: 68, headline: "1 RETURNING", counts: { available: 2, reserved: 0, dispatched: 3, returning: 1 } },
  { id: "M05", x: 85, y: 22, headline: "9 AVAILABLE", counts: { available: 9, reserved: 0, dispatched: 1, returning: 0 } },
]

export function RegionMap() {
  const [selected, setSelected] = useState("M03")
  const municipality = MUNICIPALITIES.find((m) => m.id === selected) ?? MUNICIPALITIES[2]

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border bg-card/50">
        <div className="grid-bg absolute inset-0 opacity-60 [background-size:36px_36px]" />
        <p className="text-node absolute top-3 left-3 text-[0.6rem] text-muted-foreground/50">REGION 10 — SIMULATED</p>
        {MUNICIPALITIES.map((m) => (
          <button
            key={m.id}
            type="button"
            aria-pressed={m.id === selected}
            onClick={() => setSelected(m.id)}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-md border bg-card px-2.5 py-1.5 text-left transition-all duration-300",
              m.id === selected ? "scale-105 border-amber/70" : "border-border hover:border-primary/50",
            )}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          >
            <span className="flex items-center gap-1.5">
              <span className={cn("size-1.5 rounded-full", m.id === selected ? "bg-amber motion-safe-only [animation:pulse-ring_1.6s_ease-in-out_infinite]" : "bg-primary/70")} />
              <span className="text-node text-[0.65rem] text-foreground">{m.id}</span>
            </span>
            <span className="mt-0.5 block font-mono text-[0.6rem] text-muted-foreground">{m.headline}</span>
          </button>
        ))}
      </div>

      <div key={municipality.id} className="panel p-6 [animation:view-in_0.3s_ease-out_both]">
        <p className="text-node border-b border-border/60 pb-3 text-primary">MUNICIPALITY {municipality.id.slice(1)}</p>
        <dl className="mt-4 grid grid-cols-2 gap-4">
          {[
            ["AVAILABLE", municipality.counts.available, "text-primary"],
            ["RESERVED", municipality.counts.reserved, "text-amber"],
            ["DISPATCHED", municipality.counts.dispatched, "text-amber"],
            ["RETURNING", municipality.counts.returning, "text-muted-foreground"],
          ].map(([label, value, tone]) => (
            <div key={label as string}>
              <dt className="text-node text-muted-foreground/70">{label}</dt>
              <dd className={cn("mt-1 font-mono text-2xl", tone as string)}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/* ------------------------------ layered architecture ----------------------------- */

const chip = (active: boolean, extra = "") =>
  cn(
    "text-node rounded-md border bg-card px-3 py-1.5 transition-all duration-300",
    active ? "border-primary/45 text-foreground" : "border-border text-muted-foreground opacity-50",
    extra,
  )

export function OpsArchitecture() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step } = useSequence({ steps: 6, active: inView, stepMs: 800, loop: true, holdMs: 2200 })

  const connector = (visible: boolean) => (
    <span aria-hidden="true" className={cn("block h-5 w-px transition-colors duration-300", visible ? "bg-primary/40" : "bg-border")} />
  )

  return (
    <div ref={ref} aria-hidden="true" className="flex flex-col items-center">
      <span className={chip(step >= 0, "border-amber/50 px-4 py-2 text-amber opacity-100")}>ERIS OPERATIONS</span>
      {connector(step >= 1)}
      <div className="flex flex-wrap justify-center gap-2.5">
        {["DASHBOARDS", "RESOURCE STATE", "REPORTING"].map((t, j) => (
          <span key={t} className={chip(step >= 1)} style={{ transitionDelay: `${j * 90}ms` }}>
            {t}
          </span>
        ))}
      </div>
      {connector(step >= 2)}
      <div className="flex flex-wrap justify-center gap-2.5">
        {["RESERVATIONS", "MOVEMENT"].map((t, j) => (
          <span key={t} className={chip(step >= 2)} style={{ transitionDelay: `${j * 90}ms` }}>
            {t}
          </span>
        ))}
      </div>
      {connector(step >= 3)}
      <span className={chip(step >= 3, "px-4 py-2")}>LARAVEL</span>
      {connector(step >= 4)}
      <div className="flex flex-wrap justify-center gap-2.5">
        {["MYSQL", "RBAC", "BACKUPS"].map((t, j) => (
          <span key={t} className={chip(step >= 4)} style={{ transitionDelay: `${j * 90}ms` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* --------------------------------- role switcher --------------------------------- */

const CAPABILITIES = [
  { id: "view", label: "View available resources" },
  { id: "reserve", label: "Reserve resources" },
  { id: "dispatch", label: "Dispatch resources" },
  { id: "manage", label: "Manage state & permissions" },
  { id: "audit", label: "Review movement history" },
]

const ROLES = [
  { id: "responder", label: "RESPONDER", allowed: ["view"] },
  { id: "coordinator", label: "COORDINATOR", allowed: ["view", "reserve", "dispatch"] },
  { id: "admin", label: "ADMIN", allowed: ["view", "reserve", "dispatch", "manage"] },
  { id: "auditor", label: "AUDITOR", allowed: ["view", "audit"] },
]

export function RoleSwitcher() {
  const [roleId, setRoleId] = useState("coordinator")
  const role = ROLES.find((r) => r.id === roleId) ?? ROLES[1]

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {ROLES.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-pressed={r.id === roleId}
            onClick={() => setRoleId(r.id)}
            className={cn(
              "text-node rounded-md border px-4 py-2.5 text-left transition-colors duration-200",
              r.id === roleId ? "border-amber/60 bg-amber/10 text-amber" : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div key={role.id} className="panel p-6 [animation:view-in_0.25s_ease-out_both]">
        <p className="text-node border-b border-border/60 pb-3 text-muted-foreground">ACCESS — {role.label}</p>
        <ul className="mt-4 space-y-2.5">
          {CAPABILITIES.map((capability) => {
            const allowed = role.allowed.includes(capability.id)
            return (
              <li
                key={capability.id}
                className={cn(
                  "flex items-center gap-3 rounded-md border px-4 py-2.5 text-sm transition-all duration-300",
                  allowed ? "border-primary/40 text-foreground" : "border-border/50 text-muted-foreground/50",
                )}
              >
                <span className={cn("text-node text-[0.62rem]", allowed ? "text-amber" : "text-muted-foreground/40")}>
                  {allowed ? "✓" : "—"}
                </span>
                {capability.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
