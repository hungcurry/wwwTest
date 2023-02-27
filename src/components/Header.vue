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
// ===================
// ... 暗模式切換 ...
// ===================
const isLight = ref(true);
onMounted(() => {
  const html = document.getElementsByTagName('html')[0];
  const data = JSON.parse(localStorage.getItem('useColor')) || [];
  if (data.color === undefined) {
    html.classList.add('light');
    isLight.value = true;
    return;
  }
  if (data.color === 'dark') {
    isLight.value = false;
  } else {
    isLight.value = true;
  }
  html.setAttribute('class', `${data.color}`);
});
const handleChangeTheme = () => {
  const html = document.getElementsByTagName('html')[0];
  const darkTheme = html.getAttribute('class');
  if (darkTheme === 'dark') {
    html.setAttribute('class', `light`);
    isLight.value = true;
    localStorage.setItem(
      'useColor',
      JSON.stringify({
        color: 'light',
      }),
    );
  } else {
    html.setAttribute('class', `dark`);
    isLight.value = false;
    localStorage.setItem(
      'useColor',
      JSON.stringify({
        color: 'dark',
      }),
    );
  }
};
</script>
<template>
  <header class="header border-b border-black bg-white dark:bg-dark">
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
      <!-- 按鈕 -->
      <div class="flex lg:order-last">
        <ClientOnly>
          <!-- 暗模式切換 -->
          <button type="button" @click="handleChangeTheme">
            <!-- sun icon -->
            <svg
              v-if="isLight"
              class="sun mr-5 h-[2.4rem] w-[2.4rem] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>
            <!-- moon icon -->
            <svg
              v-else
              class="moon mr-5 h-[2.4rem] w-[2.4rem] fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </button>
        </ClientOnly>
        <!-- 購物車 -->
        <button
          type="button"
          class="relative block leading-none"
          @click="OpenCart"
        >
          <span class="material-icons text-black dark:text-white"
            >shopping_cart</span
          >
          <span
            class="badge badge-lg absolute top-0 left-full h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-0 bg-secondary font-700 text-white"
            >{{ cartAry.data.length }}
          </span>
        </button>
      </div>
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
<style lang="scss">
// 不能有scope
html.dark {
  background-color: #242424;
  color: #fff;
  color-scheme: dark;
  label {
    color: var.$white;
  }
  a {
    color: var.$white;
  }
  .disabled {
    color: rgb(122, 117, 117);
  }
  & .product li:nth-child(2n) {
    background-color: #242424;
    color: var.$white;
  }
  & .swal2-popup {
    background-color: #242424;
    color: rgb(199, 194, 194);
  }
}
</style>
