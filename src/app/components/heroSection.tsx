import Link from "next/link";
import NavBar from "./navBar";
import HeroWorkReel from "./HeroWorkReel";

const needs = [
  { label: "A brand", href: "/design" },
  { label: "An ad or video", href: "/productions" },
  { label: "A website or app", href: "/technology" },
  { label: "To automate work", href: "/automation" },
];

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function HeroSecion() {
  const assets = {
    heroBg: "/figma-assets/spyt-bg.png",
    heroBgVideo: "https://res.cloudinary.com/dh2ej5ziz/video/upload/v1778158571/spyt-web-bg-2_arasuj.webm",
  };

  return (
    <section className="relative overflow-hidden rounded-lg min-h-[100vh] flex flex-col justify-end pointer-events-auto" data-node-id="2:93">
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster={assets.heroBg}
      >
        <source src={assets.heroBgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/85 pointer-events-none" />

      <div
        className="relative z-10 flex flex-1 flex-col justify-end pt-7 pr-12 pb-11 pl-12 text-white max-[1060px]:pt-5 max-[1060px]:pr-5.5 max-[1060px]:pb-7 max-[1060px]:pl-5.5"
        data-node-id="1:399"
      >
        <NavBar />

        <p className="mt-12 mb-0 text-[clamp(14px,1vw,20px)] font-medium tracking-[0] text-gray-300 select-none" data-node-id="2:46">
          YOUR ONE STOP GROWTH PARTNER.
        </p>
        <h1
          className="mt-3 mb-0 flex flex-col text-[clamp(48px,min(6.55vw,11vh),104px)] leading-[1.02] font-semibold tracking-[-0.03em] max-[640px]:text-[clamp(38px,11vw,62px)] select-none"
          data-node-id="2:3"
        >
          <span>Design. Production. Tech.</span>
          <span className="text-[#d6d0ff]">One stop.</span>
        </h1>

        <div className="mt-[clamp(32px,6vh,64px)] grid gap-3 lg:h-[clamp(240px,32vh,300px)] lg:grid-cols-2">
          <HeroWorkReel />

          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#f4f4f6] p-6 text-[#1c1c21] sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-sm font-medium text-[#77767e]">Start here</p>
                <p className="m-0 mt-1 text-[clamp(26px,2.2vw,38px)] leading-[1.1] font-semibold tracking-[-0.02em]">
                  What do you need?
                </p>
              </div>
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-[#111114] py-1.5 pr-1.5 pl-4 text-[14px] font-medium text-white transition-colors hover:bg-[#3200eb] max-sm:hidden"
              >
                Start a project
                <span className="flex size-7 items-center justify-center rounded-full bg-[#3200eb] transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-[#3200eb]">
                  <ArrowIcon className="size-3.5" />
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {needs.map((need) => (
                <Link
                  key={need.label}
                  href={need.href}
                  className="flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2 text-[15px] font-medium transition-colors hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white"
                >
                  {need.label}
                  <ArrowIcon className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
