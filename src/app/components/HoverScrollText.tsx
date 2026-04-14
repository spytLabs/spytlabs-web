import React from "react";

export default function HoverScrollText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`group inline-grid overflow-hidden cursor-pointer ${className}`}>
      <span className="col-start-1 row-start-1 transition-transform duration-500 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="col-start-1 row-start-1 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}
