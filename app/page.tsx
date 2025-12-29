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
    "Full-stack web developer and automation engineer building API-driven products, integrations, and reliable workflows.",
  path: "/",
  keywords: ["Full-stack developer", "Automation engineer", "Integrations", "API-first"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <WhatIDo />
      <Expertise />
      <TechStack />
      <FeaturedWork />
      <Footer />
    </main>
  );
}
