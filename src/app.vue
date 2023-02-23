<script setup>
import design from '@/assets/images/design.ico';
useHead({
  title: '樂悠悠 - 活動售票報名，精彩從此開始',
  htmlAttrs: {
    lang: 'zh-Hant-Tw',
  },
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // 禁止ios蘋果 將電話號碼轉成連結
    { name: 'format-detection', content: 'telephone=no' },
    // 網址列顏色
    { name: 'theme-color', content: '#ffffff' },
    // 網頁描述
    {
      hid: 'description',
      name: 'description',
      content:
        '歡迎來到樂悠悠票務集市，在這裡，您可以輕鬆地享受現場活動的激动人心的時刻。我們的目標是讓每個人都能夠體驗娛樂的樂趣',
    },
    // og: FB設定
    { property: 'og:title', content: '樂悠悠票務集市' },
    {
      property: 'og:description',
      content: 'Experience More with Ticket Bazaar',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'FB上的網址' },
    { property: 'og:image', content: 'FB的圖片' },
  ],
  link: [
    // 圖片
    { rel: 'icon', type: 'image/x-icon', href: design },
    { rel: 'apple-touch-icon', href: design },
  ],
});
// ===================
// ... getData ...
// ===================
// 產品資料
const { listObj } = useProductStore();
const { useGet } = useData();
const { result: getData } = await useGet(
  `https://nuxt-api-mu.vercel.app/api/products`,
);
listObj.data = getData.data;
</script>
<template>
  <div id="id">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
* {
  // outline: 1px solid red;
}
/* stylelint-disable-next-line selector-max-id */
#id > div {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
