export interface ServiceDetail {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
  useCases: {
    profession: string;
    useCase: string;
  }[];
  results: {
    stat: string;
    label: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "ai-ready-websites",
    emoji: "🌐",
    title: "AI-Ready Websites",
    tagline: "Your 24/7 digital employee that captures leads while you sleep",
    description:
      "We build modern, fast, conversion-optimised websites for professionals and SMEs — integrated with AI chatbots, smart appointment booking, automated lead capture, and WhatsApp follow-up from day one.",
    color: "#3B82F6",
    features: [
      {
        icon: "🤖",
        title: "AI Chatbot Integration",
        desc: "A trained chatbot answers FAQs, qualifies leads, and books appointments — all without you lifting a finger.",
      },
      {
        icon: "📅",
        title: "Smart Appointment Booking",
        desc: "Clients book directly on your website. Reminders are sent automatically via WhatsApp and email.",
      },
      {
        icon: "🎯",
        title: "Lead Capture Forms",
        desc: "High-converting forms that capture name, number, and intent — then trigger instant automated follow-ups.",
      },
      {
        icon: "⚡",
        title: "Core Web Vitals Optimised",
        desc: "Built for speed. Your site loads under 2 seconds on mobile — critical for Google ranking in India.",
      },
      {
        icon: "🔍",
        title: "SEO Ready from Day One",
        desc: "Schema markup, semantic HTML, sitemap, and on-page SEO built in — not added as an afterthought.",
      },
      {
        icon: "📱",
        title: "Mobile-First Design",
        desc: "Over 80% of Indian users browse on mobile. Every page is designed for mobile first, desktop second.",
      },
    ],
    useCases: [
      {
        profession: "CA Firm",
        useCase: "Clients book tax consultation slots directly online",
      },
      {
        profession: "Law Office",
        useCase: "AI chatbot handles initial case enquiries 24/7",
      },
      {
        profession: "Clinic",
        useCase: "Patients book appointments and receive automatic reminders",
      },
      {
        profession: "Architecture Studio",
        useCase: "Portfolio site with AI-driven project enquiry capture",
      },
      {
        profession: "Real Estate Agent",
        useCase:
          "Property listings with instant lead capture and callback automation",
      },
    ],
    results: [
      { stat: "3×", label: "More leads captured" },
      { stat: "80%", label: "Enquiries handled by AI" },
      { stat: "2s", label: "Average load time" },
      { stat: "30d", label: "Launch timeline" },
    ],
    process: [
      {
        step: "01",
        title: "Discovery Call",
        desc: "We understand your profession, goals, and current digital presence.",
      },
      {
        step: "02",
        title: "Design & Content",
        desc: "We create wireframes, copy, and design tailored to your industry.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        desc: "We build the site with all AI tools, chatbot, and booking system.",
      },
      {
        step: "04",
        title: "Launch & Optimise",
        desc: "We launch, monitor performance, and optimise for conversions.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to build my website?",
        a: "Most websites are built and launched within 3–4 weeks from the discovery call.",
      },
      {
        q: "Will I be able to update the content myself?",
        a: "Yes. We set up a simple CMS so you can update text, images, and blog posts without any technical knowledge.",
      },
      {
        q: "What happens if my website has an issue after launch?",
        a: "We provide 3 months of post-launch support included with every project.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Absolutely. We can redesign and upgrade your existing site with all the AI integrations.",
      },
    ],
  },

