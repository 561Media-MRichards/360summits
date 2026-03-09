"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const gradients: Record<string, string> = {
  brand: "linear-gradient(90deg, transparent, #330362, #8B5CF6, #040ECF, #84CC16, transparent)",
  warm: "linear-gradient(90deg, transparent, #8B5CF6, #A78BFA, #EC4899, #84CC16, transparent)",
  cool: "linear-gradient(90deg, transparent, #040ECF, #8B5CF6, #330362, transparent)",
  lime: "linear-gradient(90deg, transparent, #84CC16, #A3E635, #8B5CF6, #330362, transparent)",
};

export default function GradientDivider({
  variant = "brand",
  className = "",
}: {
  variant?: "brand" | "warm" | "cool" | "lime";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ref.current,
      { backgroundPosition: "-100% 0%" },
      {
        backgroundPosition: "100% 0%",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: ref });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      role="presentation"
      className={className}
      style={{
        height: 48,
        backgroundImage: gradients[variant],
        backgroundSize: "200% 100%",
        backgroundPosition: "-100% 0%",
        opacity: 0.5,
        maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      }}
    />
  );
}
