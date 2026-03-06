"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(51,3,98,0.25),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-3 inline-flex text-xs font-semibold uppercase tracking-[0.15em] text-brand-lime">
            Get In Touch
          </span>
          <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300">
            Have a question about an upcoming summit? Want to host your own
            event? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="border-b border-white/[0.06] bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-5">
            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-xl border border-brand-lime/20 bg-brand-lime/5 p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-lime/20">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#84CC16"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-300">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="George Shepherd"
                        className="rounded-lg border border-white/[0.08] bg-neutral-800 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="george@360summits.com"
                        className="rounded-lg border border-white/[0.08] bg-neutral-800 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(714) 436-1234"
                        className="rounded-lg border border-white/[0.08] bg-neutral-800 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-neutral-300">
                        Interest
                      </label>
                      <select className="rounded-lg border border-white/[0.08] bg-neutral-800 px-4 py-3 text-white outline-none transition-all focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20">
                        <option value="">Select an option</option>
                        <option>Attend a Summit</option>
                        <option>Host a Summit</option>
                        <option>Speak at a Summit</option>
                        <option>Partnership Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-300">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your goals or questions..."
                      className="rounded-lg border border-white/[0.08] bg-neutral-800 px-4 py-3 text-white outline-none transition-all placeholder:text-neutral-500 focus:border-brand-lime focus:ring-2 focus:ring-brand-lime/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-lime to-lime-light px-8 py-4 font-display text-base font-bold uppercase tracking-wide text-neutral-950 transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(132,204,22,0.3)] md:w-auto"
                  >
                    Send Message
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8 md:col-span-2">
              <div>
                <h3 className="mb-4 font-display text-xl font-bold text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Phone",
                      value: "(714) 436-1234",
                      href: "tel:+17144361234",
                      icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                    },
                    {
                      label: "Email",
                      value: "info@360summits.com",
                      href: "mailto:info@360summits.com",
                      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
                    },
                    {
                      label: "Location",
                      value: "Boynton Beach, FL",
                      href: undefined,
                      icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 7a3 3 0 110 6 3 3 0 010-6z",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-neutral-800 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-purple/20">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#8B5CF6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-white transition-colors hover:text-brand-lime"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-white">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6">
                <h4 className="mb-2 font-display text-lg font-bold text-white">
                  Quick Response
                </h4>
                <p className="text-sm text-neutral-400">
                  We typically respond within 24 hours during business days.
                  For urgent matters, give us a call.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-neutral-800 p-6">
                <h4 className="mb-2 font-display text-lg font-bold text-white">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {["LinkedIn", "Facebook", "Instagram", "Twitter"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="rounded-lg border border-white/[0.06] bg-neutral-700 px-3 py-1.5 text-xs font-medium text-neutral-300 transition-all hover:border-brand-lime/20 hover:text-brand-lime"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
