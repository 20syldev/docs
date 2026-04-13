<script setup lang="ts">
withDefaults(
    defineProps<{
        type: 'get' | 'post' | 'put' | 'delete' | 'patch';
        sm?: boolean;
    }>(),
    { sm: false },
);
</script>

<template>
    <span class="method-badge" :class="[type, { sm }]">
        {{ type.toUpperCase() }}
    </span>
</template>
