"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientDivider from "@/components/GradientDivider";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const painPoints = [
  {
    emoji: "💸",
    title: "Paid ads are eating your margins",
    description:
      "CPMs keep climbing. You're spending more to reach fewer people. And most of those clicks never convert because they don't know or trust you yet.",
  },
  {
    emoji: "👥",
    title: "You have followers, not buyers",
    description:
      "Social media vanity metrics don't pay the bills. You need a pipeline of qualified leads who already see you as the expert — not just another coach in their feed.",
  },
  {
    emoji: "🏆",
    title: "You're one-of-many in a crowded market",
    description:
      "There are thousands of business coaches. The ones who stand out aren't just teaching — they're hosting the conversations. They're the ones on stage, not in the audience.",
  },
  {
    emoji: "⏳",
    title: "Your revenue depends on you showing up",
    description:
      "Webinars, launches, client calls — your income resets every month. You need an asset that generates leads and revenue even when you're not actively promoting.",
  },
];

const process = [
  { step: "01", emoji: "🎯", title: "Map your market position", description: "We identify the exact summit topic that positions you above competitors, attracts your ideal clients, and gives speakers a reason to promote you.", highlight: "Free strategy session" },
  { step: "02", emoji: "🛠️", title: "We build your event machine", description: "High-converting landing pages, automated email sequences, speaker onboarding, affiliate tracking, and sales funnels — all custom-built for your audience.", highlight: "Done in ~3 weeks" },
  { step: "03", emoji: "🚀", title: "We drive 8–15K registrations", description: "JV partners email their lists. Speakers share with their audiences. We run targeted campaigns. Every channel compounds to fill your summit.", highlight: "8–15K avg. registrations" },
  { step: "04", emoji: "💰", title: "Revenue from every angle", description: "All-Access Passes sell during the event. Replay funnels convert after. Upsells, sponsors, and back-end offers maximize every registration.", highlight: "$500K+ generated for clients" },
];

const faqs = [
  {
    q: "How is this different from another webinar funnel?",
    a: "A webinar is you talking to your existing audience. A summit is 20+ speakers all promoting to their audiences — and sending that traffic to you. It's the difference between fishing with a pole and fishing with a net. Plus, the authority boost from hosting can't be replicated with a webinar.",
  },
  {
    q: "I already have a course/program. How does a summit fit in?",
    a: "Perfectly. A summit is the top of your funnel. It fills your list with thousands of qualified leads who've already spent hours learning from you and your speakers. Then your course, coaching program, or mastermind is the natural next step. Many clients use summits as their primary lead gen for high-ticket offers.",
  },
  {
    q: "What's the investment and what ROI can I expect?",
    a: "We'll share pricing on our strategy call — it depends on the scope of your summit. What we can tell you: our clients average $500K+ in combined revenue, and most see positive ROI within 48 hours of launch through All-Access Pass sales alone.",
  },
  {
    q: "I don't have connections to big-name speakers. Is that a problem?",
    a: "Not at all. We've managed 200+ speakers across 50+ summits. We handle recruitment, outreach, and coordination. We know who says yes, who delivers great content, and who actually promotes. You'll have a lineup that makes your competitors jealous.",
  },
];

