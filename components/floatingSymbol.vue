<template>
    <span
        class="z-0 text-6xl text-[#6E57B2] blur-xl font-black font-head opacity-100 absolute">{{ symbol }}</span>
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