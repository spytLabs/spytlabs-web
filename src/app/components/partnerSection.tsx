export default function PartnerSection() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    google: "/figma-assets/google.png",
    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };

  const partners = [
    { src: assets.google, alt: "Google" },
    { src: assets.amazon, alt: "Amazon" },
    { src: assets.oracle, alt: "Oracle" },
    { src: assets.ebay, alt: "eBay" },
    { src: assets.netflix, alt: "Netflix" },
  ];


  return (
     <section
        className="min-h-[15vh] flex justify-between items-center w-full border-y border-black/24 px-12.5 py-4.5 max-[640px]:hidden max-[1024px]:flex-wrap max-[1024px]:justify-center max-[1024px]:gap-6 max-[640px]:p-4"
        data-node-id="2:108"
        aria-label="Partners"
      >
        {partners.map((partner) => (
          <img
            key={partner.alt}
            src={partner.src}
            alt={partner.alt}
            className="max-h-10.5  object-contain opacity-[0.5] select-none"
            draggable="false"
          />
        ))}
      </section>
  )


}