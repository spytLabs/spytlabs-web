import Link from "next/link";
import HoverScrollText from "./HoverScrollText";

export default function NavBar() {
  const assets = {
    logo: "/figma-assets/logo.png",
  };

  return (
    <header
      className="mb-auto flex w-full items-center justify-between max-[1060px]:flex-col max-[1060px]:items-start max-[1060px]:gap-4"
      data-node-id="2:92"
    >
      <Link href="/">
        <img src={assets.logo} alt="spytLabs" className="h-8.5 w-38.75 object-contain select-none" draggable={false} />
      </Link>
      <nav
        className="flex items-center gap-7 text-[clamp(15px,1.15vw,20px)] font-medium max-[1060px]:flex-wrap max-[1060px]:gap-y-3 max-[1060px]:gap-x-5 [&>a]:text-white [&>a]:no-underline"
        aria-label="Primary"
      >
        <Link href="/design"><HoverScrollText>Design</HoverScrollText></Link>
        <Link href="/automation"><HoverScrollText>Automation</HoverScrollText></Link>
        <a href="#"><HoverScrollText>Production</HoverScrollText></a>
        <a href="#"><HoverScrollText>Technology</HoverScrollText></a>
        <a href="#contact" className="rounded-full bg-[#3200eb] px-5.5 py-2">
          <HoverScrollText>Contact Us</HoverScrollText>
        </a>
      </nav>
    </header>
  );
}
