export default function PartnerSection() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    // google: "/figma-assets/google.png",
    kepri: "/figma-assets/kepri-logo-black.png",
    vincent: "/figma-assets/vincent-pelle-logo.png",
    akina: "/figma-assets/akina-logo-black.png",
    knights: "/figma-assets/knight-logo-black.png",
    lightfest: "/figma-assets/litfest-logo-black.png",
    jetex: "/figma-assets/jetex-logo-black.png",
    linkup: "/figma-assets/linkup-logo-mono.png",
    icter: "/figma-assets/icter-logo-mono.png",
    weeranayaka: "/figma-assets/weeranayaka-gems-black-text.png",
    ninetynine: "/figma-assets/99-logo-black.png",
    adr: "/figma-assets/adr-logo-black.png",
    ceylonPost: "/figma-assets/ceylon-post-black.png",
    oneNews: "/figma-assets/onenews-logo-black.png",
    mishee: "/figma-assets/mishee-logo-black.png",



    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };

  // `tall` gives square/portrait logos more height so they match the wide ones visually
  const partners: { src: string; alt: string; tall?: boolean }[] = [
    { src: assets.icter, alt: "ICTer" },
    { src: assets.kepri, alt: "Kepri" },
    { src: assets.akina, alt: "Akina", tall: true },
    { src: assets.knights, alt: "Knights" },
    { src: assets.lightfest, alt: "Lightfest" },
    { src: assets.jetex, alt: "Jetex", tall: true },
    { src: assets.vincent, alt: "Vincent Pelle" },
    { src: assets.linkup, alt: "LinkUp" },
    { src: assets.weeranayaka, alt: "Weeranayaka Gems" },
    { src: assets.ninetynine, alt: "NinetyNine" },
    { src: assets.adr, alt: "ADR" },
    { src: assets.ceylonPost, alt: "Ceylon Post" },
    { src: assets.oneNews, alt: "One News" },
    { src: assets.mishee, alt: "Mishee" },


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
          From national news and literary festivals to hospitality, retail and entertainment. {partners.length} brands that trust spytLabs as their one stop for design, video and tech.
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
                      alt={copy === 0 && rowIndex === 0 ? partner.alt : ""}
                      className={`${partner.tall ? "max-h-20 max-[640px]:max-h-14" : "max-h-14 max-[640px]:max-h-10"} max-w-[62%] object-contain opacity-55 grayscale transition-opacity duration-300 select-none group-hover:opacity-100`}
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
