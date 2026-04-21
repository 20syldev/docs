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
    <span
        class="method-badge font-mono border border-transparent uppercase transition-all duration-200 ease-in-out inline-flex justify-center items-center leading-none text-[11px] font-bold"
        :class="[type, sm ? 'align-top tracking-[0.3px] rounded-[3px] py-1 px-2' : 'tracking-[0.5px] py-[5px] px-[10px] rounded-[5px]']"
    >
        {{ type.toUpperCase() }}
    </span>
</template>
