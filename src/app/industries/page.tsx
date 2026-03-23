import Link from "next/link";
import type { Metadata } from "next";
// IMPORTING THE CLIENT COMPONENT
import IndustryCard, { Industry } from "@/components/IndustryCard";

export const metadata: Metadata = {
  title: "Industries We Serve — Artha AI",
  description:
    "AI automation solutions tailored for Chartered Accountants, Lawyers, Architects, Real Estate, Healthcare, Education and more across India.",
};

const PROFESSIONALS: Industry[] = [
  {
    emoji: "📊",
    title: "Chartered Accountants",
    subtitle: "CA Firms & Financial Advisors",
    challenges: [
      "Manual GST filing reminders",
      "Client onboarding paperwork",
      "Follow-up on pending documents",
    ],
    solutions: [
      "Automated GST & ITR reminders",
      "AI-powered client onboarding",
      "WhatsApp document follow-ups",
    ],
    stat: "12h",
    statLabel: "Saved per week",
    color: "#3B82F6",
    slug: "chartered-accountants",
  },
  {
    emoji: "⚖️",
    title: "Lawyers & Legal Firms",
    subtitle: "Advocates, Law Offices & Legal Consultants",
    challenges: [
      "Document review takes hours",
      "Client follow-up delays",
      "Case status communication",
    ],
    solutions: [
      "AI document drafting & review",
      "Automated client updates",
      "Smart appointment scheduling",
    ],
    stat: "70%",
    statLabel: "Faster document review",
    color: "#8B5CF6",
    slug: "legal-firms",
  },
  {
    emoji: "🏗️",
    title: "Architects",
    subtitle: "Architecture Studios & Design Firms",
    challenges: [
      "Proposal writing is time-consuming",
      "Client follow-up on approvals",
      "Project update communication",
    ],
    solutions: [
      "AI-generated proposal drafts",
      "Automated approval follow-ups",
      "Client portal with updates",
    ],
    stat: "3×",
    statLabel: "More proposals sent",
    color: "#F59E0B",
    slug: "architects",
  },
  {
    emoji: "🏘️",
    title: "Real Estate Consultants",
    subtitle: "Brokers, Developers & Property Agents",
    challenges: [
      "Leads go cold without follow-up",
      "Manual property listing updates",
      "Slow response to enquiries",
    ],
    solutions: [
      "Instant AI lead response",
      "Automated listing syndication",
      "Smart lead nurturing sequences",
    ],
    stat: "3×",
    statLabel: "More deals closed",
    color: "#10B981",
    slug: "real-estate",
  },
  {
    emoji: "🛡️",
    title: "Insurance Agents",
    subtitle: "Insurance Advisors & Consultants",
    challenges: [
      "Policy renewal reminders are manual",
      "Lead follow-up is inconsistent",
      "Document collection is slow",
    ],
    solutions: [
      "Automated renewal reminders",
      "AI lead scoring & follow-up",
      "Digital document collection",
    ],
    stat: "40%",
    statLabel: "Higher renewal rate",
    color: "#EF4444",
    slug: "insurance-agents",
  },
  {
    emoji: "📈",
    title: "Portfolio Managers",
    subtitle: "Wealth Managers & Investment Advisors",
    challenges: [
      "Client reporting is time-consuming",
      "Market update communication",
      "Onboarding new investors",
    ],
    solutions: [
      "Automated portfolio reports",
      "AI-driven market update emails",
      "Digital KYC onboarding",
    ],
    stat: "8h",
    statLabel: "Saved on reporting",
    color: "#06B6D4",
    slug: "portfolio-managers",
  },
  {
    emoji: "💼",
    title: "Solopreneurs",
    subtitle: "Freelancers & Independent Consultants",
    challenges: [
      "Wearing too many hats daily",
      "Inconsistent client communication",
      "No time for marketing",
    ],
    solutions: [
      "AI virtual assistant setup",
      "Automated client check-ins",
      "Social media on autopilot",
    ],
    stat: "15h",
    statLabel: "Reclaimed per week",
    color: "#F97316",
    slug: "solopreneurs",
  },
];

