"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

export default function Blog() {
  const services = [
    {
      category: "QA",
      title: "QA & release hardening",
      description: "Regression, automation, and design parity so production ships cleanly.",
      image: "/desktop-setup-with-analytics-dashboard-and-multipl.jpg",
      href: "/qa",
      cta: "Book QA run ->",
    },
    {
      category: "Full-Stack",
      title: "Product build & scale",
      description: "API to UI delivery with payments, auth, analytics, and CRM stitched together.",
      image: "/modern-coding-workspace-with-laptop-showing-code-e.jpg",
      href: "/full-stack",
      cta: "Start a build ->",
    },
    {
      category: "Systems & Infrastructure",
      title: "Infra that survives launch",
      description: "Servers, networking, and environment validation to keep uptime healthy.",
      image: "/clean-minimal-desk-setup-with-imac-showing-design-.jpg",
      href: "/system",
      cta: "Plan infra ->",
    },
    {
      category: "Integrations",
      title: "Automations & ops",
      description: "Stripe, Shopify, ServiceM8, Brevo, and workflow orchestration that just works.",
      image: "/colorful-ui-design-mockups-and-mobile-app-interfac.jpg",
      href: "/about#contact",
      cta: "Scope integrations ->",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left side - Title and description */}
          <FadeIn direction="left">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-h1 font-medium text-foreground mb-4 text-balance">
                Explore. Build.
                <br />
                Refine. Impress.
              </h2>
              <p className="text-muted-foreground text-base-custom max-w-[340px]">
                Structured services across QA, product builds, systems, and integrations - built to ship confidently and keep momentum.
              </p>
            </div>
          </FadeIn>

          {/* Right side - 2x2 grid of cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)} direction="up">
                <Link href={service.href} className="group block">
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Category */}
                  <span className="text-muted-foreground text-sm-custom">{service.category}</span>
                  {/* Title */}
                  <h3 className="text-h5 font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-muted-foreground text-sm-custom mb-3">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-foreground font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-foreground after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:text-primary">
                    {service.cta}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
