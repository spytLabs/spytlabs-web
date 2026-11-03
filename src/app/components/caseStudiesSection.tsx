import ReelVideo from "./ReelVideo";

// Short links managed in /r/admin on the live site; absolute so they work on previews too
const portfolios = [
  { label: "Production portfolio", href: "https://www.spytlabs.com/r/production-portfolio" },
  { label: "Website portfolio", href: "https://www.spytlabs.com/r/website-portfolio" },
  { label: "Design portfolio", href: "https://www.spytlabs.com/r/design-portfolio" },
  { label: "Automation portfolio", href: "https://www.spytlabs.com/r/automation-portfolio" },
];

// Portrait tiles: vertical reels (play while on screen) and behind-the-scenes photos
type GalleryItem =
  | { kind: "reel"; src: string; poster: string; caption: string; views?: string }
  | { kind: "photo"; src: string; caption: string; aspect?: "portrait" };

type CaseStudy = {
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
};

const LITFEST = "/case-studies/colombo-litfest";
const SPILLBURG = "/case-studies/spillburg";
const NINETYNINE = "/case-studies/ninetynine";

const cases: CaseStudy[] = [
  {
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

const themes = {
  light: { card: "bg-[#f4f4f6] text-[#111114]", muted: "text-[#54535c]", rule: "border-black/15" },
  dark: { card: "bg-[#111114] text-white", muted: "text-white/65", rule: "border-white/20" },
  brand: { card: "bg-[#3200eb] text-white", muted: "text-white/75", rule: "border-white/25" },
};

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 fill-current">
      <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
    </svg>
  );
}

