<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useData } from 'vitepress';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';
import VPSwitchAppearance from 'vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue';
import { getLang, isHome, getLangItems, t } from '../i18n';

const route = useRoute();
const { site } = useData();

const lang = computed(() => getLang(route.path));
const homepage = computed(() => isHome(route.path));

const items = computed(() => {
    return getLangItems(route.path, homepage.value).map(item => ({
        ...item,
        active: (item.text === 'Français') ? lang.value === 'fr' : lang.value === 'en',
    }));
});

const visible = computed(() => route.path.includes('/v') || homepage.value);
</script>

<template>
    <VPFlyout v-if="visible" class="VPNavBarExtra extra-menu" label="extra navigation">
        <div class="group">
            <p class="group-title">{{ t('language', lang) }}</p>
            <div class="VPMenuLink" v-for="item in items" :key="item.link">
                <a class="link" :class="{ 'is-active': item.active }" :href="item.link">{{ item.text }}</a>
            </div>
        </div>

        <div v-if="site.appearance && site.appearance !== 'force-dark'" class="group">
            <div class="item appearance">
                <p class="label">{{ t('appearance', lang) }}</p>
                <VPSwitchAppearance />
            </div>
        </div>
    </VPFlyout>
</template>

<style scoped>
.extra-menu {
    margin-right: -12px;
}

.group {
    padding: 12px 0 0;
}

.group + .group {
    border-top: 1px solid var(--vp-c-divider);
}

.group:first-child {
    padding-top: 0;
}

.group-title {
    padding: 0 24px 0 12px;
    line-height: 32px;
    font-size: 14px;
    font-weight: 700;
    color: var(--vp-c-text-1);
}

.item.appearance {
    display: flex;
    align-items: center;
    padding: 0 12px;
    min-width: 176px;
}

.label {
    flex-grow: 1;
    line-height: 28px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.VPMenuLink .link {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    line-height: 32px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    white-space: nowrap;
    transition: color 0.25s;
    border-radius: 6px;
}

.VPMenuLink .link:hover {
    color: var(--vp-c-brand-1);
}
</style>
