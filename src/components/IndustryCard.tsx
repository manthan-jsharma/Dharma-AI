"use client";

import Link from "next/link";

export interface Industry {
  emoji: string;
  title: string;
  subtitle: string;
  challenges: string[];
  solutions: string[];
  stat: string;
  statLabel: string;
  color: string;
  slug: string;
}

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div
      className="rounded-[18px] p-7 transition-all duration-200 hover:-translate-y-1 group"
      style={{
        background: "#0F1419",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={(e) => {
        (
          e.currentTarget as HTMLDivElement
        ).style.borderColor = `${industry.color}40`;
        (
          e.currentTarget as HTMLDivElement
        ).style.boxShadow = `0 8px 32px ${industry.color}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-[12px] flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `${industry.color}15` }}
          >
            {industry.emoji}
          </div>
          <div>
            <h3
              className="font-head text-[16px] text-white leading-snug"
              style={{ fontFamily: "Instrument Serif, Georgia, serif" }}
            >
              {industry.title}
            </h3>
            <p
              style={{
                fontSize: "11.5px",
                color: "rgba(255,255,255,0.35)",
                marginTop: "2px",
              }}
            >
              {industry.subtitle}
            </p>
          </div>
        </div>
        {/* Stat */}
        <div className="text-right flex-shrink-0 ml-3">
          <div
            className="font-head text-xl leading-none"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              color: industry.color,
            }}
          >
            {industry.stat}
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              marginTop: "2px",
            }}
          >
            {industry.statLabel}
          </div>
        </div>
      </div>

      {/* Challenges + Solutions */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div>
          <p
            className="text-[10px] uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}
          >
            Challenges
          </p>
          <div className="flex flex-col gap-1.5">
            {industry.challenges.map((c) => (
              <div key={c} className="flex items-start gap-1.5">
                <span
                  style={{
                    color: "#EF4444",
                    fontSize: "10px",
                    marginTop: "3px",
                    flexShrink: 0,
                  }}
                >
                  ✕
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p
            className="text-[10px] uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}
          >
            Our Solutions
          </p>
          <div className="flex flex-col gap-1.5">
            {industry.solutions.map((s) => (
              <div key={s} className="flex items-start gap-1.5">
                <span
                  style={{
                    color: "#10B981",
                    fontSize: "10px",
                    marginTop: "3px",
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/diagnostic"
        className="inline-flex items-center gap-1.5 transition-all duration-200"
        style={{
          fontSize: "13px",
          color: industry.color,
          textDecoration: "none",
        }}
      >
        Get AI audit for my business →
      </Link>
    </div>
  );
}
