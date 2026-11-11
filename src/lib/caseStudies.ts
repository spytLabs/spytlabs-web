// Published case studies. Rendered on the home page and at /work/<slug>.

// Portrait tiles: vertical reels (play while on screen) and behind-the-scenes photos
export type GalleryItem =
  | { kind: "reel"; src: string; poster: string; caption: string; views?: string }
  | { kind: "photo"; src: string; caption: string; aspect?: "portrait" };

export type CaseStudy = {
  slug: string;
  lastModified: string;
  seoTitle: string;
  metaDescription: string;
  // Long-form copy for /work/<slug>; outcomes are full sentences so they still read when quoted alone
  story: { heading: string; body: string }[];
  outcomes: string[];
  serviceLinks: { label: string; href: string }[];
  type: string;
  client: string;
  logo?: string;
  role?: string;
  headline: string;
  brief: string;
  services: string[];
  results: { value: string; label: string }[];
  // One of: a hero visual, a gallery of portrait reels/photos, or a before/after panel
  media?: { kind: "image" | "video"; src: string; alt: string };
  gallery?: GalleryItem[];
  galleryCols?: 3 | 4;
  // Hide caption overlays when the reels/photos already carry their own titles
  galleryLabels?: boolean;
  // Wide layout: before → after numbers on top, a real workflow screenshot full-width below
  pipeline?: { src: string; alt: string; caption: string; shifts: { label: string; before: string; after: string }[] };
  // Website: a scrolling screen recording in a browser frame, plus page screenshots
  site?: { video: string; poster: string; url: string; shots: { src: string; alt: string }[] };
  theme: "light" | "dark" | "brand";
  // Kept in code but not rendered, e.g. while waiting on client approval
  hidden?: boolean;
};

const LITFEST = "/case-studies/colombo-litfest";
const SPILLBURG = "/case-studies/spillburg";
const NINETYNINE = "/case-studies/ninetynine";
const VINCENT_PELLE = "/case-studies/vincent-pelle";

