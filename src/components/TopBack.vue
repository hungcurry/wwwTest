<script setup>
// scroll
const backBtn = ref(null);
const classShow = ref(false);

const scrollFn = () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  if (scrollTop >= 40) {
    classShow.value = true;
  } else {
    classShow.value = false;
  }
};
const scrollToTopFn = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
onMounted(() => {
  if (backBtn.value) {
    backBtn.value.addEventListener('click', scrollToTopFn);
  }
  window.addEventListener('scroll', scrollFn);
});
onUnmounted(() => {
  if (backBtn.value) {
    backBtn.value.removeEventListener('click', scrollToTopFn);
  }
  window.removeEventListener('scroll', scrollFn);
});
</script>
<template>
  <div class="topBack" ref="backBtn" :class="{ show: classShow }"></div>
</template>
<style lang="scss" scoped>
.topBack {
  background-color: var.$secondary;
  border-radius: 50%;
  bottom: 70px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  opacity: 0;
  position: fixed;
  right: 15px;
  transition: opacity 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 50px;
  z-index: 999;
}
.topBack.show {
  opacity: 1;
}
.topBack::before {
  content: '▲';
  font-size: 20px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
