<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vitepress';
import { getLang, t } from '../i18n';
import { copyIcon, checkIcon } from '../icons';

const route = useRoute();
let observer: MutationObserver | null = null;
let injecting = false;

function injectButtons() {
    const lang = getLang(route.path);

    for (const pre of document.querySelectorAll('div[class*="language-"] > pre')) {
        const block = pre.parentElement!;
        if (block.querySelector('.copy-btn')) continue;

        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.setAttribute('title', t('copyCode', lang));
        btn.innerHTML = `${copyIcon}${checkIcon}`;

        let timeout = 0;
        btn.addEventListener('click', () => {
            const code = block.querySelector('pre code');
            if (!code) return;

            navigator.clipboard.writeText(code.textContent || '');
            btn.classList.add('copied');
            clearTimeout(timeout);
            timeout = window.setTimeout(() => btn.classList.remove('copied'), 2000);
        });

        block.appendChild(btn);
    }
}

onMounted(() => {
    injectButtons();
    observer = new MutationObserver(() => {
        if (injecting) return;
        injecting = true;
        injectButtons();
        injecting = false;
    });
    observer.observe(document.body, { childList: true, subtree: true });
});

onUnmounted(() => observer?.disconnect());
</script>
