<template>
    <h1 class="text-3xl leading-snug font-medium font-head underline decoration-2 lowercase">{{ content }}</h1>
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