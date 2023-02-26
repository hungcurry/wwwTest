<script setup>
const listArr = reactive([
  { name: '首頁', path: '/', isDisabled: false },
  { name: '音樂', path: '/Music', isDisabled: false },
  { name: '設計', path: '/Design', isDisabled: false },
  { name: '美食', path: '/Food', isDisabled: false },
  { name: '電影', path: '/Movie', isDisabled: false },
  { name: '戲劇', path: '/Disabled/Drama', isDisabled: true },
  { name: '旅遊', path: '/Disabled/Travel', isDisabled: true },
  { name: '藝術', path: '/Disabled/Art', isDisabled: true },
  { name: '親子', path: '/Disabled/Child', isDisabled: true },
  { name: '期間限定', path: '/Disabled/Limited', isDisabled: true },
]);
// path
const isRender = ref(true);
const route = useRoute();
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
    class="nav-scroller border-b border-gray-600 bg-white dark:bg-dark"
    v-if="path === 'process' ? !isRender : isRender"
  >
    <nav class="subNav md:px-6">
      <NuxtLink
        v-for="item in listArr"
        :key="item.name"
        :to="item.path"
        :class="{ disabled: item.isDisabled }"
        class="nav-link mr-4 px-4 py-3.5 text-muted"
        >{{ item.name }}</NuxtLink
      >
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.nav-scroller {
  overflow-y: hidden;
  @include pad(992) {
    left: 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
.subNav {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  white-space: nowrap;
  @include pad(992) {
    justify-content: center;
  }
  .nav-link {
    background: linear-gradient(to left, var.$secondary, var.$secondary)
      no-repeat 0 4rem / 0 0.1rem;
    transition: background-size 0.3s;
    &:hover,
    &.router-link-exact-active {
      background-size: 100% 0.1rem;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
