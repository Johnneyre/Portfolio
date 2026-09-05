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
    menu: string;
    primary: string;
    footer: string;
    skip: string;
    theme: string;
    language: string;
  };
  a11y: {
    new_tab: string;
  };
  social: {
    email: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    scroll_label: string;
  };
  experience: {
    label: string;
    title: string;
  };
  projects: {
    label: string;
    title: string;
    demo: string;
    code: string;
    stack: string;
    screenshot_alt: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  lang_hint: {
    text: string;
    cta: string;
    close: string;
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
      highlights: string[];
    };
  };
  skill_categories: {
    [key: string]: string;
  };
  skill_labels: {
    [key: string]: string;
  };
}
