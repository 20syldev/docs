<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';

const route = useRoute();

const homepage = computed(() => {
    const path = route.path;
    return (
        path === '/' ||
        path === '/index.html' ||
        path === '/fr' ||
        path === '/fr.html'
    );
});

const lang = computed(() => {
    const path = route.path;
    if (path.includes('/fr')) return 'FR';
    if (path.includes('/en/')) return 'EN';
    return 'EN';
});

const items = computed(() => {
    const path = route.path;

    if (homepage.value) {
        return [
            { text: 'English', link: '/' },
            { text: 'Français', link: '/fr' },
        ];
    }

    return [
        {
            text: 'English',
            link: path.replace('/fr/', '/en/'),
        },
        {
            text: 'Français',
            link: path.replace('/en/', '/fr/'),
        },
    ];
});

const visible = computed(() => route.path.includes('/v') || homepage.value);
</script>

<template>
    <div v-if="visible" class="language-switcher-wrapper">
        <VPFlyout class="VPNavBarMenuGroup" :button="lang" :items="items" />
    </div>
</template>