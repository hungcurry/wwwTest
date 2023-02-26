<script setup></script>
<template>
  <main class="main">
    <div class="container">
      <div class="row pt-[4.2rem] lg:pt-[10.2rem]">
        <div class="col-lg-6 mx-auto">
          <div class="mb-8 text-center text-primary">
            <span class="material-icons mb-3 text-5xl">check_circle</span>
            <h2 class="text-m font-400">完成訂購</h2>
          </div>
          <p class="mb-10">您的購物憑證代碼為：</p>
          <p class="mb-10 text-center text-lg text-primary">qr147352</p>
          <p class="mb-[8rem] lg:mb-[9.6rem]">
            恭喜您已完成「 探索古文明世界 」的購票手續，請於 2023/02/07 ~
            2023/11/01 於展覽入口頁面輸入「展覽憑證代碼」，經「 驗證無誤」
            即可瀏覽。
          </p>
          <div class="mb-lg-0 mb-10">
            <div class="row items-center">
              <div class="col-6">
                <NuxtLink
                  to="/Music"
                  class="btn-outline btn-lg btn w-full border-primary text-base text-primary hover:bg-primary hover:text-white md:px-12"
                  >繼續瀏覽</NuxtLink
                >
              </div>
              <div class="col-6">
                <NuxtLink
                  to="/"
                  class="btn-secondary btn-lg btn mr-3 w-full text-base text-white md:mr-2 md:px-12"
                  >回首頁</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
