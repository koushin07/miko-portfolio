"use client"

import { useState } from "react"
import { Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function PageNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/qa", label: "QA" },
    { href: "/full-stack", label: "Full-Stack" },
    { href: "/system", label: "Systems & Infrastructure Specialist" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-bg/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Back & Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm-custom"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#131f5b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-h5 font-medium">miko</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-base-custom font-medium transition-all duration-300 ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect Button */}
          <Link
            href="/about#contact"
            className="hidden md:block px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition-all duration-300 text-base-custom font-medium hover:scale-105"
          >
            Connect
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 flex flex-col gap-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-base-custom transition-all ${
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2.5 bg-[#1e308e] text-white rounded-lg text-center hover:bg-accent-primary-hover transition text-base-custom font-medium"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
