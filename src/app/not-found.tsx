import type { Metadata } from "next";
import Link from "next/link";
import ContactFooterSection from "./components/contactFooterSection";
import PageHeroSection from "./components/pageHeroSection";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist on spytLabs.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Home", href: "/" },
  { label: "Case studies", href: "/work" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <PageHeroSection title="Page not found." eyebrow="404" />
      <section className="px-12.5 py-16 max-[1060px]:px-5.5 max-[1060px]:py-10">
        <p className="m-0 max-w-150 text-[clamp(18px,1.5vw,26px)] leading-[1.4] text-[#54535c]">
          That link is broken or the page has moved. Try one of these instead.
        </p>
        <ul className="m-0 mt-8 flex list-none flex-wrap gap-3 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-11 items-center rounded-full border border-black/15 px-6 text-[16px] font-medium text-[#111114] transition-colors hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactFooterSection showIntroSection={false} />
    </main>
  );
}
