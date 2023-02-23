<template>
    <header class="grid grid-cols-2 px-12 mb-6">
        <div class="flex flex-row justify-start items-center content-center py-6 gap-6">
            <LogoIcon />
        </div>
        <div class="flex flex-row justify-end items-center content-center py-6 gap-6">
            <MainButton content="Documentação">
                <DocumentTextIcon class="w-4 h-4" />
            </MainButton>
            <MainButton content="Dark">
                <MoonIcon class="w-4 h-4" />
            </MainButton>
        </div>
    </header>
</template>

<script setup>
import { MoonIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
</script>