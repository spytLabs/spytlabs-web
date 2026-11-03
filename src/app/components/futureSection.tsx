"use client";

import { useEffect, useRef, useState } from "react";

const videoSrc =
  "https://res.cloudinary.com/drj8voqyf/video/upload/q_auto,f_auto/v1778127992/founders_video_final_k7e0kk.mp4";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="ml-0.5 size-5 fill-current">
      <path d="M11 7.5v17l14-8.5-14-8.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="size-5 fill-current">
      <path d="M10 8h4v16h-4V8Zm8 0h4v16h-4V8Z" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function FutureSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const userPausedRef = useRef(false);
  const hasUnmutedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Autoplay muted while the video is on screen; pause when scrolled away
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPausedRef.current) {
          if (!hasUnmutedRef.current) video.muted = true;
          video.play().catch(() => setIsPlaying(false));
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const updateProgress = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setDuration(video.duration);
    setCurrentTime(video.currentTime);
    setProgress(Math.max(0, Math.min(100, (video.currentTime / video.duration) * 100)));
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userPausedRef.current = false;
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    userPausedRef.current = true;
    video.pause();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    // First unmute restarts the video so viewers hear the story from the top
    if (isMuted && !hasUnmutedRef.current) {
      hasUnmutedRef.current = true;
      video.currentTime = 0;
      userPausedRef.current = false;
      video.play().catch(() => setIsPlaying(false));
    }
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
  };

  return (
    <section className="flex flex-col gap-10 px-12.5 pt-22 pb-22 sm:gap-14 max-[1060px]:px-5.5 max-[1060px]:pt-14 max-[1060px]:pb-14" data-node-id="3:257">
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-16" data-node-id="2:167">
        <div>
          <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">From the founders</p>
          <h2 className="m-0 mt-3 section-title font-semibold text-black" data-node-id="2:143">
            The future <span className="text-[#2d0da0]">we&apos;re building.</span>
          </h2>
        </div>
        <p className="m-0 max-w-130 text-[clamp(15px,1.25vw,22px)] leading-[1.45] text-[#77767e]" data-node-id="2:144">
          Our founders on the ideas shaping how brands grow, adapt and lead in a changing digital world.
        </p>
      </header>

      <div
        className="group relative aspect-video max-h-[88vh] w-full cursor-pointer overflow-hidden rounded-lg bg-[#111114]"
        data-node-id="2:163"
        onClick={togglePlayback}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoSrc}
          preload="metadata"
          playsInline
          loop
          muted={isMuted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={updateProgress}
          onDurationChange={updateProgress}
          onTimeUpdate={updateProgress}
        />

        <span className="pointer-events-none absolute top-5 left-5 rounded-full bg-black/30 px-3 py-1 text-[11px] font-medium tracking-wide text-white uppercase backdrop-blur-md sm:top-8 sm:left-8 sm:px-3.5 sm:py-1.5 sm:text-xs">
          Founders&apos; note
        </span>

        <button
          type="button"
          onClick={toggleMute}
          className={`absolute top-4 right-4 flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-3 text-[13px] font-medium text-[#111114] shadow-lg transition-all duration-300 hover:scale-105 sm:top-7 sm:right-7 sm:text-[15px] ${
            isMuted ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label="Unmute video"
        >
          <VolumeOffIcon />
          Tap for sound
        </button>

        {/* Controls: revealed on hover while playing, always shown when paused */}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center gap-4 bg-linear-to-t from-black/60 to-transparent px-5 pt-10 pb-5 text-white transition-opacity duration-300 sm:px-8 sm:pb-7 ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlayback();
            }}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111114] transition-transform hover:scale-105"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          <span className="w-10 shrink-0 text-sm tabular-nums text-white/80">{formatTime(currentTime)}</span>

          <div
            role="progressbar"
            aria-label="Video progress"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="group/bar relative flex h-4 flex-1 cursor-pointer items-center"
            onClick={handleProgressClick}
          >
            <div className="h-1 w-full rounded-full bg-white/25" />
            <div className="pointer-events-none absolute left-0 h-1 rounded-full bg-[#3200eb]" style={{ width: `${progress}%` }} />
            <div
              className="pointer-events-none absolute size-3 -translate-x-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover/bar:opacity-100"
              style={{ left: `${progress}%` }}
            />
          </div>

          <span className="w-10 shrink-0 text-right text-sm tabular-nums text-white/60">{formatTime(duration)}</span>

          <button
            type="button"
            onClick={toggleMute}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
          </button>
        </div>
      </div>
    </section>
  );
}
