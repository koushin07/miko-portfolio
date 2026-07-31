import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustedBrands from "@/components/trusted-brands";
import Expertise from "@/components/expertise";
import FeaturedWork from "@/components/featured-work";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Full-stack engineer building production systems for regulated and data-heavy industries — geospatial compliance platforms, RAG pipelines, and automation for teams that can't afford to get it wrong.",
  path: "/",
  keywords: [
    "Full-stack engineer",
    "Geospatial platforms",
    "Compliance systems",
    "RAG pipelines",
    "Automation engineer",
    "Next.js",
    "FastAPI",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <FeaturedWork />
      <Expertise />
      <CTA />
      <Footer />
    </main>
  );
}
