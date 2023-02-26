<script setup>
import SlotTitle from '@/components/Slots/SlotTitle.vue';
const route = useRoute();
const router = useRouter();
// 產品資料
const { listObj } = useProductStore();
const routeStr = route.path;
const clickDetail = id => {
  router.push({ path: `/Product/${id}`, query: { router: `Index` } });
};
const contentData = computed(() => {
  if (routeStr === '/') {
    return listObj.data.Index;
  }
});
</script>
<template>
  <section class="popular container pt-5 pb-2 md:py-12 md:pb-7">
    <slot-title>熱門特展</slot-title>
    <ul>
      <li
        v-for="item in contentData"
        :key="item.name"
        class="row relative mb-4 bg-fourthly py-6 dark:bg-dark md:mx-0 md:mb-5 md:p-0"
      >
        <div class="col-md-4 imgBoxGroup md:px-0">
          <div
            class="aspect-w-9 aspect-h-9 md:aspect-h-15 lg:aspect-h-10 xl:aspect-h-9"
          >
            <a
              href="javascript:;"
              class="linkArea"
              :data-id="item.id"
              @click="clickDetail(item.id)"
            ></a>
            <img
              :src="item.src"
              class="h-full w-full object-cover object-center md:object-left lg:object-center"
              alt="productDesign"
            />
          </div>
        </div>
        <div class="col-md-7 col-lg-6 col-xl-7 md:px-0">
          <div class="card-body h-full px-0">
            <div class="group mb-1 flex items-center justify-between">
              <div class="flex items-center">
                <h3 class="mr-2 text-m font-700">{{ item.name }}</h3>
                <i class="bi bi-facebook text-m md:hidden"></i>
              </div>
              <div class="textBox flex md:flex-col md:justify-between">
                <p>
                  <span class="mr-1 md:block">{{ item.firstDate[0] }}</span>
                  <span class="md:block">{{ item.firstDate[1] }}</span>
                  <span class="md:hidden"> — </span>
                  <span class="hidden md:block"> | </span>
                  <span class="mr-1 md:block">{{ item.lastDate[0] }}</span>
                  <span class="md:block">{{ item.lastDate[1] }}</span>
                </p>
                <i class="bi bi-facebook hidden text-m md:block"></i>
              </div>
            </div>
            <p class="mb-2 flex-grow-0 text-m text-secondary">
              NT$<span class="ml-1 text-xl">{{
                useThousands(item.price)
              }}</span>
            </p>
            <p
              class="mb-5 flex-grow-0 text-base line-clamp-3 md:text-m md:line-clamp-4"
            >
              {{ item.text }}
            </p>
            <div class="flex">
              <a
                href="javascript:;"
                @click="clickDetail(item.id)"
                class="btn-primary btn-lg btn text-base text-white"
                >購買票券</a
              >
              <a
                href="javascript:;"
                class="btn-outline btn-lg btn ml-1 border-primary text-base text-primary hover:bg-primary hover:text-white md:ml-2"
                >收藏展覽</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.popular {
  .imgBoxGroup {
    @include pad(768) {
      position: relative;
    }
    @include desktop(1200) {
      width: 35rem;
    }
  }
  .card-body {
    padding-bottom: 0;
    padding-top: 0.8rem;
    @include pad(768) {
      padding: 4rem 0 4rem 2.4rem;
    }
  }
  .textBox {
    font-weight: 500;
    @include pad(768) {
      font-size: 2rem;
      font-weight: 700;
      height: calc(100% - 8rem);
      position: absolute;
      right: 1rem;
      top: 4rem;
      width: 3.9rem;
    }
    @include desktop(1024) {
      right: 2.4rem;
    }
  }
}
</style>
