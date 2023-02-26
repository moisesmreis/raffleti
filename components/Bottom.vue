<template>
    <footer class="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12">
        <div class="flex flex-col gap-4 md:flex-row md:gap-6 py-6 justify-start">
            <TextButton content="Portfolio">
                <ArrowLongRightIcon class="w-4 h-4 text-black" />
            </TextButton>
            <TextButton content="GitHub">
                <ArrowLongRightIcon class="w-4 h-4 text-black" />
            </TextButton>
            <TextButton content="Twitter">
                <ArrowLongRightIcon class="w-4 h-4 text-black" />
            </TextButton>
            <TextButton content="Linkedin">
                <ArrowLongRightIcon class="w-4 h-4 text-black" />
            </TextButton>
        </div>
        <div class="py-6 flex justify-start md:justify-end">
            <span class="font-body text-sm underline">Copyright © 2023 La Monhang.</span>
        </div>
    </footer>
</template>

<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
</script>