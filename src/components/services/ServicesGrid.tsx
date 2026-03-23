"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  num: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  category: "automation" | "marketing" | "consulting" | "all";
}

const SERVICES: Service[] = [
  {
    num: "01",
    icon: "🌐",
    title: "AI-Ready Websites",
    description:
      "Modern, high-converting websites with integrated chatbots, smart appointment booking, lead capture forms, and automated follow-up. Built to impress on first contact and work around the clock.",
    tags: ["Chatbot", "Booking", "Lead Capture"],
    category: "all",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Lead Generation Automation",
    description:
      "Automated WhatsApp, email, and SMS follow-up sequences. Smart lead scoring, nurturing drips, and CRM integration so no prospect ever slips through the cracks again.",
    tags: ["WhatsApp", "Email Drips", "CRM"],
    category: "automation",
  },
  {
    num: "03",
    icon: "📍",
    title: "Digital Directory Listing",
    description:
      "Comprehensive listing and reputation management across Google Business, Justdial, Sulekha, and 20+ platforms. Get found where your clients are actively searching.",
    tags: ["Google Business", "Justdial", "Reviews"],
    category: "marketing",
  },
  {
    num: "04",
    icon: "📣",
    title: "Automate Digital Marketing",
    description:
      "AI-generated content calendars, automated social posting, intelligent ad targeting, and performance analytics — all running on autopilot. Grow your brand without the daily hustle.",
    tags: ["Social Media", "Ads", "Analytics"],
    category: "marketing",
  },
  {
    num: "05",
    icon: "🧠",
    title: "AI Consulting",
    description:
      "Strategic AI roadmapping for your specific profession. Identify the highest-ROI use cases, build an implementation plan, and measure outcomes. Your personal AI co-founder for the journey.",
    tags: ["Strategy", "Roadmap", "ROI"],
    category: "consulting",
  },
  {
    num: "06",
    icon: "⚙️",
    title: "Business Process Automation",
    description:
      "End-to-end workflow automation — invoicing, client onboarding, document management, appointment reminders, and reporting. Eliminate repetitive work permanently.",
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

type Filter = (typeof FILTERS)[number]["value"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

export function ServicesGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = SERVICES.filter(
    (s) => activeFilter === "all" || s.category === activeFilter || s.category === "all"
  );

  return (
    <section className="py-20 px-6 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto">
        {/* Filter Pills */}
        <div className="flex gap-2.5 justify-center flex-wrap mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-200 font-body ${
                activeFilter === f.value
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
                  : "bg-white border border-[#D9E2EE] text-[#4A6080] hover:border-brand-blue/40 hover:text-brand-blue"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filtered.map((service) => (
            <motion.article
              key={service.num}
              variants={item}
              className="bg-white rounded-[20px] p-8 border border-[#D9E2EE] group relative overflow-hidden"
              whileHover={{
                y: -6,
                boxShadow: "0 12px 48px rgba(27,110,243,0.18)",
              }}
              transition={{ duration: 0.22 }}
            >
              {/* Top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                style={{ background: "linear-gradient(90deg, #1B6EF3, #00D4FF)" }}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
              />

              <p className="font-head text-[11px] font-semibold text-brand-blue tracking-[0.1em] uppercase mb-4">
                {service.num}
              </p>
              <span className="text-4xl mb-4 block" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h2 className="font-head text-lg font-semibold text-navy mb-3 leading-snug">
                {service.title}
              </h2>
              <p className="text-[#4A6080] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-[#E8F1FF] text-brand-blue px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium group-hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
