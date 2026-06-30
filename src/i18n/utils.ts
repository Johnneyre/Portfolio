import { es } from './es';
import { en } from './en';
import type { Translations } from './es';

export type SupportedLocale = 'es' | 'en';

const TRANSLATIONS: Record<SupportedLocale, Translations> = { es, en };

export function useTranslations(locale: SupportedLocale): Translations {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.es;
}

export function getLocalePath(locale: SupportedLocale, path = ''): string {
  if (locale === 'es') return `/${path}`;
  return `/en/${path}`;
}

export type SectionKey = 'home' | 'experience' | 'projects' | 'skills';

// Section anchor slugs, localized per language (e.g. "#inicio" vs "#start").
const SECTION_SLUGS: Record<SupportedLocale, Record<SectionKey, string>> = {
  es: { home: 'inicio', experience: 'experiencia', projects: 'proyectos', skills: 'skills' },
  en: { home: 'start', experience: 'experience', projects: 'projects', skills: 'skills' },
};

/** Locale-aware id/anchor slug for a page section. */
export function sectionId(locale: SupportedLocale, key: SectionKey): string {
  return SECTION_SLUGS[locale][key];
}
