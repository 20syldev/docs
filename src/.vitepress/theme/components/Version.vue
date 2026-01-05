<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';

const route = useRoute();

const pages: Record<string, string[]> = {
    v3: ['', 'authentication', 'pricing', 'algorithms', 'captcha', 'chat', 'chat/private', 'color', 'convert', 'domain', 'hash', 'hyperplanning', 'infos', 'levenshtein', 'personal', 'qrcode', 'tic-tac-toe', 'tic-tac-toe/fetch', 'tic-tac-toe/list', 'time', 'token', 'username'],
    v2: ['', 'authentication', 'pricing', 'algorithms', 'captcha', 'chat', 'chat/private', 'color', 'convert', 'domain', 'hash', 'infos', 'personal', 'qrcode', 'tic-tac-toe', 'tic-tac-toe/fetch', 'token', 'username'],
    v1: ['', 'authentication', 'pricing', 'algorithms', 'captcha', 'color', 'convert', 'domain', 'infos', 'personal', 'qrcode', 'token', 'username'],
};

const version = computed(() => route.path.match(/^\/(v[1-3])\//)?.[1] ?? 'v3');
const lang = computed(() => route.path.match(/^\/v[1-3]\/(en|fr)\//)?.[1] ?? 'en');
const page = computed(() => route.path.match(/^\/v[1-3]\/(en|fr)\/(.*)$/)?.[2] ?? '');
const visible = computed(() => route.path.includes('/v'));

const getLink = (v: string) => `/${v}/${lang.value}/${pages[v]?.includes(page.value) ? page.value : ''}`;

const items = computed(() => [
    { text: 'v3', link: getLink('v3') },
    { text: 'v2', link: getLink('v2') },
    { text: 'v1', link: getLink('v1') },
]);
</script>

<template>
    <div v-if="visible" class="version-switcher-wrapper">
        <VPFlyout
            class="VPNavBarMenuGroup"
            :button="version"
            :items="items"
        />
    </div>
</template>