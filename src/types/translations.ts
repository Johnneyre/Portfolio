export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  owner: {
    name: string;
    role: string;
  };
  nav: {
    experience: string;
    projects: string;
    skills: string;
    home: string;
  };
  social: {
    email: string;
    linkedin: string;
    github: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    cta_projects: string;
    cta_contact: string;
    available: string;
    download_cv: string;
    scroll_label: string;
  };
  experience: {
    label: string;
    title: string;
    education_label: string;
    current: string;
  };
  projects: {
    label: string;
    title: string;
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
  };
  footer: {
    links: {
      home: string;
      experience: string;
      projects: string;
    };
  };
  timeline_items: {
    [key: string]: {
      period: string;
      role: string;
      bullets: string[];
    };
  };
  project_items: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
  skill_categories: {
    [key: string]: string;
  };
  skill_labels: {
    [key: string]: string;
  };
}
