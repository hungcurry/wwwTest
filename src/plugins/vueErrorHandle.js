export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.config.errorHandler = error => {
    // Vue 渲染生命週期中的錯誤 (SSR + SPA)
    console.error('[由 vueErrorHandle 捕獲的錯誤]', error);
  };
});
