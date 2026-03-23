"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: "⚡",
    title: "Save 15+ Hours Every Week",
    desc: "Automate scheduling, document drafting, follow-up emails, and client communication. Focus on billable work.",
  },
  {
    icon: "📈",
    title: "3× Your Lead Pipeline",
    desc: "AI-powered WhatsApp automation and smart follow-up sequences that nurture prospects 24/7 while you sleep.",
  },
  {
    icon: "🛡️",
    title: "Look 10× More Professional",
    desc: "Modern AI-ready websites, automated review management, and directory listings that build instant trust.",
  },
  {
    icon: "💡",
    title: "No Tech Team Required",
    desc: "We build, configure, and maintain everything. You get the full power of AI without a single developer.",
  },
  {
    icon: "🎯",
    title: "Industry-Specific Solutions",
    desc: "Purpose-built for CAs, lawyers, architects, real estate, and clinics — not generic off-the-shelf software.",
  },
  {
    icon: "📊",
    title: "Measurable ROI in 30 Days",
    desc: "Track hours saved, leads generated, and revenue growth from day one with clear analytics dashboards.",
  },
];

export function FeaturesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[12px] font-mono font-medium uppercase tracking-widest
                        text-brand-glow mb-3"
          >
            Why Artha AI
          </p>
          <h2
            className="font-head text-3xl lg:text-4xl font-normal text-white
                         tracking-tight mb-4"
          >
            The AI Edge for{" "}
            <em className="not-italic text-brand-glow">Your Practice</em>
          </h2>
          <p className="text-white/45 text-[15px] max-w-md mx-auto leading-relaxed">
            Practical AI solutions, not vague promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-[#0F1419] border border-white/[0.07] rounded-[16px] p-7"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.3)" }}
            >
              <div
                className="w-10 h-10 rounded-[10px] bg-white/[0.05] flex
                              items-center justify-center text-xl mb-5"
              >
                {f.icon}
              </div>
              <h3 className="font-head text-[16px] font-normal text-white mb-2.5">
                {f.title}
              </h3>
              <p className="text-[13.5px] text-white/40 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