export default function ForEntrepreneursContent() {
  const mainRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        .to("[data-page-hero='cta']", { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
        .to("[data-page-hero='image']", { y: 0, opacity: 1, duration: 0.9 }, "-=0.5");

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
      {/* Hero */}
      <section className="relative overflow-hidden bg-pastel-cream py-20 lg:py-28">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 -right-28 h-[400px] w-[400px] rounded-full bg-pill-yellow/35 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-lavender/20 blur-3xl" />
          <div data-float className="absolute top-[18%] right-[7%] h-3 w-3 rounded-full bg-yellow-800/20" />
          <div data-float className="absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-brand-purple/25" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
                For business & marketing experts
              </span>
              <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold leading-[1.08] text-slate-900 md:text-6xl">
                Stop competing on ads. Start hosting the conversation.
              </h1>
              <p data-page-hero="sub" className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                We produce done-for-you virtual summits that generate thousands of
                qualified leads, position you as the industry authority, and create
                a revenue engine that works long after the event ends.
              </p>
              <div data-page-hero="cta" className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg">
                  Book a Discovery Call →
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-body text-base font-semibold text-slate-700 transition-all hover:border-slate-300">
                  See How It Works
                </Link>
              </div>
            </div>
            <div data-page-hero="image" className="relative">
              <div className="overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image src="/images/entrepreneur-male.png" alt="Business expert hosting a virtual summit" width={800} height={600} className="h-auto w-full object-cover" priority />
              </div>
              <div data-float className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-cream text-lg">💰</div>
                  <div>
                    <div className="font-display text-xl font-bold text-slate-900">$500K+</div>
                    <div className="text-xs text-slate-400">Generated for clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider variant="lime" />

      {/* Pain Points */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
              The real problem
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              You don&apos;t have a traffic problem. You have a trust problem.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger-group>
            {painPoints.map((pain) => (
              <div key={pain.title} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-slate-50 p-8 transition-all hover:shadow-md">
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.06]">{pain.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm" data-emoji>{pain.emoji}</div>
                  <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{pain.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{pain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What If Bridge */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/strategy-session.png" alt="Business strategy planning session" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            What if your next 8–15K leads already trusted you?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            When you host a summit with 20 industry experts, their audiences see
            you as the connector — the person who brought the best minds together.
            That&apos;s not a lead magnet. That&apos;s a category-defining moment.
            8–15K people register. They spend hours learning from your stage.
            They buy your All-Access Pass. And when you pitch your program afterward,
            they already know your name.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pastel-lavender py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Your unfair advantage
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              We build the machine. You own the results.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger-group>
            {process.map((item) => (
              <div key={item.step} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-cream text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className="inline-flex rounded-full bg-pill-yellow px-3 py-1.5 text-xs font-semibold text-slate-700">{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Proof */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              The numbers
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              What business experts achieve with us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12" data-stagger-group>
            {[
              { metric: "8–15K", label: "Qualified Leads", detail: "Per summit — people who opted in because of your topic, not a giveaway", accent: "text-green-600" },
              { metric: "$500K+", label: "Client Revenue", detail: "Combined revenue generated for our business clients across 50+ summits", accent: "text-purple-light" },
              { metric: "200+", label: "Speakers Managed", detail: "We recruit, onboard, and coordinate — you get the authority without the admin", accent: "text-blue-600" },
            ].map((item) => (
              <div key={item.label} data-stagger-item className="rounded-[1.5rem] bg-pastel-cream p-8 transition-all hover:shadow-md">
                <div className={`font-display text-5xl font-bold ${item.accent}`}>{item.metric}</div>
                <div className="mt-1 font-display text-lg font-bold text-slate-900">{item.label}</div>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm" data-reveal>
            <div className="grid md:grid-cols-5">
              <div className="aspect-[4/3] overflow-hidden md:col-span-2 md:aspect-auto md:h-full">
                <Image src="/images/testimonial-entrepreneur.png" alt="David Chen" width={600} height={450} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:col-span-3 flex flex-col justify-center">
                <blockquote className="mb-6 font-display text-xl leading-relaxed text-slate-900">
                  &ldquo;I spent $40K on Facebook ads last year and got maybe 2,000 leads. My summit cost less and brought in 2,500 leads who already saw me as the authority. The quality difference is night and day.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-pill-yellow px-3 py-1 text-xs font-semibold text-slate-700">David Chen</span>
                  <span className="text-sm text-slate-400">Business Strategist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-pastel-cream py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Common questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Questions business experts ask us
            </h2>
          </div>

          <div className="space-y-3" data-stagger-group>
            {faqs.map((faq, i) => (
              <div key={i} data-stagger-item className="overflow-hidden rounded-[1.25rem] border border-white/60 bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-4 font-display text-lg font-bold text-slate-900">{faq.q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-slate-500">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also For */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">Also built for</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/for-coaches" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Health & Wellness Coaches →
            </Link>
            <Link href="/for-authors" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Authors & Thought Leaders →
            </Link>
          </div>
        </div>
      </section>

      <GradientDivider variant="brand" />

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Your competitors are hosting webinars. You should be hosting summits.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Tell us about your market, your offer, and your goals. We&apos;ll
            map out a summit strategy that generates leads and revenue on autopilot.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg">
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
