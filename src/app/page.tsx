"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const summits = [
  {
    title: "Health & Wellness Summit",
    description:
      "Explore holistic health, nutrition, and mindset transformation with 25+ expert speakers over 3 transformative days.",
    category: "Health",
    speakers: 25,
    days: 3,
  },
  {
    title: "Entrepreneur Mastery Summit",
    description:
      "Business growth strategies, marketing systems, and revenue optimization from founders who've scaled to 7+ figures.",
    category: "Business",
    speakers: 20,
    days: 2,
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your potential with cutting-edge strategies for productivity, mindset, and achieving your biggest goals.",
    category: "Growth",
    speakers: 15,
    days: 1,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Summit",
    description:
      "Browse our upcoming summits and masterclasses. Find the topics and speakers that align with your learning goals.",
  },
  {
    step: "02",
    title: "Register for Free",
    description:
      "Sign up for complimentary access to live sessions. Upgrade to an all-access pass for lifetime replays and bonuses.",
  },
  {
    step: "03",
    title: "Learn from Experts",
    description:
      "Watch expert presentations, engage in live Q&A, and connect with a community of passionate learners.",
  },
  {
    step: "04",
    title: "Transform Your Life",
    description:
      "Apply what you've learned. Join our community for ongoing support, accountability, and continued growth.",
  },
];

