import en from './en';
import fr from './fr';
import type { TranslationKey, TranslationSchema } from './types';

export type { TranslationKey, TranslationSchema };

const translations: Record<string, TranslationSchema> = { en, fr };

export const defaultLang = 'en';

export const languages: { code: string; prefix: string; locale: string; translationKey: TranslationKey }[] = [
    { code: 'en', prefix: '', locale: 'en-US', translationKey: 'lang.en' },
    { code: 'fr', prefix: '/fr', locale: 'fr-FR', translationKey: 'lang.fr' },
];

export const langCodes = languages.map((l) => l.code);

function resolve(obj: TranslationSchema | undefined, key: string): string | undefined {
    if (!obj) return undefined;
    const parts = key.split('.');
    let current: unknown = obj;
    for (const part of parts) {
        if (current == null || typeof current !== 'object') return undefined;
        current = (current as Record<string, unknown>)[part];
    }
    return typeof current === 'string' ? current : undefined;
}

/**
 * Translates a key for the given language, falling back to the default language.
 *
 * @param key - The dot-notation translation key
 * @param lang - The target language code
 * @returns The translated string, or the key itself if not found
 */
export function t(key: TranslationKey, lang: string): string {
    return resolve(translations[lang], key) ?? resolve(translations[defaultLang], key) ?? key;
}

/**
 * Checks whether a path corresponds to a homepage (root or language root).
 *
 * @param path - The current URL path
 * @returns `true` if the path is a homepage
 */
export function isHome(path: string): boolean {
    const homePaths = [
        '/',
        '/index.html',
        ...languages.filter((l) => l.prefix).flatMap((l) => [l.prefix, `${l.prefix}.html`]),
    ];
    return homePaths.includes(path);
}

/**
 * Extracts the language code from a path.
 *
 * @param path - The current URL path
 * @returns The language code (e.g. `'fr'`), or `'en'` if none is found
 */
export function getLang(path: string): string {
    const match = languages.find((l) => l.prefix && path.includes(l.prefix));
    return match ? match.code : defaultLang;
}

/**
 * Returns the URL prefix for a given language.
 *
 * @param lang - The language code
 * @returns The prefix string (e.g. `'/fr'`), or `''` for the default language
 */
export function getPrefix(lang: string): string {
    return languages.find((l) => l.code === lang)?.prefix ?? '';
}

/**
 * Builds the language switcher items with translated labels and correct links.
 *
 * @param path - The current URL path
 * @param homepage - Whether the current page is a homepage
 * @param lang - The current language code
 * @returns An array of `{ text, link, lang }` objects for each available language
 */
export function getLangItems(
    path: string,
    homepage: boolean,
    lang: string,
): Array<{ text: string; link: string; lang: string }> {
    return languages.map((l) => {
        let link: string;
        if (homepage) {
            link = l.prefix || '/';
        } else {
            const currentPrefix = getPrefix(lang) || `/${lang}`;
            const targetPrefix = getPrefix(l.code) || `/${l.code}`;
            link = path.replace(currentPrefix + '/', targetPrefix + '/') || path;
        }
        return { text: t(l.translationKey, lang), link, lang: l.code };
    });
}

/**
 * Returns the BCP 47 locale string for a language code.
 *
 * @param lang - The language code
 * @returns The locale string (e.g. `'fr-FR'`)
 */
export function getLocale(lang: string): string {
    return languages.find((l) => l.code === lang)?.locale ?? lang;
}

/**
 * Persists the selected language to localStorage.
 *
 * @param lang - The language code to save
 */
export function saveLang(lang: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
}
