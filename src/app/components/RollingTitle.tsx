function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 stroke-white"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function RollingTitle({ title }: { title: string }) {
  return (
    <div className="group/title w-full">
      <div className="h-[clamp(48px,6vw,96px)] overflow-hidden">
        <div className="flex h-[200%] flex-col transition-transform duration-500 ease-out -translate-y-1/2 sm:translate-y-0 sm:group-hover/title:-translate-y-1/2">
          <div className="flex h-1/2 items-center justify-start">
            <h3 className="text-[clamp(34px,4.4vw,72px)] leading-none font-medium tracking-[-0.035em] pb-1">
              {title}
            </h3>
          </div>

          <div className="flex h-1/2 items-center justify-between gap-4">
            <h3 className="text-[clamp(34px,4.4vw,72px)] leading-none font-medium tracking-[-0.035em] pb-1">
              {title}
            </h3>
            <span className="flex size-15 shrink-0 items-center justify-center rounded-full border-2 border-[#eae9fe] bg-transparent">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
