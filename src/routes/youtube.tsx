import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, YouTubeSection } from "@/components/site/sections";

const title = "YouTube Channel — Design Education & Video Editing";
const description =
  "Featured videos, latest uploads, channel statistics and video editing showcase from a 128K-subscriber design education channel.";

export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: YouTubePage,
});

function YouTubePage() {
  return (
    <div className="pt-16">
      <YouTubeSection />
      <CtaBanner />
    </div>
  );
}
