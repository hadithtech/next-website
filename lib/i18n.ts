export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'ar') {
    return 'ar';
  }
  
  return defaultLocale;
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function formatLocaleUrl(path: string, locale: Locale): string {
  // Remove leading/trailing slashes
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  
  // For default locale (English), no prefix
  if (locale === defaultLocale) {
    return `/${cleanPath}`;
  }
  
  // For Arabic, add /ar prefix
  return `/${locale}/${cleanPath}`;
}
