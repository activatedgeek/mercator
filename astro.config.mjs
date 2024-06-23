import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
    ssr: {
      external: ["node:buffer"],
    },
  },
  markdown: {
    gfm: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "vitesse-light",
    },
  },
  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  site: `https://${process.env.ASTRO_SITE || "mercator.local"}`,
});
