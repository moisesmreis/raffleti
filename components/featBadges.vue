<template>
    <button class="bg-[#333333] text-white text-sm font-body font-medium px-1 py-0.5"><slot></slot></button>
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