<script setup lang="ts">
import { useRoute } from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';
import { computed } from 'vue';

import { getLang, getLangItems, isHome, languages, saveLang } from '../utils/i18n';

const route = useRoute();

const homepage = computed(() => isHome(route.path));

const lang = computed(() => getLang(route.path).toUpperCase());

const langCode = computed(() => getLang(route.path));
const items = computed(() => getLangItems(route.path, homepage.value, langCode.value));

const visible = computed(() => route.path.includes('/v') || homepage.value);

function onLangClick(e: MouseEvent) {
    const link = (e.target as HTMLElement).closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    const match = languages.find((l) => l.prefix && href.startsWith(l.prefix));
    saveLang(match ? match.code : languages[0].code);
}
</script>

<template>
    <div v-if="visible" class="language-switcher-wrapper" @click.capture="onLangClick">
        <VPFlyout class="VPNavBarMenuGroup" :button="lang" :items="items" />
    </div>
</template>
