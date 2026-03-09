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
    emoji: "📚",
    title: "Your book launch reached hundreds, not thousands",
    description:
      "You put months into writing. The launch week was a flurry of social posts and emails to your small list. Then it was over. The book deserved a bigger audience.",
  },
  {
    emoji: "🎙️",
    title: "Speaking gigs are one-and-done",
    description:
      "You deliver a keynote, get a standing ovation, and then those people go home and forget your name. There's no system capturing that attention into a list you own.",
  },
  {
    emoji: "📱",
    title: "Your social following doesn't convert",
    description:
      "10K followers on Instagram sounds impressive until you realize only 200 see your posts. You're building on rented land — and the landlord keeps changing the rules.",
  },
  {
    emoji: "🔁",
    title: "You need a repeatable audience-building system",
    description:
      "Podcasts, guest posts, and speaking gigs grow your audience slowly. You need a single event that adds thousands of engaged subscribers who actually buy what you create.",
  },
];

const process = [
  { step: "01", emoji: "🎯", title: "Define your summit angle", description: "We identify the topic that aligns with your book, course, or message — and attracts the exact audience who will buy from you afterward.", highlight: "Free strategy session" },
  { step: "02", emoji: "🛠️", title: "We produce the entire event", description: "Landing pages, speaker recruitment, email sequences, tech setup, and promotional assets — all built around your personal brand.", highlight: "Done in ~6 weeks" },
  { step: "03", emoji: "🚀", title: "Your peers become your promoters", description: "Every speaker promotes the summit to their audience. 20 thought leaders each sharing to their lists creates a compounding wave of registrations.", highlight: "20+ JV partners per summit" },
  { step: "04", emoji: "💰", title: "Build an audience that buys", description: "8–15K people register. They watch your content. They buy the All-Access Pass. And when you launch your next book or course, they're already on your list.", highlight: "8–15K avg. registrations" },
];

const faqs = [
  {
    q: "I already have a publisher/agent. How does this fit into my existing strategy?",
    a: "A summit is the perfect complement to traditional publishing. It builds a direct-to-reader email list your publisher can't give you, creates pre-launch buzz for your next book, and generates revenue independently. Several of our clients use summits to build the audience that makes their next book proposal irresistible to publishers.",
  },
  {
    q: "I'm more of a solo expert. Do I need to involve other speakers?",
    a: "That's actually the power move. When you host 15-25 experts, each one promotes the summit to their audience — and sends that traffic to you. It's not about sharing the spotlight; it's about borrowing their audiences to build yours. You're the host. You're the brand. The speakers amplify your reach.",
  },
  {
    q: "How quickly can we do this? I have a book launch coming up.",
    a: "Our average timeline from strategy call to live event is 6 weeks. If you have a launch date in mind, we can reverse-engineer the summit to align perfectly — creating pre-launch buzz and building a list of thousands of buyers before your book even drops.",
  },
  {
    q: "What happens to the audience after the summit?",
    a: "They're on your email list permanently. You own that relationship. Our post-summit sequences nurture them with replay access, All-Access Pass offers, and bridge content to your books, courses, and programs. Most clients see their summit audience become their most engaged and highest-spending segment.",
  },
];

export default function ForAuthorsContent() {
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
      <section className="relative overflow-hidden bg-pastel-lavender py-20 lg:py-28">
        {/* Geometric decorative shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-28 -right-28 h-[400px] w-[400px] rounded-full bg-pill-lavender/35 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-sky/20 blur-3xl" />
          <div data-float className="absolute top-[18%] right-[7%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-blue-800/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
                For authors & thought leaders
              </span>
              <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold leading-[1.08] text-slate-900 md:text-6xl">
                Build the audience your next launch deserves.
              </h1>
              <p data-page-hero="sub" className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                We produce done-for-you virtual summits that give authors and thought
                leaders a built-in audience of thousands — so your next book, course,
                or program launches to people who already know and trust your work.
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
                <Image src="/images/author-female.png" alt="Author and thought leader presenting at a virtual summit" width={800} height={600} className="h-auto w-full object-cover" priority />
              </div>
              <div data-float className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-lavender text-lg">📖</div>
                  <div>
                    <div className="font-display text-xl font-bold text-slate-900">6 weeks</div>
                    <div className="text-xs text-slate-400">From call to live event</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider variant="cool" />

      {/* Pain Points */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
              The challenge
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              You have the credibility. You need the distribution.
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
          <Image src="/images/workspace-flatlay.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            What if your next launch had 8–15K people waiting for it?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
            Imagine hosting a summit where 20 respected peers in your space each
            promote to their audiences — and every registration goes to your email
            list. In one week, you go from unknown to unmissable. When you announce
            your next book, course, or keynote, 8–15K people are already listening.
            Not followers. Subscribers. People who chose to hear from you.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-pastel-pink py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-pink px-4 py-1.5 text-xs font-semibold text-pink-800">
              From idea to audience
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              We produce the summit. You own the audience.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2" data-stagger-group>
            {process.map((item) => (
              <div key={item.step} data-stagger-item className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pastel-lavender text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 font-display text-xs font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  <span className="inline-flex rounded-full bg-pill-lavender px-3 py-1.5 text-xs font-semibold text-slate-700">{item.highlight}</span>
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
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Real outcomes
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              What thought leaders achieve with us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12" data-stagger-group>
            {[
              { metric: "8–15K", label: "New Subscribers", detail: "People who opted in to hear from you — not random followers, but an audience that chose your topic", accent: "text-green-600" },
              { metric: "20+", label: "JV Partners", detail: "Peers in your space who now promote your offers to their lists — a network that keeps giving", accent: "text-purple-light" },
              { metric: "6 wks", label: "To Launch", detail: "From strategy call to live event. We've refined this timeline across 50+ summit productions", accent: "text-blue-600" },
            ].map((item) => (
              <div key={item.label} data-stagger-item className="rounded-[1.5rem] bg-pastel-lavender p-8 transition-all hover:shadow-md">
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
                <Image src="/images/testimonial-author.png" alt="Rachel Torres" width={600} height={450} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 md:col-span-3 flex flex-col justify-center">
                <blockquote className="mb-6 font-display text-xl leading-relaxed text-slate-900">
                  &ldquo;My list grew by 1,800 subscribers in one week. But what surprised me most was the quality — these people are engaged. My open rates are higher than ever and my last course launch did 3x the revenue of the one before.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-pill-lavender px-3 py-1 text-xs font-semibold text-slate-700">Rachel Torres</span>
                  <span className="text-sm text-slate-400">Wellness Author & Speaker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-pastel-lavender py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
              Common questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900">
              Questions authors ask us
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
            <Link href="/for-entrepreneurs" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900">
              Business & Marketing Experts →
            </Link>
          </div>
        </div>
      </section>

      <GradientDivider variant="brand" />

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Your message deserves a bigger stage.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Tell us about your book, your audience, and your vision. We&apos;ll
            show you how a summit can turn your next launch into your biggest one yet.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg">
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
