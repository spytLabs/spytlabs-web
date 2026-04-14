import Link from "next/link";
import ContactFooterSection from "../components/contactFooterSection";
import Image from "next/image";

const assets = {
  heroBg: "/figma-assets/hero-bg.jpg",
  logo: "/figma-assets/logo.png",
  workflowImage: "/figma-assets/automation-team.jpg",
  automationGraphic: "/figma-assets/automations-graphic.svg",
};

function AutomationPattern() {
  return (
    <section className="px-5 sm:px-11" data-node-id="7:490">
      <div className="overflow-hidden">
        <Image
          src={assets.automationGraphic}
          alt="Graphic illustrating business process automation"
          className="mx-auto h-auto w-[80%] object-cover"
          width={1000}
          height={600}
        />
      </div>
    </section>
  );
}

export default function AutomationPage() {
  return (
    <main
      className="mt-5 mx-5 mb-10 bg-white box-border max-[1060px]:m-0"
      data-node-id="7:408"
    >
      <section className="overflow-hidden rounded-lg" data-node-id="7:409">
        <div
          className="relative flex min-h-[220px] flex-col justify-between bg-cover bg-center px-6 pb-7 pt-6 text-white sm:min-h-[372px] sm:px-12 sm:pb-11 sm:pt-7"
          style={{ backgroundImage: `url(${assets.heroBg})` }}
          data-node-id="7:410"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,26,0.18),rgba(9,6,26,0.62))]" />
          <header
            className="relative z-10 flex items-start justify-between gap-5 max-[1060px]:flex-col max-[1060px]:items-start"
            data-node-id="7:413"
          >
            <img
              src={assets.logo}
              alt="spytLabs"
              className="h-8.5 w-38.75 object-contain"
            />
            <nav
              className="flex items-center gap-7 text-[clamp(13px,1vw,20px)] font-medium max-[1060px]:flex-wrap max-[1060px]:gap-y-2 max-[1060px]:gap-x-4 [&>a]:text-white [&>a]:no-underline"
              aria-label="Primary"
            >
              <a href="#">Design</a>
              <Link href="/automation">Automation</Link>
              <a href="#">Production</a>
              <a href="#">Technology</a>
              <a
                href="#contact"
                className="rounded-full bg-[#3200eb] px-5.5 py-2"
              >
                Contact Us
              </a>
            </nav>
          </header>

          <h1
            className="relative z-10 text-[clamp(46px,6.3vw,72px)] leading-[1.06] font-semibold tracking-[-0.03em]"
            data-node-id="7:411"
          >
            Automation.
          </h1>
        </div>
      </section>

      <section className="px-5 pt-8 sm:px-11 sm:pt-11" data-node-id="7:488">
        <p className="max-w-[1280px] text-[clamp(20px,2.2vw,32px)] leading-[1.6] font-normal text-[#333339]">
          At spytLabs, we use AI to streamline processes, enhancing efficiency
          for businesses of any size. Our tailored solutions cut down manual
          tasks, freeing time for strategic growth and scalability.
        </p>
      </section>

      <section className="mt-15 pt-8 sm:pt-11 border-black border-y" >
        <AutomationPattern />
      </section>

      <section className="grid grid-cols-2 mt-15 ">
        <section className="px-5 pt-8 sm:px-11 sm:pt-11" data-node-id="7:492">
          <p className="max-w-[1280px] text-[clamp(20px,2.2vw,32px)] leading-[1.6] font-normal text-[#333339]">
            By combining practical insight with adaptable technology, we design
            systems that fit naturally into your existing workflows. This
            ensures a smooth transition with minimal disruption, while
            delivering measurable improvements in speed, accuracy, and
            decision-making across your operations.
          </p>
        </section>

        <section className="px-5 pt-8 sm:px-11 sm:pt-11" data-node-id="7:493">
          <Image
            src={assets.workflowImage}
            alt="Business workflow automation strategy meeting"
            className="object-cover"
            width={1000}
            height={600}
          />
        </section>
      </section>

      <section className="px-0 pt-8 sm:pt-11">
        <ContactFooterSection />
      </section>
    </main>
  );
}
