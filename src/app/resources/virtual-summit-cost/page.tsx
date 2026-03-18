import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://360summits.com";

export const metadata: Metadata = {
  title: "How Much Does a Virtual Summit Cost? Real Numbers From 50+ Events",
  description:
    "A virtual summit typically costs between $5,000 and $50,000+ to produce. See transparent cost breakdowns, real ROI data from 50+ events, and what drives virtual summit pricing.",
  keywords: [
    "virtual summit cost",
    "how much does a virtual summit cost",
    "virtual summit pricing",
    "virtual summit budget",
    "virtual event cost",
    "online summit cost",
    "virtual summit ROI",
  ],
  openGraph: {
    title: "How Much Does a Virtual Summit Cost? Real Numbers From 50+ Events",
    description:
      "Transparent cost breakdowns and ROI data from 50+ virtual summits. See what you should actually budget.",
    type: "article",
    url: `${siteUrl}/resources/virtual-summit-cost`,
    publishedTime: "2026-03-01T08:00:00Z",
    authors: ["360Summits Team"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does a Virtual Summit Cost? Real Numbers From 50+ Events",
    description:
      "Transparent cost breakdowns and ROI data from 50+ virtual summits.",
  },
  alternates: { canonical: "/resources/virtual-summit-cost" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Virtual Summit Cost? Real Numbers From 50+ Events",
  description:
    "A virtual summit typically costs between $5,000 and $50,000+ to produce. Transparent cost breakdowns, real ROI data, and what drives virtual summit pricing.",
  author: {
    "@type": "Person",
    name: "360Summits Team",
    jobTitle: "Editorial Team",
    url: `${siteUrl}/about`,
  },
  publisher: {
    "@type": "Organization",
    name: "360Summits",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/android-chrome-512x512.png`,
    },
  },
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/resources/virtual-summit-cost`,
  },
  url: `${siteUrl}/resources/virtual-summit-cost`,
  inLanguage: "en-US",
  wordCount: 2200,
  articleSection: "Planning",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a virtual summit cost to produce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual summit typically costs between $5,000 and $50,000+ to produce. DIY approaches can start as low as $500-$2,000 in software costs (though your time investment is significant). Hiring freelancers piecemeal runs $5,000-$15,000. A done-for-you production company like 360Summits charges $15,000-$50,000+ but handles everything from strategy to monetization.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ROI of a virtual summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average virtual summit produced by 360Summits generates $28,000-$42,000 in All-Access Pass revenue alone, with 8,000-15,000 registrations. When you factor in backend course sales, coaching upsells, and sponsorship revenue, total generated value often exceeds $500,000 within 12 months. Most clients see positive ROI within 48 hours of launch.",
      },
    },
    {
      "@type": "Question",
      name: "What does a done-for-you virtual summit package include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A done-for-you package from 360Summits includes summit strategy and positioning, platform setup and tech, landing page and funnel design, email marketing sequences, speaker outreach and management, graphic design and branding, promotion strategy and ad management, All-Access Pass creation and monetization, and post-summit follow-up sequences. Clients typically invest 2-3 hours per week while the production team handles everything else.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to plan a virtual summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With a professional production company, a virtual summit can go from concept to launch in 6-8 weeks. DIY summits typically take 3-6 months because you're learning as you go. The biggest time savings with a done-for-you approach are in speaker outreach, tech setup, and email sequence writing — tasks that take first-timers 10x longer than experienced producers.",
      },
    },
  ],
};

