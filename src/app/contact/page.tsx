import type { Metadata } from "next";
import ContactFooterSection from "../components/contactFooterSection";
import PageHeroSection from "../components/pageHeroSection";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "Contact | spytLabs",
  description: "Reach out to the spytLabs team.",
};

export default function ContactPage() {
  return (
    <main className="mt-5 mx-5 mb-10 box-border bg-white max-[1060px]:m-0">
      <PageHeroSection title="Contact." />

      <section className="mx-auto w-full max-w-352.5 px-5 py-10 sm:px-11 sm:py-14">
        <ContactForm />
      </section>

      <ContactFooterSection showIntroSection={false} />
    </main>
  );
}
