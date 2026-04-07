import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { LATEST_VERSION } from '../utils/redirect';
import { getLang } from '../utils/i18n';

export function useVersion() {
    const route = useRoute();

    const version = computed(() => route.path.match(/^\/(v\d+)\//)?.[1] ?? LATEST_VERSION);

    const lang = computed(() => getLang(route.path));

    const versionedPath = (path: string) => `/${version.value}${path.startsWith('/') ? path : '/' + path}`;

    return { version, lang, versionedPath };
}
