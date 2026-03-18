import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — The Team Behind 50+ Virtual Summits",
  description:
    "360Summits is a full-service virtual summit production company. Learn about our mission, our process, and the team that has produced 50+ events with 1M+ registrations.",
  openGraph: {
    title: "About 360Summits — The Team Behind 50+ Virtual Summits",
    description:
      "Full-service virtual summit production. 50+ events, 1M+ registrations, 200+ speakers managed.",
  },
  alternates: { canonical: "/about" },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About 360Summits",
  description:
    "Learn about 360Summits, the full-service virtual summit production company that has produced 50+ summits and driven 1M+ registrations.",
  url: "https://360summits.com/about",
  mainEntity: { "@id": "https://360summits.com/#organization" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
