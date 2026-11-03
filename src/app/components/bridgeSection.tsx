import Link from "next/link";

const sides = [
  {
    index: "01",
    word: "Marketing.",
    line: "Brand, content and campaigns. The work that gets you noticed.",
    items: ["Brand identity", "Video production", "Social content", "Campaigns"],
    links: [
      { label: "Design", href: "/design" },
      { label: "Productions", href: "/productions" },
    ],
    panel: "bg-[#f4f4f6] text-[#111114]",
    muted: "text-[#54535c]",
    rule: "border-black/15",
  },
  {
    index: "02",
    word: "Tech.",
    line: "Websites, apps and automation. The systems that turn attention into customers.",
    items: ["Websites & apps", "AI automation", "Integrations", "Data & reporting"],
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Automation", href: "/automation" },
    ],
    panel: "bg-[#3200eb] text-white",
    muted: "text-white/75",
    rule: "border-white/25",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function BridgeSection() {
  return (
    <section className="mt-2 flex min-h-[100vh] flex-col overflow-hidden rounded-lg" aria-label="Marketing and tech">
      <div className="flex flex-1 max-lg:flex-col">
        {sides.map((side) => (
          <div
            key={side.word}
            className={`group flex flex-1 flex-col justify-between gap-12 px-12.5 pt-12 pb-12 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:grow-[1.5] min-w-0 overflow-hidden max-[1060px]:px-5.5 max-[1060px]:pt-10 max-[1060px]:pb-10 ${side.panel}`}
          >
            <div>
              <p className={`m-0 text-sm font-medium tracking-wide uppercase ${side.muted}`}>{side.index}</p>
              <h2 className="m-0 mt-5 text-[clamp(60px,7.5vw,150px)] leading-[0.9] font-semibold tracking-[-0.05em]">
                {side.word}
              </h2>
              <p className={`m-0 mt-6 max-w-120 text-[clamp(16px,1.3vw,22px)] leading-[1.4] ${side.muted}`}>{side.line}</p>
            </div>

            <div>
              <ul className={`m-0 list-none border-t p-0 ${side.rule}`}>
                {side.items.map((item) => (
                  <li key={item} className={`border-b py-3.5 text-[clamp(18px,1.5vw,26px)] font-medium tracking-[-0.01em] ${side.rule}`}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-6">
                {side.links.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-1.5 text-[15px] font-medium underline-offset-4 hover:underline">
                    {link.label}
                    <ArrowIcon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-6 bg-[#111114] px-12.5 py-8 text-white max-[1060px]:flex-col max-[1060px]:items-start max-[1060px]:px-5.5">
        <p className="m-0 text-[clamp(24px,2.6vw,44px)] leading-[1.1] font-semibold tracking-[-0.03em]">
          Most agencies pick a side. <span className="text-white/50">We work both.</span>
        </p>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-[16px] font-medium text-[#111114] transition-colors hover:bg-[#3200eb] hover:text-white"
        >
          Start a project
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
