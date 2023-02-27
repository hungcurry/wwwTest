import axios from 'axios';
export const CartStore = defineStore('cart', () => {
  const { $swal } = useNuxtApp();
  const cartAry = reactive({ data: [] });
  const numPatch = ref(0);
  const total = ref(0);
  const ticketNum = ref(1);
  const ticketType = ref('全票');
  const ticketPrice = ref(0);
  const stDiscount = ref(100);
  const loveDiscount = ref(50);
  // ===================
  // ... 加入購物車 ...
  // ===================
  const addCount = str => {
    if (str === 'add') {
      ticketNum.value += 1;
    }
    if (str === 'minus') {
      ticketNum.value -= 1;
      if (ticketNum.value < 1) {
        ticketNum.value = 1;
      }
    }
  };
  const changePrice = (str, price) => {
    ticketType.value = str;
    switch (ticketType.value) {
      case '學生':
        ticketPrice.value = Number(price - stDiscount.value);
        break;
      case '愛心':
        ticketPrice.value = Number(price - loveDiscount.value);
        break;
      default:
        ticketPrice.value = Number(price - 0);
        break;
    }
  };
  // 重置票卷數量金額
  const resetData = price => {
    ticketNum.value = 1;
    ticketType.value = '全票';
    ticketPrice.value = price;
  };
  const addCart = async postObj => {
    const { id, name, src, price, firstDate, lastDate } = postObj;
    // 判斷重複購物商品
    const idAry = [];
    if (cartAry.data.length >= 1) {
      cartAry.data.forEach(function (item) {
        idAry.push(item.id);
      });
      const isKey = idAry.includes(id);
      if (isKey) {
        resetData(price);
        $swal.fire({
          title: `產品 已經在購物車內`,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
          width: '350px',
        });
        return false;
      }
    }
    const obj = {
      id,
      name,
      src,
      price: ticketPrice.value,
      type: ticketType.value,
      firstDate,
      lastDate,
      quantity: ticketNum.value,
    };
    try {
      const res = await axios.post(
        'https://nuxt-api-mu.vercel.app/api/carts',
        obj,
      );
      cartAry.data = res.data.data;
      updatePrice();
      resetData(price);
      $swal.fire({
        title: `加入 購物車 成功`,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
    } catch (error) {
      console.error(`error`);
    }
  };
  // ===================
  // ... 更新購物車 ...
  // ===================
  // 更新資料
  const patchCartItem = async (id, str) => {
    // 先取得原本產品數量
    cartAry.data.forEach(item => {
      if (item.id === id) {
        numPatch.value = item.quantity;
      }
    });
    if (str === 'add') {
      numPatch.value += 1;
    }
    if (str === 'minus') {
      numPatch.value -= 1;
      if (numPatch.value < 1) {
        numPatch.value = 1;
      }
    }
    const patchObj = {
      id,
      quantity: numPatch.value,
    };
    try {
      const res = await axios.patch(
        'https://nuxt-api-mu.vercel.app/api/carts',
        patchObj,
      );
      cartAry.data = res.data.data;
      updatePrice();
    } catch (error) {
      console.error(`error`);
    }
  };
  // 更新總金額
  const updatePrice = () => {
    total.value = 0;
    cartAry.data.forEach(list => {
      total.value += list.price * list.quantity;
    });
  };
  // ===================
  // ... 刪除購物車 ...
  // ===================
  const deleteItem = async id => {
    try {
      const res = await axios.delete(
        `https://nuxt-api-mu.vercel.app/api/carts/delete/${id}`,
      );
      cartAry.data = res.data.data;
      $swal.fire({
        title: `刪除 商品 成功`,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
      updatePrice();
    } catch (error) {
      console.error(`error`);
    }
  };
  const deleteAll = async () => {
    try {
      const res = await axios.delete(
        `https://nuxt-api-mu.vercel.app/api/carts/delete`,
      );
      cartAry.data = res.data.data;
      total.value = 0;
    } catch (error) {
      console.error(`error`);
    }
  };
  return {
    cartAry,
    deleteItem,
    // ---加入---
    ticketNum,
    ticketType,
    addCount,
    addCart,
    // ---更新---
    changePrice,
    ticketPrice,
    patchCartItem,
    total,
    updatePrice,
    deleteAll,
    resetData,
  };
});
