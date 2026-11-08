import type { Metadata } from "next";
import Link from "next/link";
import ContactFooterSection from "../components/contactFooterSection";
import JsonLd from "../components/JsonLd";
import PageHeroSection from "../components/pageHeroSection";
import { company } from "@/lib/company";
import { pageMetadata, webPageGraph } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Team in Colombo, Sri Lanka",
  description:
    "Meet the founders of spytLabs, a Colombo, Sri Lanka studio bringing design, video production, software development and AI automation into one team.",
  path: "/about",
});

const services = [
  { label: "Design", href: "/design", body: "Websites, product interfaces, motion and brand identity." },
  { label: "Production", href: "/productions", body: "Commercials, social reels, event coverage and photography." },
  { label: "Technology", href: "/technology", body: "Websites, apps, APIs and the systems behind them." },
  { label: "Automation", href: "/automation", body: "AI agents and workflows that take on repetitive work." },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <JsonLd data={webPageGraph({ type: "AboutPage", name: "About spytLabs", path: "/about", crumb: "About" })} />
      <PageHeroSection
        title="One team, from idea to launch."
        eyebrow="About spytLabs"
        subtitle="We're a studio in Colombo, Sri Lanka that brings marketing and technology under one roof."
      />

      <section className="grid gap-8 px-12.5 pt-22 pb-16 lg:grid-cols-2 lg:gap-16 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-10">
        <h2 className="m-0 section-title font-semibold text-black">
          Design, video and tech <span className="text-[#2d0da0]">in one place.</span>
        </h2>
        <div className="flex flex-col gap-5 text-[clamp(16px,1.3vw,22px)] leading-[1.5] text-[#54535c]">
          <p className="m-0">
            {company.name} is a Colombo, Sri Lanka studio for design, video production, software development and AI automation. Most
            businesses end up briefing a designer, a video crew, a developer and an automation consultant separately, then trying to
            keep them all pointing the same way. We do that work in one team instead.
          </p>
          <p className="m-0">
            That means the brand, the content, the website and the systems behind them are planned together. We work with businesses
            in Sri Lanka and overseas, and you can see the results in{" "}
            <Link href="/work" className="font-medium text-[#2d0da0] underline underline-offset-4">our case studies</Link>.
          </p>
        </div>
      </section>

      <section className="px-12.5 pb-22 max-[1060px]:px-5.5 max-[1060px]:pb-14" aria-labelledby="founders-heading">
        <h2 id="founders-heading" className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">The founders</h2>
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {company.founders.map((person) => (
            <li key={person.name} className="flex flex-col justify-between gap-12 rounded-lg bg-[#f4f4f6] p-6 sm:p-7">
              <span aria-hidden="true" className="flex size-16 items-center justify-center rounded-full bg-[#3200eb] text-[20px] font-semibold text-white">
                {initials(person.name)}
              </span>
              <div>
                <h3 className="m-0 text-[clamp(22px,1.8vw,30px)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#111114]">{person.name}</h3>
                <p className="m-0 mt-1 text-[15px] text-[#54535c]">{person.role}, {company.name}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on LinkedIn`}
                  className="mt-2 inline-flex min-h-11 items-center text-[15px] font-medium text-[#2d0da0] underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-12.5 pb-16 max-[1060px]:px-5.5 max-[1060px]:pb-10" aria-labelledby="services-heading">
        <h2 id="services-heading" className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">What we do</h2>
        <ul className="m-0 list-none border-t border-black/15 p-0">
          {services.map((service) => (
            <li key={service.href} className="border-b border-black/15">
              <Link href={service.href} className="group grid gap-1 py-6 sm:grid-cols-2 sm:items-center sm:gap-10">
                <span className="text-[clamp(28px,3.2vw,56px)] leading-none font-semibold tracking-[-0.035em] text-[#111114] transition-colors group-hover:text-[#2d0da0]">{service.label}</span>
                <span className="text-[clamp(15px,1.15vw,20px)] leading-[1.5] text-[#54535c]">{service.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ContactFooterSection />
    </main>
  );
}
