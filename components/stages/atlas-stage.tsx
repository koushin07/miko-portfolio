"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { useSequence, useReplayOnReenter } from "@/hooks/use-sequence"
import { FlowStage } from "@/components/system/flow-stage"

/*
  Atlas spatial stage — V2 §13. The pipeline runs on the left while a
  map panel on the right accumulates what each tier produces: geometries,
  rendered layers, the located parcel, and finally the disclosure report.

  Steps: 0 SOURCE DATA · 1 POSTGIS · 2 GEOSERVER · 3 API/parcel · 4 REPORT
*/

const GEO_POINTS: [number, number][] = [
  [12, 22], [24, 60], [30, 34], [44, 70], [52, 26],
  [60, 52], [72, 38], [80, 68], [88, 24], [66, 82],
  [18, 82], [38, 14], [90, 50], [8, 46], [50, 88],
]

const PARCEL: [number, number] = [38, 42]

const nodes = [
  { id: "data", label: "SOURCE DATA", sublabel: "state + federal", detail: "Hazard datasets from government sources — flood, fire severity, seismic, and more." },
  { id: "postgis", label: "POSTGIS", detail: "Spatial database holding the hazard geometries — refreshed with zero-downtime promotion." },
  { id: "geoserver", label: "GEOSERVER", detail: "Serves the spatial layers for determinations and map rendering." },
  { id: "api", label: "API", sublabel: "FastAPI", detail: "Resolves an address to a parcel and runs hazard determinations against every layer." },
  { id: "report", label: "MAP / REPORT", detail: "A legally-formatted disclosure PDF, delivered to the customer." },
]

export function AtlasStage({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3, once: false })
  const { step, runId, restart, done } = useSequence({ steps: 6, active: inView, stepMs: 900, startDelayMs: 350 })
  useReplayOnReenter(inView, done, restart)

  return (
    <div ref={ref} className={cn("grid items-center gap-10 sm:grid-cols-[220px_1fr]", className)}>
      <FlowStage nodes={nodes} step={step} runId={runId} />

      {/* Spatial panel — layers accumulate as the system runs; the report emerges below it */}
      <div aria-hidden="true" className="flex min-w-0 flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-card/50">
        {/* Graticule */}
        <div className="grid-bg absolute inset-0 opacity-70 [background-size:32px_32px]" />
        <p className="text-node absolute top-2 left-2 text-[0.6rem] text-muted-foreground/50">N ── 38°</p>
        <p className="text-node absolute bottom-2 left-2 text-[0.6rem] text-muted-foreground/50">W ── 121°</p>

        {/* Hazard layer polygons render when GeoServer comes up */}
        <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <polygon
            points="8,50 30,38 48,48 40,70 12,68"
            fill="var(--primary)"
            className={cn("transition-opacity duration-700", step >= 2 ? "opacity-[0.13]" : "opacity-0")}
          />
          <polygon
            points="50,18 78,10 92,30 74,48 54,38"
            fill="var(--amber)"
            className={cn("transition-opacity duration-700", step >= 2 ? "opacity-[0.10]" : "opacity-0")}
            style={{ transitionDelay: "200ms" }}
          />
        </svg>

        {/* Geometries land in PostGIS */}
        {GEO_POINTS.map(([x, y], i) => (
          <span
            key={i}
            className={cn(
              "absolute size-1 rounded-full bg-primary/60 transition-opacity duration-500",
              step >= 1 ? "opacity-100" : "opacity-0",
            )}
            style={{ left: `${x}%`, top: `${y}%`, transitionDelay: `${(i % 6) * 90}ms` }}
          />
        ))}

        {/* Dataset chips arrive first */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          {["FLOOD", "FIRE SEVERITY", "SEISMIC"].map((layer, j) => (
            <span
              key={layer}
              className={cn(
                "text-node rounded border bg-card/90 px-1.5 py-0.5 text-[0.58rem] transition-all duration-400",
                step >= 0 ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                step >= 4 && "border-primary/40",
              )}
              style={{ transitionDelay: `${j * 140}ms` }}
            >
              {step >= 4 ? <span className="text-amber">✓ </span> : null}
              {layer}
            </span>
          ))}
        </div>

        {/* The parcel gets located when the API runs */}
        <span
          className={cn(
            "absolute z-10 transition-all duration-500",
            step >= 3 ? "scale-100 opacity-100" : "scale-50 opacity-0",
          )}
          style={{ left: `${PARCEL[0]}%`, top: `${PARCEL[1]}%`, transform: "translate(-50%, -50%)" }}
        >
          <span className="block size-2.5 rounded-full border-2 border-amber bg-background shadow-[0_0_10px_var(--amber)]" />
          <span className="text-node absolute top-1/2 left-4 -translate-y-1/2 text-[0.6rem] whitespace-nowrap text-amber">
            PARCEL / APN
          </span>
        </span>

      </div>

      {/* The report emerges out of the map's bottom edge — never over the pin */}
      <div
        className={cn(
          "relative z-10 -mt-9 mr-3 ml-auto w-44 rounded-md border bg-popover p-3 shadow-lg transition-all duration-500",
          step >= 4 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        )}
      >
        <p className="text-node text-[0.6rem] text-primary">HAZARD DISCLOSURE</p>
        <div className="mt-2 space-y-1 font-mono text-[0.6rem] text-muted-foreground">
          <p><span className="text-amber">✓</span> FLOOD — DETERMINED</p>
          <p><span className="text-amber">✓</span> FIRE — DETERMINED</p>
          <p><span className="text-amber">✓</span> SEISMIC — DETERMINED</p>
        </div>
        <p className={cn("text-node mt-2 border-t border-border/60 pt-1.5 text-[0.6rem] text-foreground transition-opacity duration-500", step >= 5 ? "opacity-100" : "opacity-0")}>
          PDF → DELIVERED
        </p>
      </div>
      </div>
    </div>
  )
}
