// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
// 自動引入
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineNuxtConfig({
  srcDir: 'src',
  alias: {
    '@/': `${path.resolve(__dirname, 'src')}/`,
    '@assets': `${path.resolve(__dirname, 'src/assets')}/`,
    '@components': `${path.resolve(__dirname, 'src/components')}/`,
    '@images': `${path.resolve(__dirname, 'src/assets/images')}/`,
    '@style': `${path.resolve(__dirname, 'src/assets/style')}/`,
  },
  css: ['@style/all.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          // use 一定要放最前面
          @use "@/assets/style/config/variables" as var;
  
          // custom
          @import "@/assets/style/config/functions";
          @import "@/assets/style/config/mixins";
          @import "@/assets/style/config/extend";
        `,
        },
      },
    },
    plugins: [
      AutoImport({
        // 需要自動引入的 請寫在陣列 並且安裝npm
        imports: ['vue-i18n', 'pinia'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  imports: {
    // Auto-import pinia
    dirs: ['stores'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt'],
});
