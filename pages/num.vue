<template>
    <header class="px-6 md:px-12 mb-12">
        <TitlePage content="Números e valores 🧮" />
    </header>
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 md:px-12 gap-6 mb-12">
        <div class="p-6 border rounded-xl shadow-sm">
            <form class="flex flex-col gap-6" action="">
                <Input label="Número inicial" id="initial" type="number" placeholder="Valor mínimo 🏁, de {0} à ...">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Quantidade de resultados" id="end" type="number" placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Número final" id="end" type="number" placeholder="Valor máximo 🔝, até {0}...">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">E o resultado é
                    <FeatBadges content="45" />
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
        <div class="p-6 border rounded-xl shadow-sm">
            <form class="flex flex-col gap-6" action="">
                <Input label="Número inicial" id="initial" type="number" placeholder="Valor mínimo 🏁, de {0} à ...">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Quantidade de resultados" id="end" type="number" placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Número final" id="end" type="number" placeholder="Valor máximo 🔝, até {0}...">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">E o resultado é
                    <FeatBadges content="45" />
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
        <div class="p-6 border rounded-xl shadow-sm">
            <form class="flex flex-col gap-6" action="">
                <Input label="Número inicial" id="initial" type="number" placeholder="Valor mínimo 🏁, de {0} à ...">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Quantidade de resultados" id="end" type="number" placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input label="Número final" id="end" type="number" placeholder="Valor máximo 🔝, até {0}...">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">E o resultado é
                    <FeatBadges content="45" />
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { ArrowSmallDownIcon, MinusIcon, ArrowSmallUpIcon, BoltIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>