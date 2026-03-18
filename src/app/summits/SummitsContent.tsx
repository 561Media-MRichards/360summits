"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const caseStudies = [
  {
    title: "Health & Wellness Summit 2025",
    result: "12,400+ registrations",
    host: "Dr. Karen Walsh — Functional Nutritionist",
    description: "A 3-day summit with 25 speakers covering gut health, hormone balance, and longevity. Generated $42K in All-Access Pass revenue and added 12,400 registrants to Dr. Walsh's ecosystem.",
    speakers: 25,
    days: 3,
    listGrowth: "12,400",
    revenue: "$42K",
    bg: "bg-pastel-mint",
    pill: "bg-pill-mint",
    image: "/images/case-wellness.png",
  },
  {
    title: "Entrepreneur Mastery Summit",
    result: "9,800+ registrations",
    host: "David Chen — Business Strategist",
    description: "A 2-day intensive on scaling from 6 to 7 figures. 20 speakers and JV partnerships drove 65% of registrations. David made back his investment in the first 48 hours.",
    speakers: 20,
    days: 2,
    listGrowth: "9,800",
    revenue: "$38K",
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
    image: "/images/case-entrepreneur.png",
  },
  {
    title: "Mindset & Meditation Summit",
    result: "8,200+ registrations",
    host: "Rachel Torres — Wellness Practitioner",
    description: "12 expert speakers on breathwork, neuroscience-backed mindfulness, and stress resilience. Rachel's audience grew by 8,200 engaged registrants in a single week.",
    speakers: 12,
    days: 2,
    listGrowth: "8,200",
    revenue: "$28K",
    bg: "bg-pastel-lavender",
    pill: "bg-pill-lavender",
    image: "/images/case-mindset.png",
  },
];

const summitStats = [
  { value: "50+", label: "Summits Produced" },
  { value: "200+", label: "Speakers Managed" },
  { value: "1M+", label: "Total Registrations" },
  { value: "$500K+", label: "Client Revenue Generated" },
];

const industries = [
  { topic: "Health & Wellness", bg: "bg-pill-mint", text: "text-green-800" },
  { topic: "Business & Marketing", bg: "bg-pill-yellow", text: "text-yellow-800" },
  { topic: "Personal Growth", bg: "bg-pill-lavender", text: "text-purple-light" },
  { topic: "Nutrition", bg: "bg-pill-pink", text: "text-pink-800" },
  { topic: "Mindset", bg: "bg-pill-sky", text: "text-blue-800" },
  { topic: "Entrepreneurship", bg: "bg-pill-yellow", text: "text-yellow-800" },
  { topic: "Lifestyle", bg: "bg-pill-pink", text: "text-pink-800" },
  { topic: "Holistic Health", bg: "bg-pill-mint", text: "text-green-800" },
  { topic: "Digital Marketing", bg: "bg-pill-lavender", text: "text-purple-light" },
  { topic: "Financial Freedom", bg: "bg-pill-yellow", text: "text-yellow-800" },
  { topic: "Leadership", bg: "bg-pill-sky", text: "text-blue-800" },
  { topic: "Coaching", bg: "bg-pill-pink", text: "text-pink-800" },
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

      ctx.querySelectorAll("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -10 : 10,
          rotation: i % 2 === 0 ? 4 : -4,
          duration: 2.5 + i * 0.3, ease: "sine.inOut", repeat: -1, yoyo: true,
        });
      });

      ctx.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat((el as HTMLElement).dataset.revealDelay || "0");
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0, opacity: 1, duration: 0.8, delay, ease: "power2.out",
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
      <section className="relative overflow-hidden bg-pastel-lavender py-24">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 -right-28 h-[400px] w-[400px] rounded-full bg-pill-lavender/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-pill-sky/25 blur-3xl" />
          <div data-float className="absolute top-[20%] right-[7%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[18%] left-[5%] h-2 w-2 rounded-full bg-blue-800/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
            Our track record
          </span>
          <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
            Every summit we produce delivers real, measurable results.
          </h1>
          <p data-page-hero="sub" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            List growth, revenue, and authority — all from a single event.
            Here&apos;s the proof from our clients.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Stats Bar */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4" data-stagger-group>
            {summitStats.map((stat) => (
              <div key={stat.label} data-stagger-item className="text-center">
                <div className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Case studies
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Real summits, real numbers
            </h2>
            <p className="mt-2 text-lg text-slate-500">
              See how our clients used virtual summits to grow their businesses.
            </p>
          </div>

          <div className="space-y-8" data-stagger-group>
            {caseStudies.map((study, i) => (
              <div
                key={study.title}
                data-stagger-item
                className={`overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md`}
              >
                <div className={`grid items-center gap-0 md:grid-cols-5 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden md:col-span-2 md:aspect-auto md:h-full">
                    <Image
                      src={study.image}
                      alt={study.host}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className={`p-8 md:col-span-3 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className={`inline-flex rounded-full ${study.pill} px-3 py-1 text-xs font-semibold text-slate-700`}>
                        {study.title}
                      </span>
                      <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 border border-green-200">
                        {study.result}
                      </span>
                    </div>
                    <h3 className="mb-1 font-display text-xl font-bold text-slate-900">
                      {study.host}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { label: "Speakers", val: study.speakers },
                        { label: "Days", val: study.days },
                        { label: "List Growth", val: `+${study.listGrowth}` },
                        { label: "Revenue", val: study.revenue },
                      ].map((m) => (
                        <div key={m.label} className="rounded-xl bg-slate-50 px-4 py-2.5 text-center">
                          <div className="font-display text-lg font-bold text-slate-900">{m.val}</div>
                          <div className="text-xs text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative bg-pastel-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Industries we serve
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Summits across every niche
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3" data-stagger-group>
            {industries.map((item) => (
              <span
                key={item.topic}
                data-stagger-item
                className={`rounded-full ${item.bg} ${item.text} px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-sm`}
              >
                {item.topic}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* Full-width image break */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/summit-broadcast.png"
          alt="Live virtual summit broadcast in a professional studio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Your summit could be next
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Tell us about your expertise, your audience, and your goals.
            We&apos;ll show you exactly how a summit can grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg"
          >
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
