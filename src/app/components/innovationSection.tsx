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

const cards = [
  {
    title: "Design",
    nodeId: "3:229",
  },
  {
    title: "Automation",
    nodeId: "3:242",
  },
];

export default function InnovationSection() {
  return (
    <section className="px-5 pb-16 pt-6 sm:px-11 sm:pb-20" data-node-id="3:255">
      <div className="mx-auto flex w-full max-w-352.5 flex-col gap-8 sm:gap-10">
        <header className="max-w-330" data-node-id="3:219">
          <h2
            className="m-0 max-w-280 text-[clamp(42px,5.5vw,72px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black"
            data-node-id="3:220"
          >
            Covering Every Dimension of
            <span className="block text-[#2d0da0]">Digital Innovation.</span>
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10" data-node-id="3:226">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative min-h-117.5 overflow-hidden bg-[linear-gradient(198.3229deg,#5219db_11.943%,#120351_84.825%)] px-8 py-8 text-[#eae9fe] sm:min-h-142.5 sm:px-10 sm:py-10"
              data-node-id={card.nodeId}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.12)_100%)]" />

              <div className="relative flex h-full items-end">
                <div className="flex w-full items-end justify-between gap-4">
                  <h3 className="text-[clamp(34px,4.4vw,72px)] leading-none font-medium tracking-[-0.035em]">
                    {card.title}
                  </h3>
                  <button
                    type="button"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-[#eae9fe] bg-transparent transition-transform duration-200 hover:scale-105"
                    aria-label={`${card.title} details`}
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}