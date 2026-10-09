"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface NavbarProps {
  name?: string;
}

export default function Navbar({ name = "Brahma." }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks = [
    { label: "Home", href: "#", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Education", href: "#education", id: "education" },
  ];

  // Helper to accurately detect the current section in view
  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Detect scrolled state for sticky frosted backdrop
    setScrolled(scrollY > 20);

    // 1. If at bottom of page, highlight Contact
    if (windowHeight + scrollY >= documentHeight - 70) {
      setActiveSection("contact");
      return;
    }

    const contactEl = document.getElementById("contact");
    const educationEl = document.getElementById("education");
    const aboutEl = document.getElementById("about");
    const st = ScrollTrigger.getById("projects-trigger");

    // Viewport threshold line (about 38% down the screen)
    const threshold = windowHeight * 0.38;

    if (contactEl && contactEl.getBoundingClientRect().top <= threshold) {
      setActiveSection("contact");
      return;
    }

    if (educationEl && educationEl.getBoundingClientRect().top <= threshold) {
      setActiveSection("education");
      return;
    }

    if (aboutEl && aboutEl.getBoundingClientRect().top <= threshold) {
      setActiveSection("about");
      return;
    }

    // Projects section check:
    // If the pinned projects trigger is past the hero recede beat (progress >= 0.22)
    if (st) {
      if (st.progress >= 0.22) {
        setActiveSection("projects");
        return;
      }
    } else {
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        const top = projectsEl.getBoundingClientRect().top;
        if (top <= -windowHeight * 0.25) {
          setActiveSection("projects");
          return;
        }
      }
    }

    // Default: Hero / Home
    setActiveSection("home");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    ScrollTrigger.addEventListener("refresh", updateActiveSection);

    const rafId = requestAnimationFrame(updateActiveSection);

    // Check after fonts and GSAP triggers initialize
    const timer = setTimeout(updateActiveSection, 350);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      ScrollTrigger.removeEventListener("refresh", updateActiveSection);
      clearTimeout(timer);
    };
  }, [updateActiveSection]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);

    if (href === "#" || href === "#home" || sectionId === "home") {
      window.history.pushState(null, "", window.location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#projects" || sectionId === "projects") {
      window.history.pushState(null, "", "#projects");
      const st = ScrollTrigger.getById("projects-trigger");
      if (st) {
        // st.end is where the projects trigger reaches completion and all cards are stacked
        // Targeting (st.end - 5) ensures the viewport is cleanly pinned showing the full stack.
        const targetScroll = Math.max(0, Math.round(st.end) - 5);
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      } else {
        const el = document.getElementById("projects");
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const isMobile = window.innerWidth < 768;
          const pinDistance = window.innerHeight * (isMobile ? 1.9 : 2.6);
          window.scrollTo({
            top: Math.max(0, top + pinDistance - 5),
            behavior: "smooth",
          });
        }
      }
      return;
    }

    // Other sections (About, Education, Contact)
    const targetId = href.replace("#", "");
    window.history.pushState(null, "", `#${targetId}`);
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 76; // Sticky navbar height clearance
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 select-none">
      {/* GPU-composited backdrop layer: pre-mounted, zero reflow, zero black border flash */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 pointer-events-none bg-white/85 backdrop-blur-md border-b border-neutral-200/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)] transition-opacity duration-300 will-change-[opacity] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 transition-[padding] duration-300 ${
          scrolled ? "py-2.5 sm:py-3 md:py-3.5" : "py-4 sm:py-5 md:max-lg:py-6 lg:py-4 xl:py-4 2xl:py-6"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between w-full"
        >
          {/* Left: Portfolio name/logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#", "home")}
            className="font-editorial italic text-xl sm:text-2xl md:max-lg:text-3xl lg:text-2xl xl:text-[28px] 2xl:text-[34px] font-normal tracking-tight text-neutral-900 select-none hover:opacity-80 transition-opacity"
          >
            {name}
          </Link>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9 2xl:gap-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`group relative text-xs lg:text-[13px] 2xl:text-sm font-sans tracking-wide transition-colors py-1 block ${
                      isActive
                        ? "text-neutral-950 font-semibold"
                        : "text-neutral-600 hover:text-neutral-950 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Small underline indicator on the active section */}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-950 rounded-full transition-all duration-300 ease-out origin-left ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-40"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: Contact Button & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact", "contact")}
              className={`inline-flex items-center justify-center px-4.5 py-1.5 sm:px-6 sm:py-2 2xl:px-7 2xl:py-2.5 text-xs 2xl:text-[13px] font-medium font-sans rounded-full active:scale-95 transition-all duration-200 tracking-wide select-none shadow-sm ${
                activeSection === "contact"
                  ? "bg-neutral-950 text-white ring-2 ring-neutral-900 ring-offset-2 ring-offset-white shadow-md"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Contact
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center p-2 text-neutral-900 hover:text-black rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-4 px-6 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/80 shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href, link.id);
                  }}
                  className={`text-sm py-2 flex items-center justify-between border-b border-neutral-100 last:border-0 transition-colors ${
                    isActive
                      ? "text-neutral-950 font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 font-medium"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neutral-950 rounded-full" />
                    )}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, "#contact", "contact");
              }}
              className={`mt-2 text-center py-2.5 text-xs font-medium font-sans rounded-full transition-all ${
                activeSection === "contact"
                  ? "bg-neutral-950 text-white ring-2 ring-neutral-900 ring-offset-2"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
