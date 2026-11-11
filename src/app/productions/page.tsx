import type { Metadata } from "next";
import { pageMetadata, serviceGraph } from "@/lib/seo";
import ServicePage, { type ServicePageProps } from "../components/servicePage";

const description =
  "Video production company in Colombo, Sri Lanka. spytLabs plans, shoots and edits commercials, social reels, event coverage and product films.";

const content: ServicePageProps = {
  title: "Video production company in Colombo.",
  eyebrow: "Video & creative production",
  subtitle: "Commercials, social reels and photography that stop the scroll and make people act.",
  intro: {
    lead: "Bringing your brand",
    accent: "to life on screen.",
    body: "Great products need a great story. We plan, shoot and edit content built for the feeds your customers actually watch.",
  },
  location:
    "spytLabs is a video production company in Colombo, Sri Lanka. We plan, shoot and edit commercials, social reels, event coverage, and food and product films, and we handle photoshoots too. The same team can run the social account the content goes out on.",
  media: {
    kind: "reels",
    items: [
      { src: "/case-studies/colombo-litfest/reel-1.mp4", poster: "/case-studies/colombo-litfest/reel-1.jpg", label: "Colombo Literary Festival opening ceremony reel" },
      { src: "/case-studies/colombo-litfest/reel-2.mp4", poster: "/case-studies/colombo-litfest/reel-2.jpg", label: "Colombo Literary Festival day 3 reel" },
      { src: "/case-studies/colombo-litfest/reel-4.mp4", poster: "/case-studies/colombo-litfest/reel-4.jpg", label: "Colombo Literary Festival day 4 recap" },
      { src: "/case-studies/colombo-litfest/reel-5.mp4", poster: "/case-studies/colombo-litfest/reel-5.jpg", label: "Colombo Literary Festival highlights" },
    ],
  },
  capabilities: [
    { title: "Commercial & video production", body: "From promotional commercials and campaign films to high-impact social content, video designed to show your value and turn viewers into clients." },
    { title: "Social reels & event coverage", body: "Vertical-first reels, speaker clips and same-day recaps, filmed and published fast enough to ride the moment." },
    { title: "Food & product videography", body: "High-end, appetising close-ups and product shots that make every dish and detail look as good as it is." },
    { title: "Branding & visual identity", body: "Colour palettes, typography and brand guidelines that give your business a distinct, professional voice." },
    { title: "Professional photoshoots", body: "Product, corporate and lifestyle photography so your website and social channels look sharp and credible." },
  ],
  process: [
    { title: "Concept", body: "We start with who the video is for and where it will run, then shape the idea and the format around that." },
    { title: "Pre-production", body: "Scripts, shot lists, locations and schedules are agreed up front, so shoot days go to plan." },
    { title: "Shoot", body: "Our crew films on location, whether that's a commercial set, a restaurant kitchen or a live event." },
    { title: "Edit and deliver", body: "We edit, grade and cut for each platform. For events, reels can go out in near real time while people are still talking about them." },
  ],
  deliverables: [
    "Commercials and campaign films",
    "Instagram reels and short-form video",
    "Event coverage and same-day recaps",
    "Food and product videography",
    "Corporate, product and lifestyle photography",
    "Social account management",
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
    caseStudy: "/work/colombo-literary-festival",
  },
  faqs: [
    { question: "Can you film and post while an event is still running?", answer: "Yes. At the Colombo Literary Festival we filmed and published speaker clips and daily recaps in near real time across all six days." },
    { question: "Do you manage social accounts as well?", answer: "Yes. We can plan, publish and manage the account the content goes out on, as we did for the festival's Instagram." },
    { question: "Do you shoot outside Colombo?", answer: "Tell us the location and dates in your enquiry and we'll confirm what's possible." },
    { question: "How much does a video cost?", answer: "Every production is quoted individually, based on crew, locations, shoot days and how many edits you need. Tell us what you have in mind through the contact page and we'll send a quotation." },
    { question: "How long does a video take?", answer: "It depends on the format. Reels can turn around quickly, while commercials need planning time. You'll get a schedule with your quotation." },
  ],
  related: [
    { label: "Web design & branding", href: "/design", body: "A brand and website that match what people see in your videos." },
    { label: "AI automation", href: "/automation", body: "Follow up automatically with the leads your content brings in." },
  ],
  showProjects: true,
  portfolio: { label: "Production portfolio", href: "https://www.spytlabs.com/r/production-portfolio" },
  schema: serviceGraph({ name: "Commercial & Social Media Video Production", serviceType: "Video production", description, path: "/productions", crumb: "Production" }),
};

export default function ProductionsPage() {
  return <ServicePage {...content} />;
}

export const metadata: Metadata = pageMetadata({
  title: "Video Production Company in Colombo",
  description,
  path: "/productions",
  image: "/og/productions.jpg",
});
