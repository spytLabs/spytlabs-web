"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HoverScrollText from "./HoverScrollText";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  // Floating island nav appears once the first screen has been scrolled past
  const [showIsland, setShowIsland] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowIsland(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const assets = {
    logo: "/figma-assets/logo.png",
  };

  const navLinks = [
    { name: "Design", href: "/design" },
    { name: "Automation", href: "/automation" },
    { name: "Production", href: "/productions" },
    { name: "Technology", href: "/technology" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className="mb-auto flex w-full items-center justify-between"
      data-node-id="2:92"
    >
      <Link href="/" className="relative z-50">
        <img
          src={assets.logo}
          alt="spytLabs"
          className="h-8.5 w-38.75 object-contain select-none"
          draggable={false}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden items-center gap-7 text-[clamp(15px,1.15vw,20px)] font-medium min-[1061px]:flex [&>a]:text-white [&>a]:no-underline"
        aria-label="Primary"
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <HoverScrollText>{link.name}</HoverScrollText>
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-full bg-[#3200eb] px-5.5 py-2 transition-transform hover:scale-105"
        >
          <HoverScrollText>Contact Us</HoverScrollText>
        </Link>
      </nav>

      {/* Floating island nav, fixed to the top after the first 100vh */}
      <div
        inert={!showIsland}
        className={`fixed top-3 left-1/2 z-50 w-max max-w-[calc(100vw-24px)] -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showIsland ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-[140%] scale-90 opacity-0"
        }`}
      >
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#111114]/85 p-1.5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <Link href="/" className="flex shrink-0 items-center px-3" aria-label="spytLabs home">
            <img src={assets.logo} alt="spytLabs" className="h-5 w-auto select-none" draggable={false} />
          </Link>
          <nav aria-label="Primary" className="flex items-center max-[1060px]:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="ml-1 flex min-h-11 shrink-0 items-center rounded-full bg-[#3200eb] px-4.5 text-[14px] font-medium whitespace-nowrap transition-colors hover:bg-[#2900c4]"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="flex size-11 flex-col items-center justify-center gap-1 rounded-full transition-colors hover:bg-white/10 min-[1061px]:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={`h-0.5 w-4.5 bg-white transition-all duration-300 ${isOpen ? "translate-y-0.75 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4.5 bg-white transition-all duration-300 ${isOpen ? "-translate-y-0.75 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="group relative z-50 flex size-11 flex-col items-center justify-center gap-1.5 min-[1061px]:hidden cursor-pointer pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "w-0 opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Fullscreen Animated Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] min-[1061px]:hidden ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-4xl font-semibold tracking-tight text-white">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transform transition-all duration-700 hover:text-[#3200eb] ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? index * 100 + 150 : 0}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mt-8 transform rounded-full bg-[#3200eb] px-10 py-3 text-2xl transition-all duration-700 hover:scale-105 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{
              transitionDelay: `${isOpen ? navLinks.length * 100 + 150 : 0}ms`,
            }}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
