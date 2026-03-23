import { DiagnosticForm } from "@/components/DiagnosticForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Diagnostic Test — Artha AI",
  description:
    "Take our free 3-minute AI Maturity Test and get a personalized score showing exactly where AI can save you the most time and money.",
};

export default function DiagnosticPage() {
  return (
    <div
      className="min-h-screen pt-[68px] flex items-center relative overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(27,110,243,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <DiagnosticForm />
    </div>
  );
}
