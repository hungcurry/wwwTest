<script setup>
const route = useRoute();
const routeStr = route.href.slice(9);
</script>
<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="row timeline relative py-5 md:py-7 lg:mx-0">
        <div
          class="col-3 timeline-item"
          :class="{ active: routeStr === 'checkoutA' }"
        >
          <div class="timeline-pointer">
            <p class="text-sm font-300 md:text-base">確認訂單</p>
          </div>
        </div>
        <div
          class="col-3 timeline-item"
          :class="{ active: routeStr === 'checkoutB' }"
        >
          <div class="timeline-pointer">
            <p class="text-sm font-300 md:text-base">填寫訂購資訊</p>
          </div>
        </div>
        <div
          class="col-3 timeline-item"
          :class="{ active: routeStr === 'checkoutC' }"
        >
          <div class="timeline-pointer">
            <p class="text-sm font-300 md:text-base">填寫付款資訊</p>
          </div>
        </div>
        <div
          class="col-3 timeline-item"
          :class="{ active: routeStr === 'checkoutD' }"
        >
          <div class="timeline-pointer">
            <p class="text-sm font-300 md:text-base">完成訂購</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.timeline {
  &::after {
    background-color: var.$secondary;
    content: '';
    height: 0.3rem;
    left: 0;
    position: absolute;
    right: 0;
  }
  &-item {
    padding: 0;
  }
  &-item:first-child {
    padding-left: 1.5rem;
  }
  &-item:last-child {
    padding-right: 1.5rem;
  }
  &-pointer {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 0.8rem;
    position: relative;
  }
  &-pointer::before {
    @include width(0.8rem, 0.8rem);

    background-color: var.$secondary;
    border-radius: 50%;
    content: '';
    left: 50%;
    position: absolute;
    top: 0.1rem;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
}

/* 追蹤時狀態 其餘狀態反白 */
.timeline-item.active p {
  font-weight: 700;
}
.timeline-item.active ~ .timeline-item .timeline-pointer::before {
  background-color: var.$white;
  border: 1px solid var.$secondary;
}
</style>
