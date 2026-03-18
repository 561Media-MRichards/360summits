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

const painPoints = [
  {
    emoji: "📉",
    title: "Impressions without intent",
    description: "Banner ads and sponsored posts reach millions of scrollers. But how many actually care about what you sell? CPMs keep climbing. Conversions stay flat.",
  },
  {
    emoji: "🎪",
    title: "Trade show fatigue",
    description: "You flew the team out, set up the booth, handed out 500 pens. Three weeks later, you have a box of business cards and no pipeline to show for it.",
  },
  {
    emoji: "📱",
    title: "Influencer roulette",
    description: "The post went live, the likes rolled in, and then... nothing. Followers don't equal buyers. Brand awareness without brand trust is just noise.",
  },
  {
    emoji: "🔇",
    title: "One-and-done exposure",
    description: "Most sponsorships end when the event does. No follow-up channel. No email access. No ongoing relationship with the audience you just paid to reach.",
  },
];

const benefits = [
  {
    emoji: "🎤",
    title: "Speaking slots, not logo placements",
    description: "Your team presents to the audience as a featured expert — not a sidebar ad. Sponsors who teach become sponsors who are trusted.",
    highlight: "Authority positioning",
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
  },
  {
    emoji: "📧",
    title: "Email list access",
    description: "Registrants opt in knowing sponsors will follow up. You get direct access to an engaged email list — not a rented audience that disappears after the event.",
    highlight: "40%+ avg. open rates",
    bg: "bg-pastel-mint",
    pill: "bg-pill-mint",
  },
  {
    emoji: "🎯",
    title: "Pre-qualified by interest",
    description: "A health summit attracts health-focused buyers. A business summit attracts entrepreneurs. Your brand shows up where your ideal customer already is.",
    highlight: "Built-in audience fit",
    bg: "bg-pastel-lavender",
    pill: "bg-pill-lavender",
  },
  {
    emoji: "🖥️",
    title: "Branded content integration",
    description: "Product showcases, sponsored sessions, branded resource pages, and replay access. Your brand is woven into the event — not bolted onto it.",
    highlight: "Multi-touchpoint exposure",
    bg: "bg-pastel-pink",
    pill: "bg-pill-pink",
  },
  {
    emoji: "💻",
    title: "Zero logistics overhead",
    description: "No booths, no shipping, no travel budget. Virtual summits mean your entire investment goes toward audience exposure — not event logistics.",
    highlight: "100% digital ROI",
    bg: "bg-pastel-sky",
    pill: "bg-pill-sky",
  },
  {
    emoji: "📊",
    title: "Post-summit reporting",
    description: "Registration numbers, email engagement, session attendance, and conversion data. You know exactly what your sponsorship delivered.",
    highlight: "Full transparency",
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
  },
];

const tiers = [
  {
    name: "Silver Sponsor",
    price: "$10K",
    description: "Brand visibility across the summit with targeted audience access.",
    features: [
      "Logo on summit landing page and emails",
      "Branded resource page in the summit hub",
      "Access to registrant email list (opt-in)",
      "Social media mentions (3+ posts)",
      "Post-summit performance report",
    ],
    bg: "bg-pastel-sky",
    pill: "bg-pill-sky",
    accent: "border-blue-800/20",
  },
  {
    name: "Gold Sponsor",
    price: "$25K",
    popular: true,
    description: "Deep integration with a dedicated speaking slot and premium placement.",
    features: [
      "Everything in Silver, plus:",
      "15-minute sponsored speaking session",
      "Premium logo placement (above the fold)",
      "Dedicated sponsor email to full list",
      "Product showcase or demo slot",
      "Priority placement in replay access",
    ],
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
    accent: "border-yellow-800/20",
  },
  {
    name: "Presenting Sponsor",
    price: "$50K+",
    description: "Title-level partnership with maximum exposure and exclusivity.",
    features: [
      "Everything in Gold, plus:",
      "\"Presented by [Your Brand]\" title billing",
      "30-minute keynote or workshop slot",
      "Exclusive category sponsorship (no competitors)",
      "Co-branded landing page and email sequence",
      "Custom post-summit nurture campaign",
      "Direct strategy session with summit host",
    ],
    bg: "bg-pastel-lavender",
    pill: "bg-pill-lavender",
    accent: "border-purple-light/20",
  },
];

const audiences = [
  { label: "Health & Wellness Coaches", bg: "bg-pill-mint", text: "text-green-800" },
  { label: "Functional Nutritionists", bg: "bg-pill-mint", text: "text-green-800" },
  { label: "Business Coaches", bg: "bg-pill-yellow", text: "text-yellow-800" },
  { label: "Course Creators", bg: "bg-pill-yellow", text: "text-yellow-800" },
  { label: "Entrepreneurs", bg: "bg-pill-lavender", text: "text-purple-light" },
  { label: "Personal Growth Seekers", bg: "bg-pill-lavender", text: "text-purple-light" },
  { label: "Fitness Professionals", bg: "bg-pill-pink", text: "text-pink-800" },
  { label: "Holistic Practitioners", bg: "bg-pill-pink", text: "text-pink-800" },
  { label: "Authors & Speakers", bg: "bg-pill-sky", text: "text-blue-800" },
  { label: "Marketing Consultants", bg: "bg-pill-sky", text: "text-blue-800" },
];

