"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FadeIn } from "@/components/ui/motion"
import { MapPin, Briefcase, GraduationCap, Award, Mail, Phone, Send, ArrowRight, CheckCircle2 } from "lucide-react"

const skills = [
  { category: "Full-Stack Web Development", items: ["Laravel", "ASP.NET Core", "Angular", "React", "Vue", "InertiaJS", "ExpressTS", "NextTS"] },
  { category: "QA & Testing", items: ["PHPUnit", "JUnit", "Postman", "BrowserStack", "Selenium", "Manual Testing"] },
  { category: "API & System Integration", items: ["Stripe", "Checkout.com", "Shopify", "ServiceM8", "Brevo", "Pipedrive", "PandaDoc"] },
  { category: "Infrastructure & Tools", items: ["Ubuntu/Linux Server", "GitHub", "Jira", "Panaya", "Database Systems"] },
  { category: "Programming Languages", items: ["PHP", "JavaScript", "TypeScript", "C#", "Java", "Gherkin"] },
]

const experience = [
  {
    role: "Analyst II ERP Product Application",
    company: "DXC Technology",
    period: "Aug 2023 - Dec 2025",
    description:
      "Performed QA testing on server/OS, terminal-based applications, database links, drivers, and user access. Developed and maintained automated testing scripts. Conducted system checks and escalated defects to support secure and stable enterprise operations.",
  },
  {
    role: "Full-Stack Developer",
    company: "ACE",
    period: "Oct 2025 - Feb 2026",
    description:
      "Developed a comprehensive booking platform connecting students and preceptors using Laravel & NextTS. Integrated Mapbox for location features, Clerk for authentication, PandaDoc for document automation, and PipeDrive for CRM workflow alignment.",
  },
  {
    role: "Backend Developer",
    company: "ASAP Roadworthys",
    period: "Jan 2024 - May 2024",
    description:
      "Developed and maintained backend systems for the roadworthy inspection platform while pairing the build with QA: enforced Figma design parity, validated data and payments end to end, and ensured ServiceM8 jobs were created with the correct templates on every new booking.",
  },
  {
    role: "Frontend Developer",
    company: "Boostlab",
    period: "Jun 2025 - Aug 2025",
    description:
      "Developed a modern website for digital boosting services using React. Integrated Shopify for seamless checkout, Checkout.com for payments, and Meta Pixel for analytics and conversion tracking.",
  },
  {
    role: "Instructor & Developer",
    company: "The Tech Academy",
    period: "Jan 2025 - Jun 2025",
    description:
      "Maintained and improved the academy's Learning Management System using ASP.NET MVC. Ensured stable performance, reviewed student submissions, provided technical guidance, and supported student progress through mentoring.",
  },
  {
    role: "Full-Stack Developer",
    company: "Emport",
    period: "Jan 2025 - Jun 2025",
    description:
      "Designed a full employee management platform for academic institutions using Laravel & React. Implemented teacher attendance tracking, payroll management, leave requests, and centralized employee and role management.",
  },
  {
    role: "System & Infrastructure Engineer - Intern",
    company: "Apollo Tech",
    period: "Feb 2023 - May 2023",
    description:
      "Set up physical servers, installed essential software, and resolved server issues to maintain performance and reliability. Handled basic networking tasks, including listing domains for assigned IPs.",
  },
]

const education = [
  { degree: "Bachelor of Science in Information Technology", school: "Mindanao State University - Naawan", year: "2023" },
]

const certifications = ["SAP Certified Associate - Process Data Analyst"]

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: "success", message: "Message sent successfully! I will get back to you soon." })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus({ type: "error", message: data.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred. Please try again later." })
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6">
              <FadeIn>
                <p className="text-white/60 text-eyebrow uppercase tracking-wider">About</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-h0 text-white">Miko Canares</h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/70 text-xl-custom max-w-2xl">
                  QA engineer, full-stack developer, and systems specialist with 3+ years building reliable digital systems. I connect product, infra, and quality so teams launch with confidence.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-6 text-white/70 text-base-custom">
                  <span className="flex items-center gap-2">
                    <MapPin size={18} />
                    Misamis Oriental, Philippines
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={18} />
                    Open to opportunities
                  </span>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/about#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                  >
                    Let's collaborate
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="/Miko Canares updated.pdf"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                  >
                    Download CV
                    <ArrowRight size={18} className="translate-y-[1px]" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4 text-white/60 text-sm-custom">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    QA / Automation / Infra validation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Laravel / ASP.NET / React-Next / Angular
                  </span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="right">
              <div className="bg-[#131f5b]/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-[4/3]">
                  <img src="/profile-pic.png" alt="Miko" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/70 to-transparent" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h2 text-foreground mb-10">Skills & Expertise</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, i) => (
              <FadeIn key={skillGroup.category} delay={0.1 * (i + 1)} direction="up">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-h5 font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground text-sm-custom flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#1e308e]/60 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-h2 text-foreground mb-10 flex items-center gap-3">
              <Briefcase className="text-muted-foreground" />
              Experience
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <FadeIn key={`${exp.company}-${exp.role}-${i}`} delay={0.1 * (i + 1)} direction="left">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-h5 font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-muted-foreground text-sm-custom">{exp.period}</span>
                  </div>
                  <p className="text-[#1e308e] text-sm-custom font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-base-custom">{exp.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 md:py-24 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <FadeIn>
                <h2 className="text-h3 text-foreground mb-8 flex items-center gap-3">
                  <GraduationCap className="text-muted-foreground" />
                  Education
                </h2>
              </FadeIn>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <FadeIn key={edu.degree} delay={0.1 * (i + 1)} direction="left">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <h3 className="text-h5 font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground text-sm-custom">
                        {edu.school} - {edu.year}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <FadeIn>
                <h2 className="text-h3 text-foreground mb-8 flex items-center gap-3">
                  <Award className="text-muted-foreground" />
                  Certifications
                </h2>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <FadeIn key={cert} delay={0.1 * (i + 1)} direction="right">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                      <span className="text-foreground text-sm-custom font-medium">{cert}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <FadeIn>
                <h2 className="text-h2 text-foreground mb-6">Get in touch</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-muted-foreground text-base-custom mb-8 max-w-md">
                  Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something exceptional together.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <a
                    href="mailto:canaresmiko3@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent-primary-hover transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-secondary flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    canaresmiko3@gmail.com
                  </a>
                  <a
                    href="tel:+639928963516"
                    className="flex items-center gap-3 text-foreground hover:text-accent-primary-hover transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-secondary flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    +63 (992) 896 3516
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.3} direction="right">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div>
                  <label htmlFor="name" className="block text-sm-custom font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-accent-secondary border border-gray-200 text-foreground placeholder:text-muted-foreground/60 focus:border-[#1e308e] focus:ring-1 focus:ring-[#1e308e] outline-none transition-colors text-base-custom"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm-custom font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-accent-secondary border border-gray-200 text-foreground placeholder:text-muted-foreground/60 focus:border-[#1e308e] focus:ring-1 focus:ring-[#1e308e] outline-none transition-colors text-base-custom"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm-custom font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-accent-secondary border border-gray-200 text-foreground placeholder:text-muted-foreground/60 focus:border-[#1e308e] focus:ring-1 focus:ring-[#1e308e] outline-none transition-colors text-base-custom resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-[#1e308e] text-white rounded-lg hover:bg-accent-primary-hover transition-colors text-base-custom font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <Send size={18} />}
                </button>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg text-sm-custom ${
                      submitStatus.type === "success"
                        ? "bg-green-500/15 text-green-700 border border-green-500/30"
                        : "bg-red-500/10 text-red-700 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
