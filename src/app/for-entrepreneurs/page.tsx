import type { Metadata } from "next";
import ForEntrepreneursContent from "./ForEntrepreneursContent";

export const metadata: Metadata = {
  title: "Virtual Summits for Business & Marketing Experts",
  description:
    "Stop competing on ads. Host a virtual summit that generates thousands of qualified leads and positions you as the authority in your market.",
  openGraph: {
    title: "Virtual Summits for Business & Marketing Experts — 360Summits",
    description:
      "Host a virtual summit that generates thousands of qualified leads and positions you as the authority.",
  },
  alternates: { canonical: "/for-entrepreneurs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a virtual summit different from a webinar funnel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A webinar is you talking to your existing audience. A summit is 20+ speakers all promoting to their audiences — and sending that traffic to you. It's the difference between fishing with a pole and fishing with a net. Plus, the authority boost from hosting can't be replicated with a webinar.",
      },
    },
    {
      "@type": "Question",
      name: "I already have a course or program. How does a summit fit in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perfectly. A summit is the top of your funnel. It fills your list with thousands of qualified leads who've already spent hours learning from you and your speakers. Then your course, coaching program, or mastermind is the natural next step. Many clients use summits as their primary lead gen for high-ticket offers.",
      },
    },
    {
      "@type": "Question",
      name: "What's the investment and ROI for hosting a virtual summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We share pricing on our strategy call — it depends on the scope of your summit. Our clients average $500K+ in combined revenue, and most see positive ROI within 48 hours of launch through All-Access Pass sales alone.",
      },
    },
    {
      "@type": "Question",
      name: "I don't have connections to big-name speakers. Is that a problem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We've managed 200+ speakers across 50+ summits. We handle recruitment, outreach, and coordination. We know who says yes, who delivers great content, and who actually promotes.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Production for Business & Marketing Experts",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Done-for-you virtual summit production for entrepreneurs, business coaches, and marketing experts. Generate thousands of qualified leads and position yourself as the authority.",
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Entrepreneurs, business coaches, marketing experts",
  },
};

export default function ForEntrepreneursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ForEntrepreneursContent />
    </>
  );
}
