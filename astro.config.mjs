// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "static", // 1. Explicitly enforce SSG mode
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    // 2. Vite overrides removed: They are unnecessary for pure SSG
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Atkinson",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/atkinson-regular.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/atkinson-bold.woff"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Abeezee",
      cssVariable: "--font-abeezee",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/ABeeZee-Regular.otf"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  // 3. Image block block removed: Astro will automatically use Sharp 
  // to perfectly optimize images during 'astro build'.

  // 4. Cloudflare adapter REMOVED: It is not used for SSG.
});
