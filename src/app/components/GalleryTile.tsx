import Image from "next/image";
import ReelVideo from "./ReelVideo";
import type { GalleryItem } from "@/lib/caseStudies";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5 fill-current">
      <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
    </svg>
  );
}

export default function GalleryTile({ item, showLabel = true }: { item: GalleryItem; showLabel?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-white/[0.06] max-lg:w-[44vw] max-lg:max-w-52 max-lg:shrink-0 max-lg:snap-start ${
        item.kind === "photo" && item.aspect === "portrait" ? "aspect-[4/5]" : "aspect-[9/16]"
      }`}
    >
      {item.kind === "reel" ? (
        <ReelVideo src={item.src} poster={item.poster} label={item.caption} />
      ) : (
        <Image className="object-cover" src={item.src} alt={item.caption} fill sizes="(min-width: 1024px) 20vw, 44vw" draggable={false} />
      )}
      {showLabel && (
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-3 pt-10 text-white">
        {item.kind === "reel" ? (
          <>
            <p className="m-0 flex items-center gap-1.5 text-[12px] font-semibold tracking-wide uppercase">
              <PlayIcon />
              {item.views ? `${item.views} views` : "Reel"}
            </p>
            <p className="m-0 mt-0.5 text-[13px] leading-snug text-white/75">{item.caption}</p>
          </>
        ) : (
          <p className="m-0 text-[13px] leading-snug font-medium text-white/90">{item.caption}</p>
        )}
      </div>
      )}
    </div>
  );
}
