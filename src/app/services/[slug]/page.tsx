import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getServiceBySlug, SERVICES_DATA } from "./data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — Artha AI`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-[130px] pb-20 px-6 relative overflow-hidden"
        style={{ background: "#090C10" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 50% at 50% 40%, ${service.color}15 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-4xl mx-auto relative">
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
              marginBottom: "28px",
            }}
          >
            ← Back to Services
          </Link>

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
            style={{
              background: `${service.color}15`,
              border: `1px solid ${service.color}30`,
            }}
          >
            <span style={{ fontSize: "18px" }}>{service.emoji}</span>
            <span
              style={{
                fontSize: "11px",
                color: service.color,
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Artha AI Service
            </span>
          </div>

          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            {service.title}
          </h1>

          <p
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "1.25rem",
              color: service.color,
              fontStyle: "italic",
              marginBottom: "20px",
            }}
          >
            {service.tagline}
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "640px",
              marginBottom: "36px",
            }}
          >
            {service.description}
          </p>

          {/* Result stats */}
          <div className="flex flex-wrap gap-4 mb-10">
            {service.results.map((r) => (
              <div
                key={r.label}
                className="rounded-[12px] px-5 py-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minWidth: "100px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.8rem",
                    color: service.color,
                    lineHeight: 1,
                  }}
                >
                  {r.stat}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}
                >
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] font-medium transition-all hover:opacity-90"
              style={{
                background: service.color,
                color: "white",
                fontSize: "14.5px",
                textDecoration: "none",
              }}
            >
              Get Started with {service.title} →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] transition-all hover:opacity-80"
              style={{
                color: "white",
                fontSize: "14.5px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3"
            style={{ color: service.color, fontFamily: "monospace" }}
          >
            What&apos;s Included
          </p>
          <h2
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "white",
              marginBottom: "48px",
              letterSpacing: "-0.02em",
            }}
          >
            Everything You Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f) => (
              <div
                key={f.title}
                className="rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl mb-4"
                  style={{ background: `${service.color}15` }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.05rem",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 px-6" style={{ background: "#090C10" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3"
            style={{ color: service.color, fontFamily: "monospace" }}
          >
            Real World Applications
          </p>
          <h2
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "white",
              marginBottom: "48px",
              letterSpacing: "-0.02em",
            }}
          >
            Who Uses This &amp; How
          </h2>

          <div className="flex flex-col gap-3">
            {service.useCases.map((uc, i) => (
              <div
                key={i}
                className="flex items-start gap-5 rounded-[14px] p-5"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="flex-shrink-0 rounded-[8px] px-3 py-1.5 text-center"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}25`,
                    minWidth: "140px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: service.color,
                      fontWeight: 500,
                    }}
                  >
                    {uc.profession}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.65,
                    paddingTop: "2px",
                  }}
                >
                  {uc.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3"
            style={{ color: service.color, fontFamily: "monospace" }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "white",
              marginBottom: "48px",
              letterSpacing: "-0.02em",
            }}
          >
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <div
                key={p.step}
                className="rounded-[16px] p-6 relative"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-[11px] font-mono mb-4"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Step {p.step}
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mb-4"
                  style={{
                    background: `${service.color}20`,
                    color: service.color,
                    fontFamily: "monospace",
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.05rem",
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 px-6" style={{ background: "#090C10" }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3 text-center"
            style={{ color: service.color, fontFamily: "monospace" }}
          >
            FAQs
          </p>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Common Questions
          </h2>

          <div className="flex flex-col gap-0">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="py-5">
                  <p
                    style={{
                      fontSize: "15px",
                      color: "white",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    {faq.q}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="py-16 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-6 text-center"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}
          >
            Explore Other Services
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {SERVICES_DATA.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] transition-all hover:opacity-80"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                <span>{s.emoji}</span> {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: "#090C10" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 50%, ${service.color}10 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-xl mx-auto relative">
          <h2
            className="mb-4"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Ready to Get Started with{" "}
            <em style={{ fontStyle: "italic", color: service.color }}>
              {service.title}?
            </em>
          </h2>
          <p
            className="mb-9"
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
            }}
          >
            Book a free 30-minute discovery call. No commitment required. We
            will show you exactly what is possible for your specific business.
          </p>
          <Link
            href="/diagnostic"
            className="inline-block px-10 py-4 rounded-[12px] font-medium transition-all hover:opacity-90"
            style={{
              background: service.color,
              color: "white",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Book a Free Call →
          </Link>
        </div>
      </section>
    </>
  );
}
