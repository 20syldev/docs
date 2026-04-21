<script setup lang="ts">
import Method from './Method.vue';

defineProps<{
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
    title?: string;
}>();
</script>

<template>
    <div class="border border-divider bg-soft overflow-hidden rounded-lg">
        <div v-if="title || method" class="border-b border-divider bg-mute flex items-center gap-2.5 py-2.5 px-4 font-mono text-[13px] flex-wrap">
            <Method v-if="method" :type="method" />
            <span v-if="title" class="text-body font-medium">{{ title }}</span>
        </div>
        <div class="request-block-content p-4">
            <slot></slot>
        </div>
    </div>
</template>
