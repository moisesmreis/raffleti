<template>
    <header class="grid grid-cols-2 px-6 md:px-12 mb-6">
        <div class="flex flex-row justify-start items-center content-center py-6 gap-6">
            <NuxtLink to="/">
                <LogoIcon />
            </NuxtLink>
        </div>
        <div class="flex flex-row justify-end items-center content-center py-6 gap-6">
            <MainButton class="hidden md:flex text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-900 border-purple-400" content="Voltar">
                <ArrowLeftIcon class="w-4 h-4 text-white" />
            </MainButton>
            <MainIcon class="flex md:hidden bg-purple-700 hover:bg-purple-800 active:bg-purple-900">
                <ArrowLeftIcon class="w-5 h-5 text-white" />
            </MainIcon>
            <MainButton class="hidden md:flex" content="Docs">
                <ArrowUpRightIcon class="w-4 h-4 text-black" />
            </MainButton>
            <MainButton class="hidden md:flex" content="Portfolio">
                <ArrowUpRightIcon class="w-4 h-4 text-black" />
            </MainButton>
            <MainButton class="hidden md:flex" content="Contato">
                <ArrowUpRightIcon class="w-4 h-4 text-black" />
            </MainButton>
            <MainIcon>
                <SunIcon class="w-5 h-5 text-black" />
            </MainIcon>
        </div>
    </header>
</template>

<script setup>
import { ArrowLeftIcon, ArrowUpRightIcon, SunIcon } from '@heroicons/vue/24/outline'
</script>