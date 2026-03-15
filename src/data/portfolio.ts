import type {
  TimelineItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
  NavLink,
} from '../types/data';

// Structural data only - all translatable text lives in i18n/*.ts

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'experience', href: '#experience' },
  { id: 'projects', href: '#projects' },
  { id: 'skills', href: '#skills' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: 'email', href: 'mailto:johnneyrez@gmail.com', icon: 'email' },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/johnneyre-zambrano-15a571228/', icon: 'linkedin' },
  { id: 'github', href: 'https://github.com/Johnneyre', icon: 'github' },
] as const;

export const TIMELINE_ITEMS: readonly TimelineItem[] = [
  {
    id: 'linktic',
    type: 'work',
    company: 'LinkTIC',
    location: 'Bogotá, Colombia',
  },
  {
    id: 'university',
    type: 'education',
    company: 'Universidad Politécnica Territorial Agro-Industrial del Táchira',
    location: 'Táchira, Venezuela',
  },
] as const;

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  {
    id: 'sgdea',
    tags: [
      { id: 'vuejs', devicon: 'devicon-vuejs-plain colored' },
      { id: 'typescript', devicon: 'devicon-typescript-plain colored' },
      { id: 'pinia', devicon: 'devicon-pinia-plain colored' },
      { id: 'rest-api', devicon: 'devicon-fastapi-plain colored' },
    ],
  },
  {
    id: 'insurance-system',
    tags: [
      { id: 'vuejs', devicon: 'devicon-vuejs-plain colored' },
      { id: 'pinia', devicon: 'devicon-pinia-plain colored' },
      { id: 'typescript', devicon: 'devicon-typescript-plain colored' },
      { id: 'spring-boot', devicon: 'devicon-spring-plain colored' },
    ],
  },
  {
    id: 'minegos',
    tags: [
      { id: 'vuejs', devicon: 'devicon-vuejs-plain colored' },
      { id: 'typescript', devicon: 'devicon-typescript-plain colored' },
      { id: 'tailwindcss', devicon: 'devicon-tailwindcss-plain colored' },
    ],
  },
  {
    id: 'hours-control',
    tags: [
      { id: 'javascript', devicon: 'devicon-javascript-plain colored' },
      { id: 'html5', devicon: 'devicon-html5-plain colored' },
      { id: 'css3', devicon: 'devicon-css3-plain colored' },
    ],
  },
] as const;

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'languages-frameworks',
    skills: [
      { id: 'typescript', devicon: 'devicon-typescript-plain colored' },
      { id: 'javascript', devicon: 'devicon-javascript-plain colored' },
      { id: 'vuejs', devicon: 'devicon-vuejs-plain colored' },
      { id: 'sveltekit', devicon: 'devicon-svelte-plain colored' },
      { id: 'html5', devicon: 'devicon-html5-plain colored' },
      { id: 'css3', devicon: 'devicon-css3-plain colored' },
    ],
  },
  {
    id: 'styles-ui',
    skills: [
      { id: 'tailwindcss', devicon: 'devicon-tailwindcss-plain colored' },
      { id: 'quasar', devicon: 'devicon-quasar-plain colored' },
      { id: 'sass', devicon: 'devicon-sass-plain colored' },
      { id: 'figma', devicon: 'devicon-figma-plain colored' },
    ],
  },
  {
    id: 'tools-methods',
    skills: [
      { id: 'git', devicon: 'devicon-git-plain colored' },
      { id: 'github', devicon: 'devicon-github-plain' },
      { id: 'azure-devops', devicon: 'devicon-azuredevops-plain colored' },
      { id: 'supabase', devicon: 'devicon-supabase-plain colored' },
      { id: 'pinia', devicon: 'devicon-pinia-plain colored' },
      { id: 'astro', devicon: 'devicon-astro-plain colored' },
    ],
  },
] as const;
