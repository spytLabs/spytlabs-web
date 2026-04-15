"use client";

import { useRef, useState } from "react";

const videoSrc =
  "https://res.cloudinary.com/dh2ej5ziz/video/upload/v1776143021/Remade_Founder_Video_-_YC_S24_Application_Accepted_dp0ej8.mp4";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="ml-1 size-8 fill-white sm:size-10 lg:size-12"
    >
      <path d="M12 8.5v15l12-7.5-12-7.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="size-8 fill-white sm:size-10 lg:size-12"
    >
      <path d="M10 8h4v16h-4V8Zm8 0h4v16h-4V8Z" />
    </svg>
  );
}

export default function FutureSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className="border-b border-black/35 px-5 pb-20 pt-10 sm:px-11 sm:pb-24 sm:pt-12" data-node-id="3:257">
      <div className="flex w-full flex-col gap-8 sm:gap-10">
        <header className="max-w-[1320px]" data-node-id="2:167">
          <h2
            className="m-0 section-title font-semibold text-black"
            data-node-id="2:143"
          >
            <span className="text-[#2d0da0]">The Future </span>
            <span>We&apos;re Building</span>
          </h2>
          <p
            className="mt-3 max-w-[1150px] text-[clamp(16px,1.8vw,24px)] leading-[1.45] font-medium text-[#77767e]"
            data-node-id="2:144"
          >
            Our founders speak on the ideas shaping how brands grow, adapt, and
            lead in a changing digital world.
          </p>
        </header>

        <div className="relative aspect-[1320/720] w-[80%] max-w-[1100px] mx-auto overflow-hidden bg-[#dbd8e7]" data-node-id="2:163">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoSrc}
            preload="metadata"
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_52%)]" />
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            aria-pressed={isPlaying}
            onClick={togglePlayback}
          >
            <span className="flex size-[clamp(88px,10vw,141px)] items-center justify-center rounded-full border-[4px] border-white bg-white/5 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur-[1px] transition-transform duration-200 hover:scale-105">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}