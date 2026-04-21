<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import { CODE_LANG_LABELS, CODE_LANGS, type CodeLang, generateSnippet } from '../composables/useCodeSnippets';
import { useVersion } from '../composables/useVersion';
import type { EndpointParam } from '../data/endpoints';
import { t } from '../utils/i18n';
import { API_BASE_URL } from '../utils/redirect';

const props = withDefaults(
    defineProps<{
        method: 'get' | 'post' | 'patch' | 'delete';
        path: string;
        baseUrl?: string;
        params: EndpointParam[];
        showCode?: boolean;
        autoSend?: boolean;
        noVersion?: boolean;
    }>(),
    {
        baseUrl: API_BASE_URL,
        showCode: false,
        autoSend: false,
        noVersion: false,
    },
);

const { lang, versionedPath } = useVersion();
const fullPath = computed(() => (props.noVersion ? props.path : versionedPath(props.path)));

const values = ref<Record<string, string>>({});
const codeLang = ref<CodeLang>('curl');
const loading = ref(false);
const response = ref<string | null>(null);
const image = ref<string | null>(null);
const status = ref<number | null>(null);
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

const canSend = computed(() => props.params.filter((p) => p.required).every((p) => !!values.value[p.name]));

const bodyObject = computed<Record<string, string>>(() =>
    props.method !== 'get' ? Object.fromEntries(filledEntries.value) : {},
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
    if (image.value) URL.revokeObjectURL(image.value);
    image.value = null;
    status.value = null;
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
        } else if ((props.method === 'patch' || props.method === 'delete') && filledEntries.value.length) {
            opts.headers = { 'Content-Type': 'application/json' };
            opts.body = JSON.stringify(Object.fromEntries(filledEntries.value));
        }
        const res = await fetch(fullUrl.value, opts);
        duration.value = Math.round(performance.now() - start);
        status.value = res.status;
        const ct = res.headers.get('content-type') || '';
        if (ct.startsWith('image/')) {
            image.value = URL.createObjectURL(await res.blob());
        } else {
            response.value = ct.includes('json') ? JSON.stringify(await res.json(), null, 2) : await res.text();
        }
    } catch {
        duration.value = Math.round(performance.now() - start);
        status.value = 0;
        response.value = '{\n  "error": "Network error"\n}';
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    if (props.autoSend) send();
});

defineExpose({ resetState });
</script>

<template>
    <div class="border border-divider bg-soft overflow-hidden rounded-lg">
        <div class="bg-surface flex items-center gap-x-2.5 gap-y-2 py-2.5 px-4 flex-wrap vp:flex-nowrap vp:gap-y-0">
            <span
                class="method-badge font-mono border border-transparent uppercase transition-all duration-200 ease-in-out inline-flex justify-center items-center leading-none font-bold text-[12px] py-[5px] px-[10px] rounded-[5px] tracking-[0.5px] shrink-0 order-1 vp:order-none"
                :class="[method]"
            >{{ method.toUpperCase() }}</span>
            <code class="font-mono text-muted break-all leading-[1.2] text-[13px] w-full order-3 vp:order-none vp:w-auto vp:flex-1">{{ fullUrl }}</code>
            <button
                class="!bg-brand !text-white !py-1 !px-5 !leading-none transition-opacity duration-200 cursor-pointer border-none text-sm font-semibold rounded-[4px] shrink-0 order-2 ml-auto vp:order-none vp:ml-0 [&:hover:not(:disabled)]:opacity-85 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="loading || !canSend"
                @click="send"
            >
                {{ loading ? '...' : t('playground.send', lang) }}
            </button>
        </div>

        <div v-if="params.length" class="border-t border-divider flex flex-col gap-3 py-3 px-4 vp:flex-row vp:flex-wrap">
            <div v-for="p in params" :key="p.name" class="flex flex-col gap-1 flex-1 min-w-0 leading-none vp:min-w-[160px]">
                <label class="text-muted font-semibold text-[13px]">{{ p.name }}<span v-if="p.required" class="text-danger">*</span></label>
                <select
                    v-if="p.options"
                    v-model="values[p.name]"
                    class="text-body bg-surface font-mono !border !border-divider transition-[border-color] duration-200 outline-none h-[26px] !px-2.5 text-[13px] rounded-md focus:!border-brand"
                >
                    <option value="" disabled>{{ t('playground.select', lang) }}</option>
                    <option v-for="opt in p.options" :key="opt" :value="opt">{{ opt }}</option>
                </select>
                <input
                    v-else
                    v-model="values[p.name]"
                    :placeholder="p.name"
                    type="text"
                    class="text-body !bg-surface font-mono !border !border-divider transition-[border-color] duration-200 outline-none h-[26px] !px-2.5 text-[13px] rounded-md focus:!border-brand"
                    @keydown.enter="send"
                />
            </div>
        </div>

        <div v-if="showCode" class="border-t border-divider">
            <div class="border-b border-divider bg-surface flex px-2">
                <button
                    v-for="l in CODE_LANGS"
                    :key="l"
                    :class="['tab-item', { active: codeLang === l }]"
                    class="px-3.5 py-2 text-faint bg-transparent transition-colors duration-200 relative cursor-pointer border-none text-xs font-medium"
                    @click="codeLang = l"
                >
                    {{ CODE_LANG_LABELS[l] }}
                </button>
            </div>
            <pre class="bg-codeblock font-mono text-body overflow-x-auto leading-[1.6] text-[13px] m-0 whitespace-pre-wrap px-4 py-3.5">{{ code }}</pre>
        </div>

        <div v-if="response !== null || image !== null || loading" class="border-t border-divider">
            <div class="flex justify-between items-center text-muted bg-surface border-b border-divider text-[13px] font-semibold px-4 py-2">
                <span>{{ t('playground.response', lang) }}</span>
                <div v-if="status !== null" class="flex items-center gap-2.5">
                    <span
                        class="status-badge font-mono inline-flex justify-center items-center rounded-[4px] font-bold px-2 h-5"
                        :class="[status < 300 ? 'ok' : status < 500 ? 'warn' : 'err']"
                    >{{ status || 'ERR' }}</span>
                    <span v-if="duration !== null" class="font-mono text-faint text-xs"
                        >{{ duration }}ms</span
                    >
                </div>
            </div>
            <div v-if="loading" class="panel-dots flex justify-center p-5 gap-1.5">
                <span class="bg-brand rounded-full h-[7px] w-[7px]"></span>
                <span class="bg-brand rounded-full h-[7px] w-[7px]"></span>
                <span class="bg-brand rounded-full h-[7px] w-[7px]"></span>
            </div>
            <img v-else-if="image" :src="image" alt="Response image" class="my-4 mx-auto block max-w-full max-h-[350px]" />
            <pre v-else class="bg-codeblock font-mono text-body overflow-x-auto leading-[1.6] text-[13px] p-4 m-0 overflow-y-auto max-h-[350px]">{{ response }}</pre>
        </div>
    </div>
</template>
