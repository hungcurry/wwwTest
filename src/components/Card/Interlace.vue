<script setup>
const route = useRoute();
const router = useRouter();
// 產品資料
const { listObj } = useProductStore();
const routeStr = route.path.slice(1);
const clickDetail = id => {
  router.push({ path: `/Product/${id}`, query: { router: `${routeStr}` } });
};
const content = computed(() => {
  return listObj.data[routeStr];
});
// ===================
// ... pagination ...
// ===================
const PaginationStore = usePaginationStore();
const { page, dataNum, pageNum } = storeToRefs(PaginationStore);

const pageCount = computed(() => {
  return content.value.slice(
    (page.value - 1) * dataNum.value,
    (page.value - 1) * dataNum.value + dataNum.value,
  );
});
// 計算頁籤數量
pageNum.value = Math.ceil(content.value.length / dataNum.value);
</script>
<template>
  <section class="product">
    <ul class="mb-6 lg:mb-12">
      <li
        v-for="(item, idx) in pageCount"
        :key="item.id"
        class="product-item text-white"
        :class="(idx + 1) % 2 === 0 ? 'bg-white' : 'bg-primary'"
      >
        <div class="container">
          <div
            class="row dark:text-white"
            :class="{ 'flex-row-reverse text-primary': (idx + 1) % 2 === 0 }"
          >
            <div class="col-lg-5 imgBox relative mb-4 lg:order-2 lg:mb-0">
              <div class="aspect-w-9 aspect-h-6">
                <a
                  href="javascript:;"
                  class="linkArea z-20"
                  :data-id="item.id"
                  @click="clickDetail(item.id)"
                ></a>
                <img
                  :src="item.src"
                  class="mb-4 object-cover lg:mb-0"
                  alt="productImage"
                />
              </div>
            </div>
            <div class="col-lg-1 lg:order-3">
              <div
                class="mb-2 text-m font-500 lg:mb-0 lg:flex lg:h-full lg:max-w-[6.5rem] lg:flex-col lg:justify-end lg:font-700"
              >
                <p class="lg:text-m">
                  <span class="mr-1 lg:block">{{ item.firstDate[0] }}</span>
                  <span class="lg:block">{{ item.firstDate[1] }}</span>
                  <span class="lg:hidden"> — </span>
                  <span class="hidden lg:block"> | </span>
                  <span class="mr-1 lg:block">{{ item.lastDate[0] }}</span>
                  <span class="lg:block">{{ item.lastDate[1] }}</span>
                </p>
              </div>
            </div>
            <div class="col-lg-4 flex-col lg:order-1 lg:flex">
              <h2 class="mb-2 text-xl font-700 lg:mb-6 lg:text-3xl">
                {{ item.name }}
              </h2>
              <p>
                {{ item.text }}
              </p>
              <a
                href="javascript:;"
                class="mt-6 mr-2 block text-right text-m underline decoration-1 lg:mt-auto"
                :class="[(idx + 1) % 2 === 0 ? 'text-primary' : 'text-white']"
                :data-id="item.id"
                @click="clickDetail(item.id)"
                >看更多 ></a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Pagination />
  </section>
</template>
<style lang="scss" scoped>
.product-item {
  padding-bottom: 4.4rem;
  padding-top: 4.4rem;
  @include pad(992) {
    padding-bottom: 5.2rem;
    padding-top: 8rem;
  }
  .imgBox {
    img {
      z-index: 10;
    }
    &::before {
      @include pad(992) {
        border: 5px solid var.$fourthly;
        content: '';
        height: 60px;
        position: absolute;
        right: -10px;
        top: -20px;
        width: 60px;
        z-index: 1;
      }
    }
  }
}
.product-item:nth-child(2n) {
  .imgBox {
    &::before {
      @include pad(992) {
        border: 5px solid var.$primary;
        left: -10px;
      }
    }
  }
}
</style>
