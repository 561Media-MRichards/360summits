import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/brandguide/assets/logo-horizontal.svg"
              alt="360Summits"
              className="mb-4 h-8 w-auto"
            />
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              We produce turnkey virtual summits for experts, coaches, and
              thought leaders ready to reach a bigger audience.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/360summits" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/360summits" },
                { label: "Instagram", href: "https://www.instagram.com/360summits/" },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 transition-all hover:border-brand-purple hover:text-brand-purple"
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold text-slate-900">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/how-it-works" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                How It Works
              </Link>
              <Link href="/summits" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Client Results
              </Link>
              <Link href="/sponsorships" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Sponsorships
              </Link>
              <Link href="/pricing" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Pricing
              </Link>
              <Link href="/for-coaches" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                For Coaches
              </Link>
              <Link href="/for-entrepreneurs" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                For Entrepreneurs
              </Link>
              <Link href="/for-authors" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                For Authors
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold text-slate-900">
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/resources" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                All Articles
              </Link>
              <Link href="/resources/how-to-host-a-virtual-summit" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                How to Host a Summit
              </Link>
              <Link href="/resources/virtual-summit-vs-webinar" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Summit vs Webinar
              </Link>
              <Link href="/resources/virtual-summit-cost" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Summit Costs
              </Link>
            </div>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold text-slate-900">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                About
              </Link>
              <Link href="/contact" className="text-sm text-slate-500 transition-colors hover:text-brand-purple">
                Contact
              </Link>
              <a
                href="tel:+17144361234"
                className="text-sm text-slate-500 transition-colors hover:text-brand-purple"
              >
                (714) 436-1234
              </a>
              <a
                href="mailto:info@360summits.com"
                className="text-sm text-slate-500 transition-colors hover:text-brand-purple"
              >
                info@360summits.com
              </a>
              <span className="text-sm text-slate-400">
                125 NW 13th St Suite B8
                <br />
                Boca Raton, FL 33432
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Terms", href: "/terms" },
              { label: "Privacy", href: "/privacy" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-500 transition-all hover:border-slate-300">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} 360Summits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