  {
    slug: "lead-generation",
    emoji: "🎯",
    title: "Lead Generation Automation",
    tagline: "Never lose a lead to slow follow-up again",
    description:
      "We build automated lead capture, scoring, and nurturing systems that respond to every enquiry instantly — via WhatsApp, email, and SMS — so you close more business without doing more work.",
    color: "#10B981",
    features: [
      {
        icon: "⚡",
        title: "Instant WhatsApp Response",
        desc: "Every new lead gets an automated WhatsApp message within seconds — before they enquire with a competitor.",
      },
      {
        icon: "🧠",
        title: "AI Lead Scoring",
        desc: "Leads are automatically scored by intent, profession, and behaviour so you focus on the hottest prospects first.",
      },
      {
        icon: "📧",
        title: "Multi-Channel Follow-up",
        desc: "Automated sequences across WhatsApp, email, and SMS that nurture leads over days and weeks — hands-free.",
      },
      {
        icon: "📊",
        title: "CRM Integration",
        desc: "All leads flow automatically into your CRM with full history, tags, and status tracking.",
      },
      {
        icon: "🔄",
        title: "Re-engagement Campaigns",
        desc: "Cold leads are automatically re-engaged with personalised messages after 7, 14, and 30 days.",
      },
      {
        icon: "📈",
        title: "Conversion Analytics",
        desc: "Real-time dashboard showing lead source, response rate, conversion rate, and revenue attributed.",
      },
    ],
    useCases: [
      {
        profession: "Real Estate Agent",
        useCase:
          "Instant response to property enquiries with automated site visit booking",
      },
      {
        profession: "CA Firm",
        useCase:
          "New client enquiries automatically qualify and book a consultation",
      },
      {
        profession: "Insurance Agent",
        useCase: "Lead follow-up sequences that run for 30 days automatically",
      },
      {
        profession: "Coaching Institute",
        useCase: "Student admission enquiries nurtured until enrolment",
      },
      {
        profession: "Clinic",
        useCase:
          "Patient enquiries converted to booked appointments without manual calls",
      },
    ],
    results: [
      { stat: "3×", label: "Higher conversion rate" },
      { stat: "90s", label: "Average response time" },
      { stat: "40%", label: "More leads re-engaged" },
      { stat: "0", label: "Leads lost to slow follow-up" },
    ],
    process: [
      {
        step: "01",
        title: "Lead Audit",
        desc: "We map your current lead sources and identify where prospects are dropping off.",
      },
      {
        step: "02",
        title: "Sequence Design",
        desc: "We design personalised follow-up sequences specific to your profession and buyer journey.",
      },
      {
        step: "03",
        title: "Build & Connect",
        desc: "We build the automation and connect it to your website, social, and CRM.",
      },
      {
        step: "04",
        title: "Monitor & Improve",
        desc: "We track performance weekly and continuously improve open and conversion rates.",
      },
    ],
    faqs: [
      {
        q: "Which CRM do you integrate with?",
        a: "We work with Zoho, HubSpot, Notion, Google Sheets, and most popular CRMs. We can also set one up for you from scratch.",
      },
      {
        q: "Will messages sound robotic to my leads?",
        a: "No. We write all messages in your brand voice, personalised with the lead's name and enquiry details.",
      },
      {
        q: "How quickly can this be set up?",
        a: "A standard lead automation system is live within 1–2 weeks.",
      },
      {
        q: "Do I need a WhatsApp Business account?",
        a: "Yes. We set up and configure your WhatsApp Business API as part of the onboarding process.",
      },
    ],
  },

