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

export default function AboutPage() {
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
            Our Story
          </p>
          <h1
            data-page-hero="heading"
            className="mb-6 font-display text-5xl font-bold text-brand-purple md:text-6xl"
          >
            For Those Who Love Learning
          </h1>
          <p
            data-page-hero="sub"
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            360Summits was born from a simple belief: everyone deserves access to
            world-class education, regardless of where they live or how much they
            can afford.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-warm-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div data-reveal>
              <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-purple-light">
                Meet the Founder
              </p>
              <h2 className="mb-6 font-display text-4xl font-bold text-brand-purple">
                George Shepherd
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  George Shepherd is an entrepreneur based in Boynton Beach,
                  Florida, who has dedicated his career to creating spaces where
                  experts and eager learners can connect.
                </p>
                <p>
                  With a background in digital marketing, web design, and event
                  production, George founded 360Summits to bridge the gap between
                  world-class knowledge and the people who need it most.
                </p>
                <p>
                  His mission extends beyond education — George is passionate
                  about supporting anti-trafficking initiatives, dedicating a
                  portion of summit proceeds to organizations fighting modern
                  slavery.
                </p>
              </div>
            </div>

            <div className="flex justify-center" data-reveal data-reveal-delay="0.15">
              <div className="relative">
                <div className="h-80 w-80 rounded-2xl border border-slate-200 bg-white p-1 shadow-md">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-purple-wash">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-purple font-display text-3xl font-bold text-white">
                        GS
                      </div>
                      <div className="font-display text-xl font-bold text-brand-purple">
                        George Shepherd
                      </div>
                      <div className="text-sm text-slate-500">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-purple">
              Our Mission &amp; Values
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              What drives everything we do at 360Summits.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3" data-stagger-group>
            {[
              {
                title: "Democratize Education",
                description:
                  "We believe the best knowledge shouldn't be locked behind expensive conferences. Virtual summits make expert insights accessible to everyone.",
                icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
              },
              {
                title: "Empower Experts",
                description:
                  "We give health coaches, entrepreneurs, and thought leaders a stage to share their message with thousands of engaged learners.",
                icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
              },
              {
                title: "Create Impact",
                description:
                  "Beyond education, we support anti-trafficking initiatives — because the skills we teach can build a better, more equitable world.",
                icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
              },
            ].map((value) => (
              <div
                key={value.title}
                data-stagger-item
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-tint">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5B1A9E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={value.icon} />
                  </svg>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-brand-purple">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-warm-ivory py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-purple">
              Summit Topics
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-600">
              We host summits across a wide range of industries and interests.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3" data-stagger-group>
            {[
              "Health & Wellness",
              "Business & Marketing",
              "Personal Growth",
              "Nutrition",
              "Mindset",
              "Entrepreneurship",
              "Lifestyle",
              "Holistic Health",
              "Digital Marketing",
              "Financial Freedom",
              "Leadership",
              "Coaching",
            ].map((topic) => (
              <span
                key={topic}
                data-stagger-item
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-purple-muted hover:text-brand-purple"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-purple py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Want to Host a Summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
            Whether you&apos;re a speaker, coach, or entrepreneur — we&apos;ll
            help you create a world-class virtual event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-lime px-8 py-4 font-body text-base font-semibold text-brand-purple transition-all hover:shadow-lg hover:shadow-brand-lime/20"
          >
            Get in Touch
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
