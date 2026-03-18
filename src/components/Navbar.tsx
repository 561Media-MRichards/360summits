"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/summits", label: "Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!navRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nav = navRef.current;

    // Navbar entrance
    const navLinks = nav.querySelectorAll("[data-nav-link]");
    const navPill = nav.querySelector("[data-nav-pill]");
    const navCta = nav.querySelector("[data-nav-cta]");
    const navLogo = nav.querySelector("[data-nav-logo]");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (navLogo) {
      gsap.set(navLogo, { x: -20, opacity: 0 });
      tl.to(navLogo, { x: 0, opacity: 1, duration: 0.6 });
    }

    if (navPill) {
      gsap.set(navPill, { y: -10, opacity: 0 });
      tl.to(navPill, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");
    }

    if (navLinks.length) {
      gsap.set(navLinks, { y: -8, opacity: 0 });
      tl.to(navLinks, { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 }, "-=0.3");
    }

    if (navCta) {
      gsap.set(navCta, { scale: 0.9, opacity: 0 });
      tl.to(navCta, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.15");
    }

    // Scroll shadow
    ScrollTrigger.create({
      start: "top -60",
      end: 99999,
      onUpdate: (self) => {
        const scrolled = self.progress > 0;
        gsap.to(nav, {
          boxShadow: scrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.06)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    });
  });

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" data-nav-logo className="flex items-center gap-2">
          <img
            src="/brandguide/assets/logo-horizontal.svg"
            alt="360Summits"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <div data-nav-pill className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-1.5 py-1.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-nav-link
                className={`rounded-full px-4 py-2 font-body text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-brand-purple text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            ref={ctaRef}
            href="/contact"
            data-nav-cta
            className="rounded-full bg-slate-900 px-6 py-2.5 font-body text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:scale-105"
            onMouseEnter={() => {
              if (ctaRef.current) {
                gsap.to(ctaRef.current, { scale: 1.06, duration: 0.25, ease: "power2.out" });
              }
            }}
            onMouseLeave={() => {
              if (ctaRef.current) {
                gsap.to(ctaRef.current, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
              }
            }}
          >
            Book a Call →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-warm-white/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-brand-purple text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Call →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
