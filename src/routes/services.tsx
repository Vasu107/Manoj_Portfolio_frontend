import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, ProcessSection, ServicesSection } from "@/components/site/sections";

const title = "Services — Design, Marketing, Video & ID Cards";
const description =
  "UI/UX design, website and app design, social media marketing, YouTube management, video editing, branding, logo and ID card design services.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-16">
      <ServicesSection />
      <ProcessSection />
      <CtaBanner />
    </div>
  );
}