const SMES: Industry[] = [
  {
    emoji: "🏥",
    title: "Healthcare Clinics",
    subtitle: "Doctors, Dentists & Multispeciality Clinics",
    challenges: [
      "High patient no-show rate",
      "Manual appointment booking",
      "Follow-up after treatment",
    ],
    solutions: [
      "Automated appointment reminders",
      "AI online booking system",
      "Post-visit follow-up sequences",
    ],
    stat: "60%",
    statLabel: "Fewer no-shows",
    color: "#EF4444",
    slug: "healthcare-clinics",
  },
  {
    emoji: "🏢",
    title: "Real Estate Developers",
    subtitle: "Builders, Developers & Housing Projects",
    challenges: [
      "Managing bulk enquiries",
      "Site visit scheduling",
      "Post-booking communication",
    ],
    solutions: [
      "AI lead qualification",
      "Automated site visit booking",
      "Digital buyer journey automation",
    ],
    stat: "50%",
    statLabel: "Faster lead response",
    color: "#10B981",
    slug: "real-estate-developers",
  },
  {
    emoji: "📚",
    title: "Education & Coaching",
    subtitle: "Coaching Institutes, Tutors & Ed-Tech",
    challenges: [
      "Student enquiry follow-up",
      "Fee reminder management",
      "Course update communication",
    ],
    solutions: [
      "Automated admission follow-ups",
      "AI fee reminder sequences",
      "Student engagement chatbot",
    ],
    stat: "2×",
    statLabel: "Admissions growth",
    color: "#3B82F6",
    slug: "education-coaching",
  },
  {
    emoji: "🚗",
    title: "Driving Schools",
    subtitle: "Motor Training Schools & Instructors",
    challenges: [
      "Slot booking is manual",
      "Test date reminders",
      "Student communication",
    ],
    solutions: [
      "Online slot booking automation",
      "RTO test reminders via WhatsApp",
      "AI student communication",
    ],
    stat: "80%",
    statLabel: "Bookings automated",
    color: "#F59E0B",
    slug: "driving-schools",
  },
  {
    emoji: "🎨",
    title: "Playschools & Daycares",
    subtitle: "Preschools, Montessori & Childcare",
    challenges: [
      "Admission enquiry management",
      "Parent communication updates",
      "Fee collection reminders",
    ],
    solutions: [
      "AI admission chatbot",
      "Automated parent newsletters",
      "Digital fee reminders",
    ],
    stat: "3×",
    statLabel: "Enquiries handled",
    color: "#8B5CF6",
    slug: "playschools",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section
        className="pt-[130px] pb-20 px-6 relative overflow-hidden"
        style={{ background: "#090C10" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <p
            className="text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Industries We Serve
          </p>
          <h1
            className="font-head mb-5"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            AI Built Specifically for
            <br />
            <em style={{ fontStyle: "italic", color: "#60A5FA" }}>
              Your Profession
            </em>
          </h1>
          <p
            className="max-w-xl mx-auto"
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
            }}
          >
            Generic AI tools fail because they ignore how your specific
            profession works. We build workflows tailored to your industry — so
            you see results in weeks, not months.
          </p>

          <div className="flex justify-center gap-10 mt-12 flex-wrap">
            {[
              { val: "50+", label: "Businesses Served" },
              { val: "12", label: "Industries Covered" },
              { val: "15h", label: "Average Weekly Savings" },
              { val: "30d", label: "Time to First Results" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-head"
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "2rem",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "4px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#60A5FA",
                  fontFamily: "monospace",
                }}
              >
                PROFESSIONALS
              </span>
            </div>
            <h2
              className="font-head"
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Solo Professionals &amp;{" "}
              <em style={{ fontStyle: "italic", color: "#60A5FA" }}>
                Independent Practitioners
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROFESSIONALS.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#090C10" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#10B981",
                  fontFamily: "monospace",
                }}
              >
                SMALL &amp; MEDIUM BUSINESSES
              </span>
            </div>
            <h2
              className="font-head"
              style={{
                fontFamily: "Instrument Serif, Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              SMEs &amp; Growing{" "}
              <em style={{ fontStyle: "italic", color: "#10B981" }}>
                Businesses
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SMES.map((ind) => (
              <IndustryCard key={ind.slug} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: "#0D1117" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-xl mx-auto relative">
          <p
            className="text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Don&apos;t See Your Industry?
          </p>
          <h2
            className="font-head mb-4"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            We Build Custom AI for{" "}
            <em style={{ fontStyle: "italic", color: "#60A5FA" }}>
              Any Business
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
            If your profession is not listed above, we still want to hear from
            you. Book a free discovery call and we will map your automation
            opportunities in 30 minutes.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/diagnostic"
              className="px-8 py-3.5 rounded-[10px] font-medium transition-all hover:opacity-90"
              style={{
                background: "#3B82F6",
                color: "white",
                fontSize: "14.5px",
                textDecoration: "none",
              }}
            >
              🧪 Take Free AI Audit
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 rounded-[10px] transition-all hover:opacity-80"
              style={{
                color: "white",
                fontSize: "14.5px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