  {
    slug: "digital-directories",
    emoji: "📍",
    title: "Digital Directory Listing",
    tagline: "Get found everywhere your clients are searching",
    description:
      "We list, optimise, and actively manage your business presence across Google Business Profile, Justdial, Sulekha, IndiaMART, and 20+ platforms — so you dominate local search results and attract inbound enquiries consistently.",
    color: "#F59E0B",
    features: [
      {
        icon: "📍",
        title: "Google Business Optimisation",
        desc: "Full GMB setup, photo optimisation, Q&A management, and post scheduling to dominate local Google search.",
      },
      {
        icon: "⭐",
        title: "Review Generation & Management",
        desc: "Automated requests for Google reviews after every client interaction, plus monitoring and responding to all reviews.",
      },
      {
        icon: "🗂️",
        title: "20+ Platform Listings",
        desc: "Consistent NAP (Name, Address, Phone) data across Justdial, Sulekha, IndiaMART, Practo, 99acres, and more.",
      },
      {
        icon: "🔍",
        title: "Local SEO Optimisation",
        desc: "Keyword-optimised business descriptions, category selection, and service area targeting for each platform.",
      },
      {
        icon: "📊",
        title: "Monthly Performance Reports",
        desc: "Track profile views, search impressions, calls, and direction requests across all platforms every month.",
      },
      {
        icon: "🔄",
        title: "Ongoing Maintenance",
        desc: "We update your listings with new photos, offers, posts, and hours so your profiles stay fresh and ranked.",
      },
    ],
    useCases: [
      {
        profession: "Clinic",
        useCase:
          "Rank on Google for 'dentist near me' and attract walk-in patients",
      },
      {
        profession: "CA Firm",
        useCase:
          "Appear in Justdial searches for 'CA in Jaipur' and get inbound enquiries",
      },
      {
        profession: "Driving School",
        useCase: "Dominate local search with 100+ verified Google reviews",
      },
      {
        profession: "Architecture Firm",
        useCase:
          "Showcase portfolio on Google Business with regular photo updates",
      },
      {
        profession: "Real Estate Agent",
        useCase:
          "List on 99acres, MagicBricks, and Housing with consistent contact details",
      },
    ],
    results: [
      { stat: "4×", label: "More profile views" },
      { stat: "20+", label: "Platforms covered" },
      { stat: "100+", label: "Reviews generated" },
      { stat: "2×", label: "Inbound enquiry growth" },
    ],
    process: [
      {
        step: "01",
        title: "Audit Existing Presence",
        desc: "We audit all current listings and identify incorrect or duplicate entries.",
      },
      {
        step: "02",
        title: "Create & Optimise",
        desc: "We create or claim all profiles with keyword-rich, consistent information.",
      },
      {
        step: "03",
        title: "Review Automation",
        desc: "We set up automated review requests sent after every completed service.",
      },
      {
        step: "04",
        title: "Monthly Maintenance",
        desc: "We update all profiles monthly with new content, photos, and posts.",
      },
    ],
    faqs: [
      {
        q: "How many platforms do you list on?",
        a: "We cover 20+ platforms relevant to your profession and location, including Google, Justdial, Sulekha, and industry-specific directories.",
      },
      {
        q: "How long until I see results?",
        a: "Most clients see a noticeable increase in profile views and calls within 4–6 weeks of optimisation.",
      },
      {
        q: "What if I already have listings?",
        a: "We audit and correct all existing listings first, then fill any gaps and optimise everything.",
      },
      {
        q: "Do you manage ongoing review responses?",
        a: "Yes. We monitor and respond to all new reviews on your behalf as part of the ongoing management service.",
      },
    ],
  },

  {
    slug: "digital-marketing",
    emoji: "📣",
    title: "Automate Digital Marketing",
    tagline: "A full marketing team running on autopilot for your business",
    description:
      "We build AI-powered content calendars, automate social media posting, run intelligent paid ad campaigns, and deliver weekly analytics — so your marketing runs consistently without you spending hours on it every week.",
    color: "#8B5CF6",
    features: [
      {
        icon: "📅",
        title: "AI Content Calendar",
        desc: "30 days of content — posts, reels, stories, and carousels — planned and scheduled in advance every month.",
      },
      {
        icon: "🤖",
        title: "Automated Social Posting",
        desc: "Content posts automatically to Instagram, Facebook, LinkedIn, and Google Business on your optimised schedule.",
      },
      {
        icon: "🎯",
        title: "Targeted Ad Campaigns",
        desc: "AI-optimised Meta and Google ads targeting your exact client profile with automatic budget allocation.",
      },
      {
        icon: "📧",
        title: "Email Marketing Automation",
        desc: "Monthly newsletters, offer announcements, and client re-engagement campaigns designed and sent automatically.",
      },
      {
        icon: "📊",
        title: "Weekly Performance Analytics",
        desc: "Every Monday you receive a clear report — reach, engagement, leads generated, and ad spend ROI.",
      },
      {
        icon: "✍️",
        title: "AI Copywriting",
        desc: "All captions, ad copy, email subject lines, and blog content written by AI trained in your brand voice.",
      },
    ],
    useCases: [
      {
        profession: "CA Firm",
        useCase:
          "Weekly tax tips on LinkedIn that position you as an expert and attract HNI clients",
      },
      {
        profession: "Coaching Institute",
        useCase:
          "Instagram reels and Facebook ads driving admissions during peak seasons",
      },
      {
        profession: "Clinic",
        useCase:
          "Health awareness content that builds patient trust and drives appointment bookings",
      },
      {
        profession: "Architecture Firm",
        useCase:
          "Project showcase posts that generate inbound project enquiries",
      },
      {
        profession: "Insurance Agent",
        useCase:
          "Educational content on WhatsApp broadcast that positions you as a trusted advisor",
      },
    ],
    results: [
      { stat: "10×", label: "More content published" },
      { stat: "8h", label: "Saved on marketing weekly" },
      { stat: "2×", label: "Engagement growth" },
      { stat: "40%", label: "Lower cost per lead from ads" },
    ],
    process: [
      {
        step: "01",
        title: "Brand & Audience Audit",
        desc: "We define your content pillars, target audience, and brand voice guidelines.",
      },
      {
        step: "02",
        title: "Content Creation",
        desc: "We create one month of content in advance — all designed and copy-written.",
      },
      {
        step: "03",
        title: "Schedule & Automate",
        desc: "We connect all your social accounts and set up automated posting schedules.",
      },
      {
        step: "04",
        title: "Analyse & Improve",
        desc: "Weekly performance reports with ongoing content and ad optimisation.",
      },
    ],
    faqs: [
      {
        q: "Do I need to provide content or photos?",
        a: "No. We create everything using AI tools and your existing brand assets. Optionally you can share photos and we incorporate them.",
      },
      {
        q: "Which social platforms do you manage?",
        a: "Instagram, Facebook, LinkedIn, and Google Business as standard. WhatsApp broadcast is available as an add-on.",
      },
      {
        q: "Can you run ads too?",
        a: "Yes. Ad campaign management is available as an upgrade to the base social media package.",
      },
      {
        q: "How do I approve content before it posts?",
        a: "We share a content calendar every month for your review and approval before scheduling.",
      },
    ],
  },

