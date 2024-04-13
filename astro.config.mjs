import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
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
  integrations: [react({ experimentalReactChildren: true }), sitemap()],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  site: `https://${process.env.ASTRO_SITE || "mercator.local"}`,
});
