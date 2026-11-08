import Link from "next/link";
import { preload } from "react-dom";
import NavBar from "./navBar";

interface PageHeroSectionProps {
  title: string;
  heroBg?: string;
  eyebrow?: string;
  subtitle?: string;
  // Optional secondary action, e.g. a portfolio link; "Start a project" is shown whenever actions are on
  secondaryAction?: { label: string; href: string; external?: boolean };
  showActions?: boolean;
  // Shorter hero, for pages where the content below is the point (e.g. the contact form)
  compact?: boolean;
}

// One-word display titles run huge; descriptive headlines need a smaller scale to fit
const LONG_TITLE_LENGTH = 18;

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function PageHeroSection({
  title,
  heroBg = "/figma-assets/spyt-bg.webp",
  eyebrow,
  subtitle,
  secondaryAction,
  showActions = false,
  compact = false,
}: PageHeroSectionProps) {
  preload(heroBg, { as: "image", fetchPriority: "high" });

  const titleSize =
    title.length > LONG_TITLE_LENGTH
      ? "max-w-[18ch] text-[clamp(40px,6vw,104px)] leading-[1] tracking-[-0.04em]"
      : "text-[clamp(56px,9vw,160px)] leading-[0.92] tracking-[-0.05em]";

  return (
    <section className="overflow-hidden rounded-lg" data-node-id="page-hero">
      <div
        className={`relative flex flex-col justify-between bg-cover bg-center px-12.5 pt-7 pb-12 text-white max-[1060px]:px-5.5 max-[1060px]:pt-5 max-[1060px]:pb-9 ${
          (subtitle || showActions) && !compact ? "min-h-[72vh]" : "min-h-[46vh]"
        }`}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/75" />

        <div className="relative z-10" data-node-id="page-hero-header">
          <NavBar />
        </div>

        <div className={`relative z-10 ${compact ? "mt-10" : "mt-16"}`}>
          {eyebrow && (
            <p className="m-0 text-[clamp(14px,1vw,18px)] font-medium tracking-wide text-gray-300 uppercase">{eyebrow}</p>
          )}
          <h1 className={`m-0 mt-3 font-semibold ${titleSize}`} data-node-id="page-hero-title">
            {title}
          </h1>

          {(subtitle || showActions) && (
            <div className={`flex flex-col gap-6 border-t border-white/25 lg:flex-row lg:items-end lg:justify-between ${compact ? "mt-6 pt-5" : "mt-10 pt-7"}`}>
              {subtitle && <p className="m-0 max-w-150 text-[clamp(16px,1.3vw,22px)] leading-[1.45] text-white/85">{subtitle}</p>}
              {showActions && (
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-[16px] font-medium text-[#111114] transition-colors hover:bg-[#3200eb] hover:text-white"
                  >
                    Start a project
                    <span className="flex size-10 items-center justify-center rounded-full bg-[#3200eb] text-white transition-transform group-hover:rotate-45">
                      <ArrowIcon />
                    </span>
                  </Link>
                  {secondaryAction && (
                    <a
                      href={secondaryAction.href}
                      {...(secondaryAction.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[16px] font-medium transition-colors hover:border-white hover:bg-white/10"
                    >
                      {secondaryAction.label}
                      <ArrowIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
