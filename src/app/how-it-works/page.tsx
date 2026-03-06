import type { Metadata } from "next";
import HowItWorksContent from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works — 360Summits",
  description:
    "Learn how 360Summits produces world-class virtual summits — from speaker coordination to attendee engagement.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
