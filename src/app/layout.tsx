import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artha AI — Helping Professionals Enter the AI Age",
  description:
    "AI automation solutions for CAs, Lawyers, Architects, Real Estate, and SMEs in India. Save 15+ hours weekly and 3× your leads with purpose-built AI tools.",
  keywords:
    "AI automation India, AI for CAs, AI for lawyers, SME automation, lead generation AI, Artha AI, DharmaAI",
  openGraph: {
    title: "Artha AI — Helping Professionals Enter the AI Age",
    description:
      "Purpose-built AI solutions for Indian professionals. Automate workflows, generate leads, and grow revenue.",
    type: "website",
    locale: "en_IN",
    siteName: "Artha AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
