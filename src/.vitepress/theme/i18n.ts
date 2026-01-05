export const translations: Record<string, Record<string, string>> = {
    en: {
        onThisPage: 'On this page',
        search: 'Search',
        home: 'Home',
        latest: 'Latest',
        notFoundTitle: 'PAGE NOT FOUND',
        notFoundMessage: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        notFoundLink: 'Take me home',
    },
    fr: {
        onThisPage: 'Sur cette page',
        search: 'Rechercher',
        home: 'Accueil',
        latest: 'Dernière',
        notFoundTitle: 'PAGE NON TROUVÉE',
        notFoundMessage: "Mais si vous ne changez pas de direction et continuez à chercher, vous finirez peut-être par arriver là où vous alliez.",
        notFoundLink: "Retour à l'accueil",
    },
};

export function getLang(path: string): string {
    if (path.includes('/fr')) return 'fr';
    return 'en';
}

export function t(key: string, lang: string): string {
    return translations[lang]?.[key] || translations.en[key] || key;
}