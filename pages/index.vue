<template>
    <section class="relative px-6 md:px-12 mb-12">
        <TitleCta class="relative z-10 mb-6"
            content="Sorteie números, letras ou nomes aleatórios facilmente com nosso aplicativo intuitivo e rápido!" />
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-6 md:px-12 mb-12 gap-6">
        <NuxtLink to="/num">
            <MainCard title="Números e valores 🧮"
                text="Experimente a sorte! Clique aqui para gerar números e valores aleatórios e descobrir o que o destino tem reservado para você">
                <Badges content="Inteiros" />
                <Badges content="Irracionais" />
                <Badges content="De 0 à n" />
            </MainCard>
        </NuxtLink>
        <NuxtLink to="/letters">
            <MainCard title="Letras 🔤"
                text="Vamos jogar Adedonha? Clique aqui para gerar letras aleatórias e testar seus conhecimentos nesse clássico jogo de palavras">
                <Badges content="Alfabeto" />
                <Badges content="De A à n" />
            </MainCard>
        </NuxtLink>
        <MainCard title="Nomes 👶🏽"
            text="Não sabe como chamar o novo membro da família? Clique aqui para gerar nomes aleatórios para inspirar sua escolha">
            <Badges content="Bebês" />
            <Badges content="Masculino" />
            <Badges content="Feminino" />
            <Badges content="Pets" />
        </MainCard>
        <MainCard title="RPG 🧌"
            text="É um mestre de mesa ou um jogador e precisa de um bom nome para um de seus personagens, cidades ou armas lendárias? Voilá">
            <Badges content="Personagens" />
            <Badges content="Cidades" />
            <Badges content="Armas" />
            <Badges content="Monstros" />
        </MainCard>
        <MainCard title="Universo 🪐"
            text="Explore o universo com esse gerador de nomes de planetas, estrelas e corpos celestiais e divirta-se com os resultados">
            <Badges content="Planetas" />
            <Badges content="Estrelas" />
            <Badges content="Galáxias" />
        </MainCard>
        <MainCard title="CPF 🪪"
            text="Faça os testes que precisa em sua aplicação com um número de CPF gerado randomicamente, sem problemas, com segurança e rapidez">
            <Badges content="CPF" />
            <Badges content="Cartões de crédito" />
        </MainCard>
    </section>
</template>