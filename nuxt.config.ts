import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "@/assets/css/estedad.css"],
  head: {
    script: [
      {
        type: "text/javascript",
        src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
        id: "",
      },
      {
        type: "text/javascript",
        src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js",
        id: "MathJax-script",
        async: true,
      },
    ],
    title: "فیزیک",
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
  ],
});
