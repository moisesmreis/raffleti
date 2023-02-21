export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Raffleti // La Monhang ✨',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Deixe a sorte escolher por você 🤞' }
      ],
    }
  }
};
