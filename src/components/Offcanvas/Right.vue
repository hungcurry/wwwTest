<script setup>
const route = useRoute();
const ModalStore = useModalStore();
const CartStore = useCartStore();
const { firstCheck } = useUserStore();
const { CloseCart } = ModalStore;
const { isCart } = storeToRefs(ModalStore);
// 總金額
const { total } = storeToRefs(CartStore);
// path
const path = ref(route.href.slice(1, 8).toLowerCase());
watch(
  () => route.path,
  (newV, oldV) => {
    path.value = newV.slice(1, 8).toLowerCase();
  },
);
</script>
<template>
  <div
    class="offcanvas bg-black pl-4 pr-2 text-white lg:pl-8 lg:pr-4"
    :class="{ active: isCart }"
  >
    <div
      class="offcanvas-header flex items-center justify-between pl-0 pt-5 pb-3 pr-2 lg:pt-8 lg:pr-4"
    >
      <h5 class="lg:text-lg">Cart List</h5>
      <span class="material-icons block cursor-pointer" @click="CloseCart"
        >close</span
      >
    </div>
    <!-- offcanvas-body -->
    <ul class="offcanvas-body pr-2 pt-3 lg:pr-4">
      <CardList />
    </ul>
    <!-- offcanvas-footer -->
    <div
      class="offcanvas-footer flex items-center justify-between pr-2 lg:pr-4"
    >
      <div class="font-m flex items-center py-11 text-m">
        <span class="mr-1 md:mr-6">小計</span>
        <span class="mr-1">NT$</span>
        <span class="text-xl font-700 text-secondary">
          {{ useThousands(total) }}
        </span>
      </div>
      <a
        @click="firstCheck"
        href="javascript:;"
        class="btn-lg btn bg-white px-7 text-m text-primary hover:bg-secondary hover:text-white"
        :class="path === 'process' ? 'disabled' : ''"
        >前往結帳</a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.offcanvas {
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: -800px;
  top: 6rem;
  transition: right 0.6s;
  width: 100%;
  z-index: 999;
  @include pad(768) {
    top: 6.9rem;
    width: 40rem;
  }
  @include pad(992) {
    top: 8.3rem;
    width: 54rem;
  }
  &-body {
    flex-grow: 1;
    overflow-y: auto;
  }
}
.active {
  right: 0;
}
// scrollbar
.offcanvas-body::-webkit-scrollbar {
  background-color: transparent;
  height: 0.3rem;
  width: 0.3rem;
}
.offcanvas-body::-webkit-scrollbar-thumb {
  background-color: var.$secondary;
}
.offcanvas-body::-webkit-scrollbar-track {
  background-color: var.$white;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
