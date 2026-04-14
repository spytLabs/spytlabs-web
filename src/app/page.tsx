import HeroSecion from "./components/heroSection";
import MetricsSection from "./components/metricsSection";
import FutureSection from "./components/futureSection";
import InnovationSection from "./components/innovationSection";
import PartnerSection from "./components/partnerSection";
import TestimonialsSection from "./components/testimonialsSection";
import ContactFooterSection from "./components/contactFooterSection";
export default function Home() {
  return (
    <main
      className="mt-2 mx-2 mb-10 bg-white box-border max-[1060px]:m-0"
      data-node-id="7:402"
    >
      <HeroSecion />
      <PartnerSection />
      <MetricsSection />
      <FutureSection />
      <InnovationSection />
      <TestimonialsSection />
      <ContactFooterSection />
    </main>
  );
}
