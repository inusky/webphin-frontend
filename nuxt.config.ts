// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/scss/main.scss', './app/assets/css/main.css'],
  app: {
    head: {
      title: 'The MBA Mentor',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'public/favicon.ico',
        },
      ],
    },
  },
  ssr: false,
  nitro: {
    preset: 'static',
  },
})
