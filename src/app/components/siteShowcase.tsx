export type ShowcaseSite = {
  name: string;
  type: string;
  description: string;
  url: string;
  href: string;
  home: string;
  mobile: string;
  screens: { src: string; alt: string }[];
};

const BASE = "/case-studies";

// Real sites spytLabs designed and built, shown as live-page screenshots
export const showcaseSites: ShowcaseSite[] = [
  {
    name: "LinkUp Colombo",
    type: "Community events website",
    description: "A bold, playful site for Colombo's social events community, with event pages, online tickets, a photo gallery and FAQs.",
    url: "linkupcolombo.com",
    href: "https://linkupcolombo.com/",
    home: `${BASE}/linkup/home.jpg`,
    mobile: `${BASE}/linkup/mobile.jpg`,
    screens: [
      { src: `${BASE}/linkup/about.jpg`, alt: "LinkUp Colombo about section" },
      { src: `${BASE}/linkup/tickets.jpg`, alt: "LinkUp Colombo tickets page" },
    ],
  },
  {
    name: "MISHEE",
    type: "E-commerce store",
    description: "An online store for premium gate motors and roller door systems, with product categories, product pages, cart and customer accounts.",
    url: "mishee-web.vercel.app",
    href: "https://mishee-web.vercel.app/",
    home: `${BASE}/mishee/home.jpg`,
    mobile: `${BASE}/mishee/mobile.jpg`,
    screens: [
      { src: `${BASE}/mishee/categories.jpg`, alt: "MISHEE product categories" },
      { src: `${BASE}/mishee/shop.jpg`, alt: "MISHEE shop page" },
    ],
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

export default function SiteShowcase({ title = "More websites we've built." }: { title?: string }) {
  return (
    <section className="px-12.5 pb-22 max-[1060px]:px-5.5 max-[1060px]:pb-14">
      <p className="m-0 mb-6 text-sm font-medium tracking-wide text-[#77767e] uppercase">{title}</p>
      <div className="border-t border-black/15">
        {showcaseSites.map((site) => (
          <article
            key={site.name}
            className="grid gap-8 border-b border-black/15 py-10 sm:py-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12"
          >
            <div className="flex flex-col justify-between gap-6">
              <div>
                <p className="m-0 text-sm font-medium text-[#77767e]">{site.type}</p>
                <h3 className="m-0 mt-2 text-[clamp(32px,3.4vw,58px)] leading-[1] font-semibold tracking-[-0.04em] text-[#111114]">{site.name}</h3>
                <p className="m-0 mt-5 max-w-110 text-[clamp(15px,1.1vw,19px)] leading-[1.5] text-[#54535c]">{site.description}</p>
              </div>
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-[15px] font-medium text-[#111114] transition-colors hover:border-[#3200eb] hover:bg-[#3200eb] hover:text-white"
              >
                Visit site
                <ArrowIcon />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-3">
                <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-black/10 bg-white">
                  <div className="flex items-center gap-3 border-b border-black/10 px-4 py-2.5">
                    <span aria-hidden="true" className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-black/15" />
                      <span className="size-2.5 rounded-full bg-black/15" />
                      <span className="size-2.5 rounded-full bg-black/15" />
                    </span>
                    <span className="mx-auto w-full max-w-sm truncate rounded-full bg-[#f4f4f6] px-3 py-1 text-center text-[12px] text-[#77767e]">{site.url}</span>
                    <span className="w-10 max-sm:hidden" />
                  </div>
                  <img src={site.home} alt={`${site.name} home page`} className="block aspect-[16/10] w-full object-cover object-top" draggable={false} />
                </div>
                <div className="w-[22%] shrink-0 overflow-hidden rounded-[22px] border-[5px] border-[#111114] bg-[#111114] max-sm:hidden">
                  <img src={site.mobile} alt={`${site.name} on mobile`} className="block aspect-[9/19] w-full rounded-[16px] object-cover object-top" draggable={false} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {site.screens.map((screen) => (
                  <img
                    key={screen.src}
                    src={screen.src}
                    alt={screen.alt}
                    className="aspect-[16/10] w-full rounded-lg border border-black/10 object-cover object-top"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
