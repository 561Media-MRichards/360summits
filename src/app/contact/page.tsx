"use client";

import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
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
            Get In Touch
          </p>
          <h1 data-page-hero="heading" className="mb-6 font-display text-5xl font-bold text-brand-purple md:text-6xl">
            Contact Us
          </h1>
          <p data-page-hero="sub" className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Have a question about an upcoming summit? Want to host your own
            event? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-warm-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3" data-reveal>
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-brand-purple">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e: FormEvent) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input type="text" required placeholder="George Shepherd" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <input type="email" required placeholder="george@360summits.com" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input type="tel" placeholder="(714) 436-1234" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Interest</label>
                      <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10">
                        <option value="">Select an option</option>
                        <option>Attend a Summit</option>
                        <option>Host a Summit</option>
                        <option>Speak at a Summit</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={5} required placeholder="Tell us about your goals or questions..." className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10" />
                  </div>

                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-purple-light hover:shadow-md md:w-auto">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6 md:col-span-2" data-stagger-group>
              <div data-stagger-item>
                <h3 className="mb-4 font-display text-xl font-bold text-brand-purple">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { label: "Phone", value: "(714) 436-1234", href: "tel:+17144361234", icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" },
                    { label: "Email", value: "info@360summits.com", href: "mailto:info@360summits.com", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" },
                    { label: "Location", value: "Boynton Beach, FL", href: undefined as string | undefined, icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 110 6 3 3 0 010-6z" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-tint">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B1A9E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-slate-900 transition-colors hover:text-brand-purple">{item.value}</a>
                        ) : (
                          <span className="text-sm font-medium text-slate-900">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-stagger-item>
                <h4 className="mb-2 font-display text-lg font-bold text-brand-purple">Quick Response</h4>
                <p className="text-sm text-slate-500">We typically respond within 24 hours during business days. For urgent matters, give us a call.</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-stagger-item>
                <h4 className="mb-2 font-display text-lg font-bold text-brand-purple">Follow Us</h4>
                <div className="flex gap-3">
                  {["LinkedIn", "Facebook", "Instagram", "Twitter"].map((platform) => (
                    <a key={platform} href="#" className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-purple-muted hover:text-brand-purple">
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
