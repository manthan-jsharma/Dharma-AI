export interface DiagnosticQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
}

export interface DiagnosticResult {
  score: number;
  percentage: number;
  label: "Low" | "Medium" | "High";
  color: string;
  headline: string;
  message: string;
  categoryScores: { category: string; score: number; max: number }[];
  recommendations: string[];
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // ── Digital Presence ──
  {
    id: 1,
    category: "Digital Presence",
    question: "Do you currently have a business website?",
    options: [
      "No website at all",
      "Basic website, rarely updated",
      "Active website with contact form",
      "Modern website with SEO and lead capture",
    ],
  },
  {
    id: 2,
    category: "Digital Presence",
    question: "How do clients typically find your business?",
    options: [
      "Only through word of mouth / referrals",
      "Occasionally through Google or social media",
      "Consistently through online search",
      "Strong online presence across multiple platforms",
    ],
  },
  {
    id: 3,
    category: "Digital Presence",
    question: "Are you listed on Google Business, Justdial, or Sulekha?",
    options: [
      "Not listed anywhere",
      "Listed on 1 platform, not maintained",
      "Listed on 2–3 platforms",
      "Active on 4+ platforms with reviews",
    ],
  },

  // ── Lead Management ──
  {
    id: 4,
    category: "Lead Management",
    question: "How do you currently manage new client leads?",
    options: [
      "Manually via phone calls and WhatsApp",
      "Spreadsheets and sticky notes",
      "Basic CRM or contact form",
      "Automated CRM with follow-up sequences",
    ],
  },
  {
    id: 5,
    category: "Lead Management",
    question: "How quickly do you typically follow up with a new lead?",
    options: [
      "Within a few days or whenever I remember",
      "Within 24 hours manually",
      "Within a few hours with reminders",
      "Instantly via automated response",
    ],
  },
  {
    id: 6,
    category: "Lead Management",
    question: "What percentage of your leads convert to paying clients?",
    options: [
      "Less than 10% — most leads go cold",
      "10–25% — some convert after follow-ups",
      "25–50% — decent conversion rate",
      "50%+ — strong, consistent conversion",
    ],
  },

  // ── Communication & Automation ──
  {
    id: 7,
    category: "Communication",
    question: "How do you handle appointment scheduling?",
    options: [
      "Manually over phone or WhatsApp",
      "Email back-and-forth",
      "Online booking form",
      "Fully automated calendar with reminders",
    ],
  },
  {
    id: 8,
    category: "Communication",
    question: "Do you send automated reminders to clients?",
    options: [
      "No — everything is manual",
      "Occasionally send WhatsApp messages manually",
      "Some email reminders set up",
      "Fully automated reminders across channels",
    ],
  },
  {
    id: 9,
    category: "Communication",
    question: "How do you communicate updates or newsletters to clients?",
    options: [
      "No regular communication",
      "Occasional WhatsApp broadcasts",
      "Monthly email newsletters",
      "Automated, segmented campaigns",
    ],
  },

  // ── Operations & Admin ──
  {
    id: 10,
    category: "Operations",
    question: "How much time do you spend on repetitive admin tasks weekly?",
    options: [
      "15+ hours — it is overwhelming",
      "10–15 hours — significant but manageable",
      "5–10 hours — I have some systems",
      "Under 5 hours — well automated",
    ],
  },
  {
    id: 11,
    category: "Operations",
    question: "How do you currently manage invoicing and payments?",
    options: [
      "Manually via Word/Excel and cash",
      "Basic accounting software",
      "Digital invoicing with payment links",
      "Fully automated billing and reconciliation",
    ],
  },
  {
    id: 12,
    category: "Operations",
    question: "How are your client documents and files organized?",
    options: [
      "Physical files and folders",
      "Local computer folders",
      "Cloud storage like Google Drive",
      "Automated document management system",
    ],
  },

  // ── Marketing ──
  {
    id: 13,
    category: "Marketing",
    question: "How would you describe your current digital marketing?",
    options: [
      "No digital marketing at all",
      "Occasional social media posts",
      "Regular content with some paid ads",
      "Automated content calendar with analytics",
    ],
  },
  {
    id: 14,
    category: "Marketing",
    question: "Do you actively collect and showcase client reviews?",
    options: [
      "Never asked for reviews",
      "A few reviews, collected manually",
      "Actively request reviews after service",
      "Automated review collection and display",
    ],
  },
  {
    id: 15,
    category: "Marketing",
    question: "Do you run WhatsApp or email marketing campaigns?",
    options: [
      "No campaigns at all",
      "Occasional manual broadcasts",
      "Regular campaigns but manually managed",
      "Fully automated segmented campaigns",
    ],
  },

