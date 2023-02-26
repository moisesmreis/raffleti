<template>
    <button class="bg-purple-100 text-purple-800 text-sm font-body font-medium px-1 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"><slot></slot></button>
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