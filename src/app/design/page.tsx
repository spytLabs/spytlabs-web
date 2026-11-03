import type { Metadata } from "next";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const content: ServicePageProps = {
  showSites: true,
  title: "Design.",
  eyebrow: "UI/UX, motion & brand",
  subtitle: "Digital products and brands designed to connect with people and perform for the business.",
  intro: {
    lead: "Crafting digital products",
    accent: "that truly connect.",
    body: "We combine storytelling, design and engineering, so what looks good also works, on every screen.",
  },
  media: {
    kind: "screens",
    items: [
      { src: "/case-studies/spillburg/services.jpg", alt: "Spillburg services page" },
      { src: "/case-studies/spillburg/mergers-and-acquisitions.jpg", alt: "Spillburg Mergers & Acquisitions page" },
      { src: "/case-studies/spillburg/contact.jpg", alt: "Spillburg contact page" },
    ],
  },
  capabilities: [
    { title: "Intuitive UI/UX experiences", body: "Clean, user-focused interfaces that work smoothly on every device, refined with real user insight and feedback." },
    { title: "Motion & visual storytelling", body: "Animation that communicates your brand with clarity, with motion and sound shaped together from concept to final cut." },
    { title: "Brand & creative strategy", body: "Design systems built on research, audits and user behaviour, so visuals lift engagement and strengthen your brand." },
  ],
  proof: {
    client: "Spillburg Corporate Services",
    headline: "A corporate site that earns investor trust at first glance.",
    stats: [
      { value: "15", label: "Pages, including 8 dedicated service pages" },
      { value: "96", label: "Lighthouse accessibility score" },
      { value: "100", label: "Lighthouse best practices score" },
    ],
  },
  portfolio: { label: "Design portfolio", href: "https://www.spytlabs.com/r/design-portfolio" },
};

export default function DesignPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = {
  title: "Design | spytLabs",
  description:
    "Design services at spytLabs: product design, UI/UX, motion, and creative strategy.",
  alternates: { canonical: "/design" },
  openGraph: {
    title: "Design | spytLabs",
    description:
      "Design services at spytLabs: product design, UI/UX, motion, and creative strategy.",
    url: "/design",
    images: [
      {
        url: "/figma-assets/design-img-1.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design | spytLabs",
    description:
      "Design services at spytLabs: product design, UI/UX, motion, and creative strategy.",
    images: ["/figma-assets/design-img-1.jpg"],
  },
};
