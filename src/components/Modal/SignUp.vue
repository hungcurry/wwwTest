<script setup>
const ModalStore = useModalStore();
const SignStore = useSignStore();
const { CloseSignUp, changeSign } = ModalStore;
const { isSignUp } = storeToRefs(ModalStore);
const { useName, useUpEmail, usePhone, useDate, useUpPassword } =
  storeToRefs(SignStore);
</script>
<!-- modal signUp -->
<template>
  <div
    class="dialog overflow-y-auto overflow-x-hidden"
    id="signUpModal"
    :class="{ active: isSignUp }"
  >
    <div class="modal-content w-full">
      <!-- modal-header -->
      <div class="modal-header flex items-center justify-between px-4 py-4">
        <h5 class="modal-title text-lg font-700">註冊 Sing up</h5>
        <span @click="CloseSignUp" class="material-icons block cursor-pointer"
          >close</span
        >
      </div>
      <!-- modal-body -->
      <form class="modal-body px-4 pt-6 pb-10">
        <div class="mb-4">
          <label for="useName" class="form-label mb-2 block text-black"
            >姓名</label
          >
          <input
            v-model.trim="useName"
            type="text"
            name="dataName"
            id="useName"
            class="form-control w-full rounded-lg border-0 p-2 text-base focus:border-primary focus:ring-primary"
            placeholder="請輸入 姓名"
            required
          />
        </div>
        <div class="mb-4">
          <label for="useUpEmail" class="form-label mb-2 block text-black"
            >電子郵件</label
          >
          <input
            v-model.trim="useUpEmail"
            type="email"
            name="dataMail"
            id="useUpEmail"
            class="form-control w-full rounded-lg border-0 p-2 text-base focus:border-primary focus:ring-primary"
            placeholder="請輸入 電子郵件"
            required
          />
        </div>
        <div class="mb-4">
          <label for="usePhone" class="form-label mb-2 block text-black"
            >手機</label
          >
          <input
            v-model.trim="usePhone"
            type="tel"
            name="dataNumber"
            id="usePhone"
            class="form-control w-full rounded-lg border-0 p-2 text-base focus:border-primary focus:ring-primary"
            placeholder="請輸入 手機"
            required
          />
        </div>
        <div class="mb-4">
          <label for="useDate" class="form-label mb-2 block text-black"
            >生日</label
          >
          <input
            v-model.trim="useDate"
            type="date"
            name="dataDate"
            id="useDate"
            class="form-control w-full flex-row rounded-lg border-0 p-2 text-base text-muted focus:border-primary focus:ring-primary"
            placeholder="請輸入 生日"
            required
          />
        </div>
        <div class="mb-4">
          <label for="useUpPassword" class="form-label mb-2 block text-black"
            >密碼</label
          >
          <input
            v-model.trim="useUpPassword"
            type="password"
            name="dataPassword"
            id="useUpPassword"
            class="form-control w-full rounded-lg border-0 p-2 text-base focus:border-primary focus:ring-primary"
            placeholder="請輸入 密碼"
            autocomplete="off"
            required
          />
        </div>
        <button
          type="submit"
          class="btn-secondary btn h-auto w-full rounded-full py-2 text-m text-white"
        >
          加入會員
        </button>
      </form>
      <div class="mb-8 bg-white px-2 text-center text-sm text-muted">
        已經有會員帳號了?
        <a href="javascript:;" class="text-primary" @click="changeSign"
          >來去登入</a
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog {
  background-color: white;
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
