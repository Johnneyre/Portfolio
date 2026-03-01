export interface ExperienceItem {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly bullets: readonly string[];
  readonly type: 'work' | 'education';
  readonly institution?: string;
}

export interface ProjectItem {
  readonly title: string;
  readonly description: string;
  readonly tags: readonly TechTag[];
}

export interface TechTag {
  readonly label: string;
  readonly devicon: string; // devicon class name e.g. "devicon-vuejs-plain"
}

export interface SkillItem {
  readonly label: string;
  readonly devicon: string;
}

export interface SkillCategory {
  readonly label: string;
  readonly skills: readonly SkillItem[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: 'email' | 'linkedin' | 'github';
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}
