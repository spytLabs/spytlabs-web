export default function MetricsSection() {
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

  return (
    <section
      className="flex flex-col sm:gap-20 gap-10 border-b border-black/24 px-12.5 py-22 max-[1060px]:pt-9 max-[1060px]:pr-5.5 max-[1060px]:pb-11 max-[1060px]:pl-5.5"
      data-node-id="2:137"
    >
      <div data-node-id="7:407">
        <h2
          className="m-0 section-title font-semibold"
          data-node-id="2:109"
        >
          Our <span className="text-[#2d0da0]">Ecosystem</span>
        </h2>
        <p
          className="mt-5 mb-0 max-w-330 text-[clamp(15px,1.5vw,34px)] leading-[1.45] font-regular text-[#77767e]"
          data-node-id="2:115"
        >
          To Push The Boundaries of Digital Marketing and Offer Brands a
          360-degree Growth Experience, We&apos;ve Built a Powerful Ecosystem of
          Innovation, Strategy, and Technology.
        </p>
      </div>

      <div
        className="sm:w-[80%] flex flex-col gap-10.5 sm:flex-row sm:gap-20"
        data-node-id="3:182"
      >
        <article className="flex flex-col gap-4.5" data-node-id="3:178">
          <img src={assets.roiIcon} alt="ROI icon" className="size-16.75" draggable={false} />
          <div
            className="flex items-end gap-3 border-b border-black/25 pb-3"
            data-node-id="3:174"
          >
            <div
              className="whitespace-nowrap text-[clamp(42px,4vw,72px)] leading-none font-medium text-[#333339] [&>span]:text-[#2d0da0]"
              data-node-id="3:173"
            >
              3.2<span>x</span>
            </div>
            <div
              className="text-[clamp(20px,2vw,32px)] leading-[1.1] font-medium -translate-y-0.5"
              data-node-id="3:177"
            >
              Avg. ROI Delivered
            </div>
          </div>
          <p
            className="m-0 max-w-160 text-[clamp(14px,1.02vw,20px)] leading-[1.45] text-[#54535c]"
            data-node-id="3:179"
          >
            A clear measure of the business value generated through our
            automation systems and marketing strategies, reflecting real financial impact and performance
            gains across client operations.
          </p>
        </article>

        <article className="flex flex-col gap-4.5" data-node-id="3:183">
          <img src={assets.aiIcon} alt="AI icon" className="size-16.75" draggable={false} />
          <div
            className="flex items-end gap-3 border-b border-black/25 pb-3"
            data-node-id="3:186"
          >
            <div
              className="whitespace-nowrap text-[clamp(42px,4vw,72px)] leading-none font-medium text-[#333339] [&>span]:text-[#2d0da0]"
              data-node-id="3:187"
            >
              1.2<span>K+</span>
            </div>
            <div
              className="text-[clamp(20px,2vw,32px)] leading-[1.1] font-medium -translate-y-0.5"
              data-node-id="3:188"
            >
              AI Processing Hours
            </div>
          </div>
          <p
            className="m-0 max-w-160 text-[clamp(14px,1.02vw,20px)] leading-[1.45] text-[#54535c]"
            data-node-id="3:189"
          >
            The total volume of intelligent processing power delivered through
            our systems, representing continuous automation, execution, and
            optimization across workflows.
          </p>
        </article>
      </div>
    </section>
  );
}
