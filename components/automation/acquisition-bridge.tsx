"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence } from "@/hooks/use-sequence"

/*
  AcquisitionBridge — selling-system spec §11. The connective story: the
  same platform that finds a customer also sells to them and delivers the
  product. One chip flow from acquisition into the Document Factory.
*/

const STEPS = [
  "ACQUISITION",
  "LEAD",
  "CUSTOMER",
  "PURCHASE",
  "INTAKE",
  "DOCUMENT FACTORY",
  "DELIVERY",
]

export function AcquisitionBridge({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false })
  const { step, reduced } = useSequence({
    steps: STEPS.length,
    active: inView,
    stepMs: 750,
    startDelayMs: 400,
    loop: true,
    holdMs: 3000,
  })

  return (
    <div ref={ref} className={className}>
      <div
        className="flex flex-wrap items-center justify-center gap-y-3"
        role="img"
        aria-label={`The automation continues after acquisition: ${STEPS.join(", then ")}`}
      >
        {STEPS.map((label, i) => {
          const live = reduced || step >= i
          const arriving = !reduced && step === i
          const factory = label === "DOCUMENT FACTORY"
          return (
            <span key={label} className="flex items-center">
              {i > 0 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "mx-2.5 font-mono text-sm transition-colors duration-300 sm:mx-3.5",
                    live ? "text-amber" : "text-border",
                  )}
                >
                  →
                </span>
              ) : null}
              <span
                className={cn(
                  "text-node rounded-md border bg-card px-3 py-2 transition-all duration-300",
                  arriving || (factory && live)
                    ? "border-amber text-foreground"
                    : live
                      ? "border-primary/45 text-foreground"
                      : "border-border text-muted-foreground opacity-50",
                )}
              >
                {label}
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
