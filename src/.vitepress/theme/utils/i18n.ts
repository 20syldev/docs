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
        notFoundMessage:
            "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        notFoundLink: 'Take me home',
        copyCode: 'Copy code',
        tryIt: 'Try It',
        run: 'Run',
        loading: 'Loading...',
        select: 'Select...',
        response: 'Response',
        send: 'Send',
        selectEndpoint: 'Select an endpoint',
        history: 'History',
        clearHistory: 'Clear',
        responseTime: 'Response time',
        codeExamples: 'Code Examples',
        playground: 'Playground',
        changelog: 'Changelog',
        bannerMigrationTitle: 'Migration Available',
        bannerMigrationText:
            'A newer version is available! Consider migrating to {version} for the latest features and improvements.',
        bannerLegacyTitle: 'Legacy Version',
        bannerLegacyText:
            'This is a legacy version of the API. Consider migrating to {version} for the latest features and improvements.',
        bannerLink: 'View latest version',
        prevPage: 'Previous page',
        nextPage: 'Next page',
        editPage: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
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
        notFoundMessage:
            'Mais si vous ne changez pas de direction et continuez à chercher, vous finirez peut-être par arriver là où vous alliez.',
        notFoundLink: "Retour à l'accueil",
        copyCode: 'Copier le code',
        tryIt: 'Essayer',
        run: 'Exécuter',
        loading: 'Chargement...',
        select: 'Choisir...',
        response: 'Réponse',
        send: 'Envoyer',
        selectEndpoint: 'Choisir un endpoint',
        history: 'Historique',
        clearHistory: 'Effacer',
        responseTime: 'Temps de réponse',
        codeExamples: 'Exemples de code',
        playground: 'Playground',
        changelog: 'Changelog',
        bannerMigrationTitle: 'Migration disponible',
        bannerMigrationText:
            'Une version plus récente est disponible ! Envisagez de migrer vers {version} pour les dernières fonctionnalités et améliorations.',
        bannerLegacyTitle: 'Version obsolète',
        bannerLegacyText:
            "Ceci est une ancienne version de l'API. Envisagez de migrer vers {version} pour les dernières fonctionnalités et améliorations.",
        bannerLink: 'Voir la dernière version',
        prevPage: 'Page précédente',
        nextPage: 'Page suivante',
        editPage: 'Modifier cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
    },
};

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

export function saveLang(lang: string): void {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('lang', lang);
    }
}

export function t(key: string, lang: string): string {
    return translations[lang]?.[key] || translations[defaultLang][key] || key;
}
