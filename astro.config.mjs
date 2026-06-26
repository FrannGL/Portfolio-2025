import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import path from "path";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react()],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
