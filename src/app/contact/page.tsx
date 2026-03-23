import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Artha AI",
  description:
    "Get in touch with Artha AI. Book a free consultation, ask a question, or explore how AI automation can transform your business.",
};

const CONTACT_DETAILS = [
  {
    icon: "📧",
    label: "Email",
    value: "hello@arthaai.in",
    href: "mailto:hello@arthaai.in",
    color: "#3B82F6",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "#10B981",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/919876543210",
    color: "#25D366",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.google.com",
    color: "#F59E0B",
  },
];

const FAQS = [
  {
    q: "How quickly do you respond to enquiries?",
    a: "We respond to all enquiries within 4 business hours. For urgent matters, WhatsApp is the fastest channel.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes. The first 30-minute discovery call is completely free with no obligation. We use it to understand your business and see if we are a good fit.",
  },
  {
    q: "Do you work with businesses outside Jaipur?",
    a: "Absolutely. We work with clients across India fully remotely. All consultations and project work happen online.",
  },
  {
    q: "What information should I prepare before the call?",
    a: "It helps to have a rough idea of your biggest operational challenges, your current tools, and what you hope AI can help you achieve.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-[130px] pb-16 px-6 relative overflow-hidden"
        style={{ background: "#090C10" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative text-center">
          <p
            className="text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Let's Talk AI for
            <br />
            <em style={{ fontStyle: "italic", color: "#60A5FA" }}>
              Your Business
            </em>
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Book a free 30-minute discovery call or send us a message. We will
            get back to you within 4 hours.
          </p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact form */}
            <div>
              <p
                className="text-[11px] uppercase tracking-widest mb-4"
                style={{ color: "#60A5FA", fontFamily: "monospace" }}
              >
                Send a Message
              </p>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "1.8rem",
                  color: "white",
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                }}
              >
                We'd Love to Hear from You
              </h2>
              <ContactForm />
            </div>

            {/* Right — Details + FAQ */}
            <div>
              <p
                className="text-[11px] uppercase tracking-widest mb-4"
                style={{ color: "#60A5FA", fontFamily: "monospace" }}
              >
                Contact Details
              </p>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "1.8rem",
                  color: "white",
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                }}
              >
                Reach Us Directly
              </h2>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {CONTACT_DETAILS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-[14px] p-4 transition-all duration-200 group"
                    style={{
                      background: "#0F1419",
                      border: "1px solid rgba(255,255,255,0.07)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderColor = `${c.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(255,255,255,0.07)";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${c.color}15` }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "10.5px",
                          color: "rgba(255,255,255,0.3)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontFamily: "monospace",
                          marginBottom: "3px",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          fontSize: "13.5px",
                          color: "white",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office hours */}
              <div
                className="rounded-[14px] p-5 mb-10"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-[10.5px] uppercase tracking-widest mb-4"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "monospace",
                  }}
                >
                  Office Hours
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM IST" },
                    { day: "Saturday", hours: "10:00 AM – 4:00 PM IST" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center"
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {row.day}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color:
                            row.hours === "Closed"
                              ? "rgba(255,255,255,0.25)"
                              : "white",
                          fontWeight: row.hours === "Closed" ? 400 : 500,
                        }}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <p
                className="text-[11px] uppercase tracking-widest mb-5"
                style={{ color: "#60A5FA", fontFamily: "monospace" }}
              >
                Quick Answers
              </p>
              <div className="flex flex-col gap-0">
                {FAQS.map((faq, i) => (
                  <div
                    key={i}
                    className="py-4"
                    style={{
                      borderBottom:
                        i < FAQS.length - 1
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "none",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: 500,
                        marginBottom: "6px",
                      }}
                    >
                      {faq.q}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
