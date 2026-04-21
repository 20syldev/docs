<script setup lang="ts">
import { computed } from 'vue';

import { useVersion } from '../composables/useVersion';
import { t, type TranslationKey } from '../utils/i18n';
import { KNOWN_VERSIONS, LATEST_VERSION } from '../utils/redirect';

const { version, lang } = useVersion();

const latestIndex = KNOWN_VERSIONS.indexOf(LATEST_VERSION);
const versionIndex = computed(() => KNOWN_VERSIONS.indexOf(version.value));

const isLatest = computed(() => version.value === LATEST_VERSION);
const isPrevious = computed(() => versionIndex.value === latestIndex - 1);

const latestLink = computed(() => `/${LATEST_VERSION}/${lang.value}/`);
const bannerType = computed(() => (isPrevious.value ? 'warning' : 'danger'));
const titleKey = computed(() => (isPrevious.value ? 'banner.migrationTitle' : 'banner.legacyTitle') as TranslationKey);
const textKey = computed(() => (isPrevious.value ? 'banner.migrationText' : 'banner.legacyText') as TranslationKey);
</script>

<template>
    <div v-if="!isLatest" :class="['banner', bannerType, 'border', 'rounded-lg', 'px-5', 'py-4', 'leading-relaxed', 'my-4']">
        <strong class="block text-[15px] mb-1">{{ t(titleKey, lang) }}</strong>
        <p class="m-0 mb-2 text-sm">{{ t(textKey, lang).replace('{version}', LATEST_VERSION) }}</p>
        <a :href="latestLink" class="no-underline inline-flex items-center font-semibold text-sm gap-1.5 hover:underline">
            {{ t('banner.link', lang) }}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="shrink-0"
            >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </svg>
        </a>
    </div>
</template>
