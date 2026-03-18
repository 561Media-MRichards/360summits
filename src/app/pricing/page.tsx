import type { Metadata } from "next";
import PricingContent from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing & Packages — Flat-Fee Summit Production from $12K",
  description:
    "Predictable flat-fee packages for virtual summit production. No revenue share. Starter ($12K), Professional ($18K), and Enterprise ($28K) tiers with full production included.",
  openGraph: {
    title: "Pricing & Packages — 360Summits",
    description:
      "Flat-fee virtual summit production packages from $12K. No revenue share — know your costs before you start.",
  },
  alternates: { canonical: "/pricing" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Production",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Turnkey virtual summit production with flat-fee pricing. Includes speaker management, landing pages, email sequences, live production, and post-summit reporting.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "12000",
    highPrice: "28000",
    priceCurrency: "USD",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "12000",
        priceCurrency: "USD",
        description: "Up to 5 speakers, basic sponsor support, landing page, email sequences, live production, post-summit report.",
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "18000",
        priceCurrency: "USD",
        description: "Up to 10 speakers, advanced email segmentation, speaker & JV recruitment, All-Access Pass funnel, custom branded hub, dedicated PM.",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "28000",
        priceCurrency: "USD",
        description: "Unlimited speakers, advanced sponsor packages, multi-track support, premium replay & upsell funnels, post-summit monetization strategy.",
      },
    ],
  },
  areaServed: "US",
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingContent />
    </>
  );
}
