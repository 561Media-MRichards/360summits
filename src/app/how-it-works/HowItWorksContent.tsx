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

const ourProcess = [
  { step: "01", emoji: "🎯", title: "Strategy & Discovery", description: "We start with a deep-dive into your expertise, audience, and goals. Together we define your summit topic, speaker lineup, and monetization strategy.", highlight: "Free strategy call", bg: "bg-pastel-cream", pill: "bg-pill-yellow" },
  { step: "02", emoji: "🎨", title: "Production & Design", description: "Our team builds everything — custom landing pages, registration flows, email sequences, and all the technical infrastructure your summit needs.", highlight: "Done in ~3 weeks", bg: "bg-pastel-mint", pill: "bg-pill-mint" },
  { step: "03", emoji: "🤝", title: "Speaker & JV Recruitment", description: "We recruit and coordinate speakers, manage joint venture partners, and set up affiliate tracking so your launch has maximum reach.", highlight: "200+ speakers managed", bg: "bg-pastel-lavender", pill: "bg-pill-lavender" },
  { step: "04", emoji: "🚀", title: "Launch & Promotion", description: "From email marketing to social campaigns and JV partner promotions, we drive registrations and build anticipation for your event.", highlight: "8–15K avg. registrations", bg: "bg-pastel-pink", pill: "bg-pill-pink" },
  { step: "05", emoji: "🎬", title: "Live Event Execution", description: "We manage the entire live broadcast — speaker scheduling, Q&A moderation, technical support, and real-time attendee engagement.", highlight: "Full production team", bg: "bg-pastel-sky", pill: "bg-pill-sky" },
  { step: "06", emoji: "💰", title: "Turn Replays Into Revenue", description: "All-Access Pass sales, replay funnels, upsell sequences, and ongoing email nurture to maximize your summit's revenue long after it ends.", highlight: "$500K+ generated", bg: "bg-pastel-cream", pill: "bg-pill-yellow" },
];

const whyItWorks = [
  { title: "Grow Your List Fast", description: "Our clients add 1,500-3,000+ subscribers per summit — targeted, engaged people who opted in because of your topic.", emoji: "📈" },
  { title: "Position as the Authority", description: "When you host 15-25 experts, your audience sees you as the connector. One summit built more credibility than 2 years of content.", emoji: "👑" },
  { title: "Generate Revenue", description: "All-Access Passes, sponsor slots, and back-end offers. Most clients see positive ROI within the first 48 hours of launch.", emoji: "💰" },
  { title: "Build Partnerships", description: "Every speaker becomes a JV partner who promotes to their list. One summit creates relationships that drive revenue for years.", emoji: "🤝" },
];

const services = [
  { id: "build", title: "Summit Production", description: "End-to-end virtual event production with professional quality.", bg: "bg-pastel-lavender", pill: "bg-pill-lavender", emoji: "🎬", highlight: "50+ produced" },
  { id: "build", title: "Web Design & Funnels", description: "Custom landing pages, registration flows, and sales funnels.", bg: "bg-pastel-cream", pill: "bg-pill-yellow", emoji: "🖥️", highlight: "Avg. 12% conversion" },
  { id: "promote", title: "Email Marketing", description: "Automated sequences for registration, engagement, and sales.", bg: "bg-pastel-pink", pill: "bg-pill-pink", emoji: "📧", highlight: "30+ sequences built" },
  { id: "speakers", title: "JV/Affiliate Management", description: "Partner recruitment, tracking, commissions, and relationship management.", bg: "bg-pastel-mint", pill: "bg-pill-mint", emoji: "🤝", highlight: "200+ partners managed" },
  { id: "strategy", title: "Content Strategy", description: "Topic curation, speaker prep, and session structure optimization.", bg: "bg-pastel-sky", pill: "bg-pill-sky", emoji: "🧠", highlight: "Proven frameworks" },
  { id: "monetize", title: "Analytics & Reporting", description: "Registration tracking, engagement metrics, and revenue reporting.", bg: "bg-pastel-lavender", pill: "bg-pill-lavender", emoji: "📊", highlight: "Real-time dashboards" },
];

export default function HowItWorksContent() {
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
        .to("[data-page-hero='sub']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.35")
        .to("[data-page-hero='image']", { y: 0, opacity: 1, duration: 0.9 }, "-=0.4");

      ctx.querySelectorAll("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -10 : 10, rotation: i % 2 === 0 ? 4 : -4,
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
      {/* Hero — Split with production image */}
      <section className="relative overflow-hidden bg-pastel-cream py-20 lg:py-28">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 -left-28 h-[400px] w-[400px] rounded-full bg-pill-yellow/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-[350px] w-[350px] rounded-full bg-pill-lavender/20 blur-3xl" />
          <div data-float className="absolute top-[15%] right-[6%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[20%] left-[4%] h-2 w-2 rounded-full bg-pill-mint/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
                Our process
              </span>
              <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
                We handle everything. You show up and shine.
              </h1>
              <p data-page-hero="sub" className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                From strategy to post-summit monetization, our team manages every
                detail so you can focus on delivering your message.
              </p>
            </div>
            <div data-page-hero="image" className="relative overflow-hidden rounded-[1.5rem] shadow-2xl ring-1 ring-slate-900/[0.04]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-pill-lavender/40 via-transparent to-pill-yellow/30 blur-sm" />
              <Image
                src="/images/production-setup.png"
                alt="Professional virtual summit production studio"
                width={960}
                height={540}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Why Summits Work */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              The opportunity
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Why virtual summits work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-stagger-group>
            {whyItWorks.map((item) => (
              <div key={item.title} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-pastel-cream p-6 transition-all hover:shadow-lg">
                <span className="pointer-events-none absolute -right-2 -bottom-2 text-[5rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step Process — Alternating image/content */}
      <section className="relative bg-pastel-lavender py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Step by step
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Our proven 6-step process
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Refined across 50+ summits to maximize your reach and revenue.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {ourProcess.map((item) => (
              <div key={item.step} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] ${item.bg} p-7 transition-all hover:shadow-lg`}>
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className={`inline-flex rounded-full ${item.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* Full-width image break */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/team-collaboration.png"
          alt="Team collaboration during summit planning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </section>

      {/* Full-Service Production */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Full service
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">Every piece, handled by us</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {services.map((service) => (
              <div key={service.title} id={service.id} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] ${service.bg} p-8 transition-all hover:shadow-lg scroll-mt-24`}>
                <span className="pointer-events-none absolute -right-4 -bottom-4 text-[7rem] leading-none opacity-[0.08] transition-transform duration-500 group-hover:scale-110">{service.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{service.emoji}</div>
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex rounded-full ${service.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>{service.highlight}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/virtual-event-studio.png" alt="Virtual summit production studio" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">Ready to launch your summit?</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Let&apos;s discuss your vision. We&apos;ll create a custom plan to bring your summit to life.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg">
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
