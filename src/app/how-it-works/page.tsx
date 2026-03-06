import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — 360Summits",
  description:
    "Learn how 360Summits produces world-class virtual summits — from speaker coordination to attendee engagement.",
};

const forAttendees = [
  {
    step: "01",
    title: "Browse & Register",
    description:
      "Explore upcoming summits by topic. Register for free to get access to live sessions — no credit card required.",
  },
  {
    step: "02",
    title: "Watch Live Sessions",
    description:
      "Tune in during the event to watch expert presentations. Each session is available for 24-48 hours after airing.",
  },
  {
    step: "03",
    title: "Engage & Connect",
    description:
      "Ask questions during live Q&A, connect with speakers and fellow attendees, and join our learning community.",
  },
  {
    step: "04",
    title: "Upgrade for Lifetime Access",
    description:
      "Want to rewatch at your own pace? Grab the All-Access Pass for lifetime replays, bonuses, and exclusive resources.",
  },
];

const forHosts = [
  {
    step: "01",
    title: "Strategy & Planning",
    description:
      "We work with you to define your summit topic, target audience, speaker lineup, and monetization strategy.",
  },
  {
    step: "02",
    title: "Production & Design",
    description:
      "Our team handles web design, landing pages, email sequences, and all the technical production work.",
  },
  {
    step: "03",
    title: "Speaker & JV Management",
    description:
      "We coordinate with speakers, manage joint venture partners, and handle affiliate tracking and commissions.",
  },
  {
    step: "04",
    title: "Launch & Promotion",
    description:
      "From email marketing to social campaigns, we drive registrations and ensure maximum attendance.",
  },
  {
    step: "05",
    title: "Live Event Execution",
    description:
      "We manage the entire live event — broadcasting, Q&A moderation, technical support, and attendee engagement.",
  },
  {
    step: "06",
    title: "Post-Summit Monetization",
    description:
      "All-Access Pass sales, replay funnels, upsells, and ongoing email nurture sequences to maximize ROI.",
  },
];

const services = [
  {
    title: "Summit Production",
    description: "End-to-end virtual event production with professional quality.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    title: "Web Design & Funnels",
    description: "Custom landing pages, registration flows, and sales funnels.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Email Marketing",
    description: "Automated sequences for registration, engagement, and sales.",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  },
  {
    title: "JV/Affiliate Management",
    description: "Partner recruitment, tracking, commissions, and relationship management.",
    icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  },
  {
    title: "Content Strategy",
    description: "Topic curation, speaker prep, and session structure optimization.",
    icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
  },
  {
    title: "Analytics & Reporting",
    description: "Registration tracking, engagement metrics, and revenue reporting.",
    icon: "M18 20V10M12 20V4M6 20v-6",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(51,3,98,0.25),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
            The Process
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            How It Works
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
            Whether you&apos;re an attendee looking to learn or a host wanting
            to create a summit — here&apos;s how 360Summits makes it happen.
          </p>
        </div>
      </section>

      {/* For Attendees */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              For Attendees
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              Join a Summit
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {forAttendees.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < forAttendees.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-brand-purple/50 to-transparent md:block" />
                )}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-purple-light font-display text-lg font-bold text-white">
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

      {/* For Hosts */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              For Summit Hosts
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              Host a Summit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300">
              We handle everything from A to Z, so you can focus on your
              content and your audience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {forHosts.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1 hover:border-brand-lime/20"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-lime/10 font-display text-sm font-bold text-brand-lime">
                    {item.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Full-Service Platform
              <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              What We Handle
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6 transition-all hover:-translate-y-1 hover:border-brand-lime/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-purple/20">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Ready to Launch Your Summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300">
            Let&apos;s discuss your vision. We&apos;ll create a custom plan to
            bring your summit to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)]"
          >
            Schedule a Call
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
