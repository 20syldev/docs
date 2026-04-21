<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

import { useVersion } from '../composables/useVersion';
import { type EndpointDef, endpoints } from '../data/endpoints';
import { t } from '../utils/i18n';
import Panel from './Panel.vue';

const { lang } = useVersion();

const query = ref('');
const open = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const panelRef = ref<InstanceType<typeof Panel> | null>(null);

const selected = ref<EndpointDef | null>(null);

const filtered = computed(() => {
    const q = query.value.toLowerCase().trim();
    if (!q) return endpoints;
    return endpoints.filter(
        (ep) => ep.name.toLowerCase().includes(q) || ep.path.toLowerCase().includes(q) || ep.method.includes(q),
    );
});

const filteredGroups = computed(() => {
    const map: Record<string, EndpointDef[]> = {};
    for (const ep of filtered.value) {
        if (!map[ep.group]) map[ep.group] = [];
        map[ep.group].push(ep);
    }
    return map;
});

function pick(ep: EndpointDef) {
    selected.value = ep;
    query.value = '';
    open.value = false;
    panelRef.value?.resetState();
}

function toggleSearch(e: Event) {
    e.stopPropagation();
    if (open.value) {
        open.value = false;
    } else {
        open.value = true;
        query.value = '';
        setTimeout(() => inputRef.value?.focus(), 10);
    }
}

function onClickOutside(e: MouseEvent) {
    if (open.value && dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        open.value = false;
    }
}

onMounted(() => document.addEventListener('click', onClickOutside, true));
onUnmounted(() => document.removeEventListener('click', onClickOutside, true));
</script>

<template>
    <div class="flex flex-col gap-3">
        <div ref="dropdownRef" class="relative">
            <button
                v-if="!open"
                class="pg-search-trigger bg-surface text-body flex items-center text-left cursor-pointer gap-2.5 w-full text-sm px-4 py-1.5 rounded-lg focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                @click="toggleSearch"
            >
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
                    class="text-faint shrink-0"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span v-if="selected" class="flex items-center gap-2">
                    <span
                        class="method-badge font-mono border border-transparent uppercase transition-all duration-200 ease-in-out inline-flex justify-center items-center leading-none text-[11px] font-bold py-[5px] px-[10px] rounded-[5px] tracking-[0.5px]"
                        :class="[selected.method]"
                    >{{ selected.method.toUpperCase() }}</span>
                    {{ selected.name }}
                </span>
                <span v-else class="text-faint">{{ t('playground.selectEndpoint', lang) }}</span>
            </button>

            <div
                v-if="open"
                class="border border-brand bg-surface flex items-center gap-2.5 px-4 py-1.5 rounded-t-lg"
            >
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
                    class="text-faint shrink-0"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    ref="inputRef"
                    v-model="query"
                    class="text-body bg-transparent outline-none border-none flex-1 text-sm placeholder:text-faint"
                    :placeholder="t('playground.selectEndpoint', lang)"
                    @keydown.escape="open = false"
                />
            </div>

            <div
                v-if="open"
                class="bg-surface border border-brand shadow-[0_12px_32px_#00000026] absolute border-t-0 overflow-y-auto top-full left-0 right-0 z-[100] max-h-[260px] vp:max-h-[320px] rounded-b-lg"
            >
                <template v-if="filtered.length">
                    <div
                        v-for="(eps, group) in filteredGroups"
                        :key="group"
                        class="pg-dropdown-group py-1"
                    >
                        <div
                            class="text-faint uppercase tracking-[0.04em] px-4 pb-1 pt-1.5 font-semibold text-[11px]"
                        >
                            {{ group }}
                        </div>
                        <button
                            v-for="ep in eps"
                            :key="ep.name"
                            class="pg-dropdown-item text-body transition-all duration-100 flex items-center bg-transparent text-left cursor-pointer border-none gap-2.5 w-full text-[13px] px-4 py-2 hover:bg-soft focus-visible:outline-2 focus-visible:outline-brand focus-visible:-outline-offset-2"
                            :class="{ active: selected?.name === ep.name }"
                            @click="pick(ep)"
                        >
                            <span
                                class="method-badge font-mono border border-transparent uppercase transition-all duration-200 ease-in-out inline-flex justify-center items-center leading-none text-[11px] font-bold py-[5px] px-[10px] rounded-[5px] tracking-[0.5px] text-center min-w-[40px]"
                                :class="[ep.method]"
                            >{{ ep.method.toUpperCase() }}</span>
                            <span class="font-mono text-muted text-xs">{{ ep.path }}</span>
                            <span class="text-faint ml-auto text-xs">{{ ep.name }}</span>
                        </button>
                    </div>
                </template>
                <div v-else class="text-faint text-center text-[13px] p-4">No results</div>
            </div>
        </div>

        <Panel
            v-if="selected"
            ref="panelRef"
            :method="selected.method"
            :path="selected.path"
            :params="selected.params"
            show-code
        />
    </div>
</template>
