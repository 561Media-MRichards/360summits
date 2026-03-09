"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientDivider from "@/components/GradientDivider";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function AboutContent() {
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
          duration: 2.5 + i * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

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
      <section className="relative overflow-hidden bg-pastel-cream py-24">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-pill-yellow/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-pill-lavender/25 blur-3xl" />
          <div data-float className="absolute top-[20%] right-[6%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[25%] left-[5%] h-2 w-2 rounded-full bg-brand-purple/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
            Our story
          </span>
          <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
            The team behind 50+ virtual summits
          </h1>
          <p data-page-hero="sub" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            We started 360Summits because too many brilliant experts were stuck
            with tiny audiences — and we knew we could change that.
          </p>
        </div>
      </section>

      <GradientDivider variant="brand" />

      {/* Who We Are */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div data-reveal>
              <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
                Who we are
              </span>
              <h2 className="mt-4 mb-6 font-display text-4xl font-bold text-slate-900">
                A production company built for experts
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  360Summits is a full-service virtual summit production company
                  headquartered in Boca Raton, Florida. We exist for one reason:
                  to help experts, coaches, and thought leaders reach thousands
                  of people — without spending months figuring out the logistics.
                </p>
                <p>
                  Our team combines deep experience in digital marketing, web
                  design, email strategy, and live event production. To date,
                  we&apos;ve produced 50+ summits, managed 200+ speakers, and driven
                  over 1M registrations across health, wellness, business,
                  and personal growth industries.
                </p>
                <p>
                  Our mission is simple: give every expert the audience they
                  deserve. When you partner with us, you get a production team
                  that treats your summit like their own.
                </p>
              </div>
            </div>

            <div className="flex justify-center" data-reveal data-reveal-delay="0.15">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-pill-lavender/40 via-transparent to-pill-mint/30 blur-sm" />
                <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl ring-1 ring-slate-900/[0.04]">
                  <Image
                    src="/images/team-collaboration.png"
                    alt="The 360Summits production team collaborating"
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div data-float className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-3 shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["/images/speaker-female.png", "/images/wellness-expert.png", "/images/author-female.png"].map((src, i) => (
                        <div key={i} className="h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                          <Image src={src} alt="" width={32} height={32} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-700">Our Team</span>
                      <div className="text-xs text-slate-400">Boca Raton, FL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-pastel-mint py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Our mission
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              What drives everything we do
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-stagger-group>
            {[
              {
                title: "Amplify Your Reach",
                description: "Your knowledge shouldn't be limited to 1-on-1 clients. Summits put your message in front of thousands of people who need it.",
                emoji: "📖",
                bg: "bg-white",
                highlight: "8–15K avg. registrations",
                pill: "bg-pill-mint",
              },
              {
                title: "Handle the Hard Parts",
                description: "You shouldn't need a marketing degree to launch a summit. We handle the production, tech, promotion, and monetization.",
                emoji: "🎤",
                bg: "bg-white",
                highlight: "50+ summits produced",
                pill: "bg-pill-lavender",
              },
              {
                title: "Build Something Meaningful",
                description: "Every summit creates lasting relationships between speakers and attendees. We build events that become recurring community touchpoints, not one-off promotions.",
                emoji: "❤️",
                bg: "bg-white",
                highlight: "Long-term community building",
                pill: "bg-pill-pink",
              },
            ].map((value) => (
              <div
                key={value.title}
                data-stagger-item
                className={`group relative overflow-hidden rounded-[1.5rem] ${value.bg} p-8 shadow-sm transition-all hover:shadow-lg`}
              >
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{value.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-mint text-2xl shadow-sm" data-emoji>{value.emoji}</div>
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                  <span className={`inline-flex rounded-full ${value.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>{value.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Summit topics
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              We host summits across industries
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3" data-stagger-group>
            {[
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
            ].map((item) => (
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
      </section>

      <GradientDivider variant="cool" />

      {/* Full-width image break */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/strategy-session.png"
          alt="Collaborative summit planning session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Want to host a summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Whether you&apos;re a speaker, coach, or entrepreneur — we&apos;ll
            help you create a world-class virtual event.
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
