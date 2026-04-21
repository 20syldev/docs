import { defaultLang, langCodes, languages } from './i18n';

export const API_BASE_URL = 'https://api.sylvain.sh';
export const LATEST_VERSION = 'v4';
export const KNOWN_VERSIONS = ['v1', 'v2', 'v3', 'v4'];

const versionNums = KNOWN_VERSIONS.map((v) => v.replace('v', '')).join('');
export const VERSION_REGEX = new RegExp(`^v[${versionNums}]$`);
export const VERSION_PATH_REGEX = new RegExp(`^(v[${versionNums}])\\/`);

const langPattern = langCodes.join('|');
const rootPaths = new Set(['', '404', ...languages.filter((l) => l.prefix).map((l) => l.prefix.replace(/^\//, ''))]);

/**
 * Returns the user's preferred language from localStorage, browser navigator, or the default.
 *
 * @returns A language code (e.g. `'en'`, `'fr'`)
 */
export function getUserLang(): string {
    if (typeof localStorage === 'undefined') return defaultLang;
    const saved = localStorage.getItem('lang');
    if (saved && langCodes.includes(saved)) return saved;
    const nav = (typeof navigator !== 'undefined' ? navigator.language : '') ?? '';
    const match = languages.find((l) => nav.toLowerCase().startsWith(l.code));
    return match ? match.code : defaultLang;
}

/**
 * Computes a redirect path by injecting the version and language when missing.
 *
 * @param path - The current URL path
 * @param lang - The target language code
 * @param latest - The latest version to use when no version is present. Defaults to `LATEST_VERSION`
 * @returns The redirect path, or `null` if no redirect is needed
 */
export function getSmartRedirect(path: string, lang: string, latest = LATEST_VERSION): string | null {
    const p = path.replace(/\/$/, '').replace(/^\//, '');

    // Known root paths → no redirect
    if (rootPaths.has(p)) return null;

    // Path already has version + language → no redirect needed
    const vRange = `[${versionNums}]`;
    if (new RegExp(`^v${vRange}\\/(${langPattern})(\\/.*)?$`).test(p)) return null;

    const versionMatch = p.match(new RegExp(`^(v${vRange})(/(.+))?$`));
    if (versionMatch) {
        const [, version, , rest] = versionMatch;
        return `/${version}/${lang}${rest ? '/' + rest : ''}`;
    }

    // /latest or /latest/page → resolve to current version
    const latestMatch = p.match(/^latest(\/(.+))?$/);
    if (latestMatch) {
        const [, , rest] = latestMatch;
        return `/${latest}/${lang}${rest ? '/' + rest : ''}`;
    }

    // /pricing (bare path, no version) → inject version + language
    // Skip static assets (.png, .svg, .js, etc.) and internal paths (_)
    if (!p.includes('.') && !p.startsWith('_')) {
        return `/${latest}/${lang}/${p}`;
    }

    return null;
}
