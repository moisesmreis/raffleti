<template>
  <button class="font-body font-medium flex flex-row gap-4 justify-start content-center items-center text-sm underline">
    <slot></slot>
    <span>/{{ content }}</span>
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