"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"
import { Github, Linkedin, Download } from "lucide-react"

export default function Footer() {
  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Automation", href: "/automation" },
    { label: "Case Study", href: "/case-study" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/koushin07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/miko-canares-772525292", label: "LinkedIn" },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Miko-Canares-CV.pdf"
    link.download = "Miko Canares CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-hero-bg text-white">
      <div className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-h1 font-normal text-white mb-6">Let's build systems that stay reliable.</h2>
              <p className="text-white/70 text-lg-custom mb-10 max-w-2xl mx-auto">
                If you need a developer who ships full-stack apps, connects your tools, and bakes in QA from day one,
                let's talk.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <FadeIn direction="left">
              <nav className="flex flex-wrap gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/60 hover:text-white text-base-custom transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={handleDownloadCV}
                  className="text-white/60 hover:text-white text-base-custom transition-colors flex items-center gap-1.5"
                >
                  CV <Download size={14} />
                </button>
              </nav>
            </FadeIn>

            <FadeIn direction="right">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 5 7 L 5 17 M 5 7 L 12 15 L 19 7 M 19 7 L 19 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <span className="text-white text-h5 font-medium">Miko</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm-custom">Built with a focus on integration and reliability.</p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          <p className="text-white/40 text-sm-custom text-center">© 2025 Miko Canares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
