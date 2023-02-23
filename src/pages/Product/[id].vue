<script setup>
import SlotBack from '@/components/Slots/SlotBack.vue';
const router = useRouter();
const route = useRoute();
const routeStr = route.query.router;
const routeId = Number(route.params.id);
// 產品資料
const { listObj } = useProductStore();

const isError = ref(false);
let content = reactive({});
let cleanTimer = null;
// ===================
// 重組 取得id route
// ===================
// route
const keysAry = Object.keys(listObj.data);
const isRoute = keysAry.includes(routeStr);
// id
const valuesAry = Object.values(listObj.data);
const Ary = [];
valuesAry.forEach(item => {
  Ary.push(...item);
});
const idAry = Ary.map(item => {
  return item.id;
});
const isId = idAry.includes(routeId);

// console.log(`routeStr:`, routeStr);
// console.log(`routeId:`, routeId);
// console.log('isRoute', isRoute);
// console.log('isId', isId);
// ===================
// 取得正確資料
// ===================
if (isRoute && isId) {
  const contentData = computed(() => {
    return listObj.data[routeStr];
  });
  const data = contentData.value.filter(item => {
    return item.id === routeId;
  });
  if (data.length !== 0) {
    content = computed(() => {
      return data[0];
    });
  }
} else {
  isError.value = true;
  TimeOver();
}

// ---跳轉----
function TimeOver() {
  if (process.client) {
    cleanTimer = setTimeout(() => {
      router.push({ path: '/' });
    }, 3000);
  }
}
onMounted(() => {
  router.push(`${route.fullPath}`);
});
// 離開頁面銷毀
onUnmounted(() => {
  clearTimeout(cleanTimer);
});
</script>
<template>
  <main class="main">
    <div class="container">
      <div v-if="!isError">
        <DetailTicket v-bind="content" />
        <DetailIntroduce :id="routeId" />
      </div>
      <!-- 錯誤處理 -->
      <div v-else-if="isError">
        <ErrorMessage />
        <slot-back>自動轉址 首頁中...</slot-back>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
