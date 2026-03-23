import { CTABanner } from "@/components/shared/CTABanner";
import Link from "next/link";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Artha AI",
  description:
    "Learn about Artha AI's mission to make AI accessible for Indian professionals. Meet founder Ashutosh Khadria and our team.",
};

const VALUES = [
  {
    title: "Simplicity First",
    desc: "We make AI adoption as frictionless as possible — no jargon, no complexity, just working tools.",
  },
  {
    title: "Measurable Impact",
    desc: "Every engagement tied to concrete metrics: hours saved, leads generated, revenue grown.",
  },
  {
    title: "India-First Mindset",
    desc: "Built for Indian professionals, Indian regulations, and Indian business workflows.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't just implement and leave. We're your AI co-founders for the long run.",
  },
];

const TEAM = [
  {
    initials: "AK",
    name: "Ashutosh Khadria",
    role: "Founder & CEO",
    bio: "AI Strategy, Business Development & Client Consulting. 10+ years driving digital transformation.",
    gradient: "linear-gradient(135deg, #1B6EF3, #00D4FF)",
  },
  {
    initials: "TG",
    name: "Tech & Growth Lead",
    role: "Head of Automation",
    bio: "Workflow design, API integrations & AI tool configuration. Makes the magic happen behind the scenes.",
    gradient: "linear-gradient(135deg, #0DB87F, #00D4FF)",
  },
  {
    initials: "CS",
    name: "Creative Studio",
    role: "Design & Web",
    bio: "UI/UX, brand identity & AI-ready website development. Turns ideas into stunning digital experiences.",
    gradient: "linear-gradient(135deg, #F5A623, #E05C28)",
  },
];

const CONTACT = [
  { icon: Mail, label: "Email", value: "hello@arthaai.in", href: "mailto:hello@arthaai.in" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India", href: "#" },
  { icon: Briefcase, label: "Careers", value: "careers@arthaai.in", href: "mailto:careers@arthaai.in" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[130px] pb-20 px-6 relative overflow-hidden"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(27,110,243,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl relative">
          <p className="text-brand-cyan text-xs font-head font-semibold uppercase tracking-widest mb-5">
            Our Story
          </p>
          <h1 className="font-head text-4xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.03em] mb-6">
            Making AI Accessible &amp; Actionable<br />for Every Professional
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            We believe the AI revolution shouldn&apos;t be exclusive to large
            corporations with massive tech budgets. Artha AI exists to put the
            same competitive tools in the hands of India&apos;s solo professionals and
            small businesses.
          </p>
        </div>
      </section>

      {/* Mission + Founder */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Mission */}
          <div>
            <p className="text-brand-blue text-xs font-head font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-head text-3xl font-bold text-navy tracking-tight mb-6">
              Practical AI. Real Results.
            </h2>
            <p className="text-[#4A6080] leading-relaxed mb-5">
              Artha AI (DharmaAI) was founded on a simple but powerful belief:
              AI should work <em>for</em> you, not require you to become a
              technologist. We specialize in translating complex AI capabilities
              into plug-and-play solutions that fit seamlessly into how
              India&apos;s professionals already work.
            </p>
            <p className="text-[#4A6080] leading-relaxed mb-10">
              From a CA in Jaipur automating GST reminders, to a law firm in
              Mumbai using AI for document drafting — we measure our success in
              hours returned to our clients and revenue added to their bottom
              line.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-head font-semibold text-navy text-sm mb-1">
                      {v.title}
                    </h4>
                    <p className="text-[#4A6080] text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Bio */}
          <div>
            <p className="text-brand-blue text-xs font-head font-semibold uppercase tracking-widest mb-4">
              Meet the Founder
            </p>
            <h2 className="font-head text-3xl font-bold text-navy tracking-tight mb-6">
              Ashutosh Khadria
            </h2>
            {/* Avatar + name */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center font-head text-2xl font-bold text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1B6EF3, #00D4FF)" }}
              >
                AK
              </div>
              <div>
                <div className="font-head font-semibold text-navy">
                  Ashutosh Khadria
                </div>
                <div className="text-brand-blue text-sm font-medium mt-0.5">
                  Founder &amp; CEO, Artha AI
                </div>
              </div>
            </div>
            <p className="text-[#4A6080] leading-relaxed mb-4">
              Ashutosh is an AI strategist and digital transformation consultant
              with a decade of experience helping businesses leverage technology
              to grow. After seeing first-hand how traditional professionals
              were being left behind in the AI wave, he founded Artha AI to
              change that narrative.
            </p>
            <p className="text-[#4A6080] leading-relaxed mb-4">
              He has worked with 50+ SMEs across legal, finance, real estate,
              and healthcare sectors, delivering AI implementations that average
              15+ hours saved weekly per client.
            </p>
            <p className="text-[#4A6080] leading-relaxed mb-8">
              His philosophy:{" "}
              <em className="text-navy font-medium">
                &ldquo;The best AI implementation is the one you don&apos;t notice
                — it just works.&rdquo;
              </em>
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-brand-blue text-white font-medium text-sm transition-all hover:bg-brand-glow hover:-translate-y-0.5 shadow-lg shadow-brand-blue/25"
            >
              Book a Call with Ashutosh →
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-blue text-xs font-head font-semibold uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="font-head text-3xl font-bold text-navy tracking-tight">
              Small Team, Big Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.initials}
                className="bg-white rounded-[20px] p-8 border border-[#D9E2EE] text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-head text-2xl font-bold text-white"
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <h3 className="font-head font-semibold text-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-blue text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-[#4A6080] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#4A6080] mb-4">
              Interested in joining our team?
            </p>
            <a
              href="mailto:careers@arthaai.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[12px] border-2 border-brand-blue text-brand-blue text-sm font-medium transition-all hover:bg-brand-blue hover:text-white"
            >
              View Open Roles →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6" style={{ background: "#0A1628" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-cyan text-xs font-head font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="font-head text-3xl font-bold text-white tracking-tight">
              Let&apos;s Talk AI for Your Business
            </h2>
          </div>

          <div
            className="rounded-[24px] p-10 md:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {CONTACT.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-brand-blue"
                  style={{ background: "rgba(27,110,243,0.2)" }}
                >
                  <Icon size={18} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-white text-sm font-medium group-hover:text-brand-cyan transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
