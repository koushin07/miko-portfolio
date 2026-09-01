"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  The hero's living system — V2 direction §6-§9.
  Idle: everything dim. On entry, a deliberate execution runs: one event
  packet travels edge by edge, and each tier wakes as the packet arrives.
  Hovering a node highlights its paths, dims the rest, and explains it.
*/

const W = 380
const H = 500

interface HeroNode {
  id: string
  label: string
  x: number
  y: number
  w: number
  activateStep: number
  tip: string
}

/* Selling-system spec §5: BUSINESS PROBLEM → WORKFLOW →
   (AI | AUTOMATION | INTEGRATIONS) → FULL-STACK SYSTEM → PRODUCTION. */
const NODES: HeroNode[] = [
  { id: "business", label: "BUSINESS PROBLEM", x: 190, y: 40, w: 140, activateStep: 0, tip: "Every system starts as a messy business process." },
  { id: "workflow", label: "WORKFLOW", x: 190, y: 125, w: 92, activateStep: 1, tip: "The process mapped end to end before any code." },
  { id: "ai", label: "AI", x: 64, y: 215, w: 50, activateStep: 2, tip: "RAG, embeddings, structured outputs — where intelligence helps." },
  { id: "automation", label: "AUTOMATION", x: 190, y: 215, w: 98, activateStep: 2, tip: "n8n pipelines, background jobs, documents, notifications." },
  { id: "integrations", label: "INTEGRATIONS", x: 312, y: 215, w: 106, activateStep: 2, tip: "CRMs, payments, documents, calendars — connected." },
  { id: "fullstack", label: "FULL-STACK SYSTEM", x: 190, y: 310, w: 148, activateStep: 3, tip: "Next.js and React on FastAPI, Laravel, and PostgreSQL — one system." },
  { id: "production", label: "PRODUCTION", x: 190, y: 400, w: 104, activateStep: 4, tip: "Deployed, tested, monitored, maintained." },
]

interface HeroEdge {
  id: string
  d: string
  fireStep: number
  ends: [string, string]
}

const EDGES: HeroEdge[] = [
  { id: "e0", d: "M190 54 V111", fireStep: 1, ends: ["business", "workflow"] },
  { id: "e1", d: "M190 139 C190 172 64 168 64 201", fireStep: 2, ends: ["workflow", "ai"] },
  { id: "e2", d: "M190 139 V201", fireStep: 2, ends: ["workflow", "automation"] },
  { id: "e3", d: "M190 139 C190 172 312 168 312 201", fireStep: 2, ends: ["workflow", "integrations"] },
  { id: "e4", d: "M64 229 C64 268 190 262 190 296", fireStep: 3, ends: ["ai", "fullstack"] },
  { id: "e5", d: "M190 229 V296", fireStep: 3, ends: ["automation", "fullstack"] },
  { id: "e6", d: "M312 229 C312 268 190 262 190 296", fireStep: 3, ends: ["integrations", "fullstack"] },
  { id: "e7", d: "M190 324 V386", fireStep: 4, ends: ["fullstack", "production"] },
]

const STEPS = 6 // 0..4 activation phases, 5 = closing caption

export function HeroSystem({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })
  const { step, runId, reduced } = useSequence({
    steps: STEPS,
    active: inView,
    stepMs: 780,
    startDelayMs: 400,
    loop: true,
    holdMs: 2600,
  })
  const [hovered, setHovered] = useState<string | null>(null)

  const hoverEdges = hovered ? EDGES.filter((e) => e.ends.includes(hovered)).map((e) => e.id) : []
  const hoverNode = hovered ? NODES.find((n) => n.id === hovered) : null

  return (
    <div ref={ref} className={cn("relative w-full max-w-[460px]", className)}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A business problem flowing through workflow analysis into AI, automation, and integrations, combined into a full-stack system, shipped to production" className="h-auto w-full">
        {EDGES.map((edge) => {
          const traversed = step >= edge.fireStep
          const emphasized = hoverEdges.includes(edge.id)
          const dimmed = hovered !== null && !emphasized
          return (
            <path
              key={edge.id}
              d={edge.d}
              fill="none"
              strokeWidth={emphasized ? 1.5 : 1}
              stroke={emphasized ? "var(--primary)" : traversed ? "color-mix(in oklab, var(--primary) 45%, var(--border))" : "var(--border)"}
              className="transition-all duration-300"
              opacity={dimmed ? 0.25 : traversed || emphasized ? 1 : 0.5}
            />
          )
        })}

        {/* One event, one edge at a time */}
        {!reduced &&
          EDGES.filter((e) => e.fireStep === step).map((edge) => (
            <circle
              key={`${runId}-${edge.id}`}
              r="3"
              fill="var(--amber)"
              className="motion-safe-only"
              style={{ offsetPath: `path("${edge.d}")`, animation: "packet-edge 0.55s ease-in-out both" }}
            />
          ))}

        {NODES.map((node) => {
          const state = step > node.activateStep ? "past" : step === node.activateStep ? "arriving" : "future"
          const isHovered = hovered === node.id
          const dimmed = hovered !== null && !isHovered
          return (
            <g
              key={node.id}
              tabIndex={0}
              role="button"
              aria-label={`${node.label}: ${node.tip}`}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(node.id)}
              onBlur={() => setHovered(null)}
              className={cn("svg-node cursor-help outline-none transition-opacity duration-300", state === "arriving" && "[animation:svg-arrive_0.7s_ease-out_1]")}
              opacity={dimmed ? 0.3 : state === "future" ? 0.4 : 1}
            >
              <rect
                x={node.x - node.w / 2}
                y={node.y - 14}
                width={node.w}
                height={28}
                rx={6}
                fill="var(--card)"
                className="transition-all duration-300"
                stroke={
                  isHovered || state === "arriving"
                    ? "var(--amber)"
                    : state === "past"
                      ? "color-mix(in oklab, var(--primary) 55%, var(--border))"
                      : "var(--border)"
                }
                strokeWidth={isHovered || state === "arriving" ? 1.4 : 1}
              />
              <text
                x={node.x}
                y={node.y + 3.5}
                textAnchor="middle"
                fill={state === "future" && !isHovered ? "var(--muted-foreground)" : "color-mix(in oklab, var(--foreground) 92%, transparent)"}
                style={{ font: "600 10.5px var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}
              >
                {node.label}
              </text>
            </g>
          )
        })}

        <text
          x={190}
          y={460}
          textAnchor="middle"
          fill="var(--muted-foreground)"
          className={cn("transition-opacity duration-700", step >= 5 ? "opacity-100" : "opacity-0")}
          style={{ font: "500 11.5px var(--font-geist-mono), monospace", letterSpacing: "0.1em" }}
        >
          BUILT <tspan fill="var(--amber)">→</tspan> TESTED <tspan fill="var(--amber)">→</tspan> SHIPPED
        </text>
      </svg>

      {hoverNode ? (
        <div
          className="pointer-events-none absolute z-20 w-48 -translate-x-1/2 rounded-md border bg-popover p-3 shadow-lg"
          style={{
            left: `${(hoverNode.x / W) * 100}%`,
            top: `${((hoverNode.y + 22) / H) * 100}%`,
          }}
        >
          <p className="text-node text-primary">{hoverNode.label}</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{hoverNode.tip}</p>
        </div>
      ) : null}
    </div>
  )
}
