export interface TechTag {
  readonly id: string;
  readonly devicon: string; // devicon class name e.g. "devicon-vuejs-plain"
}

export interface SkillItem {
  readonly id: string;
  readonly devicon: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly skills: readonly SkillItem[];
}

export interface SocialLink {
  readonly id: string;
  readonly href: string;
  readonly icon: 'email' | 'linkedin' | 'github';
}

export interface NavLink {
  readonly id: string;
  readonly href: string;
}

export interface TimelineItem {
  readonly id: string;
  readonly type: 'work' | 'education';
  readonly company: string;
  readonly location: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly tags: readonly TechTag[];
}
