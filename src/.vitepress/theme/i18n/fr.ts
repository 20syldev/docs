import type { TranslationSchema } from './types';

const fr: TranslationSchema = {
    nav: {
        onThisPage: 'Sur cette page',
        search: 'Rechercher',
        home: 'Accueil',
        prevPage: 'Page précédente',
        nextPage: 'Page suivante',
        editPage: 'Modifier cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
    },
    lang: {
        label: 'Langue',
        en: 'Anglais',
        fr: 'Français',
        appearance: 'Apparence',
    },
    version: {
        latest: 'Dernière',
        current: 'Actuelle',
    },
    notFound: {
        title: 'PAGE NON TROUVÉE',
        message:
            'Mais si vous ne changez pas de direction et continuez à chercher, vous finirez peut-être par arriver là où vous alliez.',
        link: "Retour à l'accueil",
    },
    banner: {
        migrationTitle: 'Migration disponible',
        migrationText:
            'Une version plus récente est disponible ! Envisagez de migrer vers {version} pour les dernières fonctionnalités et améliorations.',
        legacyTitle: 'Version obsolète',
        legacyText:
            "Ceci est une ancienne version de l'API. Envisagez de migrer vers {version} pour les dernières fonctionnalités et améliorations.",
        link: 'Voir la dernière version',
    },
    playground: {
        selectEndpoint: 'Choisir un endpoint',
        codeExamples: 'Exemples de code',
        playground: 'Playground',
        select: 'Choisir...',
        response: 'Réponse',
        send: 'Envoyer',
        run: 'Exécuter',
        loading: 'Chargement...',
        history: 'Historique',
        clearHistory: 'Effacer',
        responseTime: 'Temps de réponse',
        copyCode: 'Copier le code',
        tryIt: 'Essayer',
    },
    footer: {
        changelog: 'Changelog',
        issue: 'Signaler un bug',
    },
    features: {
        algorithms: 'Factorielle, fibonacci, nombres premiers, PGCD, chiffres romains, et plus.',
        captcha: 'Générer des images CAPTCHA avec taille, couleurs et texte auto-généré personnalisables.',
        color: 'Générer ou convertir des couleurs avec valeurs HEX, RGB, HSL, HSV, HWB et CMYK.',
        convert: "Conversion d'unités : température, longueur, poids, données et vitesse.",
        dice: 'Lancer des dés en notation RPG (2d6+3, 1d20, 4d8).',
        domain: "Obtenir les informations d'un domaine : IP, DNS, registrar et WHOIS.",
        encode: 'Encoder et décoder du texte en Base64, Morse, César, binaire, et plus.',
        geo: 'Distance et cap entre deux coordonnées GPS (Haversine).',
        hash: 'Hasher du texte avec MD5, SHA-1, SHA-256, SHA-512 ou BLAKE2b.',
        hyperplanning: 'Récupérer et analyser les emplois du temps Hyperplanning depuis une URL.',
        infos: "Métadonnées de l'API : nombre d'endpoints, version, lien documentation.",
        levenshtein: "Calculer la distance d'édition entre deux chaînes.",
        palette: "Générer des palettes de couleurs harmonieuses à partir d'une couleur HEX.",
        personal: 'Générer une identité fictive aléatoire avec des détails personnels.',
        placeholder: 'Générer des placeholders SVG : images ou squelettes de chargement animés.',
        qrcode: "Générer des images QR code à partir d'une URL.",
        statistics: 'Statistiques descriptives : moyenne, médiane, écart-type, et plus.',
        text: 'Utilitaires texte : slug, stats, Lorem Ipsum, nombre en lettres.',
        time: 'Heure actuelle ou aléatoire avec 17 formats et support des fuseaux.',
        token: 'Générer des tokens aléatoires sécurisés dans différents formats.',
        username: "Générer des noms d'utilisateur aléatoires (adjectif + animal).",
        validate: 'Valider des cartes bancaires (Luhn), IBAN et adresses email.',
    },
};

export default fr;
