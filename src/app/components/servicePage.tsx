import Image from "next/image";
import Link from "next/link";
import AutoSlider from "./AutoSlider";
import ContactFooterSection from "./contactFooterSection";
import JsonLd from "./JsonLd";
import PageHeroSection from "./pageHeroSection";
import ProjectShowcase from "./projectShowcase";
import ReelVideo from "./ReelVideo";
import SiteShowcase from "./siteShowcase";

// Real project media only; no stock or generated imagery
export type ServiceMedia =
  | { kind: "reels"; items: { src: string; poster: string; label: string }[] }
  | { kind: "browser"; video: string; poster: string; url: string; label: string }
  | { kind: "screens"; items: { src: string; alt: string }[] }
  | { kind: "workflow"; src: string; alt: string; caption: string; width: number; height: number };

export type ServicePageProps = {
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: { lead: string; accent: string; body: string };
  // Plain-language statement of what this service is and where we are
  location: string;
  media: ServiceMedia;
  capabilities: { title: string; body: string }[];
  process: { title: string; body: string }[];
  deliverables: string[];
  // One or more real case studies, shown as dark cards
  proof: ProofCard | ProofCard[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string; body: string }[];
  portfolio: { label: string; href: string };
  // Names of the "more websites we've built" entries to show on this page
  showSites?: string[];
  // Show the "more productions we've made" list
  showProjects?: boolean;
  schema: object;
};

type ProofCard = {
  client: string;
  logo?: string;
  headline: string;
  stats: { value: string; label: string }[];
  caseStudy: string;
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
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            width={1600}
            height={1000}
            sizes="(min-width: 768px) 33vw, 100vw"
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
        <Image src={media.src} alt={media.alt} width={media.width} height={media.height} sizes="(min-width: 800px) 100vw, 800px" className="block h-auto w-full min-w-200" draggable={false} />
      </div>
      <figcaption className="mt-5 text-sm text-[#77767e]">{media.caption}</figcaption>
    </figure>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">{children}</h2>;
}

export default function ServicePage({
  title,
  eyebrow,
  subtitle,
  intro,
  location,
  media,
  capabilities,
  process,
  deliverables,
  proof,
  faqs,
  related,
  portfolio,
  showSites,
  showProjects,
  schema,
}: ServicePageProps) {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <JsonLd data={schema} />
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
        <p className="m-0 max-w-220 text-[clamp(18px,1.6vw,28px)] leading-[1.4] font-medium tracking-[-0.01em] text-[#111114]">{location}</p>
      </section>

      {/* Capabilities */}
      <section className="px-12.5 pb-22 max-[1060px]:px-5.5 max-[1060px]:pb-14">
        <SectionLabel>What we do</SectionLabel>
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

      {/* Process + deliverables */}
      <section className="grid gap-14 px-12.5 pb-22 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 max-[1060px]:px-5.5 max-[1060px]:pb-14">
        <div>
          <SectionLabel>How it works</SectionLabel>
          <ol className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
            {process.map((step, i) => (
              <li key={step.title} className="rounded-lg bg-[#f4f4f6] p-6 sm:p-7">
                <span className="text-[15px] font-medium text-[#2d0da0]">Step {i + 1}</span>
                <h3 className="m-0 mt-2 text-[clamp(22px,1.8vw,30px)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#111114]">{step.title}</h3>
                <p className="m-0 mt-3 text-[clamp(15px,1.05vw,18px)] leading-[1.5] text-[#54535c]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionLabel>What you can get from us</SectionLabel>
          <ul className="m-0 list-none border-t border-black/15 p-0">
            {deliverables.map((item) => (
              <li key={item} className="border-b border-black/15 py-3.5 text-[clamp(17px,1.3vw,22px)] font-medium tracking-[-0.01em] text-[#111114]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showSites && <SiteShowcase only={showSites} />}
      {showProjects && <ProjectShowcase />}

      {/* Proof from a real case study */}
      <section className="flex flex-col gap-3 px-12.5 pb-6 max-[1060px]:px-5.5">
        {[proof].flat().map((proof) => (
          <div key={proof.caseStudy} className="grid gap-10 rounded-lg bg-[#111114] p-8 text-white sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:p-12">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="m-0 text-sm font-medium tracking-wide text-white/60 uppercase">Case study</p>
                {proof.logo ? (
                  <img src={proof.logo} alt={proof.client} loading="lazy" className="mt-6 h-14 w-auto sm:h-16" draggable={false} />
                ) : (
                  <p className="m-0 mt-6 text-[clamp(18px,1.4vw,24px)] font-medium">{proof.client}</p>
                )}
                <h2 className="m-0 mt-5 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">{proof.headline}</h2>
              </div>
              <Link href={proof.caseStudy} className="group flex min-h-11 w-fit items-center gap-2 text-[15px] font-medium text-white/85 hover:text-white">
                Read the {proof.client} case study
                <ArrowIcon className="size-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
            <div className="flex flex-col justify-end">
              {proof.stats.map((stat) => (
                // Value comes first in the DOM so the number and its meaning stay together when extracted
                <div key={stat.label} className="flex flex-row-reverse items-end justify-between gap-6 border-b border-white/20 py-5 first:pt-0">
                  <p className="m-0 text-[clamp(40px,4.5vw,76px)] leading-none font-semibold tracking-[-0.04em]">{stat.value}</p>
                  <p className="m-0 max-w-60 text-[clamp(14px,1.05vw,17px)] text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Questions */}
      <section className="px-12.5 pt-16 pb-6 max-[1060px]:px-5.5 max-[1060px]:pt-10">
        <SectionLabel>Common questions</SectionLabel>
        <dl className="m-0 border-t border-black/15">
          {faqs.map((faq) => (
            <div key={faq.question} className="grid gap-2 border-b border-black/15 py-6 lg:grid-cols-2 lg:gap-10">
              <dt className="text-[clamp(20px,1.6vw,28px)] leading-[1.15] font-semibold tracking-[-0.02em] text-[#111114]">{faq.question}</dt>
              <dd className="m-0 text-[clamp(15px,1.15vw,20px)] leading-[1.5] text-[#54535c]">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related services */}
      <section className="px-12.5 pt-16 pb-6 max-[1060px]:px-5.5 max-[1060px]:pt-10">
        <SectionLabel>Works well with</SectionLabel>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.href} href={item.href} className="group flex flex-col gap-3 rounded-lg bg-[#f4f4f6] p-6 text-[#111114] transition-colors hover:bg-[#3200eb] hover:text-white sm:p-8">
              <span className="flex items-center justify-between gap-4 text-[clamp(24px,2.2vw,36px)] leading-[1.1] font-semibold tracking-[-0.025em]">
                {item.label}
                <ArrowIcon className="size-5 shrink-0" />
              </span>
              <span className="text-[clamp(15px,1.1vw,19px)] leading-[1.5] opacity-75">{item.body}</span>
            </Link>
          ))}
        </div>
        <p className="m-0 mt-6 text-[clamp(15px,1.1vw,19px)] leading-[1.5] text-[#54535c]">
          Want to know who you&apos;d be working with?{" "}
          <Link href="/about" className="font-medium text-[#2d0da0] underline underline-offset-4">Meet the team</Link> or{" "}
          <Link href="/work" className="font-medium text-[#2d0da0] underline underline-offset-4">see all our case studies</Link>.
        </p>
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
