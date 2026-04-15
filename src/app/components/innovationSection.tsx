import Link from "next/link";
import RollingTitle from "./RollingTitle";

const cards = [
  {
    title: "Design",
    nodeId: "3:229",
    href: "/design",
    videoSrc: "/figma-assets/Design.mp4",
  },
  {
    title: "Automation",
    nodeId: "3:242",
    href: "/automation",
    videoSrc: "/figma-assets/automation.mp4",
  },
  {
    title: "Production",
    nodeId: "3:243",
    href: "#",
    videoSrc: "/figma-assets/production.mp4",
  },
  {
    title: "Technology",
    nodeId: "3:244",
    href: "#",
    videoSrc: "/figma-assets/spyt-bg-animation.mp4",
  }
];

export default function InnovationSection() {
  return (
    <section className="py-15 sm:py-20" data-node-id="3:255">
      <div className=" flex w-full  flex-col gap-8 sm:gap-10">
        <header className="max-w-330 px-5 sm:px-11" data-node-id="3:219">
          <h2
            className="m-0 max-w-280 section-title font-semibold text-black"
            data-node-id="3:220"
          >
            Covering Every Dimension of
            <span className="block text-[#2d0da0]">Digital Innovation.</span>
          </h2>
        </header>

        <div className="flex w-full gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:gap-8 lg:gap-10 sm:px-11 px-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-node-id="3:226">
          {cards.map((card) => {
            const content = (
              <>
                <video
                  src={card.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_42%)] z-1" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.12)_100%)] z-1" />

                <div className="relative z-10 flex h-full items-end ">
                  <RollingTitle title={card.title} />
                </div>
              </>
            );

            return (
              <Link
                key={card.title}
                href={card.href}
                className="relative w-[85%] shrink-0 snap-center min-h-117.5 overflow-hidden bg-[linear-gradient(198.3229deg,#5219db_11.943%,#120351_84.825%)] px-8 py-8 text-[#eae9fe] sm:min-h-110 sm:w-[60%] lg:w-[45%] sm:px-10 sm:py-10"
                data-node-id={card.nodeId}
              >
                {content}
              </Link>
            );
          })}
          <div className="w-[1px] shrink-0"></div>
        </div>
      </div>
    </section>
  );
}