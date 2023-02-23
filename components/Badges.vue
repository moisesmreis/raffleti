<template>
    <button class="bg-neutral-100 border-neutral-200 border text-xs font-normal px-2.5 py-0.5 rounded-full dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-600">{{ content }}</button>
</template>
  
<script lang="ts">
export default {
    props: {
        content: {
            type: String,
        }
    }
};
</script> 