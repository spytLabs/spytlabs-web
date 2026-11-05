"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";

// Pixels per second
const SPEED = 32;
// After a swipe, wait this long before drifting again
const RESUME_AFTER_TOUCH = 2500;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

// Horizontal carousel that drifts continuously while it's on screen and can still be swiped.
// The items are rendered twice so the loop is seamless; the copy is mobile-only, and nothing
// moves when the content doesn't overflow (e.g. the desktop grid layout)
export default function AutoSlider({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const cloneRef = useRef<HTMLDivElement | null>(null);
  // Off during SSR, then on in the browser unless the viewer prefers reduced motion
  const enabled = useSyncExternalStore(
    subscribeMotion,
    () => !window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  useEffect(() => {
    const track = ref.current;
    if (!enabled || !track) return;

    // Snapping fights a continuous scroll
    track.style.scrollSnapType = "none";

    let visible = false;
    let touching = false;
    let resumeAt = 0;
    let pos = track.scrollLeft;
    let last = 0;
    let frame = 0;

    const loopWidth = () => {
      const first = track.firstElementChild;
      const copy = cloneRef.current?.firstElementChild;
      return first && copy ? copy.getBoundingClientRect().left - first.getBoundingClientRect().left : 0;
    };

    const step = (now: number) => {
      const dt = last ? Math.min(now - last, 64) / 1000 : 0;
      last = now;

      if (!touching && now >= resumeAt && track.scrollWidth - track.clientWidth > 1) {
        // Pick up wherever a swipe or momentum left it
        if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft;
        pos += SPEED * dt;
        const loop = loopWidth();
        if (loop > 0 && pos >= loop) pos -= loop;
        track.scrollLeft = pos;
      }

      frame = visible ? requestAnimationFrame(step) : 0;
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) {
        last = 0;
        frame = requestAnimationFrame(step);
      }
    });
    observer.observe(track);

    const onTouchStart = () => {
      touching = true;
    };
    const onTouchEnd = () => {
      touching = false;
      resumeAt = performance.now() + RESUME_AFTER_TOUCH;
    };
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.style.scrollSnapType = "";
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [enabled]);

  return (
    <div ref={ref} className={className}>
      {children}
      {enabled && (
        <div ref={cloneRef} className="contents lg:hidden" aria-hidden="true" inert>
          {children}
        </div>
      )}
    </div>
  );
}
