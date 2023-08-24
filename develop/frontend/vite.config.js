import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

const serverUrlBase = 'https://taifu-startup.org';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'quasar/src/css/index.sass',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      'vue-i18n-dev': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
    },
  },
  build: {
    outDir: '../public',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/base.scss";`,
        charset: false,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: serverUrlBase,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/public': {
        target: serverUrlBase,
        changeOrigin: true,
        pathRewrite: {
          '^/public': '',
        },
      },
    },
  },
});
