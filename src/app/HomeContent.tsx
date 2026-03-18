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

const services = [
  { title: "Summit Production", description: "End-to-end virtual event production from concept to post-summit monetization.", bg: "bg-pastel-lavender", pill: "bg-pill-lavender", emoji: "🎬", highlight: "50+ produced", href: "/how-it-works" },
  { title: "Web Design & Funnels", description: "Custom landing pages, registration flows, and high-converting sales funnels.", bg: "bg-pastel-cream", pill: "bg-pill-yellow", emoji: "🖥️", highlight: "Avg. 12% conversion", href: "/how-it-works#build" },
  { title: "Email Marketing", description: "Automated sequences for registration, engagement, and post-summit sales.", bg: "bg-pastel-pink", pill: "bg-pill-pink", emoji: "📧", highlight: "30+ sequences built", href: "/how-it-works#promote" },
  { title: "Speaker & JV Management", description: "Recruit speakers, manage joint ventures, and handle affiliate commissions.", bg: "bg-pastel-mint", pill: "bg-pill-mint", emoji: "🤝", highlight: "200+ speakers managed", href: "/how-it-works#speakers" },
  { title: "Content Strategy", description: "Topic curation, session structure, and speaker prep for maximum impact.", bg: "bg-pastel-sky", pill: "bg-pill-sky", emoji: "🧠", highlight: "Proven frameworks", href: "/how-it-works#strategy" },
  { title: "Monetization", description: "All-Access Passes, replay funnels, upsells, and revenue optimization.", bg: "bg-pastel-lavender", pill: "bg-pill-lavender", emoji: "💰", highlight: "$500K+ generated", href: "/how-it-works#monetize" },
];

const process = [
  { step: "01", title: "Strategy Call", description: "We learn about your expertise, audience, and goals to map out your summit vision.", emoji: "🎯", bg: "bg-pastel-cream", pill: "bg-pill-yellow", highlight: "Free, no obligation" },
  { step: "02", title: "We Build Everything", description: "Landing pages, email sequences, speaker outreach — our team handles every detail.", emoji: "🛠️", bg: "bg-pastel-mint", pill: "bg-pill-mint", highlight: "Done in ~3 weeks" },
  { step: "03", title: "Launch & Promote", description: "Email campaigns, JV partnerships, and social promotion to fill your virtual seats.", emoji: "🚀", bg: "bg-pastel-pink", pill: "bg-pill-pink", highlight: "8–15K avg. registrations" },
  { step: "04", title: "Go Live & Monetize", description: "We manage the event and maximize revenue through passes, funnels, and upsells.", emoji: "💰", bg: "bg-pastel-lavender", pill: "bg-pill-lavender", highlight: "Revenue from day 1" },
];

const testimonials = [
  {
    quote: "360Summits handled everything — the tech, the speakers, the funnels. I just showed up and delivered my content. We had over 2,500 registrations.",
    name: "Sarah Mitchell",
    title: "Health Coach & Author",
    pill: "bg-pill-mint",
    image: "/images/home-testimonial-sarah.png",
  },
  {
    quote: "I'd been wanting to host a summit for years but the logistics were overwhelming. The 360Summits team made it effortless — and we made back our investment in the first 48 hours.",
    name: "David Chen",
    title: "Business Strategist",
    pill: "bg-pill-lavender",
    image: "/images/home-testimonial-david.png",
  },
  {
    quote: "The production quality was incredible. My list grew by 1,800 subscribers in one week and my audience thought I had a full media team behind me.",
    name: "Rachel Torres",
    title: "Wellness Practitioner",
    pill: "bg-pill-pink",
    image: "/images/home-testimonial-rachel.png",
  },
];

