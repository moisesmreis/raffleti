<template>
    <div
        class="rounded-lg shadow-sm p-6 flex flex-col gap-2 text-neutral-900 cursor-pointer border bg-neutral-50 border-neutral-200 focus:outline-none hover:bg-neutral-100 font-medium text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600">
        <h2 class="text-base font-medium underline lowercase font-body">{{ title }}</h2>
        <p class="font-body lowercase font-light text-base">{{ text }}</p>
        <div class="flex flex-row justify-start gap-2">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        }
    }
};
</script> 