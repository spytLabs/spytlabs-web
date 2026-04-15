"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HoverScrollText from "./HoverScrollText";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "Blog", href: "/blog" },
    { name: "Design", href: "/design" },
    { name: "Automation", href: "/automation" },
    { name: "Production", href: "#" },
    { name: "Technology", href: "#" },
  ];

  return (
    <header
      className="mb-auto flex w-full items-center justify-between"
      data-node-id="2:92"
    >
      <Link href="/" className="relative z-50">
        <img src={assets.logo} alt="spytLabs" className="h-8.5 w-38.75 object-contain select-none" draggable={false} />
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
        <a href="#contact" className="rounded-full bg-[#3200eb] px-5.5 py-2 transition-transform hover:scale-105">
          <HoverScrollText>Contact Us</HoverScrollText>
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[1061px]:hidden cursor-pointer pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
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
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-4xl font-semibold tracking-tight text-white">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transform transition-all duration-700 hover:text-[#3200eb] ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? index * 100 + 150 : 0}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className={`mt-8 transform rounded-full bg-[#3200eb] px-10 py-3 text-2xl transition-all duration-700 hover:scale-105 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${isOpen ? navLinks.length * 100 + 150 : 0}ms` }}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
