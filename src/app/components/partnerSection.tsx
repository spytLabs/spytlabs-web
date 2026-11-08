export default function PartnerSection() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    // google: "/figma-assets/google.png",
    kepri: "/figma-assets/kepri-logo-black.webp",
    vincent: "/figma-assets/vincent-pelle-logo.webp",
    akina: "/figma-assets/akina-logo-black.webp",
    knights: "/figma-assets/knight-logo-black.webp",
    lightfest: "/figma-assets/litfest-logo-black.webp",
    jetex: "/figma-assets/jetex-logo-black.webp",
    linkup: "/figma-assets/linkup-logo-mono.webp",
    icter: "/figma-assets/icter-logo-mono.webp",
    weeranayaka: "/figma-assets/weeranayaka-gems-black-text.webp",
    ninetynine: "/figma-assets/99-logo-black.webp",
    adr: "/figma-assets/adr-logo-black.webp",
    ceylonPost: "/figma-assets/ceylon-post-black.webp",
    oneNews: "/figma-assets/onenews-logo-black.webp",
    mishee: "/figma-assets/mishee-logo-black.webp",



    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };

  // `tall` gives square/portrait logos more height so they match the wide ones visually
  const partners: { src: string; width: number; height: number; alt: string; tall?: boolean }[] = [
    { src: assets.icter, width: 229, height: 170, alt: "ICTer" },
    { src: assets.kepri, width: 300, height: 95, alt: "Kepri" },
    { src: assets.akina, width: 90, height: 170, alt: "Akina", tall: true },
    { src: assets.knights, width: 300, height: 117, alt: "Knights" },
    { src: assets.lightfest, width: 215, height: 92, alt: "Colombo Literary Festival" },
    { src: assets.jetex, width: 152, height: 170, alt: "Jetex", tall: true },
    { src: assets.vincent, width: 300, height: 140, alt: "Vincent Pelle" },
    { src: assets.linkup, width: 300, height: 162, alt: "LinkUp" },
    { src: assets.weeranayaka, width: 300, height: 83, alt: "Weeranayaka Gems" },
    { src: assets.ninetynine, width: 300, height: 169, alt: "NinetyNine" },
    { src: assets.adr, width: 113, height: 82, alt: "ADR" },
    { src: assets.ceylonPost, width: 300, height: 77, alt: "Ceylon Post" },
    { src: assets.oneNews, width: 300, height: 140, alt: "One News" },
    { src: assets.mishee, width: 300, height: 50, alt: "Mishee" },


    // { src: assets.oracle, alt: "Oracle" },
    // { src: assets.ebay, alt: "eBay" },
    // { src: assets.netflix, alt: "Netflix" },
  ];


  // Second row runs the other way, starting mid-list so the rows never line up
  const rows = [partners, [...partners.slice(7), ...partners.slice(0, 7)]];

  return (
    <section
      className="flex flex-col gap-10 py-16 max-[640px]:gap-7 max-[640px]:py-10"
      data-node-id="2:108"
      aria-label="Partners"
    >
      <div className="flex flex-col gap-4 px-12.5 sm:flex-row sm:items-end sm:justify-between max-[1060px]:px-5.5">
        <div>
          <p className="m-0 text-sm font-medium tracking-wide text-[#77767e] uppercase">Trusted by</p>
          <h2 className="m-0 mt-2 text-[clamp(30px,3.2vw,52px)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#1c1c21]">
            Brands we&apos;ve <span className="text-[#2d0da0]">built for.</span>
          </h2>
        </div>
        <p className="m-0 max-w-105 text-[clamp(15px,1.05vw,19px)] leading-[1.45] text-[#54535c]">
          spytLabs is a design, video production, software and AI automation studio in Colombo, Sri Lanka. From national news and literary festivals to hospitality, retail and entertainment, {partners.length} brands trust us as their one stop.
        </p>
      </div>

      <div className="flex flex-col gap-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="partner-marquee-wrap overflow-hidden">
            {/* Logos are rendered twice so translating by -50% loops seamlessly */}
            <div className={`partner-marquee flex w-max gap-3 pr-3 ${rowIndex === 1 ? "partner-marquee-reverse" : ""}`}>
              {[0, 1].map((copy) =>
                row.map((partner) => (
                  <div
                    key={`${copy}-${partner.alt}`}
                    aria-hidden={copy === 1 || rowIndex === 1 ? true : undefined}
                    className="group flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-[#f4f4f6] transition-colors duration-300 hover:border-[#3200eb]/20 hover:bg-white max-[640px]:h-20 max-[640px]:w-40 max-[640px]:rounded-xl"
                  >
                    <img
                      src={partner.src}
                      width={partner.width}
                      height={partner.height}
                      loading="lazy"
                      decoding="async"
                      alt={copy === 0 && rowIndex === 0 ? partner.alt : ""}
                      className={`${partner.tall ? "max-h-20 max-[640px]:max-h-14" : "max-h-14 max-[640px]:max-h-10"} h-auto w-auto max-w-[62%] object-contain opacity-55 grayscale transition-opacity duration-300 select-none group-hover:opacity-100`}
                      draggable="false"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
