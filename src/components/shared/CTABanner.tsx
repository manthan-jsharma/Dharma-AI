import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden bg-[#090C10]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,.12) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-xl mx-auto relative">
        <p
          className="text-[11px] font-mono uppercase tracking-widest
                      text-brand-glow mb-4"
        >
          Start Automating Today
        </p>
        <h2
          className="font-head text-3xl lg:text-[2.6rem] font-normal text-white
                       leading-tight mb-4 tracking-tight"
        >
          Let AI Do the Work So
          <br />
          <em className="not-italic text-brand-glow">You Can Scale Faster</em>
        </h2>
        <p className="text-white/40 text-[15px] mb-9 leading-relaxed">
          Book a free 30-minute discovery call. We&apos;ll map your biggest
          automation opportunities and give you a custom roadmap — no strings
          attached.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/diagnostic"
            className="px-8 py-3.5 rounded-[10px] bg-brand-blue text-white
                       text-[14.5px] font-medium hover:bg-brand-glow
                       hover:-translate-y-0.5 transition-all shadow-xl shadow-brand-blue/25"
          >
            🧪 Book a Free Call
          </Link>
          <Link
            href="/services"
            className="px-7 py-3.5 rounded-[10px] text-white border
                       border-white/[0.12] hover:border-white/25
                       hover:bg-white/[0.04] transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
