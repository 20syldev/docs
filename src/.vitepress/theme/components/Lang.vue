<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';
import { getLang, isHome, getLangItems } from '../i18n';

const route = useRoute();

const homepage = computed(() => isHome(route.path));

const lang = computed(() => {
    const l = getLang(route.path);
    return l === 'fr' ? 'FR' : 'EN';
});

const items = computed(() => getLangItems(route.path, homepage.value));

const visible = computed(() => route.path.includes('/v') || homepage.value);
</script>

<template>
    <div v-if="visible" class="language-switcher-wrapper">
        <VPFlyout class="VPNavBarMenuGroup" :button="lang" :items="items" />
    </div>
</template>