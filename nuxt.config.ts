import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  builder: undefined,
  alias: {
    assets: '/assets'
  },
  modules: ['@element-plus/nuxt'],
  devtools: { enabled: true },
  devServer: {
    port: 4000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  css: ['@/assets/style/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
          additionalData:
            '@use "@/assets/style/element/index.scss" as element; @use "@/assets/style/_variables.scss" as *;'
          // '@use "@/assets/style/_variables.scss" as *;'
        }
      }
    }
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss'
  }
})
