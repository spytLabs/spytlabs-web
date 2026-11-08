import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import { pageMetadata, webPageGraph } from "@/lib/seo";
import HeroSecion from "./components/heroSection";
import BridgeSection from "./components/bridgeSection";
import FutureSection from "./components/futureSection";
import CaseStudiesSection from "./components/caseStudiesSection";
import PartnerSection from "./components/partnerSection";
import TestimonialsSection from "./components/testimonialsSection";
import ContactFooterSection from "./components/contactFooterSection";

const HOME_TITLE = "spytLabs | Design, Video Production & AI Automation in Colombo";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  absoluteTitle: true,
  description:
    "spytLabs is a Colombo, Sri Lanka studio for web design, video production, software development and AI automation. One team, from idea to launch.",
  path: "/",
});

export default function Home() {
  return (
    <main
      className="mt-2 mx-2 mb-10 bg-white box-border "
      data-node-id="7:402"
    >
      <JsonLd data={webPageGraph({ type: "WebPage", name: HOME_TITLE, path: "/" })} />
      <HeroSecion />
      <PartnerSection />
      <BridgeSection />
      <FutureSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactFooterSection />
    </main>
  );
}
