"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const summits = [
  {
    title: "Health & Wellness Summit 2026",
    description:
      "A 3-day deep dive into holistic health, functional nutrition, biohacking, and mindset transformation with 25+ world-class speakers.",
    category: "Health",
    speakers: 25,
    days: 3,
    status: "Upcoming",
    date: "April 15-17, 2026",
  },
  {
    title: "Entrepreneur Mastery Summit",
    description:
      "Strategies for scaling your business from 6 to 7 figures. Marketing automation, sales funnels, and team building from founders who've done it.",
    category: "Business",
    speakers: 20,
    days: 2,
    status: "Upcoming",
    date: "May 8-9, 2026",
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your potential with proven frameworks for productivity, emotional intelligence, and goal achievement from top performance coaches.",
    category: "Growth",
    speakers: 15,
    days: 1,
    status: "Upcoming",
    date: "June 1, 2026",
  },
  {
    title: "Nutrition Revolution Summit",
    description:
      "The latest research in gut health, plant-based nutrition, anti-inflammatory diets, and metabolic optimization from leading nutritionists.",
    category: "Nutrition",
    speakers: 18,
    days: 2,
    status: "Coming Soon",
    date: "July 2026",
  },
  {
    title: "Digital Marketing Mastery",
    description:
      "Master social media, content strategy, email marketing, and paid advertising with actionable frameworks from top digital marketers.",
    category: "Marketing",
    speakers: 22,
    days: 3,
    status: "Coming Soon",
    date: "August 2026",
  },
  {
    title: "Mindset & Meditation Summit",
    description:
      "Transform your mental health through meditation, breathwork, neuroscience-backed mindfulness, and stress resilience techniques.",
    category: "Wellness",
    speakers: 12,
    days: 2,
    status: "Coming Soon",
    date: "September 2026",
  },
];

const pastSummits = [
  { title: "Wellness Warriors Summit", attendees: "2,500+", speakers: 20 },
  { title: "Launch Your Business Masterclass", attendees: "1,800+", speakers: 15 },
  { title: "Holistic Health Breakthrough", attendees: "3,200+", speakers: 25 },
  { title: "Coaching Mastery Summit", attendees: "1,500+", speakers: 18 },
];

export default function SummitsContent() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !mainRef.current) return;
      const ctx = mainRef.current;

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const heroTargets = ctx.querySelectorAll("[data-page-hero]");
      gsap.set(heroTargets, { y: 24, opacity: 0 });
      heroTl
        .to("[data-page-hero='eyebrow']", { y: 0, opacity: 1, duration: 0.5 })
        .to("[data-page-hero='heading']", { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
        .to("[data-page-hero='sub']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.35");

      ctx.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat((el as HTMLElement).dataset.revealDelay || "0");
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0, opacity: 1, duration: 0.8, delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      ctx.querySelectorAll("[data-stagger-group]").forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.set(items, { y: 40, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.to(batch, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12 });
          },
          once: true,
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-wash to-warm-white py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p
            data-page-hero="eyebrow"
            className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-purple-light"
          >
            Virtual Events
          </p>
          <h1
            data-page-hero="heading"
            className="mb-6 font-display text-5xl font-bold text-brand-purple md:text-6xl"
          >
            Summits &amp; Masterclasses
          </h1>
          <p
            data-page-hero="sub"
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            Discover transformative virtual events featuring world-class
            speakers, actionable content, and a community of passionate learners.
          </p>
        </div>
      </section>

      {/* Upcoming Summits */}
      <section className="bg-warm-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12" data-reveal>
            <h2 className="mb-2 font-display text-4xl font-bold text-brand-purple">
              Register Now
            </h2>
            <p className="text-lg text-slate-600">
              Browse upcoming events and save your spot.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {summits.map((summit) => (
              <div
                key={summit.title}
                data-stagger-item
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-purple-muted/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-purple-tint px-3 py-1 text-xs font-semibold text-purple-light">
                    {summit.category}
                  </span>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      summit.status === "Upcoming"
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {summit.status}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-xl font-bold text-brand-purple">
                  {summit.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
                  {summit.description}
                </p>

                <div className="mb-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {summit.date}
                  </span>
                  <span>{summit.speakers} speakers</span>
                  <span>
                    {summit.days} day{summit.days > 1 ? "s" : ""}
                  </span>
                </div>

                <button className="w-full rounded-xl bg-brand-purple py-3 font-body text-sm font-semibold text-white transition-all hover:bg-purple-light">
                  Register Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Summits */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12" data-reveal>
            <h2 className="mb-2 font-display text-4xl font-bold text-brand-purple">
              Past Summits
            </h2>
            <p className="text-lg text-slate-600">
              A track record of successful events and happy learners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4" data-stagger-group>
            {pastSummits.map((summit) => (
              <div
                key={summit.title}
                data-stagger-item
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 font-display text-lg font-bold text-brand-purple">
                  {summit.title}
                </h3>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>{summit.attendees} attendees</span>
                  <span>{summit.speakers} speakers</span>
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
            Want to Speak at a Summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            We&apos;re always looking for experts to share their knowledge.
            Apply to speak at an upcoming event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:shadow-lg hover:shadow-brand-lime/20"
          >
            Apply to Speak
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
        </div>
      </section>
    </main>
  );
}
