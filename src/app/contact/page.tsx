import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Tell Us About Your Summit Vision",
  description:
    "Ready to launch your virtual summit? Share your topic, audience, and goals — we'll tell you exactly how we'd bring your summit to life.",
  openGraph: {
    title: "Contact 360Summits — Tell Us About Your Summit Vision",
    description:
      "Ready to launch your virtual summit? Share your vision and we'll create a custom plan.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
