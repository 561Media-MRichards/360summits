import Link from "next/link";

const summits = [
  {
    title: "Health & Wellness Summit",
    description:
      "Explore holistic health, nutrition, and mindset transformation with 25+ expert speakers over 3 transformative days.",
    category: "Health",
    speakers: 25,
    days: 3,
  },
  {
    title: "Entrepreneur Mastery Summit",
    description:
      "Business growth strategies, marketing systems, and revenue optimization from founders who've scaled to 7+ figures.",
    category: "Business",
    speakers: 20,
    days: 2,
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your potential with cutting-edge strategies for productivity, mindset, and achieving your biggest goals.",
    category: "Growth",
    speakers: 15,
    days: 1,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Choose Your Summit",
    description:
      "Browse our upcoming summits and masterclasses. Find the topics and speakers that align with your learning goals.",
  },
  {
    step: "02",
    title: "Register for Free",
    description:
      "Sign up for complimentary access to live sessions. Upgrade to an all-access pass for lifetime replays and bonuses.",
  },
  {
    step: "03",
    title: "Learn from Experts",
    description:
      "Watch expert presentations, engage in live Q&A, and connect with a community of passionate learners.",
  },
  {
    step: "04",
    title: "Transform Your Life",
    description:
      "Apply what you've learned. Join our community for ongoing support, accountability, and continued growth.",
  },
];

const testimonials = [
  {
    quote:
      "The health summit completely changed my approach to wellness. The speakers were world-class and the content was actionable from day one.",
    name: "Sarah Mitchell",
    title: "Health Coach",
    initials: "SM",
  },
  {
    quote:
      "I've attended dozens of online events, but 360Summits stands apart. The production quality and speaker lineup are unmatched.",
    name: "David Chen",
    title: "Entrepreneur",
    initials: "DC",
  },
  {
    quote:
      "George and his team make the entire process seamless — from speaker coordination to attendee engagement. Truly next-level.",
    name: "Rachel Torres",
    title: "Wellness Practitioner",
    initials: "RT",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(51,3,98,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(4,14,207,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(132,204,22,0.06),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-lime/20 bg-brand-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-lime">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-lime" />
            For Those Who Love Learning
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            Summits &{" "}
            <span className="bg-gradient-to-r from-brand-lime to-lime-light bg-clip-text text-transparent">
              Masterclasses
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-300">
            Virtual events connecting passionate learners with world-class
            experts in health, wellness, business, and personal growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/summits"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)]"
            >
              Browse Summits
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
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-lime px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-brand-lime transition-all hover:bg-brand-lime/10"
            >
              How It Works
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-12">
            {[
              { label: "Summits Hosted", value: "50+" },
              { label: "Expert Speakers", value: "200+" },
              { label: "Attendees", value: "12K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Summits */}
      <section className="border-t border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Featured Events
              <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Upcoming Summits
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {summits.map((summit) => (
              <div
                key={summit.title}
                className="group cursor-pointer rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1 hover:border-brand-lime/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(132,204,22,0.15)]"
              >
                <div className="mb-4 inline-flex rounded-full bg-brand-purple/20 px-3 py-1 text-xs font-semibold text-purple-lighter">
                  {summit.category}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {summit.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                  {summit.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-xs text-neutral-500">
                    <span>{summit.speakers} speakers</span>
                    <span>
                      {summit.days} day{summit.days > 1 ? "s" : ""}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-brand-lime opacity-0 transition-opacity group-hover:opacity-100">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Simple Process
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-purple-light font-display text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-t border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
                Why 360Summits
                <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
              </span>
              <h2 className="mb-6 font-display text-4xl font-bold text-white">
                More Than Just an Online Event
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-300">
                We don&apos;t just host webinars — we create transformative
                learning experiences. From production to promotion, JV
                management to attendee engagement, 360Summits handles everything
                so you can focus on what matters: the content.
              </p>
              <div className="space-y-4">
                {[
                  "Professional summit production & web design",
                  "Complete email marketing & funnel systems",
                  "JV/affiliate management & speaker coordination",
                  "Content strategy & post-summit monetization",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-lime/20">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#84CC16"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-sm text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Summits Produced" },
                { value: "200+", label: "Expert Speakers" },
                { value: "12K+", label: "Total Attendees" },
                { value: "95%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6 text-center transition-all hover:-translate-y-1 hover:border-brand-lime/20"
                >
                  <div className="font-display text-3xl font-bold text-brand-lime">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              What People Say
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Trusted by Learners
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-4 flex gap-0.5 text-brand-lime">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-6 text-sm italic leading-relaxed text-neutral-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-purple-light font-display text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-neutral-500">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-gradient-to-br from-brand-purple via-neutral-900 to-neutral-950 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Ready to Start Learning?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300">
            Join thousands of passionate learners at our next virtual summit.
            Free registration, world-class speakers, life-changing content.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/summits"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)]"
            >
              Browse Summits
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
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 font-display text-base font-semibold uppercase tracking-wide text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
