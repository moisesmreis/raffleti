<template>
  <button class="font-body font-medium flex flex-row gap-1 justify-start content-center items-center text-sm underline">
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