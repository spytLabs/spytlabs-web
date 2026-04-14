import Link from "next/link";

export default function HeroSecion() {
  const assets = {
    heroBg: "/figma-assets/hero-bg.jpg",
    logo: "/figma-assets/logo.png",
    google: "/figma-assets/google.png",
    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };


    return (
         <section className="overflow-hidden rounded-lg" data-node-id="2:93">
        <div
          className="flex min-h-170 flex-col justify-end bg-cover bg-center pt-7 pr-12 pb-11 pl-12 text-white max-[1060px]:min-h-140 max-[1060px]:pt-5 max-[1060px]:pr-5.5 max-[1060px]:pb-7 max-[1060px]:pl-5.5 max-[640px]:min-h-122.5"
          style={{ backgroundImage: `url(${assets.heroBg})` }}
          data-node-id="1:399"
        >
          <header
            className="mb-auto flex items-center justify-between max-[1060px]:flex-col max-[1060px]:items-start max-[1060px]:gap-4"
            data-node-id="2:92"
          >
            <img src={assets.logo} alt="spytLabs" className="h-8.5 w-38.75 object-contain" />
            <nav
              className="flex items-center gap-7 text-[clamp(15px,1.15vw,20px)] font-medium max-[1060px]:flex-wrap max-[1060px]:gap-y-3 max-[1060px]:gap-x-5 [&>a]:text-white [&>a]:no-underline"
              aria-label="Primary"
            >
              <Link href="/design">Design</Link>
              <Link href="/automation">Automation</Link>
              <a href="#">Production</a>
              <a href="#">Technology</a>
              <a href="#contact" className="rounded-full bg-[#3200eb] px-5.5 py-2">
                Contact Us
              </a>
            </nav>
          </header>

          <p className="m-0 text-[clamp(14px,1vw,20px)] font-medium tracking-[0] opacity-90" data-node-id="2:46">
            BEYOND MARKETING. INTO THE FUTURE
          </p>
          <h1
            className="mt-2 mb-0 flex flex-col text-[clamp(48px,6.55vw,96px)] leading-[1.08] font-semibold tracking-[-0.015em] max-[640px]:text-[clamp(42px,12vw,62px)]"
            data-node-id="2:3"
          >
            <span>We don&apos;t follow trends</span>
            <span>-we create them.</span>
          </h1>
        </div>
      </section>
    )
}