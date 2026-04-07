import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustedBrands from "@/components/trusted-brands";
import Expertise from "@/components/expertise";
import TechStack from "@/components/tech-stack";
import FeaturedWork from "@/components/featured-work";
import WhatIDo from "@/components/what-i-do";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Full-stack developer specializing in automation-driven systems, internal tools, and scalable SaaS platforms. I help teams eliminate manual work and ship production systems that scale.",
  path: "/",
  keywords: ["Full-stack developer", "Automation engineer", "Internal tools", "SaaS platforms", "n8n"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <WhatIDo />
      <FeaturedWork />
      <Expertise />
      <TechStack />
      <Footer />
    </main>
  );
}
