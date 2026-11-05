import Link from "next/link";
import AutoSlider from "./AutoSlider";
import ContactFooterSection from "./contactFooterSection";
import PageHeroSection from "./pageHeroSection";
import ReelVideo from "./ReelVideo";
import SiteShowcase from "./siteShowcase";

// Real project media only; no stock or generated imagery
export type ServiceMedia =
  | { kind: "reels"; items: { src: string; poster: string; label: string }[] }
  | { kind: "browser"; video: string; poster: string; url: string; label: string }
  | { kind: "screens"; items: { src: string; alt: string }[] }
  | { kind: "workflow"; src: string; alt: string; caption: string };

export type ServicePageProps = {
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: { lead: string; accent: string; body: string };
  media: ServiceMedia;
  capabilities: { title: string; body: string }[];
  proof: {
    client: string;
    logo?: string;
    headline: string;
    stats: { value: string; label: string }[];
  };
  portfolio: { label: string; href: string };
  // Show the "more websites we've built" screenshots (web + design pages)
  showSites?: boolean;
};

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function Media({ media }: { media: ServiceMedia }) {
  if (media.kind === "reels") {
    return (
      <AutoSlider className="flex gap-3 max-lg:-mx-5.5 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:px-5.5 max-lg:[scrollbar-width:none] lg:grid lg:grid-cols-4">
        {media.items.map((reel) => (
          <div key={reel.src} className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#111114] max-lg:w-[58vw] max-lg:max-w-64 max-lg:shrink-0 max-lg:snap-start">
            <ReelVideo src={reel.src} poster={reel.poster} label={reel.label} />
          </div>
        ))}
      </AutoSlider>
    );
  }

  if (media.kind === "browser") {
    return (
      <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
        <div className="flex items-center gap-3 border-b border-black/10 px-4 py-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-black/15" />
            <span className="size-2.5 rounded-full bg-black/15" />
            <span className="size-2.5 rounded-full bg-black/15" />
          </span>
          <span className="mx-auto w-full max-w-md truncate rounded-full bg-[#f4f4f6] px-3 py-1 text-center text-[13px] text-[#77767e]">{media.url}</span>
          <span className="w-10" />
        </div>
        <div className="relative aspect-[16/10]">
          <ReelVideo src={media.video} poster={media.poster} label={media.label} />
        </div>
      </div>
    );
  }

  if (media.kind === "screens") {
    return (
      <div className="grid gap-3 md:grid-cols-3">
        {media.items.map((shot) => (
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="aspect-[16/10] w-full rounded-lg border border-black/10 object-cover object-top"
            draggable={false}
          />
        ))}
      </div>
    );
  }

  return (
    <figure className="m-0 rounded-lg bg-[#f4f4f6] p-5 sm:p-10">
      <div className="overflow-x-auto [scrollbar-width:none]">
        <img src={media.src} alt={media.alt} className="block h-auto w-full min-w-200" draggable={false} />
      </div>
      <figcaption className="mt-5 text-sm text-[#77767e]">{media.caption}</figcaption>
    </figure>
  );
}

export default function ServicePage({ title, eyebrow, subtitle, intro, media, capabilities, proof, portfolio, showSites }: ServicePageProps) {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <PageHeroSection
        title={title}
        eyebrow={eyebrow}
        subtitle={subtitle}
        showActions
        secondaryAction={{ label: portfolio.label, href: portfolio.href, external: true }}
      />

      {/* Intro statement + real work */}
      <section className="flex flex-col gap-12 px-12.5 pt-22 pb-16 sm:gap-16 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-10">
        <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="m-0 max-w-220 section-title font-semibold text-black">
            {intro.lead} <span className="text-[#2d0da0]">{intro.accent}</span>
          </h2>
          <p className="m-0 max-w-120 text-[clamp(15px,1.25vw,22px)] leading-[1.45] text-[#77767e]">{intro.body}</p>
        </header>
        <Media media={media} />
      </section>

      {/* Capabilities */}
      <section className="px-12.5 pb-22 max-[1060px]:px-5.5 max-[1060px]:pb-14">
        <p className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">What we do</p>
        <ol className="m-0 list-none border-t border-black/15 p-0">
          {capabilities.map((capability, i) => (
            <li
              key={capability.title}
              className="grid gap-3 border-b border-black/15 py-8 sm:py-10 lg:grid-cols-[80px_minmax(0,5fr)_minmax(0,6fr)] lg:gap-10"
            >
              <span className="text-[clamp(18px,1.4vw,24px)] font-medium text-[#2d0da0]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 text-[clamp(26px,2.6vw,44px)] leading-[1.08] font-semibold tracking-[-0.03em] text-[#111114]">
                {capability.title}
              </h3>
              <p className="m-0 text-[clamp(15px,1.15vw,20px)] leading-[1.5] text-[#54535c]">{capability.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {showSites && <SiteShowcase />}

      {/* Proof from a real case study */}
      <section className="px-12.5 pb-6 max-[1060px]:px-5.5">
        <div className="grid gap-10 rounded-lg bg-[#111114] p-8 text-white sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:p-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="m-0 text-sm font-medium tracking-wide text-white/60 uppercase">Case study</p>
              {proof.logo ? (
                <img src={proof.logo} alt={proof.client} className="mt-6 h-14 w-auto sm:h-16" draggable={false} />
              ) : (
                <p className="m-0 mt-6 text-[clamp(18px,1.4vw,24px)] font-medium">{proof.client}</p>
              )}
              <h2 className="m-0 mt-5 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">{proof.headline}</h2>
            </div>
            <Link href="/#work" className="group flex w-fit items-center gap-2 text-[15px] font-medium text-white/85 hover:text-white">
              Read the case study
              <ArrowIcon className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <div className="flex flex-col justify-end">
            {proof.stats.map((stat) => (
              <div key={stat.label} className="flex items-end justify-between gap-6 border-b border-white/20 py-5 first:pt-0">
                <p className="m-0 max-w-60 text-[clamp(14px,1.05vw,17px)] text-white/65">{stat.label}</p>
                <p className="m-0 text-[clamp(40px,4.5vw,76px)] leading-none font-semibold tracking-[-0.04em]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-12.5 pt-16 pb-6 max-[1060px]:px-5.5 max-[1060px]:pt-10">
        <a
          href={portfolio.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-6 border-y border-black/15 py-8 text-[#111114]"
        >
          <span>
            <span className="block text-sm font-medium tracking-wide text-[#77767e] uppercase">More work</span>
            <span className="mt-2 block text-[clamp(30px,4vw,68px)] leading-none font-semibold tracking-[-0.04em] transition-colors group-hover:text-[#2d0da0]">
              {portfolio.label}
            </span>
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#111114] text-white transition-all group-hover:rotate-45 group-hover:bg-[#3200eb] sm:size-16">
            <ArrowIcon className="size-5" />
          </span>
        </a>
      </section>

      <ContactFooterSection />
    </main>
  );
}
