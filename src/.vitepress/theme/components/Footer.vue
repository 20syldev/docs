<script setup lang="ts">
import { useVersion } from '../composables/useVersion';
import { t } from '../utils/i18n';

const { version, lang } = useVersion();
const year = new Date().getFullYear();
</script>

<template>
    <footer class="site-footer">
        <div class="site-footer-inner">
            <span class="site-footer-copy">&copy; {{ year }} <a href="/">docs.sylvain.sh</a></span>
            <nav class="site-footer-links">
                <a :href="`/${version}/${lang}/changelog`">{{ t('footer.changelog', lang) }}</a>
                <span class="site-footer-dot" />
                <a href="https://github.com/20syldev/docs" target="_blank" rel="noopener">GitHub</a>
                <span class="site-footer-dot" />
                <a href="https://github.com/20syldev/docs/issues" target="_blank" rel="noopener">{{
                    t('footer.issue', lang)
                }}</a>
            </nav>
        </div>
    </footer>
</template>
