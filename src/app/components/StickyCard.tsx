"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Sticky stacking card that never hides its own bottom: when the card is taller than
// the viewport, it scrolls fully into view first and only then sticks
export default function StickyCard({ className, top, children }: { className: string; top: number; children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  const [stickyTop, setStickyTop] = useState(top);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const update = () => setStickyTop(Math.min(top, window.innerHeight - card.offsetHeight - 24));
    update();

    const observer = new ResizeObserver(update);
    observer.observe(card);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [top]);

  return (
    <article ref={ref} className={className} style={{ top: `${stickyTop}px` }}>
      {children}
    </article>
  );
}
