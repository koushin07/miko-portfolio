"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M 5 7 L 5 17 M 5 7 L 12 15 L 19 7 M 19 7 L 19 17" stroke="#131f5b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="text-white text-h5 font-medium">miko</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                className="text-white/70 hover:text-white transition flex items-center gap-1 text-base-custom"
              >
                Portfolio{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isPortfolioOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isPortfolioOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsPortfolioOpen(false)} />
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#0a0e1a] rounded-xl shadow-xl border border-white/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/qa"
                      onClick={() => setIsPortfolioOpen(false)}
                      className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm-custom"
                    >
                      QA Projects
                    </Link>
                    <Link
                      href="/full-stack"
                      onClick={() => setIsPortfolioOpen(false)}
                      className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm-custom"
                    >
                      Full-Stack Projects
                    </Link>
                    <Link
                      href="/system"
                      onClick={() => setIsPortfolioOpen(false)}
                      className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm-custom"
                    >
                      System & Infrastructure
                    </Link>
                  </div>
                </>
              )}
            </div>
            <Link href="/about" className="text-white/70 hover:text-white transition text-base-custom">
              About
            </Link>
            <Link href="/blog" className="text-white/70 hover:text-white transition text-base-custom">
              Blog
            </Link>
            <Link
              href="/about#contact"
              className="text-white/70 hover:text-white transition flex items-center gap-1 text-base-custom"
            >
              Contact
            </Link>
          </div>

          {/* Connect Button */}
          <Link
            href="/about#contact"
            className="hidden md:block px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium"
          >
            Connect
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 flex flex-col gap-2 bg-hero-bg border-t border-white/10">
            <Link
              href="/qa"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              QA Projects
            </Link>
            <Link
              href="/full-stack"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              Full-Stack Projects
            </Link>
            <Link
              href="/system"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              System & Infrastructure
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              Blog
            </Link>
            <Link
              href="/about#contact"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition px-2 py-2 text-base-custom"
            >
              Contact
            </Link>
            <Link
              href="/about#contact"
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 px-5 py-2.5 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition font-medium text-base-custom text-center"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
