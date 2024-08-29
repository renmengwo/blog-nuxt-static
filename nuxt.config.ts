import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '不是秃顶的胖子不是一个好开发的个人博客',
      meta: [
        {
          name: 'keywords',
          content:
            '开发，前端，后端，全栈，技术，博客， 网站， NUXT， VUE， SSR， NODE， TS'
        },
        {
          name: 'description',
          content:
            '一个不是秃顶的胖子的不是一个好开发的个人博客，网站主要分享开发，前端，后端，全栈，技术等相关内容'
        }
      ],
      link: [],
      script: []
    },
    pageTransition: { name: 'page', mode: 'out-in' }
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
