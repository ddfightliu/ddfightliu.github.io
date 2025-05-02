// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    // 确保别名指向正确的目录
    '~': './',
    '@': './'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})