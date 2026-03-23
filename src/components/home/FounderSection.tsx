"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(135deg, #0A1628 0%, #0F2044 50%, #0C1E3A 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Avatar */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div
            className="w-[260px] h-[300px] rounded-[24px] overflow-hidden border-2 flex items-center justify-center relative"
            style={{
              background: "linear-gradient(160deg, #1B4E9E, #0A2A5C)",
              borderColor: "rgba(27,110,243,0.3)",
            }}
          >
            {/* Placeholder — replace with <Image> component for real photo */}
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(160deg, rgba(27,110,243,0.3) 0%, rgba(0,212,255,0.1) 100%)",
              }}
            >
              <span className="font-head text-6xl font-bold text-white/90 leading-none">
                AK
              </span>
              <span className="text-white/40 text-sm mt-2">AI Avatar · Founder</span>
            </div>
          </div>
          {/* Badge */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-white text-sm font-medium whitespace-nowrap shadow-xl"
            style={{
              background: "#1B6EF3",
              boxShadow: "0 4px 20px rgba(27,110,243,0.5)",
            }}
          >
            Founder, Artha AI
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="text-brand-cyan text-xs font-head font-semibold uppercase tracking-widest mb-4">
            Message from the Founder
          </p>
          <h2 className="font-head text-3xl lg:text-4xl font-semibold text-white leading-[1.35] tracking-tight mb-5">
            &ldquo;Most professionals are losing 3–4 hours daily to tasks{" "}
            <span className="text-brand-cyan">
              AI can handle in minutes.&rdquo;
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-4">
            I&apos;m Ashutosh Khadria. I built Artha AI because I watched brilliant
            CAs, lawyers, and architects drown in repetitive work — client
            follow-ups, document drafts, appointment scheduling — while their
            competition grew. AI is not the future. It&apos;s the unfair advantage
            available right now.
          </p>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We&apos;ve helped 50+ professionals reclaim their time and 3× their lead
            pipelines. Start with our free AI Diagnostic Test. In 3 minutes,
            you&apos;ll get a personalized score showing exactly where AI can save you
            the most time — and money.
          </p>
          <div className="mb-8">
            <div className="font-head font-semibold text-white">
              Ashutosh Khadria
            </div>
            <div className="text-brand-cyan text-sm mt-0.5">
              Founder &amp; CEO, Artha AI (DharmaAI)
            </div>
          </div>
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-brand-blue text-white font-medium transition-all duration-200 hover:bg-brand-glow hover:-translate-y-0.5 shadow-lg shadow-brand-blue/30"
          >
            🎯 Take My Free AI Diagnostic
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
