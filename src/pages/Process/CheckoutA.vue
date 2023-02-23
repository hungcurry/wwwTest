<script setup>
import SlotCheckTitle from '@/components/Slots/SlotCheckTitle.vue';
const { nextCheck } = useUserStore();
const CartStore = useCartStore();
// 總金額
const { total } = storeToRefs(CartStore);
</script>
<template>
  <main class="main">
    <div class="container">
      <TimeLine />
      <div class="row">
        <div class="col-lg-4 lg:order-last lg:flex lg:flex-col lg:flex-nowrap">
          <slot-check-title class="hidden"></slot-check-title>
          <form class="lg:flex-grow"></form>
          <div class="mb-6 hidden lg:mb-3 lg:block">
            <!-- 小計 -->
            <div
              class="mb-1 flex items-center justify-between text-m font-500 lg:mb-0"
            >
              <span>小計:</span>
              <div class="flex items-center">
                <span class="mr-1">NT$</span>
                <span class="text-xl font-700 text-secondary">{{
                  useThousands(total)
                }}</span>
              </div>
            </div>
          </div>
          <a
            @click="nextCheck"
            href="javascript:;"
            class="w-100 btn-secondary btn-lg btn hidden h-auto py-3 text-base text-white lg:block"
            >下一步</a
          >
        </div>
        <div class="col-lg-8 lg:flex lg:flex-col">
          <CardListRow />
          <div class="row pt-7 pb-10 lg:pt-3 lg:pb-0">
            <div class="col-8 col-md-6 ml-[33.333%] md:ml-[50%]">
              <!-- 小計 -->
              <div
                class="mb-3 flex items-center justify-between text-m font-500 lg:mb-0 lg:hidden"
              >
                <span>小計:</span>
                <div class="flex items-center">
                  <span class="mr-1">NT$</span>
                  <span class="text-xl font-700 text-secondary">{{
                    useThousands(total)
                  }}</span>
                </div>
              </div>
              <a
                @click="nextCheck"
                href="javascript:;"
                class="btn-secondary btn-lg btn h-auto w-full py-2 align-middle text-base text-white lg:hidden"
                >下一步</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