const steps = [
  { step: "01", emoji: "🎯", title: "We match you to the right summit", description: "Tell us your target audience. We identify upcoming summits where your ideal buyer is already registered. No guesswork — strategic alignment from day one.", bg: "bg-pastel-cream", pill: "bg-pill-yellow" },
  { step: "02", emoji: "🤝", title: "We design your integration", description: "Choose your tier and we build your presence into the event — speaking slot, branded content, email sequences, and product showcases. All production handled by our team.", bg: "bg-pastel-mint", pill: "bg-pill-mint" },
  { step: "03", emoji: "🚀", title: "Your brand goes live to 8–15K", description: "The summit launches and your brand is front and center with a pre-qualified audience. Registrants engage with your content, visit your showcase, and join your list.", bg: "bg-pastel-lavender", pill: "bg-pill-lavender" },
  { step: "04", emoji: "📊", title: "You get the numbers", description: "Post-summit, we deliver a full performance report: registrations, email opens, session attendance, clicks, and conversions. Clear data on what your investment delivered.", bg: "bg-pastel-pink", pill: "bg-pill-pink" },
];

const faqs = [
  {
    q: "How do you match sponsors with the right summit?",
    a: "We start with your target customer profile. If you sell supplements, we place you in a health or nutrition summit. If you offer business software, we match you with an entrepreneurship event. Every match is based on audience alignment, not availability.",
  },
  {
    q: "What kind of ROI should we expect?",
    a: "It varies by tier and industry, but sponsors typically see 40%+ email open rates from summit lists, direct product inquiries during events, and ongoing pipeline from email access post-summit. We provide full reporting so you can measure every metric that matters.",
  },
  {
    q: "Is the audience actually engaged, or just registered?",
    a: "Summit registrants actively opted in for a multi-day educational event. They attend sessions, ask questions in Q&A, and open emails at 40%+ rates. These aren't passive followers — they signed up to learn, which means they're primed to buy.",
  },
  {
    q: "What does 'email list access' mean exactly?",
    a: "Registrants opt in knowing that summit sponsors will follow up. You receive the list of opted-in registrants and can add them to your email marketing. This isn't a one-time blast — it's an ongoing relationship channel.",
  },
  {
    q: "Can we get exclusivity in our product category?",
    a: "Yes. Presenting Sponsors receive exclusive category rights — meaning no competing brand sponsors the same summit. Gold and Silver tiers are subject to availability and we limit the total number of sponsors per event.",
  },
  {
    q: "How far in advance should we plan?",
    a: "We recommend 6-8 weeks before a summit launch for full integration. However, we produce summits year-round, so there's usually an upcoming event that fits your timeline. Book a call and we'll show you the calendar.",
  },
];

