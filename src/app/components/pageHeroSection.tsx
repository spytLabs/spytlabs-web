import NavBar from "./navBar";

interface PageHeroSectionProps {
  title: string;
  heroBg?: string;
}

export default function PageHeroSection({
  title,
  heroBg = "/figma-assets/spyt-bg.png",
}: PageHeroSectionProps) {
  return (
    <section className="overflow-hidden md:rounded-lg" data-node-id="page-hero">
      <div
        className="relative flex min-h-55 flex-col justify-between bg-cover bg-center px-6 pb-7 pt-6 text-white sm:min-h-75 sm:px-12 sm:pb-11 sm:pt-7"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,26,0.18),rgba(9,6,26,0.62))]" />
        <header
          className="relative z-10 flex items-start justify-between gap-5 max-[1060px]:flex-col max-[1060px]:items-start"
          data-node-id="page-hero-header"
        >
          <NavBar />
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