  {
    slug: "communication-automation",
    emoji: "💬",
    title: "Digital Communication Automation",
    tagline: "Every client interaction handled intelligently — at scale",
    description:
      "We automate your entire client communication layer — WhatsApp, email, and SMS — with AI-powered sequences for onboarding, follow-up, reminders, updates, and re-engagement. Your clients always feel attended to, without you doing the work manually.",
    color: "#06B6D4",
    features: [
      {
        icon: "📱",
        title: "WhatsApp Business Automation",
        desc: "Automated welcome messages, appointment reminders, document requests, and follow-ups via WhatsApp Business API.",
      },
      {
        icon: "📧",
        title: "Email Sequence Automation",
        desc: "Onboarding emails, progress updates, renewal reminders, and seasonal campaigns triggered automatically.",
      },
      {
        icon: "🔔",
        title: "SMS Reminders",
        desc: "Critical reminders for appointments, deadlines, and payments sent via SMS as a backup to WhatsApp.",
      },
      {
        icon: "🤖",
        title: "AI Chatbot for WhatsApp",
        desc: "An AI assistant on WhatsApp that handles FAQs, collects information, and routes queries to the right person.",
      },
      {
        icon: "👋",
        title: "Client Onboarding Sequences",
        desc: "A structured welcome sequence that collects documents, sets expectations, and starts the relationship right.",
      },
      {
        icon: "♻️",
        title: "Re-engagement Campaigns",
        desc: "Dormant clients are automatically identified and re-engaged with personalised outreach campaigns.",
      },
    ],
    useCases: [
      {
        profession: "CA Firm",
        useCase:
          "Automated document collection checklist sent to every new client via WhatsApp",
      },
      {
        profession: "Clinic",
        useCase:
          "Appointment reminder 24 hours before, plus post-visit follow-up survey",
      },
      {
        profession: "Driving School",
        useCase:
          "Slot reminders, test date notifications, and RTO update communication",
      },
      {
        profession: "Law Firm",
        useCase:
          "Case status updates sent automatically when milestones are reached",
      },
      {
        profession: "Playschool",
        useCase:
          "Daily parent updates, fee reminders, and event notifications via WhatsApp",
      },
    ],
    results: [
      { stat: "60%", label: "Fewer missed appointments" },
      { stat: "95%", label: "Message open rate on WhatsApp" },
      { stat: "5h", label: "Saved on manual follow-ups" },
      { stat: "3×", label: "Faster client response" },
    ],
    process: [
      {
        step: "01",
        title: "Communication Audit",
        desc: "We map every touchpoint in your client journey and identify automation opportunities.",
      },
      {
        step: "02",
        title: "Sequence Design",
        desc: "We write all messages, design the flow, and set triggers for each sequence.",
      },
      {
        step: "03",
        title: "Setup & Integration",
        desc: "We connect WhatsApp Business API, email, and SMS to your systems.",
      },
      {
        step: "04",
        title: "Monitor & Refine",
        desc: "We track open rates, response rates, and optimise messaging continuously.",
      },
    ],
    faqs: [
      {
        q: "Do I need to have WhatsApp Business already?",
        a: "No. We set up the WhatsApp Business API account as part of the onboarding process.",
      },
      {
        q: "Will messages feel personal or robotic?",
        a: "All messages are personalised with client names, dates, and relevant context. They feel human, not automated.",
      },
      {
        q: "Can I send bulk broadcasts legally?",
        a: "Yes — through the official WhatsApp Business API, which is fully compliant with Meta's policies.",
      },
      {
        q: "What happens if a client replies to an automated message?",
        a: "Replies are routed to you or your team via a shared inbox. We can also set up an AI to handle common replies.",
      },
    ],
  },

