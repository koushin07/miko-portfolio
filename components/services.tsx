"use client"

import { useState } from "react"
import { Search, Code, Palette, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"

export default function Services() {
  const [activeTab, setActiveTab] = useState<"qa" | "fullstack" | "systemEngineer">("qa")

  const tabs = [
    { id: "qa" as const, label: "QA" },
    { id: "fullstack" as const, label: "Full-Stack" },
    { id: "systemEngineer" as const, label: "Systems & Infrastructure Specialist" },
  ]

  const content = {
    qa: {
      heading: "Expert testing for flawless results",
      icon: Search,
      title: "Quality assurance",
      description: "Thoroughly test every feature to ensure reliability and smooth performance before launch.",
      cta: "Process",
      link: "/qa",
      image: "/desktop-setup-with-analytics-dashboard-and-multipl.jpg",
    },
    fullstack: {
      heading: "Building powerful digital solutions",
      icon: Code,
      title: "Full-stack development",
      description: "Build scalable, maintainable apps from backend to frontend, tailored for your workflow.",
      cta: "Projects",
      link: "/full-stack",
      image: "/modern-coding-workspace-with-laptop-showing-code-e.jpg",
    },
    systemEngineer: {
      heading: "Enterprise system infrastructure & support",
      icon: Palette,
      title: "Systems & Infrastructure Specialist",
      description: "Experienced in server setup, environment configuration, OS-level QA validation, networking support, and maintaining stable system operations for enterprise and production environments.",
      cta: "Learn More",
      link: "/system",
      image: "/server-rack-data-center-infrastructure.jpg",
    },
  }

  const current = content[activeTab]

  return (
    <section className="bg-hero-bg min-h-screen flex flex-col justify-center py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        <FadeIn>
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="flex border-b border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 md:px-12 py-4 text-base-custom font-medium transition-all duration-300 relative ${
                    activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-transform duration-300 origin-left ${
                      activeTab === tab.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div key={activeTab}>
          <FadeIn delay={0.1}>
            <h2 className="text-h1 text-white mb-12 md:mb-16">{current.heading}</h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left - Dark info card */}
            <FadeIn delay={0.2} direction="left">
              <div className="bg-[#0a0e1a] rounded-2xl p-8 md:p-10 flex flex-col min-h-[400px] lg:min-h-[500px] group hover:bg-[#0d1220] transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/15 transition-colors duration-300">
                  <current.icon size={24} className="text-white/70" />
                </div>

                <h3 className="text-h4 font-medium text-white mb-3">{current.title}</h3>
                <p className="text-white/60 text-base-custom mb-auto max-w-[400px]">{current.description}</p>

                <Link
                  href={current.link}
                  className="text-white text-base-custom font-medium inline-flex items-center gap-2 hover:gap-3 transition-all mt-8 group/link"
                >
                  {current.cta} <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            {/* Right - Image */}
            <FadeIn delay={0.3} direction="right">
              <div className="rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px] group">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
