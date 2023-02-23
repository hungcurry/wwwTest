<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper';
import SlotTitle from '@/components/Slots/SlotTitle.vue';
// modules 這個要自己設定
const modules = ref([Autoplay, Pagination]);
// ===================
// ... getData ...
// ===================
// swiper圖片
const swiperAry = reactive({ data: [] });
const { useGet } = useData();
const { result: getData } = await useGet(
  `https://nuxt-api-mu.vercel.app/api/swiper`,
);
swiperAry.data = getData.data;
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
  <section class="recommend" v-if="path === 'process' ? !isRender : isRender">
    <div class="container">
      <slot-title>猜你也喜歡...</slot-title>
      <div class="row mb-6 md:mb-12">
        <div class="col-12 col-lg-11 lg:ml-[8.3333%]">
          <!-- Swiper -->
          <swiper
            :observer="true"
            :observeParents="true"
            :slidesPerView="'auto'"
            :initialSlide="0"
            :spaceBetween="15"
            :slidesPerGroup="1"
            :loop="true"
            :breakpoints="{
              1024: {
                spaceBetween: 30,
                slidesPerGroup: 3,
              },
            }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="false"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="img in swiperAry.data" :key="img.name">
              <!-- card -->
              <div class="card relative">
                <a href="javascript:;" class="linkArea"></a>
                <img :src="img.src" class="w-full" alt="photos" />
                <div class="pt-md-1 card-body p-0 pt-2">
                  <h4 class="text-lg font-700">{{ img.name }}</h4>
                  <p class="card-text text-m font-700 text-secondary">
                    NT$:
                    <span class="text-xl">{{ useThousands(img.price) }}</span>
                  </p>
                  <span class="card-text mb-1 text-sm text-muted">{{
                    img.date
                  }}</span>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
// swiper
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 35rem !important;
  & img {
    height: 35rem;
    width: 35rem;
  }
}
// 狀態修改
.swiper-pagination-bullet {
  background: var.$fourthly;
  opacity: 0.6;
}
.swiper-pagination-bullet-active {
  background-color: var.$secondary;
  opacity: 1;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 12rem;
}
</style>
