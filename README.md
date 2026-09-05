# Johnneyre Zambrano — Portfolio

Portfolio personal de **Johnneyre Zambrano** (Full Stack Developer): un sitio bilingüe (es/en) construido con Astro, 100 % estático y desplegado en Cloudflare Workers Static Assets.

**Sitio en vivo:** <https://johnneyrez.dev>

![Astro](https://img.shields.io/badge/Astro-7.0.2-BC52EE?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.1-38BDF8?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers_Static_Assets-F38020?logo=cloudflare&logoColor=white)

---

## Características

- **Bilingüe es/en** con i18n nativo de Astro: español servido en la raíz (`/`) e inglés bajo `/en/` (`prefixDefaultLocale: false`). En la primera visita, si `navigator.language` no coincide con la página, un aviso no bloqueante (`LangHint.astro`) ofrece la otra versión; no hay redirección automática, que Google desaconseja y que hacía ver `/` como una redirección a `/en/`.
- **Tema claro/oscuro** mediante la clase `.light` en `<html>`: sin preferencia guardada sigue `prefers-color-scheme`, la elección manual se persiste en `localStorage`, y un script anti-FOUC inline la aplica antes del primer _paint_ y tras cada _view transition_.
- **Estilo tipográfico suizo**: retícula estricta de 12 columnas (`.grid-12`, máx. 1440 px), secciones numeradas (01/02/03) sobre reglas de borde a borde, experiencia como tabla editorial, proyectos alternando imagen y texto, y skills en tres columnas regladas.
- **Sistema de diseño en OKLCH** con _design tokens_ de Tailwind v4 (`@theme`): grises neutros fríos, un único acento verde abeto (`--color-accent`), tokens de superficie/texto y dos fuentes variables (Archivo para display, Hanken Grotesk para cuerpo).
- **Accesibilidad WCAG AA** documentada: tokens de texto y acento ajustados para cumplir el contraste mínimo en ambos modos, _focus ring_ de teclado (`:focus-visible`), enlace "saltar a experiencia", estado `aria-current` en el idioma activo y en la sección visible, y menú móvil con botón `aria-expanded` que se cierra al elegir una sección, con Escape o al tocar fuera.
- **Animaciones respetuosas con `prefers-reduced-motion`**: _scroll-reveal_ con `IntersectionObserver`, entrada breve del hero, indicador de scroll con _bounce_ (pausado fuera de pantalla) y micro-interacciones de hover (subrayados, desplazamiento de 4 px en proyectos), todas anuladas cuando el usuario reduce el movimiento. La columna de metadatos de cada experiencia acompaña el scroll con `position: sticky`, sin JavaScript.
- **View transitions** entre locales con `ClientRouter`; en navegación cliente solo se anima el _crossfade_ para evitar _reveals_ duplicados.
- **Optimizaciones de rendimiento**: `content-visibility: auto` (`.cv-auto`) para saltar el render de secciones fuera de pantalla, pausa de animaciones _off-screen_ vía `IntersectionObserver` e imágenes optimizadas (avif/webp) con sharp en _build_.
- **SEO completo**: _canonical_ por locale, _hreflang_ recíprocos (`es`, `en`, `x-default`), Open Graph + Twitter Card, JSON-LD (`Person` y `WebSite`), _sitemap_ i18n y `robots.txt` permisivo.
- **Fuentes y logos self-hosted**: Archivo (variable, instanciada con fontTools a `wdth` 86–100 % y `wght` 500–800, ~53 KB) y Hanken Grotesk (variable, `wght` 400–700, ~23 KB) en WOFF2 servidas con la Astro Fonts API. Los 16 logos de tecnologías (origen svgl + devicon) se emiten una sola vez como sprite `<symbol>` (`LogoSprite.astro`) y se referencian con `<use>` desde `TechLogo.astro`.
- **Entrega de imágenes**: retrato del hero con `priority` (fetchpriority high), `srcset` de 365/550/730 px y recorte 4:5; capturas de proyectos con `srcset` y carga diferida. CSS inlineado (`build.inlineStylesheets: 'always'`) para eliminar la única petición bloqueante del render.
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
│   ├── _headers              # Cache immutable para /_astro/*, cache corta para favicon/OG, cabeceras de seguridad
│   ├── robots.txt            # Allow: / + enlace a sitemap-index.xml
│   ├── favicon.ico
│   └── og-image.png          # Imagen Open Graph 1200×630
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Archivo-VariableFont_wdth-wght.woff2   # Display (variable: anchura + peso)
│   │   │   └── HankenGrotesk-VariableFont_wght.woff2  # Cuerpo (variable: peso)
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
│   │   ├── SectionHead.astro # Cabecera numerada de sección (01/02/03)
│   │   ├── LangHint.astro    # Aviso de idioma no bloqueante (primera visita)
│   │   ├── LogoSprite.astro  # Sprite <symbol> con los 16 logos
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
├── astro.config.mjs          # i18n, sitemap (hreflang es/en + lastmod), CSS inline, fuentes, plugin Tailwind, site
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
