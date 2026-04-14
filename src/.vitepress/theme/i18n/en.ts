import type { TranslationSchema } from './types';

const en: TranslationSchema = {
    nav: {
        onThisPage: 'On this page',
        search: 'Search',
        home: 'Home',
        prevPage: 'Previous page',
        nextPage: 'Next page',
        editPage: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
    },
    lang: {
        label: 'Language',
        en: 'English',
        fr: 'French',
        appearance: 'Appearance',
    },
    version: {
        latest: 'Latest',
        current: 'Current',
    },
    notFound: {
        title: 'PAGE NOT FOUND',
        message:
            "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        link: 'Take me home',
    },
    banner: {
        migrationTitle: 'Migration Available',
        migrationText:
            'A newer version is available! Consider migrating to {version} for the latest features and improvements.',
        legacyTitle: 'Legacy Version',
        legacyText:
            'This is a legacy version of the API. Consider migrating to {version} for the latest features and improvements.',
        link: 'View latest version',
    },
    playground: {
        selectEndpoint: 'Select an endpoint',
        codeExamples: 'Code Examples',
        playground: 'Playground',
        select: 'Select...',
        response: 'Response',
        send: 'Send',
        run: 'Run',
        loading: 'Loading...',
        history: 'History',
        clearHistory: 'Clear',
        responseTime: 'Response time',
        copyCode: 'Copy code',
        tryIt: 'Try It',
    },
    footer: {
        changelog: 'Changelog',
        issue: 'Report an issue',
    },
    features: {
        algorithms: 'Factorial, fibonacci, prime numbers, GCD, roman numerals, and more.',
        captcha: 'Generate CAPTCHA images with customizable size, colors, and auto-generated text.',
        color: 'Generate or convert colors with HEX, RGB, HSL, HSV, HWB, and CMYK values.',
        convert: 'Unit conversion: temperature, length, weight, data, and speed.',
        dice: 'Roll dice using RPG notation (2d6+3, 1d20, 4d8).',
        domain: 'Get domain information including IP, DNS, registrar, and WHOIS data.',
        encode: 'Encode and decode text in Base64, Morse, Caesar, binary, and more.',
        geo: 'Distance and bearing between two GPS coordinates (Haversine).',
        hash: 'Hash text with MD5, SHA-1, SHA-256, SHA-512, or BLAKE2b.',
        hyperplanning: 'Fetch and parse Hyperplanning schedules from a URL.',
        infos: 'Get API metadata: endpoint count, version, documentation link.',
        levenshtein: 'Calculate the edit distance between two strings.',
        palette: 'Generate harmonious color palettes from a base HEX color.',
        personal: 'Generate a random fake identity with personal details.',
        placeholder: 'Generate SVG placeholders: images or animated skeleton loaders.',
        qrcode: 'Generate QR code images from any URL.',
        statistics: 'Descriptive statistics: mean, median, standard deviation, and more.',
        text: 'Text utilities: slug, stats, Lorem Ipsum, number to words.',
        time: 'Current or random time with 17 format options and timezone support.',
        token: 'Generate secure random tokens in various formats.',
        username: 'Generate random usernames with adjective + animal pattern.',
        validate: 'Validate credit cards (Luhn), IBANs, and email addresses.',
    },
};

export default en;
