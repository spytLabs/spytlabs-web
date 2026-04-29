export default function PartnerSection() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    // google: "/figma-assets/google.png",
    kepri: "/figma-assets/kepri-logo-black.png",
    vincent: "/figma-assets/vincent-pelle-logo.png",
    linkup: "/figma-assets/linkup-logo-mono.png",
    weeranayaka: "/figma-assets/weeranayaka-gems-black-text.png",

    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };

  const partners = [
    { src: assets.kepri, alt: "Kepri" },
    { src: assets.vincent, alt: "Vincent Pelle" },
    { src: assets.linkup, alt: "LinkUp" },
    { src: assets.weeranayaka, alt: "Weeranayaka Gems" },
    // { src: assets.oracle, alt: "Oracle" },
    // { src: assets.ebay, alt: "eBay" },
    // { src: assets.netflix, alt: "Netflix" },
  ];


  return (
     <section
        className="min-h-[15vh] flex justify-center sm:justify-between flex-wrap items-center w-full gap-6 overflow-hidden border-b border-black/15 px-12.5 py-4.5 max-[640px]:p-8 max-[640px]:gap-y-6"
        data-node-id="2:108"
        aria-label="Partners"
      >
        {partners.map((partner) => (
          <img
            key={partner.alt}
            src={partner.src}
            alt={partner.alt}
            className="max-h-13 h-auto w-auto min-w-[80px] max-w-[28%] sm:max-w-[18%] shrink object-contain opacity-[0.5] select-none flex-1"
            draggable="false"
          />
        ))}
      </section>
  )


}