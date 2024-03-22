// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  image: {
    dir: 'assets/images'
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],
  css: ["~/assets/scss/global.scss"],
  pinia: {
    storesDirs: ['./composables/**']
  },
  pwa: {
    manifest: {
      name: 'Axendiz',
      short_name: 'Axendiz',
      theme_color: '#ffffff', 
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
  googleFonts: {
    families : {
      Poppins: [400, 500, 600, 700, 800],
    }
  },
})