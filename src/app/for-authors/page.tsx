import type { Metadata } from "next";
import ForAuthorsContent from "./ForAuthorsContent";

export const metadata: Metadata = {
  title: "Virtual Summits for Authors & Thought Leaders",
  description:
    "Build a launch audience of thousands before your next book or course drops. Done-for-you virtual summit production for thought leaders.",
  openGraph: {
    title: "Virtual Summits for Authors & Thought Leaders — 360Summits",
    description:
      "Build a launch audience of thousands before your next book or course drops.",
  },
  alternates: { canonical: "/for-authors" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "I already have a publisher/agent. How does a virtual summit fit into my existing strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A summit is the perfect complement to traditional publishing. It builds a direct-to-reader email list your publisher can't give you, creates pre-launch buzz for your next book, and generates revenue independently. Several of our clients use summits to build the audience that makes their next book proposal irresistible to publishers.",
      },
    },
    {
      "@type": "Question",
      name: "I'm more of a solo expert. Do I need to involve other speakers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's actually the power move. When you host 15-25 experts, each one promotes the summit to their audience — and sends that traffic to you. It's not about sharing the spotlight; it's about borrowing their audiences to build yours. You're the host. You're the brand. The speakers amplify your reach.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you produce a virtual summit? I have a book launch coming up.",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our average timeline from strategy call to live event is 6 weeks. If you have a launch date in mind, we can reverse-engineer the summit to align perfectly — creating pre-launch buzz and building a list of thousands of buyers before your book even drops.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to the audience after the summit ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They're on your email list permanently. You own that relationship. Our post-summit sequences nurture them with replay access, All-Access Pass offers, and bridge content to your books, courses, and programs. Most clients see their summit audience become their most engaged and highest-spending segment.",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Virtual Summit Production for Authors & Thought Leaders",
  provider: { "@type": "Organization", name: "360Summits", url: "https://360summits.com" },
  description:
    "Done-for-you virtual summit production for authors, speakers, and thought leaders. Build a launch audience of thousands before your next book or course drops.",
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "Authors, speakers, thought leaders, course creators",
  },
};

export default function ForAuthorsPage() {
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
      <ForAuthorsContent />
    </>
  );
}
