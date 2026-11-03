import React from "react";

export default function HoverScrollText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Copies travel slightly more than one line so tall/descending glyphs never peek in tight line-heights
  return (
    <span className={`group inline-grid overflow-hidden cursor-pointer ${className}`}>
      <span className="col-start-1 row-start-1 transition-transform duration-500 ease-out group-hover:-translate-y-[calc(100%+0.3em)]">
        {children}
      </span>
      <span className="col-start-1 row-start-1 translate-y-[calc(100%+0.3em)] transition-transform duration-500 ease-out group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}
