export const languages = [
    { code: 'en', prefix: '', translationKey: 'langEn' },
    { code: 'fr', prefix: '/fr', translationKey: 'langFr' },
];

const defaultLang = languages[0].code;

export const translations: Record<string, Record<string, string>> = {
    en: {
        onThisPage: 'On this page',
        search: 'Search',
        home: 'Home',
        latest: 'Latest',
        language: 'Language',
        langEn: 'English',
        langFr: 'French',
        appearance: 'Appearance',
        current: 'Current',
        notFoundTitle: 'PAGE NOT FOUND',
        notFoundMessage: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        notFoundLink: 'Take me home',
        copyCode: 'Copy code',
    },
    fr: {
        onThisPage: 'Sur cette page',
        search: 'Rechercher',
        home: 'Accueil',
        latest: 'Dernière',
        language: 'Langue',
        langEn: 'Anglais',
        langFr: 'Français',
        appearance: 'Apparence',
        current: 'Actuelle',
        notFoundTitle: 'PAGE NON TROUVÉE',
        notFoundMessage: "Mais si vous ne changez pas de direction et continuez à chercher, vous finirez peut-être par arriver là où vous alliez.",
        notFoundLink: "Retour à l'accueil",
        copyCode: 'Copier le code',
    },
};

export function isHome(path: string): boolean {
    const homePaths = ['/', '/index.html', ...languages.filter(l => l.prefix).flatMap(l => [l.prefix, `${l.prefix}.html`])];
    return homePaths.includes(path);
}

export function getLang(path: string): string {
    const match = languages.find(l => l.prefix && path.includes(l.prefix));
    return match ? match.code : defaultLang;
}

export function getPrefix(lang: string): string {
    return languages.find(l => l.code === lang)?.prefix ?? '';
}

export function getLangItems(path: string, homepage: boolean, lang: string): Array<{ text: string; link: string; lang: string }> {
    return languages.map(l => {
        let link: string;
        if (homepage) {
            link = l.prefix || '/';
        } else {
            const currentPrefix = getPrefix(lang) || `/${lang}`;
            const targetPrefix = l.prefix || `/${l.code}`;
            link = path.replace(currentPrefix + '/', targetPrefix + '/') || path;
        }
        return { text: t(l.translationKey, lang), link, lang: l.code };
    });
}

export function saveLang(lang: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
}

export function t(key: string, lang: string): string {
    return translations[lang]?.[key] || translations[defaultLang][key] || key;
}
