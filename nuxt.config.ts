// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },


  eslint: {
    config: {
      // stylistic: true,
    },
    checker: true
  },

  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  // pinia: {
  //   storesDirs: ['./stores/**', './custom-folder/stores/**'],
  // },
})