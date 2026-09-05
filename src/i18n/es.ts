import type { Translations } from '../types/translations';

export const es: Translations = {
  meta: {
    title: 'Johnneyre Zambrano — Full Stack Developer',
    description: 'Desarrollador Full Stack. +3 años creando aplicaciones web escalables con Vue.js, Angular y TypeScript para seguros y e-commerce.',
  },
  owner: {
    name: 'Johnneyre Zambrano',
    role: 'Full Stack Developer',
  },
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Skills',
    menu: 'Menú',
    primary: 'Principal',
    footer: 'Pie de página',
    skip: 'Saltar a experiencia',
    theme: 'Tema oscuro',
    language: 'Idioma',
  },
  a11y: {
    new_tab: '(abre en una pestaña nueva)',
  },
  social: {
    email: 'johnneyrez@gmail.com',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Full Stack Developer',
    bio: '+3 años desarrollando aplicaciones web escalables para sectores críticos como seguros y e-commerce. Me especializo en rendimiento, arquitecturas modulares y código mantenible.',
    scroll_label: 'Experiencia',
  },
  experience: {
    label: 'Trayectoria',
    title: 'Experiencia Profesional',
  },
  projects: {
    label: 'Trabajo destacado',
    title: 'Proyectos',
    demo: 'Ver demo',
    code: 'Código',
    stack: 'Tecnologías',
    screenshot_alt: 'Captura de la interfaz de {title}',
  },
  skills: {
    title: 'Skills',
    subtitle: 'Las herramientas con las que construyo mis proyectos.',
  },
  lang_hint: {
    text: 'Esta página también está disponible en español.',
    cta: 'Cambiar a español',
    close: 'Cerrar',
  },
  footer: {
    links: {
      home: 'Inicio',
      experience: 'Experiencia',
      projects: 'Proyectos',
    },
  },
  timeline_items: {
    linktic: {
      period: 'Agosto 2023 – Actualidad',
      role: 'Full Stack Developer',
      bullets: [
        'Lideré la refactorización del frontend del sistema de gestión de seguros Seguros Andina migrando hacia una Screaming Architecture, mejorando drásticamente la mantenibilidad y escalabilidad del código base. Implementé enrutamiento dinámico condicional para despliegues diferenciados por entorno (DEV, QA, UAT, PROD).',
        'Desarrollé la lógica de backend con Java Spring Boot para gestionar ventanas de mantenimiento configurables desde la UI, con persistencia en base de datos y notificaciones en tiempo real vía WebSockets y CronJobs. Integré la API BroadcastChannel para la coherencia de estado entre múltiples pestañas del navegador.',
        'Reduje el tiempo de carga inicial en un 40% mediante análisis de bundle, pre-fetch de fuentes críticas y optimización de assets estáticos.',
        'Construí componentes modulares y reutilizables con Vue.js, TypeScript y Quasar para el SGDEA (Sistema de Gestión Documental Electrónico de Archivo), aplicando validaciones complejas y lógica de negocio del sector asegurador.',
        'Diseñé el modelo de datos y operaciones CRUD para el E-commerce Minegos usando Drizzle ORM, e implementé el storefront público con carrito de compras y filtros de búsqueda avanzados.',
        'Trabajé en entorno ágil bajo Scrum usando Azure DevOps para gestión de sprints, historias de usuario y resolución de bugs.',
      ],
    },
    university: {
      period: 'Septiembre 2020 – Diciembre 2024',
      role: 'Ingeniería en Informática',
      bullets: [
        'Desarrollé colaborativamente un sistema web responsive para el control de horas de empleados, resultando en un incremento del 30% en el desempeño de los trabajadores al automatizar tareas repetitivas.',
        'El sistema habilitó la supervisión de actividades en tiempo real por parte de la gerencia.',
      ],
    },
  },
  project_items: {
    'image-optimize-webgpu': {
      title: 'WebGPU Image Optimizer',
      description: 'Compresor de imágenes que corre 100% en el navegador, sin servidores ni subidas.',
      highlights: [
        'Ajuste de brillo y contraste en la GPU con un compute shader WebGPU (WGSL).',
        'Re-codificación a WebP o JPEG dentro de un Web Worker.',
        'Privacidad total y procesamiento paralelo en GPU.',
      ],
    },
    trandio: {
      title: 'Trandio',
      description: 'Diccionario interactivo de patrones chartistas con gráficos de velas y un playground para detectarlos en tus propios datos.',
      highlights: [
        '24 patrones de análisis técnico dibujados sobre velas generadas a medida, con líneas y marcadores de compra/venta.',
        'Playground que carga velas OHLC desde CSV y superpone los patrones detectados.',
        'Gráficos animados con lightweight-charts, tema claro/oscuro y soporte de prefers-reduced-motion.',
      ],
    },
    'insurance-system': {
      title: 'Sistema de Gestión de Seguros',
      description: 'Plataforma de gestión de seguros con frontend refactorizado hacia Screaming Architecture.',
      highlights: [
        'Enrutamiento dinámico por entorno (DEV/QA/UAT/PROD).',
        'Ventanas de mantenimiento configurables vía UI con notificaciones en tiempo real por WebSockets.',
        'Componentes modulares y reutilizables con Vue.js, TypeScript y Quasar.',
        'Carga inicial reducida en un 40%.',
      ],
    },
    minegos: {
      title: 'E-commerce Minegos',
      description: 'Plataforma de comercio electrónico con panel administrativo integral y storefront público.',
      highlights: [
        'Modelo de datos y operaciones CRUD con Drizzle ORM.',
        'Carrito de compras y filtros de búsqueda avanzados.',
        'Gestión autónoma de productos, categorías y enlaces estilo Linktree.',
      ],
    },
  },
  skill_categories: {
    'languages-frameworks': 'Lenguajes & Frameworks',
    'styles-ui': 'Estilos & UI',
    'tools-methods': 'Herramientas & Métodos',
  },
  skill_labels: {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    angular: 'Angular',
    webgpu: 'WebGPU',
    vuejs: 'Vue.js',
    svelte: 'Svelte',
    tailwindcss: 'TailwindCSS',
    quasar: 'Quasar',
    sass: 'Sass',
    figma: 'Figma',
    git: 'Git',
    github: 'GitHub',
    'azure-devops': 'Azure DevOps',
    supabase: 'Supabase',
    pinia: 'Pinia',
    astro: 'Astro',
    'rest-api': 'REST API',
    'spring-boot': 'Spring Boot',
  },
};

export type { Translations } from '../types/translations';
