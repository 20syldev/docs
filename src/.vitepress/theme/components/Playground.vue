<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

import { useVersion } from '../composables/useVersion';
import { type EndpointDef, endpoints } from '../data/endpoints';
import { t } from '../utils/i18n';
import { bookIcon, searchIcon } from '../utils/icons';
import Panel from './Panel.vue';

const { version, lang } = useVersion();

const query = ref('');
const open = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const panelRef = ref<InstanceType<typeof Panel> | null>(null);

const selected = ref<EndpointDef | null>(null);

const documentation = computed(() => {
    if (!selected.value) return null;
    return `/${version.value}/${lang.value}${selected.value.doc ?? selected.value.path}`;
});

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
    <div class="pg">
        <div ref="dropdownRef" class="pg-search">
            <div v-if="!open" class="pg-search-bar">
                <button class="pg-search-trigger" @click="toggleSearch">
                    <span v-html="searchIcon" />
                    <span v-if="selected" class="pg-search-selected">
                        <span :class="['method-badge', selected.method]">{{ selected.method.toUpperCase() }}</span>
                        {{ selected.name }}
                    </span>
                    <span v-else class="pg-search-placeholder">{{ t('playground.selectEndpoint', lang) }}</span>
                </button>
                <a
                    v-if="documentation"
                    :href="documentation"
                    class="pg-doc-link"
                    :title="t('playground.viewDocs', lang)"
                >
                    <span v-html="bookIcon" />
                </a>
            </div>
            <div v-if="open" class="pg-search-input-wrap">
                <span v-html="searchIcon" />
                <input
                    ref="inputRef"
                    v-model="query"
                    class="pg-search-input"
                    :placeholder="t('playground.selectEndpoint', lang)"
                    @keydown.escape="open = false"
                />
            </div>
            <div v-if="open" class="pg-dropdown">
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
                            <span :class="['method-badge pg-dropdown-method', ep.method]">{{
                                ep.method.toUpperCase()
                            }}</span>
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
