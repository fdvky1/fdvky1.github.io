// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      SERVICE_URL: process.env.SERVICE_URL!,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY!
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],
  app: {
    head: {
      title: "Fdvky Portfolio",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"}
      ]
    }
  }
})