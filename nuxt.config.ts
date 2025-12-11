// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@pinia/colada-nuxt",
    "@ant-design-vue/nuxt",
  ],
  eslint: {
    config: {
      stylistic: false,
    },
  },
});
