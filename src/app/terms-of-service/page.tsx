import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";

const assets = {
  grid1: "/figma-assets/design-img-1.jpg",
  grid2: "/figma-assets/automation-team.jpg",
  grid3: "/figma-assets/design-img-6.jpg",
  engineering: "/figma-assets/path-digital-tR0jvlsmCuQ-unsplash.jpg",
  creative: "/figma-assets/design-img-4.jpg",
  media: "/figma-assets/szabo-viktor-NI_fJ15rIfI-unsplash.jpg",
};

type ServiceItemProps = {
  title: string;
  description: string;
};

function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <div className="border-b border-black/10 pb-6">
      <h3 className="text-[clamp(24px,2.4vw,34px)] leading-[1.12] font-semibold tracking-[-0.02em] text-black">
        {title}
      </h3>
      <p className="mt-3 max-w-4xl text-[clamp(16px,1.15vw,22px)] leading-[1.85] font-normal text-[#333339]">
        {description}
      </p>
    </div>
  );
}

type TermsBlockProps = {
  number: string;
  title: string;
  content: string[];
};

function TermsBlock({ number, title, content }: TermsBlockProps) {
  return (
    <section className="border-t border-black/15 py-8 sm:py-10">
      <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
        <p className="text-[clamp(20px,1.8vw,26px)] font-medium text-[#2d0da0]">
          {number}
        </p>
        <div>
          <h3 className="text-[clamp(24px,2.6vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-black">
            {title}
          </h3>
          <div className="mt-4 space-y-4 text-[clamp(16px,1.15vw,22px)] leading-[1.8] font-normal text-[#333339]">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TermsOfServicePage() {
  const services = [
    {
      title: "Web Platforms & Applications",
      description:
        "Custom-built, responsive web solutions using modern frameworks. We prioritize speed, SEO, and a seamless experience across all devices.",
    },
    {
      title: "Mobile Solutions",
      description:
        "User-centric iOS and Android applications focused on performance and native feel, ensuring your brand stays connected with users on the go.",
    },
    {
      title: "Systems & Infrastructure",
      description:
        "Secure backend architecture and cloud deployment. We handle the technical heavy lifting APIs, databases, and hosting, so your operations stay online 24/7.",
    },
    {
      title: "Technical Consulting",
      description:
        "Practical advice on tech stacks, security, and digital strategy to help you make informed decisions for your business.",
    },
  ];

  const termsBlocks = [
    {
      number: "01",
      title: "Introduction",
      content: [
        "Welcome to spytLabs. These Terms and Conditions govern your use of our website and the services we provide. By accessing or using our website, you agree to be bound by these terms.",
        "Throughout this document, spytLabs will be referred to as the Service Provider. The terms you, your, and Client refer to the user, customer, or viewer of our website and services.",
      ],
    },
    {
      number: "02",
      title: "Services",
      content: [
        "The Service Provider specializes in automation, digitalization, and product engineering services. The specific scope, deliverables, and timelines for any project will be outlined in a separate Statement of Work or Master Service Agreement agreed upon by both parties.",
      ],
    },
    {
      number: "03",
      title: "Use of the Website",
      content: [
        "By using this website, you agree to provide accurate and current information when communicating with the Service Provider.",
        "You agree not to use the website for any unlawful purpose or in any way that interrupts, damages, or impairs the service.",
        "You agree not to attempt to gain unauthorized access to any part of the website, server, or database connected to the Service Provider.",
      ],
    },
    {
      number: "04",
      title: "Intellectual Property Rights",
      content: [
        "Unless otherwise agreed upon in a written contract, all content, original code, automation pipelines, and designs created or displayed by the Service Provider remain the exclusive intellectual property of the Service Provider.",
        "You may not reproduce, distribute, or create derivative works from our content without explicit written consent.",
      ],
    },
    {
      number: "05",
      title: "Confidentiality",
      content: [
        "The Service Provider understands that projects may involve sensitive business information. Both parties agree to keep all proprietary information, business strategies, and technical data shared during consultations or project executions strictly confidential.",
      ],
    },
    {
      number: "06",
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, the Service Provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
        "This includes damages resulting from your access to or use of, or inability to access or use, the services; any conduct or content of any third party on the services; and any bugs, glitches, or downtimes associated with third-party APIs or integrations.",
      ],
    },
    {
      number: "07",
      title: "Modifications to the Service and Prices",
      content: [
        "Prices for our services are subject to change without notice. The Service Provider reserves the right to modify or discontinue any service, or any part or content thereof, without notice at any time.",
      ],
    },
    {
      number: "08",
      title: "Governing Law",
      content: [
        "These Terms and Conditions shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.",
        "Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts located in Sri Lanka.",
      ],
    },
    {
      number: "09",
      title: "Contact Us",
      content: [
        "If you have any questions about these Terms and Conditions, please contact us.",
      ],
    },
  ];

  return (
    <main className="mt-5 mx-5 mb-10 bg-white box-border max-[1060px]:m-0">
      <PageHeroSection title="Terms of Service." />

      <div className="mx-auto w-full max-w-[1410px] px-5 sm:px-11">
        <section className="py-16 md:pb-16 pb-8 text-center sm:py-20">
          <p className="mx-auto text-[clamp(13px,1vw,18px)] font-medium uppercase tracking-[0.32em] text-[#2d0da0]">
            Turning vision into code, and code into growth.
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-[clamp(40px,5.5vw,65px)] leading-[1.05] font-semibold tracking-[-0.04em] text-black">
            Engineering for the Modern Web
            <span className="block text-[#2d0da0]">With clarity and intent.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-[clamp(14px,1.45vw,28px)] leading-[1.45] font-normal text-[#45454a]">
            At spytLabs, we build the digital foundations that allow businesses
            to scale. We specialize in clean, high-performance software
            engineering, focusing on tools that are as functional as they are
            reliable.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-[clamp(14px,1.35vw,24px)] leading-[1.55] font-normal text-[#45454a]">
            Our team bridges complex technical requirements and intuitive user
            experiences. We do not just build features; we build scalable
            systems designed to handle growth from day one.
          </p>
        </section>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-clip py-12">
          <section className="mx-auto w-[170vw] sm:w-[150vw] lg:w-[120vw]">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              <div className="col-start-1 overflow-hidden">
                <img
                  src={assets.grid1}
                  alt="Technology showcase 1"
                  className="h-55 w-full object-cover sm:h-70 lg:h-125"
                />
              </div>

              <div className="col-start-2 overflow-hidden">
                <img
                  src={assets.grid2}
                  alt="Technology showcase 2"
                  className="h-55 w-full object-cover sm:h-70 lg:h-125"
                />
              </div>

              <div className="col-start-3 overflow-hidden">
                <img
                  src={assets.grid3}
                  alt="Technology showcase 3"
                  className="h-55 w-full object-cover sm:h-70 lg:h-125"
                />
              </div>
            </div>
          </section>
        </div>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Web Platforms &amp; Applications
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Custom-built, responsive web solutions using modern frameworks.
              We prioritize speed, SEO, and a seamless experience across all
              devices.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.engineering}
              alt="Web platforms and applications"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row-reverse md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              Creative Production
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              At spytLabs, we know that great technology needs a great story.
              Our creative production team builds striking visual narratives
              that connect with your audience and give your business a distinct
              and professional voice.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.creative}
              alt="Creative production"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 py-12 md:min-h-[560px] md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center space-y-4">
            <h3 className="text-[clamp(32px,4vw,56px)] leading-[1.15] font-semibold tracking-[-0.02em] text-black">
              The spytLabs Approach to Media
            </h3>
            <p className="text-[clamp(16px,1.2vw,24px)] leading-[1.9] font-normal text-[#333339]">
              Strategic storytelling, cohesive design, and startup agility
              guide every shoot and every asset. We deliver high-impact,
              professional-grade production without the bloated timelines of
              traditional agencies.
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.media}
              alt="Media and art direction"
              className="h-80 w-full object-cover md:h-140"
            />
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mb-8 max-w-4xl">
            <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
              Terms and Conditions
            </p>
            <h3 className="mt-4 text-[clamp(34px,4.5vw,60px)] leading-[1.08] font-semibold tracking-[-0.03em] text-black">
              Last Updated: April 28, 2026
            </h3>
          </div>

          <div className="border-b border-black/15">
            {termsBlocks.map((block) => (
              <TermsBlock
                key={block.number}
                number={block.number}
                title={block.title}
                content={block.content}
              />
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="grid gap-8 rounded-lg bg-[#f7f6ff] px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
                What We Build
              </p>
              <div className="mt-5 space-y-5">
                {services.map((service) => (
                  <ServiceItem key={service.title} {...service} />
                ))}
              </div>
            </div>

            <div className="space-y-6 md:pl-6">
              <p className="text-[clamp(14px,1vw,18px)] font-medium uppercase tracking-[0.28em] text-[#2d0da0]">
                Our Creative Services
              </p>
              <div className="space-y-5">
                <ServiceItem
                  title="Branding & Visual Identity"
                  description="We develop comprehensive visual identities, including color palettes, typography, and brand guidelines that give your business a distinct and professional voice in the market."
                />
                <ServiceItem
                  title="Commercial & Video Production"
                  description="From structured promotional commercials to authentic founder pitches, we produce high-quality video content designed to convert viewers into clients."
                />
                <ServiceItem
                  title="Professional Photoshoots"
                  description="We handle product catalogs, corporate team profiles, and lifestyle shoots to ensure your websites and social channels look sharp and credible."
                />
                <ServiceItem
                  title="Digital Art Direction"
                  description="We direct the creative vision so every visual element, from your website UI to your marketing materials, tells a unified story across all platforms."
                />
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 sm:py-12" />
      </div>

      <ContactFooterSection />
    </main>
  );
}