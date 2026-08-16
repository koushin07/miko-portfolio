import Link from "next/link"

export default function Cta() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 py-24 text-center lg:px-8 lg:py-32">
        <h2 className="text-h2 text-balance text-foreground">Have something you want to build?</h2>
        <p className="text-base-custom mx-auto mt-4 max-w-xl text-muted-foreground">
          Tell me what you're trying to build, automate, fix, or improve. I'll help you figure out the right technical
          approach.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Start a Project →
          </Link>
          <a
            href="https://github.com/koushin07"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            View GitHub →
          </a>
        </div>
        <p className="text-node mt-8 text-muted-foreground/70">REPLY WITHIN 24 HOURS</p>
      </div>
    </section>
  )
}
