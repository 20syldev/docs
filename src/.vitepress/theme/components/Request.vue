<script setup lang="ts">
import Method from './Method.vue';

defineProps<{
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
    title?: string;
}>();
</script>

<template>
    <div class="request-block">
        <div v-if="title || method" class="request-block-header">
            <Method v-if="method" :type="method" />
            <span v-if="title" class="title">{{ title }}</span>
        </div>
        <div class="request-block-content">
            <slot></slot>
        </div>
    </div>
</template>