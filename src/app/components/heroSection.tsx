import Link from "next/link";
import NavBar from "./navBar";

export default function HeroSecion() {
  const assets = {
    heroBg: "/figma-assets/spyt-bg.png",
    heroBgVideo: "/figma-assets/spyt-web-bg-2.webm",
    logo: "/figma-assets/logo.png",
    kepri: "/figma-assets/kepri-logo-large.png",
    amazon: "/figma-assets/amazon.png",
    oracle: "/figma-assets/oracle.png",
    ebay: "/figma-assets/ebay.png",
    netflix: "/figma-assets/netflix.png",
    roiIcon: "/figma-assets/roi-icon.svg",
    aiIcon: "/figma-assets/ai-icon.svg",
  };


    return (
      <section className="relative overflow-hidden rounded-lg min-h-[85vh] flex flex-col justify-end pointer-events-auto" data-node-id="2:93">
        <video
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          poster={assets.heroBg}
        >
          <source src={assets.heroBgVideo} type="video/mp4" />
        </video>
        
        <div
          className="relative z-10 flex flex-1 flex-col justify-end pt-7 pr-12 pb-11 pl-12 text-white max-[1060px]:pt-5 max-[1060px]:pr-5.5 max-[1060px]:pb-7 max-[1060px]:pl-5.5"
          data-node-id="1:399"
        >
          <NavBar />

          <p className="m-0 text-[clamp(14px,1vw,20px)] font-medium tracking-[0] text-gray-300 select-none" data-node-id="2:46">
            BEYOND MARKETING. INTO THE FUTURE
          </p>
          <h1
            className="mt-2 mb-0 flex flex-col text-[clamp(48px,6.55vw,96px)] leading-[1.08] font-semibold tracking-[-0.015em] max-[640px]:text-[clamp(32px,12vw,62px)] select-none"
            data-node-id="2:3"
          >
            <span>We don&apos;t follow trends</span>
            <span>-we create them.</span>
          </h1>
        </div>
      </section>
    )
}