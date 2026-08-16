import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { BookingSheet } from "@/components/booking-sheet"

const linkGroups = [
  {
    title: "Work",
    links: [
      { label: "Selected Systems", href: "/work" },
      { label: "Project Explorer", href: "/projects" },
      { label: "ReadMindMe Case Study", href: "/case-studies/readmindme" },
      { label: "Atlas NHD Case Study", href: "/case-studies/atlas-nhd" },
      { label: "Automation Platform", href: "/automation" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Download CV", href: "/Miko-Canares-CV.pdf" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm space-y-4">
            <Link href="/" className="text-node text-foreground">
              MIKO.CANARES
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Full-stack developer for AI, SaaS &amp; automation. Built with a focus on integration and reliability.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/koushin07"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/miko-canares"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={18} />
              </a>
              <BookingSheet
                trigger={
                  <button
                    type="button"
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Book a call
                  </button>
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {linkGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-node text-muted-foreground">{group.title}</p>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Miko Cañares. All rights reserved.
          </p>
          <p className="text-node text-muted-foreground/70">UNDERSTAND → DESIGN → BUILD → INTEGRATE → TEST → SHIP</p>
        </div>
      </div>
    </footer>
  )
}
