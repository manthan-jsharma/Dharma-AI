"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  emoji: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
}

const POSTS: BlogPost[] = [
  {
    emoji: "⚖️",
    tag: "Legal",
    title: "How AI is Saving Law Firms 20+ Hours Per Week on Document Review",
    date: "March 15, 2025",
    readTime: "6 min read",
  },
  {
    emoji: "📊",
    tag: "Finance",
    title: "CAs: Automate Client Onboarding & GST Filing Reminders with AI",
    date: "March 8, 2025",
    readTime: "5 min read",
  },
  {
    emoji: "🏢",
    tag: "Real Estate",
    title: "The AI-Ready Property Agency: Lead Capture, Nurturing & Closing",
    date: "March 1, 2025",
    readTime: "7 min read",
  },
];

export function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-5 mb-14">
          <div>
            <p className="text-brand-blue text-xs font-head font-semibold uppercase tracking-widest mb-3">
              Latest Insights
            </p>
            <h2 className="font-head text-3xl lg:text-4xl font-bold text-navy tracking-tight">
              AI Playbook for Professionals
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] border-2 border-brand-blue text-brand-blue text-sm font-medium transition-all hover:bg-brand-blue hover:text-white"
          >
            View All Posts <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              className="bg-white rounded-[20px] border border-[#D9E2EE] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(27,110,243,0.15)" }}
            >
              <div
                className="h-[180px] flex items-center justify-center text-5xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0A1628, #0F2044)" }}
              >
                {post.emoji}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.5))",
                  }}
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-[#E8F1FF] text-brand-blue text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {post.tag}
                </span>
                <h3 className="font-head text-base font-semibold text-navy leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[#8FA3BF]">
                  {post.date} · {post.readTime}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
