import type { Metadata } from "next";
import SummitsContent from "./SummitsContent";

export const metadata: Metadata = {
  title: "Summits & Masterclasses — 360Summits",
  description:
    "Browse upcoming virtual summits and masterclasses in health, wellness, business, and personal growth.",
};

export default function SummitsPage() {
  return <SummitsContent />;
}
