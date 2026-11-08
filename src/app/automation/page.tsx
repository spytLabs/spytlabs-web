import type { Metadata } from "next";
import { pageMetadata, serviceGraph } from "@/lib/seo";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const description =
  "AI automation agency in Sri Lanka. spytLabs builds AI agents and workflows on n8n, Make and custom APIs for sales, orders, support and reporting.";

const content: ServicePageProps = {
  title: "AI automation agency in Sri Lanka.",
  eyebrow: "AI agents & workflows",
  subtitle: "Intelligent systems that handle the work your team doesn't want to do, around the clock.",
  intro: {
    lead: "AI-powered workflows",
    accent: "that actually work.",
    body: "From orders to customer service, we automate what slows your team down, built on n8n, Make and custom APIs.",
  },
  location:
    "spytLabs is an AI automation agency in Sri Lanka, based in Colombo. We build AI agents and automated workflows for teams here and overseas, connected to the tools you already use and monitored so you know when something needs attention.",
  media: { kind: "workflow", src: "/case-studies/sales-outreach-agent/workflow.png", width: 1685, height: 225, alt: "A live spytLabs sales outreach workflow", caption: "A live workflow we built. 40+ connected steps, from lead sources to sending and follow-ups." },
  capabilities: [
    { title: "Sales & lead generation agents", body: "Agents that find, verify, email and follow up with leads on their own, handing reps only the prospects who replied." },
    { title: "Order management & fulfilment", body: "The full order lifecycle automated, from capture to delivery, connected to your store, payments and inventory." },
    { title: "Customer service & support", body: "AI agents that answer FAQs, sort tickets and escalate complex issues to people, 24/7 across every channel." },
    { title: "Connected workflows & integrations", body: "Your CRM, ERP, HR and communication tools joined into one automated flow, with monitoring built in." },
    { title: "Documents, invoices & reporting", body: "OCR and data extraction for invoices and documents, plus dashboards that keep every number in one place." },
  ],
  process: [
    { title: "Map the work", body: "We look at how the task is done today, who does it, which tools it touches and where the time goes, then pick what's worth automating first." },
    { title: "Design the workflow", body: "We agree each step, the data it can access, and where a person needs to stay in the loop, before anything is built." },
    { title: "Build and connect", body: "We build the workflow on n8n, Make or custom APIs, connect it to your systems and test it against real cases." },
    { title: "Launch and monitor", body: "It goes live with monitoring built in, so failures surface quickly instead of quietly dropping work." },
  ],
  deliverables: [
    "AI sales and outreach agents",
    "AI customer support agents",
    "Order and fulfilment workflows",
    "CRM, ERP and HR integrations",
    "Invoice and document extraction",
    "Reporting dashboards",
  ],
  proof: {
    client: "Sales outreach agent",
    headline: "Five people's prospecting, now one autonomous agent.",
    stats: [
      { value: "3×", label: "Booked meetings in 90 days" },
      { value: "2,500+", label: "Qualified leads a week, up from ~150" },
      { value: "<2h", label: "Prospecting a week, down from 32" },
    ],
    caseStudy: "/work/sales-outreach-agent",
  },
  faqs: [
    { question: "What kind of work can be automated?", answer: "Anything repetitive that follows a pattern: finding and contacting leads, processing orders, answering common customer questions, moving data between systems, reading invoices and building reports." },
    { question: "Which tools do you build with?", answer: "Mainly n8n, Make and custom APIs, connected to the CRM, ERP, store and communication tools you already use." },
    { question: "Does automation replace my team?", answer: "It takes over the repetitive part of the job. People stay in charge of the conversations and decisions that need judgement. In our sales agent, reps step in as soon as a prospect replies." },
    { question: "How is our data handled?", answer: "We agree what each workflow can access before we build it, and business information shared with us is covered by the confidentiality terms in our Terms of Service." },
    { question: "How much does automation cost?", answer: "Every project is quoted individually, based on what's being automated and the systems involved. Tell us about the work through the contact page and we'll send a quotation." },
  ],
  related: [
    { label: "Software development", href: "/technology", body: "Custom platforms, APIs and infrastructure for when off-the-shelf tools run out." },
    { label: "Web design", href: "/design", body: "Interfaces and dashboards that make automated systems easy to use." },
  ],
  portfolio: { label: "Automation portfolio", href: "https://www.spytlabs.com/r/automation-portfolio" },
  schema: serviceGraph({ name: "AI & Workflow Automation", serviceType: "AI automation", description, path: "/automation", crumb: "Automation" }),
};

export default function AutomationPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = pageMetadata({
  title: "AI Automation Agency in Sri Lanka",
  description,
  path: "/automation",
  image: "/og/automation.jpg",
});
