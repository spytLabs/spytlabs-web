import type { Metadata } from "next";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";

const assets = {
  automationImg1: "/figma-assets/blake-wisz-q3o_8MteFM0-unsplash.jpg",
  automationImgSvg: "/figma-assets/automations-graphic.svg",
  automationImg2: "/figma-assets/geralt-woman-10234079_1920.jpg",
  automationImg3: "/figma-assets/path-digital-tR0jvlsmCuQ-unsplash.jpg",
  automationImg4: "/figma-assets/automation-team.jpg",
};

export default function AutomationPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border ">
      {/* Hero Section */}
      <PageHeroSection title="Automation." />

      {/* Main Content Container */}
      <div className="mx-auto w-full max-w-[1410px] px-5 sm:px-11">
        {/* Headline Section */}
        <section className="py-16 md:pb-16 pb-8 text-center sm:py-20">
          <h2 className="mx-auto max-w-3xl text-[clamp(40px,5.5vw,65px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black">
            AI-Powered Workflows
            <span className="block text-[#2d0da0]">That Actually Work</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[clamp(14px,1.5vw,30px)] leading-[1.3] font-normal text-[#45454a]">
            We build intelligent automation systems that handle the work your
            team doesn&apos;t want to do.
            <br />
            From order to customer service, streamline what matters.
          </p>
        </section>

            <section className="flex-1 overflow-hidden">
            <img
              src={assets.automationImgSvg}
              alt="Customer service automation"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </section>
       
        {/* Feature Section 1: Order Management */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Order Management & Fulfillment
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Automate the entire order lifecycle from capture to delivery. Our
              AI-powered systems integrate with e-commerce platforms, payment
              processors, and inventory systems to process orders without manual
              intervention. Real-time routing, fraud detection, and
              multi-channel synchronization keep everything running smoothly.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.automationImg1}
              alt="Order management automation"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Feature Section 2: Customer Service */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Customer Service & Support
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Deploy intelligent AI agents that handle support tickets, answer
              FAQs, and escalate complex issues to humans. Our systems operate
              24/7, categorize requests smartly, and provide context-aware
              resolution suggestions. Reduce response times while maintaining
              quality and customer satisfaction across all channels.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.automationImg2}
              alt="Customer service automation"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Feature Section 3: Workflow Integration */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Connected Workflows & Integration
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Connect your entire business stack—CRM, ERP, HR systems,
              communication tools—into seamless automated workflows. Built with
              n8n, Make, and custom APIs for maximum flexibility. Pair AI with
              workflow automation to orchestrate complex business processes
              across thousands of integrations with monitoring and compliance
              built in.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.automationImg3}
              alt="Workflow integration"
              className="h-[320px] w-full object-cover md:h-[560px]"
            />
          </div>
        </section>

        {/* Feature Section 4: Beyond Basics */}
        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Beyond the Basics
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Inventory management with predictive algorithms. Lead generation
              and CRM automation with intelligent scoring. Invoice and document
              processing with OCR and data extraction. We&apos;ve built automation
              systems across every department—finance, sales, support, and
              operations. Whatever your workflow, we can automate it.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.automationImg4}
              alt="Advanced automation systems"
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

export const metadata: Metadata = {
  title: "Automation | spytLabs",
  description:
    "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
  alternates: { canonical: "/automation" },
  openGraph: {
    title: "Automation | spytLabs",
    description:
      "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
    url: "/automation",
    images: [
      {
        url: "/figma-assets/automation-team.jpg",
        width: 1200,
        height: 630,
        alt: "spytLabs automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation | spytLabs",
    description:
      "AI-powered automation and workflows from spytLabs: order management, customer service, and integration.",
    images: ["/figma-assets/automation-team.jpg"],
  },
};
