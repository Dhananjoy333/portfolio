"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

interface SocialCard {
  title: string;
  subtitle: string;
  href: string;
  icon: "email" | "github" | "linkedin" | "twitter";
}

const SOCIAL_CARDS: SocialCard[] = [
  {
    title: "Email",
    subtitle: "dhananjoybrahma333@gmail.com",
    href: "mailto:dhananjoybrahma333@gmail.com",
    icon: "email",
  },
  {
    title: "GitHub",
    subtitle: "github.com/Dhananjoy333",
    href: "https://github.com/Dhananjoy333",
    icon: "github",
  },
  {
    title: "LinkedIn",
    subtitle: "dhananjoy-brahma-823268227",
    href: "https://linkedin.com/in/dhananjoy-brahma-823268227",
    icon: "linkedin",
  },
];

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);
      setFormState({ firstName: "", lastName: "", email: "", message: "" });
      alert("Message sent successfully 🚀");
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(
        ".contact-annotation-left",
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".contact-headline",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".contact-cat",
          { opacity: 0, scale: 0.95 },
          { opacity: 0.28, scale: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".contact-intro",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".contact-card",
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".contact-quote-wrap",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".contact-form-layer",
          { opacity: 0, scale: 0.96, rotate: 0 },
          { opacity: 1, scale: 1, stagger: 0.08, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          ".contact-form-main",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".contact-annotation-right",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          ".contact-path-svg",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="contact"
      ref={containerRef}
      className="w-full bg-[#FAF8F5] relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-32 text-neutral-900 select-none"
      aria-label="Contact Section"
    >
      {/* Warm Ambient Radial Blurs - consistent with Education & Hero */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-105 h-105 rounded-full bg-amber-200/40 blur-3xl pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none z-0"
      />

      {/* Organic Curved / Dashed Background Path spanning across the section */}
      <svg
        className="contact-path-svg absolute inset-0 w-full h-full pointer-events-none z-0"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <path
          d="M -40 380 C 60 260, 180 340, 195 440 C 215 540, 140 600, 220 630 C 320 660, 480 610, 680 520 C 820 450, 940 370, 1140 430 C 1280 470, 1370 560, 1480 580"
          stroke="#27272A"
          strokeWidth="1.8"
          strokeDasharray="6 6"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 md:px-10 lg:px-14 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-12 xl:gap-16 items-start">
          {/* =========================================================================
              LEFT COLUMN: Editorial Headline, Intro, Social Cards, Timeline Quote
             ========================================================================= */}
          <div className="w-full lg:col-span-6 xl:col-span-6 flex flex-col justify-start relative">
            {/* Top annotation: "Have an idea?" + curved arrow */}
            <div
              aria-hidden="true"
              className="contact-annotation-left relative mb-2 sm:mb-3 self-start pl-2 select-none pointer-events-none"
            >
              <p className="font-editorial italic text-base sm:text-lg lg:text-xl text-neutral-500 leading-tight">
                Have
                <br />
                an idea?
              </p>
              <svg
                viewBox="0 0 60 50"
                fill="none"
                className="w-12 h-10 text-neutral-400 mt-0.5 ml-2"
              >
                <path
                  d="M 12 6 C 18 28, 28 36, 42 40"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 33 41 L 42 40 L 40 31"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Headline Block: "LET'S CONNECT"*/}
            <div className="contact-headline relative select-none">       
              {/* "LET'S" in elegant italic serif */}
              <span className="block font-editorial italic text-neutral-900 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[132px] leading-[0.88] tracking-tight relative z-10">
                Let&apos;s
              </span>

              {/* "CONNECT" in huge bold condensed display font */}
              <h2 className="font-display font-black uppercase text-neutral-900 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[142px] leading-[0.82] tracking-tight relative z-10 mt-1 sm:mt-2">
                CONNECT
              </h2>
            </div>

            {/* Short personal introduction */}
            <p className="contact-intro font-sans text-neutral-600 text-xs sm:text-[14px] md:text-base leading-relaxed max-w-md sm:max-w-lg mt-4 sm:mt-6 mb-6 sm:mb-8 select-text">
              I&apos;m always open to discussing new opportunities, exciting
              projects, or just having a chat about tech, games, or ideas.
            </p>

            {/* Four Contact / Social Cards: 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-xl mb-10 sm:mb-12">
              {SOCIAL_CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.icon === "email" ? undefined : "_blank"}
                  rel={
                    card.icon === "email" ? undefined : "noopener noreferrer"
                  }
                  className="contact-card group relative bg-white rounded-2xl p-3.5 sm:p-4 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-3 select-none"
                  aria-label={`${card.title}: ${card.subtitle}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Small circular yellow icon badge */}
                    <div className="w-10 h-10 rounded-full bg-[#FEF3C7] border border-amber-300/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#FDE68A] transition-all duration-300">
                      {card.icon === "email" && (
                        <svg
                          className="w-4.5 h-4.5 text-neutral-900"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      )}
                      {card.icon === "github" && (
                        <svg
                          className="w-4.5 h-4.5 text-neutral-900 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .5Z" />
                        </svg>
                      )}
                      {card.icon === "linkedin" && (
                        <svg
                          className="w-4 h-4 text-neutral-900 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      {card.icon === "twitter" && (
                        <svg
                          className="w-3.5 h-3.5 text-neutral-900 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col min-w-0">
                      <span className="font-sans font-bold text-neutral-900 text-sm tracking-tight leading-tight">
                        {card.title}
                      </span>
                      <span className="font-sans text-xs text-neutral-500 truncate max-w-32.5 sm:max-w-38.75 tracking-tight mt-0.5">
                        {card.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Corner Arrow */}
                  <span className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M8 7h9v9"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </div>

            {/* Editorial Quote with Timeline Marker & Horizontal Divider */}
            <div className="contact-quote-wrap flex items-center gap-4 sm:gap-6 pt-2">
              {/* Timeline marker with small vertical line and circular yellow node */}
              <div className="relative flex items-center justify-center shrink-0">
                <div className="w-px h-16 sm:h-20 bg-neutral-300" />
                <div className="absolute w-4.5 h-4.5 rounded-full bg-amber-400 border-2 border-neutral-900 shadow-xs flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-800" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="font-editorial italic text-xl sm:text-2xl text-neutral-800 font-normal leading-snug">
                &ldquo;Good projects start
                <br />
                with a conversation.&rdquo;
              </blockquote>

              {/* Thin extending divider line to the right */}
              <div className="hidden sm:block flex-1 max-w-xs h-px bg-neutral-300 ml-2" />
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Layered Contact Form Card (Pale Green, Pink, Blue, Yellow)
             ========================================================================= */}
          <div className="w-full lg:col-span-6 xl:col-span-6 relative flex flex-col items-center lg:items-end justify-center pt-4 lg:pt-8">
            {/* Top Right Annotation: "Build something great?" */}
            <div
              aria-hidden="true"
              className="contact-annotation-right hidden sm:block absolute -top-8 2xl:-top-20 right-2 sm:right-6 lg:-right-4 select-none pointer-events-none z-20 text-right"
            >
              <p className="font-editorial italic text-base sm:text-lg text-neutral-500 leading-tight">
                Build
                <br />
                something
                <br />
                great?
              </p>
              <svg
                viewBox="0 0 50 60"
                fill="none"
                className="w-10 h-12 text-neutral-400 ml-auto mt-1 mr-2"
              >
                <path
                  d="M 38 6 C 36 28, 24 38, 10 46"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 12 36 L 10 46 L 20 48"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Layered Card Container */}
            <div className="relative w-full max-w-135 xl:max-w-142.5">
              {/* Back Layer 3: Pale Green (matching Go Cart project theme) */}
              <div
                aria-hidden="true"
                className="contact-form-layer absolute inset-0 rounded-3xl sm:rounded-[36px] bg-[#E5F8E3] border border-emerald-200/70 translate-x-2 sm:translate-x-6 translate-y-2 sm:translate-y-5 rotate-2 sm:rotate-[4.2deg] shadow-sm pointer-events-none z-0"
              />

              {/* Back Layer 2: Pale Pink (matching World Quiz project theme) */}
              <div
                aria-hidden="true"
                className="contact-form-layer absolute inset-0 rounded-3xl sm:rounded-[36px] bg-[#FFE2E5] border border-rose-200/70 translate-x-1 sm:translate-x-4 translate-y-1 sm:translate-y-3.5 rotate-[1.2deg] sm:rotate-[2.8deg] shadow-sm pointer-events-none z-1"
              />

              {/* Back Layer 1: Pale Blue (matching Code Box project theme) */}
              <div
                aria-hidden="true"
                className="contact-form-layer absolute inset-0 rounded-3xl sm:rounded-[36px] bg-[#E3EFFF] border border-sky-200/70 translate-x-0.5 sm:translate-x-2 translate-y-0.5 sm:translate-y-2 rotate-[0.6deg] sm:rotate-[1.6deg] shadow-sm pointer-events-none z-2"
              />

              {/* Front Main Card: Soft Pale Yellow / Warm Cream */}
              <div
                ref={formCardRef}
                className="contact-form-main relative z-10 w-full rounded-3xl sm:rounded-[34px] bg-[#FEF3C7] border border-amber-200/90 p-4 sm:p-7 lg:p-8 xl:p-9 2xl:p-10 shadow-[0_20px_50px_rgba(245,158,11,0.08)] rotate-1 transition-transform duration-500 hover:rotate-0"
              >
                {/* Decorative warm radial glow in the bottom-right corner of card */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 w-44 h-44 rounded-full bg-amber-300/25 blur-2xl pointer-events-none z-0"
                />

                <div className="relative z-10">

                  {/* Heading: SEND A MESSAGE */}
                  <h3 className="font-display font-black uppercase text-neutral-950 text-2xl sm:text-4xl lg:text-[40px] 2xl:text-[52px] leading-[0.88] tracking-tight mb-2">
                    SEND A MESSAGE
                  </h3>

                  <p className="font-sans text-neutral-700 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-7">
                    Fill out the form below and I&apos;ll get back to you as soon
                    as possible.
                  </p>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
                    {/* First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      {/* First Name */}
                      <div className="relative">
                        <label
                          htmlFor="firstName"
                          className="sr-only"
                        >
                          First Name
                        </label>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                            />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="firstName"
                          name="first_name"
                          required
                          value={formState.firstName}
                          onChange={(e) =>
                            setFormState({ ...formState, firstName: e.target.value })
                          }
                          placeholder="First Name"
                          className="w-full bg-white/85 hover:bg-white focus:bg-white text-neutral-900 placeholder:text-neutral-500/80 border border-amber-200/90 focus:border-neutral-900 focus:ring-2 focus:ring-amber-400/40 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-sans transition-all outline-none shadow-2xs"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="relative">
                        <label
                          htmlFor="lastName"
                          className="sr-only"
                        >
                          Last Name
                        </label>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                            />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          id="lastName"
                          name="last_name"
                          required
                          value={formState.lastName}
                          onChange={(e) =>
                            setFormState({ ...formState, lastName: e.target.value })
                          }
                          placeholder="Last Name"
                          className="w-full bg-white/85 hover:bg-white focus:bg-white text-neutral-900 placeholder:text-neutral-500/80 border border-amber-200/90 focus:border-neutral-900 focus:ring-2 focus:ring-amber-400/40 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-sans transition-all outline-none shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="sr-only"
                      >
                        Email Address
                      </label>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                          />
                        </svg>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="Email Address"
                        className="w-full bg-white/85 hover:bg-white focus:bg-white text-neutral-900 placeholder:text-neutral-500/80 border border-amber-200/90 focus:border-neutral-900 focus:ring-2 focus:ring-amber-400/40 rounded-2xl py-3.5 pl-11 pr-4 text-xs sm:text-sm font-sans transition-all outline-none shadow-2xs"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="sr-only"
                      >
                        Message
                      </label>
                      <span className="absolute left-4 top-4 text-neutral-500 pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                          />
                        </svg>
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder="What's on your mind?"
                        className="w-full bg-white/85 hover:bg-white focus:bg-white text-neutral-900 placeholder:text-neutral-500/80 border border-amber-200/90 focus:border-neutral-900 focus:ring-2 focus:ring-amber-400/40 rounded-2xl pt-3.5 pb-3.5 pl-11 pr-4 text-xs sm:text-sm font-sans transition-all outline-none resize-none shadow-2xs"
                      />
                    </div>

                    {/* Bottom Action Row: Submit Button & Feedback Status */}
                    <div className="flex items-center justify-between gap-4 pt-1 sm:pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 bg-neutral-950 text-white text-xs sm:text-[13px] font-medium font-sans rounded-full hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-sm disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17L17 7M8 7h9v9"
                              />
                            </svg>
                          </>
                        )}
                      </button>

                      {submitted && (
                        <span className="font-sans text-xs text-neutral-700 font-medium">
                          Message sent! Thanks.
                        </span>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom Right Annotation: "Let's create something cool." */}
            <div
              aria-hidden="true"
              className="contact-annotation-right hidden sm:block absolute -bottom-10 xl:-bottom-24 2xl:-bottom-24 left-4 sm:left-10 lg:left-2 xl:-left-6 2xl:left-12 select-none pointer-events-none z-20 text-left"
            >
              <svg
                viewBox="0 0 45 50"
                fill="none"
                className="w-9 h-10 text-neutral-400 mr-auto mb-1 ml-2"
              >
                <path
                  d="M 12 44 C 14 26, 24 16, 36 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 26 8 L 36 8 L 35 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-editorial italic text-xs sm:text-sm 2xl:text-lg text-neutral-500 leading-tight">
                Let&apos;s
                <br />
                create
                <br />
                something
                <br />
                cool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
