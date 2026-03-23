import { CTABanner } from "@/components/shared/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Playbook for Indian Professionals | Artha AI",
  description:
    "Practical AI guides, case studies, and strategies for CAs, lawyers, architects, real estate agents, and SMEs in India.",
};

interface BlogPost {
  slug: string;
  emoji: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const POSTS: BlogPost[] = [
  {
    slug: "law-firms-ai-document-review",
    emoji: "⚖️",
    tag: "Legal",
    tagColor: "#7C3AED",
    title: "How AI is Saving Law Firms 20+ Hours Per Week on Document Review",
    excerpt:
      "Discover how small and mid-size law firms in India are using AI tools to automate contract review, clause extraction, and compliance checks.",
    date: "March 15, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "ca-automate-gst-onboarding",
    emoji: "📊",
    tag: "Finance",
    tagColor: "#0D9488",
    title: "CAs: Automate Client Onboarding & GST Filing Reminders with AI",
    excerpt:
      "A step-by-step walkthrough for Chartered Accountants to set up automated client onboarding sequences and compliance reminder workflows.",
    date: "March 8, 2025",
    readTime: "5 min read",
  },
  {
    slug: "ai-ready-property-agency",
    emoji: "🏢",
    tag: "Real Estate",
    tagColor: "#D97706",
    title: "The AI-Ready Property Agency: Lead Capture, Nurturing & Closing",
    excerpt:
      "Real estate agencies using AI lead automation are closing 40% more deals. Here's exactly how to set it up for your agency.",
    date: "March 1, 2025",
    readTime: "7 min read",
  },
  {
    slug: "patient-followups-clinics",
    emoji: "🏥",
    tag: "Clinics",
    tagColor: "#DC2626",
    title: "Patient Follow-ups on Autopilot: AI for Small Medical Practices",
    excerpt:
      "Reduce no-shows by 60% and improve patient retention with automated appointment reminders and post-visit follow-up sequences.",
    date: "February 22, 2025",
    readTime: "4 min read",
  },
  {
    slug: "architects-ai-proposals",
    emoji: "🏗️",
    tag: "Architecture",
    tagColor: "#2563EB",
    title: "Architects: Use AI to Win More Projects with Better Proposals",
    excerpt:
      "How architecture studios are using AI to generate first-draft proposals, mood boards, and cost estimates in a fraction of the time.",
    date: "February 15, 2025",
    readTime: "5 min read",
  },
  {
    slug: "ai-roadmap-indian-sme-2025",
    emoji: "🤖",
    tag: "Strategy",
    tagColor: "#1B6EF3",
    title: "The 5-Step AI Roadmap for Any Indian SME (2025 Edition)",
    excerpt:
      "A practical, no-jargon guide for business owners ready to implement AI — covering tool selection, workflow design, and measuring ROI.",
    date: "February 8, 2025",
    readTime: "8 min read",
  },
];

const CATEGORIES = ["All", "Legal", "Finance", "Real Estate", "Clinics", "Architecture", "Strategy"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[130px] pb-16 px-6 relative overflow-hidden"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 60% 40%, rgba(27,110,243,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-3xl relative">
          <p className="text-brand-cyan text-xs font-head font-semibold uppercase tracking-widest mb-4">
            AI Insights
          </p>
          <h1 className="font-head text-4xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.03em] mb-4">
            The AI Playbook for<br />Indian Professionals
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Practical guides, case studies, and AI strategies for CAs, lawyers,
            architects, and SMEs.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto">
          {/* Category filters — client component not needed for static render */}
          <div className="flex gap-2.5 flex-wrap mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all border ${
                  cat === "All"
                    ? "bg-brand-blue text-white border-brand-blue"
                    : "bg-white border-[#D9E2EE] text-[#4A6080] hover:border-brand-blue/40 hover:text-brand-blue"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          {POSTS.filter((p) => p.featured).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-[20px] border border-[#D9E2EE] overflow-hidden mb-8 hover:-translate-y-1 transition-transform duration-200 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className="md:w-[320px] h-[200px] md:h-auto flex items-center justify-center text-6xl flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0A1628, #162B52)" }}
                >
                  {post.emoji}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span
                    className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-fit"
                    style={{
                      background: `${post.tagColor}20`,
                      color: post.tagColor,
                    }}
                  >
                    ★ Featured · {post.tag}
                  </span>
                  <h2 className="font-head text-xl font-bold text-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#4A6080] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-[#8FA3BF] text-[13px]">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.filter((p) => !p.featured).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-[20px] border border-[#D9E2EE] overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer group"
              >
                <div
                  className="h-[160px] flex items-center justify-center text-5xl"
                  style={{ background: "linear-gradient(135deg, #0A1628, #162B52)" }}
                >
                  {post.emoji}
                </div>
                <div className="p-6">
                  <span
                    className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3"
                    style={{
                      background: `${post.tagColor}20`,
                      color: post.tagColor,
                    }}
                  >
                    {post.tag}
                  </span>
                  <h2 className="font-head text-[15px] font-semibold text-navy mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#4A6080] text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-[#8FA3BF] text-[12px]">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
