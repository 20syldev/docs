<script setup lang="ts">
import Panel from './Panel.vue';
import { API_BASE_URL } from '../utils/redirect';
import type { EndpointParam } from '../data/endpoints';

withDefaults(defineProps<{
    method: 'get' | 'post';
    path: string;
    baseUrl?: string;
    params?: EndpointParam[];
}>(), {
    baseUrl: API_BASE_URL,
    params: () => [],
});
</script>

<template>
    <div class="try">
        <Panel :method="method" :path="path" :base-url="baseUrl" :params="params" />
    </div>
</template>
