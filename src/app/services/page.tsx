import { ServicesGrid } from "@/app/services/servicegrid";
import { CTABanner } from "@/components/shared/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services — Artha AI",
  description:
    "AI-ready websites, lead generation automation, digital marketing, and business process automation for Indian professionals and SMEs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[130px] pb-20 px-6 text-center relative overflow-hidden"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(27,110,243,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-brand-cyan text-xs font-head font-semibold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="font-head text-4xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.03em] mb-5">
            AI Solutions Built for
            <br />
            India&apos;s Professionals
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            From intelligent websites to full process automation — every service
            designed to give you a measurable, unfair advantage.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <CTABanner />
    </>
  );
}
