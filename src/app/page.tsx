export default function Home() {
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
    <main
      className="mt-5 mx-5 mb-10 bg-white box-border max-[1060px]:m-0"
      data-node-id="7:402"
    >
      <section className="overflow-hidden rounded-lg" data-node-id="2:93">
        <div
          className="flex min-h-170 flex-col justify-end bg-cover bg-center pt-7 pr-12 pb-11 pl-12 text-white max-[1060px]:min-h-140 max-[1060px]:pt-5 max-[1060px]:pr-5.5 max-[1060px]:pb-7 max-[1060px]:pl-5.5 max-[640px]:min-h-122.5"
          style={{ backgroundImage: `url(${assets.heroBg})` }}
          data-node-id="1:399"
        >
          <header
            className="mb-auto flex items-center justify-between max-[1060px]:flex-col max-[1060px]:items-start max-[1060px]:gap-4"
            data-node-id="2:92"
          >
            <img src={assets.logo} alt="spytLabs" className="h-8.5 w-38.75 object-contain" />
            <nav
              className="flex items-center gap-7 text-[clamp(15px,1.15vw,20px)] font-medium max-[1060px]:flex-wrap max-[1060px]:gap-y-3 max-[1060px]:gap-x-5 [&>a]:text-white [&>a]:no-underline"
              aria-label="Primary"
            >
              <a href="#">Design</a>
              <a href="#">Automation</a>
              <a href="#">Production</a>
              <a href="#">Technology</a>
              <a href="#" className="rounded-full bg-[#3200eb] px-5.5 py-2">
                Contact Us
              </a>
            </nav>
          </header>

          <p className="m-0 text-[clamp(14px,1vw,20px)] font-medium tracking-[0] opacity-90" data-node-id="2:46">
            BEYOND MARKETING. INTO THE FUTURE
          </p>
          <h1
            className="mt-2 mb-0 flex flex-col text-[clamp(48px,6.55vw,96px)] leading-[1.08] font-semibold tracking-[-0.015em] max-[640px]:text-[clamp(42px,12vw,62px)]"
            data-node-id="2:3"
          >
            <span>We don&apos;t follow trends</span>
            <span>-we create them.</span>
          </h1>
        </div>
      </section>

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

      <section
        className="flex flex-col gap-10.5 border-b border-black/24 px-10 pt-12 pb-14 max-[1060px]:pt-9 max-[1060px]:pr-5.5 max-[1060px]:pb-11 max-[1060px]:pl-5.5"
        data-node-id="2:137"
      >
        <div data-node-id="7:407">
          <h2 className="m-0 text-[clamp(44px,4vw,72px)] leading-[1.12] font-semibold" data-node-id="2:109">
            Our <span className="text-[#2d0da0]">Ecosystem</span>
          </h2>
          <p
            className="mt-3 mb-0 max-w-330 text-[clamp(19px,1.6vw,35px)] leading-[1.35] font-medium text-[#333339]"
            data-node-id="2:115"
          >
            To Push The Boundaries of Digital Marketing and Offer Brands a 360-degree Growth
            Experience, We&apos;ve Built a Powerful Ecosystem of Innovation, Strategy, and
            Technology.
          </p>
        </div>

        <div
          className="grid grid-cols-[repeat(2,minmax(300px,1fr))] gap-15 max-[1060px]:grid-cols-1 max-[1060px]:gap-9"
          data-node-id="3:182"
        >
          <article className="flex flex-col gap-4.5" data-node-id="3:178">
            <img src={assets.roiIcon} alt="ROI icon" className="size-16.75" />
            <div
              className="flex items-end gap-3 border-b border-black/40 pb-3 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-1.5"
              data-node-id="3:174"
            >
              <div
                className="whitespace-nowrap text-[clamp(42px,4vw,72px)] leading-none font-medium text-[#333339] [&>span]:text-[#2d0da0]"
                data-node-id="3:173"
              >
                3.2<span>x</span>
              </div>
              <div className="text-[clamp(25px,2vw,32px)] leading-[1.1] font-medium" data-node-id="3:177">
                Avg. ROI Delivered
              </div>
            </div>
            <p className="m-0 max-w-160 text-[clamp(16px,1.02vw,18px)] leading-[1.45] text-[#54535c]" data-node-id="3:179">
              A clear measure of the business value generated through our automation systems,
              reflecting real financial impact and performance gains across client operations.
            </p>
          </article>

          <article className="flex flex-col gap-4.5" data-node-id="3:183">
            <img src={assets.aiIcon} alt="AI icon" className="size-16.75" />
            <div
              className="flex items-end gap-3 border-b border-black/40 pb-3 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-1.5"
              data-node-id="3:186"
            >
              <div
                className="whitespace-nowrap text-[clamp(42px,4vw,72px)] leading-none font-medium text-[#333339] [&>span]:text-[#2d0da0]"
                data-node-id="3:187"
              >
                1.2<span>K+</span>
              </div>
              <div className="text-[clamp(25px,2vw,32px)] leading-[1.1] font-medium" data-node-id="3:188">
                AI Processing Hours
              </div>
            </div>
            <p className="m-0 max-w-160 text-[clamp(16px,1.02vw,18px)] leading-[1.45] text-[#54535c]" data-node-id="3:189">
              The total volume of intelligent processing power delivered through our systems,
              representing continuous automation, execution, and optimization across workflows.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
