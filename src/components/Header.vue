<script setup>
const isOpen = ref(false);
const elHeight = ref(34);
const { cartAry } = useCartStore();
const { OpenCart, OpenSignIn, OpenSignUp } = useModalStore();
const listAry = reactive([
  { name: 'Sign in', method: OpenSignIn },
  { name: 'Sign up', method: OpenSignUp },
]);
const domH = computed(() => {
  return isOpen.value === true
    ? `${listAry.length * elHeight.value + 16}px`
    : 0 + 'px';
});
const clickMe = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <header class="header border-b border-black bg-white">
    <div
      class="container relative flex flex-wrap items-center justify-between py-4 lg:flex-nowrap lg:justify-end lg:py-6"
    >
      <button type="button" @click="clickMe" class="p-1 leading-none lg:hidden">
        <span class="material-icons">reorder</span>
      </button>
      <h1 class="logo" title="TICKET BAZAAR">
        <NuxtLink to="/" class="block text-lg text-primary"
          >TICKET BAZAAR</NuxtLink
        >
      </h1>
      <a
        href="javascript:;"
        class="block leading-none lg:order-last"
        @click="OpenCart"
      >
        <span class="material-icons text-black">shopping_cart</span>
        <span
          class="badge badge-lg absolute top-0 left-full h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-0 bg-secondary font-700 text-white"
          >{{ cartAry.data.length }}
        </span>
      </a>
      <!-- collapse -->
      <div
        :style="{ height: domH }"
        class="navbar-collapse flex-grow basis-full items-center lg:flex-grow-0 lg:basis-auto"
      >
        <ul class="navbar-nav mt-4 flex list-none flex-col lg:mt-0 lg:flex-row">
          <li
            class="lg:mr-8"
            v-for="item in listAry"
            :key="item.name"
            @click="item.method"
          >
            <a
              href="javascript:;"
              class="block p-[0.5rem] text-center text-muted"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  left: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  @include pad(992) {
    position: static;
  }
  .logo {
    @include pad(992) {
      @include posCenter;
    }
  }
  .navbar-collapse {
    overflow: hidden;
    transition: height 0.4s;
    @include pad(992) {
      height: initial !important;
    }
  }
  .navbar-collapse.open {
    overflow: visible;
  }
}
</style>
