"use client";

import Link from "next/link";
import { useState } from "react";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

type NavItem = { label: string; href: string };

const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Free AI Audit", href: "/diagnostic" },
];

const SERVICE_LINKS: string[] = [
  "AI Websites",
  "Lead Generation",
  "Digital Listings",
  "Marketing AI",
  "Consulting",
  "Automation",
];

const COMPANY_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Careers", href: "mailto:careers@arthaai.in" },
  { label: "Contact", href: "mailto:hello@arthaai.in" },
];

const BOTTOM_LINKS: string[] = ["Privacy", "Terms", "Sitemap", "Cookies"];

export function Footer() {
  const [email, setEmail] = useState("");

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  const year = new Date().getFullYear();

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "#090C10",
        paddingTop: "64px",
        paddingBottom: "32px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                A
              </div>
              <span className="text-[15px] font-semibold text-white">
                Artha<span className="text-blue-400">AI</span>
              </span>
            </Link>

            <p
              className="text-[13px] leading-relaxed mb-5 max-w-[240px]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Automate Smarter, Optimize Faster, and Grow Stronger. Built for
              India&apos;s professionals.
            </p>

            <p
              className="text-[11px] uppercase tracking-widest mb-2"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "monospace",
              }}
            >
              Join our newsletter
            </p>

            <div className="flex gap-1.5 mb-4">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="your@email.com"
                className="flex-1 rounded-lg px-3 py-2 text-[13px] text-white outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <button
                className="px-3 py-2 rounded-lg text-[13px] text-white font-medium transition-colors hover:opacity-80"
                style={{ background: "#3B82F6" }}
              >
                →
              </button>
            </div>

            <div className="flex gap-2 mb-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-80"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["ISO Certified", "MSME", "Google Partner"].map((a) => (
                <span
                  key={a}
                  className="text-[11px] px-2.5 py-1 rounded-md"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "monospace",
              }}
            >
              Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[13px] transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "monospace",
              }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[13px] transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[11px] uppercase tracking-widest mb-4"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "monospace",
              }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13px] transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p
            className="text-[12px]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            © {year} Artha AI (DharmaAI). All rights reserved.
          </p>
          <div className="flex gap-5">
            {BOTTOM_LINKS.map((t) => (
              <a
                key={t}
                href="#"
                className="text-[12px] transition-colors hover:opacity-60"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
