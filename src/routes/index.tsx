import { createFileRoute } from "@tanstack/react-router";
import {
  AboutSection, BlogSection, CtaBanner, Hero, IdCardSection, MarketingSection,
  ProcessSection, ProjectsSection, ServicesSection, SkillsSection, StatsSection,
  TestimonialsSection, YouTubeSection,
} from "@/components/site/sections";

const title = "Arman Rehman — UI/UX Designer, Marketer & YouTube Creator";
const description =
  "Portfolio of Arman Rehman: UI/UX design, social media marketing, YouTube content, video editing, branding and ID card design for schools and corporates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arman Rehman",
          jobTitle: "UI/UX Designer & Digital Creative Consultant",
          knowsAbout: ["UI/UX Design", "Social Media Marketing", "Video Editing", "Branding", "ID Card Design"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection limit={8} />
      <ProjectsSection limit={6} filterable />
      <YouTubeSection compact />
      <IdCardSection compact />
      <MarketingSection />
      <SkillsSection />
      <TestimonialsSection />
      <ProcessSection />
      <StatsSection />
      <BlogSection limit={3} />
      <CtaBanner />
    </>
  );
}
