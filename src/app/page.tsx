import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "360Summits — Summits & Masterclasses For Those Who Love Learning",
  description:
    "360Summits produces done-for-you virtual summits that grow your email list by thousands, position you as the authority, and generate revenue — all in 6 weeks. 50+ summits produced.",
  openGraph: {
    title: "360Summits — Summits & Masterclasses For Those Who Love Learning",
    description:
      "Done-for-you virtual summit production. 50+ summits, 1M+ registrations, $500K+ generated for clients.",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
