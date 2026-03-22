<script setup lang="ts">
import { computed, watchEffect, onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useData, useRouter } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Extra from './Extra.vue';
import Lang from './Lang.vue';
import NotFound from './NotFound.vue';
import Version from './Version.vue';
import Terminal from './Terminal.vue';
import Copy from './Copy.vue';
import { getLang, isHome, getLangItems, getPrefix, languages as langConfig, t, saveLang } from '../i18n';

const { Layout } = DefaultTheme;
const route = useRoute();
const router = useRouter();
const { isDark: dark } = useData();

const lang = computed(() => getLang(route.path));
const french = computed(() => lang.value === 'fr');
const latest = ref('v3');
const home = computed(() => isHome(route.path));
const languages = computed(() => getLangItems(route.path, home.value, lang.value));

let observer: MutationObserver | null = null;

async function fetchLatest() {
    try {
        const response = await fetch('https://api.sylvain.sh/v3/infos');
        const data = await response.json();
        if (data.last_version) {
            latest.value = data.last_version;
            updateCSS();
        }
    } catch {
        // Fallback to default v3
    }
}

function updateCSS() {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.style.setProperty('--latest-version', `'${latest.value}'`);
    root.style.setProperty('--latest-text', `'${t('latest', lang.value)}'`);
    root.style.setProperty('--current-text', `'${t('current', lang.value)}'`);
}

function translate() {
    if (typeof document === 'undefined') return;
    const l = lang.value;

    // Outline title
    const outlineTitle = document.querySelector('.VPDocAsideOutline .outline-title');
    if (outlineTitle && outlineTitle.textContent !== t('onThisPage', l)) {
        outlineTitle.textContent = t('onThisPage', l);
    }

    // Search button - find the text-only span (not the one with the icon)
    const searchButton = document.querySelector('#local-search button, .DocSearch-Button, [aria-label="Search"]');
    if (searchButton) {
        const spans = searchButton.querySelectorAll('span');
        for (const span of spans) {
            // Skip spans that contain SVG or other elements, only target text-only spans
            if (span.children.length === 0 && span.textContent?.trim() && !span.textContent.includes('⌘') && !span.textContent.includes('Ctrl')) {
                if (span.textContent !== t('search', l)) {
                    span.textContent = t('search', l);
                }
                break;
            }
        }
    }

    // Search input placeholder
    const searchInput = document.querySelector('#localsearch-input, .DocSearch-Input') as HTMLInputElement;
    if (searchInput && searchInput.placeholder !== t('search', l)) {
        searchInput.placeholder = t('search', l);
    }

    // Home nav link
    const homeSelectors = langConfig.map(lg => `.VPNavBarMenuLink[href="${lg.prefix || '/'}"]`).join(', ');
    const homeLink = document.querySelector(homeSelectors) as HTMLAnchorElement;
    const href = getPrefix(l) || '/';
    if (homeLink) {
        if (homeLink.textContent !== t('home', l)) {
            homeLink.textContent = t('home', l);
        }
        if (homeLink.getAttribute('href') !== href) {
            homeLink.setAttribute('href', href);
        }
    }

    // Site title/logo link
    const siteTitle = document.querySelector('.VPNavBarTitle a, .title a') as HTMLAnchorElement;
    if (siteTitle && siteTitle.getAttribute('href') !== href) {
        siteTitle.setAttribute('href', href);
    }
}

watchEffect(() => {
    if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('lang-fr', french.value);
        translate();
        updateCSS();
    }
});

function openMenu(selector: string, active: () => string) {
    const button = document.querySelector(selector) as HTMLElement;
    if (!button) return;

    button.click();

    // Wait for dropdown to render, then focus active item
    setTimeout(() => {
        const link = active();
        const menu = button.closest('.VPFlyout')?.querySelector('.VPMenu');
        if (!menu) return;

        // Find the link matching the current path
        const items = menu.querySelectorAll('a');
        for (const item of items) {
            const h = item.getAttribute('href') || '';
            if (h && link.includes(h.replace(/\/$/, ''))) {
                item.focus();
                return;
            }
        }
        // Fallback: focus first item
        items[0]?.focus();
    }, 50);
}

function onKey(e: KeyboardEvent) {
    // ALT + L: Open language dropdown and focus active language
    if (e.altKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        const langSelector = window.innerWidth >= 1280 ? '.language-switcher-wrapper button' : '.extra-menu button';
        openMenu(langSelector, () => route.path);
    }
    // ALT + V: Open version dropdown and focus active version
    if (e.altKey && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        openMenu('.VPNavBarMenu .VPFlyout button', () => route.path);
    }
    // ALT + T: Toggle theme
    if (e.altKey && e.key.toLowerCase() === 't') {
        e.preventDefault();
        dark.value = !dark.value;
    }
}

function redirectLang() {
    if (route.path !== '/') return;

    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'fr') {
        router.go('/fr');
        return;
    }
    if (savedLang === 'en') return;

    const userLang = navigator.language;
    if (userLang?.toLowerCase().startsWith('fr')) {
        localStorage.setItem('lang', 'fr');
        router.go('/fr');
    } else {
        localStorage.setItem('lang', 'en');
    }
}

onMounted(() => {
    redirectLang();
    translate();
    updateCSS();
    fetchLatest();
    document.addEventListener('keydown', onKey);

    // Observe DOM changes to re-translate when VitePress updates elements
    observer = new MutationObserver(() => translate());

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});

onUnmounted(() => {
    observer?.disconnect();
    document.removeEventListener('keydown', onKey);
});
</script>

<template>
    <Layout>
        <template #nav-bar-content-after>
            <Version />
            <Extra />
            <Lang />
        </template>
        <template #nav-screen-content-after>
            <div class="VPNavScreenAppearance language">
                <p class="text">{{ t('language', lang) }}</p>
                <div class="options">
                    <a v-for="item in languages" :key="item.link" :href="item.link" :class="{ active: item.lang === lang }" @click="saveLang(item.lang)">
                        {{ item.text }}
                    </a>
                </div>
            </div>
        </template>
        <template #home-hero-image v-if="home">
            <Terminal />
        </template>
        <template #not-found>
            <NotFound :lang="lang" />
        </template>
    </Layout>
    <Copy />
</template>