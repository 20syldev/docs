<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { getPrefix, t } from '../utils/i18n';
import { getSmartRedirect, getUserLang, LATEST_VERSION } from '../utils/redirect';

defineProps<{ lang: string }>();
const redirecting = ref(false);

onMounted(() => {
    const lang = getUserLang();
    const target = getSmartRedirect(window.location.pathname, lang, LATEST_VERSION);
    if (target) {
        redirecting.value = true;
        document.title = 'Redirecting...';
        window.location.replace(target);
    }
});
</script>

<template>
    <div v-if="!redirecting" class="text-center px-6 pt-16 pb-24">
        <p class="text-body leading-[64px] font-semibold text-[64px]">404</p>
        <h1 class="tracking-[2px] leading-5 pt-3 font-bold text-xl">{{ t('notFound.title', lang) }}</h1>
        <p class="text-muted mx-auto text-sm font-medium max-w-[560px] leading-5 pt-7">
            {{ t('notFound.message', lang) }}
        </p>
        <a
            :href="getPrefix(lang) || '/'"
            class="border border-brand text-brand inline-block transition-all duration-300 rounded-2xl px-5 py-1.5 mt-7 font-medium text-sm hover:border-brand-hover hover:text-brand-hover"
            >{{ t('notFound.link', lang) }}</a
        >
    </div>
</template>
