<script setup lang="ts">
defineProps<{
    type: 'get' | 'post' | 'put' | 'delete' | 'patch';
}>();
</script>

<template>
    <span class="method-badge" :class="type">
        {{ type.toUpperCase() }}
    </span>
</template>
