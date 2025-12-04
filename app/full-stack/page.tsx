"use client";

import type React from "react";
import { useState, useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { FadeIn } from "@/components/ui/motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
  github?: string;
  year?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Booking Platform - ACE",
    description:
      "Comprehensive booking platform connecting students and preceptors. Built with Laravel backend and NextTS frontend. Integrated Mapbox for location-based features, Clerk for authentication, PandaDoc for document automation, and PipeDrive for CRM workflow alignment.",
    tech: [
      "Laravel",
      "Next.js",
      "TypeScript",
      "Mapbox",
      "Clerk",
      "PandaDoc",
      "Pipedrive",
    ],
    image: "/projects/ace.png",
    year: "Oct 2025 - Feb 2026",
  },
  {
    id: 2,
    title: "Roadworthy Inspection Platform - ASAP Roadworthys",
    description:
      "Built a full roadworthy inspection platform with ReactTS frontend and ExpressTS backend. Led QA to keep the build aligned with Figma designs, validated data flows, pressure-tested payments, and verified the ServiceM8 integration creates the correct job template for every new booking while Brevo (Sendinblue) automations run in sync.",
    tech: [
      "React",
      "TypeScript",
      "ExpressTS",
      "ServiceM8 API",
      "Brevo API",
      "Node.js",
    ],
    image: "/projects/asap-pic.png",
    year: "Jan 2024 - May 2024",
    url: "https://book.asaproadworthys.com.au",
  },
  {
    id: 3,
    title: "Employee Management Platform - Emport",
    description:
      "Full employee management platform for academic institutions. Implemented teacher attendance tracking, payroll management, leave requests, and centralized employee and role management using Laravel and React.",
    tech: ["Laravel", "React", "PHP", "MySQL", "Payroll Systems"],
    image: "/projects/emport.jpeg",
    year: "Jan 2025 - Jun 2025",
  },
  {
    id: 4,
    title: "Digital Boosting Services Website - Boostlab",
    description:
      "Modern website for digital boosting services built with React. Integrated Shopify for seamless checkout, Checkout.com for secure payments, and Meta Pixel for analytics and conversion tracking.",
    tech: ["React", "Shopify", "Checkout.com", "Meta Pixel", "TailwindCSS"],
    image: "/projects/bootslab.png",
    year: "Jun 2025 - Aug 2025",
    url: "https://boostlab.gg",
  },
  {
    id: 5,
    title: "Learning Management System - The Tech Academy",
    description:
      "Maintained and improved the academy's Learning Management System using ASP.NET MVC. Ensured stable performance, reviewed student submissions, provided technical guidance, and supported student progress through mentoring.",
    tech: ["ASP.NET Core", "MVC", "C#", "SQL Server"],
    image: "/projects/the tech academy.png",
    year: "Jan 2025 - Jun 2025",
    url: "https://learncodinganywhere.com"
  },
  {
    id: 6,
    title: "ERIS: Equipment Resource Information System",
    description:
      "It provides information on the region's equipment resources, including their status, movement, and backtrack, allowing the RDRRMC Region 10 and local DRRM offices to monitor resources",
    image: "/projects/eris (1).png",

    tech: ["Laravel", "InertiaJS", "VueJS", "TailwindCSS"],
  },
  {
    id: 7,
    title: "LogiWare: One-Stop Inventory",
    description:
      "All-in-one inventory information platform with shipment tracking and product flow monitoring so teams stay ahead of stock, fulfillment, and logistics tasks in one dashboard.",
    image: "/projects/logiware.png",

    tech: ["ASP.NET", "Angular", "SpartanNG", "TailwindCSS"],
  },
  {
    id: 8,
    title: "ReadMindMe: Social Media",
    description:
      "Faith-focused social platform designed for sharing reflections, scripture, and personal beliefs with an engaged community.",
    image: "/projects/read-mind-me.png",

    tech: ["ASP.NET", "ReactTS", "SignalR", "ShadCN"],
  },
  {
    id: 9,
    title: "Time Caps",
    description:
      "Send personalized emails to recipients at a future date. Share memories, goals, and messages with your future self or loved ones. Keep the magic of surprise alive",
    image: "/projects/time-cap.png",
    url: "https://timecaps.onrender.com",
    tech: [
      "Angular",
      "PrimeNG",
      "TailwindCSS",
      "ASP.NET",
      "MailKit",
      "Hangfire",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className="absolute pointer-events-none z-50 w-[480px] lg:w-[520px] aspect-[3/2] shadow-2xl"
          style={{
            top: `calc(-220px + ${
              (mousePosition.y % window.innerHeight) * 0.08
            }px)`,
            right: `calc(-360px + ${
              (mousePosition.x % window.innerWidth) * 0.08
            }px)`,
            transition: "all 0.15s ease-out",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/45 to-transparent" />
        </div>
      )}

      <article
        onClick={handleClick}
        className={`bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 ${
          project.url || project.github
            ? "cursor-pointer hover:-translate-y-1 hover:shadow-md"
            : ""
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl text-foreground font-semibold">
                {project.title}
              </h3>
              {(project.url || project.github) && (
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-foreground transition-all"
                />
              )}
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[620px]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-accent-secondary text-foreground/80 rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end gap-4 md:flex-col md:items-end md:gap-3">
            <span className="text-muted-foreground text-sm">
              {project.year}
            </span>
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-accent-secondary hover:bg-accent-primary-hover text-foreground/70 hover:text-white transition-all"
                  aria-label="View on GitHub"
                >
                  <Github size={18} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-accent-secondary hover:bg-accent-primary-hover text-foreground/70 hover:text-white transition-all"
                  aria-label="View live site"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function FullStackPage() {
  return (
    <main className="min-h-screen bg-hero-bg">
      <Navigation />

      <section className="pt-[120px] pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 items-center h-full">
            <div className="space-y-6">
              <FadeIn>
                <p className="text-white/60 text-eyebrow uppercase tracking-wider">
                  Portfolio · Full-stack
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-h0 text-white">
                  End-to-end
                  <br />
                  digital solutions.
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/70 text-xl-custom max-w-2xl">
                  Product builds, API-first backends, and integrations that sync
                  payments, auth, CRM, and analytics. Designed, shipped, and
                  QA’d by the same person.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/about#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e308e] text-white rounded-xl hover:bg-accent-primary-hover hover:scale-[1.02] transition-all duration-300 text-base-custom font-medium"
                  >
                    Start a build
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-all text-base-custom"
                  >
                    View projects
                    <ArrowRight size={18} className="translate-y-[1px]" />
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap gap-4 text-white/60 text-sm-custom">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Laravel, ASP.NET, React/Next, Angular
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Stripe, Shopify, ServiceM8, Brevo
                  </span>
                </div>
              </FadeIn>
            </div>

            {/** Removed empty hero card column */}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-20 bg-accent-secondary">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-h2 text-foreground">Freelance projects</h2>
                <p className="text-muted-foreground text-base mt-2">
                  2022 - 2023, 2024 - Present
                </p>
              </div>
              <span className="text-muted-foreground text-sm">
                {projects.length} projects
              </span>
            </div>
          </FadeIn>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <FadeIn key={project.id} delay={0.05 * i} direction="up">
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
