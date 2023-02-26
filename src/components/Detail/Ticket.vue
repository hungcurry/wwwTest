<script setup>
const CartStore = useCartStore();
const { addCount, addCart, changePrice, resetData } = CartStore;
const { ticketNum, ticketType, ticketPrice } = storeToRefs(CartStore);
const props = defineProps({
  id: {
    type: Number,
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
  },
  src: {
    type: String,
    default: undefined,
  },
  price: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
  firstDate: {
    type: Array,
    default: () => [],
  },
  lastDate: {
    type: Array,
    default: () => [],
  },
});
const { id, name, src, price, text, firstDate, lastDate } = toRefs(props);
// 金額初始化
onMounted(() => {
  ticketPrice.value = price.value;
});
// 離開頁面銷毀
onUnmounted(() => {
  resetData(price);
});
</script>
<template>
  <div class="row pt-11 pb-10 lg:pt-[8rem]">
    <div class="col-lg-6 relative mb-10 lg:mb-0">
      <div class="aspect-w-16 aspect-h-12 lg:aspect-h-8">
        <img
          :src="src"
          class="h-full w-full object-cover object-center"
          alt="productDesign"
        />
      </div>
      <div class="card-body p-0 pt-2">
        <div class="mb-1 flex items-center justify-between">
          <div class="flex items-center">
            <h3 class="text-m font-700">{{ name }}</h3>
            <i class="bi bi-facebook ml-2.5 text-m"></i>
          </div>
          <!-- text -->
          <div class="textBox flex lg:flex-col lg:justify-between">
            <p class="lg:text-m lg:text-white">
              <span class="mr-1 lg:block">{{ firstDate[0] }}</span>
              <span class="lg:block">{{ firstDate[1] }}</span>
              <span class="lg:hidden"> — </span>
              <span class="hidden lg:block"> | </span>
              <span class="mr-1 lg:block">{{ lastDate[0] }}</span>
              <span class="lg:block">{{ lastDate[1] }}</span>
            </p>
          </div>
        </div>
        <p class="card-text flex-grow font-300 line-clamp-3">
          {{ text }}
        </p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="row h-full">
        <!-- 張數 -->
        <div
          class="count-item col-md-6 relative mb-8 flex-grow lg:mb-0 lg:pt-[12%]"
        >
          <p class="mb-6 flex items-center justify-center">
            <span
              class="material-icons cursor-pointer select-none"
              :data-id="id"
              data-action="minus"
              @click="addCount('minus')"
              >remove</span
            >
            <span class="mx-10 w-[7rem] text-center text-4xl font-700">{{
              ticketNum
            }}</span>
            <span
              class="material-icons cursor-pointer select-none"
              :data-id="id"
              data-action="add"
              @click="addCount('add')"
              >add</span
            >
          </p>
          <p class="text-center font-300">張</p>
        </div>
        <!-- 價錢 -->
        <div class="count-item col-md-6 mb-8 flex-grow lg:mb-0 lg:pt-[12%]">
          <p class="mb-6 flex items-center justify-center text-secondary">
            <span class="mx-2 text-4xl font-700"
              >NT${{ useThousands(ticketPrice * ticketNum) }}</span
            >
          </p>
          <p class="mb-1 text-center font-300">票種</p>
          <ul class="ticketType flex items-center justify-center text-center">
            <li
              class="ticketType-item mr-1 px-4 py-2 xl:mr-3"
              :class="{ active: ticketType === '學生' }"
              @click="changePrice('學生', price)"
            >
              學生
            </li>
            <li
              class="ticketType-item mr-1 px-4 py-2 xl:mr-3"
              :class="{ active: ticketType === '全票' }"
              @click="changePrice('全票', price)"
            >
              全票
            </li>
            <li
              class="ticketType-item px-4 py-2"
              :class="{ active: ticketType === '愛心' }"
              @click="changePrice('愛心', price)"
            >
              愛心
            </li>
          </ul>
        </div>
        <!-- button -->
        <div class="flex lg:mb-8 lg:self-end">
          <button
            type="button"
            class="btn-outline btn-lg btn mr-4 w-1/2 border-primary text-base text-primary hover:bg-primary hover:text-white md:px-12"
          >
            收藏展覽
          </button>
          <button
            type="button"
            class="btn-secondary btn-lg btn w-1/2 text-base text-white md:px-12"
            @click="addCart(props)"
            :data-id="id"
          >
            購買票券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.textBox {
  font-weight: 500;
  @include pad(992) {
    font-weight: 700;
    position: absolute;
    right: 3.4rem;
    top: 3.3rem;
    width: 3.9rem;
  }
  @include desktop(1200) {
    top: 5.3rem;
  }
}
.ticketType {
  &-item {
    background: linear-gradient(to left, var.$secondary, var.$secondary)
      no-repeat 0 3.2rem / 0 0.1rem;
    cursor: pointer;
    transition: background-size 0.3s;
    white-space: nowrap;
    &:hover,
    &.active {
      background-size: 100% 0.1rem;
    }
    &.active {
      background: lighten(var.$secondary, 15%);
      border-radius: 1rem;
      color: var.$white;
    }
  }
}
// 線段
.count-item:first-child {
  @include pad(768) {
    position: relative;
  }
  &::before {
    @include pad(768) {
      background-color: var.$black;
      content: '';
      height: 95%;
      position: absolute;
      right: -0.1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.1rem;
    }
  }
}
</style>
