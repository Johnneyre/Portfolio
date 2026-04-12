import type { Translations } from '../types/translations';

export const es: Translations = {
  meta: {
    title: 'Johnneyre Zambrano — Full Stack Developer',
    description: '+3 años construyendo aplicaciones web escalables. Especialista en Vue.js, TypeScript y arquitecturas modulares.',
  },
  owner: {
    name: 'Johnneyre Zambrano',
    role: 'Full Stack Developer',
  },
  nav: {
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Skills',
    home: 'Inicio',
  },
  social: {
    email: 'johnneyrez@gmail.com',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Full Stack Developer',
    bio: '+3 años desarrollando aplicaciones web escalables para sectores críticos como seguros y e-commerce. Me especializo en rendimiento, arquitecturas modulares y código mantenible.',
    cta_projects: 'Ver proyectos',
    cta_contact: 'Contactar',
    available: 'Disponible para nuevas oportunidades',
    download_cv: 'Descargar CV',
    scroll_label: 'Experiencia',
  },
  experience: {
    label: 'Trayectoria',
    title: 'Experiencia Profesional',
    education_label: 'Formación académica',
    current: 'Actualidad',
  },
  projects: {
    label: 'Trabajo destacado',
    title: 'Proyectos',
  },
  skills: {
    label: 'Conjunto tecnológico',
    title: 'Skills',
    subtitle: 'Las herramientas con las que construyo mis proyectos.',
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
    sgdea: {
      title: 'SGDEA',
      description: 'Sistema de Gestión Documental Electrónico de Archivo desarrollado para el sector asegurador. Construido con Vue.js, TypeScript y Quasar, con componentes modulares y reutilizables que aplican validaciones complejas y lógica de negocio específica. Trabajo colaborativo con analistas de requerimientos y QA bajo metodología Scrum.',
    },
    'insurance-system': {
      title: 'Sistema de Gestión de Seguros',
      description: 'Plataforma de gestión de seguros con frontend refactorizado hacia Screaming Architecture para máxima escalabilidad. Incluye enrutamiento dinámico por entorno (DEV/QA/UAT/PROD), ventanas de mantenimiento configurables vía UI con notificaciones en tiempo real por WebSockets, y optimización de carga inicial reducida en un 40%.',
    },
    minegos: {
      title: 'E-commerce Minegos',
      description: 'Plataforma de comercio electrónico con panel administrativo integral y storefront público. Modelo de datos y operaciones CRUD implementados con Drizzle ORM, carrito de compras, filtros de búsqueda avanzados, y gestión autónoma de productos, categorías y configuración de enlaces estilo Linktree.',
    },
    'hours-control': {
      title: 'Control de Horas',
      description: 'Sistema web responsive para el control de horas de empleados universitarios, desarrollado de forma colaborativa. Automatizó tareas repetitivas logrando un incremento del 30% en el desempeño del personal, y habilitó la supervisión de actividades en tiempo real por parte de la gerencia.',
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
    vuejs: 'Vue.js',
    sveltekit: 'SvelteKit',
    html5: 'HTML5',
    css3: 'CSS3',
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
