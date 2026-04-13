import { useRoute } from 'vitepress';
import { computed } from 'vue';

import { getLang } from '../utils/i18n';
import { LATEST_VERSION } from '../utils/redirect';

export function useVersion() {
    const route = useRoute();

    const version = computed(() => route.path.match(/^\/(v\d+)\//)?.[1] ?? LATEST_VERSION);

    const lang = computed(() => getLang(route.path));

    const versionedPath = (path: string) => `/${version.value}${path.startsWith('/') ? path : '/' + path}`;

    return { version, lang, versionedPath };
}
