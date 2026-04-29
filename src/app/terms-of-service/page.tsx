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
    <main className="mt-2 mx-2 mb-10 bg-white box-border ">
      <PageHeroSection title="Terms of Service." />

      <div className="mx-auto w-full max-w-[1410px] px-5 sm:px-11">








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

      

        <div className="py-8 sm:py-12" />
      </div>

      <ContactFooterSection />
    </main>
  );
}