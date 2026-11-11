import ReelVideo from "./ReelVideo";

export type ShowcaseProject = {
  name: string;
  type: string;
  description: string;
  outcome: string;
  videos: { src: string; poster: string; shape: "portrait" | "landscape" }[];
};

const BASE = "/projects";

const clip = (path: string, shape: "portrait" | "landscape") => ({ src: `${BASE}/${path}.mp4`, poster: `${BASE}/${path}.jpg`, shape });

// Real production work, in the same order as the pitch deck
export const showcaseProjects: ShowcaseProject[] = [
  {
    name: "JetEx Fulfilment",
    type: "Corporate video",
    description: "A corporate film for JetEx Fulfilment Services, covering its global expansion, warehouses, day-to-day operations and the tech that keeps every order moving.",
    outcome: "Corporate brand film",
    videos: [clip("jetex/film-1", "landscape"), clip("jetex/film-2", "landscape")],
  },
  {
    name: "Adrenaline Rush Gym",
    type: "Videography & social media",
    description: "The gym at the Colts Cricket Club. We film its reels and promos and run its social media, from member stories and trainer sessions to tours of the floor.",
    outcome: "Ongoing videography & social partner",
    videos: [
      clip("adrenaline-rush/reel-1", "portrait"),
      clip("adrenaline-rush/reel-5", "portrait"),
      clip("adrenaline-rush/reel-4", "portrait"),
      clip("adrenaline-rush/reel-2", "landscape"),
      clip("adrenaline-rush/reel-3", "landscape"),
    ],
  },
  {
    name: "C2C · Chilaw to Colombo Cycle Ride",
    type: "Coverage partner",
    description: "Sri Lanka's Chilaw-to-Colombo charity ride, organised by Adrenaline Rush with the Indira Cancer Trust and the Roshan Mahanama Trust. As coverage partner, we filmed it from the night start to the finish line.",
    outcome: "Official coverage partner",
    videos: [clip("c2c-ride/film-1", "landscape"), clip("c2c-ride/reel-3", "landscape"), clip("c2c-ride/reel-2", "landscape")],
  },
  {
    name: "Ella Wyrwas in Sri Lanka",
    type: "Event coverage",
    description: "On 10 July 2026, England Red Roses international Ella Wyrwas ran an elite coaching session for the Sri Lanka Women's Rugby team, and we were there to film it.",
    outcome: "Elite coaching session, on camera",
    videos: [clip("ella-wyrwas/film-1", "landscape"), clip("ella-wyrwas/film-2", "landscape")],
  },
  {
    name: "ICTer 2026",
    type: "Branding partner",
    description: "The 26th International Conference on Advances in ICT for Emerging Regions, organised by the University of Colombo School of Computing at City of Dreams. As branding partner, we shaped how the conference looked and felt across the venue.",
    outcome: "Official branding partner",
    videos: [clip("icter/reel-1", "portrait"), clip("icter/reel-2", "portrait"), clip("icter/reel-3", "portrait")],
  },
  {
    name: "UCSC Padura '26",
    type: "Event aftermovie",
    description: "The aftermovie for Padura '26, UCSC's night of music, dance and culture, filmed and edited alongside Pahasara, UCSC Media.",
    outcome: "Produced with Pahasara · UCSC Media",
    videos: [clip("ucsc-padura/film-1", "landscape"), clip("ucsc-padura/film-2", "landscape")],
  },
];

// Six-column grid: up to three portrait reels share a row; landscape films go two (or three) to a row
function span(shape: "portrait" | "landscape", count: number) {
  if (shape === "portrait") return "col-span-2";
  return count === 3 ? "col-span-2" : count === 1 ? "col-span-6" : "col-span-3";
}

export default function ProjectShowcase({ title = "More productions we've made." }: { title?: string }) {
  return (
    <section className="px-12.5 pb-22 max-[1060px]:px-5.5 max-[1060px]:pb-14">
      <p className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">{title}</p>
      <div className="border-t border-black/15">
        {showcaseProjects.map((project) => {
          const landscapes = project.videos.filter((video) => video.shape === "landscape").length;
          return (
            <article
              key={project.name}
              className="grid gap-8 border-b border-black/15 py-10 sm:py-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12"
            >
              <div>
                <p className="m-0 text-sm font-medium text-[#77767e]">{project.type}</p>
                <h3 className="m-0 mt-2 text-[clamp(32px,3.4vw,58px)] leading-[1] font-semibold tracking-[-0.04em] text-[#111114]">{project.name}</h3>
                <p className="m-0 mt-5 max-w-110 text-[clamp(15px,1.1vw,19px)] leading-[1.5] text-[#54535c]">{project.description}</p>
                <p className="m-0 mt-5 text-[15px] font-medium text-[#2d0da0]">{project.outcome}</p>
              </div>

              <div className="grid grid-cols-6 items-start gap-3">
                {project.videos.map((video, i) => (
                  <div
                    key={video.src}
                    className={`relative overflow-hidden rounded-lg bg-[#111114] ${span(video.shape, landscapes)} ${video.shape === "portrait" ? "aspect-[9/16]" : "aspect-video"}`}
                  >
                    <ReelVideo src={video.src} poster={video.poster} label={`${project.name}, video ${i + 1}`} />
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
