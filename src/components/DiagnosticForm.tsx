"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DIAGNOSTIC_QUESTIONS,
  CATEGORIES,
  calculateResult,
  type LeadData,
} from "@/lib/diagnostic";
import { ArrowRight, ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";

type Step = "intro" | "questions" | "lead" | "result";

// ── Shared sub-components defined OUTSIDE main component ──

interface CardProps {
  children: React.ReactNode;
}

function DiagCard({ children }: CardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "32px",
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </div>
  );
}

interface ProgBarProps {
  progress: number;
  step: Step;
  currentQ: number;
  total: number;
}

function ProgBar({ progress, step, currentQ, total }: ProgBarProps) {
  function label() {
    if (step === "intro") return "Ready to start";
    if (step === "questions") return `Question ${currentQ + 1} of ${total}`;
    if (step === "lead") return "Final step";
    return "Complete";
  }

  return (
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "monospace",
          marginBottom: "8px",
        }}
      >
        <span>{label()}</span>
        <span>{progress}%</span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(255,255,255,0.07)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
            borderRadius: "10px",
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

// ── Main component ──

export function DiagnosticForm() {
  const [step, setStep] = useState<Step>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [lead, setLead] = useState<LeadData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<LeadData>>({});

  const total = DIAGNOSTIC_QUESTIONS.length;
  const progress =
    step === "result"
      ? 100
      : step === "lead"
      ? 95
      : step === "intro"
      ? 0
      : Math.round((currentQ / total) * 100);

  function startTest() {
    setStep("questions");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  }

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const updated = [...answers];
    updated[currentQ] = selected;
    setAnswers(updated);
    setSelected(null);
    if (currentQ < total - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStep("lead");
    }
  }

  function handleBack() {
    if (step === "lead") {
      setStep("questions");
      setCurrentQ(total - 1);
      setSelected(answers[total - 1] ?? null);
      return;
    }
    if (currentQ > 0) {
      const prev = currentQ - 1;
      setCurrentQ(prev);
      setSelected(answers[prev] ?? null);
    } else {
      setStep("intro");
    }
  }

  function validate(): boolean {
    const e: Partial<LeadData> = {};
    if (!lead.name.trim()) {
      e.name = "Name is required";
    }
    if (!lead.email.trim() || !/\S+@\S+\.\S+/.test(lead.email)) {
      e.email = "Valid email required";
    }
    if (!lead.phone.trim() || lead.phone.replace(/\D/g, "").length < 10) {
      e.phone = "Valid 10-digit number required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    setStep("result");
  }

  function retake() {
    setStep("intro");
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setLead({ name: "", email: "", phone: "" });
    setErrors({});
  }

  const result = step === "result" ? calculateResult(answers) : null;

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "64px 24px",
        width: "100%",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#60A5FA",
            fontFamily: "monospace",
            marginBottom: "12px",
          }}
        >
          Free AI Audit
        </p>
        <h1
          style={{
            fontFamily: "Instrument Serif, Georgia, serif",
            fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          How AI-Ready Is Your Business?
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
          }}
        >
          20 questions · 4 minutes · Personalised PDF report sent to your inbox
        </p>
      </div>

      <ProgBar
        progress={progress}
        step={step}
        currentQ={currentQ}
        total={total}
      />

      <AnimatePresence mode="wait">
        {/* ── INTRO ── */}
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            <DiagCard>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🧠</div>
                <h2
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.4rem",
                    color: "white",
                    marginBottom: "12px",
                  }}
                >
                  Your Free AI Readiness Report
                </h2>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  Answer 20 quick questions across 7 key areas of your business.
                  You&apos;ll receive a personalised AI Maturity Score and a
                  detailed PDF report with specific recommendations for your
                  profession.
                </p>
              </div>

              {/* Category chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontSize: "11px",
                      padding: "6px 12px",
                      borderRadius: "100px",
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: "#60A5FA",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* What you get */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                {[
                  "AI Maturity Score (Low / Medium / High)",
                  "Category-wise breakdown across 7 areas",
                  "Personalised PDF report sent to your email",
                  "Free 30-min consultation booking",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "10px",
                      padding: "10px 14px",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: "#10B981", flexShrink: 0 }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={startTest}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  background: "#3B82F6",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Start Free Diagnostic →
              </button>
            </DiagCard>
          </motion.div>
        )}

        {/* ── QUESTIONS ── */}
        {step === "questions" && (
          <motion.div
            key={`q-${currentQ}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
          >
            <DiagCard>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "10.5px",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(59,130,246,0.12)",
                    color: "#60A5FA",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {DIAGNOSTIC_QUESTIONS[currentQ].category}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "monospace",
                  }}
                >
                  {currentQ + 1} / {total}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "1.2rem",
                  color: "white",
                  lineHeight: 1.4,
                  margin: "12px 0 24px",
                }}
              >
                {DIAGNOSTIC_QUESTIONS[currentQ].question}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                {DIAGNOSTIC_QUESTIONS[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      background:
                        selected === i
                          ? "rgba(59,130,246,0.15)"
                          : "rgba(255,255,255,0.03)",
                      border: `1.5px solid ${
                        selected === i ? "#3B82F6" : "rgba(255,255,255,0.08)"
                      }`,
                      color: selected === i ? "white" : "rgba(255,255,255,0.6)",
                      fontSize: "13.5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontFamily: "inherit",
                    }}
                  >
                    {selected === i && (
                      <CheckCircle2
                        size={15}
                        style={{ color: "#60A5FA", flexShrink: 0 }}
                      />
                    )}
                    {opt}
                  </button>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <button
                  onClick={handleBack}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 20px",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 28px",
                    background:
                      selected !== null ? "#3B82F6" : "rgba(255,255,255,0.06)",
                    border: "none",
                    borderRadius: "10px",
                    color:
                      selected !== null ? "white" : "rgba(255,255,255,0.25)",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    cursor: selected !== null ? "pointer" : "not-allowed",
                    fontFamily: "inherit",
                  }}
                >
                  {currentQ === total - 1 ? "Almost Done" : "Next"}
                  <ArrowRight size={14} />
                </button>
              </div>
            </DiagCard>
          </motion.div>
        )}

        {/* ── LEAD CAPTURE ── */}
        {step === "lead" && (
          <motion.div
            key="lead"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
          >
            <DiagCard>
              <p
                style={{
                  fontSize: "10.5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#60A5FA",
                  fontFamily: "monospace",
                  marginBottom: "8px",
                }}
              >
                Final Step
              </p>
              <h2
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: "1.3rem",
                  color: "white",
                  lineHeight: 1.35,
                  marginBottom: "8px",
                }}
              >
                Where should we send your AI Score &amp; Report?
              </h2>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                }}
              >
                Your personalised PDF report will be emailed instantly. Your
                data stays private — no spam, ever.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {[
                  {
                    id: "name",
                    label: "Full Name *",
                    type: "text",
                    field: "name" as const,
                    placeholder: "Eg: Rajiv Sharma",
                  },
                  {
                    id: "email",
                    label: "Email Address *",
                    type: "email",
                    field: "email" as const,
                    placeholder: "rajiv@example.com",
                  },
                  {
                    id: "phone",
                    label: "Mobile Number *",
                    type: "tel",
                    field: "phone" as const,
                    placeholder: "+91 98765 43210",
                  },
                ].map(({ id, label, type, field, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      style={{
                        display: "block",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.45)",
                        marginBottom: "6px",
                      }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={lead[field]}
                      onChange={(e) =>
                        setLead({ ...lead, [field]: e.target.value })
                      }
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.05)",
                        border: `1.5px solid ${
                          errors[field] ? "#EF4444" : "rgba(255,255,255,0.1)"
                        }`,
                        borderRadius: "10px",
                        padding: "12px 14px",
                        color: "white",
                        fontSize: "14px",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    {errors[field] && (
                      <p
                        style={{
                          fontSize: "11.5px",
                          color: "#EF4444",
                          marginTop: "5px",
                        }}
                      >
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <button
                  onClick={handleBack}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 20px",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  onClick={handleSubmit}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "12px 28px",
                    background: "#3B82F6",
                    border: "none",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  See My AI Score 🎯
                </button>
              </div>
            </DiagCard>
          </motion.div>
        )}

        {/* ── RESULT ── */}
        {step === "result" && result !== null && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          >
            <DiagCard>
              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>🎉</div>
                <p
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#60A5FA",
                    fontFamily: "monospace",
                    marginBottom: "16px",
                  }}
                >
                  Your AI Maturity Score
                </p>

                {/* Score ring */}
                <div
                  style={{
                    position: "relative",
                    width: "130px",
                    height: "130px",
                    margin: "0 auto 16px",
                  }}
                >
                  <svg
                    viewBox="0 0 130 130"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "rotate(-90deg)",
                    }}
                  >
                    <circle
                      cx="65"
                      cy="65"
                      r="55"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="11"
                    />
                    <circle
                      cx="65"
                      cy="65"
                      r="55"
                      fill="none"
                      stroke={result.color}
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeDasharray={`${
                        2 * Math.PI * 55 * (result.percentage / 100)
                      } ${2 * Math.PI * 55}`}
                    />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Instrument Serif, Georgia, serif",
                        fontSize: "2.2rem",
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {result.percentage}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "rgba(255,255,255,0.4)",
                        marginTop: "2px",
                      }}
                    >
                      / 100
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: "1.5rem",
                    color: result.color,
                    marginBottom: "10px",
                  }}
                >
                  {result.label} — {result.headline}
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                    maxWidth: "420px",
                    margin: "0 auto",
                  }}
                >
                  {result.message}
                </p>
              </div>

              {/* Category scores */}
              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "monospace",
                    marginBottom: "14px",
                  }}
                >
                  Breakdown by Category
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {result.categoryScores.map((cat) => {
                    const pct = Math.round((cat.score / cat.max) * 100);
                    return (
                      <div key={cat.category}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12px",
                              color: "rgba(255,255,255,0.55)",
                            }}
                          >
                            {cat.category}
                          </span>
                          <span
                            style={{
                              fontSize: "11px",
                              color: "rgba(255,255,255,0.35)",
                              fontFamily: "monospace",
                            }}
                          >
                            {pct}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: "4px",
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: "100px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${pct}%`,
                              height: "100%",
                              background:
                                pct < 35
                                  ? "#F59E0B"
                                  : pct < 65
                                  ? "#3B82F6"
                                  : "#10B981",
                              borderRadius: "100px",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "monospace",
                    marginBottom: "10px",
                  }}
                >
                  Your Top Recommendations
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {result.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "10px",
                        padding: "10px 14px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          fontFamily: "monospace",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(59,130,246,0.2)",
                          color: "#60A5FA",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PDF sent notice */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "18px" }}>📧</span>
                <span
                  style={{
                    fontSize: "12.5px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.6,
                  }}
                >
                  Your detailed PDF report has been sent to{" "}
                  <strong style={{ color: "white" }}>{lead.email}</strong>
                </span>
              </div>

              {/* CTAs */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#3B82F6",
                    color: "white",
                    fontSize: "14.5px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  <Calendar size={16} />
                  Book Your Free Consultation Call
                </a>
                <button
                  onClick={retake}
                  style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "12px",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  Retake the Test
                </button>
              </div>
            </DiagCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
