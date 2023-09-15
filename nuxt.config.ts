// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  build: {
    transpile: ['trpc-nuxt'],
  },
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    jwtSecret: '',
  },
});
