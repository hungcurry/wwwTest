<script setup>
import SlotTitle from '@/components/Slots/SlotTitle.vue';
const focus = ref(null);
const w = ref(0);
let idx = 0;
const listAry = reactive({
  data: [
    {
      id: idx++,
      text: '2023 旅遊特展',
      path: '/',
      Image: `https://i.imgur.com/B2DoHlW.jpg`,
    },
    {
      id: idx++,
      text: '空間設計展',
      path: '/Design',
      Image: `https://i.imgur.com/NkyfUOw.jpg`,
    },
    {
      id: idx++,
      text: 'COLOR RUN路跑',
      path: '/',
      Image: `https://i.imgur.com/aL9gdMf.jpg`,
    },
    {
      id: idx++,
      text: '2023 鏡幻像',
      path: '/',
      Image: `https://i.imgur.com/Ey3FAy3.jpg`,
    },
    {
      id: idx++,
      text: '古典提琴音樂會',
      path: '/Music',
      Image: `https://i.imgur.com/obLCUJo.jpg`,
    },
  ],
});
const active = ref(0);
const total = ref(5);
let timeStop = null;
// ===================
// ... desktop ...
// ===================
const timeGO = () => {
  timeStop = setInterval(item => {
    active.value = (active.value + 1 + total.value) % total.value;
    const transLatex = -active.value * w.value - active.value * 30;
    focus.value.style.transition = 'all .6s';
    focus.value.style.transform = 'translateX(' + transLatex + 'px)';
  }, 3000);
};
const resize = $event => {
  $event.stopPropagation();
  w.value = focus.value.offsetWidth;
};
const add = () => {
  clearInterval(timeStop);
  active.value++;
  if (active.value > 4) {
    active.value = 0;
  }
  movePosition();
  timeGO();
};
const remove = () => {
  clearInterval(timeStop);
  active.value--;
  if (active.value < 0) {
    active.value = 4;
  }
  movePosition();
  timeGO();
};
const movePosition = () => {
  focus.value.style.transition = '';
  const transLatex = -active.value * w.value - active.value * 30;
  focus.value.style.transform = 'translateX(' + transLatex + 'px)';
};
// ===================
// ... mobile ...
// ===================
const startX = ref(0); // 手指初始位置
const moveX = ref(0); // 移動的距離
const flag = ref(false);

const touchstart = e => {
  startX.value = e.targetTouches[0].pageX;
  clearInterval(timeStop);
};
const touchmove = e => {
  e.preventDefault(); // 阻止預設行為
  flag.value = true;
  moveX.value = e.targetTouches[0].pageX - startX.value;
  const transLatex = -active.value * w.value - active.value * 30 + moveX.value;
  focus.value.style.transition = '';
  focus.value.style.transform = 'translateX(' + transLatex + 'px)';
};
const touchend = e => {
  if (flag.value) {
    // 移動距離大於50時 滑向上一張或下一張（moveX可能為正也可能為負，Math.abs()取絕對值）
    if (Math.abs(moveX.value) > 50) {
      if (moveX.value > 0) {
        active.value--; // 大於0右滑 圖片索引減一
      } else {
        active.value++; // 小於0左滑 圖片索引加一
      }
    }
    if (active.value > 4) {
      active.value = 0;
    }
    if (active.value < 0) {
      active.value = 4;
    }
    movePosition();
  }
  flag.value = false;
  timeGO();
};
// ===================
// ... 生命週期 ...
// ===================
onMounted(() => {
  focus.value = document.querySelector('.content');
  w.value = focus.value.offsetWidth;
  window.addEventListener('resize', resize);
  timeGO();
});
onMounted(() => {
  focus.value = document.querySelector('.content');
  // 綁定手指移動事件
  focus.value.addEventListener('touchstart', touchstart);
  focus.value.addEventListener('touchmove', touchmove);
  focus.value.addEventListener('touchend', touchend);
});
onUnmounted(() => {
  clearInterval(timeStop);
  window.addEventListener('resize', resize);
});
</script>
<template>
  <section class="container pb-6 md:pb-12">
    <slot-title>活動強檔</slot-title>
    <div class="Carousel relative">
      <ul class="content">
        <li v-for="(item, index) in listAry.data" :key="item.id">
          <NuxtLink :to="item.path" class="linkArea"></NuxtLink>
          <p class="text-center text-xl text-white">{{ item.text }}</p>
          <img :src="item.Image" :class="{ active: active === index }" />
        </li>
      </ul>
      <ul class="pagination">
        <li
          v-for="n in total"
          :key="n"
          :class="{ active: active + 1 === n }"
        ></li>
      </ul>
      <div class="arrow">
        <span class="material-icons select-none text-secondary" @click="remove">
          chevron_left
        </span>
        <span class="material-icons select-none text-secondary" @click="add">
          navigate_next
        </span>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.Carousel {
  height: 100px;
  overflow: hidden;
  -ms-overflow-style: none;
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  width: 100%;
}

.content {
  display: flex;
  height: 100%;
  width: 100%;
  li {
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 30px;
    position: relative;
    width: 100%;
  }
  img {
    display: block;
    height: 100%;
    margin-right: 30px;
    object-fit: cover;
    object-position: center;
  }
  p {
    border-radius: 10px;
    left: 50%;
    min-width: 300px;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    @include pad(992) {
      background-color: #61321574;
    }
  }
  img.active {
    width: 100%;
  }
}
.pagination {
  bottom: 5%;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  user-select: none;
  @include pad(992) {
    bottom: 10%;
  }
  li {
    background-color: rgba(189, 184, 184, 0.6);
    border-radius: 50%;
    height: 10px;
    margin-right: 10px;
    width: 10px;
  }
  li.active {
    background-color: var.$secondary;
  }
}

.arrow {
  display: flex;
  justify-content: space-between;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  span {
    cursor: pointer;
    pointer-events: auto;
  }
}
</style>
