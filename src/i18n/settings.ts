export const fallbackLocale = 'en';
export const languages = [fallbackLocale, 'fr'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(locale = fallbackLocale, ns: string | string[] = defaultNS) {
    return {
        // debug: true,
        supportedlocales: languages,
        // preload: languages,
        fallbackLocale,
        locale,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
    }
}
