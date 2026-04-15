import Link from "next/link";

interface PageHeroSectionProps {
  title: string;
  heroBg?: string;
  logo?: string;
}

export default function PageHeroSection({
  title,
  heroBg = "/figma-assets/hero-bg.jpg",
  logo = "/figma-assets/logo.png",
}: PageHeroSectionProps) {
  return (
    <section className="overflow-hidden rounded-lg" data-node-id="page-hero">
      <div
        className="relative flex min-h-[220px] flex-col justify-between bg-cover bg-center px-6 pb-7 pt-6 text-white sm:min-h-[372px] sm:px-12 sm:pb-11 sm:pt-7"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,26,0.18),rgba(9,6,26,0.62))]" />
        <header
          className="relative z-10 flex items-start justify-between gap-5 max-[1060px]:flex-col max-[1060px]:items-start"
          data-node-id="page-hero-header"
        >
          <img
            src={logo}
            alt="spytLabs"
            className="h-8.5 w-38.75 object-contain"
          />
          <nav
            className="flex items-center gap-7 text-[clamp(13px,1vw,20px)] font-medium max-[1060px]:flex-wrap max-[1060px]:gap-y-2 max-[1060px]:gap-x-4 [&>a]:text-white [&>a]:no-underline"
            aria-label="Primary"
          >
            <Link href="/blog">Blog</Link>
            <Link href="/design">Design</Link>
            <Link href="/automation">Automation</Link>
            <a href="#">Production</a>
            <a href="#">Technology</a>
            <a
              href="#contact"
              className="rounded-full bg-[#3200eb] px-5.5 py-2"
            >
              Contact Us
            </a>
          </nav>
        </header>

        <h1
          className="relative z-10 text-[clamp(46px,6.3vw,72px)] leading-[1.06] font-semibold tracking-[-0.03em]"
          data-node-id="page-hero-title"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