const testimonials = [
  {
    quote:
      "The health summit completely changed my approach to wellness. The speakers were world-class and the content was actionable from day one.",
    name: "Sarah Mitchell",
    title: "Health Coach",
    initials: "SM",
  },
  {
    quote:
      "I've attended dozens of online events, but 360Summits stands apart. The production quality and speaker lineup are unmatched.",
    name: "David Chen",
    title: "Entrepreneur",
    initials: "DC",
  },
  {
    quote:
      "George and his team make the entire process seamless — from speaker coordination to attendee engagement. Truly next-level.",
    name: "Rachel Torres",
    title: "Wellness Practitioner",
    initials: "RT",
  },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !mainRef.current) return;

      const ctx = mainRef.current;

      // Hero entrance timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const heroTargets = ctx.querySelectorAll("[data-hero]");
      gsap.set(heroTargets, { y: 30, opacity: 0 });

      heroTl
        .to("[data-hero='eyebrow']", { y: 0, opacity: 1, duration: 0.6 })
        .to("[data-hero='heading']", { y: 0, opacity: 1, duration: 0.8 }, "-=0.35")
        .to("[data-hero='sub']", { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .to("[data-hero='cta']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.35")
        .to("[data-hero='stats']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.25");

      // Parallax on hero gradient blobs
      const blobs = ctx.querySelectorAll("[data-parallax-blob]");
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          y: i % 2 === 0 ? 60 : -40,
          ease: "none",
          scrollTrigger: {
            trigger: ctx.querySelector("[data-hero-section]"),
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      // Scroll reveals
      ctx.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat((el as HTMLElement).dataset.revealDelay || "0");
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger groups
      ctx.querySelectorAll("[data-stagger-group]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.set(items, { y: 40, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
            });
          },
          once: true,
        });
      });

      // Count-up stats
      ctx.querySelectorAll("[data-count-target]").forEach((el) => {
        const target = parseFloat((el as HTMLElement).dataset.countTarget || "0");
        const suffix = (el as HTMLElement).dataset.countSuffix || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate() {
            el.textContent = `${Math.round(obj.val).toLocaleString()}${suffix}`;
          },
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef}>
      {/* Hero */}
      <section
        data-hero-section
        className="relative flex min-h-[90vh] items-center overflow-hidden pt-20"
      >
        <div
          data-parallax-blob
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-wash via-warm-white to-warm-white"
        />
        <div
          data-parallax-blob
          className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(51,3,98,0.06),transparent_70%)]"
        />
        <div
          data-parallax-blob
          className="pointer-events-none absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(132,204,22,0.04),transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p
                data-hero="eyebrow"
                className="mb-6 font-body text-sm font-medium uppercase tracking-widest text-purple-light"
              >
                For Those Who Love Learning
              </p>

              <h1
                data-hero="heading"
                className="mb-6 font-display text-5xl font-bold leading-[1.1] text-brand-purple md:text-6xl lg:text-7xl"
              >
                Learn From the Experts. Grow With a Community.
              </h1>

              <p
                data-hero="sub"
                className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
              >
                Virtual summits connecting passionate learners with world-class
                speakers in health, wellness, business, and personal growth.
              </p>

              <div data-hero="cta" className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/summits"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-lime px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:shadow-lg hover:shadow-brand-lime/20"
                >
                  Explore Summits
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-purple/20 px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:border-brand-purple/40 hover:bg-brand-purple/5"
                >
                  How It Works
                </Link>
              </div>
            </div>

            {/* Trust indicators */}
            <div data-hero="stats" className="hidden md:block">
              <div className="grid grid-cols-2 gap-5" data-stagger-group>
                {[
                  { value: 50, suffix: "+", label: "Summits Hosted" },
                  { value: 200, suffix: "+", label: "Expert Speakers" },
                  { value: 12000, suffix: "+", label: "Learners Worldwide" },
                  { value: 95, suffix: "%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    data-stagger-item
                    className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                  >
                    <div
                      data-count-target={stat.value}
                      data-count-suffix={stat.suffix}
                      className="font-display text-3xl font-bold text-brand-purple"
                    >
                      0{stat.suffix}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="mt-16 flex justify-center gap-10 md:hidden">
            {[
              { label: "Summits Hosted", value: 50, suffix: "+" },
              { label: "Expert Speakers", value: 200, suffix: "+" },
              { label: "Learners", value: 12000, suffix: "+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  data-count-target={stat.value}
                  data-count-suffix={stat.suffix}
                  className="font-display text-2xl font-bold text-brand-purple"
                >
                  0{stat.suffix}
                </div>
                <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Summits */}
      <section className="bg-warm-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl" data-reveal>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-purple">
              Upcoming Summits
            </h2>
            <p className="text-lg text-slate-600">
              Discover transformative virtual events featuring world-class
              speakers and actionable content.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3" data-stagger-group>
            {summits.map((summit) => (
              <div
                key={summit.title}
                data-stagger-item
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-md hover:border-purple-muted/40"
              >
                <span className="mb-4 inline-flex w-fit rounded-full bg-purple-tint px-3 py-1 text-xs font-semibold text-purple-light">
                  {summit.category}
                </span>
                <h3 className="mb-3 font-display text-xl font-bold text-brand-purple">
                  {summit.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
                  {summit.description}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex gap-4 text-xs text-slate-400">
                    <span>{summit.speakers} speakers</span>
                    <span>
                      {summit.days} day{summit.days > 1 ? "s" : ""}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-brand-purple opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-purple">
              How It Works
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              Four simple steps to start learning from the world&apos;s best.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4" data-stagger-group>
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center" data-stagger-item>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple font-display text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-purple">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-warm-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div data-reveal>
                <h2 className="mb-6 font-display text-4xl font-bold text-brand-purple">
                  More Than Just an Online Event
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  We don&apos;t just host webinars — we create transformative
                  learning experiences. From production to promotion, speaker
                  management to attendee engagement, we handle everything so you
                  can focus on what matters most.
                </p>
              </div>
              <div className="space-y-4" data-stagger-group>
                {[
                  "Professional summit production & web design",
                  "Complete email marketing & funnel systems",
                  "Speaker coordination & JV management",
                  "Content strategy & post-summit monetization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                    data-stagger-item
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-purple">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm"
              data-reveal
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: 50, suffix: "+", label: "Summits Produced" },
                  { value: 200, suffix: "+", label: "Expert Speakers" },
                  { value: 12000, suffix: "+", label: "Learners Reached" },
                  { value: 95, suffix: "%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      data-count-target={stat.value}
                      data-count-suffix={stat.suffix}
                      className="font-display text-3xl font-bold text-brand-purple"
                    >
                      0{stat.suffix}
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-purple">
              What Our Community Says
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              Hear from the learners, coaches, and entrepreneurs who&apos;ve
              experienced 360Summits.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3" data-stagger-group>
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-stagger-item
                className="rounded-2xl bg-warm-ivory p-8"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-4 text-purple-muted"
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote className="mb-6 font-display text-lg italic leading-relaxed text-brand-purple">
                  {t.quote}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-purple font-body text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-sm text-slate-500">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-purple py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            Join thousands of passionate learners at our next virtual summit.
            Free registration, world-class speakers, life-changing content.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/summits"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:shadow-lg hover:shadow-brand-lime/20"
            >
              Explore Summits
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
