import type { Metadata } from "next";
import HowItWorksContent from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works — Our 6-Step Summit Production Process",
  description:
    "From strategy to post-summit monetization, our proven 6-step process handles everything so you can focus on delivering your message. 50+ summits produced.",
  openGraph: {
    title: "How It Works — Our 6-Step Summit Production Process",
    description:
      "Our proven 6-step process handles everything from strategy to monetization. 50+ summits produced.",
  },
  alternates: { canonical: "/how-it-works" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Production",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Done-for-you virtual summit production including strategy, web design, email marketing, speaker management, promotion, live event execution, and post-summit monetization.",
  areaServed: "US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Summit Production Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Summit Production", description: "End-to-end virtual event production from concept to post-summit monetization." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Funnels", description: "Custom landing pages, registration flows, and high-converting sales funnels." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email Marketing", description: "Automated sequences for registration, engagement, and post-summit sales." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Speaker & JV Management", description: "Speaker recruitment, joint venture partnerships, and affiliate commission management." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Strategy", description: "Topic curation, session structure, and speaker prep for maximum impact." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monetization", description: "All-Access Passes, replay funnels, upsells, and revenue optimization." } },
    ],
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HowItWorksContent />
    </>
  );
}
