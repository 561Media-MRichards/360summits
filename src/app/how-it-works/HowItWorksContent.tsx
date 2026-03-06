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

const forAttendees = [
  { step: "01", title: "Browse & Register", description: "Explore upcoming summits by topic. Register for free to get access to live sessions — no credit card required." },
  { step: "02", title: "Watch Live Sessions", description: "Tune in during the event to watch expert presentations. Each session is available for 24-48 hours after airing." },
  { step: "03", title: "Engage & Connect", description: "Ask questions during live Q&A, connect with speakers and fellow attendees, and join our learning community." },
  { step: "04", title: "Upgrade for Lifetime Access", description: "Want to rewatch at your own pace? Grab the All-Access Pass for lifetime replays, bonuses, and exclusive resources." },
];

const forHosts = [
  { step: "01", title: "Strategy & Planning", description: "We work with you to define your summit topic, target audience, speaker lineup, and monetization strategy." },
  { step: "02", title: "Production & Design", description: "Our team handles web design, landing pages, email sequences, and all the technical production work." },
  { step: "03", title: "Speaker & JV Management", description: "We coordinate with speakers, manage joint venture partners, and handle affiliate tracking and commissions." },
  { step: "04", title: "Launch & Promotion", description: "From email marketing to social campaigns, we drive registrations and ensure maximum attendance." },
  { step: "05", title: "Live Event Execution", description: "We manage the entire live event — broadcasting, Q&A moderation, technical support, and attendee engagement." },
  { step: "06", title: "Post-Summit Monetization", description: "All-Access Pass sales, replay funnels, upsells, and ongoing email nurture sequences to maximize ROI." },
];

const services = [
  { title: "Summit Production", description: "End-to-end virtual event production with professional quality.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { title: "Web Design & Funnels", description: "Custom landing pages, registration flows, and sales funnels.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { title: "Email Marketing", description: "Automated sequences for registration, engagement, and sales.", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" },
  { title: "JV/Affiliate Management", description: "Partner recruitment, tracking, commissions, and relationship management.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
  { title: "Content Strategy", description: "Topic curation, speaker prep, and session structure optimization.", icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" },
  { title: "Analytics & Reporting", description: "Registration tracking, engagement metrics, and revenue reporting.", icon: "M18 20V10M12 20V4M6 20v-6" },
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
          <p data-page-hero="eyebrow" className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-purple-light">
            The Process
          </p>
          <h1 data-page-hero="heading" className="mb-6 font-display text-5xl font-bold text-brand-purple md:text-6xl">
            How It Works
          </h1>
          <p data-page-hero="sub" className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Whether you&apos;re an attendee looking to learn or a host wanting
            to create a summit — here&apos;s how 360Summits makes it happen.
          </p>
        </div>
      </section>

      {/* For Attendees */}
      <section className="bg-warm-ivory py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-purple-light">For Attendees</p>
            <h2 className="font-display text-4xl font-bold text-brand-purple">Join a Summit</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4" data-stagger-group>
            {forAttendees.map((item) => (
              <div key={item.step} className="text-center" data-stagger-item>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple font-display text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-purple">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <p className="mb-3 font-body text-sm font-medium uppercase tracking-widest text-purple-light">For Summit Hosts</p>
            <h2 className="font-display text-4xl font-bold text-brand-purple">Host a Summit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We handle everything from A to Z, so you can focus on your content and your audience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {forHosts.map((item) => (
              <div key={item.step} data-stagger-item className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-tint font-display text-sm font-bold text-purple-light">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-brand-purple">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-warm-ivory py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12" data-reveal>
            <h2 className="mb-2 font-display text-4xl font-bold text-brand-purple">What We Handle</h2>
            <p className="text-lg text-slate-600">Full-service summit production from start to finish.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {services.map((service) => (
              <div key={service.title} data-stagger-item className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-tint">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5B1A9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-brand-purple">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-purple py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white">Ready to Launch Your Summit?</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            Let&apos;s discuss your vision. We&apos;ll create a custom plan to bring your summit to life.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:shadow-lg hover:shadow-brand-lime/20">
            Schedule a Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
