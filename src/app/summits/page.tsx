import type { Metadata } from "next";
import SummitsContent from "./SummitsContent";

export const metadata: Metadata = {
  title: "Client Results — Virtual Summit Case Studies",
  description:
    "See how 360Summits helped clients generate 8–15K registrations, build massive email lists, and create six-figure revenue with done-for-you virtual summits.",
  openGraph: {
    title: "Client Results — Virtual Summit Case Studies",
    description:
      "See how 360Summits helped clients generate 8–15K registrations and six-figure revenue with done-for-you virtual summits.",
  },
  alternates: { canonical: "/summits" },
};

export default function SummitsPage() {
  return <SummitsContent />;
}
