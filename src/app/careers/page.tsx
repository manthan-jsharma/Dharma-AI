import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Work with Artha AI",
  description:
    "Join Artha AI and help small businesses across India enter the AI age. We are a remote-first team building practical AI solutions for professionals and SMEs.",
};

interface Role {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
  color: string;
}

const OPEN_ROLES: Role[] = [
  {
    title: "AI Automation Specialist",
    type: "Full-time",
    location: "Remote / Jaipur",
    department: "Engineering",
    color: "#3B82F6",
    description:
      "Build and maintain AI automation workflows for our clients using Make, Zapier, n8n, and custom integrations. You will work directly with clients to understand their processes and turn them into reliable automations.",
    requirements: [
      "2+ years experience with Make, Zapier, or n8n",
      "Strong understanding of API integrations and webhooks",
      "Experience with WhatsApp Business API is a plus",
      "Comfortable working with non-technical clients",
      "Strong documentation and communication skills",
    ],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Remote / Jaipur",
    department: "Marketing",
    color: "#8B5CF6",
    description:
      "Manage social media, content creation, and paid campaigns for Artha AI and our clients. You will use AI tools to produce high-quality content at scale and track performance with data.",
    requirements: [
      "2+ years in digital marketing or social media management",
      "Experience with Meta Ads and Google Ads",
      "Comfortable using AI writing and design tools",
      "Strong Hindi and English copywriting skills",
      "Understanding of SEO and content strategy",
    ],
  },
  {
    title: "Business Development Executive",
    type: "Full-time",
    location: "Remote / Pan India",
    department: "Sales",
    color: "#10B981",
    description:
      "Drive growth by identifying and converting new clients across our target verticals — CAs, lawyers, architects, real estate, and clinics. You will run discovery calls, present solutions, and close deals.",
    requirements: [
      "2+ years in B2B sales or business development",
      "Experience selling to professionals or SMEs preferred",
      "Strong presentation and consultative selling skills",
      "Self-motivated with ability to manage your own pipeline",
      "Familiarity with AI or SaaS products is a strong plus",
    ],
  },
  {
    title: "Web Developer (Next.js)",
    type: "Contract / Full-time",
    location: "Remote",
    department: "Engineering",
    color: "#F59E0B",
    description:
      "Build fast, modern websites and web applications for Artha AI clients using Next.js, Tailwind CSS, and headless CMS platforms. You will work on client projects from design handoff to deployment.",
    requirements: [
      "Strong proficiency in Next.js and TypeScript",
      "Experience with Tailwind CSS and responsive design",
      "Familiarity with headless CMS (Sanity, Contentful, or similar)",
      "Understanding of Core Web Vitals and SEO best practices",
      "Portfolio of live websites required",
    ],
  },
  {
    title: "AI Prompt Engineer & Content Strategist",
    type: "Part-time / Contract",
    location: "Remote",
    department: "AI & Content",
    color: "#06B6D4",
    description:
      "Develop AI prompt libraries, content frameworks, and automation templates for our client verticals. You will work closely with the product and consulting team to systematise our AI delivery.",
    requirements: [
      "Deep familiarity with ChatGPT, Claude, and other LLMs",
      "Experience building prompt libraries or AI workflows",
      "Strong understanding of at least one of our verticals",
      "Excellent written communication in English and Hindi",
      "Curiosity and ability to keep up with fast-moving AI developments",
    ],
  },
];

const PERKS = [
  {
    icon: "🏠",
    title: "Remote-First",
    desc: "Work from anywhere in India. We trust you to manage your time and deliver great work.",
  },
  {
    icon: "🚀",
    title: "Fast Growth",
    desc: "We are growing rapidly. Early team members get significant responsibility and career growth.",
  },
  {
    icon: "🧠",
    title: "AI-First Culture",
    desc: "We use AI tools in everything we do. You will learn faster here than anywhere else.",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    desc: "Market-rate salaries with performance bonuses tied to client and company growth.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    desc: "Annual budget for courses, tools, and conferences to keep your skills sharp.",
  },
  {
    icon: "🤝",
    title: "Direct Access",
    desc: "Small team means you work directly with the founder and senior leadership daily.",
  },
];

