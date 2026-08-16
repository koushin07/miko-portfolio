import { SectionHeader } from "@/components/section-header"
import { Reveal } from "@/components/motion/reveal"

const steps = [
  { title: "Understand", line: "Clarify the problem, the users, and what done means." },
  { title: "Design", line: "Map the system: data, APIs, integrations, edge cases." },
  { title: "Build", line: "Ship in small, reviewable increments." },
  { title: "Integrate", line: "Connect the tools and services your business already runs on." },
  { title: "Test", line: "Validate behavior, access, and failure paths before release." },
  { title: "Deploy", line: "Production configuration, monitoring, and rollout." },
  { title: "Improve", line: "Measure, fix, and extend once real usage arrives." },
]

export default function HowIWork() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          index="07"
          label="HOW I WORK"
          title="One owner, end to end."
          lede="The same person who designs the system builds it, tests it, and ships it."
        />

        <ol className="mt-12 max-w-2xl">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 60}>
              <li className="relative flex gap-6 pb-8 last:pb-0">
                {i < steps.length - 1 ? (
                  <span aria-hidden="true" className="absolute top-8 left-[15px] h-[calc(100%-2rem)] w-px bg-border" />
                ) : null}
                <span className="text-node z-10 flex size-8 shrink-0 items-center justify-center rounded-md border bg-card text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1 pt-1">
                  <p className="text-h5 text-foreground">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.line}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
