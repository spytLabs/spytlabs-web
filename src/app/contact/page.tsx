import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { company } from "@/lib/company";
import { pageMetadata, webPageGraph } from "@/lib/seo";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";
import ContactForm from "./contactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact Our Team in Colombo, Sri Lanka",
  description:
    "Contact spytLabs in Colombo, Sri Lanka about design, video production, software or AI automation. Call +94 77 518 4773 or request a quotation online.",
  path: "/contact",
  image: "/og/contact.jpg",
});

const socials = [
  { label: "@spytlabs on Instagram", href: company.social.instagram },
  { label: "spytLabs on LinkedIn", href: company.social.linkedin },
  { label: "spytLabs on Facebook", href: company.social.facebook },
];

const portfolios = [
  { label: "Production portfolio", href: "https://www.spytlabs.com/r/production-portfolio" },
  { label: "Website portfolio", href: "https://www.spytlabs.com/r/website-portfolio" },
  { label: "Design portfolio", href: "https://www.spytlabs.com/r/design-portfolio" },
  { label: "Automation portfolio", href: "https://www.spytlabs.com/r/automation-portfolio" },
];

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <JsonLd data={webPageGraph({ type: "ContactPage", name: "Contact spytLabs", path: "/contact", crumb: "Contact" })} />
      <PageHeroSection
        title="Let's talk."
        eyebrow="Contact"
        subtitle="Tell us what you're building. Marketing, tech or both, one team takes it from idea to launch."
        compact
      />

      <section className="grid gap-12 px-12.5 pt-12 pb-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 max-[1060px]:px-5.5 max-[1060px]:pt-8 max-[1060px]:pb-10">
        <div className="flex flex-col gap-12">
          <div>
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Email us</p>
            <a
              href="mailto:hello@spytlabs.com"
              className="mt-3 block text-[clamp(28px,3vw,48px)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#111114] transition-colors hover:text-[#2d0da0]"
            >
              hello@spytlabs.com
            </a>
          </div>

          <div>
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Call us</p>
            <a
              href={`tel:${company.phone}`}
              className="mt-3 block text-[clamp(28px,3vw,48px)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#111114] transition-colors hover:text-[#2d0da0]"
            >
              {company.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Find us</p>
            <p className="m-0 mt-3 text-[clamp(20px,1.6vw,26px)] font-medium text-[#111114]">{company.location}</p>
          </div>

          <div>
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Follow</p>
            <ul className="m-0 mt-2 list-none p-0">
              {socials.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[clamp(20px,1.6vw,26px)] font-medium text-[#111114] transition-colors hover:text-[#2d0da0]"
                  >
                    {social.label}
                    <ArrowIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">See our work first</p>
            <ul className="m-0 mt-4 list-none border-t border-black/15 p-0">
              {portfolios.map((portfolio) => (
                <li key={portfolio.href} className="border-b border-black/15">
                  <a
                    href={portfolio.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 text-[clamp(20px,1.6vw,28px)] font-semibold tracking-[-0.02em] text-[#111114]"
                  >
                    <span className="transition-colors group-hover:text-[#2d0da0]">{portfolio.label}</span>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#111114] text-white transition-all group-hover:rotate-45 group-hover:bg-[#3200eb]">
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-lg:order-first">
          <ContactForm />
          <p className="m-0 mt-4 text-sm leading-[1.5] text-[#54535c]">
            We use these details to reply to your enquiry. See our{" "}
            <Link href="/privacy-policy" className="font-medium text-[#2d0da0] underline underline-offset-4">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <ContactFooterSection showIntroSection={false} />
    </main>
  );
}
