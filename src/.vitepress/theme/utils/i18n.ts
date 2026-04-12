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
        footerIssue: 'Report an issue',
        featAlgorithms: 'Factorial, fibonacci, prime numbers, GCD, roman numerals, and more.',
        featCaptcha: 'Generate CAPTCHA images from text for bot protection.',
        featColor: 'Generate random colors with HEX, RGB, and HSL values.',
        featConvert: 'Temperature conversion between Celsius, Fahrenheit, and Kelvin.',
        featDice: 'Roll dice using RPG notation (2d6+3, 1d20, 4d8).',
        featDomain: 'Get domain information including IP, DNS, registrar, and WHOIS data.',
        featEncode: 'Encode and decode text in Base64, Morse, Caesar, binary, and more.',
        featHash: 'Hash text with MD5, SHA-1, SHA-256, SHA-512, or BLAKE2b.',
        featHyperplanning: 'Fetch and parse Hyperplanning schedules from a URL.',
        featInfos: 'Get API metadata: endpoint count, version, documentation link.',
        featLevenshtein: 'Calculate the edit distance between two strings.',
        featPersonal: 'Generate a random fake identity with personal details.',
        featQRCode: 'Generate QR code images from any URL.',
        featStatistics: 'Descriptive statistics: mean, median, standard deviation, and more.',
        featText: 'Text utilities: slug, stats, Lorem Ipsum, number to words.',
        featTime: 'Current or random time with 17 format options and timezone support.',
        featToken: 'Generate secure random tokens in various formats.',
        featUsername: 'Generate random usernames with adjective + animal pattern.',
        featValidate: 'Validate credit cards (Luhn), IBANs, and email addresses.',
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
        footerIssue: 'Signaler un bug',
        featAlgorithms: 'Factorielle, fibonacci, nombres premiers, PGCD, chiffres romains, et plus.',
        featCaptcha: 'Générer des images CAPTCHA à partir de texte pour la protection anti-bots.',
        featColor: 'Générer des couleurs aléatoires avec valeurs HEX, RGB et HSL.',
        featConvert: 'Conversion de température entre Celsius, Fahrenheit et Kelvin.',
        featDice: 'Lancer des dés en notation RPG (2d6+3, 1d20, 4d8).',
        featDomain: "Obtenir les informations d'un domaine : IP, DNS, registrar et WHOIS.",
        featEncode: 'Encoder et décoder du texte en Base64, Morse, César, binaire, et plus.',
        featHash: 'Hasher du texte avec MD5, SHA-1, SHA-256, SHA-512 ou BLAKE2b.',
        featHyperplanning: 'Récupérer et analyser les emplois du temps Hyperplanning depuis une URL.',
        featInfos: "Métadonnées de l'API : nombre d'endpoints, version, lien documentation.",
        featLevenshtein: "Calculer la distance d'édition entre deux chaînes.",
        featPersonal: 'Générer une identité fictive aléatoire avec des détails personnels.',
        featQRCode: "Générer des images QR code à partir d'une URL.",
        featStatistics: 'Statistiques descriptives : moyenne, médiane, écart-type, et plus.',
        featText: 'Utilitaires texte : slug, stats, Lorem Ipsum, nombre en lettres.',
        featTime: 'Heure actuelle ou aléatoire avec 17 formats et support des fuseaux.',
        featToken: 'Générer des tokens aléatoires sécurisés dans différents formats.',
        featUsername: "Générer des noms d'utilisateur aléatoires (adjectif + animal).",
        featValidate: 'Valider des cartes bancaires (Luhn), IBAN et adresses email.',
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
