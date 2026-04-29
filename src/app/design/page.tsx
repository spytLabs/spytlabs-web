import Link from "next/link";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";

const assets = {
  designImg1: "/figma-assets/design-img-1.jpg",
  designImg2: "/figma-assets/design-img-2.jpg",
  designImg3: "/figma-assets/design-img-3.jpg",
  designImg4: "/figma-assets/design-img-4.jpg",
  designImg5: "/figma-assets/design-img-5.jpg",
  designImg6: "/figma-assets/design-img-6.jpg",
  designImg7: "/figma-assets/design-img-7.png",
};

export default function DesignPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border ">
      {/* Hero Section */}
      <PageHeroSection title="Design." />

      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-[1410px] px-5 sm:px-11">
        {/* Headline Section */}
        <section className="py-16 md:pb-16 pb-8 text-center sm:py-20">
          <h2 className="mx-auto max-w-3xl text-[clamp(40px,5.5vw,65px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black">
            Crafting Digital Products
            <span className="block text-[#2d0da0]">That Truly Connect</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[clamp(14px,1.5vw,30px)] leading-[1.3] font-normal text-[#45454a]">
            We combine storytelling, design, and engineering
            <br />
            to build products that connect and perform.
          </p>
        </section>

        {/* Three Column Image Grid - full-bleed, cropped edges */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-clip py-12">
          <section className="mx-auto w-[170vw] sm:w-[150vw] lg:w-[120vw]">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              <div className="col-start-1 overflow-hidden">
          <img
            src={assets.designImg1}
            alt="Design showcase 1"
            className="h-55 w-full object-cover sm:h-70 lg:h-125"
          />
              </div>

              <div className="col-start-2 overflow-hidden">
          <img
            src={assets.designImg7}
            alt="Design showcase 2"
            className="h-55 w-full object-cover sm:h-70 lg:h-125"
          />
              </div>

              <div className="col-start-3 overflow-hidden">
          <img
            src={assets.designImg3}
            alt="Design showcase 3"
            className="h-55 w-full object-cover sm:h-70 lg:h-125"
          />
              </div>
            </div>
          </section>
        </div>

        {/* Feature Section 1: Intuitive UI/UX */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Intuitive UI/UX Experiences
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              We create clean, user-focused interfaces that work smoothly across
              all devices. Our approach blends usability, consistency, and
              flexibility, supported by user insights and feedback to
              continuously improve how people interact with your product.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.designImg4}
              alt="UI/UX showcase"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Feature Section 2: Dynamic Motion */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Dynamic Motion & Visual Storytelling
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              We design engaging animations that communicate your brand with
              clarity and impact. From early concepts to final production, we
              shape motion and sound together to create experiences that feel
              alive and memorable.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.designImg5}
              alt="Motion & storytelling"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Feature Section 3: Creative Strategy */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              End-to-End Creative Design Strategy
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              We build design systems that connect with audiences and support
              real business goals. Using research, audits, and user behavior
              insights, we develop visuals that improve engagement and
              strengthen brand presence.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.designImg6}
              alt="Design strategy"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Spacing before contact section */}
        <div className="py-8 sm:py-12" />
      </div>

      {/* Contact Section */}
      <ContactFooterSection />
    </main>
  );
}
