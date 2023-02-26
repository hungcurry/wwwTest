<script setup>
const route = useRoute();
const path = ref('');
watch(
  () => route.path,
  (newV, oldV) => {
    path.value = newV;
  },
);
onMounted(() => {
  path.value = route.path;
});
// --------------------
const isRender = ref(true);
const scroll = ref(false);
const hidden = ref(true);
const total = ref(5);
const time = 10;
const active = ref(0);
const preActive = ref(0);
let timeOver = null;
const kvData = reactive({
  data: [
    {
      backgroundImage: 'url(https://i.imgur.com/B2DoHlW.jpg)',
      animationDuration: '10s',
    },
    {
      backgroundImage: 'url(https://i.imgur.com/NkyfUOw.jpg)',
      animationDuration: '10s',
    },
    {
      backgroundImage: 'url(https://i.imgur.com/aL9gdMf.jpg)',
      animationDuration: '10s',
    },
    {
      backgroundImage: 'url(https://i.imgur.com/Ey3FAy3.jpg)',
      animationDuration: '10s',
    },
    {
      backgroundImage: 'url(https://i.imgur.com/obLCUJo.jpg)',
      animationDuration: '10s',
    },
  ],
});
const styleHandle = (backgroundImage, animationDuration) => {
  return {
    backgroundImage,
    animationDuration,
  };
};
const scrollHandler = () => {
  if (window.scrollY > 0) {
    scroll.value = true;
    hidden.value = false;
  } else {
    scroll.value = false;
    hidden.value = true;
  }
};
onMounted(() => {
  timeOver = setInterval(function () {
    preActive.value = active.value;
    active.value = (active.value + 1 + total.value) % total.value;
  }, (time / 2) * 1000);
  window.addEventListener('scroll', scrollHandler);
});
onUnmounted(() => {
  clearInterval(timeOver);
  window.removeEventListener('scroll', scrollHandler);
});
</script>
<template>
  <section
    class="relative h-[80rem]"
    v-if="path !== '/' ? !isRender : isRender"
  >
    <div class="container h-full text-white">
      <div class="row relative z-30 h-full items-center">
        <div class="col-md-11 self-center md:ml-[8.3333%]">
          <h2 class="mb-2 font-700">THUMB-STOPPING CREATIVE</h2>
          <p class="text-lg">令人驚嘆的創意!</p>
          <p class="text-s mb-4 font-700">01 JUN - 31 OCT</p>
          <div class="flex">
            <a
              href="javascript:;"
              class="btn-secondary btn-lg btn mr-3 w-1/2 text-base text-white md:mr-2 md:w-auto md:px-12"
              >購買票券</a
            >
            <a
              href="javascript:;"
              class="btn-outline btn-lg btn w-1/2 border border-white text-base text-white hover:bg-white hover:text-black md:w-auto md:px-12"
              >詳細資訊</a
            >
          </div>
        </div>
        <div
          class="social absolute top-0 left-1/2 z-10 mt-10 w-full translate-x-[-50%] text-left"
          :class="{ isHidden: hidden }"
        >
          <NuxtLink to="javascript:;">
            <i class="bi bi-facebook mr-5 text-3xl text-muted"></i>
          </NuxtLink>
          <NuxtLink to="javascript:;">
            <i class="bi bi-linkedin mr-5 text-3xl text-muted"></i>
          </NuxtLink>
          <NuxtLink to="javascript:;">
            <i class="bi bi-instagram mr-5 text-3xl text-muted"></i>
          </NuxtLink>
        </div>
        <div
          class="text absolute bottom-0 left-1/2 z-10 w-full translate-x-[-50%] p-4 text-center"
          :class="{ isHidden: hidden }"
        >
          <h2
            class="text-gradient text-7xl font-700 md:text-6xl lg:text-[12rem]"
          >
            Life on TICKET
          </h2>
          <p class="text-muted md:mb-4 lg:text-lg">
            樂悠悠！無論您身在何處。提供廣泛的選擇，您可以輕鬆找到您喜愛的演出、活動、展覽。
          </p>
        </div>
      </div>
    </div>
    <ul
      class="jumbotron absolute left-1/2 top-1/2 z-20 h-full w-full translate-x-[-50%] translate-y-[-50%] duration-500"
      :class="{ isActive: scroll }"
    >
      <li
        v-for="(item, index) in kvData?.data"
        :id="item.id"
        :key="item.id"
        :style="styleHandle(item.backgroundImage, item.animationDuration)"
        :class="{ animate: active === index || preActive === index }"
        class="absolute h-full w-full bg-center bg-no-repeat"
      ></li>
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.jumbotron > li {
  opacity: 0;
}
.jumbotron.isActive {
  height: 55rem;
  max-width: 129rem;
}
.isHidden {
  display: none;
}
.jumbotron > li.animate {
  animation: ani-portrait;
  animation-timing-function: linear;
  @media (orientation: landscape) {
    animation: ani-landscape;
  }
}
// 文字漸層
.text-gradient {
  background: linear-gradient(320deg, var.$primary 30%, var.$secondary 70%);
  background-clip: text;
  color: transparent;
  line-height: 1;
  -webkit-text-fill-color: transparent !important;
}
@keyframes ani-portrait {
  0% {
    background-size: auto 150%;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    background-size: auto 120%;
    opacity: 0;
  }
}
@keyframes ani-landscape {
  0% {
    background-size: 150%;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    background-size: 120%;
    opacity: 0;
  }
}
</style>
