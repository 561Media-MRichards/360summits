"use client";

import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientDivider from "@/components/GradientDivider";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        interest: formData.get("interest"),
        message: formData.get("message"),
      }),
    }).catch(() => {});

    setSubmitted(true);
    setSending(false);
  }

  return (
    <main ref={mainRef} className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-pastel-pink py-24">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full bg-pill-pink/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-lavender/25 blur-3xl" />
          <div data-float className="absolute top-[18%] right-[8%] h-3 w-3 rounded-full bg-pink-800/20" />
          <div data-float className="absolute bottom-[22%] left-[6%] h-2 w-2 rounded-full bg-purple-lighter/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
            Get in touch
          </span>
          <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
            Tell us about your summit vision
          </h1>
          <p data-page-hero="sub" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Share your topic, your audience, and your goals — we&apos;ll tell you
            exactly how we&apos;d bring your summit to life.
          </p>
        </div>
      </section>

      <GradientDivider variant="warm" />

      {/* Contact Form & Info */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3" data-reveal>
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-[1.25rem] bg-pastel-mint p-12 text-center">
                  <span className="mb-4 text-5xl">✅</span>
                  <h3 className="mb-2 font-display text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <input name="name" type="text" required placeholder="Jane Smith" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Email Address</label>
                      <input name="email" type="email" required placeholder="george@example.com" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <input name="phone" type="tel" placeholder="(714) 436-1234" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700">Interest</label>
                      <select name="interest" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200">
                        <option value="">Select an option</option>
                        <option>Host a Summit</option>
                        <option>Speak at a Summit</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea name="message" rows={5} required placeholder="Tell us about your summit vision..." className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200" />
                  </div>

                  <button type="submit" disabled={sending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-md disabled:opacity-60 md:w-auto">
                    {sending ? "Sending..." : "Start the Conversation →"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-5 md:col-span-2" data-stagger-group>
              <div data-stagger-item>
                <h3 className="mb-4 font-display text-xl font-bold text-slate-900">Contact Information</h3>
                <div className="space-y-3">
                  {[
                    { label: "Phone", value: "(714) 436-1234", href: "tel:+17144361234", emoji: "📞" },
                    { label: "Email", value: "info@360summits.com", href: "mailto:info@360summits.com", emoji: "📧" },
                    { label: "Location", value: "125 NW 13th St Suite B8, Boca Raton, FL 33432", href: "https://maps.google.com/?q=125+NW+13th+St+Suite+B8+Boca+Raton+FL+33432", emoji: "📍" },
                  ].map((item) => (
                    <div key={item.label} className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-slate-50 p-4 transition-all hover:shadow-sm">
                      <span className="pointer-events-none absolute -right-2 -bottom-2 text-[3.5rem] leading-none opacity-[0.06]">{item.emoji}</span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm" data-emoji>{item.emoji}</div>
                      <div className="relative z-10">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-slate-900 transition-colors hover:text-purple-light">{item.value}</a>
                        ) : (
                          <span className="text-sm font-medium text-slate-900">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[1.25rem] bg-pastel-cream p-6" data-stagger-item>
                <span className="pointer-events-none absolute -right-2 -bottom-2 text-[4rem] leading-none opacity-[0.07]">⚡</span>
                <div className="relative z-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">⚡</div>
                  <h4 className="mb-2 font-display text-lg font-bold text-slate-900">Quick Response</h4>
                  <p className="text-sm text-slate-500">We typically respond within 24 hours during business days. For urgent matters, give us a call.</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[1.25rem] bg-pastel-lavender p-6" data-stagger-item>
                <span className="pointer-events-none absolute -right-2 -bottom-2 text-[4rem] leading-none opacity-[0.07]">🌐</span>
                <div className="relative z-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">🌐</div>
                  <h4 className="mb-2 font-display text-lg font-bold text-slate-900">Follow Us</h4>
                  <div className="flex gap-2">
                    {["LinkedIn", "Facebook", "Instagram", "Twitter"].map((platform) => (
                      <a key={platform} href="#" className="rounded-full border border-white/60 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-900 hover:text-white">
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
