import type { Metadata } from "next";
import { pageMetadata, serviceGraph } from "@/lib/seo";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const description =
  "Software development company in Colombo, Sri Lanka. spytLabs builds websites, e-commerce stores, mobile apps, APIs and cloud systems made to scale.";

const content: ServicePageProps = {
  showSites: ["MISHEE"],
  title: "Software development company in Colombo.",
  eyebrow: "Web, apps & systems",
  subtitle: "Fast, reliable websites and software, engineered to scale with your business from day one.",
  intro: {
    lead: "Turning vision into code,",
    accent: "and code into growth.",
    body: "We bridge complex technical requirements and intuitive experiences. Not just features, but systems built to handle growth.",
  },
  location:
    "spytLabs is a software development company in Colombo, Sri Lanka. We build websites, e-commerce stores, web applications, mobile apps and the systems behind them, for businesses here and overseas.",
  media: { kind: "browser", video: "/case-studies/spillburg/scroll.mp4", poster: "/case-studies/spillburg/scroll.jpg", url: "spillburg.com", label: "Spillburg Corporate Services website, scrolling" },
  capabilities: [
    { title: "Web platforms & applications", body: "Custom, responsive web builds on modern frameworks, with speed, SEO and a seamless experience on every device." },
    { title: "Mobile solutions", body: "User-centric iOS and Android apps focused on performance and a native feel, so your brand stays with users on the go." },
    { title: "Systems & infrastructure", body: "Secure backend architecture, APIs, databases and cloud hosting, so your operations stay online around the clock." },
    { title: "Technical consulting", body: "Practical advice on tech stacks, security and digital strategy to help you make informed decisions." },
  ],
  process: [
    { title: "Scope", body: "We work out what the software has to do, who will use it and what it needs to connect to, then agree a written scope." },
    { title: "Architecture", body: "We choose the stack and plan the data, integrations and hosting around where the product needs to be next, not just at launch." },
    { title: "Build", body: "We build in stages you can review, testing speed, accessibility and behaviour on real devices as we go." },
    { title: "Launch", body: "We deploy to production, set up hosting and domains, and make sure search engines can read the site from day one." },
  ],
  deliverables: [
    "Corporate and marketing websites",
    "E-commerce stores",
    "Custom web applications",
    "iOS and Android apps",
    "APIs, databases and cloud hosting",
    "Technical and security consulting",
  ],
  proof: {
    client: "Spillburg",
    headline: "A 15-page corporate platform with its own investor news hub.",
    stats: [
      { value: "100", label: "Lighthouse best practices score" },
      { value: "96", label: "Lighthouse accessibility score" },
      { value: "8", label: "Dedicated service pages" },
    ],
    caseStudy: "/work/spillburg",
  },
  faqs: [
    { question: "What do you build with?", answer: "We use modern web frameworks and choose the stack to suit the project. If you already have a preference or an existing system, we'll work out the best fit together." },
    { question: "Do you build mobile apps as well as websites?", answer: "Yes. We build iOS and Android apps, along with the APIs and databases behind them." },
    { question: "Will my website be good for SEO?", answer: "Speed, clean structure and search visibility are part of how we build, not an add-on at the end." },
    { question: "How much does software development cost?", answer: "Every project is quoted individually, because scope varies so much. Tell us what you need through the contact page and we'll send a quotation." },
    { question: "How long does a project take?", answer: "It depends on the size of the build and the systems involved. You'll get a timeline with your quotation." },
  ],
  related: [
    { label: "AI automation", href: "/automation", body: "Connect your new system to agents and workflows that take on the repetitive work." },
    { label: "Web design & branding", href: "/design", body: "Interfaces and identity designed by the team building the product." },
  ],
  portfolio: { label: "Website portfolio", href: "https://www.spytlabs.com/r/website-portfolio" },
  schema: serviceGraph({ name: "Software & Web Development", serviceType: "Software development", description, path: "/technology", crumb: "Technology" }),
};

export default function TechnologyPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = pageMetadata({
  title: "Software Development Company in Colombo",
  description,
  path: "/technology",
  image: "/og/technology.jpg",
});
