<script setup lang="ts">
import { computed } from 'vue';

import { useVersion } from '../composables/useVersion';
import { API_BASE_URL } from '../utils/redirect';
import Method from './Method.vue';

const props = withDefaults(
    defineProps<{
        method: 'get' | 'post' | 'put' | 'delete' | 'patch';
        path: string;
        baseUrl?: string;
    }>(),
    {
        baseUrl: API_BASE_URL,
    },
);

const { versionedPath } = useVersion();
const fullPath = computed(() => versionedPath(props.path));
</script>

<template>
    <div class="api-endpoint font-mono inline-flex items-center text-[13px] my-3 gap-2.5">
        <Method :type="method" />
        <a :href="`${baseUrl}${fullPath}`" target="_blank" rel="noopener noreferrer">
            {{ fullPath }}
        </a>
    </div>
</template>
