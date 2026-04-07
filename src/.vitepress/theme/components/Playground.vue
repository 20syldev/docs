<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { t } from '../utils/i18n';
import { useVersion } from '../composables/useVersion';
import { endpoints, type EndpointDef } from '../data/endpoints';
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
    return endpoints.filter(ep =>
        ep.name.toLowerCase().includes(q) ||
        ep.path.toLowerCase().includes(q) ||
        ep.method.includes(q)
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
    <div class="pg">
        <div class="pg-search" ref="dropdownRef">
            <button class="pg-search-trigger" @click="toggleSearch" v-if="!open">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span v-if="selected" class="pg-search-selected">
                    <span :class="['method-badge', selected.method]">{{ selected.method.toUpperCase() }}</span>
                    {{ selected.name }}
                </span>
                <span v-else class="pg-search-placeholder">{{ t('selectEndpoint', lang) }}</span>
            </button>
            <div class="pg-search-input-wrap" v-if="open">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                    ref="inputRef"
                    v-model="query"
                    class="pg-search-input"
                    :placeholder="t('selectEndpoint', lang)"
                    @keydown.escape="open = false"
                />
            </div>
            <div class="pg-dropdown" v-if="open">
                <template v-if="filtered.length">
                    <div v-for="(eps, group) in filteredGroups" :key="group" class="pg-dropdown-group">
                        <div class="pg-dropdown-label">{{ group }}</div>
                        <button
                            v-for="ep in eps"
                            :key="ep.name"
                            class="pg-dropdown-item"
                            :class="{ active: selected?.name === ep.name }"
                            @click="pick(ep)"
                        >
                            <span :class="['method-badge pg-dropdown-method', ep.method]">{{ ep.method.toUpperCase() }}</span>
                            <span class="pg-dropdown-path">{{ ep.path }}</span>
                            <span class="pg-dropdown-name">{{ ep.name }}</span>
                        </button>
                    </div>
                </template>
                <div v-else class="pg-dropdown-empty">No results</div>
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
