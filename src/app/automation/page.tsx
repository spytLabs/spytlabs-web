import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";
import Image from "next/image";

const assets = {
  automationGraphic: "/figma-assets/automations-graphic.svg",
  workflowImage: "/figma-assets/automation-team.jpg",
};

function AutomationPattern() {
  return (
    <section className="px-5 sm:px-11" data-node-id="7:490">
      <div className="overflow-hidden ">
        <Image
          src={assets.automationGraphic}
          alt="Graphic illustrating business process automation"
          className="mx-auto my-auto h-auto w-full md:w-[70%] object-cover"
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
      <PageHeroSection title="Automation." />

      <section className="px-5 pt-8 sm:px-11 sm:pt-11" data-node-id="7:488">
        <p className="max-w-[1280px] text-[clamp(20px,2.2vw,32px)] leading-[1.6] font-normal text-[#333339]">
          At spytLabs, we use AI to streamline processes, enhancing efficiency
          for businesses of any size. Our tailored solutions cut down manual
          tasks, freeing time for strategic growth and scalability.
        </p>
      </section>

      <section className="mt-15  border-black border-y">
        <AutomationPattern />
      </section>

      <section className="grid md:grid-cols-2 grid-cols-1 mt-8 md:mt-15 ">
        <section className="px-5 pt-8 sm:px-11 sm:pt-11" data-node-id="7:492">
          <section className=" mb-9  md:hidden block" data-node-id="7:493">
            <Image
              src={assets.workflowImage}
              alt="Business workflow automation strategy meeting"
              className="object-cover"
              width={1000}
              height={600}
            />
          </section>
          <p className="max-w-[1280px] text-[clamp(20px,2.2vw,32px)] leading-[1.6] font-normal text-[#333339]">
            By combining practical insight with adaptable technology, we design
            systems that fit naturally into your existing workflows. This
            ensures a smooth transition with minimal disruption, while
            delivering measurable improvements in speed, accuracy, and
            decision-making across your operations.
          </p>
        </section>

        <section
          className="px-5 pt-8 sm:px-11 sm:pt-11 hidden md:block"
          data-node-id="7:493"
        >
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
