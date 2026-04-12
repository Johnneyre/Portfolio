import type { Translations } from '../types/translations';

export const en: Translations = {
  meta: {
    title: 'Johnneyre Zambrano — Full Stack Developer',
    description: '3+ years building scalable web applications. Specialist in Vue.js, TypeScript and modular architectures.',
  },
  owner: {
    name: 'Johnneyre Zambrano',
    role: 'Full Stack Developer',
  },
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    home: 'Home',
  },
  social: {
    email: 'johnneyrez@gmail.com',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Full Stack Developer',
    bio: '3+ years building scalable web applications for critical sectors like insurance and e-commerce. I focus on performance, modular architectures, and maintainable code.',
    cta_projects: 'View projects',
    cta_contact: 'Contact me',
    available: 'Available for new opportunities',
    download_cv: 'Download CV',
    scroll_label: 'Experience',
  },
  experience: {
    label: 'Career',
    title: 'Professional Experience',
    education_label: 'Academic background',
    current: 'Present',
  },
  projects: {
    label: 'Featured work',
    title: 'Projects',
  },
  skills: {
    label: 'Tech stack',
    title: 'Skills',
    subtitle: 'The tools I use to build my projects.',
  },
  footer: {
    links: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
    },
  },
  timeline_items: {
    linktic: {
      period: 'August 2023 – Present',
      role: 'Full Stack Developer',
      bullets: [
        'Led the frontend refactoring of the Seguros Andina insurance management system by migrating to Screaming Architecture, drastically improving maintainability and scalability. Implemented conditional dynamic routing for differentiated deployments per environment (DEV, QA, UAT, PROD).',
        'Developed backend logic with Java Spring Boot to manage UI-configurable maintenance windows, with database persistence and real-time notifications via WebSockets and CronJobs. Integrated the BroadcastChannel API to maintain state consistency across multiple browser tabs.',
        'Reduced initial load time by 40% through bundle analysis, critical font pre-fetching, and static asset optimization.',
        'Built modular, reusable components with Vue.js, TypeScript and Quasar for the SGDEA (Electronic Document Archive Management System), applying complex validations and insurance domain business logic.',
        'Designed the data model and CRUD operations for the Minegos E-commerce using Drizzle ORM, and implemented the public storefront with a shopping cart and advanced search filters.',
        'Worked in an agile environment under Scrum using Azure DevOps for sprint management, user stories and bug resolution.',
      ],
    },
    university: {
      period: 'September 2020 – December 2024',
      role: 'Computer Engineering',
      bullets: [
        'Collaboratively developed a responsive web system for employee hours tracking, resulting in a 30% increase in worker performance by automating repetitive tasks.',
        'The system enabled real-time activity monitoring by management.',
      ],
    },
  },
  project_items: {
    sgdea: {
      title: 'SGDEA',
      description: 'Electronic Document Archive Management System built for the insurance sector. Developed with Vue.js, TypeScript and Quasar, featuring modular and reusable components with complex domain-specific validations and business logic. Collaborative work with requirements analysts and QA under Scrum methodology.',
    },
    'insurance-system': {
      title: 'Insurance Management System',
      description: 'Insurance management platform with a frontend refactored to Screaming Architecture for maximum scalability. Features environment-based dynamic routing (DEV/QA/UAT/PROD), UI-configurable maintenance windows with real-time WebSocket notifications, and a 40% reduction in initial load time through bundle analysis and asset optimization.',
    },
    minegos: {
      title: 'Minegos E-commerce',
      description: 'E-commerce platform with a full admin panel and public storefront. Data model and CRUD operations built with Drizzle ORM, including a shopping cart, advanced search filters, and autonomous management of products, categories and Linktree-style link configuration.',
    },
    'hours-control': {
      title: 'Hours Control',
      description: 'Responsive web system for university employee hours tracking, built collaboratively. Automated repetitive tasks achieving a 30% increase in staff performance, and enabled real-time activity monitoring for management.',
    },
  },
  skill_categories: {
    'languages-frameworks': 'Languages & Frameworks',
    'styles-ui': 'Styles & UI',
    'tools-methods': 'Tools & Methods',
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
