import type { Metadata } from "next";
import SponsorshipsContent from "./SponsorshipsContent";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities — Reach 8–15K Engaged Buyers Per Summit",
  description:
    "Sponsor a 360Summits virtual summit and get your brand in front of 8–15K pre-qualified buyers in health, wellness, and business. Speaking slots, email access, and branded content — not just a logo placement.",
  openGraph: {
    title: "Sponsorship Opportunities — 360Summits",
    description:
      "Put your brand in front of 8–15K pre-qualified buyers per summit. Speaking slots, email access, and branded content integration.",
  },
  alternates: { canonical: "/sponsorships" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you match sponsors with the right summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with your target customer profile. If you sell supplements, we place you in a health or nutrition summit. If you offer business software, we match you with an entrepreneurship event. Every match is based on audience alignment, not availability.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of ROI should we expect from virtual summit sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by tier and industry, but sponsors typically see 40%+ email open rates from summit lists, direct product inquiries during events, and ongoing pipeline from email access post-summit. We provide full reporting so you can measure every metric that matters.",
      },
    },
    {
      "@type": "Question",
      name: "Is the audience actually engaged, or just registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Summit registrants actively opted in for a multi-day educational event. They attend sessions, ask questions in Q&A, and open emails at 40%+ rates. These aren't passive followers — they signed up to learn, which means they're primed to buy.",
      },
    },
    {
      "@type": "Question",
      name: "What does email list access mean exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registrants opt in knowing that summit sponsors will follow up. You receive the list of opted-in registrants and can add them to your email marketing. This isn't a one-time blast — it's an ongoing relationship channel.",
      },
    },
    {
      "@type": "Question",
      name: "Can we get exclusivity in our product category?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Presenting Sponsors receive exclusive category rights — meaning no competing brand sponsors the same summit. Gold and Silver tiers are subject to availability and we limit the total number of sponsors per event.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should we plan for summit sponsorship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend 6-8 weeks before a summit launch for full integration. However, we produce summits year-round, so there's usually an upcoming event that fits your timeline.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Sponsorship",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Sponsor a virtual summit and reach 8–15K pre-qualified registrants with speaking slots, email list access, product showcases, and branded content integration.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "10000",
    highPrice: "50000",
    priceCurrency: "USD",
    offerCount: "3",
  },
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "CMOs, marketing directors, and brand managers",
  },
};

export default function SponsorshipsPage() {
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
      <SponsorshipsContent />
    </>
  );
}
