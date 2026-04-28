import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";

const assets = {
  intro1: "/figma-assets/spyt-web-bg-2.webm",
  intro2: "/figma-assets/automation-team.jpg",
  intro3: "/figma-assets/design-hero-1.jpg",
  platforms: "/figma-assets/path-digital-tR0jvlsmCuQ-unsplash.jpg",
  mobile: "/figma-assets/Image_9fnajf9fnajf9fna.png",
  infrastructure: "/figma-assets/kevin-ache-2JJ3wBHu4_0-unsplash 1.png",
  consulting: "/figma-assets/charlesdeluvio-Lks7vei-eAg-unsplash 1.png",
};

export default function TechnologyPage() {
  return (
    <main className="mt-5 mx-5 mb-10 box-border bg-white max-[1060px]:m-0">
      <PageHeroSection title="Technology." />

      <div className="mx-auto w-full max-w-352.5 px-5 sm:px-11">
        <section className="py-16 text-center sm:py-20 md:pb-16 pb-8">
          <p className="mx-auto text-[clamp(13px,1vw,18px)] font-medium uppercase tracking-[0.32em] text-[#2d0da0]">
            Engineering for the Modern Web
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(40px,5.5vw,65px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black">
            Turning vision into code,
            <span className="block text-[#2d0da0]">and code into growth.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[clamp(14px,1.45vw,28px)] leading-[1.45] font-normal text-[#45454a]">
            At spytLabs, we build the digital foundations that allow businesses
            to scale. We specialize in clean, high-performance software
            engineering, focusing on creating tools that are as functional as
            they are reliable.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-[clamp(14px,1.35vw,24px)] leading-[1.55] font-normal text-[#45454a]">
            Our team bridges the gap between complex technical requirements and
            intuitive user experiences. We do not just build features; we build
            scalable systems designed to handle growth from day one.
          </p>
        </section>

  
        <section className="flex flex-col gap-10 py-12 md:min-h-140 md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              What We Build
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Web Platforms &amp; Applications
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Custom-built, responsive web solutions using modern frameworks.
              We prioritize speed, SEO, and a seamless experience across all
              devices so your products feel fast and dependable from the first
              interaction.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.platforms}
              alt="Web platforms and applications"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-140 md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              What We Build
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Mobile Solutions
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              User-centric iOS and Android applications focused on performance
              and native feel, ensuring your brand stays connected with users
              on the go.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.mobile}
              alt="Mobile solutions"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-140 md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              What We Build
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Systems &amp; Infrastructure
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Secure backend architecture and cloud deployment. We handle the
              technical heavy lifting APIs, databases, and hosting, so your
              operations stay online 24/7.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.infrastructure}
              alt="Systems and infrastructure"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-140 md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              What We Build
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Technical Consulting
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Practical advice on tech stacks, security, and digital strategy to
              help you make informed decisions for your business.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.consulting}
              alt="Technical consulting"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <div className="py-8 sm:py-12" />
      </div>

      <ContactFooterSection />
    </main>
  );
}