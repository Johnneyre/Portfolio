import type { Translations } from '../types/translations';

export const es: Translations = {
  meta: {
    title: 'Johnneyre Zambrano — FullStack Developer',
    description: '+3 años construyendo aplicaciones web escalables. Especialista en Vue.js, TypeScript y arquitecturas modulares.',
  },
  owner: {
    name: 'Johnneyre Zambrano',
    role: 'FullStack Developer',
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
    role: 'FullStack Developer',
    bio: '+3 años construyendo aplicaciones web de alto rendimiento. Me especializo en interfaces limpias, arquitecturas modulares y código escalable.',
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
      role: 'FullStack Developer',
      bullets: [
        'Construí interfaces y componentes interactivos para un sistema de gestión de seguros usando Vue.js y Pinia. Desarrollé visualizaciones de datos críticos consumiendo el actuator de Spring Boot, habilitando monitorización en tiempo real de logs, cronjobs y métricas de microservicios.',
        'Lideré la refactorización del frontend implementando Screaming Architecture para la división modular, mejorando significativamente la escalabilidad y mantenibilidad del producto.',
        'Implementé funcionalidades para el E-commerce Minegos en los módulos de productos, categorías, configuración y reportes, mejorando la experiencia de gestión para vendedores y agilizando el proceso de compra.',
        'Desarrollé componentes reutilizables con Vue.js y TypeScript para un Sistema de Gestión Documental (SGDEA), colaborando con analistas de requerimientos y QA.',
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
      description: 'Sistema de Gestión Documental Electrónico de Archivo. Componentes reutilizables en Vue.js y TypeScript, siguiendo reglas de negocio definidas con analistas y QA.',
    },
    'insurance-system': {
      title: 'Sistema de Gestión de Seguros',
      description: 'Dashboard con visualización de datos en tiempo real consumiendo el actuator de Spring Boot: logs, cronjobs y métricas de microservicios activos.',
    },
    minegos: {
      title: 'E-commerce Minegos',
      description: 'Mejoras en módulos de productos, categorías, configuración y reportes. Optimizando la experiencia para vendedores y compradores.',
    },
    'hours-control': {
      title: 'Control de Horas',
      description: 'Sistema web responsive para control de horas de empleados universitarios. Automatización de tareas repetitivas y supervisión en tiempo real para la gerencia.',
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
