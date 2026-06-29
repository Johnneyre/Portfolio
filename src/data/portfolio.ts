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
  { id: 'linkedin', href: 'https://www.linkedin.com/in/johnneyre-zambrano', icon: 'linkedin' },
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
    id: 'image-optimize-webgpu',
    accent: 215,
    liveUrl: 'https://webgpu-image-optimizer.com/',
    repoUrl: 'https://github.com/Johnneyre/image-optimizer-web-gpu',
    tags: [
      { id: 'angular' },
      { id: 'typescript' },
      { id: 'webgpu' },
      { id: 'tailwindcss' },
    ],
  },
  {
    id: 'insurance-system',
    accent: 255,
    concept: 'shield',
    tags: [
      { id: 'vuejs' },
      { id: 'pinia' },
      { id: 'typescript' },
      { id: 'spring-boot' },
    ],
  },
  {
    id: 'minegos',
    accent: 300,
    concept: 'cart',
    tags: [
      { id: 'vuejs' },
      { id: 'typescript' },
      { id: 'tailwindcss' },
    ],
  },
  {
    id: 'hours-control',
    accent: 70,
    concept: 'clock',
    tags: [
      { id: 'svelte' },
      { id: 'tailwindcss' },
      { id: 'supabase' },
    ],
  },
] as const;

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'languages-frameworks',
    skills: [
      { id: 'angular' },
      { id: 'vuejs' },
      { id: 'astro' },
      { id: 'svelte' },
      { id: 'typescript' },
      { id: 'javascript' },
    ],
  },
  {
    id: 'styles-ui',
    skills: [
      { id: 'tailwindcss' },
      { id: 'quasar' },
      { id: 'sass' },
      { id: 'figma' },
    ],
  },
  {
    id: 'tools-methods',
    skills: [
      { id: 'git' },
      { id: 'github' },
      { id: 'azure-devops' },
      { id: 'supabase' },
      { id: 'pinia' },
    ],
  },
] as const;
