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

export function t(key: TranslationKey, lang: string): string {
    return resolve(translations[lang], key) ?? resolve(translations[defaultLang], key) ?? key;
}

export function isHome(path: string): boolean {
    const homePaths = [
        '/',
        '/index.html',
        ...languages.filter((l) => l.prefix).flatMap((l) => [l.prefix, `${l.prefix}.html`]),
    ];
    return homePaths.includes(path);
}

export function getLang(path: string): string {
    const match = languages.find((l) => l.prefix && path.includes(l.prefix));
    return match ? match.code : defaultLang;
}

export function getPrefix(lang: string): string {
    return languages.find((l) => l.code === lang)?.prefix ?? '';
}

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

export function getLocale(lang: string): string {
    return languages.find((l) => l.code === lang)?.locale ?? lang;
}

export function saveLang(lang: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
}
