<template>
    <!-- <header class="px-6 md:px-12 mb-12">
        <TitlePage content="Números e valores 🧮" />
    </header> -->
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 md:px-12 gap-6 mb-12">
        <div class="p-6 border">
            <form class="flex flex-col gap-6" id="range-form">
                <p class="text-sm font-body font-light">Gere rapidamente uma lista de números aleatórios entre um <b
                        class="underline font-bold text-[#333333]">{valor inicial}</b> e um <b
                        class="underline font-bold text-[#333333]">{número final}</b>, com uma <b
                        class="underline font-bold text-[#333333]">{quantidade de números}</b> gerados especificada</p>
                <Input helper="Insira o valor mínimo que pode ser retornado" label="Número inicial" type="number"
                    placeholder="Valor mínimo 🏁, de {0} à ...">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input helper="Quantidade de valores desejada" label="Quantidade de resultados" type="number"
                    placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input helper="Insira o valor máximo que pode ser retornado" label="Número final" type="number"
                    placeholder="Valor máximo 🔝, até {0}...">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">Os resultados são
                    <FeatBadges>
                        <ul class="flex flex-row gap-1">
                            <li class="after:content-[','] last:after:content-['']">5</li>
                        </ul>
                    </FeatBadges>
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
        <div class="p-6 border">
            <form class="flex flex-col gap-6" id="basic-form">
                <p class="text-sm font-body font-light">Gere rapidamente uma lista de números aleatórios entre <b
                        class="underline font-bold text-[#333333]">{-999999999}</b> e <b
                        class="underline font-bold text-[#333333]">{999999999}</b>, com uma <b
                        class="underline font-bold text-[#333333]">{quantidade de números}</b> gerados especificada</p>
                <Input class="pointer-events-none opacity-80" helper="Este valor é imutável" label="Número inicial"
                    id="initial" type="number" placeholder="-999999999">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input helper="Quantidade de valores desejada" label="Quantidade de resultados" id="end" type="number"
                    placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input class="pointer-events-none opacity-80" helper="Este valor é imutável" label="Número final" id="end"
                    type="number" placeholder="999999999">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">E o resultado é
                    <FeatBadges content="-85" />
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
        <div class="p-6 border">
            <form class="flex flex-col gap-6" id="range-form">
                <p class="text-sm font-body font-light">Com essa ferramenta, você pode gerar um <b
                        class="underline font-bold text-[#333333]">{número irracional aleatório}</b> entre 0 e 1 usando um
                    algoritmo matemático para criar problemas de matemática</p>
                <Input class="pointer-events-none opacity-80" helper="Este valor é imutável" label="Número inicial"
                    id="initial" type="number" placeholder="0">
                <ArrowSmallDownIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input helper="Quantidade de valores desejada" label="Quantidade de resultados" id="end" type="number"
                    placeholder="Quantidade de números 🔢, 5 resultados...">
                <MinusIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <Input class="pointer-events-none opacity-80" helper="Este valor é imutável" label="Número final"
                    id="initial" type="number" placeholder="1">
                <ArrowSmallUpIcon class="w-4 h-4 text-neutral-600" />
                </Input>
                <span class="underline font-body text-sm font-medium mb-2">E o resultado é
                    <FeatBadges content="3,142" />
                    ✨🎇🎉
                </span>
                <div class="flex flex-row gap-6">
                    <MainButton type="submit" content="Gerar">
                        <BoltIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                    <MainButton content="Repetir">
                        <ArrowPathIcon class="group-hover:text-white w-4 h-4 text-black" />
                    </MainButton>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ArrowSmallDownIcon, MinusIcon, ArrowSmallUpIcon, BoltIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>