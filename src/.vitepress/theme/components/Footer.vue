<script setup lang="ts">
import { useSidebar } from 'vitepress/theme';

import { useVersion } from '../composables/useVersion';
import { t } from '../utils/i18n';

const { version, lang } = useVersion();
const { hasSidebar } = useSidebar();
const year = new Date().getFullYear();
</script>

<template>
    <footer
        :class="[
            'site-footer',
            'border-t',
            'border-divider',
            'bg-surface',
            'z-10',
            'p-6',
            { 'has-sidebar': hasSidebar },
        ]"
    >
        <div
            class="site-footer-inner flex flex-col items-center justify-between gap-1 text-center mx-auto max-w-[1152px] vp:flex-row vp:text-left"
        >
            <span class="text-faint text-xs"
                >&copy; {{ year }}
                <a
                    href="/"
                    class="!text-faint no-underline transition-colors duration-200 hover:!text-body"
                    >docs.sylvain.sh</a
                ></span
            >
            <nav class="flex items-center justify-center gap-1.5 vp:justify-start">
                <a
                    :href="`/${version}/${lang}/changelog`"
                    class="!text-faint no-underline transition-colors duration-200 text-xs hover:!text-body"
                    >{{ t('footer.changelog', lang) }}</a
                >
                <span class="inline-block bg-faint rounded-full h-[3px] w-[3px]" />
                <a
                    href="https://github.com/20syldev/docs"
                    target="_blank"
                    rel="noopener"
                    class="!text-faint no-underline transition-colors duration-200 text-xs hover:!text-body"
                    >GitHub</a
                >
                <span class="inline-block bg-faint rounded-full h-[3px] w-[3px]" />
                <a
                    href="https://github.com/20syldev/docs/issues"
                    target="_blank"
                    rel="noopener"
                    class="!text-faint no-underline transition-colors duration-200 text-xs hover:!text-body"
                    >{{ t('footer.issue', lang) }}</a
                >
            </nav>
        </div>
    </footer>
</template>
