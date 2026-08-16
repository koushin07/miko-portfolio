"use client"

import { useEffect, useState } from "react"
import { Play, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  ACE case-study visuals — docs/ACE_CASE_STUDY_UI_REBUILD.md.
  The Placement Control Room: one placement record at the center, every
  connected system kept in sync around it. Sample records are clearly
  simulated; integrations shown are only the documented ones.
*/

/* ------------------------------ hero placement board ------------------------------ */

interface OrbitSystem {
  id: string
  label: string
  sublabel: string
  x: number
  y: number
  tip: string
  path: string
}

const ORBITS: OrbitSystem[] = [
  { id: "mapbox", label: "SEARCH", sublabel: "Mapbox", x: 12, y: 16, tip: "Map-based location search for placement discovery.", path: "SEARCH → MAPBOX → RESULTS" },
  { id: "pipedrive", label: "CRM", sublabel: "Pipedrive", x: 88, y: 16, tip: "Placement records stay aligned with the CRM — no duplicate data entry.", path: "BOOKING → API → PIPEDRIVE" },
  { id: "clerk", label: "AUTH", sublabel: "Clerk", x: 12, y: 84, tip: "Authentication for coordinators and students.", path: "SIGN-IN → CLERK → SESSION" },
  { id: "pandadoc", label: "DOCUMENTS", sublabel: "PandaDoc", x: 88, y: 84, tip: "Document packs generated when a placement milestone is reached.", path: "MILESTONE → DOCUMENT → PANDADOC" },
]

export function PlacementBoard() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, reduced } = useSequence({ steps: ORBITS.length, active: inView, stepMs: 1500, loop: true, holdMs: 1200 })
  const [hovered, setHovered] = useState<string | null>(null)
  const active = hovered ? ORBITS.find((o) => o.id === hovered) : null

  return (
    <div ref={ref} className="w-full max-w-md">
      <div className="relative aspect-[10/9] w-full">
        {/* Connection lines */}
        <svg viewBox="0 0 100 90" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 h-full w-full">
          {ORBITS.map((orbit, i) => {
            const emphasized = hovered === orbit.id || (hovered === null && step === i)
            return (
              <g key={orbit.id}>
                <line
                  x1="50"
                  y1="45"
                  x2={orbit.x}
                  y2={orbit.y * 0.9}
                  stroke={emphasized ? "var(--primary)" : "var(--border)"}
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                  opacity={hovered && !emphasized ? 0.25 : emphasized ? 0.9 : 0.5}
                  className="transition-all duration-300"
                />
                {!reduced && hovered === null && step === i ? (
                  <circle
                    key={`${runId}-${i}`}
                    r="1.2"
                    fill="var(--amber)"
                    className="motion-safe-only"
                    style={{
                      offsetPath: `path("M${orbit.x} ${orbit.y * 0.9} L50 45")`,
                      animation: "packet-edge 1s ease-in-out both",
                    }}
                  />
                ) : null}
              </g>
            )
          })}
        </svg>

        {/* Central placement record */}
        <div className="panel absolute top-1/2 left-1/2 w-52 -translate-x-1/2 -translate-y-1/2 p-4">
          <div className="flex items-center justify-between border-b border-border/60 pb-2">
            <p className="text-node text-[0.62rem] text-primary">PLACEMENT #1048</p>
            <p className="text-node text-[0.55rem] text-muted-foreground/60">SIMULATED</p>
          </div>
          <dl className="mt-2.5 space-y-1.5 font-mono text-[0.65rem]">
            <div className="flex justify-between"><dt className="text-muted-foreground/70">STUDENT</dt><dd className="text-foreground/90">STU-104</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground/70">LOCATION</dt><dd className="text-foreground/90">CLINIC 04</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground/70">STATUS</dt><dd className="text-amber">DOCS READY</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground/70">NEXT</dt><dd className="text-muted-foreground">CONFIRMATION</dd></div>
          </dl>
        </div>

        {/* Orbit systems */}
        {ORBITS.map((orbit, i) => {
          const emphasized = hovered === orbit.id || (hovered === null && step === i)
          return (
            <button
              key={orbit.id}
              type="button"
              onMouseEnter={() => setHovered(orbit.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(orbit.id)}
              onBlur={() => setHovered(null)}
              aria-label={`${orbit.label} (${orbit.sublabel}): ${orbit.tip}`}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 cursor-help rounded-md border bg-card px-3 py-1.5 text-center transition-all duration-300",
                emphasized ? "scale-105 border-amber/60" : "border-border",
                hovered && !emphasized && "opacity-40",
              )}
              style={{ left: `${orbit.x}%`, top: `${orbit.y}%` }}
            >
              <span className="text-node block text-[0.65rem] text-foreground">{orbit.label}</span>
              <span className="block font-mono text-[0.58rem] text-muted-foreground">{orbit.sublabel}</span>
            </button>
          )
        })}
      </div>

      {/* Hover detail */}
      <div className={cn("panel mt-3 p-4 transition-opacity duration-200", active ? "opacity-100" : "opacity-0")}>
        {active ? (
          <>
            <p className="text-xs leading-relaxed text-muted-foreground">{active.tip}</p>
            <p className="text-node mt-2 text-[0.62rem] text-amber/90">{active.path}</p>
          </>
        ) : (
          <p className="text-xs text-muted-foreground">&nbsp;</p>
        )}
      </div>
    </div>
  )
}

