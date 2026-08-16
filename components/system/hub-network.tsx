"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  HubNetwork — V2 §25. Connected systems around a hub instead of a logo
  wall. An ambient packet visits one spoke at a time; hovering a spoke
  highlights its path and dims the rest.
*/

export interface HubSpoke {
  id: string
  label: string
  sublabel?: string
  /** Optional hover explanation shown in a floating panel. */
  detail?: string
}

interface HubNetworkProps {
  centerLabel: string
  centerSublabel?: string
  spokes: HubSpoke[]
  footnote?: string
  className?: string
}

const W = 880
const H = 540

export function HubNetwork({ centerLabel, centerSublabel, spokes, footnote, className }: HubNetworkProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, reduced } = useSequence({
    steps: spokes.length,
    active: inView,
    stepMs: 1100,
    startDelayMs: 500,
    loop: true,
    holdMs: 1100,
  })
  const [hovered, setHovered] = useState<string | null>(null)

  const cx = W / 2
  const cy = H / 2
  const rx = 330
  const ry = 195

  const positioned = spokes.map((spoke, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / spokes.length
    return { ...spoke, x: cx + rx * Math.cos(angle), y: cy + ry * Math.sin(angle), index: i }
  })

  return (
    <div ref={ref} className={className}>
      {/* Desktop network */}
      <div className="relative hidden md:block">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${centerLabel} connected to ${spokes.map((s) => s.label).join(", ")}`} className="h-auto w-full">
          {positioned.map((spoke) => {
            const emphasized = hovered === spoke.id || (hovered === null && step === spoke.index)
            const dimmed = hovered !== null && hovered !== spoke.id
            const d = `M${cx} ${cy} L${spoke.x} ${spoke.y}`
            return (
              <g key={spoke.id}>
                <path
                  d={d}
                  fill="none"
                  stroke={emphasized ? "var(--primary)" : "var(--border)"}
                  strokeWidth={emphasized ? 1.4 : 1}
                  opacity={dimmed ? 0.2 : emphasized ? 0.9 : 0.45}
                  className="transition-all duration-300"
                />
                {!reduced && hovered === null && step === spoke.index ? (
                  <circle
                    key={`${runId}-${spoke.index}`}
                    r="3"
                    fill="var(--amber)"
                    className="motion-safe-only"
                    style={{ offsetPath: `path("${d}")`, animation: "packet-edge 0.9s ease-in-out both" }}
                  />
                ) : null}
              </g>
            )
          })}

          {positioned.map((spoke) => {
            const emphasized = hovered === spoke.id || (hovered === null && step === spoke.index)
            const dimmed = hovered !== null && hovered !== spoke.id
            const w = Math.max(spoke.label.length * 8.2 + 26, 88)
            const h = spoke.sublabel ? 44 : 30
            return (
              <g
                key={spoke.id}
                tabIndex={0}
                role="img"
                aria-label={spoke.sublabel ? `${spoke.label}: ${spoke.sublabel}` : spoke.label}
                onMouseEnter={() => setHovered(spoke.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(spoke.id)}
                onBlur={() => setHovered(null)}
                className="svg-node cursor-help outline-none transition-opacity duration-300"
                opacity={dimmed ? 0.35 : 1}
              >
                <rect
                  x={spoke.x - w / 2}
                  y={spoke.y - h / 2}
                  width={w}
                  height={h}
                  rx={7}
                  fill="var(--card)"
                  stroke={emphasized ? "var(--amber)" : "var(--border)"}
                  strokeWidth={emphasized ? 1.3 : 1}
                  className="transition-all duration-300"
                />
                <text
                  x={spoke.x}
                  y={spoke.sublabel ? spoke.y - 3 : spoke.y + 3.5}
                  textAnchor="middle"
                  fill="color-mix(in oklab, var(--foreground) 90%, transparent)"
                  style={{ font: "600 10.5px var(--font-geist-mono), monospace", letterSpacing: "0.07em" }}
                >
                  {spoke.label}
                </text>
                {spoke.sublabel ? (
                  <text
                    x={spoke.x}
                    y={spoke.y + 12}
                    textAnchor="middle"
                    fill="var(--muted-foreground)"
                    style={{ font: "400 8.5px var(--font-geist-mono), monospace", letterSpacing: "0.05em" }}
                  >
                    {spoke.sublabel}
                  </text>
                ) : null}
              </g>
            )
          })}

          {/* Hub */}
          <g className="svg-node">
            <rect x={cx - 85} y={cy - 30} width={170} height={60} rx={10} fill="var(--card)" stroke="var(--primary)" strokeWidth={1.3} />
            <text x={cx} y={centerSublabel ? cy - 2 : cy + 4} textAnchor="middle" fill="var(--foreground)" style={{ font: "600 13px var(--font-geist-mono), monospace", letterSpacing: "0.08em" }}>
              {centerLabel}
            </text>
            {centerSublabel ? (
              <text x={cx} y={cy + 16} textAnchor="middle" fill="var(--muted-foreground)" style={{ font: "400 9px var(--font-geist-mono), monospace", letterSpacing: "0.06em" }}>
                {centerSublabel}
              </text>
            ) : null}
          </g>
        </svg>

        {/* Hover detail panel */}
        {(() => {
          const spoke = hovered ? spokes.find((s) => s.id === hovered) : null
          if (!spoke?.detail) return null
          return (
            <div className="pointer-events-none absolute top-0 right-0 w-64 rounded-md border bg-popover p-4 shadow-lg">
              <p className="text-node text-primary">{spoke.label}</p>
              {spoke.sublabel ? <p className="text-node mt-0.5 text-[0.62rem] text-muted-foreground">{spoke.sublabel}</p> : null}
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{spoke.detail}</p>
            </div>
          )
        })()}
      </div>

      {/* Mobile: grouped list */}
      <div className="space-y-3 md:hidden">
        <p className="text-node rounded-md border border-primary/50 bg-card px-3 py-2 text-center text-foreground">{centerLabel}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {spokes.map((spoke) => (
            <span key={spoke.id} className="rounded-md border bg-card px-2.5 py-1.5 text-center">
              <span className="text-node block text-[0.65rem] text-foreground">{spoke.label}</span>
              {spoke.sublabel ? <span className="block font-mono text-[0.58rem] text-muted-foreground">{spoke.sublabel}</span> : null}
            </span>
          ))}
        </div>
      </div>

      {footnote ? <p className="text-node mt-6 text-center text-muted-foreground/60">{footnote}</p> : null}
    </div>
  )
}