export default function VirtualSummitCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-pastel-cream py-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-[350px] w-[350px] rounded-full bg-pill-yellow/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-pill-lavender/20 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <Link
              href="/resources"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-purple-light"
            >
              &larr; Back to Resources
            </Link>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex rounded-full bg-pill-yellow px-3 py-1 text-xs font-semibold text-yellow-800">
                Planning
              </span>
              <span className="text-xs text-slate-400">10 min read</span>
            </div>
            <h1 className="font-display text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              How Much Does a Virtual Summit Cost? Real Numbers From 50+ Events
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  360Summits Team
                </p>
                <p className="text-xs text-slate-500">
                  Editorial Team of 360Summits &middot; March 1, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">

            {/* Direct Answer (AEO) */}
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              <strong>A virtual summit typically costs between $5,000 and $50,000+ to produce</strong>, depending on
              whether you do it yourself, hire freelancers, or work with a done-for-you production company. The
              biggest variable is not the software — it is the labor. A DIY summit might only cost $500-$2,000
              in tools, but you will invest 200-400 hours of your own time. A fully produced summit from a
              company like{" "}
              <Link href="/how-it-works" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                360Summits
              </Link>{" "}
              runs $15,000-$50,000+ but delivers a turnkey event, typically generating far more in revenue
              than the investment.
            </p>
            <p className="mb-12 text-lg leading-relaxed text-slate-700">
              Below, I am sharing the actual numbers from producing over 50 virtual summits — no vague ranges,
              no hidden fees. Whether you are considering a health summit, a business summit, or a niche
              industry event, these numbers will help you budget with confidence.
            </p>

            {/* Key Takeaways */}
            <div className="mb-16 rounded-2xl bg-pastel-pink p-8 md:p-10">
              <h2 className="mb-4 font-display text-xl font-bold text-slate-900">
                Key Takeaways
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-light" />
                  <span>
                    DIY virtual summits cost $500-$2,000 in tools but require 200-400 hours of your time
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-light" />
                  <span>
                    Freelancer-assembled summits run $5,000-$15,000 with significant coordination overhead
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-light" />
                  <span>
                    Done-for-you production ($15,000-$50,000+) delivers 8-15K registrations and $28K-$42K in pass revenue on average
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-light" />
                  <span>
                    Most 360Summits clients see positive ROI within 48 hours of launch
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-purple-light" />
                  <span>
                    The hidden cost most people miss: opportunity cost of your time and revenue lost from poor monetization
                  </span>
                </li>
              </ul>
            </div>

            {/* Section: 3 Approaches */}
            <h2 className="mb-6 font-display text-3xl font-bold text-slate-900">
              The 3 Approaches to Hosting a Virtual Summit
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              Not every summit needs the same budget. The right investment depends on your goals, your
              timeline, and honestly — how much of the work you want to do yourself. Here are the three
              paths, with transparent numbers on each.
            </p>

            {/* Approach 1: DIY */}
            <h3 className="mb-3 font-display text-2xl font-bold text-slate-900">
              1. DIY — Do It All Yourself ($500-$2,000 in tools)
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              This is the cheapest option on paper. You sign up for a summit platform (HeySummit, Zoom, or
              similar), build your own landing pages, write your own emails, recruit speakers yourself, and
              handle all the promotion. Your out-of-pocket cost stays low — typically $500-$2,000 for
              software subscriptions and basic design tools.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              The real cost is your time. First-time summit hosts report spending 200-400 hours over 3-6
              months planning, building, and troubleshooting their event. If your time is worth $100/hour
              (conservative for most coaches and consultants), that is $20,000-$40,000 in opportunity cost
              that never shows up on a receipt.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              <strong>Best for:</strong> Bootstrapped creators with more time than budget, or people who want
              to learn every aspect of summit production before scaling.
            </p>

            {/* Approach 2: Freelancers */}
            <h3 className="mb-3 font-display text-2xl font-bold text-slate-900">
              2. Hire Freelancers Piecemeal ($5,000-$15,000)
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              This is the middle path. You hire a web designer for the landing page, a copywriter for the
              emails, a virtual assistant for speaker coordination, and maybe a social media manager for
              promotion. Each hire costs $500-$3,000 depending on their experience.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              The total runs $5,000-$15,000, but there is a catch: <em>you</em> are the project manager.
              You are making sure the designer and the copywriter are aligned on brand, that the email
              sequences are timed correctly with the launch, and that nothing falls through the cracks.
              Coordination overhead is the hidden tax on this approach, and it still requires 50-100 hours
              of your time.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              <strong>Best for:</strong> Experienced marketers who already understand launch mechanics and
              just need execution support.
            </p>

            {/* Approach 3: Done-for-you */}
            <h3 className="mb-3 font-display text-2xl font-bold text-slate-900">
              3. Done-for-You Production Company ($15,000-$50,000+)
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              This is what we do at{" "}
              <Link href="/how-it-works" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                360Summits
              </Link>
              . You bring the topic and your expertise. We handle everything else — strategy, platform,
              landing pages, email sequences, speaker outreach, graphic design, promotion, ad management,
              All-Access Pass monetization, and post-summit follow-up. The entire summit goes from concept
              to launch in 6-8 weeks.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              The investment is higher upfront, but the results are not even close. Our average summit
              drives 8,000-15,000 registrations, and the revenue from All-Access Pass sales alone typically
              covers the production cost within the first 48 hours. You invest 2-3 hours per week, not
              200+ hours over several months.
            </p>
            <p className="mb-12 text-lg leading-relaxed text-slate-700">
              <strong>Best for:</strong>{" "}
              <Link href="/for-coaches" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                Health coaches
              </Link>
              ,{" "}
              <Link href="/for-entrepreneurs" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                entrepreneurs
              </Link>
              , and thought leaders who want a high-impact event without derailing their business for months.
            </p>

            {/* Cost Breakdown Table */}
            <h2 className="mb-6 font-display text-3xl font-bold text-slate-900">
              Cost Breakdown by Category
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              Here is where the money actually goes. This table shows realistic cost ranges for each major
              category, across all three approaches.
            </p>

            <div className="mb-16 overflow-hidden rounded-2xl bg-pastel-cream">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="px-6 py-4 font-display text-sm font-bold text-slate-900">
                        Category
                      </th>
                      <th className="px-6 py-4 font-display text-sm font-bold text-slate-900">
                        DIY
                      </th>
                      <th className="px-6 py-4 font-display text-sm font-bold text-slate-900">
                        Freelancers
                      </th>
                      <th className="px-6 py-4 font-display text-sm font-bold text-slate-900">
                        Done-for-You
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Technology / Platform</td>
                      <td className="px-6 py-3.5">$50-$300/mo</td>
                      <td className="px-6 py-3.5">$50-$300/mo</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Landing Page &amp; Funnel</td>
                      <td className="px-6 py-3.5">$0 (your time)</td>
                      <td className="px-6 py-3.5">$1,000-$3,000</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Email Marketing Setup</td>
                      <td className="px-6 py-3.5">$0 (your time)</td>
                      <td className="px-6 py-3.5">$1,000-$2,500</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Speaker Management</td>
                      <td className="px-6 py-3.5">$0 (your time)</td>
                      <td className="px-6 py-3.5">$500-$2,000</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Graphic Design &amp; Branding</td>
                      <td className="px-6 py-3.5">$100-$500</td>
                      <td className="px-6 py-3.5">$500-$2,000</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Promotion &amp; Advertising</td>
                      <td className="px-6 py-3.5">$200-$1,000</td>
                      <td className="px-6 py-3.5">$1,000-$3,000</td>
                      <td className="px-6 py-3.5">Included*</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-3.5 font-medium">Monetization Setup</td>
                      <td className="px-6 py-3.5">$0 (your time)</td>
                      <td className="px-6 py-3.5">$500-$1,500</td>
                      <td className="px-6 py-3.5">Included</td>
                    </tr>
                    <tr className="border-b border-slate-100 font-semibold">
                      <td className="px-6 py-3.5">Total Out-of-Pocket</td>
                      <td className="px-6 py-3.5">$500-$2,000</td>
                      <td className="px-6 py-3.5">$5,000-$15,000</td>
                      <td className="px-6 py-3.5">$15,000-$50,000+</td>
                    </tr>
                    <tr className="font-semibold text-purple-light">
                      <td className="px-6 py-3.5">Your Time Investment</td>
                      <td className="px-6 py-3.5">200-400 hrs</td>
                      <td className="px-6 py-3.5">50-100 hrs</td>
                      <td className="px-6 py-3.5">2-3 hrs/week</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="px-6 pb-4 pt-2 text-xs text-slate-500">
                *Ad spend is typically an additional $1,000-$5,000 depending on goals, managed by our team.
              </p>
            </div>

            {/* Hidden Costs */}
            <h2 className="mb-6 font-display text-3xl font-bold text-slate-900">
              The Hidden Costs Most People Don&apos;t Consider
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              The line items in the table above are the obvious costs. But when I talk to people who have
              tried and failed with DIY summits, the real damage came from costs that never appeared on a
              spreadsheet.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
              Your Time Has a Price Tag
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              If you charge $150/hour for coaching, and you spend 300 hours building a summit, that is
              $45,000 in revenue you could have earned serving clients. Even if you value your time at
              $50/hour, that DIY summit just cost you $15,000 in opportunity cost — on top of the $2,000
              in tools. The "cheap" option suddenly looks expensive.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
              Failed Launches Are the Most Expensive Outcome
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              Industry data suggests that roughly 60-70% of first-time DIY virtual summits underperform
              significantly — either launching to fewer than 500 registrations or failing to launch at all.
              The cost is not just the money and time spent building. It is the months of momentum lost, the
              audience goodwill burned, and the confidence hit that delays your next attempt.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
              Poor Monetization Leaves Money on the Table
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-slate-700">
              Most DIY summits leave 60-80% of potential revenue uncaptured. They skip the All-Access Pass,
              underprice it, use weak sales copy, or fail to set up proper post-summit email sequences.
              If a well-monetized summit would generate $35,000 in pass revenue, and a poorly monetized one
              generates $5,000, that $30,000 gap is a very real hidden cost — even if it never appears on
              an invoice.
            </p>

            {/* ROI Section */}
            <div className="mb-16 rounded-2xl bg-pastel-mint p-8 md:p-10">
              <h2 className="mb-6 font-display text-3xl font-bold text-slate-900">
                What Is the ROI of a Virtual Summit?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                This is the question that actually matters. The cost of a summit is only meaningful relative
                to what it returns. Here are real numbers from 360Summits client events.
              </p>

              <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
                The Direct Revenue Math
              </h3>
              <p className="mb-2 text-lg leading-relaxed text-slate-700">
                Let us walk through a typical health and wellness summit produced by our team:
              </p>
              <div className="mb-6 overflow-hidden rounded-xl bg-white/70">
                <table className="w-full text-left text-sm">
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">Total Registrations</td>
                      <td className="px-5 py-3 text-right font-semibold">10,000</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">All-Access Pass Price</td>
                      <td className="px-5 py-3 text-right font-semibold">$47-$97</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">All-Access Pass Conversion Rate</td>
                      <td className="px-5 py-3 text-right font-semibold">3-5%</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">All-Access Pass Revenue</td>
                      <td className="px-5 py-3 text-right font-semibold text-green-800">
                        $28,000-$42,000
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">New Email Subscribers</td>
                      <td className="px-5 py-3 text-right font-semibold">1,800-3,200</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-5 py-3 font-medium">
                        <Link href="/sponsorships" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                          Sponsorship Revenue
                        </Link>{" "}
                        (if applicable)
                      </td>
                      <td className="px-5 py-3 text-right font-semibold text-green-800">
                        $5,000-$20,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-medium">
                        Backend Sales (courses, coaching — 12 months)
                      </td>
                      <td className="px-5 py-3 text-right font-semibold text-green-800">
                        $50,000-$200,000+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                Add those up and a well-produced summit can generate <strong>$83,000-$262,000+ in total
                value</strong> within the first year. Against a production investment of $15,000-$50,000,
                the math speaks for itself. And that is before factoring in the authority positioning,
                speaker relationships, and brand equity that compound over time.
              </p>

              <h3 className="mb-3 font-display text-xl font-bold text-slate-900">
                When Does the Investment Pay for Itself?
              </h3>
              <p className="mb-4 text-lg leading-relaxed text-slate-700">
                For most of our clients, the All-Access Pass revenue alone covers the production cost.
                That revenue typically comes in within the first 48 hours of the summit going live. In
                other words: <strong>most clients see positive ROI before the summit is even over</strong>.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                Over 12 months, when you factor in the list growth, backend sales, and repeat events, the
                total generated value from a single summit often exceeds <strong>$500,000</strong>. That
                is the number we consistently see with{" "}
                <Link href="/for-coaches" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                  health and wellness summits
                </Link>
                {" "}and{" "}
                <Link href="/for-entrepreneurs" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                  business summits
                </Link>{" "}
                alike.
              </p>
            </div>

            {/* How to Decide */}
            <h2 className="mb-6 font-display text-3xl font-bold text-slate-900">
              How to Decide What to Invest
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              There is no universally right budget for a virtual summit. The right investment depends on
              three things:
            </p>
            <ol className="mb-6 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-slate-700">
              <li>
                <strong>Your time value.</strong> If your time is worth more than $50/hour, the DIY route
                is almost always more expensive than it appears. Run the math: multiply your hourly rate
                by 200-400 hours and add it to the tool costs. That is your real DIY cost.
              </li>
              <li>
                <strong>Your revenue goal.</strong> If you need the summit to generate significant revenue
                (not just "build your list"), professional monetization setup is critical. The difference
                between amateur and professional monetization is often $20,000-$30,000 in pass revenue alone.
              </li>
              <li>
                <strong>Your timeline.</strong> If you need to launch in 6-8 weeks, a done-for-you
                approach is the only realistic path. DIY summits take 3-6 months minimum for a first-timer.
              </li>
            </ol>
            <p className="mb-12 text-lg leading-relaxed text-slate-700">
              If you are unsure where you fall, start with this question: <em>What would it be worth to
              add 2,000-3,000 engaged subscribers to your email list and generate $28,000-$42,000 in
              revenue within 48 hours?</em> If that number is significantly more than $15,000-$50,000,
              the done-for-you route is the clear winner. You can read more about{" "}
              <Link href="/resources/how-to-host-a-virtual-summit" className="font-medium text-purple-light underline decoration-purple-lighter/40 underline-offset-2 hover:decoration-purple-light">
                how to host a virtual summit
              </Link>{" "}
              to understand the full process before deciding.
            </p>

            {/* FAQ */}
            <h2 className="mb-8 font-display text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mb-16 space-y-6">
              <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
                <h3 className="mb-3 font-display text-lg font-bold text-slate-900">
                  How much does a virtual summit cost to produce?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A virtual summit typically costs between $5,000 and $50,000+ to produce. DIY approaches
                  start as low as $500-$2,000 in software costs (though your time investment is significant).
                  Hiring freelancers piecemeal runs $5,000-$15,000. A done-for-you production company like
                  360Summits charges $15,000-$50,000+ and handles everything from strategy to monetization.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
                <h3 className="mb-3 font-display text-lg font-bold text-slate-900">
                  What is the ROI of a virtual summit?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  The average 360Summits event generates $28,000-$42,000 in All-Access Pass revenue with
                  8,000-15,000 registrations. Including backend course sales, coaching upsells, and
                  sponsorship revenue, total generated value often exceeds $500,000 within 12 months. Most
                  clients see positive ROI within 48 hours of launch.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
                <h3 className="mb-3 font-display text-lg font-bold text-slate-900">
                  What does a done-for-you virtual summit package include?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A done-for-you package from 360Summits includes summit strategy and positioning, platform
                  setup, landing page and funnel design, email marketing sequences (typically 15-25 emails),
                  speaker outreach and management, graphic design and branding, promotion strategy and paid
                  ad management, All-Access Pass creation and sales page, and post-summit follow-up sequences.
                  Clients typically invest just 2-3 hours per week while our team handles everything else.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
                <h3 className="mb-3 font-display text-lg font-bold text-slate-900">
                  How long does it take to plan a virtual summit?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  With a professional production company, a virtual summit can go from concept to launch in
                  6-8 weeks. DIY summits typically take 3-6 months because you are learning as you build.
                  The biggest time savings with a done-for-you approach come from speaker outreach, tech
                  setup, and email sequence writing — tasks that take first-timers significantly longer than
                  experienced producers.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-pastel-lavender p-8 text-center md:p-12">
              <h2 className="mb-4 font-display text-3xl font-bold text-slate-900">
                Get a Custom Quote for Your Summit
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
                Every summit is different. Tell us about your topic, audience, and goals, and we will
                put together a transparent proposal with exact costs and projected ROI — no pressure,
                no surprises.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
              >
                Get a Custom Quote &rarr;
              </Link>
            </div>

          </div>
        </article>
      </main>
    </>
  );
}