/* --------------------------- fragments converge (signature) ----------------------- */

interface ConvergeNode {
  id: string
  label: string
  frag: [number, number]
  conv: [number, number]
  warn?: string
}

const NODES: ConvergeNode[] = [
  { id: "student", label: "STUDENT", frag: [16, 14], conv: [50, 10] },
  { id: "booking", label: "BOOKING", frag: [70, 12], conv: [14, 48], warn: "re-entered" },
  { id: "crm", label: "CRM", frag: [82, 55], conv: [86, 48], warn: "manual update" },
  { id: "milestone", label: "MILESTONE", frag: [30, 70], conv: [50, 72], warn: "waiting" },
  { id: "documents", label: "DOCUMENTS", frag: [60, 84], conv: [50, 92] },
]

export function FragmentsConverge() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })
  const { step, restart, done } = useSequence({ steps: 3, active: inView, stepMs: 2200, startDelayMs: 500, holdMs: 2200 })
  useReplayOnReenter(inView, done, restart)
  const converged = step >= 1

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto h-[380px] w-full max-w-2xl">
      {/* Connection lines appear once converged */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={cn("absolute inset-0 h-full w-full transition-opacity duration-700", step >= 2 ? "opacity-100" : "opacity-0")}>
        {NODES.map((node) => (
          <line
            key={node.id}
            x1="50"
            y1="48"
            x2={node.conv[0]}
            y2={node.conv[1]}
            stroke="var(--primary)"
            strokeOpacity="0.4"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* ACE record appears at the center */}
      <div
        className={cn(
          "absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-4 py-2.5 transition-all duration-700",
          step >= 2 ? "scale-100 border-amber/60 bg-card opacity-100" : "scale-75 border-border bg-card opacity-0",
        )}
      >
        <span className="text-node text-amber">ACE RECORD</span>
      </div>

      {NODES.map((node) => (
        <span
          key={node.id}
          className={cn(
            "text-node absolute -translate-x-1/2 -translate-y-1/2 rounded-md border bg-card px-3 py-1.5 transition-all duration-1000 ease-in-out",
            converged ? "border-primary/45 text-foreground" : "border-dashed border-border text-muted-foreground/80",
          )}
          style={{
            left: `${converged ? node.conv[0] : node.frag[0]}%`,
            top: `${converged ? node.conv[1] : node.frag[1]}%`,
            transform: `translate(-50%, -50%) rotate(${converged ? 0 : [-3, 2, -2, 3, -1][NODES.indexOf(node)]}deg)`,
          }}
        >
          {node.label}
          {node.warn ? (
            <span
              className={cn(
                "absolute -top-2 -right-3 rounded border border-amber/40 bg-background px-1 py-0.5 font-mono text-[0.55rem] text-amber/80 normal-case transition-opacity duration-500",
                converged ? "opacity-0" : "opacity-100",
              )}
            >
              {node.warn}
            </span>
          ) : null}
        </span>
      ))}
    </div>
  )
}

/* ------------------------------- placement timeline ------------------------------- */

const EVENTS = [
  { id: "search", label: "SEARCH", lines: ["Location search", "Map-based discovery", "Placement availability"] },
  { id: "booking", label: "BOOKING", lines: ["Placement created", "Coordinator details", "Student assignment"] },
  { id: "crm", label: "CRM SYNC", lines: ["Pipedrive", "CRM record", "Status synchronization"] },
  { id: "milestone", label: "MILESTONE", lines: ["Placement milestone reached", "Document workflow triggered"] },
  { id: "documents", label: "DOCUMENT PACK", lines: ["PandaDoc", "Document generation", "Signing workflow"] },
  { id: "status", label: "STATUS", lines: ["Coordinator visibility", "Current placement state"] },
]

export function PlacementTimeline() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId } = useSequence({ steps: EVENTS.length + 1, active: inView, stepMs: 600, startDelayMs: 300 })
  const [selected, setSelected] = useState("search")
  const event = EVENTS.find((e) => e.id === selected) ?? EVENTS[0]

  return (
    <div ref={ref}>
      <div className="flex flex-col items-stretch gap-0 md:flex-row md:items-center md:justify-center">
        {EVENTS.map((e, i) => {
          const lit = step > i
          const isSelected = e.id === selected
          return (
            <div key={e.id} className="flex flex-col items-center md:flex-row">
              {i > 0 ? (
                <span aria-hidden="true" className={cn("h-4 w-px md:h-px md:w-8", lit ? "bg-primary/40" : "bg-border", "transition-colors duration-300")} />
              ) : null}
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(e.id)}
                className={cn(
                  "text-node rounded-md border px-3.5 py-2 transition-all duration-300",
                  isSelected
                    ? "scale-[1.04] border-amber/70 bg-amber/10 text-amber"
                    : lit
                      ? "border-primary/45 bg-card text-foreground/85 hover:border-amber/50"
                      : "border-border bg-card text-muted-foreground opacity-60",
                )}
                key={`${runId}-${e.id}`}
              >
                {e.label}
              </button>
            </div>
          )
        })}
      </div>

      <div key={event.id} className="panel mx-auto mt-8 max-w-md p-6 [animation:view-in_0.25s_ease-out_both]">
        <p className="text-node border-b border-border/60 pb-3 text-amber">{event.label}</p>
        <ul className="mt-4 space-y-2">
          {event.lines.map((line) => (
            <li key={line} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <span aria-hidden="true" className="size-1 rounded-full bg-primary/60" />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --------------------------------- layered system --------------------------------- */

const LAYERS = [
  { name: "EXPERIENCE", note: "Next.js · TypeScript · Tailwind · Clerk", items: ["COORDINATOR DASHBOARD", "PLACEMENT VIEWS", "LOCATION SEARCH", "BOOKING", "STATUS"] },
  { name: "APPLICATION", note: "Laravel API", items: ["SCHEDULING", "PERMISSIONS", "PLACEMENT STATE", "BUSINESS RULES"] },
  { name: "INTEGRATIONS", note: "External services", items: ["PIPEDRIVE", "PANDADOC", "MAPBOX", "VERCEL"] },
  { name: "OPERATIONS", note: "Delivery discipline", items: ["DEPLOYMENT", "AUTHENTICATION", "QA", "INTEGRATION VALIDATION"] },
]

export function AceLayers() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25, once: false })
  const { step } = useSequence({ steps: LAYERS.length + 1, active: inView, stepMs: 900, loop: true, holdMs: 2400 })

  return (
    <div ref={ref} className="space-y-0">
      {LAYERS.map((layer, i) => {
        const lit = step > i
        return (
          <div key={layer.name}>
            {i > 0 ? (
              <span aria-hidden="true" className={cn("mx-auto block h-6 w-px transition-colors duration-300 md:ml-[7.5rem]", lit ? "bg-primary/40" : "bg-border")} />
            ) : null}
            <div
              className={cn(
                "flex flex-col gap-3 rounded-lg border p-5 transition-all duration-500 md:flex-row md:items-center md:gap-8",
                step === i + 1 ? "border-amber/40 bg-card" : lit ? "border-primary/30 bg-card" : "border-border bg-card/50 opacity-60",
              )}
            >
              <div className="w-full shrink-0 md:w-52">
                <p className="text-node text-primary">{layer.name}</p>
                <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">{layer.note}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span key={item} className="text-node rounded border bg-background/40 px-2 py-1 text-[0.62rem] text-foreground/80">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* --------------------------------- decision stack --------------------------------- */

const DECISIONS = [
  {
    title: "API-first booking flow",
    body: "Scheduling, profiles, and documents stay consistent across the web app and the CRM because everything moves through one API.",
    flow: ["UI", "API", "PLACEMENT", "CRM"],
  },
  {
    title: "Documents follow milestones",
    body: "PandaDoc document packs are generated from placement milestone events — paperwork follows the workflow instead of someone remembering it.",
    flow: ["MILESTONE", "DOCUMENT EVENT", "PANDADOC", "STATUS"],
  },
  {
    title: "Third-party calls stay controlled",
    body: "Centralized error handling around integration calls, with retries and audit logs so failures are visible instead of silent.",
    flow: ["ACE", "INTEGRATION LAYER", "EXTERNAL SERVICE", "VALIDATION", "AUDIT / ERROR STATE"],
  },
]

export function DecisionStack() {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-4">
      {DECISIONS.map((decision, i) => {
        const isOpen = open === i
        return (
          <div key={decision.title} className={cn("panel overflow-hidden transition-colors duration-300", isOpen && "border-primary/40")}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center gap-5 p-6 text-left"
            >
              <span className={cn("font-mono text-2xl", isOpen ? "text-amber" : "text-muted-foreground/50")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg font-medium text-foreground">{decision.title}</span>
              <ChevronDown size={16} className={cn("text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
            </button>
            {isOpen ? (
              <div className="grid gap-8 border-t border-border/60 p-6 [animation:view-in_0.25s_ease-out_both] md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{decision.body}</p>
                <div className="flex flex-wrap items-center gap-1.5 md:justify-end">
                  {decision.flow.map((node, j) => (
                    <span key={node} className="flex items-center gap-1.5">
                      {j > 0 ? <span aria-hidden="true" className="h-px w-2.5 bg-primary/40" /> : null}
                      <span className="text-node rounded border bg-card px-2 py-1 text-[0.62rem] text-foreground/85">{node}</span>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------- placement flow player ---------------------------- */

const FLOW_EVENTS = [
  { time: "09:02", line: "Coordinator searches location" },
  { time: "09:04", line: "Placement booked" },
  { time: "09:04", line: "CRM synchronized" },
  { time: "10:15", line: "Milestone reached" },
  { time: "10:15", line: "Document generated" },
  { time: "10:16", line: "Coordinator sees updated status" },
]

export function PlacementFlowPlayer() {
  const [step, setStep] = useState(-1)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
    if (step >= FLOW_EVENTS.length) {
      setPlaying(false)
      return
    }
    const timer = setTimeout(() => setStep((s) => s + 1), step === -1 ? 300 : 900)
    return () => clearTimeout(timer)
  }, [playing, step])

  const play = () => {
    setStep(-1)
    setPlaying(true)
  }

  return (
    <div className="panel mx-auto max-w-lg p-6">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <p className="text-node text-muted-foreground">A COORDINATOR'S MORNING — SIMULATED</p>
        <button
          type="button"
          onClick={play}
          disabled={playing}
          className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.08em] text-amber uppercase transition-colors hover:text-amber/80 disabled:opacity-50"
        >
          <Play size={11} />
          {playing ? "Running…" : "Play placement flow"}
        </button>
      </div>
      <div className="mt-4 min-h-[13.5rem] font-mono text-xs leading-7">
        {FLOW_EVENTS.slice(0, Math.max(step, 0)).map((event) => (
          <p key={`${event.time}-${event.line}`} className="text-muted-foreground [animation:node-in_0.3s_ease-out_both]">
            <span className="text-primary">{event.time}</span> {event.line}
          </p>
        ))}
        {step >= FLOW_EVENTS.length ? (
          <p className="text-amber [animation:node-in_0.3s_ease-out_both]">✓ PLACEMENT ON TRACK</p>
        ) : step >= 0 ? (
          <p className="text-muted-foreground/50">…</p>
        ) : (
          <p className="text-muted-foreground/50">press play to simulate one placement</p>
        )}
      </div>
    </div>
  )
}
