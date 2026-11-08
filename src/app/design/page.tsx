import type { Metadata } from "next";
import { pageMetadata, serviceGraph } from "@/lib/seo";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const description =
  "Web design and branding agency in Colombo, Sri Lanka. spytLabs designs websites, product interfaces, motion and brand identities that perform.";

const content: ServicePageProps = {
  showSites: ["LinkUp Colombo"],
  title: "Web design & branding agency in Colombo.",
  eyebrow: "UI/UX, motion & brand",
  subtitle: "Digital products and brands designed to connect with people and perform for the business.",
  intro: {
    lead: "Crafting digital products",
    accent: "that truly connect.",
    body: "We combine storytelling, design and engineering, so what looks good also works, on every screen.",
  },
  location:
    "spytLabs is a web design and branding agency in Colombo, Sri Lanka. We design websites, product interfaces, motion and brand identities for businesses here and overseas. Engineering and video sit in the same team, so the design you approve is the one that ships.",
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
  process: [
    { title: "Discover", body: "We start with your business, your customers and what the project has to achieve, then review what you already have, from brand assets to your current site." },
    { title: "Set the direction", body: "You see the structure and visual direction early, as wireframes and key screens, so the big decisions are made before the detailed work starts." },
    { title: "Design", body: "We design every page for desktop and mobile, build the parts into a consistent system, and add motion where it helps people understand." },
    { title: "Hand over", body: "Files and guidelines go to your team, or straight to our developers if we're building it too." },
  ],
  deliverables: [
    "Website and landing page design",
    "App and product interfaces",
    "Wireframes and prototypes",
    "Logo and visual identity",
    "Brand guidelines and design systems",
    "Motion graphics and animated brand assets",
  ],
  proof: {
    client: "Spillburg",
    headline: "A corporate site that earns investor trust at first glance.",
    stats: [
      { value: "15", label: "Pages, including 8 dedicated service pages" },
      { value: "96", label: "Lighthouse accessibility score" },
    ],
    caseStudy: "/work/spillburg",
  },
  faqs: [
    { question: "Do you also build the websites you design?", answer: "Yes. Our developers work alongside the designers, so one team can take a project from the first wireframe to a live site." },
    { question: "Can you work with our existing brand?", answer: "Yes. We can design within the guidelines you already have, refresh parts of your identity, or start again if that's what the business needs." },
    { question: "How much does a website or brand project cost?", answer: "Every project is quoted individually, because scope varies so much. Tell us what you need through the contact page and we'll send a quotation." },
    { question: "How long does a design project take?", answer: "It depends on the number of pages and how much brand work is involved. You'll get a timeline with your quotation." },
    { question: "Do you work with clients outside Sri Lanka?", answer: "Yes. We're based in Colombo and work remotely with clients overseas." },
  ],
  related: [
    { label: "Software development", href: "/technology", body: "Turn the design into a fast, production-ready website or app." },
    { label: "Video production", href: "/productions", body: "Add commercials and social content that match the new brand." },
  ],
  portfolio: { label: "Design portfolio", href: "https://www.spytlabs.com/r/design-portfolio" },
  schema: serviceGraph({ name: "Web Design & Branding", serviceType: "Web design and brand identity", description, path: "/design", crumb: "Design" }),
};

export default function DesignPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = pageMetadata({
  title: "Web Design & Branding Agency in Colombo",
  description,
  path: "/design",
  image: "/og/design.jpg",
});