export const caseStudies: CaseStudy[] = [
  {
    slug: "spillburg",
    lastModified: "2026-11-08",
    seoTitle: "Corporate Website Case Study: Spillburg",
    metaDescription: "How spytLabs designed and built a 15-page corporate website for Spillburg Corporate Services in Colombo, with eight service pages and an investor news hub.",
    story: [
      { heading: "The client", body: "Spillburg Corporate Services helps investors set up in Sri Lanka. Its website is often the first thing a prospective investor checks, so it has to look credible straight away and explain a broad range of services clearly." },
      { heading: "What we built", body: "We designed and built the site from scratch. It has eight dedicated service pages, including one for mergers and acquisitions, and a news hub that tracks the Colombo Stock Exchange, the Central Bank and the Treasury." },
    ],
    outcomes: [
      "The finished Spillburg website has 15 pages, including 8 dedicated service pages.",
      "The site scores 100 for best practices in Lighthouse.",
      "The site scores 96 for accessibility in Lighthouse.",
    ],
    serviceLinks: [
      { label: "Software development", href: "/technology" },
      { label: "Web design", href: "/design" },
    ],
    type: "Website",
    client: "Spillburg Corporate Services",
    role: "Corporate website · Colombo, Sri Lanka",
    headline: "A corporate site that earns investor trust at first glance.",
    brief:
      "Spillburg helps investors set up in Sri Lanka. We designed and built their site from scratch, from eight service pages to a news hub tracking the CSE, Central Bank and Treasury.",
    services: ["UI/UX design", "Web development", "SEO"],
    results: [
      { value: "15", label: "Pages, including 8 dedicated service pages" },
      { value: "100", label: "Lighthouse best practices score" },
      { value: "96", label: "Lighthouse accessibility score" },
    ],
    site: {
      video: `${SPILLBURG}/scroll.mp4`,
      poster: `${SPILLBURG}/scroll.jpg`,
      url: "spillburg.com",
      shots: [
        { src: `${SPILLBURG}/services.jpg`, alt: "Spillburg services page" },
        { src: `${SPILLBURG}/mergers-and-acquisitions.jpg`, alt: "Spillburg Mergers & Acquisitions service page" },
        { src: `${SPILLBURG}/contact.jpg`, alt: "Spillburg contact page" },
      ],
    },
    theme: "light",
  },
  {
    slug: "vincent-pelle",
    lastModified: "2026-11-11",
    seoTitle: "E-commerce Automation Case Study: Vincent Pelle",
    metaDescription: "How spytLabs connected Vincent Pelle's WooCommerce store, Koombiyo courier and WhatsApp updates into one order dashboard with n8n, Twilio and Tauri.",
    story: [
      { heading: "The problem", body: "Vincent Pelle runs its online store on WordPress and ships through Koombiyo, but the two systems didn't talk to each other. Every order was re-typed into Koombiyo by hand, customer updates went out separately, and checking an order's status or message history meant switching between platforms. Waybills added more admin on top." },
      { heading: "Automated order processing", body: "We connected the store to Koombiyo with n8n. When a customer places an order, the workflow picks it up and creates the delivery order in Koombiyo, so nobody has to copy details across. Orders can also stop in the dashboard first, so the team can check or edit them before they go to the courier." },
      { heading: "WhatsApp updates", body: "Through Twilio and WhatsApp, customers hear from Vincent Pelle automatically when their order is placed, dispatched and delivered, and get a review request after it arrives. The team no longer sends these updates one by one." },
      { heading: "A desktop app to run it all", body: "We built a Tauri desktop app around how Vincent Pelle works. From one place the team can review and edit orders, manage deliveries, print waybills, see order statistics, check the status of every WhatsApp message and watch orders flow between the store and Koombiyo." },
      { heading: "Working around Koombiyo's API", body: "Koombiyo didn't offer a public API that covered everything the client needed. We worked with Koombiyo to get its API documentation, and where features still weren't exposed, we reverse-engineered its web dashboard to build them into the integration." },
    ],
    outcomes: [
      "Orders now flow from the WooCommerce store to the Koombiyo courier without being re-typed by hand.",
      "Customers get WhatsApp updates automatically at confirmation, dispatch and delivery, followed by a review request.",
      "The team reviews orders, prints waybills and tracks every message from one desktop app.",
    ],
    serviceLinks: [
      { label: "AI automation", href: "/automation" },
      { label: "Software development", href: "/technology" },
    ],
    type: "Tech solution",
    client: "Vincent Pelle",
    logo: `${VINCENT_PELLE}/logo.webp`,
    role: "E-commerce & retail · Order management and logistics automation",
    headline: "Store, courier and WhatsApp, run from one dashboard.",
    brief:
      "We joined Vincent Pelle's store to its Koombiyo courier with n8n, automated WhatsApp updates through Twilio, and built a desktop app to review orders, print waybills and track every message.",
    services: ["Workflow automation", "System integration", "Custom software"],
    results: [],
    media: { kind: "image", src: `${VINCENT_PELLE}/portal.jpg`, alt: "The Vincent Pelle order dashboard, with customer details blurred" },
    theme: "light",
  },
  {
    slug: "colombo-literary-festival",
    lastModified: "2026-11-08",
    seoTitle: "Event Video Case Study: Colombo Literary Festival",
    metaDescription: "How spytLabs, official videography partner of ColLit 2026, reached 730,000 organic Instagram reel views across six festival days in Colombo.",
    story: [
      { heading: "The client", body: "The Colombo Literary Festival brought in spytLabs as its official videography partner for ColLit 2026, and the festival's Instagram account, @colombo_litfest, was built from scratch." },
      { heading: "What we did", body: "We filmed the festival and published it in near real time, with speaker clips and daily recaps going out while people were still talking about each session. We handled videography, editing, Instagram strategy and account management." },
    ],
    outcomes: [
      "The ColLit reels reached 730,000 views across the six festival days.",
      "The best-performing reel reached 497,000 views.",
      "All of that reach was organic, with no paid boosts.",
    ],
    serviceLinks: [{ label: "Video production", href: "/productions" }],
    type: "Production",
    client: "Colombo Literary Festival",
    logo: `${LITFEST}/logo.svg`,
    role: "Official videography partner · ColLit 2026",
    headline: "730K reel views in six festival days.",
    brief:
      "We helped the festival build @colombo_litfest on Instagram from scratch, then filmed and published ColLit in near real time with speaker clips and daily recaps. Most of the views came in the six days of the event, all organic with no paid boosts.",
    services: ["Videography", "Editing", "Instagram strategy", "Account management"],
    results: [
      { value: "730K", label: "Reel views across the six festival days" },
      { value: "100%", label: "Organic reach, no paid boosts" },
      { value: "497K", label: "Views on the best-performing reel" },
    ],
    gallery: [
      { kind: "reel", src: `${LITFEST}/reel-1.mp4`, poster: `${LITFEST}/reel-1.jpg`, caption: "Opening ceremony" },
      { kind: "photo", src: `${LITFEST}/photo-1.jpg`, caption: "Behind the scenes" },
      { kind: "reel", src: `${LITFEST}/reel-2.mp4`, poster: `${LITFEST}/reel-2.jpg`, caption: "Day 3" },
      { kind: "reel", src: `${LITFEST}/reel-3.mp4`, poster: `${LITFEST}/reel-3.jpg`, caption: "Day 3" },
      { kind: "photo", src: `${LITFEST}/photo-2.jpg`, caption: "Behind the scenes" },
      { kind: "reel", src: `${LITFEST}/reel-4.mp4`, poster: `${LITFEST}/reel-4.jpg`, caption: "Day 4 recap" },
      { kind: "photo", src: `${LITFEST}/photo-3.jpg`, caption: "Behind the scenes" },
      { kind: "reel", src: `${LITFEST}/reel-5.mp4`, poster: `${LITFEST}/reel-5.jpg`, caption: "Festival highlights" },
    ],
    theme: "dark",
  },
  {
    slug: "sales-outreach-agent",
    lastModified: "2026-11-08",
    seoTitle: "AI Sales Agent Case Study: Automated Lead Outreach",
    metaDescription: "How spytLabs built an AI sales outreach agent for a B2B services firm, raising qualified leads from about 150 to over 2,500 a week.",
    story: [
      { heading: "The problem", body: "A B2B services firm had people spending most of their week on prospecting: finding leads, checking them, writing emails and chasing replies. The client's name is withheld." },
      { heading: "What we built", body: "We built an autonomous sales outreach agent that finds, verifies, emails and follows up with leads on its own. Sales reps only step in once a prospect replies. The live workflow runs across more than 40 connected steps, from lead sources through to sending and follow-ups." },
    ],
    outcomes: [
      "Qualified leads rose from about 150 a week to more than 2,500 a week.",
      "Time spent on prospecting fell from 32 hours a week to under 2 hours.",
      "Meetings booked rose from 12 a month to 40 a month.",
    ],
    serviceLinks: [{ label: "AI automation", href: "/automation" }],
    type: "Tech solution",
    client: "B2B services firm",
    role: "Sales Outreach Agent · AI automation",
    headline: "Five people's prospecting, now one autonomous agent.",
    brief: "An agent that finds, verifies, emails and follows up with leads on its own. Reps only step in once a prospect replies.",
    services: [],
    results: [],
    pipeline: {
      src: "/case-studies/sales-outreach-agent/workflow.png",
      alt: "The live Sales Outreach Agent workflow",
      caption: "The live workflow. 40+ connected steps, from lead sources to sending and follow-ups.",
      shifts: [
        { label: "Qualified leads a week", before: "150", after: "2,500+" },
        { label: "Hours prospecting a week", before: "32", after: "<2" },
        { label: "Meetings booked a month", before: "12", after: "40" },
      ],
    },
    theme: "brand",
  },
  {
    slug: "ninetynine",
    lastModified: "2026-11-08",
    seoTitle: "Restaurant Video Case Study: NinetyNine",
    metaDescription: "Food and drink reels and photography by spytLabs, the videography team behind NinetyNine Restaurant & Lounge.",
    story: [
      { heading: "The client", body: "NinetyNine Restaurant & Lounge needs its menu to look as good on a phone as it does on the table, because that is where many guests first see it." },
      { heading: "What we do", body: "We're the videography team behind NinetyNine. We shoot and edit high-end food and drink reels for its social channels, and photograph individual dishes such as the Jaffna prawn curry and the Pavilion signature pizza." },
    ],
    outcomes: [],
    serviceLinks: [{ label: "Video production", href: "/productions" }],
    type: "Production",
    client: "NinetyNine Restaurant & Lounge",
    logo: `${NINETYNINE}/logo.png`,
    role: "Restaurant videography partner",
    headline: "Food reels you can almost taste.",
    brief:
      "We're the videography team behind NinetyNine, shooting high-end food and drink reels that make every dish look as good as it tastes.",
    services: ["Food & drink videography", "Editing", "Social content"],
    results: [],
    galleryCols: 3,
    galleryLabels: false,
    gallery: [
      { kind: "reel", src: `${NINETYNINE}/reel-1.mp4`, poster: `${NINETYNINE}/reel-1.jpg`, caption: "Rooted in simplicity" },
      { kind: "reel", src: `${NINETYNINE}/reel-2.mp4`, poster: `${NINETYNINE}/reel-2.jpg`, caption: "Crisped to perfection" },
      { kind: "reel", src: `${NINETYNINE}/reel-3.mp4`, poster: `${NINETYNINE}/reel-3.jpg`, caption: "The sizzle" },
      { kind: "photo", src: `${NINETYNINE}/photo-1.jpg`, caption: "Jaffna prawn curry", aspect: "portrait" },
      { kind: "photo", src: `${NINETYNINE}/photo-2.jpg`, caption: "Pavilion signature pizza", aspect: "portrait" },
      { kind: "photo", src: `${NINETYNINE}/photo-3.jpg`, caption: "Tropical refreshment", aspect: "portrait" },
    ],
    theme: "dark",
  },
];
