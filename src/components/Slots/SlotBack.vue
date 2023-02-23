<script setup></script>
<template>
  <button
    class="block w-full text-center text-4xl text-primary"
    @click="handleError"
  >
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped></style>
