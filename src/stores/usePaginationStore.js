export const PaginationStore = defineStore('pagination', () => {
  const page = ref(1); // 頁數
  const dataNum = ref(3); // 每一頁取幾筆資料
  const isStartDis = ref(true);
  const isEndDis = ref(true);
  const pageNum = ref(1);

  const changeData = num => {
    page.value = num;
    disabledBtn();
  };
  const disabledBtn = () => {
    if (page.value === 1) isStartDis.value = true;
    if (page.value >= 2) isStartDis.value = false;
    if (page.value >= pageNum.value) {
      isEndDis.value = true;
    } else {
      isEndDis.value = false;
    }
  };
  const addCount = () => {
    page.value++;
    if (page.value > pageNum.value) {
      page.value = 1;
    }
    disabledBtn();
  };
  const removeCount = () => {
    page.value--;
    if (page.value < 1) {
      page.value = pageNum.value;
    }
    disabledBtn();
  };
  return {
    page,
    dataNum,
    pageNum,
    isStartDis,
    isEndDis,
    // ------------
    changeData,
    addCount,
    removeCount,
  };
});
