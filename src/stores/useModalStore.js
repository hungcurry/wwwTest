export const ModalStore = defineStore('modal', () => {
  let body = ref(null);
  const isModal = ref(false);
  const isCart = ref(false);
  const isSignIn = ref(false);
  const isSignUp = ref(false);
  // Cart
  const OpenCart = () => {
    isCart.value = !isCart.value;
    OpenModal();
  };
  const CloseCart = () => {
    isCart.value = !isCart.value;
    CloseModal();
  };

  // Sign in
  const OpenSignIn = () => {
    isSignIn.value = !isSignIn.value;
    OpenModal();
  };
  const CloseSignIn = () => {
    isSignIn.value = !isSignIn.value;
    CloseModal();
  };

  // Sign Up
  const OpenSignUp = () => {
    isSignUp.value = !isSignUp.value;
    OpenModal();
  };
  const CloseSignUp = () => {
    isSignUp.value = !isSignUp.value;
    CloseModal();
  };

  // change
  const changeSign = () => {
    isSignIn.value = !isSignIn.value;
    isSignUp.value = !isSignUp.value;
  };

  // Modal
  const OpenModal = () => {
    isModal.value = !isModal.value;
    body.classList.add('active');
  };
  const CloseModal = () => {
    isModal.value = !isModal.value;
    isCart.value = false;
    isSignIn.value = false;
    isSignUp.value = false;
    body.classList.remove('active');
  };

  onMounted(() => {
    body = document.querySelector('body');
  });

  return {
    isModal,
    isCart,
    isSignIn,
    isSignUp,
    // ------handle--------
    CloseModal,
    OpenCart,
    OpenSignIn,
    OpenSignUp,
    CloseCart,
    CloseSignIn,
    CloseSignUp,
    changeSign,
  };
});
