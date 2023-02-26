<script setup>
const ModalStore = useModalStore();
const SignStore = useSignStore();
const { CloseSignIn, changeSign } = ModalStore;
const { isSignIn } = storeToRefs(ModalStore);
const { useInEmail, useInPassword } = storeToRefs(SignStore);
</script>
<!-- modal signIn -->
<template>
  <div
    class="dialog overflow-y-auto overflow-x-hidden bg-white dark:bg-dark"
    id="signInModal"
    :class="{ active: isSignIn }"
  >
    <div class="modal-content w-full">
      <!-- modal-header -->
      <div class="modal-header flex items-center justify-between px-4 py-4">
        <h5 class="modal-title text-lg font-700">登入 Sign in</h5>
        <span @click="CloseSignIn" class="material-icons block cursor-pointer"
          >close</span
        >
      </div>
      <!-- modal-body -->
      <form class="modal-body px-4 pt-6 pb-10">
        <div class="mb-4">
          <label for="useInEmail" class="form-label mb-2 block text-black"
            >帳號信箱</label
          >
          <input
            v-model.trim="useInEmail"
            type="email"
            name="dataMail"
            id="useInEmail"
            class="form-control w-full rounded-lg border-0 p-2 text-base text-muted focus:border-primary focus:ring-primary"
            placeholder="請輸入 電子郵件"
            required
          />
        </div>
        <div class="mb-2">
          <label for="useInPassword" class="form-label mb-2 block text-black"
            >密碼</label
          >
          <input
            v-model.trim="useInPassword"
            type="password"
            name="dataPassword"
            id="useInPassword"
            class="form-control w-full rounded-lg border-0 p-2 text-base text-muted focus:border-primary focus:ring-primary"
            placeholder="請輸入 密碼"
            autocomplete="off"
            required
          />
        </div>
        <a href="javascript:;" class="mb-4 text-sm text-secondary"
          >忘記密碼？</a
        >
        <button
          type="submit"
          class="btn-secondary btn h-auto w-full rounded-full py-2 text-m text-white"
        >
          登入
        </button>
      </form>
      <div class="mb-8 px-2 text-center text-sm text-muted">
        還沒有帳號？
        <a href="javascript:;" class="text-primary" @click="changeSign"
          >註冊一個帳號</a
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog {
  border-radius: 0.8rem;
  left: 50%;
  // 手機最大高度
  max-height: calc(100% - 2rem);
  max-width: 500px;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.6s, visibility 0.6s;
  visibility: hidden;
  width: 90%;
  z-index: 999;
  .modal-header {
    border-bottom: 0.1rem solid var.$fourthly;
    border-top: 0.4rem solid var.$secondary;
  }
  .form-control {
    background-color: #f7f7f7;
  }
}
.active {
  animation: show-animate 0.6s ease-in-out forwards;
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}
@keyframes show-animate {
  0% {
    top: -90%;
  }
  70% {
    top: 70%;
  }
  100% {
    top: 50%;
  }
}
</style>
