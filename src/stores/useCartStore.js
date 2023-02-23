import product1 from '@/assets/images/Product/product-1.jpg';
import product2 from '@/assets/images/Product/product-2.jpg';
import product3 from '@/assets/images/Product/product-3.jpg';
import product4 from '@/assets/images/Product/product-4.jpg';
import product5 from '@/assets/images/Product/product-5.jpg';
import product6 from '@/assets/images/Product/product-6.jpg';

export const CartStore = defineStore('cart', () => {
  const cartAry = reactive([
    {
      orderId: '2PpFq222',
      id: 222,
      name: '2023 鏡幻像',
      src: `${product1}`,
      price: 899,
      type: '全票',
      firstDate: ['03', 'JUN'],
      lastDate: ['15', 'OCT'],
      quantity: 4,
    },
    {
      orderId: '2PpFq555',
      id: 555,
      name: '探索古文明世界',
      src: `${product2}`,
      price: 799,
      type: '學生',
      firstDate: ['07', 'FEB'],
      lastDate: ['1', 'NOV'],
      quantity: 6,
    },
    {
      orderId: '2PpFq443',
      id: 443,
      name: 'COLOR RUN路跑',
      src: `${product3}`,
      price: 1999,
      type: '愛心',
      firstDate: ['10', 'AUG'],
      lastDate: ['12', 'AUG'],
      quantity: 2,
    },
    {
      orderId: '2PpFq77',
      id: 77,
      name: '2023紫色派對',
      src: `${product4}`,
      price: 899,
      type: '全票',
      firstDate: ['03', 'APR'],
      lastDate: ['06', 'APR'],
      quantity: 10,
    },
    {
      orderId: '2PpFq85',
      id: 85,
      name: '古典提琴音樂會',
      src: `${product5}`,
      price: 2999,
      type: '學生',
      firstDate: ['07', 'SEP'],
      lastDate: ['10', 'SEP'],
      quantity: 2,
    },
    {
      orderId: '2PpFq93',
      id: 93,
      name: '文文大師鋼琴獨秀',
      src: `${product6}`,
      price: 3999,
      type: '愛心',
      firstDate: ['10', 'NOV'],
      lastDate: ['15', 'NOV'],
      quantity: 1,
    },
  ]);
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
  const addCart = postObj => {
    const { id, name, src, price, firstDate, lastDate } = postObj;
    // 判斷重複購物商品
    const idAry = [];
    if (cartAry.length >= 1) {
      cartAry.forEach(function (item) {
        idAry.push(item.id);
      });
      const isKey = idAry.includes(id);
      if (isKey) {
        resetData(price);
        window.alert('產品 已經在購物車內');
        return false;
      }
    }
    const obj = {
      orderId: '2PpFq' + Date.now(),
      id,
      name,
      src,
      price: ticketPrice.value,
      type: ticketType.value,
      firstDate,
      lastDate,
      quantity: ticketNum.value,
    };
    cartAry.push(obj);
    // 總金額
    updatePrice();
    resetData(price);
    window.alert('加入 購物車 成功');
  };
  // ===================
  // ... 更新購物車 ...
  // ===================
  // 更新資料
  const patchCartItem = (id, str) => {
    // 先取得原本產品數量
    cartAry.forEach(item => {
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
    // 模擬 axios API 送出 cart資料...
    cartAry.forEach(item => {
      if (item.id === id) {
        item.quantity = numPatch.value;
      }
    });
    // 總金額
    updatePrice();
  };
  // 更新總金額
  const updatePrice = () => {
    total.value = 0;
    cartAry.forEach(list => {
      total.value += list.price * list.quantity;
    });
  };
  // ===================
  // ... 刪除購物車 ...
  // ===================
  const deleteItem = id => {
    const index = cartAry.findIndex(item => {
      return item.orderId === id;
    });
    cartAry.splice(index, 1);
    // 總金額
    updatePrice();
  };
  // 初始化金額
  onMounted(() => {
    updatePrice();
  });
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
  };
});
