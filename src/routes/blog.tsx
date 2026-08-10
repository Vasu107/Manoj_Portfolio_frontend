import { createFileRoute } from "@tanstack/react-router";
import { BlogSection, CtaBanner } from "@/components/site/sections";

const title = "Blog & Insights — UI/UX, Marketing and YouTube Growth";
const description =
  "Practical articles on UI/UX design, social media marketing, YouTube growth, branding tips and design trends for 2026.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="pt-16">
      <BlogSection />
      <CtaBanner />
    </div>
  );
}
