"use client";

import { useRef, useState } from "react";

const videoSrc =
  "https://res.cloudinary.com/drj8voqyf/video/upload/q_auto,f_auto/v1778127992/founders_video_final_k7e0kk.mp4";

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

function ReplayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-8 sm:size-10 lg:size-12 text-white"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-white">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-white">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  );
}

export default function FutureSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const video = videoRef.current;

    if (!video || !video.duration) {
      return;
    }

    const nextProgress = (video.currentTime / video.duration) * 100;
    setProgress(Math.max(0, Math.min(100, nextProgress)));
  };

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      if (isEnded) {
        video.currentTime = 0;
      }
      try {
        await video.play();
        setIsPlaying(true);
        setIsEnded(false);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
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

        <div className="group relative aspect-[1320/720] w-full sm:w-[80%] max-w-[1100px] mx-auto overflow-hidden bg-[#dbd8e7]" data-node-id="2:163">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoSrc}
            preload="metadata"
            playsInline
            muted={isMuted}
            onPlay={() => {
              setIsPlaying(true);
              setIsEnded(false);
            }}
            onPause={() => setIsPlaying(false)}
            onLoadedMetadata={updateProgress}
            onDurationChange={updateProgress}
            onTimeUpdate={updateProgress}
            onEnded={() => {
              setIsPlaying(false);
              setIsEnded(true);
              setProgress(100);
            }}
          />
          <div className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_52%)]" />
          </div>
          
          <button
            type="button"
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            aria-pressed={isPlaying}
            onClick={togglePlayback}
          >
            <span className="flex size-[clamp(56px,16vw,96px)] items-center justify-center rounded-full border-2 sm:border-[4px] border-white bg-white/5 shadow-[0_8px_24px_rgba(0,0,0,0.14)] backdrop-blur-[1px] transition-transform duration-200 hover:scale-105">
              {isEnded ? <ReplayIcon /> : (isPlaying ? <PauseIcon /> : <PlayIcon />)}
            </span>
          </button>

          {/* Bottom HUD bar — progress + mute */}
          <div
            className={`absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-2 px-4 pb-4 pt-8 transition-opacity duration-300 bg-[linear-gradient(to_top,rgba(0,0,0,0.45)_0%,transparent_100%)] ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          >
            {/* Scrubable progress bar */}
            <div
              role="progressbar"
              aria-label="Video progress"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              className="relative h-1 w-full cursor-pointer rounded-full bg-white/30 group/bar"
              onClick={handleProgressClick}
            >
              {/* Filled track */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[#2d0da0]"
                style={{ width: `${progress}%` }}
              />
              {/* Thumb dot */}
              <div
                className="pointer-events-none absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md opacity-0 transition-opacity duration-150 group-hover/bar:opacity-100"
                style={{ left: `${progress}%` }}
              />
            </div>

            {/* Mute button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={toggleMute}
                className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}