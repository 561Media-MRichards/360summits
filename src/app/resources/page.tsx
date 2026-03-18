import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources — Virtual Summit Guides, Strategies & Insights",
  description:
    "Expert guides on hosting virtual summits, growing your email list, monetizing events, and building authority. Based on data from 50+ summits and 1M+ registrations.",
  openGraph: {
    title: "Resources — Virtual Summit Guides & Strategies",
    description:
      "Expert guides on hosting virtual summits based on data from 50+ events and 1M+ registrations.",
  },
  alternates: { canonical: "/resources" },
};

const articles = [
  {
    slug: "how-to-host-a-virtual-summit",
    title: "The Complete Guide to Hosting a Virtual Summit in 2026",
    excerpt:
      "Everything you need to know about planning, producing, and profiting from a virtual summit — based on our experience producing 50+ events.",
    category: "Getting Started",
    categoryColor: "bg-pill-mint text-green-800",
    readTime: "12 min read",
  },
  {
    slug: "virtual-summit-vs-webinar",
    title: "Virtual Summit vs Webinar: Which Grows Your Business Faster?",
    excerpt:
      "Webinars reach your existing audience. Summits build a new one. Here's the data on why summits generate 10x more leads than webinars.",
    category: "Strategy",
    categoryColor: "bg-pill-lavender text-purple-light",
    readTime: "8 min read",
  },
  {
    slug: "virtual-summit-cost",
    title: "How Much Does a Virtual Summit Cost? (Real Numbers From 50+ Events)",
    excerpt:
      "Transparent breakdown of what virtual summits actually cost to produce — and the ROI our clients see within the first 48 hours.",
    category: "Planning",
    categoryColor: "bg-pill-yellow text-yellow-800",
    readTime: "10 min read",
  },
];

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-pastel-cream py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full bg-pill-yellow/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-lavender/20 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-pill-yellow px-4 py-1.5 text-xs font-semibold text-yellow-800">
            Resources
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold text-slate-900 md:text-6xl">
            Learn how to launch, grow, and profit from virtual summits
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Actionable guides based on real data from 50+ summits and 1M+
            registrations. No theory — just what works.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white transition-all hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h2 className="mb-3 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-purple-light">
                    {article.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-slate-900 transition-colors group-hover:text-purple-light">
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pastel-lavender py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to host your own summit?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-500">
            Skip the learning curve. We produce everything for you — strategy,
            tech, speakers, promotion, and monetization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
          >
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </main>
  );
}
