import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AutoSlider from "../../components/AutoSlider";
import ContactFooterSection from "../../components/contactFooterSection";
import GalleryTile from "../../components/GalleryTile";
import JsonLd from "../../components/JsonLd";
import PageHeroSection from "../../components/pageHeroSection";
import ReelVideo from "../../components/ReelVideo";
import { caseStudies, type CaseStudy } from "@/lib/caseStudies";
import { caseStudyGraph, pageMetadata } from "@/lib/seo";

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

const published = caseStudies.filter((study) => !study.hidden);

export const dynamicParams = false;

export function generateStaticParams() {
  return published.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = published.find((item) => item.slug === slug);
  if (!study) return {};
  return pageMetadata({ title: study.seoTitle, description: study.metaDescription, path: `/work/${study.slug}` });
}

function StudyMedia({ study }: { study: CaseStudy }) {
  if (study.site) {
    return (
      <div className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
          <div className="border-b border-black/10 px-4 py-3">
            <span className="mx-auto block w-full max-w-md truncate rounded-full bg-[#f4f4f6] px-3 py-1 text-center text-[13px] text-[#77767e]">{study.site.url}</span>
          </div>
          <div className="relative aspect-[16/10]">
            <ReelVideo src={study.site.video} poster={study.site.poster} label={`${study.client} website, scrolling`} />
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {study.site.shots.map((shot) => (
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
      </div>
    );
  }

  if (study.pipeline) {
    return (
      <figure className="m-0 rounded-lg bg-[#f4f4f6] p-5 sm:p-10">
        <div className="overflow-x-auto [scrollbar-width:none]">
          <Image src={study.pipeline.src} alt={study.pipeline.alt} width={1685} height={225} sizes="(min-width: 800px) 100vw, 800px" className="block h-auto w-full min-w-200" draggable={false} />
        </div>
        <figcaption className="mt-5 text-sm text-[#77767e]">{study.pipeline.caption}</figcaption>
      </figure>
    );
  }

  if (study.gallery) {
    return (
      <AutoSlider className={`flex w-full items-start gap-3 max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:[scrollbar-width:none] lg:grid ${study.galleryCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {study.gallery.map((item) => (
          <GalleryTile key={item.src} item={item} showLabel={study.galleryLabels !== false} />
        ))}
      </AutoSlider>
    );
  }

  if (study.media?.kind === "image") {
    return (
      <Image src={study.media.src} alt={study.media.alt} width={1600} height={909} sizes="100vw" className="h-auto w-full rounded-lg border border-black/10" draggable={false} />
    );
  }

  return null;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const index = published.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const study = published[index];
  const next = published[(index + 1) % published.length];
  const path = `/work/${study.slug}`;

  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <JsonLd data={caseStudyGraph({ name: study.headline, description: study.metaDescription, path, client: study.client })} />
      <PageHeroSection title={study.headline} eyebrow={`${study.type} · ${study.client}`} subtitle={study.brief} showActions />

      <section className="flex flex-col gap-14 px-12.5 pt-16 pb-16 max-[1060px]:px-5.5 max-[1060px]:pt-10 max-[1060px]:pb-10">
        <nav aria-label="Breadcrumb" className="text-[15px] text-[#77767e]">
          <Link href="/" className="hover:text-[#2d0da0]">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/work" className="hover:text-[#2d0da0]">Work</Link>
          <span aria-hidden="true"> / </span>
          <span className="text-[#111114]">{study.client}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            {study.outcomes.length > 0 && (
              <div>
                <h2 className="m-0 mb-4 text-sm font-medium tracking-wide text-[#77767e] uppercase">Results</h2>
                <ul className="m-0 list-none border-t border-black/15 p-0">
                  {study.outcomes.map((outcome) => (
                    <li key={outcome} className="border-b border-black/15 py-4 text-[clamp(19px,1.5vw,26px)] leading-[1.25] font-medium tracking-[-0.015em] text-[#111114]">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <dl className="m-0 grid gap-4 text-[15px]">
              {study.role && (
                <div>
                  <dt className="text-[#77767e]">Role</dt>
                  <dd className="m-0 font-medium text-[#111114]">{study.role}</dd>
                </div>
              )}
              {study.services.length > 0 && (
                <div>
                  <dt className="text-[#77767e]">Services</dt>
                  <dd className="m-0 font-medium text-[#111114]">{study.services.join(", ")}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="flex flex-col gap-10">
            {study.story.map((part) => (
              <div key={part.heading}>
                <h2 className="m-0 text-[clamp(26px,2.6vw,44px)] leading-[1.08] font-semibold tracking-[-0.03em] text-[#111114]">{part.heading}</h2>
                <p className="m-0 mt-3 text-[clamp(16px,1.3vw,22px)] leading-[1.5] text-[#54535c]">{part.body}</p>
              </div>
            ))}
            <p className="m-0 text-[clamp(16px,1.3vw,22px)] leading-[1.5] text-[#54535c]">
              Need something similar? See our{" "}
              {study.serviceLinks.map((link, i) => (
                <span key={link.href}>
                  {i > 0 && " and "}
                  <Link href={link.href} className="font-medium text-[#2d0da0] underline underline-offset-4">{link.label}</Link>
                </span>
              ))}{" "}
              {study.serviceLinks.length > 1 ? "services" : "service"}.
            </p>
          </div>
        </div>

        <StudyMedia study={study} />
      </section>

      <section className="px-12.5 pb-6 max-[1060px]:px-5.5">
        <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6 border-y border-black/15 py-8 text-[#111114]">
          <span>
            <span className="block text-sm font-medium tracking-wide text-[#77767e] uppercase">Next case study</span>
            <span className="mt-2 block text-[clamp(26px,3.4vw,56px)] leading-[1.05] font-semibold tracking-[-0.035em] transition-colors group-hover:text-[#2d0da0]">{next.headline}</span>
          </span>
        </Link>
      </section>

      <ContactFooterSection />
    </main>
  );
}
