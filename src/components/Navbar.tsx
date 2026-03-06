"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: "/", label: "Home" },
  { href: "/summits", label: "Summits" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Subtle background solidification + shadow on scroll
  useGSAP(() => {
    if (!navRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nav = navRef.current;

    ScrollTrigger.create({
      start: "top -60",
      end: 99999,
      onUpdate: (self) => {
        const scrolled = self.progress > 0;
        gsap.to(nav, {
          boxShadow: scrolled
            ? "0 1px 16px rgba(0, 0, 0, 0.06)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
          borderBottomColor: scrolled
            ? "rgba(0, 0, 0, 0.08)"
            : "rgba(0, 0, 0, 0.05)",
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    });
  });

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-warm-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/brandguide/assets/logo-horizontal.svg"
            alt="360Summits"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-brand-purple"
                  : "text-slate-500 hover:text-brand-purple"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-brand-purple px-5 py-2.5 font-body text-sm font-semibold text-white transition-all hover:bg-purple-light hover:shadow-md"
          >
            Join Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-brand-purple md:hidden"
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
        <div className="border-t border-slate-200 bg-warm-white/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-purple-tint text-brand-purple"
                    : "text-slate-500 hover:bg-slate-50 hover:text-brand-purple"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
