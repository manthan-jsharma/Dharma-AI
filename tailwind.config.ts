import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Instrument Serif", "Georgia", "serif"],
        body: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      colors: {
        navy: { DEFAULT: "#090C10", mid: "#0D1117", light: "#111620" },
        card: { DEFAULT: "#0F1419", 2: "#141A24" },
        brand: {
          blue: "#3B82F6",
          glow: "#60A5FA",
          cyan: "#06B6D4",
          pale: "#E8F1FF",
        },
        green: "#10B981",
        amber: "#F59E0B",
        danger: "#EF4444",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        blink: "blink 2s infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
