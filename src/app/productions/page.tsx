import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";

const assets = {
  intro1: "/figma-assets/design-hero-1.jpg",
  intro2: "/figma-assets/automation-team.jpg",
  intro3: "/figma-assets/design-img-4.jpg",
  branding: "/figma-assets/design-img-1.jpg",
  video: "/figma-assets/production.mp4",
  photo: "/figma-assets/szabo-viktor-NI_fJ15rIfI-unsplash.jpg",
  artDirection: "/figma-assets/design-img-6.jpg",
};

export default function ProductionsPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border ">
      <PageHeroSection title="Production." />

      <div className="mx-auto w-full max-w-[1410px] px-5 sm:px-11">
        <section className="py-16 text-center md:pb-16 sm:py-20 pb-8">
          <p className="mx-auto text-[clamp(13px,1vw,18px)] font-medium uppercase tracking-[0.32em] text-[#2d0da0]">
            Bringing Your Brand to Life
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(40px,5.5vw,65px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black">
            Crafting visual identities that
            <span className="block text-[#2d0da0]">demand attention.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[clamp(14px,1.45vw,28px)] leading-[1.45] font-normal text-[#45454a]">
            At spytLabs, we know that great technology needs a great story. Our
            creative production team specializes in building striking visual
            narratives that connect with your audience.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-[clamp(14px,1.35vw,24px)] leading-[1.55] font-normal text-[#45454a]">
            Whether you are launching a new product or rebranding an
            established business, we provide the creative firepower to make
            your mark in the digital space.
          </p>
        </section>



        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              Our Creative Services
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Branding &amp; Visual Identity
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Your brand is more than just a logo. We develop comprehensive
              visual identities, including color palettes, typography, and
              brand guidelines that give your business a distinct and
              professional voice in the market.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.branding}
              alt="Branding and visual identity"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              Our Creative Services
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Commercial &amp; Video Production
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
            Video is the most powerful way to communicate your value. From structured promotional commercials and integrated marketing campaigns to high-impact social media content, we produce high-quality video designed to highlight your expertise and convert viewers into clients.
            </p>
          </div>
          <div className="flex-1 overflow-hidden bg-black">
            <video
              src={assets.video}
              autoPlay
              loop
              muted
              playsInline
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              Our Creative Services
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Professional Photoshoots
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              High-end imagery sets the tone for your business. We handle
              professional photography for product catalogs, corporate team
              profiles, and lifestyle shoots to ensure your websites and social
              channels look sharp and credible.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.photo}
              alt="Professional photoshoot"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              Our Creative Services
            </p>
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Digital Art Direction
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              We ensure that every visual element, from your website UI to your
              marketing materials, tells a unified story. Our team directs the
              creative vision so your brand remains consistent across all
              platforms.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.artDirection}
              alt="Digital art direction"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>



        <div className="py-8 sm:py-12" />
      </div>

      <ContactFooterSection />
    </main>
  );
}