  // ── AI & Tech Readiness ──
  {
    id: 16,
    category: "AI Readiness",
    question: "Have you used any AI tools in your business so far?",
    options: [
      "Never used any AI tools",
      "Tried ChatGPT or similar casually",
      "Use a few AI tools regularly",
      "AI is integrated into multiple workflows",
    ],
  },
  {
    id: 17,
    category: "AI Readiness",
    question:
      "Do you have a chatbot or automated response on your website or WhatsApp?",
    options: [
      "No chatbot at all",
      "Basic auto-reply on WhatsApp",
      "Simple FAQ chatbot on website",
      "Advanced AI chatbot handling queries",
    ],
  },
  {
    id: 18,
    category: "AI Readiness",
    question: "How comfortable are you with adopting new technology?",
    options: [
      "Very hesitant — prefer traditional methods",
      "Open to it but unsure where to start",
      "Comfortable — already use several tools",
      "Enthusiastic early adopter",
    ],
  },

  // ── Growth & Strategy ──
  {
    id: 19,
    category: "Growth",
    question: "What is your biggest business challenge right now?",
    options: [
      "Getting more clients and leads",
      "Managing too much manual work",
      "Scaling without hiring more staff",
      "Standing out from competitors",
    ],
  },
  {
    id: 20,
    category: "Growth",
    question: "What is your revenue growth goal for the next 12 months?",
    options: [
      "Maintain current revenue",
      "Grow by 10–25%",
      "Grow by 25–50%",
      "Double or more — aggressive growth",
    ],
  },
];

export const CATEGORIES = [
  "Digital Presence",
  "Lead Management",
  "Communication",
  "Operations",
  "Marketing",
  "AI Readiness",
  "Growth",
];

export function calculateResult(answers: number[]): DiagnosticResult {
  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const maxScore = DIAGNOSTIC_QUESTIONS.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Category breakdown
  const categoryScores = CATEGORIES.map((cat) => {
    const catQuestions = DIAGNOSTIC_QUESTIONS.filter((q) => q.category === cat);
    const catScore = catQuestions.reduce((sum, q) => {
      const idx = q.id - 1;
      return sum + (answers[idx] ?? 0);
    }, 0);
    return {
      category: cat,
      score: catScore,
      max: catQuestions.length * 3,
    };
  });

  if (percentage < 35) {
    return {
      score: totalScore,
      percentage,
      label: "Low",
      color: "#F59E0B",
      headline: "Early Stage — Big Opportunity Ahead",
      message:
        "Your business has the most to gain from AI. You are currently doing most things manually, which means there is significant time and revenue being left on the table. The good news: even basic AI implementation will deliver immediate, visible results within 30 days.",
      categoryScores,
      recommendations: [
        "Build an AI-ready website with lead capture",
        "Set up WhatsApp automation for instant lead response",
        "List your business on Google Business + Justdial",
        "Start with one automated follow-up sequence",
        "Book a free consultation to build your AI roadmap",
      ],
    };
  }

  if (percentage < 65) {
    return {
      score: totalScore,
      percentage,
      label: "Medium",
      color: "#3B82F6",
      headline: "Growing — Ready to Accelerate",
      message:
        "You have a solid digital foundation but are still doing too much manually. With targeted AI automation in your lead management and marketing, you can realistically 2–3× your output without adding headcount. You are at the perfect stage to implement AI effectively.",
      categoryScores,
      recommendations: [
        "Automate your lead follow-up and nurturing sequences",
        "Implement AI-driven marketing campaigns",
        "Set up automated client communication workflows",
        "Integrate a CRM with AI scoring",
        "Upgrade your website with a chatbot and booking system",
      ],
    };
  }

  return {
    score: totalScore,
    percentage,
    label: "High",
    color: "#10B981",
    headline: "Advanced — Optimise for Scale",
    message:
      "You are ahead of 85% of professionals in your sector. Your AI readiness is strong. The focus now is on optimising what you have, removing remaining bottlenecks, and building advanced systems that create a lasting competitive moat for your business.",
    categoryScores,
    recommendations: [
      "Implement advanced AI analytics and forecasting",
      "Build custom AI workflows for your specific profession",
      "Automate client reporting and insights delivery",
      "Explore AI-powered business development tools",
      "Consider an AI consulting partnership for ongoing optimisation",
    ],
  };
}
