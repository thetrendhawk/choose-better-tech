import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { 50: "#eff6ff", 100: "#dbeafe", 600: "#2563eb", 700: "#1d4ed8", 900: "#1e3a8a" } },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"] },
      boxShadow: { soft: "0 18px 40px -32px rgba(15, 23, 42, 0.35)" }
    }
  },
  plugins: []
} satisfies Config;
