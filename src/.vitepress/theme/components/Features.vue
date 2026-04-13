<script setup lang="ts">
import { useRoute } from 'vitepress';
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import { ref, watch } from 'vue';

import { useVersion } from '../composables/useVersion';
import { endpoints } from '../data/endpoints';
import { t, type TranslationKey } from '../utils/i18n';

const route = useRoute();
const { version, lang } = useVersion();

const keys: Record<string, TranslationKey> = {
    Algorithms: 'features.algorithms',
    Captcha: 'features.captcha',
    Color: 'features.color',
    Convert: 'features.convert',
    Dice: 'features.dice',
    Domain: 'features.domain',
    Encode: 'features.encode',
    Geo: 'features.geo',
    Hash: 'features.hash',
    Hyperplanning: 'features.hyperplanning',
    Infos: 'features.infos',
    Levenshtein: 'features.levenshtein',
    Palette: 'features.palette',
    Personal: 'features.personal',
    Placeholder: 'features.placeholder',
    'QR Code': 'features.qrcode',
    Statistics: 'features.statistics',
    Text: 'features.text',
    Time: 'features.time',
    Token: 'features.token',
    Username: 'features.username',
    Validate: 'features.validate',
};

const seen = new Set<string>();
const unique = endpoints.filter((e) => {
    const base = e.path.split('/')[1];
    if (seen.has(base)) return false;
    seen.add(base);
    return keys[e.name];
});

function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pick() {
    const l = lang.value;
    return shuffle(unique)
        .slice(0, 4)
        .map((e) => ({
            title: e.name,
            details: t(keys[e.name], l),
            link: `/${version.value}/${l}${e.path}`,
        }));
}

const features = ref(pick());
watch(
    () => route.path,
    () => (features.value = pick()),
);
</script>

<template>
    <VPFeatures class="VPHomeFeatures" :features="features" />
</template>
