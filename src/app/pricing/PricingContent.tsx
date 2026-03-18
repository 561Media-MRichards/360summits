"use client";

import Link from "next/link";
import { useRef, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const tiers = [
  {
    name: "Starter",
    price: "$12,000",
    description: "Everything you need to launch your first summit with confidence.",
    features: [
      "Up to 5 speakers",
      "Basic sponsor support",
      "Landing page + registration funnel",
      "Email sequences",
      "Live event production",
      "Post-summit report",
    ],
    bg: "bg-pastel-sky",
    pill: "bg-pill-sky",
    accent: "border-blue-800/20",
    value: 12000,
  },
  {
    name: "Professional",
    price: "$18,000",
    popular: true,
    description: "For hosts ready to scale with deeper audience engagement and monetization.",
    features: [
      "Everything in Starter, plus:",
      "Up to 10 speakers",
      "Advanced email segmentation",
      "Speaker & JV recruitment",
      "All-Access Pass funnel",
      "Custom branded hub",
      "Dedicated project manager",
    ],
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
    accent: "border-yellow-800/20",
    value: 18000,
  },
  {
    name: "Enterprise",
    price: "$28,000",
    description: "Full-scale production for multi-track summits with maximum monetization.",
    features: [
      "Everything in Professional, plus:",
      "Unlimited speakers",
      "Advanced sponsor packages",
      "Multi-track support",
      "Premium replay & upsell funnels",
      "Priority scheduling",
      "Post-summit monetization strategy",
    ],
    bg: "bg-pastel-lavender",
    pill: "bg-pill-lavender",
    accent: "border-purple-light/20",
    value: 28000,
  },
];

const valueProps = [
  {
    emoji: "💰",
    title: "Predictable Revenue",
    description: "Know your exact costs upfront. No revenue share means every dollar you earn beyond production costs is yours.",
  },
  {
    emoji: "📈",
    title: "Better Margins",
    description: "The more successful your summit, the more you keep. Flat fees mean your margins grow as your revenue grows.",
  },
  {
    emoji: "🚀",
    title: "Built to Scale",
    description: "Run multiple summits per year without renegotiating terms. Same predictable pricing, compounding results.",
  },
];

const whyBenefits = [
  {
    emoji: "🔒",
    title: "No revenue share surprises",
    description: "Traditional models take 50% of your summit revenue on top of a base fee. With flat-fee pricing, your upside is uncapped.",
    bg: "bg-pastel-cream",
    pill: "bg-pill-yellow",
  },
  {
    emoji: "🎯",
    title: "Lower barrier than $10K + 50%",
    description: "Revenue-share models sound affordable until your summit earns $100K and you owe $60K. Our flat fee is often less than what you'd pay in total.",
    bg: "bg-pastel-mint",
    pill: "bg-pill-mint",
  },
  {
    emoji: "📊",
    title: "Scales with your event business",
    description: "Your second and third summits will outperform your first. Flat pricing means your growing expertise translates directly to growing profit.",
    bg: "bg-pastel-lavender",
    pill: "bg-pill-lavender",
  },
];

function getRecommendedTier(revenue: number): { name: string; fee: number } {
  if (revenue <= 50000) return { name: "Starter", fee: 12000 };
  if (revenue <= 125000) return { name: "Professional", fee: 18000 };
  return { name: "Enterprise", fee: 28000 };
}

function formatCurrency(value: number): string {
  return `$${value.toLocaleString()}`;
}

export default function PricingContent() {
  const mainRef = useRef<HTMLElement>(null);
  const [revenue, setRevenue] = useState(75000);
  const [attendees, setAttendees] = useState(20);

  const calculatorData = useMemo(() => {
    const tier = getRecommendedTier(revenue);

    // Old model: $10K base + 50% revenue share
    const oldBase = 10000;
    const oldShare = revenue * 0.5;
    const oldTotal = oldBase + oldShare;

    // Flat fee model
    const flatTotal = tier.fee;

    // Hybrid model: lower base + capped 20% share (max $15K)
    const hybridBase = 8000;
    const hybridShare = Math.min(revenue * 0.2, 15000);
    const hybridTotal = hybridBase + hybridShare;

    const chartData = [
      { name: "$10K + 50% Share", total: oldTotal, fill: "#FFD9E2" },
      { name: `Flat Fee (${tier.name})`, total: flatTotal, fill: "#D1FADF" },
      { name: "Hybrid ($8K + 20%)", total: hybridTotal, fill: "#D1ECFF" },
    ];

    const tableData = [
      {
        label: "$10K + 50% Revenue Share",
        upfront: oldBase,
        variable: oldShare,
        total: oldTotal,
        rate: ((oldTotal / revenue) * 100).toFixed(1),
      },
      {
        label: `Tiered Flat Fee (${tier.name})`,
        upfront: tier.fee,
        variable: 0,
        total: flatTotal,
        rate: ((flatTotal / revenue) * 100).toFixed(1),
        highlight: true,
      },
      {
        label: "Hybrid ($8K + capped 20%)",
        upfront: hybridBase,
        variable: hybridShare,
        total: hybridTotal,
        rate: ((hybridTotal / revenue) * 100).toFixed(1),
      },
    ];

    return { chartData, tableData, tier };
  }, [revenue]);

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
      <section className="relative overflow-hidden bg-slate-900 py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-[450px] w-[450px] rounded-full bg-brand-purple/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[350px] w-[350px] rounded-full bg-brand-blue/20 blur-3xl" />
          <div data-float className="absolute top-[15%] right-[7%] h-3 w-3 rounded-full bg-purple-lighter/40" />
          <div data-float className="absolute bottom-[22%] left-[5%] h-2 w-2 rounded-full bg-brand-lime/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span data-page-hero="eyebrow" className="mb-4 inline-block rounded-full bg-pill-lavender px-4 py-1.5 text-xs font-semibold text-purple-light">
            Pricing &amp; Packages
          </span>
          <h1 data-page-hero="heading" className="mt-4 font-display text-5xl font-bold text-white md:text-6xl">
            Smarter pricing for summit production
          </h1>
          <p data-page-hero="sub" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Predictable flat-fee packages. No revenue share. Know your costs before you start.
          </p>
          <div data-page-hero="cta" className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              Book a Strategy Call →
            </Link>
            <span className="text-sm text-white/40">Packages from $12K</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Value Props Bar */}
      <section className="border-b border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-3" data-stagger-group>
            {valueProps.map((item) => (
              <div key={item.title} data-stagger-item className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-mint text-2xl shadow-sm" data-emoji>{item.emoji}</div>
                <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-pastel-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
              Choose your package
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Three tiers. One flat fee. Zero surprises.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Every package includes full production support. Pick the level that matches your summit&apos;s scale.
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
                  <span className="absolute top-4 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Recommended</span>
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
            Need something custom? <Link href="/contact" className="text-purple-light hover:underline">Let&apos;s talk</Link>.
          </p>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="bg-pastel-mint py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-mint px-4 py-1.5 text-xs font-semibold text-green-800">
              Revenue calculator
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              See how much you save with flat-fee pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
              Adjust the sliders to compare pricing models based on your expected summit performance.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] bg-white p-8 shadow-sm" data-reveal>
            {/* Sliders */}
            <div className="mb-10 grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label htmlFor="revenue-slider" className="font-display text-sm font-bold text-slate-900">Event Revenue</label>
                  <span className="rounded-full bg-pastel-mint px-3 py-1 font-display text-sm font-bold text-green-800">
                    {formatCurrency(revenue)}
                  </span>
                </div>
                <input
                  id="revenue-slider"
                  type="range"
                  min={25000}
                  max={250000}
                  step={5000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="pricing-slider w-full"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-400">
                  <span>$25K</span>
                  <span>$250K</span>
                </div>
              </div>
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label htmlFor="attendee-slider" className="font-display text-sm font-bold text-slate-900">Attendee Count</label>
                  <span className="rounded-full bg-pastel-sky px-3 py-1 font-display text-sm font-bold text-blue-800">
                    {attendees.toLocaleString()}
                  </span>
                </div>
                <input
                  id="attendee-slider"
                  type="range"
                  min={5}
                  max={50}
                  step={1}
                  value={attendees}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  className="pricing-slider w-full"
                />
                <div className="mt-1 flex justify-between text-xs text-slate-400">
                  <span>5</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mb-8">
              <h3 className="mb-4 font-display text-base font-bold text-slate-900">
                Total production cost by model
                <span className="ml-2 text-sm font-normal text-slate-400">
                  (recommended: {calculatorData.tier.name})
                </span>
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={calculatorData.chartData} barCategoryGap="25%">
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#888" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#888" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
                    />
                    <Tooltip
                      formatter={(value) => [formatCurrency(Number(value)), "Total Cost"]}
                      contentStyle={{ borderRadius: "12px", border: "1px solid #E8E8E8", fontSize: "13px" }}
                    />
                    <Bar dataKey="total" radius={[8, 8, 0, 0]}>
                      {calculatorData.chartData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} stroke={index === 1 ? "#166534" : "transparent"} strokeWidth={2} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="-mx-8 overflow-x-auto px-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-4 py-3 font-display font-bold text-slate-900">Model</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-400">Upfront</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-400">Variable</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-400">Total</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-400">Eff. Rate</th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  {calculatorData.tableData.map((row) => (
                    <tr
                      key={row.label}
                      className={`border-b border-slate-50 last:border-b-0 ${row.highlight ? "bg-pastel-mint/50" : ""}`}
                    >
                      <td className={`px-4 py-3 font-medium ${row.highlight ? "text-green-800 font-semibold" : "text-slate-700"}`}>
                        {row.label}
                      </td>
                      <td className="px-4 py-3">{formatCurrency(row.upfront)}</td>
                      <td className="px-4 py-3">{formatCurrency(row.variable)}</td>
                      <td className={`px-4 py-3 font-semibold ${row.highlight ? "text-green-800" : "text-slate-900"}`}>
                        {formatCurrency(row.total)}
                      </td>
                      <td className="px-4 py-3">{row.rate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flat Fee */}
      <section className="bg-pastel-sky py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center" data-reveal>
            <span className="mb-4 inline-block rounded-full bg-pill-sky px-4 py-1.5 text-xs font-semibold text-blue-800">
              Why this model
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl">
              Flat-fee pricing is built for summit hosts
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3" data-stagger-group>
            {whyBenefits.map((item) => (
              <div key={item.title} data-stagger-item className={`group relative overflow-hidden rounded-[1.5rem] ${item.bg} p-7 transition-all hover:shadow-lg`}>
                <span className="pointer-events-none absolute -right-3 -bottom-3 text-[6rem] leading-none opacity-[0.07] transition-transform duration-500 group-hover:scale-110">{item.emoji}</span>
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

      {/* Final CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center" data-reveal>
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Ready to produce your next summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Book a strategy call and we&apos;ll walk you through the right package
            for your audience, goals, and timeline.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-body text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-lg"
            >
              Book a Strategy Call →
            </Link>
            <span className="text-sm text-white/40">Packages from $12K</span>
          </div>
        </div>
      </section>
    </main>
  );
}