  {
    slug: "ai-consulting",
    emoji: "🧠",
    title: "AI Consulting",
    tagline:
      "Your personal AI co-founder — strategy, roadmap, and implementation",
    description:
      "We work directly with you as your strategic AI partner — auditing your business, identifying the highest-ROI automation opportunities, building a prioritised roadmap, and guiding implementation from start to measurable results.",
    color: "#F97316",
    features: [
      {
        icon: "🔍",
        title: "AI Readiness Audit",
        desc: "A comprehensive 2-hour deep dive into your business processes, tools, and team to identify every automation opportunity.",
      },
      {
        icon: "🗺️",
        title: "Custom AI Roadmap",
        desc: "A prioritised 90-day implementation plan showing exactly what to build, in what order, and the expected ROI of each initiative.",
      },
      {
        icon: "🛠️",
        title: "Tool Selection & Setup",
        desc: "We evaluate and recommend the exact AI tools for your budget and use case — then configure and integrate them.",
      },
      {
        icon: "👨‍💼",
        title: "Monthly Strategy Sessions",
        desc: "Regular 1:1 sessions to review progress, solve implementation challenges, and plan the next phase of AI adoption.",
      },
      {
        icon: "📊",
        title: "ROI Measurement Framework",
        desc: "We set up tracking from day one so you can see exactly how many hours are saved and how much revenue AI generates.",
      },
      {
        icon: "🎓",
        title: "Team Training",
        desc: "We train you and your team on every tool implemented so you are never dependent on us for day-to-day usage.",
      },
    ],
    useCases: [
      {
        profession: "CA Firm with 5+ staff",
        useCase:
          "Building an AI adoption roadmap that eliminates manual work across the whole team",
      },
      {
        profession: "Growing Law Firm",
        useCase:
          "Identifying which processes to automate first to free up senior associate time",
      },
      {
        profession: "Real Estate Developer",
        useCase:
          "Designing an AI-powered sales funnel from enquiry to site visit to booking",
      },
      {
        profession: "Healthcare Group",
        useCase:
          "Cross-clinic AI strategy for patient management and marketing",
      },
      {
        profession: "Solopreneur scaling up",
        useCase:
          "Building AI systems that let you scale from 1 to 10 clients without hiring",
      },
    ],
    results: [
      { stat: "90d", label: "To first measurable results" },
      { stat: "5×", label: "Average ROI on AI investment" },
      { stat: "100%", label: "Clients get a written roadmap" },
      { stat: "1:1", label: "Direct access to founder" },
    ],
    process: [
      {
        step: "01",
        title: "Discovery Session",
        desc: "A 2-hour deep-dive call to understand your business, team, challenges, and goals.",
      },
      {
        step: "02",
        title: "Audit & Analysis",
        desc: "We audit your workflows, tools, and data to map every automation opportunity with an ROI estimate.",
      },
      {
        step: "03",
        title: "Roadmap Delivery",
        desc: "You receive a written 90-day AI roadmap with specific tools, timelines, and expected outcomes.",
      },
      {
        step: "04",
        title: "Guided Implementation",
        desc: "Monthly strategy sessions to guide execution, unblock challenges, and track progress.",
      },
    ],
    faqs: [
      {
        q: "Is this only for large businesses?",
        a: "No. We work with solo professionals and 2-person teams right up to 50-person firms. The roadmap scales to your size.",
      },
      {
        q: "What do I get at the end of the engagement?",
        a: "A written AI roadmap, configured tools, trained team, and an ROI tracking dashboard.",
      },
      {
        q: "How is this different from the other services?",
        a: "Consulting is strategy-led. We help you decide what to build and why, then either build it ourselves or guide your team to do it.",
      },
      {
        q: "Can I start with consulting and then move to implementation?",
        a: "Yes. Most clients start with a consulting engagement and then continue with us for implementation.",
      },
    ],
  },

