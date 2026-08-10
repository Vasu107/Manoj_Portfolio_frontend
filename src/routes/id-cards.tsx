import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, IdCardSection } from "@/components/site/sections";

const title = "ID Card Design Gallery — School, Corporate & Event Passes";
const description =
  "Print-ready ID card design gallery: student cards, college IDs, employee badges, corporate cards, event passes and membership cards.";

export const Route = createFileRoute("/id-cards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: IdCards,
});

function IdCards() {
  return (
    <div className="pt-16">
      <IdCardSection />
      <CtaBanner />
    </div>
  );
}
