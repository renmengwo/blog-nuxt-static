import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '',
      meta: [],
      link: [],
      script: []
    }
  },
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
  nitro: {
    // 该方式针对服务端渲染的场景也能生效，但是仅会针对发生在客户端测的请求进行代理。比如设置了server: false或者因为一些交互行为而触发的网络请求。
    devProxy: {
      '/api': {
        target: 'http://localhost:3001', // 这里是接口地址
        changeOrigin: true,
        prependPath: true
      }
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/api/**': {
        proxy: 'http://localhost:3001/**'
      }
    }
  },
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
