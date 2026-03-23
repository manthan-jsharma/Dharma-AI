"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BARS = [
  { label: "Automation", pct: 40 },
  { label: "Lead Gen", pct: 75 },
  { label: "Marketing", pct: 55 },
  { label: "Workflows", pct: 88 },
];

const TASKS = [
  {
    icon: "✓",
    bg: "rgba(16,185,129,.12)",
    color: "#10B981",
    name: "GST reminders sent (32 clients)",
    badge: "Done",
    badgeBg: "rgba(16,185,129,.15)",
    badgeColor: "#10B981",
  },
  {
    icon: "⚡",
    bg: "rgba(245,158,11,.12)",
    color: "#F59E0B",
    name: "Lead follow-up sequence",
    badge: "Running",
    badgeBg: "rgba(245,158,11,.15)",
    badgeColor: "#F59E0B",
  },
  {
    icon: "📄",
    bg: "rgba(59,130,246,.12)",
    color: "#60A5FA",
    name: "Proposal drafted — Sharma & Co",
    badge: "New",
    badgeBg: "rgba(59,130,246,.15)",
    badgeColor: "#60A5FA",
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-[60px] flex flex-col bg-[#090C10] overflow-hidden">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,.12) 0%, transparent 70%)",
        }}
      />

      <div className="flex-1 flex items-center">
        <div
          className="max-w-6xl mx-auto px-6 py-20 w-full
                        flex flex-col lg:flex-row items-center gap-16"
        >
          {/* ── Left ── */}
          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={up}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7
                              bg-brand-blue/10 border border-brand-blue/20"
              >
                <span
                  className="bg-brand-blue text-white text-[10px] font-bold
                                 px-2 py-0.5 rounded-full tracking-wider"
                >
                  New
                </span>
                <span className="text-[12.5px] text-brand-glow">
                  Free AI Diagnostic — 3 minutes
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={up}
              className="font-head text-5xl xl:text-6xl font-normal leading-[1.08]
                         text-white tracking-[-0.025em] mb-5"
            >
              Intelligent Automation
              <br />
              for <em className="not-italic text-brand-glow">Modern Indian</em>
              <br />
              Professionals.
            </motion.h1>

            <motion.p
              variants={up}
              className="text-[16px] text-white/50 leading-relaxed
                                               max-w-[460px] mb-9 font-light"
            >
              Artha AI brings enterprise-grade automation to CAs, Lawyers,
              Architects &amp; SMEs — saving 15+ hours weekly and tripling lead
              pipelines.
            </motion.p>

            <motion.div variants={up} className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px]
                           bg-brand-blue text-white text-[14.5px] font-medium
                           hover:bg-brand-glow hover:-translate-y-0.5 transition-all
                           shadow-xl shadow-brand-blue/25"
              >
                🧪 Get Free AI Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px]
                           text-white border border-white/[0.12]
                           hover:border-white/25 hover:bg-white/[0.04] transition-all"
              >
                View Services →
              </Link>
            </motion.div>

            {/* Trust */}
            <motion.div variants={up} className="flex items-center gap-4">
              <div className="flex">
                {["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#090C10]
                               flex items-center justify-center text-[10px]
                               font-semibold text-white -mr-2"
                      style={{ background: c }}
                    >
                      {["AK", "RS", "PM", "VK", "NK"][i]}
                    </div>
                  )
                )}
              </div>
              <span className="text-[13px] text-white/35">
                <strong className="text-white/55">50+ businesses</strong> trust
                us
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard Card ── */}
          <motion.div
            className="w-full lg:w-[420px] flex-shrink-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="bg-[#0F1419] border border-white/[0.07] rounded-[20px]
                            overflow-hidden"
            >
              {/* Card header */}
              <div
                className="px-5 py-4 border-b border-white/[0.07] flex
                              items-center justify-between"
              >
                <span className="text-[12px] text-white/40 font-mono">
                  artha_dashboard.ai
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green rounded-full animate-blink" />
                  <span className="text-[11px] text-white/30">Live</span>
                </div>
              </div>

              <div className="p-5">
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { val: "15.2h", label: "Saved this week", change: "↑ 23%" },
                    { val: "3.4×", label: "Lead multiplier", change: "↑ 12%" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-[#111620] rounded-[10px] p-3.5"
                    >
                      <div className="font-head text-[1.65rem] text-white leading-none">
                        {m.val}
                      </div>
                      <div className="text-[11px] text-white/35 mt-1">
                        {m.label}
                      </div>
                      <div className="text-[11px] text-green mt-0.5">
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="flex items-end gap-[3px] h-10 mb-4 px-0.5">
                  {[30, 50, 70, 45, 85, 60, 100, 75, 90, 65, 100, 80].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[3px]"
                        style={{
                          height: `${h}%`,
                          background:
                            h >= 80 ? "#3B82F6" : "rgba(59,130,246,0.2)",
                        }}
                      />
                    )
                  )}
                </div>

                {/* Score bars */}
                <div className="flex flex-col gap-2.5 mb-4">
                  {BARS.map((b) => (
                    <div key={b.label} className="flex items-center gap-3">
                      <span className="text-[12px] text-white/40 min-w-[80px]">
                        {b.label}
                      </span>
                      <div className="flex-1 h-[4px] bg-white/[0.07] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #3B82F6, #06B6D4)",
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${b.pct}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.6,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                      <span className="text-[11px] text-white/30 min-w-[30px]">
                        {b.pct}%
                      </span>
                    </div>
                  ))}
                </div>

                {/* Task list */}
                <div className="flex flex-col gap-2 mb-4">
                  {TASKS.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center gap-2.5
                                                  bg-[#111620] rounded-lg px-3 py-2.5"
                    >
                      <div
                        className="w-6 h-6 rounded-[6px] flex items-center
                                      justify-center text-[11px] flex-shrink-0"
                        style={{ background: t.bg, color: t.color }}
                      >
                        {t.icon}
                      </div>
                      <span className="text-[12.5px] text-white/70 flex-1 truncate">
                        {t.name}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: t.badgeBg, color: t.badgeColor }}
                      >
                        {t.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/diagnostic"
                  className="block w-full text-center py-3 rounded-[10px]
                             bg-brand-blue text-white text-[13.5px] font-medium
                             hover:bg-brand-glow transition-colors"
                >
                  Get Your Score →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
