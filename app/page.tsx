import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TrustedBrands from "@/components/trusted-brands";
import Expertise from "@/components/expertise";
import TechStack from "@/components/tech-stack";
import FeaturedWork from "@/components/featured-work";
import PortfolioTabs from "@/components/portfolio-tabs";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "QA engineer and full-stack developer delivering reliable products, infrastructure, and automation for high-stakes launches.",
  path: "/",
  keywords: ["Quality assurance", "Web development", "Systems engineering"],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBrands />
      <Expertise />

      <PortfolioTabs />
      <TechStack />
      <FeaturedWork />
      <Blog />
      <Footer />
    </main>
  );
}
