"use client"

import { Fragment } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"
import { NodeChip } from "@/components/system/node-chip"

export interface SystemMapNode {
  id: string
  label: string
  sublabel?: string
}

interface SystemMapProps {
  nodes: SystemMapNode[]
  /** "vertical" always stacks; "responsive" lays out horizontally from md up. */
  direction?: "vertical" | "responsive"
  animate?: boolean
  /** Extra classes for each node chip — e.g. "px-4 py-2" for larger nodes. */
  chipClassName?: string
  className?: string
}

export function SystemMap({ nodes, direction = "responsive", animate = true, chipClassName, className }: SystemMapProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()
  const running = animate && inView && !reduced
  const visible = !animate || inView || reduced
  const horizontal = direction === "responsive"

  return (
    <div
      ref={ref}
      role="list"
      aria-label="System flow"
      className={cn(
        "flex flex-col items-center",
        horizontal && "md:flex-row md:items-center md:justify-center",
        className,
      )}
    >
      {nodes.map((node, i) => (
        <Fragment key={node.id}>
          {i > 0 ? (
            <span
              aria-hidden="true"
              className={cn(
                "relative block h-6 w-px shrink-0 bg-border",
                horizontal && "md:h-px md:w-10",
              )}
            >
              {running ? (
                <>
                  <span
                    className={cn(
                      "motion-safe-only absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-amber [animation:packet-y_2.4s_ease-in-out_infinite]",
                      horizontal && "md:hidden",
                    )}
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                  {horizontal ? (
                    <span
                      className="motion-safe-only absolute top-1/2 left-0 hidden size-1.5 -translate-y-1/2 rounded-full bg-amber [animation:packet-x_2.4s_ease-in-out_infinite] md:block"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    />
                  ) : null}
                </>
              ) : null}
            </span>
          ) : null}
          <span
            role="listitem"
            className={cn(
              "shrink-0 transition-opacity duration-300",
              visible ? "opacity-100" : "opacity-0",
              running && "[animation:node-in_0.45s_ease-out_both]",
            )}
            style={running ? { animationDelay: `${i * 0.12}s` } : undefined}
          >
            <NodeChip label={node.label} sublabel={node.sublabel} className={chipClassName} />
          </span>
        </Fragment>
      ))}
    </div>
  )
}
