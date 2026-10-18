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

  const partners = [
    { src: assets.icter, alt: "ICTer" },
    { src: assets.kepri, alt: "Kepri" },
    { src: assets.akina, alt: "Akina" },
    { src: assets.knights, alt: "Knights" },
    { src: assets.lightfest, alt: "Lightfest" },
    { src: assets.jetex, alt: "Jetex" },
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


  return (
    <section
      className="partner-marquee-wrap relative w-full overflow-hidden border-b border-black/15 py-10 max-[640px]:py-7 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      data-node-id="2:108"
      aria-label="Partners"
    >
      {/* Logos are rendered twice so translating by -50% loops seamlessly */}
      <div className="partner-marquee flex w-max">
        {[0, 1].map((copy) =>
          partners.map((partner) => (
            <img
              key={`${copy}-${partner.alt}`}
              src={partner.src}
              alt={copy === 0 ? partner.alt : ""}
              aria-hidden={copy === 1 ? true : undefined}
              className="mx-10 h-20 w-auto max-w-[220px] shrink-0 object-contain opacity-50 select-none max-[640px]:mx-6 max-[640px]:h-14 max-[640px]:max-w-[160px]"
              draggable="false"
            />
          ))
        )}
      </div>
    </section>
  )
}
