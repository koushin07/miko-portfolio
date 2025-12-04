"use client"

import { FadeIn } from "@/components/ui/motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react"

export default function Footer() {
  const navLinks = [
    { label: "Profile", href: "/about" },
    { label: "Project", href: "/full-stack" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Connect", href: "/about#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/koushin07", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/miko-cañares-772525292", label: "LinkedIn" },

  ]

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a")
    link.href = "/Miko-Canares-CV.pdf"
    link.download = "Miko Canares CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <footer className="bg-hero-bg text-white">
      {/* CTA Section */}
      <div className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-h1 font-normal text-white mb-6">Showcase your skills. Impress now.</h2>
              <p className="text-white/60 text-lg-custom mb-10 max-w-2xl mx-auto">
                Ready to elevate your next project? Connect for QA, full-stack, or system expertise—let's create
                something exceptional together.
              </p>
              <Link
                href="/about#contact"
                className="inline-block px-8 py-4 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-105 transition-all duration-300 text-base-custom font-medium"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            {/* Left side - Navigation Links */}
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

            {/* Right side - Logo */}
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

      {/* Bottom row - Made by + Socials */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left - Made by */}
            <p className="text-white/40 text-sm-custom">site made by ME</p>

            {/* Right - Social Links */}
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

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6">
          <p className="text-white/40 text-sm-custom text-center">© 2025 all rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