export default function HomeContent() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !mainRef.current) return;
      const ctx = mainRef.current;

      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const heroTargets = ctx.querySelectorAll("[data-hero]");
      gsap.set(heroTargets, { y: 30, opacity: 0 });
      heroTl
        .to("[data-hero='eyebrow']", { y: 0, opacity: 1, duration: 0.6 })
        .to("[data-hero='heading']", { y: 0, opacity: 1, duration: 0.8 }, "-=0.35")
        .to("[data-hero='sub']", { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
        .to("[data-hero='cta']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.35")
        .to("[data-hero='image']", { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, "-=0.6");

      // Image starts slightly scaled
      gsap.set("[data-hero='image']", { scale: 0.95 });

      // Stat cards pop in sequentially
      const statCards = ctx.querySelectorAll("[data-hero-stat]");
      if (statCards.length) {
        gsap.set(statCards, { scale: 0.8, opacity: 0, y: 20 });
        heroTl.to(statCards, {
          scale: 1, opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "back.out(1.4)",
        }, "-=0.4");
      }

      // Highlight word shimmer
      const highlight = ctx.querySelector("[data-hero-highlight]");
      if (highlight) {
        heroTl.fromTo(highlight,
          { backgroundSize: "0% 100%" },
          { backgroundSize: "100% 100%", duration: 0.8, ease: "power2.inOut" },
          "-=1.2"
        );
      }

      // Floating decorative elements
      ctx.querySelectorAll("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -12 : 12,
          rotation: i % 2 === 0 ? 5 : -5,
          duration: 2.5 + i * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Image parallax on scroll
      ctx.querySelectorAll("[data-parallax]").forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.15");
        gsap.to(el, {
          yPercent: -10 * speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Scroll reveals
      ctx.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat((el as HTMLElement).dataset.revealDelay || "0");
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0, opacity: 1, duration: 0.8, delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
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
            gsap.to(batch, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12 });
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
          val: target, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          onUpdate() { el.textContent = `${Math.round(obj.val).toLocaleString()}${suffix}`; },
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef}>
      {/* Hero — Split layout with image */}
      <section className="relative overflow-hidden bg-pastel-cream pt-28 pb-20">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-pill-lavender/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-pill-mint/25 blur-3xl" />
          <div data-float className="absolute top-[18%] right-[5%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[30%] left-[3%] h-2 w-2 rounded-full bg-brand-purple/30" />
          <div data-float className="absolute top-[60%] right-[12%] h-2 w-2 rounded-full bg-pill-pink/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — Copy */}
            <div className="pt-4 lg:pt-8">
              <div data-hero="eyebrow" className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Limited spots for 2026 summit production
              </div>

              <h1 data-hero="heading" className="mb-8 font-display text-[2.75rem] font-bold leading-[1.08] text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                Grow your{" "}
                <span
                  data-hero-highlight
                  className="relative inline-block"
                  style={{ backgroundImage: "linear-gradient(120deg, #E8DEFF 0%, #E8DEFF 100%)", backgroundRepeat: "no-repeat", backgroundPosition: "0 88%", backgroundSize: "100% 0.3em" }}
                >audience</span>{" "}
                by thousands with one summit
              </h1>

              <p data-hero="sub" className="mb-10 max-w-lg text-lg leading-relaxed text-slate-500">
                We produce done-for-you virtual summits for experts, coaches,
                and thought leaders — so you can focus on your content, not
                logistics, tech, or launch stress.
              </p>

              <div data-hero="cta" className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/25 hover:-translate-y-0.5"
                >
                  Book a Discovery Call →
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white/80 px-8 py-4 font-body text-base font-semibold text-slate-700 backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm"
                >
                  See Our Process
                </Link>
              </div>

              {/* Trust bar */}
              <div data-hero="cta" className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["/images/speaker-female.png", "/images/entrepreneur-male.png", "/images/author-female.png"].map((src, i) => (
                    <div key={i} className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm">
                      <Image src={src} alt="" width={36} height={36} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-slate-600">200+ speakers</span> have trusted us with their summits
                </p>
              </div>
            </div>

            {/* Right — Hero image composition */}
            <div data-hero="image" className="relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Background accent shape behind image */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pill-lavender/50 via-transparent to-pill-mint/40 blur-sm" />

                {/* Main image */}
                <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl ring-1 ring-slate-900/[0.04]">
                  <Image
                    src="/images/speaker-female.png"
                    alt="Expert speaker presenting at a virtual summit"
                    width={800}
                    height={600}
                    className="h-auto w-full object-cover"
                    priority
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating stat cards */}
                <div data-hero-stat data-float className="absolute -bottom-5 -left-5 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pastel-mint text-lg" data-emoji>🎤</div>
                    <div>
                      <div className="font-display text-2xl font-bold text-slate-900">8–15K</div>
                      <div className="text-xs font-medium text-slate-400">Avg. registrations</div>
                    </div>
                  </div>
                </div>

                <div data-hero-stat data-float className="absolute -top-3 -right-3 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pastel-lavender text-lg" data-emoji>⚡</div>
                    <div>
                      <div className="font-display text-2xl font-bold text-slate-900">50+</div>
                      <div className="text-xs font-medium text-slate-400">Summits produced</div>
                    </div>
                  </div>
                </div>

                <div data-hero-stat className="absolute -bottom-3 right-8 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pastel-pink text-lg" data-emoji>💰</div>
                    <div>
                      <div className="font-display text-2xl font-bold text-slate-900">$500K+</div>
                      <div className="text-xs font-medium text-slate-400">Revenue generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Soft gradient bleed into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Logos / Social proof strip */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4" data-stagger-group>
            {[
              { value: 50, suffix: "+", label: "Summits Produced" },
              { value: 200, suffix: "+", label: "Speakers Managed" },
              { value: 50000, suffix: "+", label: "Registrations Driven" },
              { value: 95, suffix: "%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} data-stagger-item className="text-center">
                <div
                  data-count-target={stat.value}
                  data-count-suffix={stat.suffix}
                  className="font-display text-3xl font-bold text-slate-900 md:text-4xl"
                >
                  0{stat.suffix}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Logo Strip */}
      <section className="relative bg-pastel-cream py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Summits & events we&apos;ve produced
          </p>
        </div>

        {/* Scrolling logo marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-pastel-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-pastel-cream to-transparent" />
          <div className="flex animate-marquee items-center gap-12">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0 items-center gap-12">
                {Array.from({ length: 17 }, (_, i) => (
                  <div key={`${setIdx}-${i}`} className="flex h-14 shrink-0 items-center">
                    <Image
                      src={`/images/past-events/event-${String(i + 1).padStart(2, "0")}.png`}
                      alt="Past summit event"
                      width={160}
                      height={56}
                      className="h-10 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-14"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Review badges */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4" data-stagger-group>
            {[
              { platform: "Google", rating: "4.9", reviews: "47 reviews", stars: 5 },
              { platform: "Trustpilot", rating: "4.8", reviews: "32 reviews", stars: 5 },
              { platform: "Facebook", rating: "5.0", reviews: "28 reviews", stars: 5 },
            ].map((r) => (
              <div
                key={r.platform}
                data-stagger-item
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900">{r.rating}</span>
                  <span className="ml-1 text-slate-400">on {r.platform}</span>
                </div>
                <span className="text-xs text-slate-400">({r.reviews})</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Who It's For — Image cards */}
      <section className="relative bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Who it&apos;s for
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Built for experts who are done playing small
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-stagger-group>
            {[
              {
                title: "Health & Wellness Coaches",
                description: "Turn your protocols into a multi-day event that builds your email list by thousands of engaged subscribers.",
                bg: "bg-pastel-mint",
                image: "/images/wellness-expert.png",
                href: "/for-coaches",
              },
              {
                title: "Business & Marketing Experts",
                description: "Go from one-of-many to the host everyone watched. Build authority and a pipeline of qualified leads in one event.",
                bg: "bg-pastel-cream",
                image: "/images/entrepreneur-male.png",
                href: "/for-entrepreneurs",
              },
              {
                title: "Authors & Thought Leaders",
                description: "Give your next launch a built-in audience of thousands. A summit puts your message in front of the right people.",
                bg: "bg-pastel-lavender",
                image: "/images/author-female.png",
                href: "/for-authors",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                data-stagger-item
                className={`group overflow-hidden rounded-[1.5rem] ${item.bg} transition-all hover:shadow-lg`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                    See how it works →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* Production showcase — Full width image + overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/production-setup.png"
            alt="Professional summit production studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div data-reveal>
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
                Professional production
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                This isn&apos;t a DIY summit kit. It&apos;s a full production team.
              </h2>
              <p className="mt-6 max-w-lg text-lg text-white/60">
                We produce broadcast-quality virtual events with professional
                graphics, coordinated speaker schedules, and a seamless attendee
                experience that makes you look like a media company.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-stagger-group>
              {[
                { num: "8–15K", label: "Avg. Registrations" },
                { num: "6 wks", label: "Launch Timeline" },
                { num: "200+", label: "Speakers Coordinated" },
                { num: "Day 1", label: "Revenue Starts" },
              ].map((item) => (
                <div key={item.label} data-stagger-item className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-sm">
                  <div className="font-display text-2xl font-bold text-white">{item.num}</div>
                  <div className="mt-1 text-xs text-white/60">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work — Process */}
      <section className="relative bg-pastel-lavender py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/15 to-transparent" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <div data-reveal>
                <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
                  Our process
                </span>
                <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
                  How we bring your summit to life
                </h2>
                <p className="mt-4 max-w-lg text-lg text-slate-500">
                  From first call to final replay sale — we handle every detail.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2" data-stagger-group>
                {process.map((item) => (
                  <div
                    key={item.step}
                    data-stagger-item
                    className={`group relative overflow-hidden rounded-[1.5rem] ${item.bg} p-6 transition-all hover:shadow-lg`}
                  >
                    {/* Background watermark */}
                    <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">
                      {item.emoji}
                    </span>

                    <div className="relative z-10">
                      {/* Icon + step number */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>
                          {item.emoji}
                        </div>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="mb-2 font-display text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>

                      <span className={`inline-flex rounded-full ${item.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process image */}
            <div className="sticky top-28" data-reveal data-reveal-delay="0.2">
              <div className="overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image
                  src="/images/workspace-flatlay.png"
                  alt="Modern workspace with summit planning materials"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div data-float className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Ready in 6 weeks</div>
                    <div className="text-xs text-slate-400">Average launch time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Full service
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Everything you need, done for you
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              You bring the expertise. We bring the production team, tech stack,
              and marketing engine.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                data-stagger-item
                className={`group relative overflow-hidden rounded-[1.5rem] ${service.bg} p-8 transition-all hover:shadow-lg ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Large background emoji */}
                <span className="pointer-events-none absolute -right-4 -bottom-4 text-[7rem] leading-none opacity-[0.08] transition-transform duration-500 group-hover:scale-110">
                  {service.emoji}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>
                    {service.emoji}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Proof pill + arrow */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex rounded-full ${service.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>
                      {service.highlight}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Spotlight — Before/After style proof */}
      <section className="bg-pastel-mint py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Client results
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              What happens after one summit
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              These are real outcomes from clients who let us produce their events.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-stagger-group>
            {[
              {
                metric: "3,200+",
                label: "New Subscribers",
                context: "Health & Wellness Summit",
                detail: "From a standing start to a 3,200-person email list in 3 days. Dr. Walsh now has an audience she can launch to repeatedly.",
                bg: "bg-white",
                accent: "text-green-600",
              },
              {
                metric: "$42K",
                label: "Revenue Generated",
                context: "Entrepreneur Mastery Summit",
                detail: "All-Access Pass sales, sponsor deals, and upsells combined. David made back his investment in the first 48 hours.",
                bg: "bg-white",
                accent: "text-purple-light",
              },
              {
                metric: "20",
                label: "JV Partners Gained",
                context: "Mindset & Meditation Summit",
                detail: "Every speaker became a promotional partner. Rachel now has 20 people who email their lists about her offers — for free.",
                bg: "bg-white",
                accent: "text-blue-600",
              },
            ].map((item) => (
              <div
                key={item.label}
                data-stagger-item
                className={`rounded-[1.5rem] ${item.bg} p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md`}
              >
                <div className={`font-display text-5xl font-bold ${item.accent}`}>
                  {item.metric}
                </div>
                <div className="mt-1 font-display text-lg font-bold text-slate-900">
                  {item.label}
                </div>
                <div className="mt-1 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {item.context}
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — With photos */}
      <section className="relative bg-pastel-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              In their words
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Hear from the experts we&apos;ve worked with
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3" data-stagger-group>
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-stagger-item
                className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <blockquote className="mb-5 text-sm leading-relaxed text-slate-600">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex rounded-full ${t.pill} px-3 py-1 text-xs font-semibold text-slate-700`}>
                      {t.name}
                    </span>
                    <span className="text-xs text-slate-400">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-16 rounded-[1.25rem] bg-white border border-slate-100 p-8 shadow-sm" data-reveal>
            <div className="grid gap-8 md:grid-cols-4 items-center">
              <div className="md:col-span-1">
                <div className="font-display text-2xl font-bold text-slate-900">
                  Trusted by 50+ experts
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  across health, business, and personal growth
                </p>
              </div>
              <div className="md:col-span-3 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { stat: "95%", label: "Client satisfaction rate" },
                  { stat: "48 hrs", label: "Average time to ROI" },
                  { stat: "6 weeks", label: "From call to live event" },
                  { stat: "8–15K", label: "Avg. registrations per summit" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-slate-900">{item.stat}</div>
                    <div className="mt-0.5 text-xs text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* CTA — With background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team-discussion.png"
            alt="Team collaborating on summit strategy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
          <span data-float className="pointer-events-none absolute top-8 left-[15%] text-3xl opacity-60">✨</span>
          <span data-float className="pointer-events-none absolute bottom-8 right-[15%] text-3xl opacity-60">🎉</span>

          <div data-reveal>
            <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
              You have the expertise. Let&apos;s build the event.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
              Tell us about your audience, your topic, and your goals. We&apos;ll
              tell you exactly how we&apos;d bring your summit to life.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg"
              >
                Book a Discovery Call →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
