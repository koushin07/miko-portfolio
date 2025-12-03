"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Code2, Server } from "lucide-react"
import { FadeIn } from "@/components/ui/motion"

type TabId = "qa" | "full-stack" | "system"

interface TabContent {
  id: TabId
  label: string
  heading: string
  card: {
    icon: React.ReactNode
    title: string
    description: string
    linkText: string
    linkHref: string
    image: string
  }
}

const tabContent: TabContent[] = [
  {
    id: "qa",
    label: "QA",
    heading: "Expert testing for flawless results",
    card: {
      icon: <MessageCircle className="w-6 h-6 text-white/60" />,
      title: "Quality Assurance",
      description:
        "QA testing on server/OS, terminal-based applications, database links, drivers, and user access. Developed automated testing scripts and validated processes for secure enterprise operations.",
      linkText: "View Process",
      linkHref: "/qa",
      image: "/desktop-setup-with-monitor-showing-colorful-analyt.jpg",
    },
  },
  {
    id: "full-stack",
    label: "Full-Stack",
    heading: "End-to-end digital solutions",
    card: {
      icon: <Code2 className="w-6 h-6 text-white/60" />,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications using Laravel, ASP.NET Core, Angular, React, Vue, and Next.js. Integrating Stripe, Shopify, and CRM platforms for optimized business workflows.",
      linkText: "View Projects",
      linkHref: "/full-stack",
      image: "/modern-coding-workspace-with-multiple-monitors-sho.jpg",
    },
  },
  {
    id: "system",
    label: "System",
    heading: "Infrastructure that scales",
    card: {
      icon: <Server className="w-6 h-6 text-white/60" />,
      title: "System & Infrastructure",
      description:
        "Setting up physical servers, installing essential software, and resolving server issues. Handling networking tasks including domain configuration and IP management for reliable performance.",
      linkText: "View Experience",
      linkHref: "/system",
      image: "/server-rack-data-center-infrastructure.jpg",
    },
  },
]

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("qa")
  const currentContent = tabContent.find((t) => t.id === activeTab)!

  return (
    <section className="bg-hero-bg py-16 md:py-24">
      {/* Tab Navigation */}
      <div className="">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 ">
          <nav className="flex items-center justify-center gap-0 ">
            {tabContent.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-12 py-4 text-base font-normal transition-colors ${
                  activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80 border-b border-white/30"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn key={activeTab}>
            <h2 className="text-h1 text-white text-center mb-12">{currentContent.heading}</h2>
          </FadeIn>

          {/* Card */}
          <FadeIn key={`${activeTab}-card`} delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] rounded-2xl overflow-hidden">
              {/* Left side - Dark card with content */}
              <div className="bg-[#1a2444] p-8 lg:p-10 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                    {currentContent.card.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl text-white font-medium mb-3">{currentContent.card.title}</h3>
                  <p className="text-white/60 text-base">{currentContent.card.description}</p>
                </div>
                <Link
                  href={currentContent.card.linkHref}
                  className="inline-flex items-center gap-2 text-white text-base hover:gap-3 transition-all mt-6 group"
                >
                  {currentContent.card.linkText}{" "}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right side - Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={currentContent.card.image || "/placeholder.svg"}
                  alt={currentContent.card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
