import VitePluginSassDts from "vite-plugin-sass-dts";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      title: "Selma Waller Ísfeld",
      meta: [
        {
          name: "description",
          content: "CV and portfolio for Selma Waller Ísfeld",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  vite: {
    plugins: [
      VitePluginSassDts({
        /* options */
      }),
    ],
  },
  css: ["~/src/assets/css/main.scss"],
});
