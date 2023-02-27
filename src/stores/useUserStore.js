export const UserStore = defineStore('user', () => {
  const { $swal } = useNuxtApp();
  const router = useRouter();
  const CartStore = useCartStore();
  const { CloseCart } = useModalStore();
  const { cartAry, deleteAll } = CartStore;
  // 總金額
  const { total } = storeToRefs(CartStore);
  // ===================
  // ... 優惠碼 ...
  // ===================
  const isCode = ref(false);
  const codeAry = ref(['TG87526', 'TG87530', 'TG87534']);
  const codeMessage = ref('');
  const codePrice = ref(0);
  // ===================
  // ... form ...
  // ===================
  const checkEmail = ref('');
  const checkName = ref('');
  const checkPhone = ref('');
  const checkCode = ref('測試碼:TG87526');
  const checkCredit = ref('');
  const checkDate = ref('');
  const checkPassword = ref('');

  const changeHandler = e => {
    const isNum = codeAry.value.includes(e.target.value);
    if (isNum && total.value < 3000) {
      isCode.value = false;
      codePrice.value = 0;
      codeMessage.value = '未達折扣門檻,金額3000';
    } else if (isNum) {
      isCode.value = true;
      codePrice.value = 1000;
      codeMessage.value = '優惠碼已生效';
    } else {
      isCode.value = false;
      codePrice.value = 0;
      codeMessage.value = '無效密碼';
    }
  };
  // ===================
  // ... 頁面處理 ...
  // ===================
  const firstCheck = () => {
    if (cartAry.data.length === 0) {
      $swal.fire({
        title: `請加入 至少一個 購物車品項！`,
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
      return;
    }
    CloseCart();
    router.replace({ path: `/Process/checkoutA` });
  };
  const nextCheck = () => {
    if (cartAry.data.length === 0) {
      $swal.fire({
        title: `請加入 至少一個 購物車品項！`,
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
      return;
    }
    router.replace({ path: `./checkoutB` });
  };
  const orderCheck = () => {
    if (
      checkEmail.value === '' ||
      checkName.value === '' ||
      checkPhone.value === ''
    ) {
      $swal.fire({
        title: `請輸入 完整資料`,
        icon: 'info',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
      return;
    }
    router.replace({ path: `./checkoutC` });
  };
  const createOrder = () => {
    if (
      checkCredit.value === '' ||
      checkDate.value === '' ||
      checkPassword.value === ''
    ) {
      $swal.fire({
        title: `請輸入 完整資料`,
        icon: 'info',
        showConfirmButton: false,
        timer: 2000,
        width: '350px',
      });
      return;
    }
    const userData = {
      email: checkEmail.value,
      name: checkName.value,
      tel: checkPhone.value,
      credit: checkCredit.value,
      date: checkDate.value,
      password: checkPassword.value,
    };
    // 清空購物車
    deleteAll();
    resetDate();
    // axios 送出資料
    // console.log(userData);
    router.replace({ path: `./checkoutD` });
  };
  const resetDate = () => {
    isCode.value = false;
    codeMessage.value = '';
    codePrice.value = '';
    checkEmail.value = '';
    checkName.value = '';
    checkPhone.value = '';
    checkCode.value = '測試碼:TG87526';
    checkCredit.value = '';
    checkDate.value = '';
    checkPassword.value = '';
  };
  return {
    isCode,
    codeMessage,
    codePrice,
    codeAry,
    // --------form-----------
    checkEmail,
    checkName,
    checkPhone,
    checkCode,
    checkCredit,
    checkDate,
    checkPassword,
    // --------handle-----------
    changeHandler,
    firstCheck,
    nextCheck,
    orderCheck,
    createOrder,
  };
});
