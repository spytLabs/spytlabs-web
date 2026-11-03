import type { Metadata } from "next";
import HeroSecion from "./components/heroSection";
import BridgeSection from "./components/bridgeSection";
import FutureSection from "./components/futureSection";
import CaseStudiesSection from "./components/caseStudiesSection";
import PartnerSection from "./components/partnerSection";
import TestimonialsSection from "./components/testimonialsSection";
import ContactFooterSection from "./components/contactFooterSection";

export const metadata: Metadata = {
  title: "spytLabs - AI Automation, Design, Productions & Technical Services",
  description:
    "spytLabs helps teams with AI automation, design, productions for commercials and social media, and technical delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "spytLabs - AI Automation, Design, Productions & Technical Services",
    description:
      "spytLabs helps teams with AI automation, design, productions for commercials and social media, and technical delivery.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/figma-assets/spyt-bg.png",
        width: 1200,
        height: 630,
        alt: "spytLabs homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "spytLabs - AI Automation, Design, Productions & Technical Services",
    description:
      "spytLabs helps teams with AI automation, design, productions for commercials and social media, and technical delivery.",
    images: ["/figma-assets/spyt-bg.png"],
  },
};

export default function Home() {
  return (
    <main
      className="mt-2 mx-2 mb-10 bg-white box-border "
      data-node-id="7:402"
    >
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
