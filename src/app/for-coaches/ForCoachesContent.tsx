"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
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
    emoji: "😤",
    title: "You post every day and the algorithm buries it",
    description:
      "You're creating reels, carousels, and stories — but your reach keeps shrinking. The people who need your protocols the most never see them.",
  },
  {
    emoji: "🔄",
    title: "You're stuck trading time for money",
    description:
      "One-on-one coaching fills your calendar but caps your income. You know you could help thousands, not dozens — but there's no scalable channel.",
  },
  {
    emoji: "🤷",
    title: "You've thought about a summit but the logistics are overwhelming",
    description:
      "Speaker outreach, landing pages, email sequences, tech setup, promotion — you'd need to pause your practice for months to figure it all out.",
  },
  {
    emoji: "📉",
    title: "Your email list is growing at a crawl",
    description:
      "Lead magnets and opt-ins bring in a trickle. You need thousands of engaged subscribers who actually want to hear from you — not just freebie seekers.",
  },
];

const process = [
  { step: "01", emoji: "🎯", title: "Tell us your vision", description: "We hop on a call to learn about your expertise, your ideal client, and what topics light you up. We map out your summit theme and speaker strategy.", highlight: "Free, no obligation" },
  { step: "02", emoji: "🛠️", title: "We build your entire summit", description: "Landing pages, registration flows, email sequences, speaker coordination, affiliate tracking — our team handles every technical detail.", highlight: "Done in ~3 weeks" },
  { step: "03", emoji: "🚀", title: "We fill your virtual seats", description: "Email campaigns, JV partner promotions, and social content drive registrations. Your speakers promote to their audiences too — that's how we hit 8–15K.", highlight: "8–15K avg. registrations" },
  { step: "04", emoji: "💰", title: "You show up, teach, and earn", description: "We manage the live event, Q&A, and tech. You deliver your content. All-Access Pass sales and replay funnels generate revenue from day one.", highlight: "ROI in 48 hours" },
];

const faqs = [
  {
    q: "I don't have a big audience yet. Can this still work?",
    a: "That's exactly why summits work so well. Your speakers and JV partners each promote to their own lists. You're borrowing their audiences to build yours. Most of our health coaches started with lists under 500 people.",
  },
  {
    q: "How much time will this take from my practice?",
    a: "About 2-3 hours per week during the build phase. We handle the production, tech, speaker outreach, and promotion. You focus on choosing your topic and delivering your content during the live event.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Our average summit drives 8–15K registrations. For health and wellness summits specifically, we've seen list growth of 1,800 to 3,200 subscribers and $28K-$42K in All-Access Pass revenue. Most clients see positive ROI within 48 hours of launch.",
  },
  {
    q: "What if I've never hosted an event before?",
    a: "Most of our clients haven't. That's the whole point — we're the production team. We've produced 50+ summits and know exactly what works. You bring the expertise, we bring everything else.",
  },
];

export default function ForCoachesContent() {
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
      <section className="relative overflow-hidden bg-pastel-mint py-20 lg:py-28">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 -right-28 h-[400px] w-[400px] rounded-full bg-pill-mint/35 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-yellow/20 blur-3xl" />
          <div data-float className="absolute top-[18%] right-[7%] h-3 w-3 rounded-full bg-green-800/20" />
          <div data-float className="absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-pill-mint/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
                For health & wellness coaches
              </span>
              <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold leading-[1.08] text-slate-900 md:text-6xl">
                Your protocols could help thousands. Let&apos;s make that happen.
              </h1>
              <p data-page-hero="sub" className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                We produce done-for-you virtual summits that turn your health
                expertise into a multi-day event — building your email list by
                thousands and positioning you as the go-to authority in your niche.
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
                <Image src="/images/wellness-expert.png" alt="Health coach presenting at a virtual wellness summit" width={800} height={600} className="h-auto w-full object-cover" priority />
              </div>
              <div data-float className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-mint text-lg">🌱</div>
                  <div>
                    <div className="font-display text-xl font-bold text-slate-900">8–15K</div>
                    <div className="text-xs text-slate-400">Avg. registrations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Pain Points */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
              Sound familiar?
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              You have the expertise. You just need the audience.
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
          <Image src="/images/workspace-planning.png" alt="Summit planning workspace" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            What if you could reach 8–15K people in a single week?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            Imagine hosting a 3-day virtual summit where 25 wellness experts
            share their best work — and every one of them promotes it to their
            audience. Your email list grows by thousands. You sell All-Access
            Passes. You build partnerships that keep working long after the event
            ends. And you didn&apos;t have to build a single landing page.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pastel-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Your path to 8–15K registrations
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              We handle everything. You show up and teach.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger-group>
            {process.map((item) => (
              <div key={item.step} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-lg`}>
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-mint text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className="inline-flex rounded-full bg-pill-mint px-3 py-1.5 text-xs font-semibold text-slate-700">{item.highlight}</span>
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
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Real results
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              What wellness coaches achieve with us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12" data-stagger-group>
            {[
              { metric: "3,200+", label: "New Subscribers", detail: "Added to a health coach's list in a single 3-day summit", accent: "text-green-600" },
              { metric: "$42K", label: "Revenue Generated", detail: "From All-Access Pass sales, sponsors, and upsell sequences", accent: "text-purple-light" },
              { metric: "25", label: "JV Partners", detail: "Wellness experts who now promote each other's offers year-round", accent: "text-blue-600" },
            ].map((item) => (
              <div key={item.label} data-stagger-item className="rounded-[1.5rem] bg-pastel-mint p-8 transition-all hover:shadow-md">
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
                <Image src="/images/testimonial-coach.png" alt="Dr. Karen Walsh" width={600} height={450} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:col-span-3 flex flex-col justify-center">
                <blockquote className="mb-6 font-display text-xl leading-relaxed text-slate-900">
                  &ldquo;I had 400 people on my email list before the summit. Three days later, I had 3,600. The quality of subscribers is incredible — these are people who genuinely care about functional nutrition.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-pill-mint px-3 py-1 text-xs font-semibold text-slate-700">Dr. Karen Walsh</span>
                  <span className="text-sm text-slate-400">Functional Nutritionist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-pastel-mint py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Common questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Questions wellness coaches ask us
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
      <section className="relative bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">Also built for</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/for-entrepreneurs" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Business & Marketing Experts →
            </Link>
            <Link href="/for-authors" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Authors & Thought Leaders →
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-900/20" />
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Your audience is waiting. Let&apos;s reach them.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Tell us about your expertise, your ideal client, and your goals. We&apos;ll
            show you exactly how a summit can grow your wellness practice.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg">
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
