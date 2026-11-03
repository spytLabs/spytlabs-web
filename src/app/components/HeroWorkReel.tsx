"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Placeholder clips — swap these for real project cuts as they're ready.
const clips = [
  {
    label: "Design",
    caption: "Brand & visual identity",
    href: "/design",
    src: "/figma-assets/Design_2.mp4",
  },
  {
    label: "Production",
    caption: "Commercials & social content",
    href: "/productions",
    src: "/figma-assets/spyt-prod-vid-bg-3.mp4",
  },
  {
    label: "Automation",
    caption: "AI workflows & dashboards",
    href: "/automation",
    src: "/figma-assets/automation_2.mp4",
  },
];

const CLIP_DURATION_MS = 5000;

export default function HeroWorkReel() {
  const [index, setIndex] = useState(0);
  const clip = clips[index];

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % clips.length),
      CLIP_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Link
      href={clip.href}
      className="group relative flex h-full min-h-64 flex-col justify-between overflow-hidden rounded-2xl bg-[#111114] p-5 text-white"
    >
      <video
        key={clip.src}
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/40" />

      <div className="relative flex items-center justify-end">
        <div className="flex gap-1.5">
          {clips.map((item, i) => (
            <span
              key={item.src}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-end justify-between gap-4">
        <div>
          <p className="m-0 text-xs font-medium tracking-wide text-white/60 uppercase">
            {clip.label}
          </p>
          <p className="m-0 mt-1 text-[clamp(18px,1.4vw,24px)] font-medium leading-tight">
            {clip.caption}
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-black">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
