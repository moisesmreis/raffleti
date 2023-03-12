<template>
    <button class="bg-neutral-100 border-neutral-200 border text-xs font-normal px-2.5 py-0.5 font-body">{{ content }}</button>
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