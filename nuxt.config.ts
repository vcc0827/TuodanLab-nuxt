// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  devServer: {
    port: 8889,
    host: '',
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
    },
  ],

  imports: {
    dirs: ['stores'],
  },
  alias: {
    public: '/<srcDir>/public',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/device'],
});
