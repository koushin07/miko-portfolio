"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/motion/reveal"

/*
  Experience as a chronological engineering timeline — spec §10-§12.
  Real roles and dates only; the current role carries more weight and
  links to the actual work it produced.
*/

interface TimelineEntry {
  year?: string
  role: string
  company: string
  period: string
  kind: "Contract" | "Employment"
  line: string
  current?: boolean
  related?: { label: string; href: string }[]
}

const entries: TimelineEntry[] = [
  {
    year: "2026",
    role: "Full-Stack Developer",
    company: "Atlas Geotech LLC",
    period: "Feb 2026 – Present",
    kind: "Contract",
    current: true,
    line: "Determination and reporting pipeline behind California statutory hazard disclosure — the full range of disclosure products, a queued rendering pipeline, and the customer portal.",
    related: [
      { label: "ATLAS NHD", href: "/case-studies/atlas-nhd" },
      { label: "ATLAS SDI REPORT ENGINE", href: "/case-studies/atlas-nhd" },
    ],
  },
  {
    year: "2025",
    role: "Full-Stack Developer",
    company: "ACE",
    period: "Oct 2025 – Jan 2026",
    kind: "Contract",
    line: "Built a placement platform with Mapbox search, Clerk auth, PandaDoc document packs, and Pipedrive sync.",
    related: [{ label: "ACE CASE STUDY", href: "/case-studies/ace" }],
  },
  {
    role: "Backend Developer",
    company: "ASAP Roadworthys",
    period: "Sep 2025 – Nov 2025",
    kind: "Contract",
    line: "Delivered booking, payments, and ServiceM8 job automation while pairing QA to keep flows reliable.",
  },
  {
    role: "Frontend Developer",
    company: "Boostlab",
    period: "Jun 2025 – Aug 2025",
    kind: "Contract",
    line: "Conversion-focused storefront with Shopify checkout, Checkout.com payments, and Meta Pixel tracking.",
  },
  {
    role: "Instructor & Developer",
    company: "The Tech Academy",
    period: "Jan 2025 – Jun 2025",
    kind: "Contract",
    line: "Maintained the academy's ASP.NET MVC learning platform, reviewed student work, and mentored learners.",
  },
  {
    year: "2023",
    role: "Analyst II, ERP Product Application",
    company: "DXC Technology",
    period: "Aug 2023 – Dec 2025",
    kind: "Employment",
    line: "Enterprise QA across server/OS, database links, and user access with automated scripts for stable releases.",
  },
]

export function ExperienceTimeline() {
  return (
    <div>
      <SectionHeader
        label="EXPERIENCE"
        title="Where I've built."
        lede="Long-term roles and project clients, labeled as what they are."
      />

      <div className="relative mt-14 max-w-3xl">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-border" />

        {entries.map((entry, i) => (
          <Reveal key={`${entry.company}-${entry.period}`} delay={i * 60}>
            {entry.year ? (
              <div className="relative mb-6 pl-10">
                <span aria-hidden="true" className="absolute top-1/2 left-[5px] h-px w-5 -translate-y-1/2 bg-border" />
                <p className="font-mono text-xl text-muted-foreground/70">{entry.year}</p>
              </div>
            ) : null}
            <div className={cn("relative pl-10", i === entries.length - 1 ? "pb-0" : "pb-12")}>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1.5 left-0 size-[11px] rounded-full border-2",
                  entry.current ? "border-amber bg-amber/30" : "border-border bg-card",
                )}
              />
              <div
                className={cn(
                  entry.current && "panel border-amber/30 p-6",
                )}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  {entry.current ? <span className="text-node rounded border border-amber/50 px-1.5 py-0.5 text-[0.62rem] text-amber">CURRENT</span> : null}
                  <p className="text-node text-muted-foreground">{entry.period.toUpperCase()}</p>
                  <span
                    className={cn(
                      "text-node rounded border px-1.5 py-0.5 text-[0.62rem]",
                      entry.kind === "Employment" ? "border-amber/40 text-amber" : "border-border text-muted-foreground",
                    )}
                  >
                    {entry.kind.toUpperCase()}
                  </span>
                </div>
                <p className="mt-2.5 text-lg font-medium text-foreground">{entry.role}</p>
                <p className="mt-0.5 text-sm text-primary">{entry.company}</p>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{entry.line}</p>

                {entry.related ? (
                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                    <span className="text-node text-muted-foreground/60">RELATED WORK:</span>
                    {entry.related.map((r) => (
                      <Link
                        key={r.label}
                        href={r.href}
                        className="text-node rounded border border-border bg-card px-2 py-1 text-[0.62rem] text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        {r.label} →
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
