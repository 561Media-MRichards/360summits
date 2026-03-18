import type { Metadata } from "next";
import ForCoachesContent from "./ForCoachesContent";

export const metadata: Metadata = {
  title: "Virtual Summits for Health & Wellness Coaches",
  description:
    "Turn your health expertise into a virtual summit that builds your email list by thousands. We handle production, tech, and promotion — you deliver your content.",
  openGraph: {
    title: "Virtual Summits for Health & Wellness Coaches — 360Summits",
    description:
      "Turn your health expertise into a virtual summit that builds your email list by thousands.",
  },
  alternates: { canonical: "/for-coaches" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I don't have a big audience yet. Can a virtual summit still work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly why summits work so well. Your speakers and JV partners each promote to their own lists. You're borrowing their audiences to build yours. Most of our health coaches started with lists under 500 people.",
      },
    },
    {
      "@type": "Question",
      name: "How much time will hosting a virtual summit take from my practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 2-3 hours per week during the build phase. We handle the production, tech, speaker outreach, and promotion. You focus on choosing your topic and delivering your content during the live event.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of results can health coaches expect from a virtual summit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our average summit drives 8-15K registrations. For health and wellness summits specifically, we've seen list growth of 1,800 to 3,200 subscribers and $28K-$42K in All-Access Pass revenue. Most clients see positive ROI within 48 hours of launch.",
      },
    },
    {
      "@type": "Question",
      name: "What if I've never hosted a virtual event before?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of our clients haven't. That's the whole point — we're the production team. We've produced 50+ summits and know exactly what works. You bring the expertise, we bring everything else.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Production for Health & Wellness Coaches",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Done-for-you virtual summit production for health coaches, wellness professionals, and nutrition experts. We handle production, tech, speakers, and promotion.",
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Health coaches, wellness professionals, nutrition experts",
  },
};

export default function ForCoachesPage() {
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
      <ForCoachesContent />
    </>
  );
}
