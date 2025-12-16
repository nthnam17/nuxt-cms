// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: false })],
      }),
    ],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/colada-nuxt',
    '@ant-design-vue/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    config: {
      stylistic: false,
    },
  },
  build: {
    transpile: ['ant-design-vue'],
  },
})