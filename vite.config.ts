import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: { env: { SITE_URL?: string } };

const siteUrl = (process.env.SITE_URL ?? "https://choosebettertech.thrwds.com").replace(/\/$/, "");

export default defineConfig({
  define: {
    __SITE_URL__: JSON.stringify(siteUrl)
  },
  plugins: [react()]
});
