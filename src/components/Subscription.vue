<script setup>
// path
const isRender = ref(true);
const route = useRoute();
const path = ref(route.href.slice(1, 8).toLowerCase());
watch(
  () => route.path,
  (newV, oldV) => {
    path.value = newV.slice(1, 8).toLowerCase();
  },
);
</script>
<template>
  <section
    class="subscription bg-cover bg-center"
    v-if="path === 'process' ? !isRender : isRender"
  >
    <div class="container h-full text-white">
      <div class="row flex h-full flex-col justify-end pb-9">
        <div class="col-lg-5">
          <h5
            class="mb-5 whitespace-nowrap text-lg font-700 md:mb-3 md:text-2xl"
          >
            想收到<span class="text-secondary">最新消息</span>嗎？
            <br />快訂閱我們！
          </h5>
        </div>
        <div class="col-lg-4">
          <div class="input-group">
            <input
              type="email"
              class="form-control flex-grow text-base text-muted focus:border-primary focus:ring-primary dark:text-secondary"
              placeholder="輸入您的電子信箱"
            />
            <button
              type="button"
              class="col-4 btn-secondary btn-lg btn text-base text-white md:w-auto md:px-12"
            >
              訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.subscription {
  background-image: url('@/assets/images/footer.jpg');
  height: 40rem;
}
</style>