  {
    slug: "process-automation",
    emoji: "⚙️",
    title: "Business Process Automation",
    tagline: "Eliminate repetitive work from your business permanently",
    description:
      "We map your internal workflows and build end-to-end automation for invoicing, client onboarding, document management, approvals, reporting, and any other repetitive process — so your team focuses only on work that requires human judgment.",
    color: "#EF4444",
    features: [
      {
        icon: "🧾",
        title: "Invoicing & Billing Automation",
        desc: "Invoices generated, sent, and followed up automatically. Payment reminders triggered without manual intervention.",
      },
      {
        icon: "🚀",
        title: "Client Onboarding Automation",
        desc: "New clients are automatically walked through document collection, agreement signing, and account setup.",
      },
      {
        icon: "📁",
        title: "Document Management",
        desc: "Files automatically named, organised, and stored in the right folders — with access controls and version tracking.",
      },
      {
        icon: "✅",
        title: "Approval Workflow Automation",
        desc: "Multi-step approval chains automated — from submission to review to sign-off — with automatic escalation.",
      },
      {
        icon: "📊",
        title: "Automated Reporting",
        desc: "Weekly and monthly reports generated automatically from your data and sent to the right people on schedule.",
      },
      {
        icon: "🔗",
        title: "App Integration & Data Sync",
        desc: "Connect your existing tools — accounting, CRM, calendar, email — so data flows automatically between systems.",
      },
    ],
    useCases: [
      {
        profession: "CA Firm",
        useCase:
          "Automated client document collection, GST workings, and invoice generation",
      },
      {
        profession: "Law Firm",
        useCase: "Matter opening, document management, and billing automation",
      },
      {
        profession: "Architecture Firm",
        useCase:
          "Project milestone tracking with automated client update emails",
      },
      {
        profession: "Real Estate Office",
        useCase:
          "Automated agreement generation, token collection workflow, and registration reminders",
      },
      {
        profession: "Clinic",
        useCase:
          "Patient records, prescription follow-ups, and insurance claim workflow automation",
      },
    ],
    results: [
      { stat: "15h", label: "Saved per week per staff" },
      { stat: "90%", label: "Reduction in manual errors" },
      { stat: "2×", label: "Faster client onboarding" },
      { stat: "100%", label: "Processes documented" },
    ],
    process: [
      {
        step: "01",
        title: "Process Mapping",
        desc: "We spend time understanding every manual workflow in your business and document each step.",
      },
      {
        step: "02",
        title: "Automation Design",
        desc: "We design the automated version of each workflow with triggers, conditions, and outcomes.",
      },
      {
        step: "03",
        title: "Build & Test",
        desc: "We build each automation, test it thoroughly, and run it in parallel with manual process before cutover.",
      },
      {
        step: "04",
        title: "Training & Handover",
        desc: "We train your team, document every automation, and provide ongoing support.",
      },
    ],
    faqs: [
      {
        q: "What tools do you use to build automations?",
        a: "We use Make (formerly Integromat), Zapier, n8n, and custom code depending on the complexity and your existing tool stack.",
      },
      {
        q: "Do I need to change my existing software?",
        a: "Usually not. We integrate with your existing tools. If a key tool needs upgrading, we will advise you on the best options.",
      },
      {
        q: "What if the automation breaks?",
        a: "All automations include error handling and alert systems. We monitor them and fix any issues as part of ongoing support.",
      },
      {
        q: "How do you handle sensitive client data?",
        a: "We follow strict data handling protocols. All automations are built with data privacy in mind and comply with Indian IT regulations.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
