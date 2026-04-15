const portraitImage =
  "/figma-assets/contact-us-guy.png";

import HoverScrollText from "./HoverScrollText";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-[22px] stroke-[#dbd8ff]"
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

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M13.5 21v-8.1h2.8l.4-3.2h-3.2V7.6c0-.9.3-1.5 1.6-1.5h1.7V3.3C16.5 3.2 15.8 3 14.8 3c-2.1 0-3.6 1.3-3.6 3.8v2.9H8.8v3.2h2.4V21h2.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 stroke-current" fill="none" strokeWidth="2">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M4.98 3.5a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9ZM3.5 8.8h3V20h-3V8.8Zm5.2 0h2.9v1.6h.1c.4-.8 1.4-1.9 3-1.9 3.2 0 3.8 2.1 3.8 4.9V20h-3v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V20h-3V8.8Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-current">
      <path d="M21.6 8.2a2.8 2.8 0 0 0-2-2c-1.8-.5-7.6-.5-7.6-.5s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 10 2 12 2 12s0 2 .4 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-3.8.4-3.8s0-2-.4-3.8ZM10 15.2V8.8L15.6 12 10 15.2Z" />
    </svg>
  );
}

export default function ContactFooterSection() {
  return (
    <section id="contact" className="px-0 pb-8 pt-0 sm:pb-10" data-node-id="11:6">
      <div className="mx-auto w-full">
        <div className="overflow-hidden rounded-lg" data-node-id="6:336">
          <div className="grid min-h-150 grid-cols-1  md:grid-cols-[1.92fr_1fr]">
            <div className="relative flex flex-col justify-between overflow-hidden bg-[linear-gradient(198deg,#5219db_12%,#120351_85%)] px-8 py-8 sm:px-12 sm:py-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_45%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_65%,rgba(173,129,255,0.18),transparent_48%)]" />

              <button
                type="button"
                className="relative z-10 w-fit rounded-full bg-[#3200eb] px-7 py-3 text-[clamp(14px,1.1vw,20px)] font-medium text-white"
              >
                Contact Us
              </button>

              <div className="relative z-10 mt-8">
                <p className="text-[clamp(28px,2.8vw,40px)] leading-[1.2] font-normal text-[#c1bcfc]">
                  Let&apos;s Build Something Extraordinary.
                </p>
                <div className="group/team mt-1 w-fit">
                  <div className="h-[clamp(44px,5.8vw,88px)] overflow-hidden">
                    <div className="flex h-[200%] flex-col transition-transform duration-500 ease-out group-hover/team:-translate-y-1/2">
                      <div className="h-1/2 items-end hidden md:flex">
                        <h2 className="section-title font-medium text-[#eae9fe]">
                          Speak to our team
                        </h2>
                      </div>

                      <div className="flex h-1/2 items-end gap-3 sm:gap-4">
                        <h2 className="section-title font-medium text-[#eae9fe] max-md:text-[2rem]">
                          Speak to our team
                        </h2>
                        <span className="mb-[0.45em] flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-[#dbd8ff] sm:size-16">
                          <ArrowIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px]">
              <img
                src={portraitImage}
                alt="spytLabs team member"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-5 pb-0 pt-8 sm:px-11 sm:pt-10" data-node-id="7:341">
          <div className="border-b border-black/25 pb-5">
            <p className="text-[clamp(14px,1.35vw,24px)] leading-tight font-medium text-[#9c9ba1]">
              EMAIL
            </p>
            <p className="mt-2 text-[clamp(30px,2.9vw,40px)] leading-[1.12] font-medium text-[#333339]">
              <HoverScrollText>hello@spytlabs.com</HoverScrollText>
            </p>
          </div>

          <div className="border-b border-black/25 pb-5 pt-4 sm:pt-6">
            <p className="text-[clamp(14px,1.35vw,24px)] leading-tight font-medium text-[#9c9ba1]">
              NAVIGATION
            </p>
            <nav className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[clamp(24px,2.2vw,32px)] leading-[1.2] font-medium text-[#333339]">
              <a href="/" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Home</HoverScrollText></a>
              <a href="/blog" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Blog</HoverScrollText></a>
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Design</HoverScrollText></a>
              <a href="/automation" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Automation</HoverScrollText></a>
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Production</HoverScrollText></a>
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Technology</HoverScrollText></a>
              <a href="#contact" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Contact Us</HoverScrollText></a>
            </nav>
          </div>

          <div className="border-b border-black/25 pb-5 pt-4 sm:pt-6">
            <p className="text-[clamp(14px,1.35vw,24px)] leading-tight font-medium text-[#9c9ba1]">
              LEGAL
            </p>
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-2 text-[clamp(24px,2.2vw,32px)] leading-[1.2] font-medium text-[#333339]">
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Privacy Policy</HoverScrollText></a>
              <a href="#" className="transition-colors duration-300 ease-out hover:text-[#1d0f73]"><HoverScrollText>Terms of Service</HoverScrollText></a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <p className="text-[clamp(14px,1.35vw,24px)] leading-[1.2] font-medium text-[#9c9ba1]">
              ©Copyright 2026 spytLabs. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5 text-[#0f1014]">
              <a href="#" aria-label="Facebook" className="transition-[color,transform] duration-300 ease-out hover:scale-105 hover:text-[#1d0f73]"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="transition-[color,transform] duration-300 ease-out hover:scale-105 hover:text-[#1d0f73]"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="transition-[color,transform] duration-300 ease-out hover:scale-105 hover:text-[#1d0f73]"><LinkedinIcon /></a>
              <a href="#" aria-label="YouTube" className="transition-[color,transform] duration-300 ease-out hover:scale-105 hover:text-[#1d0f73]"><YoutubeIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
