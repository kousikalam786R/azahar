import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      boxShadow: {
        soft: "0 2px 16px rgba(37,99,235,0.08)",
        card: "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 12px 40px rgba(37,99,235,0.12)",
        nav: "0 1px 12px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
};

export default config;
