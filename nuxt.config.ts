import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    builder: undefined,
    alias: {
        'assets': '/assets'
    },
    modules: ['@element-plus/nuxt'],
    devtools: { enabled: true },
    devServer: {
        port: 4000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/_variable.scss" as *;'
                }
            }
        }
    }
})