const VALUES = [
  {
    title: "Client Obsession",
    desc: "Everything we do is measured by the impact it creates for our clients. Hours saved. Leads generated. Revenue grown.",
  },
  {
    title: "Bias for Action",
    desc: "We move fast, ship early, and improve continuously. Perfect is the enemy of shipped.",
  },
  {
    title: "Radical Simplicity",
    desc: "We take complex AI and make it feel effortless. If something is complicated, we have not thought hard enough.",
  },
  {
    title: "Ownership Mindset",
    desc: "Every team member owns their area completely. No micromanagement. Full accountability.",
  },
];

export default function CareersPage() {
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
            background:
              "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <p
            className="text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Careers at Artha AI
          </p>
          <h1
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
            }}
          >
            Help India&apos;s Professionals
            <br />
            <em style={{ fontStyle: "italic", color: "#60A5FA" }}>
              Enter the AI Age
            </em>
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.8,
              maxWidth: "560px",
              margin: "0 auto 36px",
            }}
          >
            We are a small, remote-first team on a mission to make AI
            accessible and actionable for every professional and SME in India.
            If that excites you, we want to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { val: "5",      label: "Team Members" },
              { val: "50+",   label: "Clients Served" },
              { val: "100%",  label: "Remote Friendly" },
              { val: "2022",  label: "Founded" },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center rounded-[12px] px-6 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.7rem",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "11px",
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

      {/* ── Values ── */}
      <section className="py-20 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3 text-center"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            How We Work
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
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-[16px] p-7"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.15rem",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="py-20 px-6" style={{ background: "#090C10" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3 text-center"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Why Join Us
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
            Perks &amp; Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((p) => (
              <div
                key={p.title}
                className="rounded-[16px] p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-2xl mb-4 w-10 h-10 flex items-center justify-center rounded-[10px]"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  {p.icon}
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

      {/* ── Open Roles ── */}
      <section className="py-20 px-6" style={{ background: "#0D1117" }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[11px] uppercase tracking-widest mb-3"
            style={{ color: "#60A5FA", fontFamily: "monospace" }}
          >
            Open Positions
          </p>
          <h2
            className="mb-12"
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Current Openings
          </h2>

          <div className="flex flex-col gap-5">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="rounded-[18px] p-7"
                style={{
                  background: "#0F1419",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Role header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3
                      style={{
                        fontFamily: "Instrument Serif, Georgia, serif",
                        fontSize: "1.2rem",
                        color: "white",
                        marginBottom: "8px",
                      }}
                    >
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[role.department, role.type, role.location].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-full"
                            style={{
                              background: `${role.color}12`,
                              border: `1px solid ${role.color}25`,
                              color: role.color,
                            }}
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  
                    href={`mailto:careers@arthaai.in?subject=Application: ${role.title}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] font-medium transition-all hover:opacity-90 flex-shrink-0"
                    style={{
                      background: role.color,
                      color: "white",
                      fontSize: "13px",
                      textDecoration: "none",
                    }}
                  >
                    Apply Now →
                  </a>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                  }}
                >
                  {role.description}
                </p>

                {/* Requirements */}
                <div>
                  <p
                    className="text-[10.5px] uppercase tracking-widest mb-3"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      fontFamily: "monospace",
                    }}
                  >
                    Requirements
                  </p>
                  <div className="flex flex-col gap-2">
                    {role.requirements.map((req) => (
                      <div
                        key={req}
                        className="flex items-start gap-2.5"
                      >
                        <span
                          style={{
                            color: role.color,
                            fontSize: "11px",
                            marginTop: "4px",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.6,
                          }}
                        >
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No role found */}
          <div
            className="mt-8 rounded-[16px] p-7 text-center"
            style={{
              background: "#0F1419",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "white",
                marginBottom: "8px",
                fontFamily: "Instrument Serif, Georgia, serif",
              }}
            >
              Don&apos;t see the right role?
            </p>
            <p
              style={{
                fontSize: "13.5px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "18px",
                lineHeight: 1.7,
              }}
            >
              We are always looking for exceptional people. Send us your
              resume and tell us how you want to contribute.
            </p>
            
              href="mailto:careers@arthaai.in?subject=Open Application"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] transition-all hover:opacity-90"
              style={{
                background: "#3B82F6",
                color: "white",
                fontSize: "13.5px",
                textDecoration: "none",
              }}
            >
              Send Open Application →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}