export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook('app:error', (..._args) => {
    // Server 和 Client 啟動時發生的錯誤 (SSR + SPA)
    console.error('[由 nuxtErrorHook 捕獲的錯誤]');
    // if (process.client) {
    //   console.log(..._args)
    // }
  });
});
