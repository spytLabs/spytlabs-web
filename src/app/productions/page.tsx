import type { Metadata } from "next";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const content: ServicePageProps = {
  title: "Production.",
  eyebrow: "Video & creative production",
  subtitle: "Commercials, social reels and photography that stop the scroll and make people act.",
  intro: {
    lead: "Bringing your brand",
    accent: "to life on screen.",
    body: "Great products need a great story. We plan, shoot and edit content built for the feeds your customers actually watch.",
  },
  media: {
    kind: "reels",
    items: [
      { src: "/case-studies/colombo-litfest/reel-1.mp4", poster: "/case-studies/colombo-litfest/reel-1.jpg", label: "Colombo Literary Festival opening ceremony reel" },
      { src: "/case-studies/ninetynine/reel-2.mp4", poster: "/case-studies/ninetynine/reel-2.jpg", label: "NinetyNine food reel" },
      { src: "/case-studies/colombo-litfest/reel-4.mp4", poster: "/case-studies/colombo-litfest/reel-4.jpg", label: "Colombo Literary Festival day 4 recap" },
      { src: "/case-studies/ninetynine/reel-3.mp4", poster: "/case-studies/ninetynine/reel-3.jpg", label: "NinetyNine food reel" },
    ],
  },
  capabilities: [
    { title: "Commercial & video production", body: "From promotional commercials and campaign films to high-impact social content, video designed to show your value and turn viewers into clients." },
    { title: "Social reels & event coverage", body: "Vertical-first reels, speaker clips and same-day recaps, filmed and published fast enough to ride the moment." },
    { title: "Food & product videography", body: "High-end, appetising close-ups and product shots that make every dish and detail look as good as it is." },
    { title: "Branding & visual identity", body: "Colour palettes, typography and brand guidelines that give your business a distinct, professional voice." },
    { title: "Professional photoshoots", body: "Product, corporate and lifestyle photography so your website and social channels look sharp and credible." },
  ],
  proof: {
    client: "Colombo Literary Festival",
    logo: "/case-studies/colombo-litfest/logo.svg",
    headline: "730K reel views in six festival days.",
    stats: [
      { value: "730K", label: "Reel views across the six festival days" },
      { value: "497K", label: "Views on the best-performing reel" },
      { value: "100%", label: "Organic reach, no paid boosts" },
    ],
  },
  portfolio: { label: "Production portfolio", href: "https://www.spytlabs.com/r/production-portfolio" },
};

export default function ProductionsPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = {
  title: "Productions | spytLabs",
  description:
    "Video production, commercial shoots, and creative direction from spytLabs.",
  alternates: { canonical: "/productions" },
  openGraph: {
    title: "Productions | spytLabs",
    description:
      "Video production, commercial shoots, and creative direction from spytLabs.",
    url: "/productions",
    images: [
      {
        url: "/figma-assets/szabo-viktor-NI_fJ15rIfI-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs productions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productions | spytLabs",
    description:
      "Video production, commercial shoots, and creative direction from spytLabs.",
    images: ["/figma-assets/szabo-viktor-NI_fJ15rIfI-unsplash.jpg"],
  },
};