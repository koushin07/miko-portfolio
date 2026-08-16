import { cn } from "@/lib/utils"

/*
  Geospatial visual identity for Atlas — spec §15. A quiet map-like layer:
  grid, survey points, one connecting line. When `active` is true the layer
  is always on (case-study hero); otherwise it reveals on group hover/focus.
*/

const points = [
  { x: 15, y: 30, tone: "primary" },
  { x: 35, y: 62, tone: "amber" },
  { x: 48, y: 25, tone: "primary" },
  { x: 63, y: 70, tone: "primary" },
  { x: 78, y: 40, tone: "amber" },
  { x: 88, y: 58, tone: "primary" },
] as const

export function GeoGrid({ active = false, className }: { active?: boolean; className?: string }) {
  const revealed = active
    ? "opacity-100"
    : "opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="grid-bg absolute inset-0 opacity-60 [background-size:28px_28px]" />
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", revealed)}
      >
        <polyline
          points={points.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.35"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {points.map((p, i) => (
        <span
          key={i}
          className={cn(
            "absolute size-1.5 rounded-full",
            p.tone === "amber" ? "bg-amber" : "bg-primary/80",
            revealed,
          )}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: "translate(-50%, -50%)",
            transitionDelay: active ? undefined : `${i * 70}ms`,
          }}
        />
      ))}
    </div>
  )
}
