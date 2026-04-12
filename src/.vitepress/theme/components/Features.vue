<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vitepress';
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue';
import { endpoints } from '../data/endpoints';
import { useVersion } from '../composables/useVersion';
import { t } from '../utils/i18n';

const route = useRoute();
const { version, lang } = useVersion();

const keys: Record<string, string> = {
    Algorithms: 'featAlgorithms',
    Captcha: 'featCaptcha',
    Color: 'featColor',
    Convert: 'featConvert',
    Dice: 'featDice',
    Domain: 'featDomain',
    Encode: 'featEncode',
    Hash: 'featHash',
    Hyperplanning: 'featHyperplanning',
    Infos: 'featInfos',
    Levenshtein: 'featLevenshtein',
    Personal: 'featPersonal',
    'QR Code': 'featQRCode',
    Statistics: 'featStatistics',
    Text: 'featText',
    Time: 'featTime',
    Token: 'featToken',
    Username: 'featUsername',
    Validate: 'featValidate',
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
