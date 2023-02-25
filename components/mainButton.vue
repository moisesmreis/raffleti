<template>
  <button
    class="max-w-fit font-body flex flex-row gap-3 items-center justify-center content-center text-neutral-900 bg-neutral-50 active:bg-neutral-200 border border-neutral-200 hover:bg-neutral-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 z-10 relative">
    <span>{{ content }}</span>
    <slot></slot>
  </button>
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