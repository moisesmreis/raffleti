<template>
  <button
    class="group max-w-fit font-body flex flex-row gap-3 items-center justify-center content-center text-[#333333] bg-transparent hover:text-white border border-[#333333] hover:bg-[#333333] font-medium text-sm px-2.5 py-[5px] z-10 relative">
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