import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-purple-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="/brandguide/assets/logo-horizontal.svg"
              alt="360Summits"
              className="mb-4 h-8 w-auto brightness-0 invert"
            />
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              For those who love learning. Virtual summits and masterclasses
              connecting experts with passionate learners worldwide.
            </p>
            <div className="flex gap-4">
              {[
                {
                  label: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
                },
                {
                  label: "Facebook",
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                },
                {
                  label: "Instagram",
                  icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-white/30 hover:text-white"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white/90">
              Events
            </h4>
            <div className="flex flex-col gap-3">
              {["Summits", "Masterclasses", "How It Works"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "How It Works"
                      ? "/how-it-works"
                      : `/${item.toLowerCase()}`
                  }
                  className="text-sm text-white/60 transition-colors hover:text-brand-lime"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {["About", "Contact", "Brand Guide"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Brand Guide"
                      ? "/brandguide"
                      : `/${item.toLowerCase()}`
                  }
                  className="text-sm text-white/60 transition-colors hover:text-brand-lime"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-body text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a
                href="tel:+17144361234"
                className="transition-colors hover:text-brand-lime"
              >
                (714) 436-1234
              </a>
              <span>Boynton Beach, FL</span>
              <a
                href="mailto:info@360summits.com"
                className="transition-colors hover:text-brand-lime"
              >
                info@360summits.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} 360Summits. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            For Those Who Love Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
