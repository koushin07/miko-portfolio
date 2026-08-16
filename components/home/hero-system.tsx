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
const H = 600

interface HeroNode {
  id: string
  label: string
  x: number
  y: number
  w: number
  activateStep: number
  tip: string
}

const NODES: HeroNode[] = [
  { id: "idea", label: "CLIENT IDEA", x: 190, y: 40, w: 104, activateStep: 0, tip: "Every system starts as a business problem." },
  { id: "arch", label: "ARCHITECTURE", x: 190, y: 120, w: 120, activateStep: 1, tip: "Data, services, and boundaries designed before code." },
  { id: "frontend", label: "FRONTEND", x: 75, y: 205, w: 90, activateStep: 2, tip: "Next.js and React interfaces people actually use." },
  { id: "api", label: "API", x: 190, y: 205, w: 58, activateStep: 2, tip: "FastAPI, Laravel, and Node services behind them." },
  { id: "database", label: "DATABASE", x: 305, y: 205, w: 90, activateStep: 2, tip: "Persistent application data, state, and knowledge." },
  { id: "ai", label: "AI", x: 190, y: 290, w: 50, activateStep: 3, tip: "RAG, embeddings, and structured outputs." },
  { id: "integrations", label: "INTEGRATIONS", x: 190, y: 370, w: 120, activateStep: 4, tip: "CRMs, payments, documents, email, calendars." },
  { id: "testing", label: "TESTING", x: 115, y: 450, w: 80, activateStep: 5, tip: "Behavior validated before release." },
  { id: "security", label: "SECURITY", x: 265, y: 450, w: 86, activateStep: 5, tip: "Auth, access control, safe failure." },
  { id: "production", label: "PRODUCTION", x: 190, y: 530, w: 108, activateStep: 6, tip: "Deployed, monitored, maintained." },
]

interface HeroEdge {
  id: string
  d: string
  fireStep: number
  ends: [string, string]
}

const EDGES: HeroEdge[] = [
  { id: "e0", d: "M190 54 V106", fireStep: 1, ends: ["idea", "arch"] },
  { id: "e1", d: "M190 134 C190 168 75 162 75 191", fireStep: 2, ends: ["arch", "frontend"] },
  { id: "e2", d: "M190 134 V191", fireStep: 2, ends: ["arch", "api"] },
  { id: "e3", d: "M190 134 C190 168 305 162 305 191", fireStep: 2, ends: ["arch", "database"] },
  { id: "e4", d: "M75 219 C75 258 190 252 190 276", fireStep: 3, ends: ["frontend", "ai"] },
  { id: "e5", d: "M190 219 V276", fireStep: 3, ends: ["api", "ai"] },
  { id: "e6", d: "M305 219 C305 258 190 252 190 276", fireStep: 3, ends: ["database", "ai"] },
  { id: "e7", d: "M190 304 V356", fireStep: 4, ends: ["ai", "integrations"] },
  { id: "e8", d: "M190 384 C190 415 115 412 115 436", fireStep: 5, ends: ["integrations", "testing"] },
  { id: "e9", d: "M190 384 C190 415 265 412 265 436", fireStep: 5, ends: ["integrations", "security"] },
  { id: "e10", d: "M115 464 C115 498 190 494 190 516", fireStep: 6, ends: ["testing", "production"] },
  { id: "e11", d: "M265 464 C265 498 190 494 190 516", fireStep: 6, ends: ["security", "production"] },
]

const STEPS = 8 // 0..6 activation phases, 7 = closing caption

export function HeroSystem({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })
  const { step, runId, reduced } = useSequence({ steps: STEPS, active: inView, stepMs: 780, startDelayMs: 400 })
  const [hovered, setHovered] = useState<string | null>(null)

  const hoverEdges = hovered ? EDGES.filter((e) => e.ends.includes(hovered)).map((e) => e.id) : []
  const hoverNode = hovered ? NODES.find((n) => n.id === hovered) : null

  return (
    <div ref={ref} className={cn("relative w-full max-w-[460px]", className)}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A client idea executing through architecture, frontend, API, database, AI, integrations, testing, and security into production" className="h-auto w-full">
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
          y={585}
          textAnchor="middle"
          fill="var(--muted-foreground)"
          className={cn("transition-opacity duration-700", step >= 7 ? "opacity-100" : "opacity-0")}
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
