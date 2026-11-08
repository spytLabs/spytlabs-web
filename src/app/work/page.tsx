import type { Metadata } from "next";
import Link from "next/link";
import ContactFooterSection from "../components/contactFooterSection";
import JsonLd from "../components/JsonLd";
import PageHeroSection from "../components/pageHeroSection";
import SiteShowcase from "../components/siteShowcase";
import { caseStudies } from "@/lib/caseStudies";
import { pageMetadata, webPageGraph } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies: Websites, Video & AI Automation",
  description:
    "Case studies from spytLabs in Colombo, Sri Lanka: corporate websites, 730K-view event reels, restaurant video and an AI sales outreach agent.",
  path: "/work",
});

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function WorkPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <JsonLd data={webPageGraph({ type: "CollectionPage", name: "spytLabs case studies", path: "/work", crumb: "Work" })} />
      <PageHeroSection
        title="Real projects. Real results."
        eyebrow="Case studies"
        subtitle="Websites, video and automation we've delivered from our studio in Colombo, Sri Lanka."
      />

      <section className="px-12.5 pt-22 pb-16 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-10">
        <ul className="m-0 list-none border-t border-black/15 p-0">
          {caseStudies.filter((study) => !study.hidden).map((study) => (
            <li key={study.slug} className="border-b border-black/15">
              <Link href={`/work/${study.slug}`} className="group grid gap-4 py-8 sm:py-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,6fr)_56px] lg:items-center lg:gap-10">
                <span>
                  <span className="block text-sm font-medium tracking-wide text-[#77767e] uppercase">{study.type}</span>
                  <span className="mt-1 block text-[clamp(18px,1.4vw,24px)] font-medium text-[#111114]">{study.client}</span>
                </span>
                <span>
                  <span className="block text-[clamp(28px,3vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#111114] transition-colors group-hover:text-[#2d0da0]">{study.headline}</span>
                  <span className="mt-3 block text-[clamp(15px,1.1vw,19px)] leading-[1.5] text-[#54535c]">{study.outcomes[0] ?? study.brief}</span>
                </span>
                <span className="flex size-14 items-center justify-center rounded-full bg-[#111114] text-white transition-all group-hover:rotate-45 group-hover:bg-[#3200eb] max-lg:hidden">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteShowcase />
      <ContactFooterSection />
    </main>
  );
}
