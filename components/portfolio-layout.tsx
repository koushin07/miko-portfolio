"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PortfolioLayoutProps {
  children: React.ReactNode
  activeTab?: "qa" | "full-stack" | "system"
}

export default function PortfolioLayout({ children, activeTab }: PortfolioLayoutProps) {
  const tabs = [
    { id: "qa", label: "QA", href: "/qa" },
    { id: "full-stack", label: "Full-Stack", href: "/full-stack" },
    { id: "system", label: "Systems & Infrastructure Specialist", href: "/system" },
  ]

  return (
    <div className="bg-hero-bg min-h-screen">
      {/* Tab Navigation */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-0">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`relative px-12 py-4 text-base-custom transition-colors ${
                  activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {children}
    </div>
  )
}

export function PortfolioCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
  image,
}: {
  icon?: React.ReactNode
  title: string
  description: string
  linkText?: string
  linkHref?: string
  image?: string
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] rounded-2xl overflow-hidden">
      {/* Left side - Dark card with content */}
      <div className="bg-[#1a2444] p-8 lg:p-10 flex flex-col justify-between min-h-[300px] lg:min-h-[400px]">
        <div>
          {icon && <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">{icon}</div>}
          <h3 className="text-h4 text-white font-medium mb-3">{title}</h3>
          <p className="text-white/60 text-base-custom">{description}</p>
        </div>
        {linkText && linkHref && (
          <Link
            href={linkHref}
            className="inline-flex items-center gap-2 text-white text-base-custom hover:gap-3 transition-all mt-6"
          >
            {linkText} <ArrowRight size={18} />
          </Link>
        )}
      </div>

      {/* Right side - Image */}
      {image && (
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  )
}
