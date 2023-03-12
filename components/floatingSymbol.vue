<template>
    <span
        class="z-0 text-6xl text-[#ff0000] blur-lg font-black font-head opacity-100 absolute">{{ symbol }}</span>
</template>

<script lang="ts">
export default {
    props: {
        symbol: {
            type: String,
        }
    }
};
</script> 