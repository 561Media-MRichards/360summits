import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — 360Summits",
  description:
    "Learn about George Shepherd and the 360Summits mission to create transformative virtual learning experiences.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(51,3,98,0.25),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
            Our Story
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            For Those Who Love Learning
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
            360Summits was born from a simple belief: everyone deserves access to
            world-class education, regardless of where they live or how much they
            can afford.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <span className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
                Meet the Founder
                <span className="h-px max-w-[200px] flex-1 bg-white/[0.08]" />
              </span>
              <h2 className="mb-6 font-display text-4xl font-bold text-white">
                George Shepherd
              </h2>
              <div className="space-y-4 text-neutral-300">
                <p>
                  George Shepherd is a visionary entrepreneur based in Boynton
                  Beach, Florida, who has dedicated his career to creating
                  platforms that connect experts with eager learners.
                </p>
                <p>
                  With a background in digital marketing, web design, and event
                  production, George founded 360Summits to bridge the gap between
                  world-class knowledge and the people who need it most.
                </p>
                <p>
                  His mission extends beyond education — George is passionate
                  about using his platform to support anti-trafficking
                  initiatives, dedicating a portion of summit proceeds to
                  organizations fighting modern slavery.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="h-80 w-80 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue p-0.5">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-neutral-800">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-purple-light font-display text-3xl font-bold text-white">
                        GS
                      </div>
                      <div className="font-display text-xl font-bold text-white">
                        George Shepherd
                      </div>
                      <div className="text-sm text-neutral-400">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Our Mission & Values
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Democratize Education",
                description:
                  "We believe the best knowledge shouldn't be locked behind expensive conferences. Virtual summits make expert insights accessible to everyone.",
                icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z",
              },
              {
                title: "Empower Experts",
                description:
                  "We give health coaches, entrepreneurs, and thought leaders a platform to share their message with thousands of engaged learners.",
                icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 110 8 4 4 0 010-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
              },
              {
                title: "Create Impact",
                description:
                  "Beyond education, we support anti-trafficking initiatives — because the skills we teach can build a better, more equitable world.",
                icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-white/[0.08] bg-neutral-800 p-8 transition-all hover:-translate-y-1 hover:border-brand-lime/20"
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
                    <path d={value.icon} />
                  </svg>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
              Industries We Serve
            </span>
            <h2 className="font-display text-4xl font-bold text-white">
              Summit Topics
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Health & Wellness",
              "Business & Marketing",
              "Personal Growth",
              "Nutrition",
              "Mindset",
              "Entrepreneurship",
              "Lifestyle",
              "Holistic Health",
              "Digital Marketing",
              "Financial Freedom",
              "Leadership",
              "Coaching",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-white/[0.08] bg-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-all hover:border-brand-lime/20 hover:text-brand-lime"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white">
            Want to Host a Summit?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300">
            Whether you&apos;re a speaker, coach, or entrepreneur — we&apos;ll
            help you create a world-class virtual event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)]"
          >
            Get in Touch
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
