import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
}
