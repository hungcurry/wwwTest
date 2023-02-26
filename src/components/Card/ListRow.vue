<script setup>
const CartStore = useCartStore();
const { cartAry, patchCartItem, deleteItem } = CartStore;
// path
const route = useRoute();
const path = ref(route.href.slice(9, route.href.length));
watch(
  () => route.path,
  (newV, oldV) => {
    path.value = newV.route.href.slice(9, route.href.length);
  },
);
</script>
<template>
  <ul
    class="cartList lg:flex lg:h-[54.6rem] lg:flex-grow lg:flex-col lg:flex-nowrap lg:overflow-y-auto lg:overflow-x-hidden"
  >
    <li class="List row mb-5" v-for="list in cartAry.data" :key="list.id">
      <div class="col-6 col-lg-3">
        <img
          :src="list.src"
          class="h-[8.6rem] w-full object-cover object-center"
          alt="product"
        />
      </div>
      <!-- mobile-price -->
      <div class="col-6 col-lg-3">
        <h3 class="mb-1 flex items-center justify-between text-base font-700">
          <span class="whitespace-nowrap">{{ list.name }}</span>
          <span
            class="material-icons cursor-pointer lg:hidden"
            :class="path === 'checkoutA' ? 'block' : 'hidden'"
            :data-orderId="list.orderId"
            @click="deleteItem(list.orderId)"
            >close</span
          >
        </h3>
        <p class="mb-1 font-500">
          {{ list.firstDate[0] }} {{ list.firstDate[1] }} —
          {{ list.lastDate[0] }} {{ list.lastDate[1] }}
        </p>
        <div class="flex justify-between">
          <div class="flex items-center">
            <span class="mr-1 text-muted">{{ list.type }}</span>
            <span class="text-m font-700 lg:hidden">{{ list.quantity }}</span>
          </div>
          <div class="text-m font-700 lg:hidden">
            NT${{ useThousands(list.price * list.quantity) }}
          </div>
        </div>
      </div>
      <!-- desktop-price -->
      <div
        class="col-lg-6 hidden items-center lg:flex"
        :class="path === 'checkoutA' ? 'justify-between' : 'justify-start'"
      >
        <div
          class="w-[11rem] text-m font-700"
          :class="path !== 'checkoutA' ? 'lg:mr-12' : ''"
        >
          NT${{ useThousands(list.price * list.quantity) }}
        </div>
        <ul class="flex items-center justify-center">
          <li class="leading-none">
            <span
              class="material-icons cursor-pointer select-none"
              :data-id="list.id"
              data-action="minus"
              :class="path === 'checkoutA' ? 'block' : 'hidden'"
              @click="patchCartItem(list.id, 'minus')"
              >remove</span
            >
          </li>
          <li
            class="w-[4.6rem] select-none px-1 text-center text-m font-700 md:px-3"
          >
            {{ list.quantity }}
          </li>
          <li class="leading-none">
            <span
              class="material-icons cursor-pointer select-none"
              :data-id="list.id"
              data-action="add"
              :class="path === 'checkoutA' ? 'block' : 'hidden'"
              @click="patchCartItem(list.id, 'add')"
              >add</span
            >
          </li>
        </ul>
        <span
          class="material-icons cursor-pointer lg:mr-3"
          :class="path === 'checkoutA' ? 'block' : 'hidden'"
          :data-orderId="list.orderId"
          @click="deleteItem(list.orderId)"
          >close</span
        >
      </div>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.List {
  margin-left: 0;
  margin-right: 0;
  @include pad(768) {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  > * {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    @include pad(768) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
}
// scrollbar
.cartList::-webkit-scrollbar {
  background-color: transparent;
  height: 0.3rem;
  width: 0.3rem;
}
.cartList::-webkit-scrollbar-thumb {
  background-color: rgb(196, 191, 191);
}
.cartList::-webkit-scrollbar-track {
  background-color: var.$white;
}
</style>
