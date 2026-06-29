# Johnneyre Zambrano — Portfolio

Portfolio personal de **Johnneyre Zambrano** (Full Stack Developer): un sitio bilingüe (es/en) construido con Astro, 100 % estático y desplegado en Cloudflare Workers Static Assets.

**Sitio en vivo:** <https://johnneyrez.dev>

![Astro](https://img.shields.io/badge/Astro-7.0.2-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.1-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers_Static_Assets-F38020?logo=cloudflare&logoColor=white)

---

## Características

- **Bilingüe es/en** con i18n nativo de Astro: español servido en la raíz (`/`) e inglés bajo `/en/` (`prefixDefaultLocale: false`). Autodetección de idioma en la primera visita a partir de `navigator.language`.
- **Tema claro/oscuro** mediante la clase `.light` en `<html>`, persistido en `localStorage` y con script anti-FOUC inline que se aplica antes del primer _paint_ y tras cada _view transition_.
- **Sistema de diseño en OKLCH** con _design tokens_ de Tailwind v4 (`@theme`): paleta de marca verde-naturaleza (hue 155), tokens de superficie/texto y la fuente variable Sora.
- **Accesibilidad WCAG AA** documentada: tokens de texto y marca ajustados para cumplir el contraste mínimo en ambos modos, _focus ring_ de teclado (`:focus-visible`) y manejo especializado del foco en el _dropdown_ de idioma y el menú móvil.
- **Animaciones respetuosas con `prefers-reduced-motion`**: _scroll-reveal_ con `IntersectionObserver`, _blob-drift_, entrada escalonada del hero, _gradient-text_ y _bounce_, todas anuladas cuando el usuario reduce el movimiento.
- **View transitions** entre locales con `ClientRouter`; en navegación cliente solo se anima el _crossfade_ para evitar _reveals_ duplicados.
- **Optimizaciones de rendimiento**: `content-visibility: auto` (`.cv-auto`) para saltar el render de secciones fuera de pantalla, pausa de animaciones _off-screen_ vía `IntersectionObserver` e imágenes optimizadas (avif/webp) con sharp en _build_.
- **SEO completo**: _canonical_ por locale, _hreflang_ recíprocos (`es`, `en`, `x-default`), Open Graph + Twitter Card, JSON-LD (`Person` y `WebSite`), _sitemap_ i18n y `robots.txt` permisivo.
- **Fuentes y logos self-hosted**: fuente variable Sora (WOFF2, ~48 KB) servida con la Astro Fonts API e iconos de tecnologías como 16 SVG locales (origen svgl + devicon).
- **100 % estático en Cloudflare**: HTML prerenderizado a `./dist` y servido como Workers Static Assets, sin Worker SSR.

---

## Stack tecnológico

| Herramienta                                                                        | Versión                  | Rol                                                                 |
| ---------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------- |
| [Astro](https://astro.build)                                                       | `^7.0.2`                 | Framework de sitio estático (sin SSR)                               |
| [Tailwind CSS](https://tailwindcss.com)                                            | `^4.3.1`                 | Estilos, integrado como plugin de Vite (`@tailwindcss/vite ^4.3.1`) |
| TypeScript                                                                         | `astro/tsconfigs/strict` | Tipado estricto                                                     |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | `^3.7.3`                 | Sitemap i18n                                                        |
| [sharp](https://sharp.pixelplumbing.com)                                           | `^0.34.5`                | Optimización de imágenes (avif/webp) en build                       |
| [wrangler](https://developers.cloudflare.com/workers/wrangler/)                    | `^4.104.0` (dev)         | Build/preview/deploy en Cloudflare                                  |
| pnpm                                                                               | lockfile `9.0`           | Gestor de paquetes                                                  |

---

## Estructura del proyecto

```text
.
├── public/
│   ├── _headers              # Cache-Control immutable (1 año) para /_astro/*
│   ├── robots.txt            # Allow: / + enlace a sitemap-index.xml
│   ├── favicon.ico
│   └── og-image.png          # Imagen Open Graph 1200×630
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Sora-VariableFont_wght.woff2   # Fuente variable self-hosted
│   │   ├── hero/
│   │   │   └── perfil_photo.jpg
│   │   └── logos/            # 16 SVG de tecnologías (angular, vue, astro, …)
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LangSwitcher.astro
│   │   ├── DecorativeBlobs.astro
│   │   ├── Icon.astro        # SVG de UI inline
│   │   ├── TechLogo.astro    # Logos de tecnologías
│   │   └── SEO.astro         # Meta, hreflang, OG, Twitter, JSON-LD
│   ├── data/
│   │   └── portfolio.ts      # Datos estructurales (ids, URLs, tags, accent…)
│   ├── i18n/
│   │   ├── es.ts             # Texto traducible (español, por defecto)
│   │   ├── en.ts             # Texto traducible (inglés)
│   │   └── utils.ts          # useTranslations, getLocalePath, sectionId
│   ├── layouts/
│   │   └── Layout.astro      # Documento, SEO, fuente, observers, anti-FOUC
│   ├── pages/
│   │   ├── index.astro       # locale 'es' → /
│   │   └── en/
│   │       └── index.astro   # locale 'en' → /en/
│   ├── styles/
│   │   └── global.css        # Tailwind v4 + @theme (tokens OKLCH) + animaciones
│   └── types/
│       ├── data.ts
│       ├── icons.ts
│       └── translations.ts
├── astro.config.mjs          # i18n, sitemap, fuente Sora, plugin Tailwind, site
├── wrangler.jsonc            # Workers Static Assets (assets → ./dist)
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

---

## Cómo empezar

### Requisitos

- **Node.js**
- **pnpm** (el repositorio usa un lockfile `9.0`)

### Instalación y desarrollo local

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo de Astro queda disponible en <http://localhost:4321>.

---

## Scripts

Todos los scripts definidos en `package.json`:

| Script  | Comando       | Descripción                          |
| ------- | ------------- | ------------------------------------ |
| `dev`   | `astro dev`   | Servidor de desarrollo con HMR       |
| `build` | `astro build` | Compila el sitio estático a `./dist` |
| `astro` | `astro`       | Acceso directo a la CLI de Astro     |
