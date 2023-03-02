<script setup>
const PaginationStore = usePaginationStore();
const { changeData, addCount, removeCount } = PaginationStore;
const { page, isStartDis, isEndDis, pageNum } = storeToRefs(PaginationStore);
if (pageNum.value >= 2) {
  isEndDis.value = false;
}
onUnmounted(() => {
  page.value = 1;
  isStartDis.value = true;
  isEndDis.value = true;
});
</script>
<template>
  <nav class="navigation m-auto mb-6 lg:mb-12">
    <ul class="pagination flex items-center justify-center">
      <li class="page-item">
        <span
          class="material-icons page-link block"
          :class="{ disabled: isStartDis }"
          href="javascript:;"
          @click="removeCount()"
        >
          chevron_left
        </span>
      </li>

      <li class="page-item" v-for="(item, idx) in pageNum" :key="idx">
        <a
          class="page-link block text-center"
          href="javascript:;"
          :id="idx + 1"
          :class="{ active: page === idx + 1 }"
          @click="changeData(idx + 1)"
          ><span class="block h-[2.4rem] w-[2.4rem]">{{ idx + 1 }}</span></a
        >
      </li>

      <li class="page-item">
        <span
          class="material-icons page-link block"
          :class="{ disabled: isEndDis }"
          href="javascript:;"
          @click="addCount()"
        >
          chevron_right
        </span>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.pagination {
  .page-item {
    border-bottom: 0.1rem solid #707070;
    border-right: 0.1rem solid #707070;
    border-top: 0.1rem solid #707070;
    user-select: none;
  }
  .page-item:first-child {
    border-left: 0.1rem solid #707070;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .page-item:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .page-link {
    padding: 5px;
  }
  .page-link.active {
    background-color: var.$primary;
    color: #fff;
  }
}
</style>
