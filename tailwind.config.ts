import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        arcade: {
          pink: "#4F46E5",     // primary brand: sleek indigo (bukan hot pink menyilaukan)
          purple: "#6366F1",   // violet accent
          yellow: "#F59E0B",   // warm amber accent
          blue: "#0EA5E9",     // crisp sky blue
          mint: "#10B981",     // emerald mint
        },
        navy: "#0F172A",       // deep slate navy
        muted: "#64748B",      // slate muted
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "arcade-pink": "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
        "arcade-purple": "0 10px 25px -5px rgba(99, 102, 241, 0.2)",
        "arcade-yellow": "0 10px 25px -5px rgba(245, 158, 11, 0.2)",
        "arcade-blue": "0 10px 25px -5px rgba(14, 165, 233, 0.2)",
        "arcade-mint": "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
        "arcade-card": "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        "arcade-card-hover": "0 16px 32px -8px rgba(79, 70, 229, 0.15)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-3deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
