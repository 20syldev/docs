<script setup lang="ts">
import type { EndpointParam } from '../data/endpoints';
import { API_BASE_URL } from '../utils/redirect';
import Panel from './Panel.vue';

withDefaults(
    defineProps<{
        method: 'get' | 'post';
        path: string;
        baseUrl?: string;
        params?: EndpointParam[];
        autoSend?: boolean;
        noVersion?: boolean;
    }>(),
    {
        baseUrl: API_BASE_URL,
        params: () => [],
        autoSend: false,
        noVersion: false,
    },
);
</script>

<template>
    <div class="try">
        <Panel
            :method="method"
            :path="path"
            :base-url="baseUrl"
            :params="params"
            :auto-send="autoSend"
            :no-version="noVersion"
        />
    </div>
</template>
