<script setup>
import SlotBack from '@/components/Slots/SlotBack.vue';
const state = ref(0);
const props = defineProps({
  error: Object,
});
const { error } = toRefs(props);
if (error.value.statusCode === '500') {
  state.value = Number(error.value.statusCode);
}
if (error.value.statusCode === '404') {
  state.value = Number(error.value.statusCode);
}
const handleError = () => clearError({ redirect: '/' });
</script>
<template>
  <NuxtLayout>
    <!-- 錯誤處理 -->
    <ErrorMessage :code="state" />
    <slot-back @click="handleError">回首頁</slot-back>
  </NuxtLayout>
</template>
<style lang="scss" scoped></style>
