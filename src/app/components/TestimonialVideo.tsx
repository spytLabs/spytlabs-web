"use client";

import { useEffect, useRef, useState } from "react";

function VolumeOffIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

// Video testimonial: autoplays muted while on screen; first unmute restarts it from the top
export default function TestimonialVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const hasUnmutedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasUnmutedRef.current) video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = ref.current;
    if (!video) return;

    if (isMuted && !hasUnmutedRef.current) {
      hasUnmutedRef.current = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        preload="none"
        loop
        muted
        playsInline
        aria-label={label}
      />
      <button
        type="button"
        onClick={toggleMute}
        className={`absolute top-4 right-4 flex min-h-11 items-center gap-2 rounded-full py-2 pr-4 pl-3 text-[13px] font-medium shadow-lg transition-colors ${
          isMuted ? "bg-white text-[#111114] hover:bg-[#3200eb] hover:text-white" : "bg-black/50 text-white backdrop-blur-md hover:bg-black/70"
        }`}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        {isMuted ? "Tap for sound" : "Sound on"}
      </button>
    </div>
  );
}
