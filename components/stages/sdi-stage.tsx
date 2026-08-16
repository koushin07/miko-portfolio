"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"

/*
  Atlas SDI Report Engine — Work spec §10. Spatial information converges
  through PostGIS and GeoServer into the report engine, and a structured
  legal document materializes line by line beside it.

  Steps: 0 SPATIAL DATA · 1 POSTGIS + GEOSERVER · 2 REPORT ENGINE ·
         3 PDF + document rows · 4 PDF ready · 5 hold
*/

const W = 360
const H = 430

interface SdiNode {
  id: string
  label: string
  sublabel?: string
  x: number
  y: number
  w: number
  h: number
  activateStep: number
}

const NODES: SdiNode[] = [
  { id: "data", label: "SPATIAL DATA", sublabel: "state + federal layers", x: 180, y: 38, w: 200, h: 46, activateStep: 0 },
  { id: "postgis", label: "POSTGIS", x: 92, y: 148, w: 124, h: 34, activateStep: 1 },
  { id: "geoserver", label: "GEOSERVER", x: 268, y: 148, w: 134, h: 34, activateStep: 1 },
  { id: "engine", label: "REPORT ENGINE", sublabel: "FastAPI · Celery · WeasyPrint", x: 180, y: 258, w: 212, h: 50, activateStep: 2 },
  { id: "pdf", label: "PDF / REPORT", x: 180, y: 372, w: 156, h: 36, activateStep: 3 },
]

const EDGES: { id: string; d: string; fireStep: number }[] = [
  { id: "e0", d: "M180 61 C180 96 92 98 92 131", fireStep: 1 },
  { id: "e1", d: "M180 61 C180 96 268 98 268 131", fireStep: 1 },
  { id: "e2", d: "M92 165 C92 202 180 200 180 233", fireStep: 2 },
  { id: "e3", d: "M268 165 C268 202 180 200 180 233", fireStep: 2 },
  { id: "e4", d: "M180 283 V354", fireStep: 3 },
]

const REPORT_ROWS = [
  { label: "PARCEL / APN", note: "resolved" },
  { label: "FLOOD", note: "determined" },
  { label: "FIRE SEVERITY", note: "determined" },
  { label: "SEISMIC", note: "determined" },
  { label: "DAM INUNDATION", note: "determined" },
]

export function SdiStage({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, reduced, done } = useSequence({ steps: 6, active: inView, stepMs: 850, startDelayMs: 350 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-24", className)}>
      {/* Converging pipeline */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Pipeline: state and federal spatial data flows into PostGIS and GeoServer, converges in the report engine, and produces the PDF report"
        className="h-auto w-full max-w-[340px] shrink-0"
      >
        {EDGES.map((edge) => (
          <path
            key={edge.id}
            d={edge.d}
            fill="none"
            strokeWidth="1"
            stroke={step >= edge.fireStep ? "color-mix(in oklab, var(--primary) 45%, var(--border))" : "var(--border)"}
            className="transition-all duration-300"
            opacity={step >= edge.fireStep ? 1 : 0.55}
          />
        ))}

        {!reduced &&
          EDGES.filter((e) => e.fireStep === step).map((edge) => (
            <circle
              key={`${runId}-${edge.id}`}
              r="3"
              fill="var(--amber)"
              className="motion-safe-only"
              style={{ offsetPath: `path("${edge.d}")`, animation: "packet-edge 0.6s ease-in-out both" }}
            />
          ))}

        {NODES.map((node) => {
          const state = step > node.activateStep ? "past" : step === node.activateStep ? "arriving" : "future"
          return (
            <g
              key={node.id}
              className={cn("svg-node transition-opacity duration-300", state === "arriving" && "[animation:svg-arrive_0.7s_ease-out_1]")}
              opacity={state === "future" ? 0.45 : 1}
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
                  state === "arriving"
                    ? "var(--amber)"
                    : state === "past"
                      ? "color-mix(in oklab, var(--primary) 55%, var(--border))"
                      : "var(--border)"
                }
                strokeWidth={state === "arriving" ? 1.4 : 1}
              />
              <text
                x={node.x}
                y={node.sublabel ? node.y - 2 : node.y + 4}
                textAnchor="middle"
                fill={state === "future" ? "var(--muted-foreground)" : "color-mix(in oklab, var(--foreground) 92%, transparent)"}
                style={{ font: "600 11px var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}
              >
                {node.label}
              </text>
              {node.sublabel ? (
                <text
                  x={node.x}
                  y={node.y + 14}
                  textAnchor="middle"
                  fill="var(--muted-foreground)"
                  style={{ font: "400 8.5px var(--font-geist-mono), monospace", letterSpacing: "0.06em" }}
                >
                  {node.sublabel}
                </text>
              ) : null}
            </g>
          )
        })}
      </svg>

      {/* The report materializes */}
      <div
        aria-hidden="true"
        className={cn(
          "relative w-full max-w-[440px] rounded-lg border bg-card/70 p-6 transition-all duration-500",
          step >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-30",
        )}
      >
        <p className="text-node border-b border-border/60 pb-3 text-primary">NATURAL HAZARD DISCLOSURE</p>
        <div className="mt-4 space-y-2.5">
          {REPORT_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                "flex items-center justify-between border-b border-border/40 pb-2 font-mono text-xs transition-all duration-400",
                step >= 3 ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0",
              )}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <span className="text-muted-foreground">{row.label}</span>
              <span className="text-foreground/85">
                <span className="text-amber">✓</span> {row.note}
              </span>
            </div>
          ))}
        </div>
        <div
          className={cn(
            "mt-4 flex items-center justify-between transition-opacity duration-500",
            step >= 4 ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="text-node text-muted-foreground/70">STATUTORY FORMAT</span>
          <span className="text-node rounded border border-amber/50 px-2 py-1 text-amber">PDF READY</span>
        </div>
        {/* Page corner fold */}
        <span className="absolute top-0 right-0 size-5 rounded-bl-lg border-b border-l border-border bg-background" />
      </div>
    </div>
  )
}
