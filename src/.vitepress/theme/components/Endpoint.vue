<script setup lang="ts">
import { computed } from 'vue';
import Method from './Method.vue';
import { useVersion } from '../composables/useVersion';
import { API_BASE_URL } from '../utils/redirect';

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
    <div class="api-endpoint">
        <Method :type="method" />
        <a :href="`${baseUrl}${fullPath}`" target="_blank" rel="noopener noreferrer">
            {{ fullPath }}
        </a>
    </div>
</template>
