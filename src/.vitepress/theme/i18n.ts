export const translations: Record<string, Record<string, string>> = {
    en: {
        onThisPage: 'On this page',
        search: 'Search',
        home: 'Home',
        latest: 'Latest',
        language: 'Language',
        appearance: 'Appearance',
        current: 'Current',
        notFoundTitle: 'PAGE NOT FOUND',
        notFoundMessage: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        notFoundLink: 'Take me home',
    },
    fr: {
        onThisPage: 'Sur cette page',
        search: 'Rechercher',
        home: 'Accueil',
        latest: 'Dernière',
        language: 'Langue',
        appearance: 'Apparence',
        current: 'Actuelle',
        notFoundTitle: 'PAGE NON TROUVÉE',
        notFoundMessage: "Mais si vous ne changez pas de direction et continuez à chercher, vous finirez peut-être par arriver là où vous alliez.",
        notFoundLink: "Retour à l'accueil",
    },
};

export function isHome(path: string): boolean {
    return path === '/' || path === '/index.html' || path === '/fr' || path === '/fr.html';
}

export function getLang(path: string): string {
    if (path.includes('/fr')) return 'fr';
    return 'en';
}

export function getLangItems(path: string, homepage: boolean): Array<{ text: string; link: string }> {
    if (homepage) {
        return [
            { text: 'English', link: '/' },
            { text: 'Français', link: '/fr' },
        ];
    }
    return [
        { text: 'English', link: path.replace('/fr/', '/en/') },
        { text: 'Français', link: path.replace('/en/', '/fr/') },
    ];
}

export function t(key: string, lang: string): string {
    return translations[lang]?.[key] || translations.en[key] || key;
}