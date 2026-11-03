import type { Metadata } from "next";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const content: ServicePageProps = {
  showSites: true,
  title: "Technology.",
  eyebrow: "Web, apps & systems",
  subtitle: "Fast, reliable websites and software, engineered to scale with your business from day one.",
  intro: {
    lead: "Turning vision into code,",
    accent: "and code into growth.",
    body: "We bridge complex technical requirements and intuitive experiences. Not just features, but systems built to handle growth.",
  },
  media: { kind: "browser", video: "/case-studies/spillburg/scroll.mp4", poster: "/case-studies/spillburg/scroll.jpg", url: "spillburg.com", label: "Spillburg Corporate Services website, scrolling" },
  capabilities: [
    { title: "Web platforms & applications", body: "Custom, responsive web builds on modern frameworks, with speed, SEO and a seamless experience on every device." },
    { title: "Mobile solutions", body: "User-centric iOS and Android apps focused on performance and a native feel, so your brand stays with users on the go." },
    { title: "Systems & infrastructure", body: "Secure backend architecture, APIs, databases and cloud hosting, so your operations stay online around the clock." },
    { title: "Technical consulting", body: "Practical advice on tech stacks, security and digital strategy to help you make informed decisions." },
  ],
  proof: {
    client: "Spillburg Corporate Services",
    headline: "A corporate site that earns investor trust at first glance.",
    stats: [
      { value: "15", label: "Pages, including 8 dedicated service pages" },
      { value: "100", label: "Lighthouse best practices score" },
      { value: "96", label: "Lighthouse accessibility score" },
    ],
  },
  portfolio: { label: "Website portfolio", href: "https://www.spytlabs.com/r/website-portfolio" },
};

export default function TechnologyPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = {
  title: "Technology | spytLabs",
  description:
    "Engineering and technical services from spytLabs: platforms, mobile, infrastructure, and consulting.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology | spytLabs",
    description:
      "Engineering and technical services from spytLabs: platforms, mobile, infrastructure, and consulting.",
    url: "/technology",
    images: [
      {
        url: "/figma-assets/path-digital-tR0jvlsmCuQ-unsplash.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | spytLabs",
    description:
      "Engineering and technical services from spytLabs: platforms, mobile, infrastructure, and consulting.",
    images: ["/figma-assets/path-digital-tR0jvlsmCuQ-unsplash.jpg"],
  },
};