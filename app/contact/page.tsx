import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const contacts = [
  { label: "Email", value: "canaresmiko3@gmail.com", href: "mailto:canaresmiko3@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/miko-canares-772525292", href: "https://www.linkedin.com/in/miko-canares-772525292", icon: Linkedin },
  { label: "GitHub", value: "github.com/koushin07", href: "https://github.com/koushin07", icon: Github },
  { label: "WhatsApp", value: "+63 953 322 1805", href: "https://wa.me/639533221805", icon: Phone },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-6">
          <FadeIn>
            <p className="text-white/60 text-eyebrow uppercase tracking-wider">Contact</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-h0 text-white">Looking for someone who can build, integrate, and automate?</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-xl-custom max-w-3xl">
              Tell me what you need shipped or fixed. I'm available for remote, contract, or full-time roles.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
              >
                View my work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/automation"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
              >
                See automation approach
                <ArrowRight size={18} className="translate-y-[1px]" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-8">
          <FadeIn>
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Reach out</p>
              <h2 className="text-h2 text-foreground">Simple ways to get in touch</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, i) => (
              <FadeIn key={contact.label} delay={0.08 * i} direction="up">
                <a
                  href={contact.href}
                  className="bg-accent-secondary border border-gray-200 rounded-2xl p-6 flex items-start gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white text-[#1e308e] flex items-center justify-center">
                    <contact.icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground text-base font-semibold">{contact.value}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
