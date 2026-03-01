import type {
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
  NavLink,
} from '../types/portfolio';

export const OWNER = {
  name: 'Johnneyre Zambrano',
  role: 'Front-End Developer',
  tagline: 'Código escalable. Rendimiento sin compromiso.',
  bio: '+3 años construyendo aplicaciones web de alto rendimiento. Me especializo en interfaces limpias, arquitecturas modulares y código que escala.',
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'johnneyrez@gmail.com', href: 'mailto:johnneyrez@gmail.com', icon: 'email' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/johnneyre-zambrano-15a571228/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Johnneyre', icon: 'github' },
] as const;

/** Combined timeline: work + education, ordered chronologically (newest first) */
export const TIMELINE_ITEMS: readonly ExperienceItem[] = [
  {
    type: 'work',
    role: 'Front-End Developer',
    company: 'LinkTIC',
    period: 'Agosto 2023 – Actualidad',
    location: 'Bogotá, Colombia',
    bullets: [
      'Construí interfaces y componentes interactivos para un sistema de gestión de seguros usando Vue.js y Pinia. Desarrollé visualizaciones de datos críticos consumiendo el actuator de Spring Boot, habilitando monitorización en tiempo real de logs, cronjobs y métricas de microservicios.',
      'Lideré la refactorización del frontend implementando Screaming Architecture para la división modular, mejorando significativamente la escalabilidad y mantenibilidad del producto.',
      'Implementé funcionalidades para el E-commerce Minegos en los módulos de productos, categorías, configuración y reportes, mejorando la experiencia de gestión para vendedores y agilizando el proceso de compra.',
      'Desarrollé componentes reutilizables con Vue.js y TypeScript para un Sistema de Gestión Documental (SGDEA), colaborando con analistas de requerimientos y QA.',
      'Trabajé en entorno ágil bajo Scrum usando Azure DevOps para gestión de sprints, historias de usuario y resolución de bugs.',
    ],
  },
  {
    type: 'education',
    role: 'Ingeniería en Informática',
    company: 'Universidad Politécnica Territorial Agro-Industrial del Táchira',
    period: 'Septiembre 2020 – Diciembre 2024',
    location: 'Táchira, Venezuela',
    bullets: [
      'Desarrollé colaborativamente un sistema web responsive para el control de horas de empleados, resultando en un incremento del 30% en el desempeño de los trabajadores al automatizar tareas repetitivas.',
      'El sistema habilitó la supervisión de actividades en tiempo real por parte de la gerencia.',
    ],
  },
] as const;

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  {
    title: 'SGDEA',
    description:
      'Sistema de Gestión Documental Electrónico de Archivo. Componentes reutilizables en Vue.js y TypeScript, siguiendo reglas de negocio definidas con analistas y QA.',
    tags: [
      { label: 'Vue.js', devicon: 'devicon-vuejs-plain colored' },
      { label: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
      { label: 'Pinia', devicon: 'devicon-pinia-plain colored' },
      { label: 'REST API', devicon: 'devicon-fastapi-plain colored' },
    ],
  },
  {
    title: 'Sistema de Gestión de Seguros',
    description:
      'Dashboard con visualización de datos en tiempo real consumiendo el actuator de Spring Boot: logs, cronjobs y métricas de microservicios activos.',
    tags: [
      { label: 'Vue.js', devicon: 'devicon-vuejs-plain colored' },
      { label: 'Pinia', devicon: 'devicon-pinia-plain colored' },
      { label: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
      { label: 'Spring Boot', devicon: 'devicon-spring-plain colored' },
    ],
  },
  {
    title: 'E-commerce Minegos',
    description:
      'Mejoras en módulos de productos, categorías, configuración y reportes. Optimizando la experiencia para vendedores y compradores.',
    tags: [
      { label: 'Vue.js', devicon: 'devicon-vuejs-plain colored' },
      { label: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
      { label: 'TailwindCSS', devicon: 'devicon-tailwindcss-plain colored' },
    ],
  },
  {
    title: 'Control de Horas',
    description:
      'Sistema web responsive para control de horas de empleados universitarios. Automatización de tareas repetitivas y supervisión en tiempo real para la gerencia.',
    tags: [
      { label: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
      { label: 'HTML5', devicon: 'devicon-html5-plain colored' },
      { label: 'CSS3', devicon: 'devicon-css3-plain colored' },
    ],
  },
] as const;

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    label: 'Lenguajes & Frameworks',
    skills: [
      { label: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
      { label: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
      { label: 'Vue.js', devicon: 'devicon-vuejs-plain colored' },
      { label: 'SvelteKit', devicon: 'devicon-svelte-plain colored' },
      { label: 'HTML5', devicon: 'devicon-html5-plain colored' },
      { label: 'CSS3', devicon: 'devicon-css3-plain colored' },
    ],
  },
  {
    label: 'Estilos & UI',
    skills: [
      { label: 'TailwindCSS', devicon: 'devicon-tailwindcss-plain colored' },
      { label: 'Quasar', devicon: 'devicon-quasar-plain colored' },
      { label: 'Sass', devicon: 'devicon-sass-plain colored' },
      { label: 'Figma', devicon: 'devicon-figma-plain colored' },
    ],
  },
  {
    label: 'Herramientas & Métodos',
    skills: [
      { label: 'Git', devicon: 'devicon-git-plain colored' },
      { label: 'GitHub', devicon: 'devicon-github-plain' },
      { label: 'Azure DevOps', devicon: 'devicon-azuredevops-plain colored' },
      { label: 'Supabase', devicon: 'devicon-supabase-plain colored' },
      { label: 'Pinia', devicon: 'devicon-pinia-plain colored' },
      { label: 'Astro', devicon: 'devicon-astro-plain colored' },
    ],
  },
] as const;
