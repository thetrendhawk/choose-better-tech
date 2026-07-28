import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    __SITE_URL__: JSON.stringify("https://choosebettertech.com")
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"]
  }
});
