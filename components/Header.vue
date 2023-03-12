<template>
    <header class="grid grid-cols-2 px-6 md:px-12 mb-6">
        <div class="flex flex-row justify-start items-center content-center py-6 gap-6">
            <NuxtLink to="/">
                <LogoIcon />
            </NuxtLink>
        </div>
        <div class="flex flex-row justify-end items-center content-center py-6 gap-6">
            <MainButton class="hidden md:flex" content="Voltar">
                <ArrowLeftIcon class="w-4 h-4 text-[#333333] group-hover:text-white" />
            </MainButton>
            <MainIcon class="flex md:hidden">
                <ArrowLeftIcon class="w-5 h-5 text-white" />
            </MainIcon>
            <MainButton class="hidden md:flex" content="Docs">
                <ArrowUpRightIcon class="w-4 h-4 text-[#333333] group-hover:text-white" />
            </MainButton>
            <MainButton class="hidden md:flex" content="Portfolio">
                <ArrowUpRightIcon class="w-4 h-4 text-[#333333] group-hover:text-white" />
            </MainButton>
            <MainButton class="hidden md:flex" content="Contato">
                <ArrowUpRightIcon class="w-4 h-4 text-[#333333] group-hover:text-white" />
            </MainButton>
        </div>
    </header>
</template>

<script setup>
import { ArrowLeftIcon, ArrowUpRightIcon, SunIcon } from '@heroicons/vue/24/outline'
</script>