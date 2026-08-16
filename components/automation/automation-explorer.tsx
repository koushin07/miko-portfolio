"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"
import { DocumentFactory } from "@/components/automation/document-factory"
import { FlowStage } from "@/components/system/flow-stage"

/*
  AutomationExplorer — V2 §14-§19. Overview → subsystem → implementation.
  The high-level n8n architecture runs a continuous event cycle; hovering a
  subsystem focuses its path and explains it; clicking DOCUMENTS zooms into
  the Document Factory workflow.
*/

const W = 980
const H = 610

interface ArchNode {
  id: string
  label: string
  sublabel?: string
  x: number
  y: number
  w: number
  h: number
  activateStep: number
  info: string
  stack?: string
  clickable?: boolean
}

const ARCH_NODES: ArchNode[] = [
  { id: "webhook", label: "WEBHOOK", x: 300, y: 50, w: 116, h: 30, activateStep: 0, info: "External systems push events into the platform the moment they happen.", stack: "HTTP · Supabase" },
  { id: "schedule", label: "SCHEDULE", x: 490, y: 50, w: 116, h: 30, activateStep: 0, info: "Time-driven workflows run without anyone pressing a button.", stack: "Cron" },
  { id: "form", label: "FORM", x: 680, y: 50, w: 116, h: 30, activateStep: 0, info: "Client intake enters as structured data from day one.", stack: "SurveyJS" },
  { id: "engine", label: "n8n · AUTOMATION ENGINE", sublabel: "Validate · Business logic · Transform · Retry", x: 490, y: 195, w: 280, h: 64, activateStep: 1, info: "Every event is validated, transformed, and routed here — with retries, error paths, and idempotency built in.", stack: "Self-hosted n8n" },
  { id: "crm", label: "CRM", sublabel: "SmartSuite", x: 230, y: 360, w: 170, h: 48, activateStep: 2, info: "Client records, onboarding, and case data stay in sync automatically.", stack: "SmartSuite" },
  { id: "ai", label: "AI", sublabel: "OpenAI · Gemini", x: 490, y: 360, w: 170, h: 48, activateStep: 2, info: "Unstructured documents become structured data through AI extraction.", stack: "OpenAI · Google Gemini" },
  { id: "documents", label: "DOCUMENTS", sublabel: "DocxTemplater · Gotenberg", x: 750, y: 360, w: 190, h: 48, activateStep: 2, info: "Document generation, conversion, and delivery — click to open the Document Factory.", stack: "DocxTemplater · Gotenberg · Supabase Storage", clickable: true },
  { id: "storage", label: "DATABASE / STORAGE", sublabel: "Supabase · PostgreSQL", x: 490, y: 475, w: 220, h: 48, activateStep: 3, info: "State, files, and records — the platform's source of truth.", stack: "Supabase · PostgreSQL" },
  { id: "output", label: "OUTPUT", sublabel: "Email · PDF · Notifications", x: 490, y: 572, w: 210, h: 44, activateStep: 4, info: "Finished work reaches people: emails, documents, calendar events, alerts.", stack: "Brevo · Pushover · Gmail" },
]

interface ArchEdge {
  id: string
  d: string
  fireStep: number
  ends: [string, string]
}

const ARCH_EDGES: ArchEdge[] = [
  { id: "t1", d: "M300 65 C300 115 430 110 448 163", fireStep: 1, ends: ["webhook", "engine"] },
  { id: "t2", d: "M490 65 V163", fireStep: 1, ends: ["schedule", "engine"] },
  { id: "t3", d: "M680 65 C680 115 550 110 532 163", fireStep: 1, ends: ["form", "engine"] },
  { id: "b1", d: "M490 227 C490 285 230 290 230 336", fireStep: 2, ends: ["engine", "crm"] },
  { id: "b2", d: "M490 227 V336", fireStep: 2, ends: ["engine", "ai"] },
  { id: "b3", d: "M490 227 C490 285 750 290 750 336", fireStep: 2, ends: ["engine", "documents"] },
  { id: "s1", d: "M230 384 C230 430 490 425 490 451", fireStep: 3, ends: ["crm", "storage"] },
  { id: "s2", d: "M490 384 V451", fireStep: 3, ends: ["ai", "storage"] },
  { id: "s3", d: "M750 384 C750 430 490 425 490 451", fireStep: 3, ends: ["documents", "storage"] },
  { id: "o1", d: "M490 499 V550", fireStep: 4, ends: ["storage", "output"] },
]

