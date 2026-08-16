import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { buildMetadata } from "@/lib/seo"
import { ContactForm } from "@/components/contact-form"
import { BookingSheet } from "@/components/booking-sheet"

export const metadata = buildMetadata({
  title: "Start a Project",
  description:
    "Tell me what you're trying to build, automate, fix, or improve. I'll help you figure out the right technical approach — reply within 24 hours.",
  path: "/contact",
  keywords: ["Hire full-stack developer", "Start a project", "Contact", "AI developer", "n8n automation"],
})

const directLinks = [
  {
    label: "Email",
    value: "canaresmiko3@gmail.com",
    href: "mailto:canaresmiko3@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/miko-canares",
    href: "https://www.linkedin.com/in/miko-canares",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/koushin07",
    href: "https://github.com/koushin07",
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: "+63 909 611 6995",
    href: "https://wa.me/639096116995",
    icon: MessageCircle,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
          <p className="text-node text-muted-foreground">START A PROJECT</p>
          <h1 className="text-h1 mt-6 max-w-3xl text-balance text-foreground lg:text-[3.2rem] lg:leading-[1.08]">
            Have something you want to build?
          </h1>
          <p className="text-lg-custom mt-6 max-w-2xl text-muted-foreground">
            Tell me what you're trying to build, automate, fix, or improve. I'll help you figure out the right
            technical approach.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <ContactForm />

            <div className="space-y-8">
              <div className="panel space-y-4 p-6">
                <p className="text-node text-muted-foreground">PREFER TO TALK?</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Book a call directly on my calendar — you'll get a Google Calendar invite with a Meet link.
                </p>
                <BookingSheet
                  trigger={
                    <button
                      type="button"
                      className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      Book a call →
                    </button>
                  }
                />
              </div>

              <div className="space-y-3">
                <p className="text-node text-muted-foreground">DIRECT</p>
                {directLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-lg border border-border/60 bg-card/50 px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <link.icon size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm text-foreground">{link.label}</span>
                    <span className="ml-auto truncate text-xs text-muted-foreground">{link.value}</span>
                  </a>
                ))}
              </div>

              <p className="text-node text-muted-foreground/70">REPLY WITHIN 24 HOURS</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
