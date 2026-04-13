<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import { CODE_LANG_LABELS, CODE_LANGS, type CodeLang, generateSnippet } from '../composables/useCodeSnippets';
import { useVersion } from '../composables/useVersion';
import type { EndpointParam } from '../data/endpoints';
import { t } from '../utils/i18n';
import { API_BASE_URL } from '../utils/redirect';

const props = withDefaults(
    defineProps<{
        method: 'get' | 'post';
        path: string;
        baseUrl?: string;
        params: EndpointParam[];
        showCode?: boolean;
    }>(),
    {
        baseUrl: API_BASE_URL,
        showCode: false,
    },
);

const { lang, versionedPath } = useVersion();
const fullPath = computed(() => versionedPath(props.path));

const values = ref<Record<string, string>>({});
const codeLang = ref<CodeLang>('curl');
const loading = ref(false);
const response = ref<string | null>(null);
const statusCode = ref<number | null>(null);
const duration = ref<number | null>(null);

watch(
    () => props.params,
    (params) => {
        values.value = Object.fromEntries(params.map((p) => [p.name, p.default ?? '']));
    },
    { immediate: true, deep: true },
);

const filledEntries = computed(() =>
    props.params.filter((p) => values.value[p.name]).map((p) => [p.name, values.value[p.name]] as [string, string]),
);

const bodyObject = computed<Record<string, string>>(() =>
    props.method === 'post' ? Object.fromEntries(filledEntries.value) : {},
);

const fullUrl = computed(() => {
    const base = `${props.baseUrl}${fullPath.value}`;
    if (props.method === 'get' && filledEntries.value.length) {
        return `${base}?${new URLSearchParams(filledEntries.value).toString()}`;
    }
    return base;
});

const code = computed(() =>
    generateSnippet(codeLang.value, {
        method: props.method,
        url: fullUrl.value,
        body: bodyObject.value,
    }),
);

function resetState() {
    response.value = null;
    statusCode.value = null;
    duration.value = null;
}

async function send() {
    loading.value = true;
    resetState();
    const start = performance.now();
    try {
        const opts: RequestInit = { method: props.method.toUpperCase() };
        if (props.method === 'post' && filledEntries.value.length) {
            opts.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
            opts.body = new URLSearchParams(filledEntries.value).toString();
        }
        const res = await fetch(fullUrl.value, opts);
        duration.value = Math.round(performance.now() - start);
        statusCode.value = res.status;
        const ct = res.headers.get('content-type') || '';
        response.value = ct.includes('json') ? JSON.stringify(await res.json(), null, 2) : await res.text();
    } catch {
        duration.value = Math.round(performance.now() - start);
        statusCode.value = 0;
        response.value = '{\n  "error": "Network error"\n}';
    } finally {
        loading.value = false;
    }
}

defineExpose({ resetState });
</script>

<template>
    <div class="panel panel">
        <div class="panel-header">
            <span :class="['method-badge', method]">{{ method.toUpperCase() }}</span>
            <code class="panel-url panel-path">{{ fullUrl }}</code>
            <button class="action-btn panel-send" :disabled="loading" @click="send">
                {{ loading ? '...' : t('playground.send', lang) }}
            </button>
        </div>

        <div v-if="params.length" class="panel-params">
            <div v-for="p in params" :key="p.name" class="api-field">
                <label>{{ p.name }}<span v-if="p.required" class="required-mark">*</span></label>
                <select v-if="p.options" v-model="values[p.name]">
                    <option value="" disabled>{{ t('playground.select', lang) }}</option>
                    <option v-for="opt in p.options" :key="opt" :value="opt">{{ opt }}</option>
                </select>
                <input v-else v-model="values[p.name]" :placeholder="p.name" type="text" @keydown.enter="send" />
            </div>
        </div>

        <div v-if="showCode" class="panel-section">
            <div class="tab-bar">
                <button
                    v-for="l in CODE_LANGS"
                    :key="l"
                    :class="['tab-item', { active: codeLang === l }]"
                    @click="codeLang = l"
                >
                    {{ CODE_LANG_LABELS[l] }}
                </button>
            </div>
            <pre class="code-output panel-code-block">{{ code }}</pre>
        </div>

        <div v-if="response !== null || loading" class="panel-section">
            <div class="panel-response-bar">
                <span>{{ t('playground.response', lang) }}</span>
                <div v-if="statusCode !== null" class="panel-meta">
                    <span :class="['status-badge', statusCode < 300 ? 'ok' : statusCode < 500 ? 'warn' : 'err']">{{
                        statusCode || 'ERR'
                    }}</span>
                    <span v-if="duration !== null" class="panel-duration">{{ duration }}ms</span>
                </div>
            </div>
            <div v-if="loading" class="panel-dots"><span></span><span></span><span></span></div>
            <pre v-else class="code-output panel-output">{{ response }}</pre>
        </div>
    </div>
</template>