export default function SponsorshipsContent() {
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
        .to("[data-page-hero='cta']", { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

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
      <section className="relative overflow-hidden bg-pastel-cream py-24 lg:py-28">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-pill-yellow/35 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-pill-mint/20 blur-3xl" />
          <div data-float className="absolute top-[15%] right-[7%] h-3 w-3 rounded-full bg-yellow-800/20" />
          <div data-float className="absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-brand-purple/25" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
            Sponsorship opportunities
          </span>
          <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
            Put your brand where your buyers already are
          </h1>
          <p data-page-hero="sub" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Sponsor a virtual summit and reach 8–15K pre-qualified registrants
            in health, wellness, and business — with speaking slots, email access,
            and branded content. Not a logo on a lanyard.
          </p>
          <div data-page-hero="cta" className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
            >
              Explore Sponsorship Options →
            </Link>
            <span className="text-sm text-slate-400">Packages from $10K</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4" data-stagger-group>
            {[
              { value: "8–15K", label: "Avg. registrants per summit" },
              { value: "40%+", label: "Avg. email open rate" },
              { value: "50+", label: "Summits produced" },
              { value: "1M+", label: "Total audience reached" },
            ].map((stat) => (
              <div key={stat.label} data-stagger-item className="text-center">
                <div className="font-display text-3xl font-bold text-slate-900 md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
              The sponsorship problem
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Most sponsorships trade dollars for impressions. You need dollars for relationships.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger-group>
            {painPoints.map((item) => (
              <div key={item.title} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-slate-50 p-7 transition-all hover:shadow-md">
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[5rem] leading-none opacity-[0.06] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
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

      {/* What sponsors get */}
      <section className="bg-pastel-mint py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              What you get
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              This is not a logo placement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Summit sponsorships give you multi-touchpoint access to a pre-qualified audience — from the stage to their inbox.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger-group>
            {benefits.map((item) => (
              <div key={item.title} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] ${item.bg} p-7 transition-all hover:shadow-lg`}>
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className={`inline-flex rounded-full ${item.pill} px-3 py-1.5 text-xs font-semibold text-slate-700`}>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Sponsorship tiers
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Choose your level of integration
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Every tier includes audience access and performance reporting. Higher tiers add deeper brand integration and exclusivity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3" data-stagger-group>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                data-stagger-item
                className={`group relative overflow-hidden rounded-[1.5rem] ${tier.bg} border-2 ${tier.accent} p-8 transition-all hover:shadow-lg ${tier.popular ? "ring-2 ring-slate-900 ring-offset-2" : ""}`}
              >
                {tier.popular && (
                  <span className="absolute top-4 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
                )}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-slate-900">{tier.name}</h3>
                  <div className="mt-2 mb-4">
                    <span className="font-display text-4xl font-bold text-slate-900">{tier.price}</span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500">{tier.description}</p>
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-xs shadow-sm">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-semibold transition-all ${
                      tier.popular
                        ? "bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md"
                        : "border-2 border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400" data-reveal>
            Custom packages available. Need something specific? <Link href="/contact" className="text-purple-light hover:underline">Let&apos;s talk</Link>.
          </p>
        </div>
      </section>

      {/* Audience breakdown */}
      <section className="bg-pastel-lavender py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Your audience
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Who attends these summits
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Our summits attract action-takers: coaches, practitioners, and entrepreneurs who invest in their growth and their businesses.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3" data-stagger-group>
            {audiences.map((item) => (
              <span key={item.label} data-stagger-item className={`rounded-full ${item.bg} ${item.text} px-5 py-2.5 text-sm font-semibold transition-all hover:shadow-sm`}>
                {item.label}
              </span>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-3" data-stagger-group>
            {[
              { emoji: "👩‍💼", stat: "78%", label: "are business owners or self-employed", bg: "bg-white" },
              { emoji: "💳", stat: "65%", label: "have purchased online courses or coaching", bg: "bg-white" },
              { emoji: "📱", stat: "90%+", label: "engage with post-summit email follow-ups", bg: "bg-white" },
            ].map((item) => (
              <div key={item.label} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-white p-7 shadow-sm transition-all hover:shadow-md">
                <span className="pointer-events-none absolute -right-2 -bottom-2 text-[5rem] leading-none opacity-[0.06]">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-lavender text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                  <div className="font-display text-3xl font-bold text-slate-900">{item.stat}</div>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              How it works
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              From match to metrics in four steps
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-stagger-group>
            {steps.map((item) => (
              <div key={item.step} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] ${item.bg} p-7 transition-all hover:shadow-lg`}>
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-pastel-cream py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              The difference
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Summit sponsorship vs. the alternatives
            </h2>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm" data-reveal>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="px-6 py-4 font-display font-bold text-slate-900"></th>
                  <th className="px-6 py-4 font-display font-bold text-slate-400">Paid Ads</th>
                  <th className="px-6 py-4 font-display font-bold text-slate-400">Trade Shows</th>
                  <th className="px-6 py-4 font-display font-bold text-purple-light">Summit Sponsorship</th>
                </tr>
              </thead>
              <tbody className="text-slate-500">
                {[
                  { label: "Audience intent", ads: "Low", trade: "Medium", summit: "High" },
                  { label: "Email list access", ads: "No", trade: "No", summit: "Yes" },
                  { label: "Speaking opportunity", ads: "No", trade: "Sometimes", summit: "Yes" },
                  { label: "Travel/logistics cost", ads: "None", trade: "$5K-$20K+", summit: "None" },
                  { label: "Post-event relationship", ads: "Retargeting only", trade: "Business cards", summit: "Email list ownership" },
                  { label: "Performance reporting", ads: "Impressions/clicks", trade: "Foot traffic guess", summit: "Full funnel data" },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-slate-50 last:border-b-0">
                    <td className="px-6 py-3.5 font-medium text-slate-700">{row.label}</td>
                    <td className="px-6 py-3.5">{row.ads}</td>
                    <td className="px-6 py-3.5">{row.trade}</td>
                    <td className="px-6 py-3.5 font-semibold text-slate-900">{row.summit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-sky px-4 py-1.5 text-xs font-semibold text-blue-800">
              Common questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Sponsorship FAQ
            </h2>
          </div>

          <div className="space-y-4" data-stagger-group>
            {faqs.map((faq) => (
              <div key={faq.q} data-stagger-item className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-sm">
                <h3 className="mb-2 font-display text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Your ideal customer is attending our next summit
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Tell us who you&apos;re trying to reach. We&apos;ll show you exactly which
            upcoming summits match your audience — and how to get in front of them.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              Explore Sponsorship Options →
            </Link>
            <span className="text-sm text-white/40">Packages from $10K</span>
          </div>
        </div>
      </section>
    </main>
  );
}
