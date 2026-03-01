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

export const SUPPORTED_LOCALES: readonly SupportedLocale[] = ['es', 'en'] as const;
