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
        className="grid grid-cols-[repeat(5,minmax(100px,1fr))] items-center justify-items-center gap-5 border-y border-black/24 px-9 py-4.5 max-[1060px]:grid-cols-[repeat(3,minmax(100px,1fr))] max-[640px]:grid-cols-[repeat(2,minmax(100px,1fr))] max-[640px]:p-4"
        data-node-id="2:108"
        aria-label="Partners"
      >
        {partners.map((partner) => (
          <img
            key={partner.alt}
            src={partner.src}
            alt={partner.alt}
            className="max-h-10.5  object-contain opacity-[0.78]"
          />
        ))}
      </section>
  )


}