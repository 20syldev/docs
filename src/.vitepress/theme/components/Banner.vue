<script setup lang="ts">
import { computed } from 'vue';
import { t } from '../utils/i18n';
import { useVersion } from '../composables/useVersion';
import { LATEST_VERSION, KNOWN_VERSIONS } from '../utils/redirect';

const { version, lang } = useVersion();

const latestIndex = KNOWN_VERSIONS.indexOf(LATEST_VERSION);
const versionIndex = computed(() => KNOWN_VERSIONS.indexOf(version.value));

const isLatest = computed(() => version.value === LATEST_VERSION);
const isPrevious = computed(() => versionIndex.value === latestIndex - 1);

const latestLink = computed(() => `/${LATEST_VERSION}/${lang.value}/`);
const bannerType = computed(() => isPrevious.value ? 'warning' : 'danger');
const titleKey = computed(() => isPrevious.value ? 'bannerMigrationTitle' : 'bannerLegacyTitle');
const textKey = computed(() => isPrevious.value ? 'bannerMigrationText' : 'bannerLegacyText');
</script>

<template>
    <div v-if="!isLatest" :class="['banner', bannerType]">
        <strong>{{ t(titleKey, lang) }}</strong>
        <p>{{ t(textKey, lang).replace('{version}', LATEST_VERSION) }}</p>
        <a :href="latestLink" class="banner-link">
            {{ t('bannerLink', lang) }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
    </div>
</template>
