import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summits & Masterclasses — 360Summits",
  description:
    "Browse upcoming virtual summits and masterclasses in health, wellness, business, and personal growth.",
};

const summits = [
  {
    title: "Health & Wellness Summit 2026",
    description:
      "A 3-day deep dive into holistic health, functional nutrition, biohacking, and mindset transformation with 25+ world-class speakers.",
    category: "Health",
    speakers: 25,
    days: 3,
    status: "Upcoming",
    date: "April 15-17, 2026",
  },
  {
    title: "Entrepreneur Mastery Summit",
    description:
      "Strategies for scaling your business from 6 to 7 figures. Marketing automation, sales funnels, and team building from founders who've done it.",
    category: "Business",
    speakers: 20,
    days: 2,
    status: "Upcoming",
    date: "May 8-9, 2026",
  },
  {
    title: "Personal Growth Masterclass",
    description:
      "Unlock your potential with proven frameworks for productivity, emotional intelligence, and goal achievement from top performance coaches.",
    category: "Growth",
    speakers: 15,
    days: 1,
    status: "Upcoming",
    date: "June 1, 2026",
  },
  {
    title: "Nutrition Revolution Summit",
    description:
      "The latest research in gut health, plant-based nutrition, anti-inflammatory diets, and metabolic optimization from leading nutritionists.",
    category: "Nutrition",
    speakers: 18,
    days: 2,
    status: "Coming Soon",
    date: "July 2026",
  },
  {
    title: "Digital Marketing Mastery",
    description:
      "Master social media, content strategy, email marketing, and paid advertising with actionable frameworks from top digital marketers.",
    category: "Marketing",
    speakers: 22,
    days: 3,
    status: "Coming Soon",
    date: "August 2026",
  },
  {
    title: "Mindset & Meditation Summit",
    description:
      "Transform your mental health through meditation, breathwork, neuroscience-backed mindfulness, and stress resilience techniques.",
    category: "Wellness",
    speakers: 12,
    days: 2,
    status: "Coming Soon",
    date: "September 2026",
  },
];

const pastSummits = [
  {
    title: "Wellness Warriors Summit",
    attendees: "2,500+",
    speakers: 20,
  },
  {
    title: "Launch Your Business Masterclass",
    attendees: "1,800+",
    speakers: 15,
  },
  {
    title: "Holistic Health Breakthrough",
    attendees: "3,200+",
    speakers: 25,
  },
  {
    title: "Coaching Mastery Summit",
    attendees: "1,500+",
    speakers: 18,
  },
];

export default function SummitsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(51,3,98,0.25),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
            Virtual Events
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            Summits & Masterclasses
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
            Discover transformative virtual events featuring world-class
            speakers, actionable content, and a community of passionate
            learners.
          </p>
        </div>
      </section>

      {/* Upcoming Summits */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Upcoming Events
              <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              Register Now
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {summits.map((summit) => (
              <div
                key={summit.title}
                className="group flex flex-col rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1 hover:border-brand-lime/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(132,204,22,0.15)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-brand-purple/20 px-3 py-1 text-xs font-semibold text-purple-lighter">
                    {summit.category}
                  </span>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      summit.status === "Upcoming"
                        ? "bg-brand-lime/10 text-brand-lime"
                        : "bg-neutral-700 text-neutral-400"
                    }`}
                  >
                    {summit.status}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {summit.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-400">
                  {summit.description}
                </p>

                <div className="mb-4 flex items-center gap-4 border-t border-white/[0.06] pt-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {summit.date}
                  </span>
                  <span>{summit.speakers} speakers</span>
                  <span>
                    {summit.days} day{summit.days > 1 ? "s" : ""}
                  </span>
                </div>

                <button className="w-full rounded-lg bg-gradient-to-r from-brand-lime to-lime-light py-2.5 font-display text-sm font-bold uppercase tracking-wide text-neutral-950 transition-all hover:shadow-[0_4px_20px_rgba(132,204,22,0.25)]">
                  Register Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Summits */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Track Record
              <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              Past Summits
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {pastSummits.map((summit) => (
              <div
                key={summit.title}
                className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1"
              >
                <h3 className="mb-4 font-display text-lg font-bold text-white">
                  {summit.title}
                </h3>
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>{summit.attendees} attendees</span>
                  <span>{summit.speakers} speakers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Want to Speak at a Summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300">
            We&apos;re always looking for experts to share their knowledge.
            Apply to speak at an upcoming event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)]"
          >
            Apply to Speak
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
