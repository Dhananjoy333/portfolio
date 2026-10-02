"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  name?: string;
}

export default function Navbar({ name = "Brahma." }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonial", href: "#testimonial" },
  ];

  return (
    <header className="w-full relative z-30 pt-6 sm:pt-8 md:pt-9 px-6 sm:px-10 md:px-12 lg:px-16">
      <nav
        aria-label="Main Navigation"
        className="flex items-center justify-between w-full"
      >
        {/* Left: Portfolio name/logo */}
        <Link
          href="/"
          className="font-editorial italic text-2xl sm:text-3xl md:text-[34px] font-normal tracking-tight text-neutral-900 select-none hover:opacity-80 transition-opacity"
        >
          {name}
        </Link>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-10 xl:gap-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs sm:text-[13px] lg:text-sm font-medium font-sans text-neutral-800 hover:text-black transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Contact Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-2 sm:py-2.5 bg-black text-white text-xs sm:text-[13px] font-medium font-sans rounded-full hover:bg-neutral-800 active:scale-95 transition-all duration-150 tracking-wide select-none shadow-sm"
          >
            Contact
          </Link>

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
        <div className="md:hidden mt-4 py-4 px-6 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200/80 shadow-lg flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-neutral-800 hover:text-black py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
