export const API_BASE_URL = 'https://api.sylvain.sh';
export const LATEST_VERSION = 'v3';
export const KNOWN_VERSIONS = ['v1', 'v2', 'v3'];

const versionNums = KNOWN_VERSIONS.map((v) => v.replace('v', '')).join('');
export const VERSION_REGEX = new RegExp(`^v[${versionNums}]$`);
export const VERSION_PATH_REGEX = new RegExp(`^(v[${versionNums}])\\/`);

export function getUserLang(): string {
    if (typeof localStorage === 'undefined') return 'en';
    const saved = localStorage.getItem('lang');
    if (saved === 'fr' || saved === 'en') return saved;
    const nav = (typeof navigator !== 'undefined' ? navigator.language : '') ?? '';
    return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function getSmartRedirect(path: string, lang: string, latest = LATEST_VERSION): string | null {
    const p = path.replace(/\/$/, '').replace(/^\//, '');

    // Known root paths → no redirect
    if (!p || p === 'fr' || p === '404') return null;

    // Path already has version + language → no redirect needed
    // e.g. /v3/en/algorithms, /v2/fr/chat
    const vRange = `[${versionNums}]`;
    if (new RegExp(`^v${vRange}\\/(en|fr)(\\/.*)?$`).test(p)) return null;

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
