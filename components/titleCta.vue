<template>
    <h1 class="text-4xl lg:text-5xl leading-snug font-black font-body">{{ content }}</h1>
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