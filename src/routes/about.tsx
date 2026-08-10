import { createFileRoute } from "@tanstack/react-router";
import { AboutSection, CtaBanner, ProcessSection, SkillsSection, StatsSection } from "@/components/site/sections";

const title = "About Arman Rehman — Creative Consultant & Designer";
const description =
  "Eight years across product design studios, marketing teams and print floors. Career timeline, skills and achievements of Arman Rehman.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-16">
      <AboutSection full />
      <SkillsSection />
      <ProcessSection />
      <StatsSection />
      <CtaBanner />
    </div>
  );
}
