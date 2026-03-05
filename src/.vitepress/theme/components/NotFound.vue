<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { t } from '../i18n';
import { getSmartRedirect, getUserLang, LATEST_VERSION } from '../redirect';

const props = defineProps<{ lang: string }>();
const redirecting = ref(false);

onMounted(() => {
    const lang = getUserLang();
    const target = getSmartRedirect(window.location.pathname, lang, LATEST_VERSION);
    if (target) {
        redirecting.value = true;
        window.location.replace(target);
    }
});
</script>

<template>
    <div v-if="!redirecting" class="not-found">
        <p class="code">404</p>
        <h1 class="title">{{ t('notFoundTitle', lang) }}</h1>
        <p class="quote">{{ t('notFoundMessage', lang) }}</p>
        <a class="link" :href="lang === 'fr' ? '/fr' : '/'">{{ t('notFoundLink', lang) }}</a>
    </div>
</template>
