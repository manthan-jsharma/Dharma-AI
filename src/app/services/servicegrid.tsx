"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  num: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  category: "automation" | "marketing" | "consulting" | "all";
  slug: string;
}

const SERVICES: Service[] = [
  {
    num: "01",
    emoji: "🌐",
    slug: "ai-ready-websites",
    title: "AI-Ready Websites",
    description:
      "Modern, high-converting websites with integrated chatbots, smart appointment booking, lead capture forms, and automated follow-up. Built to impress on first contact and work around the clock.",
    tags: ["Chatbot", "Booking", "Lead Capture"],
    category: "all",
  },
  {
    num: "02",
    emoji: "🎯",
    slug: "lead-generation",
    title: "Lead Generation Automation",
    description:
      "Automated WhatsApp, email, and SMS follow-up sequences. Smart lead scoring, nurturing drips, and CRM integration so no prospect ever slips through the cracks again.",
    tags: ["WhatsApp", "Email Drips", "CRM"],
    category: "automation",
  },
  {
    num: "03",
    emoji: "📍",
    slug: "digital-directories",
    title: "Digital Directory Listing",
    description:
      "Comprehensive listing and reputation management across Google Business, Justdial, Sulekha, and 20+ platforms. Get found where your clients are actively searching.",
    tags: ["Google Business", "Justdial", "Reviews"],
    category: "marketing",
  },
  {
    num: "04",
    emoji: "📣",
    slug: "digital-marketing",
    title: "Automate Digital Marketing",
    description:
      "AI-generated content calendars, automated social posting, intelligent ad targeting, and performance analytics — all running on autopilot.",
    tags: ["Social Media", "Ads", "Analytics"],
    category: "marketing",
  },
  {
    num: "05",
    emoji: "💬",
    slug: "communication-automation",
    title: "Digital Communication Automation",
    description:
      "Automate your entire client communication layer — WhatsApp, email, and SMS — for onboarding, follow-up, reminders, and re-engagement.",
    tags: ["WhatsApp API", "Email", "SMS"],
    category: "automation",
  },
  {
    num: "06",
    emoji: "🧠",
    slug: "ai-consulting",
    title: "AI Consulting",
    description:
      "Strategic AI roadmapping for your specific profession. Identify the highest-ROI use cases, build an implementation plan, and measure outcomes.",
    tags: ["Strategy", "Roadmap", "ROI"],
    category: "consulting",
  },
  {
    num: "07",
    emoji: "⚙️",
    slug: "process-automation",
    title: "Business Process Automation",
    description:
      "End-to-end workflow automation — invoicing, client onboarding, document management, appointment reminders, and reporting.",
    tags: ["Workflows", "Invoicing", "Onboarding"],
    category: "automation",
  },
];

const FILTERS = [
  { label: "All Services", value: "all" },
  { label: "Automation", value: "automation" },
  { label: "Marketing", value: "marketing" },
  { label: "Consulting", value: "consulting" },
] as const;

type Filter = typeof FILTERS[number]["value"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

export function ServicesGrid() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = SERVICES.filter(
    (s) => active === "all" || s.category === active || s.category === "all"
  );

  return (
    <section className="py-20 px-6" style={{ background: "#0D1117" }}>
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="flex gap-2.5 justify-center flex-wrap mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-200"
              style={{
                background:
                  active === f.value ? "#3B82F6" : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  active === f.value ? "#3B82F6" : "rgba(255,255,255,0.1)"
                }`,
                color: active === f.value ? "white" : "rgba(255,255,255,0.45)",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filtered.map((service) => (
            <motion.article
              key={service.num}
              variants={item}
              className="rounded-[18px] p-7 relative overflow-hidden group"
              style={{
                background: "#0F1419",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                y: -5,
                borderColor: "rgba(59,130,246,0.3)",
                boxShadow: "0 12px 40px rgba(59,130,246,0.12)",
              }}
              transition={{ duration: 0.2 }}
            >
              <p
                className="text-[10.5px] mb-4"
                style={{
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {service.num}
              </p>

              <span
                style={{
                  fontSize: "2.4rem",
                  display: "block",
                  marginBottom: "14px",
                }}
                role="img"
                aria-label={service.title}
              >
                {service.emoji}
              </span>

              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "1.15rem",
                  color: "white",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.15)",
                      color: "#60A5FA",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 transition-all duration-200 group-hover:gap-3"
                style={{
                  fontSize: "13px",
                  color: "#60A5FA",
                  textDecoration: "none",
                }}
              >
                Learn More <ArrowRight size={13} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
