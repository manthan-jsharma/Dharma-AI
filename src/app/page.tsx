import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FounderSection } from "@/components/home/FounderSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTABanner } from "@/components/shared/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artha AI — Helping Professionals & SMEs Enter the AI Age",
  description:
    "Purpose-built AI automation for CAs, Lawyers, Architects, Real Estate agents, and Clinics in India. Save 15+ hours/week and 3× your leads.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FounderSection />
      <FeaturesGrid />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
