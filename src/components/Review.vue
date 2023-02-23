<script setup>
import SlotTitle from '@/components/Slots/SlotTitle.vue';
</script>
<template>
  <section class="review container pb-6 md:pb-12">
    <slot-title>直播回顧</slot-title>
    <div class="review-img bg-cover bg-center">
      <div class="row">
        <div class="col-md-5">
          <div
            class="review-box bg-primary/90 py-10 pl-6 pr-4 text-white md:p-6"
          >
            <h3 class="mb-8 text-xl">
              <span class="inline-block border-r border-gray-200 pr-3 font-700"
                >開幕對談</span
              ><span class="inline-block pl-3">藝術展演巡禮</span>
            </h3>
            <img class="mb-3" src="@/assets/images/people.png" alt="people" />
            <p class="mb-2 text-m">臺北現代聯合總監｜Ken Hsu</p>
            <p class="mb-4 text-base font-300 md:text-m">
              獨家由藝術家、策展人、畫廊總監帶您欣賞台北藝術特展，感受雕塑、展演及當代日常文化之間微妙的關係。
            </p>
            <button
              type="button"
              class="btn-secondary btn-lg btn px-9 py-2 text-base text-white"
            >
              點此觀看
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.review {
  &-img {
    background-image: url('@/assets/images/people2.png');
  }
}
</style>
