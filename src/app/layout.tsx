import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://360summits.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "360Summits — Summits & Masterclasses For Those Who Love Learning",
    template: "%s — 360Summits",
  },
  description:
    "360Summits produces done-for-you virtual summits that grow your email list by thousands, position you as the authority, and generate revenue — all in 6 weeks.",
  keywords: [
    "virtual summits",
    "online masterclasses",
    "health summits",
    "wellness events",
    "business summits",
    "virtual event production",
    "summit hosting",
    "360Summits",
  ],
  authors: [{ name: "360Summits" }],
  creator: "360Summits",
  publisher: "360Summits",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "360Summits",
    title: "360Summits — Summits & Masterclasses For Those Who Love Learning",
    description:
      "Done-for-you virtual summit production that grows your email list by thousands, positions you as the authority, and generates revenue.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "360Summits — Virtual Summit Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "360Summits — Summits & Masterclasses For Those Who Love Learning",
    description:
      "Done-for-you virtual summit production that grows your email list by thousands and generates revenue.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "360Summits",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/android-chrome-512x512.png`,
      },
      description:
        "360Summits produces done-for-you virtual summits for health coaches, business experts, and thought leaders.",
      foundingDate: "2020",
      address: {
        "@type": "PostalAddress",
        streetAddress: "125 NW 13th St Suite B8",
        addressLocality: "Boca Raton",
        addressRegion: "FL",
        postalCode: "33432",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-714-436-1234",
        contactType: "sales",
        email: "info@360summits.com",
      },
      sameAs: [
        "https://www.linkedin.com/company/360summits",
        "https://www.facebook.com/360summits",
        "https://www.instagram.com/360summits",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "360Summits",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vmt1ngp.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
