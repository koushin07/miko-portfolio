"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

/*
  FlowStage — a vertical system flow that visibly executes.
  Nodes start dim, a packet travels each connector, and the receiving node
  pulses awake as the event arrives. Hover/tap a node for its explanation.
*/

export interface FlowNode {
  id: string
  label: string
  sublabel?: string
  detail?: string
}

interface FlowStageProps {
  nodes: FlowNode[]
  /** Current sequence step from useSequence: node i is live when step >= i. */
  step: number
  /** Remount key for one-shot packet animations across loops. */
  runId?: number
  compact?: boolean
  showChecks?: boolean
  /** Which side detail tooltips open on (desktop) — use "left" when the flow sits near the right edge. */
  tooltipSide?: "right" | "left"
  className?: string
}

export function FlowStage({ nodes, step, runId = 0, compact = false, showChecks = false, tooltipSide = "right", className }: FlowStageProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className={cn("flex flex-col items-center", className)} role="list" aria-label="System flow">
      {nodes.map((node, i) => {
        const state = step > i ? "past" : step === i ? "arriving" : "future"
        const open = openId === node.id
        return (
          <div key={node.id} className="flex w-full flex-col items-center">
            {i > 0 ? (
              <span
                aria-hidden="true"
                className={cn(
                  "relative block w-px",
                  compact ? "h-5" : "h-8",
                  step >= i ? "bg-primary/40" : "bg-border",
                  "transition-colors duration-300",
                )}
              >
                {step === i ? (
                  <span
                    key={`${runId}-${i}`}
                    className="motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y-once_0.4s_ease-in_both]"
                  />
                ) : null}
              </span>
            ) : null}

            <div role="listitem" className="relative">
              <button
                type="button"
                onClick={() => node.detail && setOpenId(open ? null : node.id)}
                onMouseEnter={() => node.detail && setOpenId(node.id)}
                onMouseLeave={() => setOpenId((cur) => (cur === node.id ? null : cur))}
                onFocus={() => node.detail && setOpenId(node.id)}
                onBlur={() => setOpenId((cur) => (cur === node.id ? null : cur))}
                aria-expanded={node.detail ? open : undefined}
                className={cn(
                  "rounded-md border bg-card text-center transition-all duration-300",
                  compact ? "px-2.5 py-1" : "px-4 py-2",
                  node.detail ? "cursor-help" : "cursor-default",
                  state === "future" && "border-border opacity-45",
                  state === "arriving" && "scale-[1.04] border-amber/70 opacity-100 [animation:pulse-ring_0.9s_ease-out_1]",
                  state === "past" && "border-primary/45 opacity-100",
                )}
              >
                <span
                  className={cn(
                    "text-node flex items-center justify-center gap-1.5",
                    compact && "text-[0.65rem]",
                    state === "future" ? "text-muted-foreground" : "text-foreground",
                  )}
                >
                  {showChecks && state === "past" ? <span className="text-amber">✓</span> : null}
                  {node.label}
                </span>
                {node.sublabel ? (
                  <span className="mt-0.5 block font-mono text-[0.6rem] tracking-[0.08em] text-muted-foreground uppercase">
                    {node.sublabel}
                  </span>
                ) : null}
              </button>

              {node.detail && open ? (
                <div
                  className={cn(
                    "absolute top-1/2 z-20 w-52 -translate-y-1/2 rounded-md border bg-popover p-3 text-left shadow-lg",
                    tooltipSide === "right" ? "left-full ml-3" : "right-full mr-3",
                    "max-md:top-full max-md:right-auto max-md:left-1/2 max-md:mx-0 max-md:mt-2 max-md:-translate-x-1/2 max-md:translate-y-0",
                  )}
                >
                  <p className="text-node text-primary">{node.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{node.detail}</p>
                </div>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
