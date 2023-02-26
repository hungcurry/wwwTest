<script setup>
import SlotCheckTitle from '@/components/Slots/SlotCheckTitle.vue';
const CartStore = useCartStore();
// 總金額
const { total } = storeToRefs(CartStore);
// form
const userStore = useUserStore();
const { createOrder } = userStore;
const {
  isCode,
  codePrice,
  // --------form-----------
  checkCredit,
  checkDate,
  checkPassword,
} = storeToRefs(userStore);
</script>
<template>
  <main class="main">
    <div class="container">
      <TimeLine />
      <div class="row">
        <div class="col-lg-4 lg:order-last lg:flex lg:flex-col lg:flex-nowrap">
          <slot-check-title>付款資訊</slot-check-title>
          <form class="lg:flex-grow">
            <div class="mb-5">
              <label for="checkCredit" class="form-label mb-1 block text-black"
                >信用卡帳號</label
              >
              <input
                v-model.trim="checkCredit"
                type="text"
                name="dataCredit"
                id="checkCredit"
                class="form-control flex w-full rounded-lg border-gray-300 text-base text-muted focus:border-primary focus:ring-primary"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
              />
            </div>
            <div class="mb-5">
              <label for="checkDate" class="form-label mb-1 block text-black"
                >有效日期</label
              >
              <input
                v-model.trim="checkDate"
                type="date"
                name="dataDate"
                id="checkDate"
                class="form-control flex w-full flex-row rounded-lg border-gray-300 text-base text-muted focus:border-primary focus:ring-primary"
                placeholder="(MM/YY)"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="checkPassword"
                class="form-label mb-1 block text-black"
                >安全碼</label
              >
              <input
                v-model.trim="checkPassword"
                type="password"
                name="dataPassword"
                id="checkPassword"
                class="form-control w-full rounded-lg border-gray-300 text-base text-muted focus:border-primary focus:ring-primary"
                placeholder="***"
                autocomplete="off"
                maxlength="3"
                required
              />
            </div>
          </form>
          <div class="mb-6 lg:mb-3">
            <!-- 小計 -->
            <div
              class="mb-1 flex items-center justify-between font-500 lg:mb-0"
            >
              <span>小計:</span>
              <div class="flex items-center">
                <span class="mr-1">NT$</span>
                <span class="text-m font-700 text-secondary">{{
                  useThousands(total)
                }}</span>
              </div>
            </div>
            <!-- 折扣 -->
            <div
              class="mb-2 flex items-center justify-between"
              :class="{ hidden: !isCode }"
            >
              <span class="font-500">折扣:</span>
              <div class="font-300">
                <span class="mr-1">- NT$</span>
                <span class="text-m">{{ useThousands(codePrice) }}</span>
              </div>
            </div>
            <!-- 總金額 -->
            <div class="flex items-center justify-between text-m font-500">
              <span>總金額:</span>
              <div class="flex items-center">
                <span class="mr-1">NT$</span>
                <span class="text-xl font-700 text-secondary">{{
                  useThousands(total - codePrice)
                }}</span>
              </div>
            </div>
          </div>
          <a
            @click="createOrder"
            href="javascript:;"
            class="w-100 btn-secondary btn-lg btn hidden h-auto py-3 text-base text-white lg:block"
            >下一步</a
          >
        </div>
        <div class="col-lg-8 lg:flex lg:flex-col">
          <CardListRow />
          <div class="row pt-7 pb-10 lg:pt-3 lg:pb-0">
            <div class="col-6 col-lg-3">
              <NuxtLink
                to="./checkoutB"
                class="btn-outline btn-lg btn h-auto w-full border-primary py-2 text-base text-primary hover:bg-primary hover:text-white"
                >返回</NuxtLink
              >
            </div>
            <div class="col-6">
              <a
                @click="createOrder"
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
<style lang="scss" scoped>
.form-control {
  background-color: #f7f7f7;
}
</style>
