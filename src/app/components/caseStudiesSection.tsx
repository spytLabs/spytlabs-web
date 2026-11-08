import Image from "next/image";
import Link from "next/link";
import AutoSlider from "./AutoSlider";
import GalleryTile from "./GalleryTile";
import ReelVideo from "./ReelVideo";
import StickyCard from "./StickyCard";
import { caseStudies } from "@/lib/caseStudies";

// Short links managed in /r/admin on the live site; absolute so they work on previews too
const portfolios = [
  { label: "Production portfolio", href: "https://www.spytlabs.com/r/production-portfolio" },
  { label: "Website portfolio", href: "https://www.spytlabs.com/r/website-portfolio" },
  { label: "Design portfolio", href: "https://www.spytlabs.com/r/design-portfolio" },
  { label: "Automation portfolio", href: "https://www.spytlabs.com/r/automation-portfolio" },
];

const themes = {
  light: { card: "bg-[#f4f4f6] text-[#111114]", muted: "text-[#54535c]", rule: "border-black/15" },
  dark: { card: "bg-[#111114] text-white", muted: "text-white/65", rule: "border-white/20" },
  brand: { card: "bg-[#3200eb] text-white", muted: "text-white/75", rule: "border-white/25" },
};

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
        {caseStudies.filter((study) => !study.hidden).map((study, i) => {
          const theme = themes[study.theme];

          if (study.pipeline) {
            const { pipeline } = study;
            return (
              <StickyCard
                key={study.client}
                className={`flex flex-col justify-between overflow-hidden rounded-lg lg:sticky lg:min-h-[calc(100vh-96px)] ${theme.card}`}
                top={24 + i * 24}
              >
                <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:p-12">
                  <div>
                    <p className="m-0 text-[clamp(18px,1.4vw,24px)] font-medium">{study.client}</p>
                    {study.role && <p className={`m-0 mt-1 text-sm font-medium ${theme.muted}`}>{study.role}</p>}
                    <h3 className="m-0 mt-6 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">
                      {study.headline}
                    </h3>
                    <p className={`m-0 mt-5 max-w-110 text-[clamp(15px,1.1vw,19px)] leading-[1.45] ${theme.muted}`}>{study.brief}</p>
                    <Link href={`/work/${study.slug}`} className="mt-3 flex min-h-11 w-fit items-center gap-2 text-[15px] font-medium underline-offset-4 hover:underline">
                      Read the case study
                      <ArrowIcon />
                    </Link>
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
                    <Image src={pipeline.src} alt={pipeline.alt} width={1685} height={225} sizes="(min-width: 800px) 100vw, 800px" className="block h-auto w-full min-w-200" draggable={false} />
                  </div>
                  <figcaption className="mt-4 text-[13px] text-[#77767e] sm:text-sm">{pipeline.caption}</figcaption>
                </figure>
              </StickyCard>
            );
          }

          return (
            <StickyCard
              key={study.client}
              className={`grid overflow-hidden rounded-lg lg:sticky lg:min-h-[calc(100vh-96px)] grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] ${theme.card}`}
              top={24 + i * 24}
            >
              <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:p-12">
                <div>
                  {study.logo ? (
                    <img src={study.logo} alt={study.client} loading="lazy" className="h-16 w-auto sm:h-20" draggable={false} />
                  ) : (
                    <p className="m-0 text-[clamp(18px,1.4vw,24px)] font-medium">{study.client}</p>
                  )}
                  {study.role && <p className={`m-0 mt-4 text-sm font-medium ${theme.muted}`}>{study.role}</p>}
                  <h3 className="m-0 mt-2 text-[clamp(30px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em]">
                    {study.headline}
                  </h3>
                  <p className={`m-0 mt-5 max-w-120 text-[clamp(15px,1.1vw,19px)] leading-[1.45] ${theme.muted}`}>{study.brief}</p>
                    <Link href={`/work/${study.slug}`} className="mt-3 flex min-h-11 w-fit items-center gap-2 text-[15px] font-medium underline-offset-4 hover:underline">
                      Read the case study
                      <ArrowIcon />
                    </Link>
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
                      <Image
                        key={shot.src}
                        src={shot.src}
                        alt={shot.alt}
                        width={1600}
                        height={1000}
                        sizes="(min-width: 1024px) 18vw, 33vw"
                        className="aspect-[16/10] w-full rounded-md border border-black/10 object-cover object-top"
                        draggable={false}
                      />
                    ))}
                  </div>
                </div>
              ) : study.gallery ? (
                <div className="flex min-w-0 items-center p-3 max-lg:order-first lg:pl-0">
                  <AutoSlider className={`flex w-full items-start gap-3 max-lg:-mr-3 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:[scrollbar-width:none] lg:grid ${study.galleryCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                    {study.gallery.map((item) => <GalleryTile key={item.src} item={item} showLabel={study.galleryLabels !== false} />)}
                  </AutoSlider>
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
            </StickyCard>
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
