"use client"

import Link from "next/link"
import { MessageCircle, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/motion"

const services = [
  {
    icon: MessageCircle,
    title: "Automated testing",
    description: "Ensure every release is reliable with comprehensive automated and manual testing.",
    link: "Details",
    href: "/qa",
  },
  {
    icon: Sparkles,
    title: "Web development",
    description: "Complete web solutions, from backend systems to refined, responsive interfaces.",
    link: "Explore",
    href: "/full-stack",
  },
  {
    icon: CheckCircle,
    title: "Systems & Infrastructure Specialist",
    description: "Experienced in server setup, environment configuration, OS-level QA validation, networking support, and maintaining stable system operations for enterprise and production environments.",
    link: "View",
    href: "/system",
  },
]

export default function Expertise() {
  return (
    <section className="bg-accent-secondary min-h-screen flex items-center py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-h2 font-medium text-foreground mb-3">Expertise that elevates your work</h2>
            <p className="text-muted-foreground text-base max-w-[720px]">
              Showcasing a blend of QA, full-stack development, and systems & infrastructure expertise. I create seamless, high-quality
              digital solutions with a focus on usability, performance, and precision.
            </p>
          </div>
        </FadeIn>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full py-10">
          {services.map((service, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
              <div className="bg-white h-full my-8 rounded-xl p-6 md:p-8 flex flex-col  group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 bg-accent-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon size={20} className="text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-foreground text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all group/link"
                >
                  {service.link}
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
