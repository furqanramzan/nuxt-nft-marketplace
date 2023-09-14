// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  modules: [
    'trpc-nuxt',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
});