function GalleryTile({ item, showLabel = true }: { item: GalleryItem; showLabel?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-white/[0.06] max-lg:w-[44vw] max-lg:max-w-52 max-lg:shrink-0 max-lg:snap-start ${
        item.kind === "photo" && item.aspect === "portrait" ? "aspect-[4/5]" : "aspect-[9/16]"
      }`}
    >
      {item.kind === "reel" ? (
        <ReelVideo src={item.src} poster={item.poster} label={item.caption} />
      ) : (
        <img className="absolute inset-0 h-full w-full object-cover" src={item.src} alt={item.caption} draggable={false} />
      )}
      {showLabel && (
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-3 pt-10 text-white">
        {item.kind === "reel" ? (
          <>
            <p className="m-0 flex items-center gap-1.5 text-[12px] font-semibold tracking-wide uppercase">
              <PlayIcon />
              {item.views ? `${item.views} views` : "Reel"}
            </p>
            <p className="m-0 mt-0.5 text-[13px] leading-snug text-white/75">{item.caption}</p>
          </>
        ) : (
          <p className="m-0 text-[13px] leading-snug font-medium text-white/90">{item.caption}</p>
        )}
      </div>
      )}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="flex flex-col gap-10 px-12.5 pt-22 pb-22 sm:gap-14 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-14" aria-label="Case studies" id="work">
      <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Selected work</p>
          <h2 className="m-0 mt-3 section-title font-semibold text-black">
            Real projects. <span className="text-[#2d0da0]">Real results.</span>
          </h2>
        </div>
        <a
          href="#portfolios"
          className="flex shrink-0 items-center gap-2 self-start rounded-full border border-black/15 px-5 py-2.5 text-[15px] font-medium text-[#111114] transition-colors hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white lg:self-auto"
        >
          Browse more projects
          <ArrowIcon />
        </a>
      </header>

      {/* Cards stick and stack on desktop; each one slides over the previous */}
      <div className="flex flex-col gap-6">
        {cases.map((study, i) => {
          const theme = themes[study.theme];

          if (study.pipeline) {
            const { pipeline } = study;
            return (
              <article
                key={study.client}
                className={`flex flex-col justify-between overflow-hidden rounded-lg lg:sticky lg:min-h-[calc(100vh-96px)] ${theme.card}`}
                style={{ top: `${24 + i * 24}px` }}
              >
                <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:p-12">
                  <div>
                    <p className="m-0 text-[clamp(18px,1.4vw,24px)] font-medium">{study.client}</p>
                    {study.role && <p className={`m-0 mt-1 text-sm font-medium ${theme.muted}`}>{study.role}</p>}
                    <h3 className="m-0 mt-6 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">
                      {study.headline}
                    </h3>
                    <p className={`m-0 mt-5 max-w-110 text-[clamp(15px,1.1vw,19px)] leading-[1.45] ${theme.muted}`}>{study.brief}</p>
                  </div>

                  <div className="flex flex-col justify-end">
                    {pipeline.shifts.map((shift) => (
                      <div key={shift.label} className={`flex items-end justify-between gap-6 border-b py-4 first:pt-0 ${theme.rule}`}>
                        <p className={`m-0 text-[clamp(14px,1.05vw,17px)] ${theme.muted}`}>{shift.label}</p>
                        <p className="m-0 flex items-baseline gap-3 whitespace-nowrap">
                          <span className={`text-[clamp(20px,1.8vw,30px)] font-medium line-through decoration-1 ${theme.muted}`}>{shift.before}</span>
                          <span className="text-[clamp(36px,4vw,68px)] leading-none font-semibold tracking-[-0.04em]">{shift.after}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <figure className="m-3 mt-0 rounded-md bg-[#f6f7fb] p-5 sm:p-8">
                  <div className="overflow-x-auto [scrollbar-width:none]">
                    <img src={pipeline.src} alt={pipeline.alt} className="block h-auto w-full min-w-200" draggable={false} />
                  </div>
                  <figcaption className="mt-4 text-[13px] text-[#77767e] sm:text-sm">{pipeline.caption}</figcaption>
                </figure>
              </article>
            );
          }

          return (
            <article
              key={study.client}
              className={`grid overflow-hidden rounded-lg lg:sticky lg:min-h-[calc(100vh-96px)] grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] ${theme.card}`}
              style={{ top: `${24 + i * 24}px` }}
            >
              <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12">
                <div>
                  {study.logo ? (
                    <img src={study.logo} alt={study.client} className="h-16 w-auto sm:h-20" draggable={false} />
                  ) : (
                    <p className="m-0 text-[clamp(18px,1.4vw,24px)] font-medium">{study.client}</p>
                  )}
                  {study.role && <p className={`m-0 mt-4 text-sm font-medium ${theme.muted}`}>{study.role}</p>}
                  <h3 className="m-0 mt-2 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">
                    {study.headline}
                  </h3>
                  <p className={`m-0 mt-5 max-w-120 text-[clamp(15px,1.1vw,19px)] leading-[1.45] ${theme.muted}`}>{study.brief}</p>
                  <p className={`m-0 mt-5 text-[clamp(14px,1vw,17px)] font-medium ${theme.muted}`}>
                    {study.services.join("  ·  ")}
                  </p>
                </div>

                {study.results.length > 0 && (
                <div className={`grid grid-cols-3 gap-4 border-t pt-6 ${theme.rule}`}>
                  {study.results.map((result, r) => (
                    <div key={r}>
                      <p className="m-0 text-[clamp(30px,3vw,52px)] leading-none font-semibold tracking-[-0.03em] max-sm:text-[24px]">{result.value}</p>
                      <p className={`m-0 mt-2 text-[13px] leading-snug sm:text-sm ${theme.muted}`}>{result.label}</p>
                    </div>
                  ))}
                </div>
                )}
              </div>

              {study.site ? (
                <div className="flex min-w-0 flex-col justify-center gap-3 p-3 max-lg:order-first lg:pl-0">
                  <div className="overflow-hidden rounded-md border border-black/10 bg-white">
                    <div className="flex items-center gap-3 border-b border-black/10 px-4 py-2.5">
                      <span aria-hidden="true" className="flex gap-1.5">
                        <span className="size-2.5 rounded-full bg-black/15" />
                        <span className="size-2.5 rounded-full bg-black/15" />
                        <span className="size-2.5 rounded-full bg-black/15" />
                      </span>
                      <span className="flex-1 truncate rounded-full bg-[#f4f4f6] px-3 py-1 text-center text-[12px] text-[#77767e]">{study.site.url}</span>
                    </div>
                    <div className="relative aspect-[16/10]">
                      <ReelVideo src={study.site.video} poster={study.site.poster} label={`${study.client} website, scrolling`} />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {study.site.shots.map((shot) => (
                      <img
                        key={shot.src}
                        src={shot.src}
                        alt={shot.alt}
                        className="aspect-[16/10] w-full rounded-md border border-black/10 object-cover object-top"
                        draggable={false}
                      />
                    ))}
                  </div>
                </div>
              ) : study.gallery ? (
                <div className="flex min-w-0 items-center p-3 max-lg:order-first lg:pl-0">
                  <div className={`flex w-full items-start gap-3 max-lg:-mr-3 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:[scrollbar-width:none] lg:grid ${study.galleryCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                    {study.gallery.map((item) => <GalleryTile key={item.src} item={item} showLabel={study.galleryLabels !== false} />)}
                  </div>
                </div>
              ) : study.media ? (
                <div className="relative min-h-72 max-lg:order-first max-lg:aspect-[4/3] max-lg:min-h-0 lg:m-3 lg:ml-0 lg:overflow-hidden lg:rounded-md">
                  {study.media.kind === "video" ? (
                    <video className="absolute inset-0 h-full w-full object-cover" src={study.media.src} autoPlay loop muted playsInline aria-label={study.media.alt} />
                  ) : (
                    <img className="absolute inset-0 h-full w-full object-cover" src={study.media.src} alt={study.media.alt} draggable={false} />
                  )}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <div id="portfolios" className="scroll-mt-8">
        <p className="m-0 mb-4 text-sm font-medium tracking-wide text-[#77767e] uppercase">Browse more projects</p>
        <ul className="m-0 list-none border-t border-black/15 p-0">
          {portfolios.map((portfolio) => (
            <li key={portfolio.href} className="border-b border-black/15">
              <a
                href={portfolio.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-7 text-[#111114]"
              >
                <span className="text-[clamp(28px,3.2vw,56px)] leading-none font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#2d0da0]">
                  {portfolio.label}
                </span>
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#111114] text-white transition-all group-hover:rotate-45 group-hover:bg-[#3200eb] sm:size-16">
                  <ArrowIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
