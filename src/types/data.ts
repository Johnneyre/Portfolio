import type { IconName } from './icons';

export interface TechTag {
  readonly id: string;
}

export interface SkillItem {
  readonly id: string;
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

export interface TimelineItem {
  readonly id: string;
  readonly type: 'work' | 'education';
  readonly company: string;
  readonly location: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly tags: readonly TechTag[];
  /** Optional live demo URL. When present, a "demo" button is rendered. */
  readonly liveUrl?: string;
  /** Optional source code URL. When present, a "code" button is rendered. */
  readonly repoUrl?: string;
  /** Accent hue (OKLCh degrees) used to tint the project's cover backdrop. */
  readonly accent?: number;
  /** Concept icon for the generated cover when there is no screenshot. */
  readonly concept?: IconName;
}
