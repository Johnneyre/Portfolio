import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://johnneyrez.dev",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  build: {
    inlineStylesheets: "always",
  },

  // Fonts are instanced with fontTools to these exact ranges: keep weight/stretch in sync with the files.
  fonts: [
    {
      name: "Archivo",
      cssVariable: "--font-archivo",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: "500 800",
            style: "normal",
            stretch: "86% 100%",
            src: ["./src/assets/fonts/Archivo-VariableFont_wdth-wght.woff2"],
          },
        ],
      },
      fallbacks: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
    {
      name: "Hanken Grotesk",
      cssVariable: "--font-hanken",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: "400 700",
            style: "normal",
            src: ["./src/assets/fonts/HankenGrotesk-VariableFont_wght.woff2"],
          },
        ],
      },
      fallbacks: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  ],

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        // Same language codes as the <link hreflang> tags in SEO.astro.
        locales: {
          es: "es",
          en: "en",
        },
      },
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
