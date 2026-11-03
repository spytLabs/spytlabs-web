import type { Metadata } from "next";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const content: ServicePageProps = {
  title: "Automation.",
  eyebrow: "AI agents & workflows",
  subtitle: "Intelligent systems that handle the work your team doesn't want to do, around the clock.",
  intro: {
    lead: "AI-powered workflows",
    accent: "that actually work.",
    body: "From orders to customer service, we automate what slows your team down, built on n8n, Make and custom APIs.",
  },
  media: { kind: "workflow", src: "/case-studies/sales-outreach-agent/workflow.png", alt: "A live spytLabs sales outreach workflow", caption: "A live workflow we built. 40+ connected steps, from lead sources to sending and follow-ups." },
  capabilities: [
    { title: "Sales & lead generation agents", body: "Agents that find, verify, email and follow up with leads on their own, handing reps only the prospects who replied." },
    { title: "Order management & fulfilment", body: "The full order lifecycle automated, from capture to delivery, connected to your store, payments and inventory." },
    { title: "Customer service & support", body: "AI agents that answer FAQs, sort tickets and escalate complex issues to people, 24/7 across every channel." },
    { title: "Connected workflows & integrations", body: "Your CRM, ERP, HR and communication tools joined into one automated flow, with monitoring built in." },
    { title: "Documents, invoices & reporting", body: "OCR and data extraction for invoices and documents, plus dashboards that keep every number in one place." },
  ],
  proof: {
    client: "B2B services firm",
    headline: "Five people's prospecting, now one autonomous agent.",
    stats: [
      { value: "3×", label: "Booked meetings in 90 days" },
      { value: "2,500+", label: "Qualified leads a week, up from ~150" },
      { value: "<2h", label: "Prospecting a week, down from 32" },
    ],
  },
  portfolio: { label: "Automation portfolio", href: "https://www.spytlabs.com/r/automation-portfolio" },
};

export default function AutomationPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = {
  title: "Automation | spytLabs",
  description:
    "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
  alternates: { canonical: "/automation" },
  openGraph: {
    title: "Automation | spytLabs",
    description:
      "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
    url: "/automation",
    images: [
      {
        url: "/figma-assets/automation-team.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation | spytLabs",
    description:
      "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
    images: ["/figma-assets/automation-team.jpg"],
  },
};
