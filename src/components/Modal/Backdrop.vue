<script setup>
const ModalStore = useModalStore();
const { CloseModal } = ModalStore;
const { isModal } = storeToRefs(ModalStore);
</script>
<template>
  <div
    class="modal-backdrop"
    :class="{ show: isModal }"
    v-if="isModal"
    @click="CloseModal"
  ></div>
</template>
<style lang="scss">
body.active {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
<style lang="scss" scoped>
.modal-backdrop {
  background-color: #000;
  cursor: pointer;
  height: 100vh;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: opacity 0.6s;
  width: 100vw;
  z-index: 998;
}
.show {
  opacity: 0.8;
  pointer-events: auto;
}
</style>
