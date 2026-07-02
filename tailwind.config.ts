import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#b7d8ff",
          500: "#3975f6",
          600: "#2857d9",
          700: "#233fb0",
          800: "#223b8f",
          900: "#1e316f"
        },
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e"
        },
        editorial: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"] },
      boxShadow: {
        soft: "0 18px 40px -32px rgba(15, 23, 42, 0.35)",
        lift: "0 24px 60px -36px rgba(30, 49, 111, 0.42)"
      }
    }
  },
  plugins: []
} satisfies Config;
