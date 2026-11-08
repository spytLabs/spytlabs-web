import type { Metadata } from "next";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How spytLabs (PVT) LTD in Colombo, Sri Lanka collects, uses and protects the personal details you send us through our website contact form.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Who we are",
    content: [
      `This website is operated by ${company.legalName}, based in ${company.location}. In this policy, "we", "us" and "our" refer to ${company.legalName}. We are responsible for the personal data described here.`,
    ],
  },
  {
    title: "What we collect",
    content: [
      "When you submit the contact form, we collect your first and last name, email address, contact number, the details of your enquiry, and your company website if you choose to give it.",
      "If you email, call or message us directly, we receive whatever you send us and your contact details.",
      "When you visit the site, our hosting provider automatically processes technical data such as your IP address and browser type in order to deliver pages and keep the site secure.",
    ],
  },
  {
    title: "How we use it",
    content: [
      "We use your details to respond to your enquiry, prepare quotations, and communicate with you about a project you've asked us about. We do not sell your personal data, and we do not add you to marketing lists from the contact form.",
    ],
  },
  {
    title: "Who we share it with",
    content: [
      "Contact form submissions are delivered to us through a Google Apps Script service, so they are processed on Google's systems. The website is hosted on Vercel, and some videos are delivered through Cloudinary. These providers process data on our behalf or to deliver the site, and may do so outside Sri Lanka.",
      "We may also disclose information where the law requires it.",
    ],
  },
  {
    title: "Cookies and analytics",
    content: [
      "This website does not use advertising cookies or third-party analytics. If that changes, we will update this policy.",
    ],
  },
  {
    title: "How long we keep it",
    content: [
      "We keep enquiry details for as long as we need them to respond to you and manage any resulting work, and for any longer period required by law. You can ask us to delete them sooner.",
    ],
  },
  {
    title: "Your rights",
    content: [
      `Subject to applicable law, including Sri Lanka's Personal Data Protection Act, No. 9 of 2022, you can ask to access your personal data, correct it, have it deleted, or object to how we use it. To make a request, email ${company.email}.`,
    ],
  },
  {
    title: "Security",
    content: [
      "The site is served over HTTPS and access to enquiries is limited to people who need it. No method of transmission or storage is completely secure, but we take reasonable steps to protect your data.",
    ],
  },
  {
    title: "Changes to this policy",
    content: ["We may update this policy from time to time. The date at the top of this page shows when it last changed."],
  },
  {
    title: "Contact us",
    content: [`For any question about this policy or your data, email ${company.email} or call ${company.phoneDisplay}.`],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mt-2 mx-2 mb-10 bg-white box-border">
      <PageHeroSection title="Privacy Policy." compact />

      <div className="mx-auto w-full max-w-[1410px] px-5 py-12 sm:px-11 md:py-16">
        <p className="m-0 text-[clamp(14px,1vw,18px)] font-medium tracking-wide text-[#2d0da0] uppercase">Last updated: November 8, 2026</p>

        <div className="mt-8 border-b border-black/15">
          {sections.map((section, index) => (
            <section key={section.title} className="border-t border-black/15 py-8 sm:py-10">
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                <p className="m-0 text-[clamp(20px,1.8vw,26px)] font-medium text-[#2d0da0]">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2 className="m-0 text-[clamp(24px,2.6vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-black">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-[clamp(16px,1.15vw,22px)] leading-[1.8] text-[#333339]">
                    {section.content.map((paragraph) => (
                      <p key={paragraph} className="m-0">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      <ContactFooterSection showIntroSection={false} />
    </main>
  );
}
