"use client";

import { useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Reduced-motion helper
// ---------------------------------------------------------------------------
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ---------------------------------------------------------------------------
// useScrollReveal — fade + slide elements as they enter the viewport
// Attach `data-reveal` to any element inside the container.
// Optional: `data-reveal-delay="0.2"` for manual delay overrides.
// ---------------------------------------------------------------------------
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const elements = containerRef.current.querySelectorAll("[data-reveal]");
      if (!elements.length) return;

      elements.forEach((el) => {
        const delay = parseFloat(
          (el as HTMLElement).dataset.revealDelay || "0"
        );

        gsap.set(el, { y: 32, opacity: 0 });

        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useStaggerReveal — batch-reveal cards/items with a stagger on scroll.
// Attach `data-stagger-item` to each item inside a `data-stagger-group`.
// ---------------------------------------------------------------------------
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const groups =
        containerRef.current.querySelectorAll("[data-stagger-group]");

      groups.forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;

        gsap.set(items, { y: 40, opacity: 0 });

        ScrollTrigger.batch(items, {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
            });
          },
          once: true,
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useHeroEntrance — orchestrated hero timeline. Elements use data-hero-*:
//   data-hero-badge, data-hero-heading, data-hero-sub, data-hero-cta,
//   data-hero-stats
// ---------------------------------------------------------------------------
export function useHeroEntrance<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const ctx = containerRef.current;
      const badge = ctx.querySelector("[data-hero-badge]");
      const heading = ctx.querySelector("[data-hero-heading]");
      const sub = ctx.querySelector("[data-hero-sub]");
      const cta = ctx.querySelector("[data-hero-cta]");
      const stats = ctx.querySelector("[data-hero-stats]");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      const targets = [badge, heading, sub, cta, stats].filter(Boolean);
      gsap.set(targets, { y: 30, opacity: 0 });

      // Choreographed entrance — each element overlaps the previous
      if (badge) tl.to(badge, { y: 0, opacity: 1, duration: 0.6 });
      if (heading)
        tl.to(heading, { y: 0, opacity: 1, duration: 0.8 }, "-=0.35");
      if (sub) tl.to(sub, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4");
      if (cta) tl.to(cta, { y: 0, opacity: 1, duration: 0.6 }, "-=0.35");
      if (stats)
        tl.to(stats, { y: 0, opacity: 1, duration: 0.6 }, "-=0.25");
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useSubpageHero — lighter entrance for interior page heroes.
// Elements: data-page-badge, data-page-heading, data-page-sub
// ---------------------------------------------------------------------------
export function useSubpageHero<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const ctx = containerRef.current;
      const badge = ctx.querySelector("[data-page-badge]");
      const heading = ctx.querySelector("[data-page-heading]");
      const sub = ctx.querySelector("[data-page-sub]");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const targets = [badge, heading, sub].filter(Boolean);
      gsap.set(targets, { y: 24, opacity: 0 });

      if (badge) tl.to(badge, { y: 0, opacity: 1, duration: 0.5 });
      if (heading)
        tl.to(heading, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3");
      if (sub) tl.to(sub, { y: 0, opacity: 1, duration: 0.6 }, "-=0.35");
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useCountUp — animate a number from 0 to target on scroll.
// Returns a callback ref to attach to each stat element.
// The element should have `data-count-target="50"` and optional
// `data-count-suffix="+"`.
// ---------------------------------------------------------------------------
export function useCountUp<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const counters =
        containerRef.current.querySelectorAll("[data-count-target]");

      counters.forEach((el) => {
        const target = parseFloat(
          (el as HTMLElement).dataset.countTarget || "0"
        );
        const suffix = (el as HTMLElement).dataset.countSuffix || "";
        const isDecimal = String(target).includes(".");

        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate() {
            const display = isDecimal
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toLocaleString();
            el.textContent = `${display}${suffix}`;
          },
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useParallaxBlobs — subtle movement on hero background gradient blobs.
// Attach `data-parallax-blob` to each blob div.
// ---------------------------------------------------------------------------
export function useParallaxBlobs<T extends HTMLElement = HTMLElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const blobs =
        containerRef.current.querySelectorAll("[data-parallax-blob]");

      blobs.forEach((blob, i) => {
        const speed = i % 2 === 0 ? 60 : -40;

        gsap.to(blob, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}

// ---------------------------------------------------------------------------
// useNavbarScroll — changes navbar background on scroll.
// Returns ref for the nav element.
// ---------------------------------------------------------------------------
export function useNavbarScroll() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !navRef.current) return;

    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        if (!navRef.current) return;
        const scrolled = self.progress > 0;
        navRef.current.style.backgroundColor = scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.8)";
        navRef.current.style.borderBottomColor = scrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.03)";
        navRef.current.style.boxShadow = scrolled
          ? "0 1px 20px rgba(0,0,0,0.4)"
          : "none";
      },
    });
  });

  return navRef;
}

// ---------------------------------------------------------------------------
// Combined hook — wraps multiple animation concerns into a single ref.
// Use this on full pages that need scroll reveals + stagger groups.
// ---------------------------------------------------------------------------
export function usePageAnimations<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !containerRef.current) return;

      const ctx = containerRef.current;

      // --- Scroll reveals (data-reveal) ---
      const revealEls = ctx.querySelectorAll("[data-reveal]");
      revealEls.forEach((el) => {
        const delay = parseFloat(
          (el as HTMLElement).dataset.revealDelay || "0"
        );
        gsap.set(el, { y: 32, opacity: 0 });
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Stagger groups (data-stagger-group > data-stagger-item) ---
      const groups = ctx.querySelectorAll("[data-stagger-group]");
      groups.forEach((group) => {
        const items = group.querySelectorAll("[data-stagger-item]");
        if (!items.length) return;
        gsap.set(items, { y: 40, opacity: 0 });
        ScrollTrigger.batch(items, {
          start: "top 90%",
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.12,
            });
          },
          once: true,
        });
      });

      // --- Count-up numbers (data-count-target) ---
      const counters = ctx.querySelectorAll("[data-count-target]");
      counters.forEach((el) => {
        const target = parseFloat(
          (el as HTMLElement).dataset.countTarget || "0"
        );
        const suffix = (el as HTMLElement).dataset.countSuffix || "";
        const isDecimal = String(target).includes(".");
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate() {
            const display = isDecimal
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toLocaleString();
            el.textContent = `${display}${suffix}`;
          },
        });
      });

      // --- Parallax blobs (data-parallax-blob) ---
      const blobs = ctx.querySelectorAll("[data-parallax-blob]");
      blobs.forEach((blob, i) => {
        const speed = i % 2 === 0 ? 60 : -40;
        gsap.to(blob, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: ctx.querySelector("section") || ctx,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return containerRef;
}
