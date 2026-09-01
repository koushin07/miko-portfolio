import Link from "next/link"
import { AutomationExplorer } from "@/components/automation/automation-explorer"

export function AutomationStage() {
  return (
    <section className="noise-bg relative overflow-hidden border-t border-border/60">
      <div className="mx-auto min-h-[95vh] max-w-[1240px] px-6 py-24 lg:px-8 lg:py-36">
        <div className="max-w-3xl space-y-6">
          <p className="text-node flex items-center gap-2 text-muted-foreground">
            <span aria-hidden="true" className="size-1.5 rounded-sm bg-amber" />
            02 — AUTOMATION BACKBONE
          </p>
          <h2 className="text-h2 text-balance text-foreground lg:text-[2.9rem] lg:leading-[1.1]">
            I don't just build n8n workflows. I build automation systems.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            For a LegalTech firm (NDA), I built both the system that finds the customers and the system that sells and
            delivers to them — 42 production workflows on one self-hosted n8n backbone. Hover the subsystems, then open
            the Document Factory.
          </p>
        </div>

        <div className="mt-16">
          <AutomationExplorer />
        </div>

        <div className="mt-10 text-right">
          <Link href="/automation" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
            Explore the full automation platform →
          </Link>
        </div>
      </div>
    </section>
  )
}
