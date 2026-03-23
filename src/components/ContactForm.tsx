"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  message: string;
}

const PROFESSIONS = [
  "Chartered Accountant",
  "Lawyer / Legal Firm",
  "Architect",
  "Real Estate Agent / Developer",
  "Doctor / Clinic",
  "Insurance Agent",
  "Coaching Institute",
  "Driving School",
  "Other SME",
  "Other",
];

const baseInput: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1.5px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "12px 14px",
  color: "white",
  fontSize: "14px",
  outline: "none",
  fontFamily: "inherit",
};

const baseLabel: React.CSSProperties = {
  display: "block",
  fontSize: "12px",
  color: "rgba(255,255,255,0.45)",
  marginBottom: "6px",
};

const errorText: React.CSSProperties = {
  fontSize: "11.5px",
  color: "#EF4444",
  marginTop: "5px",
};

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label style={baseLabel}>{label}</label>
      {children}
      {error ? <p style={errorText}>{error}</p> : null}
    </div>
  );
}

interface SuccessProps {
  name: string;
  email: string;
}

function SuccessState({ name, email }: SuccessProps) {
  return (
    <div
      style={{
        background: "#0F1419",
        border: "1px solid rgba(16,185,129,0.25)",
        borderRadius: "18px",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <CheckCircle2
        size={48}
        style={{ color: "#10B981", margin: "0 auto 16px" }}
      />
      <h3
        style={{
          fontFamily: "Instrument Serif, Georgia, serif",
          fontSize: "1.4rem",
          color: "white",
          marginBottom: "10px",
        }}
      >
        Message Received!
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          marginBottom: "24px",
        }}
      >
        Thank you, {name.split(" ")[0]}. We will get back to you at{" "}
        <strong style={{ color: "white" }}>{email}</strong> within 4 business
        hours.
      </p>

      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 24px",
          borderRadius: "10px",
          background: "#3B82F6",
          color: "white",
          fontSize: "13.5px",
          textDecoration: "none",
        }}
      >
        Book a Call While You Wait →
      </a>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    profession: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) {
      e.name = "Name is required";
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Valid email required";
    }
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      e.phone = "Valid 10-digit number required";
    }
    if (!form.profession) {
      e.profession = "Please select your profession";
    }
    if (!form.message.trim()) {
      e.message = "Please tell us how we can help";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return <SuccessState name={form.name} email={form.email} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#0F1419",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "18px",
        padding: "28px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Field label="Full Name *" error={errors.name}>
          <input
            type="text"
            placeholder="Rajiv Sharma"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            style={{
              ...baseInput,
              borderColor: errors.name ? "#EF4444" : "rgba(255,255,255,0.1)",
            }}
          />
        </Field>

        <Field label="Email Address *" error={errors.email}>
          <input
            type="email"
            placeholder="rajiv@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            style={{
              ...baseInput,
              borderColor: errors.email ? "#EF4444" : "rgba(255,255,255,0.1)",
            }}
          />
        </Field>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <Field label="Mobile Number *" error={errors.phone}>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            style={{
              ...baseInput,
              borderColor: errors.phone ? "#EF4444" : "rgba(255,255,255,0.1)",
            }}
          />
        </Field>

        <Field label="Your Profession *" error={errors.profession}>
          <select
            value={form.profession}
            onChange={(e) => update("profession", e.target.value)}
            style={{
              ...baseInput,
              borderColor: errors.profession
                ? "#EF4444"
                : "rgba(255,255,255,0.1)",
              appearance: "none",
              cursor: "pointer",
            }}
          >
            <option value="" style={{ background: "#0F1419" }}>
              Select profession...
            </option>
            {PROFESSIONS.map((p) => (
              <option key={p} value={p} style={{ background: "#0F1419" }}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <Field label="How can we help? *" error={errors.message}>
          <textarea
            placeholder="Tell us about your business and what you are hoping AI can help with..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            style={{
              ...baseInput,
              borderColor: errors.message ? "#EF4444" : "rgba(255,255,255,0.1)",
              resize: "vertical",
              minHeight: "110px",
            }}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          background: loading ? "rgba(59,130,246,0.5)" : "#3B82F6",
          color: "white",
          fontSize: "15px",
          fontWeight: 500,
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          fontFamily: "inherit",
          transition: "background 0.15s",
        }}
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "14px",
          fontSize: "12px",
          color: "rgba(255,255,255,0.25)",
        }}
      >
        We respond within 4 business hours. Your data stays private.
      </p>
    </form>
  );
}
