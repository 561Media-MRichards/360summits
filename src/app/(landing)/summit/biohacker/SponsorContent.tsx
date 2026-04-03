"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import type { FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountdownTimer } from "@/components/CountdownTimer";

gsap.registerPlugin(ScrollTrigger);

const EVENT_DATE = "2026-07-14T09:00:00-04:00";

const speakers = [
  // A-tier
  { name: "Dave Asprey", title: "Father of Biohacking", slug: "dave-asprey" },
  { name: "Dr. Steven Gundry", title: "The Plant Paradox Author", slug: "steven-gundry" },
  { name: "Vishen Lakhiani", title: "Mindvalley Founder", slug: "vishen-lakhiani" },
  { name: "Naveen Jain", title: "Viome Founder", slug: "naveen-jain" },
  { name: "Cynthia Thurlow", title: "Intermittent Fasting Expert", slug: "cynthia-thurlow" },
  { name: "Patrick Porter", title: "BrainTap Founder", slug: "patrick-porter" },
  { name: "Dr. Daniel Pompa", title: "Cellular Healing Specialist", slug: "daniel-pompa" },
  { name: "Dr. John Jaquish", title: "X3 Bar Inventor", slug: "john-jaquish" },
  { name: "Jay Campbell", title: "Hormone Optimization Author", slug: "jay-campbell" },
  { name: "Kashif Khan", title: "The DNA Company Founder", slug: "kashif-khan" },
  { name: "Ben Azadi", title: "Keto Kamp Founder", slug: "ben-azadi" },
  { name: "James Lawrence", title: "Iron Cowboy", slug: "james-lawrence" },
  { name: "Zach Bitter", title: "Ultramarathon World Record Holder", slug: "zach-bitter" },
  { name: "Susan Bratton", title: "Sexual Biohacking Expert", slug: "susan-bratton" },
  { name: "Catharine Arnston", title: "ENERGYbits Founder", slug: "catharine-arnston" },
  // B-tier
  { name: "Tim Gray", title: "Health Optimisation Summit Founder", slug: "tim-gray" },
  { name: "Dr. Joy Kong", title: "Stem Cell Therapy Pioneer", slug: "joy-kong" },
  { name: "Nasha Winters", title: "Metabolic Cancer Expert", slug: "nasha-winters" },
  { name: "Dr. Kien Vuu", title: "Thrive State Author", slug: "kien-vuu" },
  { name: "Philip Ovadia", title: "Heart Surgeon & Author", slug: "philip-ovadia" },
  { name: "Dr. Dominik Nischwitz", title: "Biological Dentistry Pioneer", slug: "dominik-nischwitz" },
  { name: "Nathalie Niddam", title: "Peptides Educator", slug: "nathalie-niddam" },
  { name: "Gil Blander", title: "InsideTracker Founder", slug: "gil-blander" },
  { name: "Martha Carlin", title: "BiotiQuest Founder", slug: "martha-carlin" },
  { name: "Dr. Alan Bauman", title: "Hair Restoration Surgeon", slug: "alan-bauman" },
  { name: "Hannah Went", title: "TruDiagnostic", slug: "hannah-went" },
  { name: "Jason Prall", title: "Human Longevity Project", slug: "jason-prall" },
  { name: "Evan Hirsch", title: "Energy Medicine Specialist", slug: "evan-hirsch" },
  { name: "Lucas Aoun", title: "Ergogenic Health Founder", slug: "lucas-aoun" },
  { name: "Donny Epstein", title: "Network Spinal Founder", slug: "donny-epstein" },
  { name: "Brian Clement", title: "Hippocrates Institute Director", slug: "brian-clement" },
  { name: "Deborah Rozman", title: "HeartMath CEO", slug: "deborah-rozman" },
  { name: "Andy Mant", title: "BLUblox Founder", slug: "andy-mant" },
  { name: "Barry Morguelan", title: "Energy Medicine MD", slug: "barry-morguelan" },
  { name: "Reed Davis", title: "FDN Founder", slug: "reed-davis" },
  { name: "Kent Holtorf", title: "Holtorf Medical Group", slug: "kent-holtorf" },
  { name: "Victor Sagalovsky", title: "Longevity Scientist", slug: "victor-sagalovsky" },
  { name: "Rob Besner", title: "Therasage Founder", slug: "rob-besner" },
  { name: "Keesha Ewers", title: "Autoimmune Specialist", slug: "keesha-ewers" },
  { name: "Dr. Kevin Conners", title: "Alternative Cancer Expert", slug: "kevin-conners" },
  { name: "Marjory Wildcraft", title: "Homegrown Food Summit", slug: "marjory-wildcraft" },
  { name: "Dr. Melissa Petersen", title: "Brain Optimization", slug: "melissa-petersen" },
  { name: "Dr. Venus Ramos", title: "Sports Medicine Physician", slug: "venus-ramos" },
  { name: "Phil Micans", title: "Anti-Aging Systems VP", slug: "phil-micans" },
  { name: "Cristy Code Red", title: "Code Red Revolution Founder", slug: "cristy-code-red" },
  { name: "Master Co", title: "Pranic Healing Master", slug: "master-co" },
  { name: "Dr. Alberto Ortiz", title: "Regenerative Medicine", slug: "alberto-ortiz" },
  { name: "Dr. Ross Carter", title: "BioHacker Live Founder", slug: "ross-carter" },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const benefits = [
  {
    icon: "🎯",
    title: "Direct Access to Buyers",
    description:
      "These attendees already spend on CGMs, red light panels, peptide protocols, nootropic stacks, and longevity supplements. Your brand reaches people with their wallets open.",
    highlight: "Pre-qualified buyers",
  },
  {
    icon: "🎤",
    title: "Speaking Authority",
    description:
      "Present alongside world-class biohacking experts as a featured speaker. Sponsors who teach are sponsors who get purchased from.",
    highlight: "Authority positioning",
  },
  {
    icon: "📧",
    title: "Email List Ownership",
    description:
      "No rented audiences. No algorithm changes. You get direct access to 10,000+ opted-in emails with 40%+ open rates. This list is yours to nurture long after the summit ends.",
    highlight: "40%+ avg. open rates",
  },
  {
    icon: "🖥️",
    title: "Branded Content Integration",
    description:
      "Product showcases, sponsored sessions, branded resource pages, and replay access. Your brand is woven into the event, not bolted onto it.",
    highlight: "Multi-touchpoint exposure",
  },
  {
    icon: "🔒",
    title: "Category Exclusivity",
    description:
      "Presenting sponsors get exclusive category rights. If you sell supplements, no other supplement brand appears alongside yours. Your message stands alone.",
    highlight: "Zero competition",
  },
  {
    icon: "📊",
    title: "Full ROI Reporting",
    description:
      "Registration numbers, email engagement, session attendance, and conversion data. You know exactly what your sponsorship delivered. No guessing.",
    highlight: "Full transparency",
  },
];

const tiers = [
  {
    name: "Silver Sponsor",
    price: "$10K",
    description:
      "Brand visibility across the summit with targeted audience access.",
    features: [
      "Logo on summit landing page and emails",
      "Branded resource page in the summit hub",
      "Access to registrant email list (opt-in)",
      "Social media mentions (3+ posts)",
      "Post-summit performance report",
    ],
    featured: false,
    spotsLeft: 2,
  },
  {
    name: "Gold Sponsor",
    price: "$25K",
    description:
      "Deep integration with a dedicated speaking slot and premium placement.",
    features: [
      "Everything in Silver, plus:",
      "15-minute sponsored speaking session",
      "Premium logo placement (above the fold)",
      "Dedicated sponsor email to full list",
      "Product showcase or demo slot",
      "Priority placement in replay access",
    ],
    featured: true,
    spotsLeft: 2,
  },
  {
    name: "Presenting Sponsor",
    price: "$50K+",
    description:
      "Title-level partnership with maximum exposure and exclusivity.",
    features: [
      "Everything in Gold, plus:",
      '"Presented by [Your Brand]" title billing',
      "30-minute keynote or workshop slot",
      "Exclusive category sponsorship (no competitors)",
      "Co-branded landing page and email sequence",
      "Custom post-summit nurture campaign",
      "Direct strategy session with summit host",
    ],
    featured: false,
    spotsLeft: 1,
  },
];

const steps = [
  {
    num: "01",
    title: "Claim Your Tier",
    description:
      "Review the Silver, Gold, and Presenting packages. Lock in the level of integration that fits your goals.",
  },
  {
    num: "02",
    title: "We Design Your Integration",
    description:
      "Our team builds your presence into the event: speaking slots, branded content, email sequences, and product showcases.",
  },
  {
    num: "03",
    title: "Go Live to 10K+",
    description:
      "The summit launches and your brand is front and center with 10,000+ biohacking and longevity enthusiasts.",
  },
  {
    num: "04",
    title: "Get the Numbers",
    description:
      "Post-summit, you receive a full performance report: registrations, email opens, session attendance, clicks, and conversions.",
  },
];

const faqs = [
  {
    q: "What kind of ROI should we expect?",
    a: "Sponsors typically see 40%+ email open rates from summit lists, direct product inquiries during live sessions, and ongoing pipeline from email access post-summit. We provide full reporting so you can measure every metric that matters.",
  },
  {
    q: "How does this compare to sponsoring an in-person event?",
    a: "In-person conference booths in this space run $15K-$40K plus travel, logistics, and staff costs. BioHacker Live delivers the same caliber audience, starting at $10K, with no travel, email list ownership, and full ROI reporting. You also get speaking slots that in-person events rarely offer sponsors.",
  },
  {
    q: "Is the audience actually engaged, or just registered?",
    a: "Summit registrants actively opted in for a multi-day educational event on biohacking and longevity. They attend sessions, ask questions in Q&A, and open emails at 40%+ rates. These are not passive followers.",
  },
  {
    q: "Can we get exclusivity in our product category?",
    a: "Yes. Presenting Sponsors receive exclusive category rights, meaning no competing brand sponsors the same summit. Gold and Silver tiers are subject to availability, and we limit total sponsors to 6 per event to maximize exclusivity.",
  },
  {
    q: "How far in advance should we commit?",
    a: "Sponsorship integration requires 4-6 weeks of lead time. With the summit on July 14, the window to secure your spot is closing. Reach out now to lock in your preferred tier and category.",
  },
];

const topics = [
  "Sleep Optimization",
  "Nootropics",
  "Cold/Heat Therapy",
  "Functional Nutrition",
  "Wearable Tech",
  "Hormonal Health",
  "Longevity Protocols",
  "Stress & Recovery",
  "Stem Cells",
  "Peptides",
  "Gut Health",
  "Breathwork",
];

export default function SponsorContent() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !mainRef.current) return;
      const ctx = mainRef.current;

      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const heroTargets = ctx.querySelectorAll("[data-page-hero]");
      gsap.set(heroTargets, { y: 24, opacity: 0 });
      heroTl
        .to("[data-page-hero='eyebrow']", { y: 0, opacity: 1, duration: 0.5 })
        .to("[data-page-hero='heading']", { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
        .to("[data-page-hero='sub']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.35")
        .to("[data-page-hero='countdown']", { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .to("[data-page-hero='cta']", { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");

      // Floating dots
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

      // Scroll reveals
      ctx.querySelectorAll("[data-reveal]").forEach((el) => {
        const delay = parseFloat(
          (el as HTMLElement).dataset.revealDelay || "0"
        );
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
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
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
            });
          },
          once: true,
        });
      });

      // Sticky bar: show after scrolling past hero
      if (stickyRef.current) {
        gsap.set(stickyRef.current, { yPercent: -100 });
        ScrollTrigger.create({
          trigger: "[data-hero-section]",
          start: "bottom top",
          onEnter: () => {
            gsap.to(stickyRef.current, {
              yPercent: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(stickyRef.current, {
              yPercent: -100,
              duration: 0.3,
              ease: "power2.in",
            });
          },
        });
      }
    },
    { scope: mainRef }
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/api/sponsor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: formData.get("company"),
        contactName: formData.get("contactName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        website: formData.get("website"),
        budget: formData.get("budget"),
        message: formData.get("message"),
      }),
    }).catch(() => {});

    setSubmitted(true);
    setSending(false);
  }

  return (
    <main ref={mainRef}>
      {/* ── Static Top Bar (always visible) ── */}
      <div className="absolute top-0 left-0 right-0 z-40 px-6 py-5">
        <img
          src="/brandguide/assets/logo-horizontal.svg"
          alt="360Summits"
          className="h-8 w-auto brightness-0 invert"
        />
      </div>

      {/* ── Sticky Bar (appears on scroll) ── */}
      <div
        ref={stickyRef}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark-navy/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6">
          <img
            src="/brandguide/assets/logo-horizontal.svg"
            alt="360Summits"
            className="h-6 w-auto brightness-0 invert"
          />
          <div className="hidden items-center gap-4 sm:flex">
            <CountdownTimer targetDate={EVENT_DATE} compact />
          </div>
          <a
            href="#inquiry"
            className="rounded-full bg-brand-lime px-5 py-2 text-sm font-semibold text-dark-navy transition-all hover:bg-lime-light hover:shadow-md"
          >
            Claim Your Spot
          </a>
        </div>
      </div>

      {/* ── 1. Hero + Countdown ── */}
      <section
        data-hero-section
        className="relative min-h-screen overflow-hidden bg-dark-navy flex items-center"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/summit/hero.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/60 via-dark-navy/80 to-dark-navy" />
        </div>

        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 hero-grid" />

        {/* Animated gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/4 h-[700px] w-[700px] rounded-full bg-brand-purple/30 blur-[150px] animate-blob" />
          <div className="absolute -bottom-40 right-1/3 h-[600px] w-[600px] rounded-full bg-brand-blue/25 blur-[130px] animate-blob-alt" />
          <div className="absolute top-1/3 right-[10%] h-[400px] w-[400px] rounded-full bg-brand-lime/10 blur-[100px] animate-blob" />
          <div
            data-float
            className="absolute top-[12%] right-[6%] h-4 w-4 rounded-full bg-brand-lime/50 shadow-[0_0_20px_rgba(132,204,22,0.4)]"
          />
          <div
            data-float
            className="absolute bottom-[25%] left-[4%] h-3 w-3 rounded-full bg-accent-cyan/60 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          />
          <div
            data-float
            className="absolute top-[60%] right-[12%] h-2 w-2 rounded-full bg-brand-lime/40 shadow-[0_0_12px_rgba(132,204,22,0.3)]"
          />
          <div
            data-float
            className="absolute top-[30%] left-[10%] h-2 w-2 rounded-full bg-purple-lighter/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
          />
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px hero-glow-line" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
          <div
            data-page-hero="eyebrow"
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand-lime/30 bg-brand-lime/10 px-5 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lime" />
            </span>
            <span className="text-sm font-semibold text-brand-lime">
              July 14-15, 2026 &middot; Only 6 Sponsor Spots Available
            </span>
          </div>

          <h1
            data-page-hero="heading"
            className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Put Your Brand in Front of{" "}
            <span className="bg-gradient-to-r from-brand-lime to-lime-light bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Biohacking Buyers
          </h1>

          <p
            data-page-hero="sub"
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            The top health and longevity brands already invest in reaching
            this audience at live events. BioHacker Live delivers the same
            caliber of buyer, virtually, with deeper integration and a
            fraction of the cost.
          </p>

          <div data-page-hero="countdown" className="mt-12">
            <CountdownTimer targetDate={EVENT_DATE} />
            <p className="mt-4 text-sm font-medium text-white/40">
              Sponsorship integration requires 4-6 weeks of lead time. The
              window is closing.
            </p>
          </div>

          <div data-page-hero="cta" className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-brand-lime px-10 py-4 font-body text-base font-semibold text-dark-navy shadow-[0_0_30px_rgba(132,204,22,0.3)] transition-all hover:bg-lime-light hover:shadow-[0_0_40px_rgba(132,204,22,0.5)]"
            >
              Claim Your Spot &rarr;
            </a>
            <a
              href="#tiers"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-body text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:bg-white/5"
            >
              View Packages &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Social Proof Marquee ── */}
      <section className="relative overflow-hidden bg-dark-charcoal py-10">
        <p
          className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
          data-reveal
        >
          50+ summits &amp; events produced across health, wellness &amp;
          business
        </p>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-dark-charcoal to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-dark-charcoal to-transparent" />
          <div className="flex animate-marquee items-center gap-12">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0 items-center gap-12">
                {Array.from({ length: 17 }, (_, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex h-14 shrink-0 items-center"
                  >
                    <Image
                      src={`/images/past-events/event-${String(i + 1).padStart(2, "0")}.png`}
                      alt="Past summit event"
                      width={160}
                      height={56}
                      className="h-10 w-auto object-contain opacity-50 grayscale invert transition-all hover:opacity-80 hover:grayscale-0 hover:invert-0 md:h-14"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Stats Credibility Bar ── */}
      <section className="border-y border-white/5 bg-dark-navy py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="grid grid-cols-2 gap-8 md:grid-cols-5"
            data-stagger-group
          >
            {[
              { value: "10,000+", label: "Target Registrants" },
              { value: "50+", label: "Summits Produced" },
              { value: "200+", label: "Speakers in Network" },
              { value: "1M+", label: "Total Audience Reached" },
              { value: "6", label: "Total Sponsor Spots" },
            ].map((stat) => (
              <div key={stat.label} data-stagger-item className="text-center">
                <div className="font-display text-3xl font-bold text-brand-lime md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Past Speakers ── */}
      <section className="bg-dark-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              Past speakers
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Your brand alongside 120+ world-class experts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
              BioHacker Live has featured the biggest names in biohacking,
              longevity, and human optimization. As a sponsor, your brand shares
              the stage with this caliber of thought leader.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
            data-stagger-group
          >
            {speakers.map((speaker) => (
              <div
                key={speaker.slug}
                data-stagger-item
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:border-brand-lime/40 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.15)]">
                  <Image
                    src={`/images/speakers/${speaker.slug}.jpg`}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 30vw, (max-width: 768px) 22vw, (max-width: 1024px) 15vw, 12vw"
                  />
                </div>
                <p className="text-xs font-semibold text-white sm:text-sm">
                  {speaker.name}
                </p>
                <p className="text-[10px] leading-tight text-white/40 sm:text-xs">
                  {speaker.title}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/40" data-reveal>
            Plus 70+ additional experts across sleep, nutrition, peptides,
            recovery, stem cells, and more.
          </p>
        </div>
      </section>

      {/* ── 5. Why Sponsor (Benefits) ── */}
      <section className="bg-dark-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              Why sponsor
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              This is not a logo placement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
              Whether you sell diagnostics, infrared saunas, longevity
              supplements, or recovery devices, summit sponsorships give you
              multi-touchpoint access to a pre-qualified audience that is already
              buying.
            </p>
          </div>

          <div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            data-stagger-group
          >
            {benefits.map((item) => (
              <div
                key={item.title}
                data-stagger-item
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:shadow-lg hover:shadow-brand-lime/5"
              >
                <div className="relative z-10">
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl"
                    data-emoji
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                  <span className="inline-flex rounded-full bg-brand-lime/15 px-3 py-1.5 text-xs font-semibold text-brand-lime">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Audience Demographics ── */}
      <section className="bg-dark-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div data-reveal>
              <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
                Your audience
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Who attends BioHacker Live
              </h2>
              <p className="mt-6 max-w-lg text-lg text-white/50">
                These are the same people attending the top biohacking and
                longevity events in person. BioHacker Live makes them
                accessible virtually, at a fraction of the sponsorship cost,
                with deeper brand integration.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-stagger-group>
              {[
                { stat: "78%", label: "Business owners or self-employed" },
                {
                  stat: "85%",
                  label: "Purchase health & wellness products monthly",
                },
                {
                  stat: "65%",
                  label: "Invested in coaching, courses, or protocols",
                },
                { stat: "$75K+", label: "Average household income" },
                { stat: "30-55", label: "Primary age range" },
                { stat: "90%+", label: "Post-summit email engagement" },
              ].map((item) => (
                <div
                  key={item.label}
                  data-stagger-item
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-brand-lime">
                    {item.stat}
                  </div>
                  <p className="mt-1 text-sm text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Comparison Table ── */}
      <section className="bg-dark-charcoal py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              The difference
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              Summit sponsorship vs. the alternatives
            </h2>
          </div>

          <div
            className="overflow-x-auto rounded-[1.5rem] border border-white/10 bg-white/5 backdrop-blur-sm"
            data-reveal
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 font-display font-bold text-white/50"></th>
                  <th className="px-6 py-4 font-display font-bold text-white/40">
                    Paid Ads
                  </th>
                  <th className="px-6 py-4 font-display font-bold text-white/40">
                    In-Person Events
                  </th>
                  <th className="px-6 py-4 font-display font-bold text-brand-lime">
                    BioHacker Live
                  </th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                {[
                  {
                    label: "Cost",
                    ads: "$3-5 CPM",
                    trade: "$15K-$40K + travel",
                    summit: "From $10K, no travel",
                  },
                  {
                    label: "Audience intent",
                    ads: "Low (interruption)",
                    trade: "Medium",
                    summit: "High (opted-in learners)",
                  },
                  {
                    label: "Email list access",
                    ads: "No",
                    trade: "No",
                    summit: "Yes, 10K+ contacts",
                  },
                  {
                    label: "Speaking opportunity",
                    ads: "No",
                    trade: "Rarely for sponsors",
                    summit: "Yes (Gold & Presenting)",
                  },
                  {
                    label: "Post-event relationship",
                    ads: "Retargeting only",
                    trade: "Business cards",
                    summit: "Email list ownership",
                  },
                  {
                    label: "Performance reporting",
                    ads: "Impressions/clicks",
                    trade: "Foot traffic estimate",
                    summit: "Full funnel data",
                  },
                  {
                    label: "Category exclusivity",
                    ads: "No",
                    trade: "Rarely",
                    summit: "Yes (Presenting tier)",
                  },
                ].map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <td className="px-6 py-3.5 font-medium text-white/70">
                      {row.label}
                    </td>
                    <td className="px-6 py-3.5">{row.ads}</td>
                    <td className="px-6 py-3.5">{row.trade}</td>
                    <td className="px-6 py-3.5 font-semibold text-brand-lime">
                      {row.summit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 7. Sponsorship Tiers ── */}
      <section id="tiers" className="bg-dark-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              Sponsorship tiers
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Choose your level of integration
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
              Every tier includes audience access and performance reporting.
              Higher tiers add deeper brand integration and exclusivity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3" data-stagger-group>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                data-stagger-item
                className={`group relative overflow-hidden rounded-[1.5rem] border bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/[0.08] ${
                  tier.featured
                    ? "border-brand-lime/50 ring-2 ring-brand-lime/30 shadow-lg shadow-brand-lime/10"
                    : "border-white/10"
                }`}
              >
                {tier.featured && (
                  <span className="absolute top-4 right-4 rounded-full bg-brand-lime px-3 py-1 text-xs font-semibold text-dark-navy">
                    Most popular
                  </span>
                )}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <div className="mt-2 mb-1">
                    <span className="font-display text-4xl font-bold text-brand-lime">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mb-6 text-xs font-medium text-amber-400/80">
                    {tier.spotsLeft === 1
                      ? "1 spot remaining"
                      : `${tier.spotsLeft} spots remaining`}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-white/50">
                    {tier.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-white/70"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-lime/15 text-xs text-brand-lime">
                          &#10003;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#inquiry"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-semibold transition-all ${
                      tier.featured
                        ? "bg-brand-lime text-dark-navy hover:bg-lime-light hover:shadow-md"
                        : "border-2 border-white/15 text-white/80 hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    Lock In {tier.name.split(" ")[0]} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-white/30" data-reveal>
            Custom packages available. Need something specific?{" "}
            <a href="#inquiry" className="text-brand-lime hover:underline">
              Let&apos;s talk
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── 8. How It Works ── */}
      <section className="bg-dark-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              How it works
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              From inquiry to impact in four steps
            </h2>
          </div>

          <div
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            data-stagger-group
          >
            {steps.map((item) => (
              <div
                key={item.num}
                data-stagger-item
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:bg-white/[0.08]"
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lime font-display text-sm font-bold text-dark-navy">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="bg-dark-navy py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-brand-lime">
              Common questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              Sponsor FAQ
            </h2>
          </div>

          <div className="space-y-4" data-stagger-group>
            {faqs.map((faq) => (
              <div
                key={faq.q}
                data-stagger-item
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/[0.08]"
              >
                <h3 className="mb-2 font-display text-base font-bold text-white">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Form + Final CTA ── */}
      <section
        id="inquiry"
        className="relative overflow-hidden bg-dark-charcoal py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-purple/10 blur-[80px]" />
          <div className="absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center" data-reveal>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Secure your sponsorship before the window closes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/50">
              Only 6 total sponsor spots. Category exclusivity means once a tier
              fills in your category, the opportunity is gone.
            </p>
            <div className="mt-8">
              <CountdownTimer targetDate={EVENT_DATE} />
            </div>
          </div>

          {submitted ? (
            <div
              className="flex flex-col items-center justify-center rounded-[1.5rem] border border-brand-lime/20 bg-brand-lime/10 p-12 text-center"
              data-reveal
            >
              <span className="mb-4 text-5xl">&#10003;</span>
              <h3 className="mb-2 font-display text-2xl font-bold text-white">
                Application Received
              </h3>
              <p className="text-white/60">
                Our team will reach out within 24 hours with a custom
                sponsorship proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" data-reveal>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Company Name *
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Supplements"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Contact Name *
                  </label>
                  <input
                    name="contactName"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@acme.com"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Website
                  </label>
                  <input
                    name="website"
                    type="url"
                    placeholder="https://acme.com"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70">
                    Interested Tier
                  </label>
                  <select
                    name="budget"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                  >
                    <option value="" className="bg-dark-navy">
                      Select a tier
                    </option>
                    <option value="Silver — $10K" className="bg-dark-navy">
                      Silver - $10K
                    </option>
                    <option value="Gold — $25K" className="bg-dark-navy">
                      Gold - $25K
                    </option>
                    <option value="Presenting — $50K+" className="bg-dark-navy">
                      Presenting - $50K+
                    </option>
                    <option value="Custom" className="bg-dark-navy">
                      Custom Package
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your brand, target audience, and sponsorship goals..."
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-lime/50 focus:ring-2 focus:ring-brand-lime/20"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-lime px-8 py-4 font-body text-base font-semibold text-dark-navy transition-all hover:bg-lime-light hover:shadow-lg hover:shadow-brand-lime/20 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Lock In Your Sponsorship \u2192"}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-sm text-white/40">
            We respond within 24 hours. Limited to 6 total sponsors to maximize
            exclusivity and ROI for every partner.
          </p>
        </div>
      </section>
    </main>
  );
}
