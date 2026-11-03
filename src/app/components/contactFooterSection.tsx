import Link from "next/link";
import HoverScrollText from "./HoverScrollText";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4.5 overflow-visible stroke-[#dbd8ff] sm:size-5"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function FooterArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M13.5 21v-8.1h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.3C16.5 3.2 15.8 3 14.8 3c-2.1 0-3.6 1.3-3.6 3.8v2.9H8.8v3.2h2.4V21h2.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 stroke-current" fill="none" strokeWidth="2">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M4.98 3.5a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9ZM3.5 8.8h3V20h-3V8.8Zm5.2 0h2.9v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20h-3V8.8Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-7.6-.5-7.6-.5s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 10 2 12 2 12s0 2 .4 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-3.8.4-3.8s0-2-.4-3.8ZM10 15.2V8.8L15.6 12 10 15.2Z" />
    </svg>
  );
}

type ContactFooterSectionProps = {
  showIntroSection?: boolean;
};

export default function ContactFooterSection({
  showIntroSection = true,
}: ContactFooterSectionProps) {
  return (
    <section id="contact" className="px-0 pb-8 pt-5 sm:pb-10" data-node-id="11:6">
      <div className="mx-auto w-full">
        {showIntroSection ? (
          <div className="flex min-h-[80vh] flex-col justify-between gap-16 rounded-lg max-sm:min-h-0 max-sm:gap-20 bg-[#3200eb] px-12.5 pt-12 pb-12 text-white max-[1060px]:px-5.5 max-[1060px]:pt-10 max-[1060px]:pb-10" data-node-id="6:336">
            <div className="flex items-center justify-between gap-6">
              <p className="m-0 text-sm font-medium tracking-wide text-white/70 uppercase">Start a project</p>
              <p className="m-0 flex items-center gap-2 text-sm font-medium text-white/85">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                Taking new projects
              </p>
            </div>

            <div>
              <h2 className="m-0 text-[clamp(52px,8.5vw,160px)] leading-[0.92] font-semibold tracking-[-0.05em]">
                Let&apos;s build
                <span className="block text-[#d6d0ff]">what&apos;s next.</span>
              </h2>

              <div className="mt-12 flex flex-col gap-6 border-t border-white/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="m-0 max-w-120 text-[clamp(16px,1.3vw,22px)] leading-[1.4] text-white/80">
                  Tell us what you&apos;re working on. Marketing, tech or both, one team takes it from idea to launch.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-[16px] font-medium text-[#111114] transition-colors hover:bg-[#111114] hover:text-white"
                  >
                    Speak to our team
                    <span className="flex size-10 items-center justify-center rounded-full bg-[#3200eb] transition-transform group-hover:rotate-45">
                      <ArrowIcon />
                    </span>
                  </Link>
                  <a
                    href="mailto:hello@spytlabs.com"
                    className="rounded-full border border-white/40 px-6 py-3.5 text-[16px] font-medium transition-colors hover:border-white hover:bg-white/10"
                  >
                    hello@spytlabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className={`px-12.5 max-[1060px]:px-5.5 ${showIntroSection ? "pt-14 sm:pt-20" : "pt-0"}`} data-node-id="7:341">
          <div className="border-b border-black/15 pb-8">
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Email</p>
            <a href="mailto:hello@spytlabs.com" className="group mt-3 flex items-end justify-between gap-6 text-[#111114]">
              <span className="text-[clamp(34px,5vw,88px)] leading-[1.05] font-semibold tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#2d0da0]">
                <HoverScrollText>hello@spytlabs.com</HoverScrollText>
              </span>
              <span className="mb-1.5 flex size-14 shrink-0 items-center justify-center rounded-full bg-[#111114] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#3200eb] max-sm:hidden lg:size-16">
                <FooterArrowIcon />
              </span>
            </a>
          </div>

          <div className="border-b border-black/15 py-8">
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Navigation</p>
            <nav className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(22px,2vw,32px)] leading-[1.2] font-medium tracking-[-0.02em] text-[#111114]">
              <Link href="/" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Home</HoverScrollText></Link>
              {/* <Link href="/blog" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Blog</HoverScrollText></Link> */}
              <Link href="/design" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Design</HoverScrollText></Link>
              <Link href="/automation" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Automation</HoverScrollText></Link>
              <Link href="/productions" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Production</HoverScrollText></Link>
              <Link href="/technology" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Technology</HoverScrollText></Link>
              <Link href="/contact" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Contact Us</HoverScrollText></Link>
            </nav>
          </div>

          <div className="border-b border-black/15 py-8">
            <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Legal</p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(17px,1.3vw,22px)] leading-[1.2] font-medium text-[#54535c]">
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Privacy Policy</HoverScrollText></a>
              <Link href="/terms-of-service" className="transition-colors duration-300 ease-out hover:text-[#2d0da0]"><HoverScrollText>Terms of Service</HoverScrollText></Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-7">
            <p className="m-0 text-sm text-[#77767e]">© 2026 spytLabs. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Facebook" className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#111114] transition-colors duration-300 ease-out hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white" target="_blank"><FacebookIcon /></a>
              <a href="https://www.instagram.com/spytlabs/" aria-label="Instagram" className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#111114] transition-colors duration-300 ease-out hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white" target="_blank"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#111114] transition-colors duration-300 ease-out hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white" target="_blank"><LinkedinIcon /></a>
              <a href="#" aria-label="YouTube" className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#111114] transition-colors duration-300 ease-out hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white" target="_blank"><YoutubeIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
