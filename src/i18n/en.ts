import type { Translations } from '../types/translations';

export const en: Translations = {
  meta: {
    title: 'Johnneyre Zambrano — FullStack Developer',
    description: '3+ years building scalable web applications. Specialist in Vue.js, TypeScript and modular architectures.',
  },
  owner: {
    name: 'Johnneyre Zambrano',
    role: 'FullStack Developer',
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
    role: 'FullStack Developer',
    bio: '3+ years building high-performance web apps. I specialize in clean interfaces, modular architectures, and scalable code.',
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
      role: 'FullStack Developer',
      bullets: [
        'Built interactive interfaces and components for an insurance management system using Vue.js and Pinia. Developed critical data visualizations consuming the Spring Boot actuator, enabling real-time monitoring of logs, cronjobs and microservice metrics.',
        'Led the frontend refactoring by implementing Screaming Architecture for modular division, significantly improving the scalability and maintainability of the product.',
        'Implemented features for the Minegos E-commerce in products, categories, configuration and reports modules, improving the management experience for sellers and streamlining the purchase process.',
        'Developed reusable components with Vue.js and TypeScript for an Electronic Document Management System (SGDEA), collaborating with requirements analysts and QA.',
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
      description: 'Electronic Document Archive Management System. Reusable components in Vue.js and TypeScript, following business rules defined with analysts and QA.',
    },
    'insurance-system': {
      title: 'Insurance Management System',
      description: 'Dashboard with real-time data visualization consuming the Spring Boot actuator: logs, cronjobs and active microservice metrics.',
    },
    minegos: {
      title: 'Minegos E-commerce',
      description: 'Improvements in products, categories, configuration and reports modules. Optimizing the experience for sellers and buyers.',
    },
    'hours-control': {
      title: 'Hours Control',
      description: 'Responsive web system for university employee hours tracking. Automation of repetitive tasks and real-time supervision for management.',
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
