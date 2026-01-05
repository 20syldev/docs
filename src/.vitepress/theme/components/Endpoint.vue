<script setup lang="ts">
import Method from './Method.vue';

defineProps<{
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    baseUrl?: string;
}>();
</script>

<template>
    <div class="api-endpoint">
        <Method :type="method" />
        <a
            v-if="baseUrl"
            :href="`${baseUrl}${path}`"
            target="_blank"
            rel="noopener noreferrer"
        >
            {{ path }}
        </a>
        <span v-else class="path">{{ path }}</span>
    </div>
</template>