const CYCLE_STEPS = 6 // 0 triggers, 1 engine, 2 branches, 3 storage, 4 output, 5 hold

export function AutomationExplorer({ className }: { className?: string }) {
  const [view, setView] = useState<"overview" | "factory">("overview")
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25, once: false })
  const { step, runId, reduced } = useSequence({
    steps: CYCLE_STEPS,
    active: inView && view === "overview",
    stepMs: 950,
    startDelayMs: 400,
    loop: true,
    holdMs: 1800,
  })
  const [hovered, setHovered] = useState<string | null>(null)

  const hoverEdges = hovered ? ARCH_EDGES.filter((e) => e.ends.includes(hovered)).map((e) => e.id) : []
  const hoverNode = hovered ? ARCH_NODES.find((n) => n.id === hovered) : null

  if (view === "factory") {
    return (
      <div className={cn("[animation:view-in_0.4s_ease-out_both]", className)}>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setView("overview")}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <ArrowLeft size={12} />
            Automation architecture
          </button>
          <p className="text-node text-muted-foreground/70">SUBSYSTEM — DOCUMENTS</p>
        </div>
        <h3 className="font-mono text-2xl tracking-tight text-foreground md:text-3xl">DOCUMENT FACTORY</h3>
        <p className="mt-2 text-base text-muted-foreground">From client intake to finished PDF — automatically.</p>
        <div className="mt-10">
          <DocumentFactory />
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn("[animation:view-in_0.4s_ease-out_both]", className)}>
      {/* Desktop architecture */}
      <div className="relative hidden md:block">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="n8n platform architecture: webhook, schedule, and form triggers feed the automation engine, which routes events to CRM, AI, and documents, converging into database and storage, then outputs: email, PDF, notifications"
          className="h-auto w-full"
        >
          {ARCH_EDGES.map((edge) => {
            const traversed = step >= edge.fireStep
            const emphasized = hoverEdges.includes(edge.id)
            const dimmed = hovered !== null && !emphasized
            return (
              <path
                key={edge.id}
                d={edge.d}
                fill="none"
                strokeWidth={emphasized ? 1.6 : 1}
                stroke={emphasized ? "var(--primary)" : traversed ? "color-mix(in oklab, var(--primary) 40%, var(--border))" : "var(--border)"}
                className="transition-all duration-300"
                opacity={dimmed ? 0.2 : traversed || emphasized ? 1 : 0.55}
              />
            )
          })}

          {!reduced &&
            ARCH_EDGES.filter((e) => e.fireStep === step && (hovered === null || hoverEdges.includes(e.id))).map((edge) => (
              <circle
                key={`${runId}-${step}-${edge.id}`}
                r="3.5"
                fill="var(--amber)"
                className="motion-safe-only"
                style={{ offsetPath: `path("${edge.d}")`, animation: "packet-edge 0.7s ease-in-out both" }}
              />
            ))}

          {ARCH_NODES.map((node) => {
            const state = step > node.activateStep ? "past" : step === node.activateStep ? "arriving" : "future"
            const isHovered = hovered === node.id
            const dimmed = hovered !== null && !isHovered
            return (
              <g
                key={node.id}
                tabIndex={0}
                role="button"
                aria-label={`${node.label}: ${node.info}`}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(node.id)}
                onBlur={() => setHovered(null)}
                onClick={() => node.clickable && setView("factory")}
                onKeyDown={(e) => {
                  if (node.clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault()
                    setView("factory")
                  }
                }}
                className={cn(
                  "svg-node outline-none transition-opacity duration-300",
                  node.clickable ? "cursor-pointer" : "cursor-help",
                  state === "arriving" && "[animation:svg-arrive_0.7s_ease-out_1]",
                )}
                opacity={dimmed ? 0.3 : state === "future" ? 0.45 : 1}
              >
                <rect
                  x={node.x - node.w / 2}
                  y={node.y - node.h / 2}
                  width={node.w}
                  height={node.h}
                  rx={8}
                  fill="var(--card)"
                  className="transition-all duration-300"
                  stroke={
                    isHovered || state === "arriving"
                      ? "var(--amber)"
                      : state === "past"
                        ? "color-mix(in oklab, var(--primary) 50%, var(--border))"
                        : "var(--border)"
                  }
                  strokeWidth={isHovered || state === "arriving" ? 1.4 : 1}
                />
                <text
                  x={node.x}
                  y={node.sublabel ? node.y - 3 : node.y + 3.5}
                  textAnchor="middle"
                  fill="color-mix(in oklab, var(--foreground) 92%, transparent)"
                  style={{ font: "600 11px var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}
                >
                  {node.label}
                </text>
                {node.sublabel ? (
                  <text
                    x={node.x}
                    y={node.y + 13}
                    textAnchor="middle"
                    fill="var(--muted-foreground)"
                    style={{ font: "400 9px var(--font-geist-mono), monospace", letterSpacing: "0.06em" }}
                  >
                    {node.sublabel}
                  </text>
                ) : null}
                {node.clickable ? (
                  <text
                    x={node.x}
                    y={node.y + node.h / 2 + 14}
                    textAnchor="middle"
                    fill="var(--amber)"
                    className={cn("transition-opacity duration-300", isHovered ? "opacity-100" : "opacity-0")}
                    style={{ font: "500 9px var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}
                  >
                    CLICK TO OPEN ↗
                  </text>
                ) : null}
              </g>
            )
          })}
        </svg>

        {/* Subsystem panel */}
        <div
          className={cn(
            "pointer-events-none absolute top-0 right-0 w-64 rounded-md border bg-popover p-4 shadow-lg transition-opacity duration-200",
            hoverNode ? "opacity-100" : "opacity-0",
          )}
        >
          {hoverNode ? (
            <>
              <p className="text-node text-primary">{hoverNode.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hoverNode.info}</p>
              {hoverNode.stack ? (
                <p className="text-node mt-3 border-t border-border/60 pt-2.5 text-muted-foreground/80">{hoverNode.stack}</p>
              ) : null}
            </>
          ) : null}
        </div>
      </div>

      {/* Mobile: same story, vertical */}
      <div className="md:hidden">
        <MobileArchitecture active={inView} />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6">
        <p className="text-node text-muted-foreground">
          <span className="font-mono text-2xl text-foreground">42</span>&ensp;PRODUCTION WORKFLOWS · ONE BACKBONE
        </p>
        <button
          type="button"
          onClick={() => setView("factory")}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-amber/60 hover:text-amber"
        >
          Open the Document Factory →
        </button>
      </div>
    </div>
  )
}

function MobileArchitecture({ active }: { active: boolean }) {
  const { step, runId } = useSequence({ steps: 8, active, stepMs: 800, loop: true, holdMs: 1800 })
  return (
    <FlowStage
      step={step}
      runId={runId}
      nodes={[
        { id: "trigger", label: "TRIGGER", sublabel: "Webhook · Schedule · Form", detail: "Events enter the platform — pushed, scheduled, or submitted." },
        { id: "engine", label: "n8n ENGINE", sublabel: "Validate · Transform · Retry", detail: "Every event is validated, transformed, and routed with retries and error paths." },
        { id: "crm", label: "CRM", sublabel: "SmartSuite", detail: "Client records and onboarding stay in sync automatically." },
        { id: "ai", label: "AI", sublabel: "OpenAI · Gemini", detail: "Unstructured documents become structured data." },
        { id: "documents", label: "DOCUMENTS", sublabel: "DocxTemplater · Gotenberg", detail: "Document generation, conversion, and delivery." },
        { id: "storage", label: "DATABASE / STORAGE", sublabel: "Supabase · PostgreSQL", detail: "State, files, and records — the source of truth." },
        { id: "output", label: "OUTPUT", sublabel: "Email · PDF · Notify", detail: "Finished work reaches people." },
      ]}
    />
  )
}
