import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, ProjectsSection, TestimonialsSection } from "@/components/site/sections";

const title = "Projects — Product, Brand & Campaign Case Studies";
const description =
  "Featured UI/UX, website, mobile app, social media, branding and graphic design projects with technologies used and outcomes.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="pt-16">
      <ProjectsSection filterable />
      <TestimonialsSection />
      <CtaBanner />
    </div>
  );
}
